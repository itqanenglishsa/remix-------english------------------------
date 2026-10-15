import React, { useState, useEffect, useRef } from 'react';
import { 
  Volume2, 
  CheckCircle, 
  Users, 
  User, 
  Play, 
  Pause, 
  RotateCcw,
  Lightbulb,
  Mic,
  Square,
  Download,
  Headphones,
  Plus,
  Trash2,
  Sparkles,
  Award,
  AlertCircle,
  Upload,
  ExternalLink,
  Check,
  Clock
} from 'lucide-react';
import { SPEAKING_GUIDE_DATA } from '../data/speakingGuideData';
import { playAudioText } from '../utils/speechHelper';
import { BrandSpeakingIcon } from './BrandIcons';

// Native Web Audio Beep (100% Client-Side, No API, No Network)
const playNativeBeep = (freq = 800, duration = 160) => {
  try {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;
    const ctx = new AudioContextClass();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, ctx.currentTime);
    gain.gain.setValueAtTime(0.12, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration / 1000);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + duration / 1000);
  } catch {
    // Ignore audio errors if audio context is blocked
  }
};

interface CustomQuestion {
  id: string;
  unit: number;
  titleAr: string;
  promptQuestionEn: string;
  promptQuestionAr: string;
  preparationPoints: string[];
}

