const LISTENING_AUDIO_BY_SCENARIO_ID: Record<string, string> = {
  'audio-1': '/audio/الاول.mp3',
  'audio-model2-1': '/audio/الثاني.mp3',
  'audio-model3-1': '/audio/الثالث.mp3',
};

export const getListeningAudioUrl = (scenarioId: string): string | undefined =>
  LISTENING_AUDIO_BY_SCENARIO_ID[scenarioId];
