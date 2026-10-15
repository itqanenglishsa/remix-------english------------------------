let activeAudio: HTMLAudioElement | null = null;
let activeAudioUrl: string | null = null;
let audioOperationId = 0;
let audioStateCallback: ((isPlaying: boolean) => void) | undefined;
let audioErrorCallback: (() => void) | undefined;

const cancelSpeechSynthesis = () => {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
};

const notifyAudioStopped = () => {
  const onStateChange = audioStateCallback;
  audioStateCallback = undefined;
  audioErrorCallback = undefined;
  onStateChange?.(false);
};

const stopAudioFile = () => {
  audioOperationId += 1;
  if (!activeAudio) return;
  notifyAudioStopped();
  activeAudio.pause();
  activeAudio.currentTime = 0;
  activeAudioUrl = null;
};

export const playAudioText = (
  text: string,
  onStart?: () => void,
  onEnd?: () => void
): boolean => {
  stopAudioFile();
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    return false;
  }

  cancelSpeechSynthesis();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'en-US';
  utterance.rate = 0.9; // Slightly slower for language learners
  utterance.pitch = 1.0;

  if (onStart) utterance.onstart = onStart;
  if (onEnd) utterance.onend = onEnd;
  utterance.onerror = () => {
    if (onEnd) onEnd();
  };

  window.speechSynthesis.speak(utterance);
  return true;
};

export const toggleAudioFile = async (
  src: string,
  onStateChange: (isPlaying: boolean) => void,
  onError: () => void
): Promise<void> => {
  cancelSpeechSynthesis();

  if (typeof window === 'undefined' || typeof Audio === 'undefined') {
    onError();
    return;
  }

  const audioUrl = new URL(src, window.location.href).href;
  if (activeAudio && activeAudioUrl === audioUrl) {
    audioStateCallback = onStateChange;
    audioErrorCallback = onError;
    if (activeAudio.paused) {
      const operationId = ++audioOperationId;
      try {
        await activeAudio.play();
      } catch {
        if (operationId !== audioOperationId) return;
        const onError = audioErrorCallback;
        notifyAudioStopped();
        onError?.();
      }
    } else {
      audioOperationId += 1;
      activeAudio.pause();
      onStateChange(false);
    }
    return;
  }

  stopAudioFile();
  activeAudio ??= new Audio();
  audioStateCallback = onStateChange;
  audioErrorCallback = onError;
  activeAudioUrl = audioUrl;
  const operationId = ++audioOperationId;
  activeAudio.onplay = () => audioStateCallback?.(true);
  activeAudio.onpause = () => audioStateCallback?.(false);
  activeAudio.onended = () => {
    const onStateChange = audioStateCallback;
    audioStateCallback = undefined;
    audioErrorCallback = undefined;
    activeAudioUrl = null;
    onStateChange?.(false);
  };
  activeAudio.onerror = () => {
    const onError = audioErrorCallback;
    notifyAudioStopped();
    activeAudioUrl = null;
    onError?.();
  };
  activeAudio.src = audioUrl;

  try {
    await activeAudio.play();
  } catch {
    if (operationId !== audioOperationId) return;
    const onError = audioErrorCallback;
    notifyAudioStopped();
    activeAudioUrl = null;
    onError?.();
  }
};

export const stopAudioText = () => {
  stopAudioFile();
  cancelSpeechSynthesis();
};