export const SpeakingLab: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'individual' | 'shadowing' | 'group' | 'rubric'>('individual');
  const [selectedIndividualIdx, setSelectedIndividualIdx] = useState(0);

  // Custom user-added questions from localStorage
  const [customQuestions, setCustomQuestions] = useState<CustomQuestion[]>(() => {
    try {
      const saved = localStorage.getItem('itqan_custom_speaking_questions');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [showAddQuestionModal, setShowAddQuestionModal] = useState(false);
  const [showMicGuideModal, setShowMicGuideModal] = useState(false);

  const [newQUnit, setNewQUnit] = useState(3);
  const [newQTitle, setNewQTitle] = useState('');
  const [newQPromptEn, setNewQPromptEn] = useState('');
  const [newQPromptAr, setNewQPromptAr] = useState('');
  const [newQPoints, setNewQPoints] = useState('');

  // Combined questions list
  const allQuestions = [
    ...SPEAKING_GUIDE_DATA.individualQuestions,
    ...customQuestions.map(q => ({
      ...q,
      titleEn: q.titleAr,
      category: 'Individual' as const,
      suggestedPhrases: [
        { phrase: "In my opinion, this topic is important because...", context: "إبداء الرأي" },
        { phrase: "For example, when looking at real-life situations...", context: "طرح مثال" }
      ]
    }))
  ];

  const activeIndividualQ = allQuestions[selectedIndividualIdx] || allQuestions[0];

  // -------------------------------------------------------------
  // SIMULATION STATE (Prep 15s -> Speak 60s)
  // -------------------------------------------------------------
  const [simPhase, setSimPhase] = useState<'idle' | 'prep' | 'speaking' | 'review'>('idle');
  const [prepTime, setPrepTime] = useState(15);
  const [speakingTime, setSpeakingTime] = useState(60);

  // -------------------------------------------------------------
  // CLIENT-SIDE AUDIO RECORDER (MediaRecorder API - 0% AI, 0% API)
  // -------------------------------------------------------------
  const [isRecording, setIsRecording] = useState(false);
  const [recordedAudioUrl, setRecordedAudioUrl] = useState<string | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const streamRef = useRef<MediaStream | null>(null);

  // File Upload Refs
  const individualFileInputRef = useRef<HTMLInputElement | null>(null);
  const shadowingFileInputRef = useRef<HTMLInputElement | null>(null);

  // Self Evaluation Rubric Checklist State (5 items)
  const [checklist, setChecklist] = useState<boolean[]>([false, false, false, false, false]);

  // Shadowing Tab Active Sentence & Recording
  const [shadowingIdx, setShadowingIdx] = useState(0);
  const [shadowingRecording, setShadowingRecording] = useState(false);
  const [shadowingAudioUrl, setShadowingAudioUrl] = useState<string | null>(null);

  // Shadowing Self-Paced Timer Mode (No Mic required)
  const [shadowingTimer, setShadowingTimer] = useState(7);
  const [isShadowingTimerActive, setIsShadowingTimerActive] = useState(false);
  const [shadowingCompletedCount, setShadowingCompletedCount] = useState<number>(0);

  // -------------------------------------------------------------
  // Group Discussion Timer & Recording
  // -------------------------------------------------------------
  const [groupTimer, setGroupTimer] = useState(180); // 3 minutes default
  const [isGroupTimerRunning, setIsGroupTimerRunning] = useState(false);

  // Start Mic Recording for Individual Simulator
  const startRecording = async () => {
    try {
      if (recordedAudioUrl) {
        URL.revokeObjectURL(recordedAudioUrl);
        setRecordedAudioUrl(null);
      }
      audioChunksRef.current = [];

      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        throw new Error('المتصفح أو إطار المعاينة لا يدعم تسجيل الصوت مباشرة.');
      }

      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;

      const mimeType = MediaRecorder.isTypeSupported('audio/webm') 
        ? 'audio/webm' 
        : MediaRecorder.isTypeSupported('audio/mp4') 
          ? 'audio/mp4' 
          : '';

      const recorder = mimeType ? new MediaRecorder(stream, { mimeType }) : new MediaRecorder(stream);
      mediaRecorderRef.current = recorder;

      recorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      recorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: recorder.mimeType || 'audio/webm' });
        const url = URL.createObjectURL(audioBlob);
        setRecordedAudioUrl(url);
        if (streamRef.current) {
          streamRef.current.getTracks().forEach(track => track.stop());
          streamRef.current = null;
        }
      };

      recorder.start(150);
      setIsRecording(true);
      playNativeBeep(880, 180);
    } catch (err: unknown) {
      console.error('Microphone error:', err);
      handleMicErrorCaught(err);
      setIsRecording(false);
    }
  };

  // Stop Mic Recording
  const stopRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
      mediaRecorderRef.current.stop();
    }
    setIsRecording(false);
    playNativeBeep(520, 200);
  };

  // Shadowing specific recorder
  const startShadowingRecord = async () => {
    try {
      if (shadowingAudioUrl) {
        URL.revokeObjectURL(shadowingAudioUrl);
        setShadowingAudioUrl(null);
      }
      audioChunksRef.current = [];

      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        throw new Error('المتصفح لا يدعم الوصول المباشر للمايكروفون.');
      }

      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;

      const mimeType = MediaRecorder.isTypeSupported('audio/webm') 
        ? 'audio/webm' 
        : MediaRecorder.isTypeSupported('audio/mp4') 
          ? 'audio/mp4' 
          : '';

      const recorder = mimeType ? new MediaRecorder(stream, { mimeType }) : new MediaRecorder(stream);
      mediaRecorderRef.current = recorder;

      recorder.ondataavailable = (e) => {
        if (e.data.size > 0) audioChunksRef.current.push(e.data);
      };

      recorder.onstop = () => {
        const blob = new Blob(audioChunksRef.current, { type: recorder.mimeType || 'audio/webm' });
        const url = URL.createObjectURL(blob);
        setShadowingAudioUrl(url);
        if (streamRef.current) {
          streamRef.current.getTracks().forEach(t => t.stop());
          streamRef.current = null;
        }
      };

      recorder.start(100);
      setShadowingRecording(true);
      playNativeBeep(880, 150);
    } catch (err: unknown) {
      console.error('Microphone error in shadowing:', err);
      handleMicErrorCaught(err);
      setShadowingRecording(false);
    }
  };

  const stopShadowingRecord = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
      mediaRecorderRef.current.stop();
    }
    setShadowingRecording(false);
    playNativeBeep(520, 200);
  };

  // Comprehensive Mic Error Classifier
  const handleMicErrorCaught = (err: unknown) => {
    console.warn('Microphone permission or access error:', err);
    setShowMicGuideModal(true);
  };

  // Audio File Upload Handler (Student uploads recorded file from phone/computer)
  const handleAudioFileUpload = (e: React.ChangeEvent<HTMLInputElement>, target: 'individual' | 'shadowing') => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    if (target === 'individual') {
      if (recordedAudioUrl) URL.revokeObjectURL(recordedAudioUrl);
      setRecordedAudioUrl(url);
      setSimPhase('review');
    } else {
      if (shadowingAudioUrl) URL.revokeObjectURL(shadowingAudioUrl);
      setShadowingAudioUrl(url);
    }
  };

  // Shadowing Self-Paced Timer Mode (No microphone needed)
  const startShadowingSelfTimer = () => {
    setShadowingTimer(7);
    setIsShadowingTimerActive(true);
    playNativeBeep(520, 150);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isShadowingTimerActive && shadowingTimer > 0) {
      interval = setInterval(() => {
        setShadowingTimer((prev) => {
          if (prev <= 1) {
            setIsShadowingTimerActive(false);
            playNativeBeep(880, 260);
            setShadowingCompletedCount(c => c + 1);
            return 0;
          }
          if (prev <= 3) {
            playNativeBeep(620, 70);
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isShadowingTimerActive, shadowingTimer]);

  // Timer Tick Handling for Simulation (Prep & Speak)
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (simPhase === 'prep') {
      interval = setInterval(() => {
        setPrepTime((prev) => {
          if (prev <= 1) {
            // Prep ended! Start speaking & recording
            playNativeBeep(980, 300);
            setSimPhase('speaking');
            setSpeakingTime(60);
            startRecording();
            return 0;
          }
          if (prev <= 4) {
            playNativeBeep(600, 80);
          }
          return prev - 1;
        });
      }, 1000);
    } else if (simPhase === 'speaking') {
      interval = setInterval(() => {
        setSpeakingTime((prev) => {
          if (prev <= 1) {
            // 60 seconds finished! Stop recording
            stopRecording();
            setSimPhase('review');
            playNativeBeep(440, 400);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [simPhase]);

  // Group discussion timer tick
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isGroupTimerRunning && groupTimer > 0) {
      interval = setInterval(() => {
        setGroupTimer((prev) => {
          if (prev <= 1) {
            setIsGroupTimerRunning(false);
            playNativeBeep(500, 350);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isGroupTimerRunning, groupTimer]);

  // Start Simulation Flow
  const handleStartExamSimulation = (withPrep: boolean) => {
    if (withPrep) {
      setSimPhase('prep');
      setPrepTime(15);
      setSpeakingTime(60);
      playNativeBeep(660, 150);
    } else {
      setSimPhase('speaking');
      setSpeakingTime(60);
      startRecording();
    }
  };

  const handleResetSimulation = () => {
    if (isRecording) {
      stopRecording();
    }
    setSimPhase('idle');
    setPrepTime(15);
    setSpeakingTime(60);
    setChecklist([false, false, false, false, false]);
  };

  // Save Custom Question
  const handleSaveCustomQuestion = () => {
    if (!newQTitle.trim() || !newQPromptEn.trim()) return;
    const newQ: CustomQuestion = {
      id: `custom-${Date.now()}`,
      unit: newQUnit,
      titleAr: newQTitle.trim(),
      promptQuestionEn: newQPromptEn.trim(),
      promptQuestionAr: newQPromptAr.trim() || newQTitle.trim(),
      preparationPoints: newQPoints.split('\n').filter(p => p.trim().length > 0)
    };
    const updated = [...customQuestions, newQ];
    setCustomQuestions(updated);
    localStorage.setItem('itqan_custom_speaking_questions', JSON.stringify(updated));
    setShowAddQuestionModal(false);
    setNewQTitle('');
    setNewQPromptEn('');
    setNewQPromptAr('');
    setNewQPoints('');
    setSelectedIndividualIdx(allQuestions.length); // select the new one
  };

  const handleDeleteCustomQuestion = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const updated = customQuestions.filter(q => q.id !== id);
    setCustomQuestions(updated);
    localStorage.setItem('itqan_custom_speaking_questions', JSON.stringify(updated));
    setSelectedIndividualIdx(0);
  };

  // Calculate self-score
  const selfScore = checklist.filter(Boolean).length;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Top Header Deck */}
      <div className="pb-6 border-b border-slate-200">
        <div className="flex items-center gap-2 text-xs font-bold text-[#214ecf] bg-[#214ecf]/10 px-2.5 py-1 rounded-md w-fit mb-2">
          <BrandSpeakingIcon size={16} />
          <span>قسم التحدث الشفهي (Speaking Exam Lab)</span>
          <span aria-hidden="true">·</span>
          <span>5 درجات (25% من الدرجة الكلية)</span>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              معمل ومحاكي اختبار التحدث التفاعلي (Speaking Training & Simulator)
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowAddQuestionModal(true)}
              className="flex items-center gap-1.5 px-3.5 py-2 bg-white hover:bg-slate-50 border border-slate-200 text-[#214ecf] rounded-xl text-xs font-bold shadow-xs transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span>إضافة سؤال تحدث خاص</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Tab Navigation */}
      <div className="flex flex-wrap items-center gap-2">
        <button
          onClick={() => { setActiveTab('individual'); handleResetSimulation(); }}
          className={`flex items-center gap-2 px-4 py-2.5 text-xs font-bold rounded-xl transition-colors ${
            activeTab === 'individual'
              ? 'bg-[#214ecf] text-white shadow-xs'
              : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
          }`}
        >
          <User className="w-4 h-4" />
          <span>1. محاكي السؤال الفردي والتسجيل (Individual 60s)</span>
        </button>

        <button
          onClick={() => { setActiveTab('shadowing'); handleResetSimulation(); }}
          className={`flex items-center gap-2 px-4 py-2.5 text-xs font-bold rounded-xl transition-colors ${
            activeTab === 'shadowing'
              ? 'bg-[#214ecf] text-white shadow-xs'
              : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
          }`}
        >
          <Headphones className="w-4 h-4" />
          <span>2. تدريب الترديد والنطق (Shadowing Lab)</span>
        </button>

        <button
          onClick={() => { setActiveTab('group'); handleResetSimulation(); }}
          className={`flex items-center gap-2 px-4 py-2.5 text-xs font-bold rounded-xl transition-colors ${
            activeTab === 'group'
              ? 'bg-[#214ecf] text-white shadow-xs'
              : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
          }`}
        >
          <Users className="w-4 h-4" />
          <span>3. النقاش الجماعي (Group Discussion 3-4m)</span>
        </button>

        <button
          onClick={() => { setActiveTab('rubric'); handleResetSimulation(); }}
          className={`flex items-center gap-2 px-4 py-2.5 text-xs font-bold rounded-xl transition-colors ${
            activeTab === 'rubric'
              ? 'bg-[#214ecf] text-white shadow-xs'
              : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
          }`}
        >
          <CheckCircle className="w-4 h-4" />
          <span>4. معايير التقييم والنصائح (5/5 Rubric)</span>
        </button>
      </div>



      {/* ========================================================================= */}
      {/* 1. INDIVIDUAL QUESTION TAB & VOICE RECORDING SIMULATOR                     */}
      {/* ========================================================================= */}
      {activeTab === 'individual' && (
        <div className="space-y-6">
          {/* Question Selector Carousel / Badges */}
          <div className="flex flex-wrap items-center gap-2 pb-2">
            <span className="text-xs font-bold text-slate-500 ml-1">اختر السؤال:</span>
            {allQuestions.map((q, idx) => {
              const isCustom = q.id.startsWith('custom-');
              return (
                <button
                  key={q.id}
                  onClick={() => {
                    setSelectedIndividualIdx(idx);
                    handleResetSimulation();
                  }}
                  className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-xl transition-colors ${
                    selectedIndividualIdx === idx
                      ? 'bg-[#214ecf] text-white shadow-xs'
                      : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span>سؤال {idx + 1} ({q.unit === 1 ? 'الكتاب 2 · و1 ✨' : `الكتاب 1 · و${q.unit}`})</span>
                  {isCustom && (
                    <span
                      onClick={(e) => handleDeleteCustomQuestion(q.id, e)}
                      title="حذف السؤال المخصص"
                      className="hover:text-rose-300 text-white/80 p-0.5"
                    >
                      <Trash2 className="w-3 h-3" />
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left 7 Cols: Question Card & Audio Recorder Simulation */}
            <div className="lg:col-span-7 space-y-6">
              {/* Question Card */}
              <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-md ${
                    activeIndividualQ.unit === 1 
                      ? 'text-purple-900 bg-purple-100 border border-purple-200' 
                      : 'text-[#214ecf] bg-[#214ecf]/10'
                  }`}>
                    {activeIndividualQ.unit === 1 ? 'الكتاب الثاني (Book 2) · الوحدة 1' : `الكتاب الأول · الوحدة ${activeIndividualQ.unit}`} · {activeIndividualQ.titleAr}
                  </span>
                  <button
                    onClick={() => playAudioText(activeIndividualQ.promptQuestionEn)}
                    className="flex items-center gap-1 text-xs text-[#214ecf] hover:text-[#1a3ea8] font-bold py-1 px-2 hover:bg-[#214ecf]/5 rounded-lg transition-colors"
                  >
                    <Volume2 className="w-4 h-4" />
                    <span>استمع للسؤال (صوت المتصفح)</span>
                  </button>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 font-brand-en leading-relaxed">
                    "{activeIndividualQ.promptQuestionEn}"
                  </h3>
                  <p className="text-xs text-slate-500 font-sans mt-1.5">
                    {activeIndividualQ.promptQuestionAr}
                  </p>
                </div>

                {/* Key Points to hit */}
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100 text-xs space-y-1.5">
                  <span className="font-bold text-slate-700 block text-[11px]">عناصر الإجابة المتوقعة (Speaking Points):</span>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {activeIndividualQ.preparationPoints.map((pt, pIdx) => (
                      <span key={pIdx} className="bg-white border border-slate-200 px-2.5 py-1 rounded-lg text-slate-700 text-[11px] flex items-center gap-1">
                        <CheckCircle className="w-3 h-3 text-emerald-600 shrink-0" />
                        <span>{pt}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Simulation & Recorder Control Deck */}
              <div className="p-6 bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl shadow-sm space-y-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ea9835] animate-pulse" />
                    <span className="text-xs font-bold text-white tracking-wide">
                      محاكي الاختبار الفعلي (Exam Simulator):
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-300">
                    {simPhase === 'prep' && '⏳ مرحلة التحضير (15 ثانية)'}
                    {simPhase === 'speaking' && '🎙️ مرحلة التحدث والتسجيل (60 ثانية)'}
                    {simPhase === 'review' && '✅ اكتمل التسجيل! استمع لجوابك'}
                    {simPhase === 'idle' && 'جاهز للبدء'}
                  </span>
                </div>

                {/* Live Countdown Display */}
                <div className="text-center py-3">
                  {simPhase === 'prep' && (
                    <div className="space-y-1">
                      <span className="text-xs text-[#ea9835] font-bold block">
                        وقت التفكير والتحضير (Preparation Time):
                      </span>
                      <div className="text-6xl font-black font-brand-en tabular-nums text-[#ea9835]">
                        00:{prepTime.toString().padStart(2, '0')}
                      </div>
                      <p className="text-[11px] text-slate-300">
                        اقرأ السؤال ورتب أفكارك.. سيبدأ التسجيل الصوتي تلقائياً عند انتهاء الوقت
                      </p>
                    </div>
                  )}

                  {simPhase === 'speaking' && (
                    <div className="space-y-2">
                      <div className="flex items-center justify-center gap-2 text-rose-400 text-xs font-bold animate-pulse">
                        <span className="w-3 h-3 rounded-full bg-rose-500 inline-block" />
                        <span>جاري تسجيل صوتك عبر المايكروفون (Speak Now)...</span>
                      </div>
                      <div className="text-6xl font-black font-brand-en tabular-nums text-white">
                        00:{speakingTime.toString().padStart(2, '0')}
                      </div>
                      <div className="w-full bg-slate-700/80 rounded-full h-2 overflow-hidden">
                        <div 
                          className="bg-rose-500 h-2 transition-all duration-1000 ease-linear rounded-full"
                          style={{ width: `${((60 - speakingTime) / 60) * 100}%` }}
                        />
                      </div>
                    </div>
                  )}

                  {(simPhase === 'idle' || simPhase === 'review') && (
                    <div className="space-y-1">
                      <span className="text-xs text-slate-300 block">الوقت المخصص للاختبار الفعلي:</span>
                      <div className="text-5xl font-black font-brand-en tabular-nums text-white/90">
                        01:00
                      </div>
                      <span className="text-[11px] text-slate-400 block">سجل اجابتك</span>
                    </div>
                  )}
                </div>

                {/* Interactive Action Buttons */}
                <div className="flex flex-wrap items-center justify-center gap-3 pt-2 border-t border-slate-700/80">
                  {simPhase === 'idle' && (
                    <>
                      <button
                        onClick={() => handleStartExamSimulation(true)}
                        className="flex items-center gap-2 px-5 py-2.5 bg-[#214ecf] hover:bg-[#1a3ea8] text-white rounded-xl text-xs font-bold shadow-xs transition-colors"
                      >
                        <Play className="w-4 h-4 fill-current" />
                        <span>بدء المحاكاة مع وقت تحضير (15 ثانية)</span>
                      </button>

                      <button
                        onClick={() => handleStartExamSimulation(false)}
                        className="flex items-center gap-2 px-4 py-2.5 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs font-bold shadow-xs transition-colors"
                      >
                        <Mic className="w-4 h-4" />
                        <span>تسجيل مباشر فوراً (بدون تحضير)</span>
                      </button>
                    </>
                  )}

                  {simPhase === 'prep' && (
                    <>
                      <button
                        onClick={() => {
                          setSimPhase('speaking');
                          setSpeakingTime(60);
                          startRecording();
                        }}
                        className="flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-colors"
                      >
                        <Mic className="w-4 h-4" />
                        <span>تخطي التحضير والبدء بالتسجيل فوراً</span>
                      </button>

                      <button
                        onClick={handleResetSimulation}
                        className="flex items-center gap-1.5 px-3.5 py-2 bg-slate-700 hover:bg-slate-600 text-slate-200 rounded-xl text-xs font-medium transition-colors"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>إلغاء</span>
                      </button>
                    </>
                  )}

                  {simPhase === 'speaking' && (
                    <>
                      <button
                        onClick={() => {
                          stopRecording();
                          setSimPhase('review');
                        }}
                        className="flex items-center gap-2 px-5 py-2.5 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs font-bold shadow-xs transition-colors animate-pulse"
                      >
                        <Square className="w-4 h-4 fill-current" />
                        <span>إنهاء التسجيل وحفظ الإجابة</span>
                      </button>

                      <button
                        onClick={handleResetSimulation}
                        className="flex items-center gap-1.5 px-3.5 py-2.5 bg-slate-700 hover:bg-slate-600 text-slate-200 rounded-xl text-xs font-medium transition-colors"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>إلغاء التسجيل</span>
                      </button>
                    </>
                  )}

                  {simPhase === 'review' && (
                    <button
                      onClick={handleResetSimulation}
                      className="flex items-center gap-2 px-4 py-2.5 bg-slate-700 hover:bg-slate-600 text-white rounded-xl text-xs font-bold transition-colors"
                    >
                      <RotateCcw className="w-4 h-4" />
                      <span>تدريب جديد / إعادة المحاولة</span>
                    </button>
                  )}
                </div>

                {/* Audio Playback Box after recording or upload */}
                {recordedAudioUrl && (
                  <div className="p-4 bg-slate-800/90 border border-slate-700 rounded-xl space-y-3 mt-3">
                    <div className="flex items-center justify-between text-xs font-bold text-emerald-400">
                      <span className="flex items-center gap-1.5">
                        <CheckCircle className="w-4 h-4 text-emerald-400" />
                        <span>تم حفظ تسجيلك الصوتي بنجاح (استمع لنفسك):</span>
                      </span>
                      <a
                        href={recordedAudioUrl}
                        download={`speaking_practice_unit${activeIndividualQ.unit}.webm`}
                        className="flex items-center gap-1 text-[11px] text-slate-300 hover:text-white underline"
                      >
                        <Download className="w-3 h-3" />
                        <span>تنزيل التسجيل (Audio file)</span>
                      </a>
                    </div>
                    
                    <audio
                      controls
                      src={recordedAudioUrl}
                      className="w-full h-10 rounded-lg accent-[#214ecf]"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Right 5 Cols: Starter Phrases & Self-Assessment Rubric (5/5) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Starter Phrases */}
              <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-3">
                <span className="font-bold text-slate-800 text-xs block">
                  💡 جمل افتتاحية مقترحة (Sentence Starters):
                </span>
                <div className="space-y-2">
                  {activeIndividualQ.suggestedPhrases.map((phrase, phIdx) => (
                    <div 
                      key={phIdx} 
                      className="p-3 bg-[#214ecf]/5 hover:bg-[#214ecf]/10 rounded-xl border border-[#214ecf]/10 transition-colors flex items-start justify-between gap-2"
                    >
                      <div>
                        <span className="font-brand-en text-slate-900 font-bold text-xs block">
                          "{phrase.phrase}"
                        </span>
                        <span className="text-[10px] text-slate-500 font-sans block mt-0.5">
                          {phrase.context}
                        </span>
                      </div>
                      <button
                        onClick={() => playAudioText(phrase.phrase)}
                        title="استمع للجملة"
                        className="text-slate-400 hover:text-[#214ecf] p-1 shrink-0"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Self-Assessment Rubric Checklist (5/5) */}
              <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-[#ea9835]" />
                    <span className="font-bold text-slate-900 text-xs">
                      التقييم الذاتي لإجابتك (Self-Assessment):
                    </span>
                  </div>
                  <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
                    selfScore >= 4 ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-700'
                  }`}>
                    درجتك: {selfScore} من 5
                  </span>
                </div>

                <p className="text-[11px] text-slate-500 leading-relaxed">
                  بعد الاستماع لتسجيلك الصوتي، ضع علامة صح أمام كل معيار حققته لقياس مستواك:
                </p>

                <div className="space-y-2.5 text-xs">
                  {[
                    "تحدثت لمدة لا تقل عن 45 ثانية متواصلة بدون توقف طويل أو صمت.",
                    "بدأت بجملة افتتاحية واضحة تجيب مباشرة عن السؤال.",
                    "استشهدت بمفردات وأفكار من الوحدة (مثل الدراسات، أو التجارب).",
                    "استخدمت أدوات ربط وقواعد صحيحة (because, in addition, for example).",
                    "كان نطقي واضحاً ومخارج الحروف مفهومة ونبرتي واثقة."
                  ].map((criterion, cIdx) => (
                    <label 
                      key={cIdx}
                      className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-slate-50 cursor-pointer transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={checklist[cIdx]}
                        onChange={(e) => {
                          const updated = [...checklist];
                          updated[cIdx] = e.target.checked;
                          setChecklist(updated);
                        }}
                        className="mt-0.5 rounded text-[#214ecf] focus:ring-[#214ecf] w-4 h-4 cursor-pointer"
                      />
                      <span className={`text-xs ${checklist[cIdx] ? 'font-bold text-slate-900' : 'text-slate-600'}`}>
                        {criterion}
                      </span>
                    </label>
                  ))}
                </div>

                {selfScore === 5 && (
                  <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-xs font-bold flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>ممتاز جداً! إجابتك مستوفية لجميع معايير الدرجة الكاملة (5/5).</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 2. SHADOWING & PRONUNCIATION LAB (With Voice Recorder + Self Timer Mode)   */}
      {/* ========================================================================= */}
      {activeTab === 'shadowing' && (
        <div className="space-y-6">
          <div className="p-4 bg-[#214ecf]/5 border border-[#214ecf]/15 rounded-2xl text-xs space-y-1 text-slate-700">
            <span className="font-bold text-[#214ecf] block text-sm">
              🎧 تقنية الترديد الصوتي (Shadowing Practice):
            </span>
            <p className="leading-relaxed">
              استمع للجملة النموذجية من المتحدث، ثم رددها بصوت مسموع. يمكنك استخدام <strong>التسجيل الصوتي المباشر</strong> بالمايكروفون، أو <strong>وضع الترديد بالمؤقت الذاتي (بدون مايك)</strong> للتدريب الفوري!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* List of Sentences */}
            <div className="lg:col-span-5 space-y-2">
              <span className="text-xs font-bold text-slate-500 block mb-1">
                اختر الجملة المستهدفة من وحدات المنهج:
              </span>
              {(SPEAKING_GUIDE_DATA.shadowingSentences || []).map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setShadowingIdx(idx);
                    setIsShadowingTimerActive(false);
                    if (shadowingAudioUrl) {
                      URL.revokeObjectURL(shadowingAudioUrl);
                      setShadowingAudioUrl(null);
                    }
                  }}
                  className={`w-full text-right p-3.5 rounded-xl border text-xs transition-all flex flex-col gap-1 ${
                    shadowingIdx === idx
                      ? 'bg-[#214ecf] text-white border-[#214ecf] shadow-xs'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                      shadowingIdx === idx ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
                    }`}>
                      الوحدة {item.unit} · {item.targetSkill}
                    </span>
                    <span className="text-[11px] opacity-80 font-bold">جملة {idx + 1}</span>
                  </div>
                  <span className="font-brand-en font-bold mt-1 text-[11px] leading-snug">
                    "{item.sentenceEn}"
                  </span>
                </button>
              ))}
            </div>

            {/* Active Shadowing Practice Bench */}
            <div className="lg:col-span-7">
              {(() => {
                const item = (SPEAKING_GUIDE_DATA.shadowingSentences || [])[shadowingIdx];
                if (!item) return null;
                return (
                  <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#214ecf] bg-[#214ecf]/10 px-2.5 py-1 rounded-md">
                        الوحدة {item.unit} · القاعدة: {item.targetSkill}
                      </span>
                      <span className="text-xs text-slate-400">التدريب {shadowingIdx + 1} من 8</span>
                    </div>

                    {/* Model Sentence Audio Display */}
                    <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <span className="text-[10px] font-bold text-slate-400 block mb-1">الخطوة 1: استمع للجملة النموذجية:</span>
                          <p className="text-base font-bold text-slate-900 font-brand-en leading-relaxed">
                            "{item.sentenceEn}"
                          </p>
                          <p className="text-xs text-slate-600 mt-2 font-sans">
                            {item.sentenceAr}
                          </p>
                        </div>
                        <button
                          onClick={() => playAudioText(item.sentenceEn)}
                          className="flex items-center gap-1.5 px-3.5 py-2 bg-[#214ecf] hover:bg-[#1a3ea8] text-white rounded-xl text-xs font-bold shrink-0 shadow-xs transition-colors"
                        >
                          <Volume2 className="w-4 h-4" />
                          <span>استمع للنطق</span>
                        </button>
                      </div>
                    </div>

                    {/* Step 2: Practice Repeating Bench */}
                    <div className="p-5 bg-slate-900 text-white rounded-2xl space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-[#ea9835]">
                          الخطوة 2: ردد الجملة بنفسك (اختر طريقتك المفضلة):
                        </span>
                        {shadowingRecording && (
                          <span className="text-xs text-rose-400 font-bold animate-pulse flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                            <span>جاري تسجيل صوتك بالمايكروفون...</span>
                          </span>
                        )}
                        {isShadowingTimerActive && (
                          <span className="text-xs text-emerald-400 font-bold animate-pulse flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5" />
                            <span>مؤقت الترديد: {shadowingTimer} ثوانٍ متبقية</span>
                          </span>
                        )}
                      </div>

                      {/* Timer Visual Countdown Bar if active */}
                      {isShadowingTimerActive && (
                        <div className="p-3 bg-emerald-950/60 border border-emerald-500/30 rounded-xl space-y-2">
                          <div className="flex items-center justify-between text-xs text-emerald-300 font-bold">
                            <span>ردد الآن بصوت مسموع:</span>
                            <span className="text-lg font-brand-en">{shadowingTimer}s</span>
                          </div>
                          <div className="w-full bg-emerald-950 rounded-full h-2 overflow-hidden">
                            <div 
                              className="bg-emerald-400 h-2 transition-all duration-1000 ease-linear rounded-full"
                              style={{ width: `${((7 - shadowingTimer) / 7) * 100}%` }}
                            />
                          </div>
                          <p className="text-[11px] text-emerald-200 font-brand-en italic text-center">
                            "{item.sentenceEn}"
                          </p>
                        </div>
                      )}

                      {/* Repetition Action Options */}
                      <div className="flex flex-wrap items-center gap-2.5">

                        {/* Option B: Mic Recording */}
                        {!shadowingRecording ? (
                          <button
                            onClick={startShadowingRecord}
                            disabled={isShadowingTimerActive}
                            className="flex items-center gap-2 px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs font-bold shadow-xs transition-colors disabled:opacity-50"
                          >
                            <Mic className="w-3.5 h-3.5" />
                            <span>تسجيل بالمايكروفون</span>
                          </button>
                        ) : (
                          <button
                            onClick={stopShadowingRecord}
                            className="flex items-center gap-2 px-4 py-2 bg-rose-500 hover:bg-rose-600 text-white rounded-xl text-xs font-bold shadow-xs transition-colors animate-pulse"
                          >
                            <Square className="w-3.5 h-3.5 fill-current" />
                            <span>إنهاء التسجيل</span>
                          </button>
                        )}



                        <button
                          onClick={() => playAudioText(item.sentenceEn)}
                          className="flex items-center gap-1.5 px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-medium transition-colors mr-auto"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                          <span>إعادة الاستماع للأصل</span>
                        </button>
                      </div>

                      {/* Playback student's recording if exists */}
                      {shadowingAudioUrl && (
                        <div className="pt-3 border-t border-slate-800 space-y-2">
                          <div className="flex items-center justify-between text-xs text-emerald-400 font-bold">
                            <span>✅ تسجيلك الصوتي للجملة:</span>
                            <a 
                              href={shadowingAudioUrl} 
                              download={`shadowing_sentence_${shadowingIdx + 1}.webm`}
                              className="text-[10px] text-slate-400 hover:text-white underline flex items-center gap-1"
                            >
                              <Download className="w-3 h-3" />
                              <span>تنزيل</span>
                            </a>
                          </div>
                          <audio
                            controls
                            src={shadowingAudioUrl}
                            className="w-full h-10 rounded-lg"
                          />
                        </div>
                      )}

                      {/* Completed Badge */}
                      {shadowingCompletedCount > 0 && (
                        <div className="text-[11px] text-emerald-300 flex items-center gap-1.5 pt-1">
                          <Check className="w-3.5 h-3.5" />
                          <span>أتممت الترديد بنجاح! انتقل للجملة التالية لزيادة طلاقتك.</span>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 3. GROUP DISCUSSION TAB                                                  */}
      {/* ========================================================================= */}
      {activeTab === 'group' && (
        <div className="space-y-6">
          <div className="p-4 bg-[#214ecf]/5 border border-[#214ecf]/15 rounded-2xl text-xs space-y-1 text-slate-700">
            <span className="font-bold text-[#214ecf] block">تعليمات النقاش الجماعي (Group Discussion):</span>
            <p>
              يطلب الأستاذ من مجموعة (3-4 طلاب) مناقشة أحد مواضيع الوحدات (الوحدات 3، 4، 5، أو 6 من الكتاب الأول، أو الوحدة 1 من الكتاب الثاني) لمدة 3 إلى 4 دقائق. ركز على التفاعل الإيجابي مع زملائك، والاستماع الجيد، واستخدام عبارات إبداء الرأي والاعتراض المهذب.
            </p>
          </div>

          {/* Group Timer Control Deck */}
          <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-xs flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-slate-700">مؤقت تدريب المجموعة:</span>
              <div className="text-2xl font-black font-brand-en tabular-nums text-[#214ecf]">
                {Math.floor(groupTimer / 60).toString().padStart(2, '0')}:{(groupTimer % 60).toString().padStart(2, '0')}
              </div>
            </div>

            <div className="flex items-center gap-2">
              {!isGroupTimerRunning ? (
                <button
                  onClick={() => setIsGroupTimerRunning(true)}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 bg-[#214ecf] hover:bg-[#1a3ea8] text-white rounded-xl text-xs font-bold transition-colors"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>بدء المؤقت</span>
                </button>
              ) : (
                <button
                  onClick={() => setIsGroupTimerRunning(false)}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 bg-[#ea9835] hover:bg-[#d48422] text-white rounded-xl text-xs font-bold transition-colors"
                >
                  <Pause className="w-3.5 h-3.5" />
                  <span>إيقاف مؤقت</span>
                </button>
              )}

              <button
                onClick={() => {
                  setIsGroupTimerRunning(false);
                  setGroupTimer(180);
                }}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-xl text-xs font-medium transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>إعادة (3 دقائق)</span>
              </button>

              <button
                onClick={() => {
                  setIsGroupTimerRunning(false);
                  setGroupTimer(240);
                }}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-xl text-xs font-medium transition-colors"
              >
                <span>ضبط (4 دقائق)</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SPEAKING_GUIDE_DATA.groupDiscussionTopics.map((topic) => (
              <div
                key={topic.id}
                className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded ${
                      topic.unit === 1 
                        ? 'text-purple-900 bg-purple-100 border border-purple-200' 
                        : 'text-[#214ecf] bg-[#214ecf]/10'
                    }`}>
                      {topic.unit === 1 ? 'الكتاب الثاني (Book 2) · الوحدة 1 ✨' : `الكتاب الأول · الوحدة ${topic.unit}`}
                    </span>
                    <span className="text-[11px] text-slate-400">3-4 دقائق</span>
                  </div>

                  <h3 className="text-sm font-bold text-slate-900 mb-1 leading-snug">
                    {topic.titleAr}
                  </h3>
                  <p className="text-xs text-slate-500 font-brand-en mb-3">
                    {topic.titleEn}
                  </p>

                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs font-brand-en text-slate-800 mb-3">
                    <strong className="block text-[10px] text-slate-500 font-sans mb-1">سؤال النقاش:</strong>
                    "{topic.promptQuestionEn}"
                  </div>

                  <div className="space-y-1 text-xs text-slate-600 mb-3">
                    <span className="font-bold text-slate-800 block text-[11px]">نقاط للتركيز عليها:</span>
                    {topic.preparationPoints.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-1.5">
                        <span className="text-[#214ecf] font-bold">·</span>
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 space-y-1.5 text-xs">
                  <span className="font-bold text-[#214ecf] block text-[11px]">عبارات ذكية للنقاش:</span>
                  {topic.suggestedPhrases.map((phrase, phIdx) => (
                    <div key={phIdx} className="p-2.5 bg-[#214ecf]/5 rounded-xl border border-[#214ecf]/10">
                      <div className="flex items-center justify-between font-brand-en font-bold text-slate-900 text-[11px]">
                        <span>"{phrase.phrase}"</span>
                        <button
                          onClick={() => playAudioText(phrase.phrase)}
                          className="text-slate-400 hover:text-[#214ecf]"
                        >
                          <Volume2 className="w-3 h-3" />
                        </button>
                      </div>
                      <span className="text-[10px] text-slate-500 font-sans block mt-0.5">{phrase.context}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 4. RUBRIC CHECKLIST & STRATEGIES                                         */}
      {/* ========================================================================= */}
      {activeTab === 'rubric' && (
        <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 shadow-xs max-w-3xl mx-auto space-y-6">
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-1">
              معايير تقييم اختبار التحدث الشفهي (Speaking Rubric - 5 Marks)
            </h3>
            <p className="text-xs text-slate-600">
              استمارة التقييم الذاتي المعتمدة في كتاب Q: Skills for Success Book 1 (Check & Reflect).
            </p>
          </div>

          <div className="space-y-3 text-xs">
            {SPEAKING_GUIDE_DATA.examInfo.criteria.map((c, idx) => (
              <div key={idx} className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#214ecf] text-white flex items-center justify-center font-bold text-[11px] font-brand-en">
                    {idx + 1}
                  </span>
                  <span className="font-bold text-slate-900">{c}</span>
                </div>
                <span className="text-[11px] text-emerald-800 font-bold bg-emerald-50 px-2 py-0.5 rounded">
                  1 درجة
                </span>
              </div>
            ))}
          </div>

          <div className="p-4 bg-[#ea9835]/10 border border-[#ea9835]/30 rounded-2xl text-xs space-y-1.5 text-slate-800">
            <span className="font-bold flex items-center gap-1.5 text-[#ea9835]">
              <Lightbulb className="w-4 h-4 text-[#ea9835]" />
              <span>نصائح ذهبية للحصول على الدرجة الكاملة (5/5):</span>
            </span>
            <p>1. لا تسكت لأكثر من ثانيتين؛ إذا نسيت كلمة استخدم عبارات المماطلة المهذبة: "Well, that is an interesting question..."</p>
            <p>2. حافظ على التواصل البصري والابتسامة الطبيعية أثناء الحديث مع الأستاذ وزملائك.</p>
            <p>3. نوّع في استخدام القواعد المستهدفة (gerunds, be going to, sentences with because).</p>
          </div>
        </div>
      )}

      {/* Modal: How to Enable Microphone Guide */}
      {showMicGuideModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 space-y-5 shadow-xl border border-slate-200">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <span className="text-xl">🎙️</span>
                <h3 className="text-base font-bold text-slate-900">
                  كيفية تمكين المايكروفون في المتصفح
                </h3>
              </div>
              <button
                onClick={() => setShowMicGuideModal(false)}
                className="text-slate-400 hover:text-slate-600 font-bold text-sm p-1"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3.5 text-xs text-slate-700 leading-relaxed">
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5">
                <span className="font-bold text-[#214ecf] block">
                  الخطوة 1: اضغط على أيقونة القفل أو الإعدادات 🔒
                </span>
                <p>
                  في أعلى المتصفح بجوار رابط الموقع في شريط العناوين (URL)، انقر على رمز <strong>القفل 🔒</strong> أو <strong>أيقونة ضبط الموقع</strong>.
                </p>
              </div>

              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5">
                <span className="font-bold text-[#214ecf] block">
                  الخطوة 2: تغيير خيار الميكروفون إلى "السماح" (Allow)
                </span>
                <p>
                  ابحث عن <strong>الميكروفون (Microphone)</strong> وقم بتحويله من "حظر" إلى <strong>"سماح" (Allow)</strong> أو تفعيل الزر المفعل.
                </p>
              </div>

              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5">
                <span className="font-bold text-[#214ecf] block">
                  الخطوة 3: تحديث الصفحة (F5) أو إعادة المحاولة
                </span>
                <p>
                  قم بتحديث الصفحة، ثم اضغط على زر التسجيل وسيبدأ المايكروفون بتسجيل صوتك مباشرة.
                </p>
              </div>

              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 space-y-1">
                <span className="font-bold block">💡 لا تملك مايكروفوناً أو تفضل التدريب السريع؟</span>
                <p>
                  يمكنك استخدام <strong>"وضع الترديد بالمؤقت الذاتي (بدون مايك)"</strong> لقراءة وترديد الجملة مع المؤقت والتأكد من مخارج الحروف بسهولة!
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-slate-100">
              <a
                href={window.location.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs text-[#214ecf] hover:underline font-bold"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>فتح في تاب مستقل (بدون إطار)</span>
              </a>

              <button
                onClick={() => setShowMicGuideModal(false)}
                className="px-4 py-2 bg-[#214ecf] hover:bg-[#1a3ea8] text-white text-xs font-bold rounded-xl"
              >
                فهمت، حسناً
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal: Add Custom Question */}
      {showAddQuestionModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 space-y-4 shadow-xl border border-slate-200">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <h3 className="text-base font-bold text-slate-900">
                إضافة سؤال تحدث تدريبي جديد
              </h3>
              <button
                onClick={() => setShowAddQuestionModal(false)}
                className="text-slate-400 hover:text-slate-600 text-sm font-bold p-1"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <label className="block text-slate-700 font-bold mb-1">رقم الوحدة:</label>
                <select
                  value={newQUnit}
                  onChange={(e) => setNewQUnit(Number(e.target.value))}
                  className="w-full p-2 bg-slate-50 border border-slate-200 rounded-xl"
                >
                  <option value={3}>الوحدة 3 (Unit 3)</option>
                  <option value={4}>الوحدة 4 (Unit 4)</option>
                  <option value={5}>الوحدة 5 (Unit 5)</option>
                  <option value={6}>الوحدة 6 (Unit 6)</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-700 font-bold mb-1">عنوان الموضوع (بالعربي):</label>
                <input
                  type="text"
                  placeholder="مثال: أهمية ممارسة الرياضة في الصباح"
                  value={newQTitle}
                  onChange={(e) => setNewQTitle(e.target.value)}
                  className="w-full p-2 bg-slate-50 border border-slate-200 rounded-xl"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-bold mb-1">السؤال بالإنجليزية (نص السؤال الذي ستجيب عنه):</label>
                <input
                  type="text"
                  placeholder="e.g. Why is morning exercise beneficial for health? Give two reasons."
                  value={newQPromptEn}
                  onChange={(e) => setNewQPromptEn(e.target.value)}
                  className="w-full p-2 bg-slate-50 border border-slate-200 rounded-xl font-brand-en"
                  dir="ltr"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-bold mb-1">ترجمة السؤال (اختياري):</label>
                <input
                  type="text"
                  placeholder="ترجمة السؤال لمساعدتك"
                  value={newQPromptAr}
                  onChange={(e) => setNewQPromptAr(e.target.value)}
                  className="w-full p-2 bg-slate-50 border border-slate-200 rounded-xl"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-bold mb-1">عناصر الإجابة المتوقعة (سطر لكل نقطة):</label>
                <textarea
                  rows={3}
                  placeholder="Boosts energy levels&#10;Improves focus throughout the day"
                  value={newQPoints}
                  onChange={(e) => setNewQPoints(e.target.value)}
                  className="w-full p-2 bg-slate-50 border border-slate-200 rounded-xl font-brand-en"
                  dir="ltr"
                />
              </div>
            </div>

            <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-100">
              <button
                onClick={() => setShowAddQuestionModal(false)}
                className="px-4 py-2 text-xs text-slate-600 hover:bg-slate-100 rounded-xl font-medium"
              >
                إلغاء
              </button>
              <button
                onClick={handleSaveCustomQuestion}
                disabled={!newQTitle.trim() || !newQPromptEn.trim()}
                className="px-4 py-2 text-xs bg-[#214ecf] hover:bg-[#1a3ea8] text-white rounded-xl font-bold disabled:opacity-50"
              >
                حفظ السؤال
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
