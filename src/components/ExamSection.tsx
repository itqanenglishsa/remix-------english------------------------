import React, { useState, useEffect, useMemo } from 'react';
import { 
  CheckCircle, 
  XCircle, 
  Clock, 
  Flag, 
  RotateCcw, 
  Award, 
  Volume2, 
  ChevronRight, 
  ChevronLeft, 
  Eye, 
  EyeOff, 
  Sparkles, 
  Play, 
  Square,
  Upload,
  FileAudio,
  Headphones
} from 'lucide-react';
import { 
  MOCK_EXAM_QUESTIONS, 
  ALL_READING_PASSAGES, 
  ALL_LISTENING_SCENARIOS, 
  EXAM_MODELS,
  ExamModel,
  ExamQuestion 
} from '../data/mockExamData';
import { playAudioText, stopAudioText, toggleAudioFile } from '../utils/speechHelper';
import { getListeningAudioUrl } from '../data/audioAssets';
import { 
  BrandReadingIcon, 
  BrandWritingIcon, 
  BrandSpeakingIcon, 
  BrandListeningIcon 
} from './BrandIcons';

interface ExamSectionProps {
  initialUnitFilter?: number | 'all';
}

export const ExamSection: React.FC<ExamSectionProps> = ({ initialUnitFilter = 'all' }) => {
  // Mode selection: 'full' (50 Questions) or 'practice' (Filtered by skill)
  const [examMode, setExamMode] = useState<'full' | 'practice'>('full');
  const [practiceSkill, setPracticeSkill] = useState<'reading' | 'vocabulary' | 'grammar' | 'listening'>('grammar');
  const [unitFilter, setUnitFilter] = useState<number | 'all'>(initialUnitFilter);

  // Selected Full Exam Model: 1, 2, or 3
  const [selectedModelId, setSelectedModelId] = useState<number>(1);

  // Exam state
  const [isExamStarted, setIsExamStarted] = useState(false);
  const [isExamSubmitted, setIsExamSubmitted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // User responses: { [questionId: number]: selectedOptionIndex }
  const [userAnswers, setUserAnswers] = useState<{ [key: number]: number }>({});
  const [flaggedQuestions, setFlaggedQuestions] = useState<{ [key: number]: boolean }>({});

  // Active Model object
  const activeModel = useMemo(() => {
    return EXAM_MODELS.find((m) => m.id === selectedModelId) || EXAM_MODELS[0];
  }, [selectedModelId]);

  // Timer: 120 minutes for full mock exam (7200 seconds)
  const [secondsRemaining, setSecondsRemaining] = useState(120 * 60);
  const [isTimerPaused, setIsTimerPaused] = useState(false);

  // Audio playing state
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [audioError, setAudioError] = useState(false);
  const [showTranscript, setShowTranscript] = useState(false);
  const [customAudioByScenario, setCustomAudioByScenario] = useState<Record<string, { url: string; fileName: string }>>({});

  // Review filter after submission: 'all' | 'incorrect' | 'flagged'
  const [reviewFilter, setReviewFilter] = useState<'all' | 'incorrect' | 'flagged'>('all');

  // Reading passage language display: 'en' (English - standard exam mode) | 'both' | 'ar'
  const [passageLang, setPassageLang] = useState<'en' | 'both' | 'ar'>('en');

  // Filtered Question list based on active mode
  const activeQuestions = useMemo(() => {
    if (examMode === 'full') {
      return activeModel.questions;
    }
    // Practice mode draws from all questions across models
    let list = EXAM_MODELS.flatMap((m) => m.questions);
    list = list.filter((q) => q.section === practiceSkill);
    if (unitFilter !== 'all') {
      list = list.filter((q) => q.unit === unitFilter);
    }
    return list;
  }, [examMode, activeModel, practiceSkill, unitFilter]);

  const currentQ = activeQuestions[currentQuestionIndex] || activeQuestions[0];

  // Timer Effect
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isExamStarted && !isExamSubmitted && !isTimerPaused && secondsRemaining > 0) {
      timer = setInterval(() => {
        setSecondsRemaining((prev) => {
          if (prev <= 1) {
            handleSubmitExam();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isExamStarted, isExamSubmitted, isTimerPaused, secondsRemaining]);

  // Handle Exam Start
  const handleStartExam = (mode: 'full' | 'practice') => {
    setExamMode(mode);
    setUserAnswers({});
    setFlaggedQuestions({});
    setCurrentQuestionIndex(0);
    setIsExamSubmitted(false);
    setShowTranscript(false);
    stopAudioText();
    setIsPlayingAudio(false);
    setSecondsRemaining(mode === 'full' ? 120 * 60 : 30 * 60);
    setIsExamStarted(true);
  };

  // Submit Exam
  const handleSubmitExam = () => {
    stopAudioText();
    setIsPlayingAudio(false);
    setIsExamSubmitted(true);
  };

  // Retake
  const handleRetake = () => {
    handleStartExam(examMode);
  };

  // Formatted Time (HH:MM:SS)
  const formatTime = (secs: number) => {
    const hours = Math.floor(secs / 3600);
    const minutes = Math.floor((secs % 3600) / 60);
    const seconds = secs % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  // Calculations for submitted results
  const results = useMemo(() => {
    if (!isExamSubmitted) return null;

    let correctCount = 0;
    const sectionBreakdown: { [key: string]: { correct: number; total: number } } = {
      reading: { correct: 0, total: 0 },
      vocabulary: { correct: 0, total: 0 },
      grammar: { correct: 0, total: 0 },
      listening: { correct: 0, total: 0 }
    };

    activeQuestions.forEach((q) => {
      sectionBreakdown[q.section].total += 1;
      if (userAnswers[q.id] === q.correctIndex) {
        correctCount += 1;
        sectionBreakdown[q.section].correct += 1;
      }
    });

    const totalQuestions = activeQuestions.length;
    const percentage = Math.round((correctCount / totalQuestions) * 100);
    // IAU Grade conversion: 10 marks total for 50 MCQs (each question = 0.2 mark)
    const iauMarks = ((correctCount / totalQuestions) * 10).toFixed(1);

    return {
      correctCount,
      totalQuestions,
      percentage,
      iauMarks,
      sectionBreakdown
    };
  }, [isExamSubmitted, activeQuestions, userAnswers]);

  // Current question's reading passage or listening scenario
  const currentPassage = useMemo(() => {
    if (currentQ?.passageId) {
      return ALL_READING_PASSAGES.find((p) => p.id === currentQ.passageId);
    }
    return null;
  }, [currentQ]);

  const currentListening = useMemo(() => {
    if (currentQ?.audioScenarioId) {
      return ALL_LISTENING_SCENARIOS.find((s) => s.id === currentQ.audioScenarioId);
    }
    return null;
  }, [currentQ]);

  // Computed active custom audio for the current listening scenario
  const activeCustomAudio = currentListening?.id ? customAudioByScenario[currentListening.id] : null;
  const customAudioUrl = activeCustomAudio?.url || null;
  const customAudioFileName = activeCustomAudio?.fileName || null;

  // Audio player for listening scenario
  const handlePlayListeningAudio = () => {
    if (!currentListening) return;

    const audioUrl = getListeningAudioUrl(currentListening.id);
    if (audioUrl) {
      setAudioError(false);
      void toggleAudioFile(
        audioUrl,
        setIsPlayingAudio,
        () => {
          setIsPlayingAudio(false);
          setAudioError(true);
        }
      );
      return;
    }

    if (isPlayingAudio) {
      stopAudioText();
      setIsPlayingAudio(false);
      return;
    }

    const fullText = currentListening.dialogue
      .map((line) => `${line.speaker} says: ${line.text}`)
      .join('. ');

    setIsPlayingAudio(true);
    playAudioText(
      fullText,
      () => setIsPlayingAudio(true),
      () => setIsPlayingAudio(false)
    );
  };

  const handleAudioFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && currentListening?.id) {
      if (isPlayingAudio) {
        stopAudioText();
        setIsPlayingAudio(false);
      }
      const url = URL.createObjectURL(file);
      setCustomAudioByScenario((prev) => ({
        ...prev,
        [currentListening.id]: { url, fileName: file.name }
      }));
    }
  };

  const handleRemoveCustomAudio = () => {
    if (!currentListening?.id) return;
    setCustomAudioByScenario((prev) => {
      const updated = { ...prev };
      delete updated[currentListening.id];
      return updated;
    });
  };

  // Filtered review questions
  const reviewQuestions = useMemo(() => {
    if (!isExamSubmitted) return [];
    return activeQuestions.filter((q) => {
      const isCorrect = userAnswers[q.id] === q.correctIndex;
      if (reviewFilter === 'incorrect') return !isCorrect;
      if (reviewFilter === 'flagged') return flaggedQuestions[q.id];
      return true;
    });
  }, [isExamSubmitted, activeQuestions, userAnswers, reviewFilter, flaggedQuestions]);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* ======================================================== */}
      {/* 1. LOBBY VIEW (Before starting exam)                      */}
      {/* ======================================================== */}
      {!isExamStarted && (
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-bold text-[#214ecf] bg-[#214ecf]/10 px-3 py-1 rounded-full">
              إتقان ENGLISH · بنك الاختبارات والتقييم الذكي
            </span>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
              مركز الاختبار الشامل لمقرر Q: Skills (كتاب 1 و 2)
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              اختر نموذج الاختبار النصفي الشامل (50 سؤالاً / 10 درجات / 120 دقيقة)، أو ابدأ تدريباً مركزاً على مهارة بعينها.
            </p>
          </div>

          {/* Mode Choice Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Card 1: Full Mock Exam with Numbered Models Selection */}
            <div className="p-6 sm:p-7 rounded-2xl border-2 border-[#214ecf] bg-white shadow-md flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-white bg-[#214ecf] px-2.5 py-1 rounded-md">
                    {activeModel.badgeAr}
                  </span>
                  <span className="text-xs text-slate-500 font-semibold">120 دقيقة (50 سؤالاً)</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1.5">
                  الاختبار النصفي الشامل (50 سؤالاً)
                </h3>
                <p className="text-xs text-slate-600 mb-3.5 leading-relaxed">
                  اختر النموذج المراد خوضه من النماذج المعتمدة أدناه؛ جميع النماذج تطابق بيئة وتوزيع درجات اختبار المنتصف الحقيقي وتغطي كامل محتوى الكتب (كتاب 1 وكتاب 2):
                </p>

                {/* Model Selection Tabs (مقسمة بالأرقام) */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-[11px] font-bold text-slate-700">
                      اختر رقم النموذج للاختبار:
                    </label>
                    <span className="text-[10px] text-purple-700 font-bold bg-purple-50 px-2 py-0.5 rounded-full border border-purple-200">
                      تغطية شاملة للكتب 1 و 2
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {EXAM_MODELS.map((m) => {
                      const isSelected = selectedModelId === m.id;
                      return (
                        <button
                          key={m.id}
                          type="button"
                          onClick={() => setSelectedModelId(m.id)}
                          className={`py-2.5 px-3 rounded-xl text-center transition-all border ${
                            isSelected
                              ? 'bg-[#214ecf] text-white border-[#214ecf] shadow-sm font-bold ring-2 ring-[#214ecf]/25'
                              : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:border-slate-300'
                          }`}
                        >
                          <div className="text-xs font-bold flex items-center justify-center gap-1.5">
                            <span>{m.numberAr}</span>
                            {isSelected && <CheckCircle className="w-3.5 h-3.5 text-amber-300" />}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Selected Model Books Coverage Note */}
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 mb-4 text-[11px] text-slate-700 leading-relaxed">
                  <strong className="text-purple-700 block mb-0.5">📚 تغطية محتوى مقررات الكتب ({activeModel.numberAr}):</strong>
                  <span className="text-slate-600">{activeModel.coverageSummaryAr}</span>
                </div>

                {/* Exam Breakdown Standard Table */}
                <div className="space-y-2 text-xs border-t border-slate-100 pt-3 mb-5 text-slate-700">
                  <div className="flex justify-between items-center">
                    <span className="flex items-center gap-1.5"><BrandReadingIcon size={14} className="text-[#214ecf]" /> القراءة (Reading):</span>
                    <strong className="text-slate-900 font-medium">10 أسئلة (نصان كاملان مع ترجمة)</strong>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="flex items-center gap-1.5">💡 المفردات (Vocabulary):</span>
                    <strong className="text-slate-900 font-medium">15 سؤالاً (كتاب 1 + كتاب 2)</strong>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="flex items-center gap-1.5">📝 القواعد (Grammar):</span>
                    <strong className="text-slate-900 font-medium">15 سؤالاً (أزمنة وتراكيب وروابط)</strong>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="flex items-center gap-1.5"><BrandListeningIcon size={14} className="text-[#ea9835]" /> الاستماع (Listening):</span>
                    <strong className="text-slate-900 font-medium">10 أسئلة (نص استماع شامل موحد)</strong>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-slate-100 text-[#214ecf] font-bold">
                    <span>الوزن في الاختبار:</span>
                    <span>10 درجات (50% من درجة المنتصف · 0.2 لكل سؤال)</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => handleStartExam('full')}
                className="w-full py-3 px-4 rounded-xl bg-[#214ecf] hover:bg-[#1a3ea8] text-white font-bold text-sm shadow-sm transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-[#ea9835]" />
                <span>بدء {activeModel.numberAr} الآن (50 سؤالاً / 120 دقيقة)</span>
              </button>
            </div>

            {/* Card 2: Targeted Practice Drills */}
            <div className="p-7 rounded-2xl border border-slate-200 bg-white shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-[#ea9835] bg-[#ea9835]/15 px-2.5 py-1 rounded-md">
                    تدريب مرن حسب المهارة
                  </span>
                  <span className="text-xs text-slate-500 font-semibold">بدون ضغط الوقت</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  اختبارات تدريبية مركزة (Targeted Quizzes)
                </h3>
                <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                  تدرّب على مهارة معينة أو ركّز على نقطة ضعفك للحصول على تغذية راجعة فورية:
                </p>

                {/* Skill selector */}
                <div className="space-y-3 mb-6">
                  <label className="block text-xs font-bold text-slate-700">اختر المهارة المستهدفة:</label>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {[
                      { id: 'grammar', label: '📝 القواعد (15Q)' },
                      { id: 'vocabulary', label: '💡 المفردات (15Q)' },
                      { id: 'reading', label: '📖 القراءة (10Q)' },
                      { id: 'listening', label: '🎧 الاستماع (10Q)' },
                    ].map((s) => (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => setPracticeSkill(s.id as any)}
                        className={`p-2.5 rounded-xl border text-right transition-all font-medium ${
                          practiceSkill === s.id
                            ? 'border-[#214ecf] bg-[#214ecf]/10 text-[#214ecf] font-bold'
                            : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        {s.label}
                      </button>
                    ))}
                  </div>

                  <div className="pt-2">
                    <label className="block text-xs font-bold text-slate-700 mb-1">تحديد الوحدة:</label>
                    <select
                      value={unitFilter}
                      onChange={(e) => setUnitFilter(e.target.value === 'all' ? 'all' : Number(e.target.value))}
                      className="w-full p-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#214ecf]/20 focus:border-[#214ecf]"
                    >
                      <option value="all">جميع الوحدات (3، 4، 5، 6 من كتاب 1 + الوحدة 1 من كتاب 2)</option>
                      <option value={3}>الوحدة 3 (كتاب 1: Linguistics & Travel)</option>
                      <option value={4}>الوحدة 4 (كتاب 1: Body Language & Laughter)</option>
                      <option value={5}>الوحدة 5 (كتاب 1: Sports & Technology)</option>
                      <option value={6}>الوحدة 6 (كتاب 1: Marketing & Choices)</option>
                      <option value={1}>الوحدة 1 (الكتاب 2: Online Safety & Trends)</option>
                    </select>
                  </div>
                </div>
              </div>

              <button
                onClick={() => handleStartExam('practice')}
                className="w-full py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-sm transition-all flex items-center justify-center gap-2"
              >
                <span>بدء التدريب المركز</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* 2. LIVE EXAM INTERACTION VIEW                             */}
      {/* ======================================================== */}
      {isExamStarted && !isExamSubmitted && (
        <div className="space-y-6">
          {/* Top Sticky Test Bar: Progress, Timer, and Question Index */}
          <div className="sticky top-16 z-30 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-slate-200 shadow-xs flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2.5">
              {examMode === 'full' && (
                <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-purple-100 text-purple-900 border border-purple-200 shadow-xs">
                  {activeModel.numberAr}
                </span>
              )}
              <span className="text-xs font-bold text-[#214ecf] bg-[#214ecf]/10 px-2.5 py-1 rounded-md">
                السؤال {currentQuestionIndex + 1} من أصل {activeQuestions.length}
              </span>
              <span className="text-xs text-slate-500 font-medium hidden sm:inline">
                القسم: {currentQ.section === 'reading' ? '📖 القراءة' : currentQ.section === 'vocabulary' ? '💡 المفردات' : currentQ.section === 'grammar' ? '📝 القواعد' : '🎧 الاستماع'} · {currentQ.unit === 1 ? 'الكتاب 2 (الوحدة 1)' : `كتاب 1 (الوحدة ${currentQ.unit})`}
              </span>
            </div>

            {/* Timer and Controls */}
            <div className="flex items-center gap-3">
              <div className={`flex items-center gap-2 text-sm font-bold font-brand-en tabular-nums px-3 py-1 rounded-lg border ${
                secondsRemaining < 600
                  ? 'bg-rose-50 border-rose-300 text-rose-700 animate-pulse'
                  : 'bg-slate-50 border-slate-200 text-slate-800'
              }`}>
                <Clock className="w-4 h-4 text-slate-500" />
                <span>{formatTime(secondsRemaining)}</span>
              </div>

              <button
                onClick={() => {
                  setFlaggedQuestions((prev) => ({
                    ...prev,
                    [currentQ.id]: !prev[currentQ.id]
                  }));
                }}
                className={`p-1.5 rounded-lg border text-xs font-medium flex items-center gap-1 transition-colors ${
                  flaggedQuestions[currentQ.id]
                    ? 'bg-amber-50 border-amber-300 text-amber-800 font-bold'
                    : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                }`}
                title="تمييز السؤال للمراجعة"
              >
                <Flag className="w-3.5 h-3.5 text-[#ea9835]" />
                <span className="hidden sm:inline">تمييز</span>
              </button>

              <button
                onClick={handleSubmitExam}
                className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold transition-all shadow-xs"
              >
                إنهاء وتسليم الاختبار
              </button>
            </div>
          </div>

          {/* Quick Question Navigation Drawer (Numbers 1 to 50) */}
          <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 overflow-x-auto">
            <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
              <span>خريطة الأسئلة (انقر للتنقل المباشر):</span>
              <div className="flex items-center gap-3 text-[11px]">
                <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-[#214ecf] inline-block" /> مُجاب</span>
                <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-[#ea9835] inline-block" /> مميز بنجمة</span>
                <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-white border border-slate-300 inline-block" /> لم يُجب</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {activeQuestions.map((q, idx) => {
                const isAnswered = userAnswers[q.id] !== undefined;
                const isCurrent = idx === currentQuestionIndex;
                const isFlagged = flaggedQuestions[q.id];

                return (
                  <button
                    key={q.id}
                    onClick={() => setCurrentQuestionIndex(idx)}
                    className={`w-7 h-7 rounded-lg text-xs font-bold flex items-center justify-center transition-all relative font-brand-en ${
                      isCurrent
                        ? 'ring-2 ring-[#214ecf] ring-offset-1 font-bold'
                        : ''
                    } ${
                      isAnswered
                        ? 'bg-[#214ecf] text-white'
                        : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {idx + 1}
                    {isFlagged && (
                      <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#ea9835] ring-1 ring-white" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Main Question & Context Container */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {(currentPassage || currentListening) && (
              <div className="lg:col-span-5 bg-white p-5 rounded-2xl border border-slate-200 shadow-xs max-h-[580px] overflow-y-auto">
                {currentPassage && (
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-slate-100">
                      <span className="text-xs font-bold text-[#214ecf] bg-[#214ecf]/10 px-2.5 py-0.5 rounded-md">
                        نص القراءة (Reading Passage)
                      </span>
                      {/* Language Toggle: English (Exam standard), Dual, Arabic */}
                      <div className="flex items-center gap-1 bg-slate-100 p-0.5 rounded-lg text-[11px]">
                        <button
                          onClick={() => setPassageLang('en')}
                          className={`px-2.5 py-0.5 rounded font-bold transition-colors ${
                            passageLang === 'en' ? 'bg-[#214ecf] text-white shadow-2xs' : 'text-slate-600 hover:text-slate-900'
                          }`}
                        >
                          English (نص الاختبار)
                        </button>
                        <button
                          onClick={() => setPassageLang('both')}
                          className={`px-2 py-0.5 rounded font-bold transition-colors ${
                            passageLang === 'both' ? 'bg-[#214ecf] text-white shadow-2xs' : 'text-slate-600 hover:text-slate-900'
                          }`}
                        >
                          مزدوج
                        </button>
                        <button
                          onClick={() => setPassageLang('ar')}
                          className={`px-2 py-0.5 rounded font-bold transition-colors ${
                            passageLang === 'ar' ? 'bg-[#214ecf] text-white shadow-2xs' : 'text-slate-600 hover:text-slate-900'
                          }`}
                        >
                          ترجمة عربية
                        </button>
                      </div>
                    </div>

                    <h4 
                      className={`text-sm font-bold text-slate-900 ${passageLang === 'en' ? 'font-brand-en text-left' : ''}`}
                      dir={passageLang === 'en' ? 'ltr' : 'rtl'}
                    >
                      {passageLang === 'en' ? currentPassage.title : currentPassage.titleAr}
                    </h4>

                    {/* English Text Display (Official Exam Passage) */}
                    {passageLang === 'en' && (
                      <div className="space-y-3 text-xs text-slate-800 font-brand-en leading-relaxed" dir="ltr">
                        {currentPassage.content.map((p, pIdx) => (
                          <p key={pIdx} className="p-3.5 bg-slate-50/90 rounded-xl border border-slate-200/90 leading-relaxed text-slate-800 font-medium">
                            {p}
                          </p>
                        ))}
                      </div>
                    )}

                    {/* Arabic Text Display */}
                    {passageLang === 'ar' && (
                      <div className="space-y-3 text-xs text-slate-800 leading-relaxed" dir="rtl">
                        {currentPassage.contentAr.map((p, pIdx) => (
                          <p key={pIdx} className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80">
                            {p}
                          </p>
                        ))}
                      </div>
                    )}

                    {/* Dual Both Display */}
                    {passageLang === 'both' && (
                      <div className="space-y-3 text-xs leading-relaxed">
                        {currentPassage.contentAr.map((pAr, pIdx) => (
                          <div key={pIdx} className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                            <p className="text-slate-900 font-medium">{pAr}</p>
                            <p className="text-slate-600 font-brand-en pt-1.5 border-t border-slate-200/70 text-[11px] italic">
                              {currentPassage.content[pIdx]}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {currentListening && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="text-xs font-bold text-[#ea9835] bg-[#ea9835]/15 px-2.5 py-0.5 rounded-full">
                          🎧 نص الاستماع الموحد (10 أسئلة)
                        </span>
                        <span className="text-[11px] font-semibold text-slate-500">
                          (الأسئلة 41 - 50)
                        </span>
                      </div>
                      <span className="text-xs text-slate-500 font-brand-en font-medium">Unit {currentListening.unit}</span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 font-brand-en">
                      {currentListening.title}
                    </h4>

                    {/* Audio Player Box */}
                    <div className="p-4 sm:p-5 bg-gradient-to-br from-amber-50/80 to-blue-50/50 border border-amber-200/80 rounded-2xl space-y-3.5 shadow-xs">
                      <div className="flex items-center justify-between text-xs text-slate-700">
                        <span className="font-bold flex items-center gap-1.5 text-slate-900">
                          <Headphones className="w-4 h-4 text-[#ea9835]" />
                          التسجيل الصوتي الرسمي للاستماع:
                        </span>
                        {currentListening.duration && (
                          <span className="font-mono text-[11px] font-bold text-amber-900 bg-amber-100/80 px-2 py-0.5 rounded-md border border-amber-300/60">
                            ⏱️ المدة: {currentListening.duration} دقيقة
                          </span>
                        )}
                      </div>

                      {/* Custom Audio Player if user attached audio file */}
                      {customAudioUrl ? (
                        <div className="p-3 bg-white rounded-xl border border-blue-200 space-y-2">
                          <div className="flex items-center justify-between text-xs">
                            <span className="font-bold text-[#214ecf] flex items-center gap-1.5 truncate">
                              <FileAudio className="w-4 h-4 shrink-0 text-emerald-600" />
                              <span className="truncate">{customAudioFileName || 'الملف الصوتي المرفق'}</span>
                            </span>
                            <button
                              type="button"
                              onClick={handleRemoveCustomAudio}
                              className="text-[11px] text-red-600 hover:underline shrink-0"
                            >
                              إلغاء الملف
                            </button>
                          </div>
                          <audio controls src={customAudioUrl} className="w-full h-10" />
                        </div>
                      ) : (
                        <div className="space-y-2">
                          <button
                            type="button"
                            onClick={handlePlayListeningAudio}
                            className={`w-full py-2.5 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-xs transition-all ${
                              isPlayingAudio
                                ? 'bg-[#e06045] hover:bg-[#c84d33] text-white animate-pulse'
                                : 'bg-[#214ecf] hover:bg-[#1a3ea8] text-white'
                            }`}
                          >
                            {isPlayingAudio ? (
                              <>
                                <Square className="w-4 h-4 fill-current" />
                                <span>إيقاف الصوت مؤقتاً</span>
                              </>
                            ) : (
                              <>
                                <Play className="w-4 h-4 fill-current" />
                                <span>تشغيل الحوار الصوتي المباشر (Play Dialogue)</span>
                              </>
                            )}
                          </button>
                          {audioError && (
                            <p role="alert" className="text-xs font-semibold text-red-700">
                              تعذّر تحميل التسجيل الصوتي أو تشغيله. يُرجى المحاولة مرة أخرى.
                            </p>
                          )}
                        </div>
                      )}

                      {/* Transcript Toggle */}
                      <div className="flex items-center justify-end pt-1 border-t border-slate-200/60">
                        <button
                          type="button"
                          onClick={() => setShowTranscript(!showTranscript)}
                          className="text-[11px] text-[#214ecf] underline font-bold hover:text-[#1a3ea8] flex items-center gap-1"
                        >
                          {showTranscript ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                          <span>{showTranscript ? 'إخفاء النص المكتوب' : 'عرض النص مع التوقيت والأدوار'}</span>
                        </button>
                      </div>
                    </div>

                    {showTranscript && (
                      <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-2.5 text-xs">
                        <div className="flex items-center justify-between pb-1.5 border-b border-slate-200 text-[11px] text-slate-600">
                          <span className="font-bold">نص الحوار مفرغاً بالتوقيت الزمني الدقيق:</span>
                          <span className="text-[10px] text-slate-500 font-mono">10 dialogue turns</span>
                        </div>
                        {currentListening.dialogue.map((line, lIdx) => (
                          <div 
                            key={lIdx} 
                            className="p-2.5 rounded-lg bg-white border border-slate-200/90 shadow-2xs space-y-1 hover:border-blue-300 transition-all font-brand-en"
                          >
                            <div className="flex items-center justify-between text-[11px] gap-2">
                              <div className="flex items-center gap-1.5 flex-wrap">
                                <strong className="text-[#214ecf] font-bold text-xs">{line.speaker}</strong>
                                {line.role && (
                                  <span className="text-[10px] text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200 font-sans">
                                    {line.role}
                                  </span>
                                )}
                              </div>
                              {line.timestamp && (
                                <span className="font-mono text-[10px] font-bold text-amber-800 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200/70 shrink-0">
                                  ⏱️ {line.timestamp}
                                </span>
                              )}
                            </div>
                            <p className="text-slate-800 text-xs leading-relaxed font-brand-en">{line.text}</p>
                            <div className="pt-0.5 text-right font-sans">
                              <button
                                type="button"
                                onClick={() => playAudioText(`${line.speaker} says: ${line.text}`)}
                                className="text-[10px] text-[#214ecf] hover:underline flex items-center gap-1 font-semibold mr-auto"
                              >
                                <Volume2 className="w-3 h-3" />
                                <span>استماع لهذا المقطع فقط</span>
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* Question and Choices */}
            <div className={`${currentPassage || currentListening ? 'lg:col-span-7' : 'lg:col-span-12'} bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-6`}>
              <div>
                <div className="flex items-center justify-between gap-2 text-xs text-slate-500 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[#214ecf]">سؤال رقم {currentQuestionIndex + 1}</span>
                    <span aria-hidden="true">·</span>
                    <span>الدرجة: 0.2 درجة (من 10)</span>
                  </div>
                  <span className={`text-[11px] font-bold px-2 py-0.5 rounded-md ${
                    currentQ.unit === 1 
                      ? 'bg-purple-100 text-purple-900 border border-purple-200' 
                      : 'bg-slate-100 text-slate-700'
                  }`}>
                    {currentQ.unit === 1 ? 'الكتاب الثاني (Book 2) · الوحدة 1' : `الكتاب الأول · الوحدة ${currentQ.unit}`}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 font-brand-en leading-snug mb-2">
                  {currentQ.questionEn}
                </h3>
                <p className="text-xs text-slate-500 font-sans leading-relaxed">
                  {currentQ.questionAr}
                </p>
              </div>

              {/* Options */}
              <div className="space-y-2.5">
                {currentQ.options.map((option, optIdx) => {
                  const isSelected = userAnswers[currentQ.id] === optIdx;

                  return (
                    <button
                      key={optIdx}
                      onClick={() => {
                        setUserAnswers((prev) => ({
                          ...prev,
                          [currentQ.id]: optIdx
                        }));
                      }}
                      className={`w-full p-4 rounded-xl border text-right transition-all flex items-center justify-between gap-3 text-xs sm:text-sm ${
                        isSelected
                          ? 'border-[#214ecf] bg-[#214ecf]/10 text-slate-950 font-bold shadow-xs'
                          : 'border-slate-200 bg-slate-50/60 hover:bg-slate-100 text-slate-800'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 font-brand-en ${
                          isSelected
                            ? 'bg-[#214ecf] text-white'
                            : 'bg-white border border-slate-300 text-slate-600'
                        }`}>
                          {String.fromCharCode(65 + optIdx)}
                        </span>
                        <span className="font-brand-en text-right">{option}</span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Navigation buttons */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-100 gap-3">
                <button
                  disabled={currentQuestionIndex === 0}
                  onClick={() => setCurrentQuestionIndex((prev) => Math.max(0, prev - 1))}
                  className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <ChevronRight className="w-4 h-4" />
                  <span>السؤال السابق</span>
                </button>

                <span className="text-xs text-slate-400">
                  {Object.keys(userAnswers).length} من {activeQuestions.length} مُجاب
                </span>

                <button
                  disabled={currentQuestionIndex === activeQuestions.length - 1}
                  onClick={() => setCurrentQuestionIndex((prev) => Math.min(activeQuestions.length - 1, prev + 1))}
                  className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold rounded-lg bg-[#214ecf] text-white hover:bg-[#1a3ea8] disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <span>السؤال التالي</span>
                  <ChevronLeft className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* 3. EXAM REPORT & DETAILED REVIEW VIEW                     */}
      {/* ======================================================== */}
      {isExamSubmitted && results && (
        <div className="space-y-8">
          {/* Result Score Card */}
          <div className="p-7 sm:p-9 rounded-2xl bg-white border border-slate-200 shadow-sm text-center max-w-3xl mx-auto space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#214ecf]/10 text-[#214ecf] flex items-center justify-center mx-auto">
              <Award className="w-8 h-8 text-[#ea9835]" />
            </div>

            <div>
              <div className="flex items-center justify-center gap-2 mb-1.5 flex-wrap">
                <span className="text-xs font-bold text-[#214ecf] bg-[#214ecf]/10 px-3 py-1 rounded-md">
                  تقرير نتيجة إتقان الأكاديمي
                </span>
                {examMode === 'full' && (
                  <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-purple-100 text-purple-900 border border-purple-200">
                    {activeModel.numberAr} · {activeModel.badgeAr}
                  </span>
                )}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mt-2">
                درجة اختبار المنتصف المحسوبة (MCQ)
              </h3>
              {examMode === 'full' && (
                <p className="text-xs text-slate-500 mt-1">
                  {activeModel.titleAr} (تغطية كاملة لكتاب 1 وكتاب 2)
                </p>
              )}
            </div>

            {/* Score Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-lg mx-auto py-2">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <span className="text-xs text-slate-500 block">الإجابات الصحيحة</span>
                <span className="text-2xl font-bold text-[#214ecf] tabular-nums font-brand-en">
                  {results.correctCount} <span className="text-xs font-normal text-slate-500 font-sans">/ {results.totalQuestions}</span>
                </span>
              </div>

              <div className="p-3 bg-[#214ecf]/10 rounded-xl border border-[#214ecf]/20">
                <span className="text-xs text-[#214ecf] font-bold block">درجة المنتصف (MCQ)</span>
                <span className="text-2xl font-bold text-[#214ecf] tabular-nums font-brand-en">
                  {results.iauMarks} <span className="text-xs font-normal text-slate-600 font-sans">/ 10 درجات</span>
                </span>
              </div>

              <div className="p-3 bg-[#ea9835]/15 rounded-xl border border-[#ea9835]/30 col-span-2 sm:col-span-1">
                <span className="text-xs text-[#ea9835] font-bold block">النسبة المئوية</span>
                <span className="text-2xl font-bold text-slate-900 tabular-nums font-brand-en">
                  {results.percentage}%
                </span>
              </div>
            </div>

            {/* Section Breakdown Bars */}
            <div className="space-y-2 text-right max-w-lg mx-auto text-xs pt-2">
              <span className="font-bold text-slate-800 block">توزيع النتائج حسب مهارات المخطط:</span>
              {Object.entries(results.sectionBreakdown).map(([section, data]) => {
                const pct = data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0;
                const labels: { [key: string]: string } = {
                  reading: '📖 القراءة (Reading)',
                  vocabulary: '💡 المفردات (Vocabulary)',
                  grammar: '📝 القواعد (Grammar)',
                  listening: '🎧 الاستماع (Listening)'
                };

                return (
                  <div key={section} className="space-y-1">
                    <div className="flex justify-between text-slate-600">
                      <span>{labels[section]}</span>
                      <span className="font-semibold text-slate-900 tabular-nums font-brand-en">{data.correct} من {data.total} ({pct}%)</span>
                    </div>
                    <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${
                          pct >= 80 ? 'bg-emerald-600' : pct >= 60 ? 'bg-[#ea9835]' : 'bg-[#e06045]'
                        }`}
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
              <button
                onClick={handleRetake}
                className="py-2.5 px-5 rounded-xl bg-[#214ecf] text-white font-bold text-xs hover:bg-[#1a3ea8] transition-colors flex items-center gap-1.5 shadow-xs"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>إعادة {examMode === 'full' ? activeModel.numberAr : 'التدريب'}</span>
              </button>
              <button
                onClick={() => {
                  setIsExamStarted(false);
                  setIsExamSubmitted(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="py-2.5 px-5 rounded-xl border border-purple-300 bg-purple-50 text-purple-900 font-bold text-xs hover:bg-purple-100 transition-colors flex items-center gap-1.5 shadow-xs"
              >
                <Sparkles className="w-3.5 h-3.5 text-purple-700" />
                <span>اختيار نموذج اختبار آخر (1، 2، 3)</span>
              </button>
              <button
                onClick={() => {
                  setIsExamStarted(false);
                  setIsExamSubmitted(false);
                }}
                className="py-2.5 px-5 rounded-xl border border-slate-300 bg-white text-slate-700 font-bold text-xs hover:bg-slate-50 transition-colors"
              >
                العودة للرئيسية وقائمة المهارات
              </button>
            </div>
          </div>

          {/* Detailed Question Review */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200">
              <div>
                <h4 className="text-lg font-bold text-slate-900">
                  مراجعة تفصيلية لجميع الإجابات مع الشرح والتعليل
                </h4>
                <p className="text-xs text-slate-500">
                  تحقق من سبب صحة كل خيار ومرجعه في كتاب الطالب.
                </p>
              </div>

              {/* Review Filter Tabs */}
              <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl">
                <button
                  onClick={() => setReviewFilter('all')}
                  className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors ${
                    reviewFilter === 'all' ? 'bg-[#214ecf] text-white shadow-xs' : 'text-slate-600'
                  }`}
                >
                  جميع الأسئلة ({activeQuestions.length})
                </button>
                <button
                  onClick={() => setReviewFilter('incorrect')}
                  className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors ${
                    reviewFilter === 'incorrect' ? 'bg-[#e06045] text-white shadow-xs' : 'text-slate-600'
                  }`}
                >
                  الأخطاء فقط ({activeQuestions.length - results.correctCount})
                </button>
                <button
                  onClick={() => setReviewFilter('flagged')}
                  className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors ${
                    reviewFilter === 'flagged' ? 'bg-[#ea9835] text-white shadow-xs' : 'text-slate-600'
                  }`}
                >
                  المميزة بنجمة
                </button>
              </div>
            </div>

            {/* Review Cards List */}
            <div className="space-y-4">
              {reviewQuestions.map((q) => {
                const userChoice = userAnswers[q.id];
                const isCorrect = userChoice === q.correctIndex;

                return (
                  <div
                    key={q.id}
                    className={`p-5 rounded-2xl border bg-white shadow-xs space-y-4 ${
                      isCorrect ? 'border-emerald-200' : 'border-rose-200'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white font-brand-en ${
                          isCorrect ? 'bg-emerald-600' : 'bg-[#e06045]'
                        }`}>
                          {activeQuestions.findIndex((item) => item.id === q.id) + 1}
                        </span>
                        <span className="text-xs font-bold text-slate-700">
                          {q.section === 'reading' ? '📖 القراءة' : q.section === 'vocabulary' ? '💡 المفردات' : q.section === 'grammar' ? '📝 القواعد' : '🎧 الاستماع'} · {q.unit === 1 ? 'الكتاب الثاني (Book 2) · الوحدة 1' : `الكتاب الأول · الوحدة ${q.unit}`}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        {isCorrect ? (
                          <span className="text-xs font-bold text-emerald-700 flex items-center gap-1">
                            <CheckCircle className="w-3.5 h-3.5" />
                            <span>إجابة صحيحة (+0.2)</span>
                          </span>
                        ) : (
                          <span className="text-xs font-bold text-[#e06045] flex items-center gap-1">
                            <XCircle className="w-3.5 h-3.5" />
                            <span>إجابة خاطئة</span>
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Question text */}
                    <div>
                      <h5 className="text-sm sm:text-base font-bold text-slate-900 font-brand-en mb-1">
                        {q.questionEn}
                      </h5>
                      <p className="text-xs text-slate-500 font-sans">
                        {q.questionAr}
                      </p>
                    </div>

                    {/* Choices Review */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {q.options.map((opt, oIdx) => {
                        const isThisCorrect = oIdx === q.correctIndex;
                        const isThisUserPick = oIdx === userChoice;

                        let style = 'border-slate-200 bg-slate-50 text-slate-700';
                        if (isThisCorrect) {
                          style = 'border-emerald-400 bg-emerald-50 text-emerald-950 font-bold';
                        } else if (isThisUserPick && !isThisCorrect) {
                          style = 'border-rose-300 bg-rose-50 text-rose-950 line-through';
                        }

                        return (
                          <div
                            key={oIdx}
                            className={`p-2.5 rounded-xl border flex items-center justify-between font-brand-en ${style}`}
                          >
                            <span>
                              {String.fromCharCode(65 + oIdx)}. {opt}
                            </span>
                            {isThisCorrect && <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />}
                            {isThisUserPick && !isThisCorrect && <XCircle className="w-3.5 h-3.5 text-rose-600 shrink-0" />}
                          </div>
                        );
                      })}
                    </div>

                    {/* Explanation Box */}
                    <div className="p-3.5 bg-[#214ecf]/5 border border-[#214ecf]/15 rounded-xl space-y-1 text-xs">
                      <span className="font-bold text-[#214ecf] block">التعليل والشرح الأكاديمي:</span>
                      <p className="text-slate-800 font-brand-en font-medium">{q.explanationEn}</p>
                      <p className="text-slate-600 font-sans">{q.explanationAr}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
