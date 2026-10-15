import React, { useState, useMemo } from 'react';
import { 
  CheckCircle, 
  Copy, 
  Check, 
  BarChart3, 
  Sparkles, 
  AlertTriangle, 
  CheckCircle2, 
  HelpCircle, 
  RotateCcw,
  BookOpen,
  ArrowRight,
  TrendingUp,
  FileCheck, 
  Video, 
  Edit3, 
  Save, 
  ChevronDown, 
  ChevronUp,
  Eye,
  EyeOff
} from 'lucide-react';
import { WRITING_PROMPTS_DATA } from '../data/writingPromptsData';
import { BrandWritingIcon } from './BrandIcons';

export const WritingLab: React.FC = () => {
  const [selectedPromptId, setSelectedPromptId] = useState<string>(WRITING_PROMPTS_DATA[0].id);
  const [activeTab, setActiveTab] = useState<'builder' | 'analysis' | 'model' | 'video'>('builder');
  const [videoLoadError, setVideoLoadError] = useState(false);
  
  // 8 Sentence Inputs
  const [sentences, setSentences] = useState<{ [key: number]: string }>({
    1: '',
    2: '',
    3: '',
    4: '',
    5: '',
    6: '',
    7: '',
    8: ''
  });

  const [copied, setCopied] = useState(false);

  const activePrompt = useMemo(() => {
    return WRITING_PROMPTS_DATA.find((p) => p.id === selectedPromptId) || WRITING_PROMPTS_DATA[0];
  }, [selectedPromptId]);

  // Combined full paragraph
  const combinedParagraph = useMemo(() => {
    return Object.values(sentences)
      .map((s) => s.trim())
      .filter((s) => s.length > 0)
      .join(' ');
  }, [sentences]);

  // Sentence count
  const filledSentenceCount = useMemo(() => {
    return Object.values(sentences).filter((s) => s.trim().length > 0).length;
  }, [sentences]);

  // Total Word Count
  const totalWordCount = useMemo(() => {
    if (!combinedParagraph.trim()) return 0;
    return combinedParagraph.trim().split(/\s+/).length;
  }, [combinedParagraph]);

  // Detected connectors in user writing
  const detectedConnectors = useMemo(() => {
    const textLower = combinedParagraph.toLowerCase();
    const list: string[] = [];
    const checkList = [
      'because', 'when', 'in order to', 'in order not to', 
      'first of all', 'first', 'second', 'secondly', 
      'in addition', 'furthermore', 'for example', 'for instance', 
      'finally', 'for these reasons', 'to conclude', 'in conclusion', 'in summary', 
      'also', 'however', 'although'
    ];
    checkList.forEach((c) => {
      // Use regex with word boundary where applicable
      if (textLower.includes(c)) {
        if (!list.includes(c)) list.push(c);
      }
    });
    return list;
  }, [combinedParagraph]);

  // Detailed Analysis Metrics
  const analysisReport = useMemo(() => {
    const s1 = (sentences[1] || '').trim();
    const s8 = (sentences[8] || '').trim();

    // Check sentence capitalization and ending punctuation
    const sentenceAudits = [1, 2, 3, 4, 5, 6, 7, 8].map((num) => {
      const text = (sentences[num] || '').trim();
      const isFilled = text.length > 0;
      const startsCapital = isFilled ? /^[A-Z]/.test(text) : false;
      const endsWithPeriod = isFilled ? /[.!?]$/.test(text) : false;
      const wordCount = isFilled ? text.split(/\s+/).length : 0;
      
      return {
        sentenceNum: num,
        text,
        isFilled,
        startsCapital,
        endsWithPeriod,
        wordCount,
        template: activePrompt.sentenceTemplates[num - 1]
      };
    });

    // Score calculations according to IAU DEL Midterm Rubric (Out of 5 Marks)
    // 1. Topic Sentence & Indent (1 Mark)
    const hasTS = s1.length >= 15;
    const tsCapital = /^[A-Z]/.test(s1);
    const tsPeriod = /[.!?]$/.test(s1);
    let tsScore = 0;
    if (hasTS) tsScore += 0.5;
    if (tsCapital && tsPeriod) tsScore += 0.5;

    // 2. Supporting Sentences & Relevance (6 sentences, 2 Marks)
    const middleCount = [2, 3, 4, 5, 6, 7].filter((num) => (sentences[num] || '').trim().length >= 10).length;
    let ssScore = (middleCount / 6) * 2;
    ssScore = Math.round(ssScore * 10) / 10;

    // 3. Concluding Sentence (1 Mark)
    const hasCS = s8.length >= 15;
    const csCapital = /^[A-Z]/.test(s8);
    const csPeriod = /[.!?]$/.test(s8);
    let csScore = 0;
    if (hasCS) csScore += 0.5;
    if (csCapital && csPeriod) csScore += 0.5;

    // 4. Grammar, Mechanics & Connectors (1 Mark)
    const validCaps = sentenceAudits.filter((s) => s.isFilled && s.startsCapital).length;
    const validEnds = sentenceAudits.filter((s) => s.isFilled && s.endsWithPeriod).length;
    let mechanicsScore = 0;
    if (detectedConnectors.length >= 2) mechanicsScore += 0.4;
    else if (detectedConnectors.length === 1) mechanicsScore += 0.2;
    
    if (filledSentenceCount > 0 && validCaps >= Math.min(filledSentenceCount, 6)) mechanicsScore += 0.3;
    if (filledSentenceCount > 0 && validEnds >= Math.min(filledSentenceCount, 6)) mechanicsScore += 0.3;
    mechanicsScore = Math.min(1.0, Math.round(mechanicsScore * 10) / 10);

    const totalScore = Math.min(5.0, Math.round((tsScore + ssScore + csScore + mechanicsScore) * 10) / 10);

    // Feedback recommendations
    const recommendations: { type: 'success' | 'warning' | 'info'; titleAr: string; descAr: string }[] = [];

    if (filledSentenceCount === 8) {
      recommendations.push({
        type: 'success',
        titleAr: 'اكتمال بناء الفقرة (8 من 8 جمل)',
        descAr: 'استوفيت جميع الجُمل الثمانية المطلوبة في مواصفات اختبار المنتصف بدقة.'
      });
    } else {
      recommendations.push({
        type: 'warning',
        titleAr: `ينقصك ${8 - filledSentenceCount} جملة`,
        descAr: 'يشترط اختبار جامعة الإمام كتابة ثماني جمل محددة لتفادي خصم درجات البنية.'
      });
    }

    if (detectedConnectors.length >= 2) {
      recommendations.push({
        type: 'success',
        titleAr: 'تنوع أدوات الربط (Transition Signals)',
        descAr: `استخدمت بنجاح: (${detectedConnectors.slice(0, 3).join('، ')})، مما يعزز انسيابية وتماسك الفقرة.`
      });
    } else {
      recommendations.push({
        type: 'warning',
        titleAr: 'أدوات الربط غير كافية',
        descAr: `يُوصى باستخدام أدوات ربط إضافية مثل: (${activePrompt.targetConnectors.slice(0, 3).join('، ')}).`
      });
    }

    const uncapitalized = sentenceAudits.filter((s) => s.isFilled && !s.startsCapital);
    if (uncapitalized.length > 0) {
      recommendations.push({
        type: 'warning',
        titleAr: 'تنبيه الأحرف الكبيرة (Capitalization)',
        descAr: `تأكد من بدء الجمل التالية بحرف كبير: الجملة (${uncapitalized.map((s) => s.sentenceNum).join('، ')}).`
      });
    }

    const missingPeriods = sentenceAudits.filter((s) => s.isFilled && !s.endsWithPeriod);
    if (missingPeriods.length > 0) {
      recommendations.push({
        type: 'warning',
        titleAr: 'تنبيه علامات الترقيم الختامية (Punctuation)',
        descAr: `تأكد من وضع نقطة (.) في نهاية: الجملة (${missingPeriods.map((s) => s.sentenceNum).join('، ')}).`
      });
    }

    if (recommendations.filter(r => r.type === 'warning').length === 0 && filledSentenceCount === 8) {
      recommendations.push({
        type: 'info',
        titleAr: 'جاهزية ممتازة للاختبار',
        descAr: 'فقرتك مكتملة الشروط والمعايير ومطابقة لنموذج التصحيح المعتمد في عمادة السنة التحضيرية.'
      });
    }

    return {
      sentenceAudits,
      tsScore,
      ssScore,
      csScore,
      mechanicsScore,
      totalScore,
      recommendations
    };
  }, [sentences, activePrompt, filledSentenceCount, detectedConnectors]);

  // Copy to clipboard
  const handleCopy = () => {
    if (!combinedParagraph) return;
    navigator.clipboard.writeText(`    ${combinedParagraph}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Pre-fill model starter
  const handleLoadTemplateStarter = (sentenceNum: number, starter: string) => {
    setSentences((prev) => ({
      ...prev,
      [sentenceNum]: prev[sentenceNum] ? prev[sentenceNum] : starter
    }));
  };

  // Reset current sentences
  const handleReset = () => {
    if (window.confirm('هل تريد مسح الجمل والبدء من جديد؟')) {
      setSentences({ 1: '', 2: '', 3: '', 4: '', 5: '', 6: '', 7: '', 8: '' });
      setActiveTab('builder');
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header Deck */}
      <div className="pb-6 border-b border-slate-200">
        <div className="flex items-center gap-2 text-xs font-bold text-[#e06045] bg-[#e06045]/10 px-2.5 py-1 rounded-md w-fit mb-2">
          <BrandWritingIcon size={16} />
          <span>قسم الكتابة الأكاديمية (Writing)</span>
          <span aria-hidden="true">·</span>
          <span>الوزن: 25% (5 درجات)</span>
          <span aria-hidden="true">·</span>
          <span>فقرة من 8 جُمل</span>
        </div>
        <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
          معمل التدريب على كتابة الفقرة الأكاديمية (8-Sentence Paragraph Lab)
        </h2>
        <p className="text-xs text-slate-600 mt-1 max-w-3xl leading-relaxed">
          بناءً على مخطط اختبار المنتصف، يُطلب منك اختيار موضوع واحد من بين ثلاثة مواضيع وكتابة فقرة متكاملة من 8 جمل مضبوطة البناء (جملة مفتاحية، 6 جمل داعمة وتفاصيل، وجملة ختامية).
        </p>
      </div>

      {/* Prompt Selector Tabs */}
      <div className="my-6 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {WRITING_PROMPTS_DATA.map((prompt) => (
            <button
              key={prompt.id}
              onClick={() => setSelectedPromptId(prompt.id)}
              className={`p-4 rounded-2xl border text-right transition-all flex flex-col justify-between ${
                selectedPromptId === prompt.id
                  ? 'border-[#214ecf] bg-[#214ecf]/5 shadow-xs ring-1 ring-[#214ecf]'
                  : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700'
              }`}
            >
              <div>
                <span className={`text-[11px] font-bold block mb-1 ${
                  prompt.unit === 1 ? 'text-purple-700 font-extrabold' : 'text-[#214ecf]'
                }`}>
                  {prompt.unit === 1 ? 'الكتاب الثاني (Book 2) · الوحدة 1 ✨' : `الكتاب الأول · الوحدة ${prompt.unit}`}
                </span>
                <h4 className="text-xs font-bold text-slate-900 leading-snug mb-1">
                  {prompt.titleAr}
                </h4>
                <p className="text-[11px] text-slate-500 font-brand-en line-clamp-2">
                  {prompt.titleEn}
                </p>
              </div>
              <span className={`text-[11px] font-bold mt-3 ${
                selectedPromptId === prompt.id ? (prompt.unit === 1 ? 'text-purple-700' : 'text-[#214ecf]') : 'text-slate-400'
              }`}>
                {selectedPromptId === prompt.id ? '● الموضوع المختار' : 'اختر هذا الموضوع'}
              </span>
            </button>
          ))}
        </div>

        {/* Selected Topic Brief */}
        <div className="p-5 bg-gradient-to-l from-slate-900 via-slate-800 to-[#214ecf] text-white rounded-2xl space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-[#ea9835]">نص التكليف الرسمي (Writing Prompt Task):</span>
            <span className="text-xs text-white/70 font-brand-en">
              {activePrompt.unit === 1 ? 'Book 2 · Unit 1 Topic' : `Book 1 · Unit ${activePrompt.unit} Topic`}
            </span>
          </div>
          <p className="text-sm font-bold">{activePrompt.descriptionAr}</p>
          <p className="text-xs text-slate-200 font-brand-en italic">{activePrompt.descriptionEn}</p>
          <div className="pt-2 border-t border-white/15 flex flex-wrap gap-2 text-xs">
            <span className="text-slate-300">أدوات الربط المقترحة:</span>
            {activePrompt.targetConnectors.map((c, idx) => (
              <span key={idx} className="font-brand-en text-[#ea9835] font-bold bg-black/25 px-2 py-0.5 rounded text-[11px]">
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Sub-Tabs: Interactive Builder vs Text Analysis vs Model Essay */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-3 mb-6">
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setActiveTab('builder')}
            className={`px-4 py-2 text-xs font-bold rounded-xl transition-all flex items-center gap-1.5 ${
              activeTab === 'builder'
                ? 'bg-[#214ecf] text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            <BrandWritingIcon size={14} />
            <span>بناء الجمل الثمانية (Builder)</span>
          </button>

          <button
            onClick={() => setActiveTab('analysis')}
            className={`px-4 py-2 text-xs font-bold rounded-xl transition-all flex items-center gap-1.5 relative ${
              activeTab === 'analysis'
                ? 'bg-[#214ecf] text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            <BarChart3 className="w-3.5 h-3.5" />
            <span>تحليل النص المكتوب (Text Analysis)</span>
            {filledSentenceCount > 0 && (
              <span className={`px-1.5 py-0.2 rounded-full text-[10px] font-brand-en ${
                activeTab === 'analysis' ? 'bg-white text-[#214ecf]' : 'bg-[#214ecf] text-white'
              }`}>
                {analysisReport.totalScore} / 5
              </span>
            )}
          </button>

          <button
            onClick={() => setActiveTab('model')}
            className={`px-4 py-2 text-xs font-bold rounded-xl transition-all flex items-center gap-1.5 ${
              activeTab === 'model'
                ? 'bg-[#214ecf] text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>النموذج المثالي المحلول (Model Paragraph)</span>
          </button>

          <button
            onClick={() => setActiveTab('video')}
            className={`px-4 py-2 text-xs font-bold rounded-xl transition-all flex items-center gap-1.5 ${
              activeTab === 'video'
                ? 'bg-[#214ecf] text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            <Video className="w-3.5 h-3.5" />
            <span>مقطع فيديو الشرح (Video Lesson)</span>
          </button>
        </div>

        {filledSentenceCount > 0 && (
          <button
            type="button"
            onClick={handleReset}
            className="text-xs text-rose-600 hover:text-rose-700 flex items-center gap-1 font-semibold transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>مسح والبدء من جديد</span>
          </button>
        )}
      </div>

      {/* ======================================================== */}
      {/* BUILDER TAB                                              */}
      {/* ======================================================== */}
      {activeTab === 'builder' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: 8 Sentences Editor */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100 text-xs">
              <span className="font-bold text-slate-800">اكتب كل جملة على حدة مع استيفاء وظيفتها:</span>
              <span className="text-slate-500 font-semibold tabular-nums">
                المكتمل: {filledSentenceCount} / 8 جمل
              </span>
            </div>

            <div className="space-y-4">
              {activePrompt.sentenceTemplates.map((item) => (
                <div
                  key={item.sentenceNumber}
                  className="p-4 rounded-xl border border-slate-200 bg-white shadow-xs space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-bold text-white font-brand-en ${
                        sentences[item.sentenceNumber]?.trim() ? 'bg-emerald-600' : 'bg-slate-400'
                      }`}>
                        {item.sentenceNumber}
                      </span>
                      <span className="text-xs font-bold text-slate-800">
                        الجملة {item.sentenceNumber} · {
                          item.type === 'TS' ? 'الجملة المفتاحية (Topic Sentence)' :
                          item.type === 'CS' ? 'الجملة الختامية (Concluding Sentence)' :
                          item.type === 'SS' ? 'جملة داعمة رئيسية (Supporting Sentence)' :
                          'تفصيل / دليل داعم (Detail / Example)'
                        }
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleLoadTemplateStarter(item.sentenceNumber, item.starterHintEn)}
                      className="text-[11px] text-[#214ecf] hover:text-[#1a3ea8] underline font-bold"
                    >
                      استعن بنموذج مقترح
                    </button>
                  </div>

                  <p className="text-[11px] text-slate-500">{item.guideAr}</p>

                  <input
                    type="text"
                    dir="ltr"
                    value={sentences[item.sentenceNumber]}
                    onChange={(e) =>
                      setSentences((prev) => ({
                        ...prev,
                        [item.sentenceNumber]: e.target.value
                      }))
                    }
                    placeholder={item.starterHintEn}
                    className="w-full p-2.5 text-xs font-brand-en bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#214ecf]/20 focus:border-[#214ecf]"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Live Paragraph Preview & Rubric Checker */}
          <div className="lg:col-span-5 space-y-6">
            <div className="sticky top-20 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <span className="text-xs font-bold text-[#214ecf] flex items-center gap-1.5">
                  <BrandWritingIcon size={16} />
                  <span>معاينة الفقرة الكاملة (Live Preview)</span>
                </span>
                <button
                  disabled={!combinedParagraph}
                  onClick={handleCopy}
                  className="text-xs font-bold text-slate-600 hover:text-slate-900 flex items-center gap-1 disabled:opacity-40"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'تم النسخ!' : 'نسخ الفقرة'}</span>
                </button>
              </div>

              {/* Indented Paragraph Output */}
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 min-h-[140px] text-xs sm:text-sm font-brand-en leading-relaxed text-slate-800 whitespace-pre-wrap select-all">
                {combinedParagraph ? (
                  <>
                    <span className="inline-block w-6" aria-hidden="true" />
                    {combinedParagraph}
                  </>
                ) : (
                  <span className="text-slate-400 font-sans italic text-xs block text-center py-8">
                    ابدأ بكتابة الجمل في الحقول المقابلة لتظهر فقرتك هنا مدمجة مع مراعاة إزاحة السطر الأول (Indentation).
                  </span>
                )}
              </div>

              {/* Stats & Quality Meter */}
              <div className="space-y-3 pt-2 text-xs border-t border-slate-100">
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">اكتمال الجمل المطلوبة:</span>
                  <span className={`font-bold tabular-nums font-brand-en ${filledSentenceCount === 8 ? 'text-emerald-700' : 'text-[#ea9835]'}`}>
                    {filledSentenceCount} من أصل 8 جُمل
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-slate-600">عدد الكلمات الإجمالي:</span>
                  <span className="font-bold text-slate-900 font-brand-en">
                    {totalWordCount} كلمة
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-slate-600">أدوات الربط المكتشفة:</span>
                  <span className="font-bold text-[#214ecf] font-brand-en">
                    {detectedConnectors.length > 0 ? detectedConnectors.join(', ') : 'لم تُكتشف بعد'}
                  </span>
                </div>
              </div>

              {/* Quick Jump to Analysis Button */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setActiveTab('analysis')}
                  className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-l from-[#214ecf] to-[#1a3ea8] text-white text-xs font-bold shadow-xs hover:shadow-md transition-all flex items-center justify-center gap-2 group"
                >
                  <BarChart3 className="w-4 h-4 text-[#ea9835]" />
                  <span>انتقل لخانة تحليل النص والتقييم المفصل</span>
                  <ArrowRight className="w-3.5 h-3.5 rotate-180 group-hover:-translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Official IAU Rubric Checklist (/5 Marks) */}
              <div className="p-4 bg-[#214ecf]/5 border border-[#214ecf]/15 rounded-xl text-xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-[#214ecf] block">معايير التصحيح المعتمدة:</span>
                  <span className="font-bold font-brand-en text-slate-900 bg-white px-2 py-0.5 rounded border border-slate-200">
                    الدرجة التقديرية: {analysisReport.totalScore} / 5
                  </span>
                </div>
                <ul className="space-y-1.5 text-slate-700 text-[11px]">
                  <li className="flex items-start gap-1.5">
                    <CheckCircle className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${sentences[1]?.trim() ? 'text-emerald-600' : 'text-slate-400'}`} />
                    <span><strong>1 درجة:</strong> جملة مفتاحية واضحة وإزاحة السطر الأول ({analysisReport.tsScore}/1).</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${filledSentenceCount >= 6 ? 'text-emerald-600' : 'text-slate-400'}`} />
                    <span><strong>2 درجة:</strong> ترابط 6 أفكار داعمة وتفاصيل وثيقة الصلة ({analysisReport.ssScore}/2).</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${sentences[8]?.trim() ? 'text-emerald-600' : 'text-slate-400'}`} />
                    <span><strong>1 درجة:</strong> جملة ختامية صريحة تلخص الفكرة ({analysisReport.csScore}/1).</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${detectedConnectors.length >= 2 ? 'text-emerald-600' : 'text-slate-400'}`} />
                    <span><strong>1 درجة:</strong> أدوات الربط، وصحة الإملاء والترقيم والقواعد ({analysisReport.mechanicsScore}/1).</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* ANALYSIS TAB (خانة تحليل النص المكتوب)                   */}
      {/* ======================================================== */}
      {activeTab === 'analysis' && (
        <div className="space-y-8 max-w-5xl mx-auto">
          {/* Header Score Card */}
          <div className="p-6 rounded-3xl bg-gradient-to-l from-slate-950 via-slate-900 to-[#214ecf] text-white shadow-md relative overflow-hidden">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#ea9835] text-slate-950 text-xs font-bold flex items-center gap-1.5">
                    <FileCheck className="w-3.5 h-3.5" />
                    <span>تقرير تحليل النص الأكاديمي</span>
                  </span>
                  <span className="text-xs text-[#84a5f2] font-brand-en">Unit {activePrompt.unit} Topic</span>
                </div>
                <h3 className="text-xl font-bold tracking-tight text-white">
                  نتيجة تحليل فقرة الـ 8 جُمل المكتوبة
                </h3>
                <p className="text-xs text-white/80 max-w-xl leading-relaxed">
                  تم فحص النص بناءً على سلم درجات قسم اللغة الإنجليزية بجامعة الإمام (DEL Midterm Rubric) ومطابقة معايير الجملة المفتاحية، أدوات الربط، والتراكيب النحوية.
                </p>
              </div>

              {/* Total Score Circle / Badge */}
              <div className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl backdrop-blur-xs border border-white/15">
                <div className="text-center">
                  <span className="text-[11px] text-white/70 block font-semibold mb-0.5">الدرجة المستحقة التقديرية</span>
                  <div className="text-3xl font-extrabold text-[#ea9835] font-brand-en tracking-tight">
                    {analysisReport.totalScore} <span className="text-lg text-white/60 font-normal">/ 5.0</span>
                  </div>
                  <span className="text-[10px] text-white/80 block mt-0.5">
                    {analysisReport.totalScore >= 4.5 ? '🏆 ممتاز جداً' :
                     analysisReport.totalScore >= 3.5 ? '👍 جيد جداً' :
                     analysisReport.totalScore >= 2.5 ? '⚠️ متوسط يحتاج تدريب' : '❌ بحاجة لمراجعة الشروط'}
                  </span>
                </div>

                <div className="h-12 w-px bg-white/20" />

                <div className="text-center px-1">
                  <span className="text-[11px] text-white/70 block font-semibold mb-0.5">نسبة الإنجاز</span>
                  <div className="text-2xl font-bold text-white font-brand-en">
                    {Math.round((filledSentenceCount / 8) * 100)}%
                  </div>
                  <span className="text-[10px] text-white/70 block mt-0.5 font-brand-en">
                    {totalWordCount} words
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Metrics 4 Columns */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-1">
              <span className="text-[11px] text-slate-500 font-semibold block">1. الجملة المفتاحية (TS)</span>
              <div className="flex items-baseline justify-between">
                <span className="text-lg font-bold text-slate-900 font-brand-en">{analysisReport.tsScore} / 1.0</span>
                <span className={`text-[11px] font-bold ${analysisReport.tsScore === 1 ? 'text-emerald-600' : 'text-[#ea9835]'}`}>
                  {analysisReport.tsScore === 1 ? 'مستوفاة' : 'ناقصة'}
                </span>
              </div>
              <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden mt-1">
                <div className="bg-[#214ecf] h-full" style={{ width: `${(analysisReport.tsScore / 1) * 100}%` }} />
              </div>
            </div>

            <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-1">
              <span className="text-[11px] text-slate-500 font-semibold block">2. الجمل الداعمة (6 SS)</span>
              <div className="flex items-baseline justify-between">
                <span className="text-lg font-bold text-slate-900 font-brand-en">{analysisReport.ssScore} / 2.0</span>
                <span className={`text-[11px] font-bold ${analysisReport.ssScore >= 1.5 ? 'text-emerald-600' : 'text-[#ea9835]'}`}>
                  {analysisReport.ssScore >= 1.5 ? 'مترابطة' : 'قيد التطوير'}
                </span>
              </div>
              <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden mt-1">
                <div className="bg-[#214ecf] h-full" style={{ width: `${(analysisReport.ssScore / 2) * 100}%` }} />
              </div>
            </div>

            <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-1">
              <span className="text-[11px] text-slate-500 font-semibold block">3. الجملة الختامية (CS)</span>
              <div className="flex items-baseline justify-between">
                <span className="text-lg font-bold text-slate-900 font-brand-en">{analysisReport.csScore} / 1.0</span>
                <span className={`text-[11px] font-bold ${analysisReport.csScore === 1 ? 'text-emerald-600' : 'text-[#ea9835]'}`}>
                  {analysisReport.csScore === 1 ? 'مستوفاة' : 'ناقصة'}
                </span>
              </div>
              <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden mt-1">
                <div className="bg-[#214ecf] h-full" style={{ width: `${(analysisReport.csScore / 1) * 100}%` }} />
              </div>
            </div>

            <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-1">
              <span className="text-[11px] text-slate-500 font-semibold block">4. أدوات الربط والترقيم</span>
              <div className="flex items-baseline justify-between">
                <span className="text-lg font-bold text-slate-900 font-brand-en">{analysisReport.mechanicsScore} / 1.0</span>
                <span className="text-[11px] font-bold text-slate-600">
                  {detectedConnectors.length} أدوات
                </span>
              </div>
              <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden mt-1">
                <div className="bg-[#214ecf] h-full" style={{ width: `${(analysisReport.mechanicsScore / 1) * 100}%` }} />
              </div>
            </div>
          </div>

          {/* Detailed Recommendations & Feedback Boxes */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
            <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#214ecf]" />
              <span>ملاحظات التحليل الفوري وتوجيهات التصحيح:</span>
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {analysisReport.recommendations.map((rec, idx) => (
                <div 
                  key={idx}
                  className={`p-4 rounded-xl border flex items-start gap-3 ${
                    rec.type === 'success' ? 'bg-emerald-50/60 border-emerald-200 text-emerald-950' :
                    rec.type === 'warning' ? 'bg-amber-50/60 border-amber-200 text-amber-950' :
                    'bg-[#214ecf]/5 border-[#214ecf]/20 text-slate-900'
                  }`}
                >
                  {rec.type === 'success' ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  ) : rec.type === 'warning' ? (
                    <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  ) : (
                    <HelpCircle className="w-4 h-4 text-[#214ecf] shrink-0 mt-0.5" />
                  )}
                  <div>
                    <h5 className="text-xs font-bold">{rec.titleAr}</h5>
                    <p className="text-[11px] text-slate-600 leading-relaxed mt-0.5">{rec.descAr}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sentence by Sentence Detailed Inspection Table */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-100">
              <div className="space-y-0.5">
                <h4 className="text-sm font-bold text-slate-900">
                  فحص الجمل الثمانية تفصيلياً (Sentence-by-Sentence Audit)
                </h4>
                <p className="text-xs text-slate-500">
                  تأكد من وظيفة كل جملة، وجود حرف كبير في البداية ونقطة ختامية.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setActiveTab('builder')}
                className="text-xs font-bold text-[#214ecf] hover:underline flex items-center gap-1"
              >
                <span>تعديل الجمل في معمل البناء</span>
                <ArrowRight className="w-3 h-3 rotate-180" />
              </button>
            </div>

            <div className="space-y-3">
              {analysisReport.sentenceAudits.map((item) => (
                <div 
                  key={item.sentenceNum}
                  className={`p-4 rounded-xl border transition-all ${
                    !item.isFilled 
                      ? 'bg-rose-50/40 border-rose-200' 
                      : item.startsCapital && item.endsWithPeriod 
                        ? 'bg-white border-slate-200' 
                        : 'bg-amber-50/40 border-amber-200'
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                    <div className="flex items-center gap-2">
                      <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white font-brand-en ${
                        item.isFilled ? 'bg-[#214ecf]' : 'bg-rose-500'
                      }`}>
                        {item.sentenceNum}
                      </span>
                      <span className="text-xs font-bold text-slate-900">
                        Sentence {item.sentenceNum} ({
                          item.template.type === 'TS' ? 'الجملة المفتاحية' :
                          item.template.type === 'CS' ? 'الجملة الختامية' :
                          item.template.type === 'SS' ? 'جملة داعمة' : 'تفصيل / مثال'
                        })
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-[10px]">
                      {item.isFilled ? (
                        <>
                          <span className={`px-2 py-0.5 rounded font-bold ${
                            item.startsCapital ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                          }`}>
                            {item.startsCapital ? '✓ حرف كبير' : '⚠️ يبدأ بحرف صغير'}
                          </span>
                          <span className={`px-2 py-0.5 rounded font-bold ${
                            item.endsWithPeriod ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                          }`}>
                            {item.endsWithPeriod ? '✓ علامة ترقيم' : '⚠️ بدون نقطة ختامية'}
                          </span>
                          <span className="text-slate-400 font-brand-en font-semibold">
                            {item.wordCount} words
                          </span>
                        </>
                      ) : (
                        <span className="text-rose-600 font-bold bg-rose-100 px-2 py-0.5 rounded">
                          لم تُكتب بعد
                        </span>
                      )}
                    </div>
                  </div>

                  {item.isFilled ? (
                    <p className="text-xs text-slate-800 font-brand-en bg-slate-50 p-2.5 rounded-lg border border-slate-100 leading-relaxed" dir="ltr">
                      {item.text}
                    </p>
                  ) : (
                    <div className="p-2.5 rounded-lg border border-dashed border-rose-300 bg-rose-50/50 flex items-center justify-between">
                      <span className="text-xs text-rose-700 italic">
                        {item.template.guideAr}
                      </span>
                      <button
                        type="button"
                        onClick={() => {
                          handleLoadTemplateStarter(item.sentenceNum, item.template.starterHintEn);
                        }}
                        className="text-[11px] font-bold text-[#214ecf] hover:underline"
                      >
                        إدراج صياغة نموذجية
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Full Assembled Paragraph Card in Analysis */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <h4 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                <FileCheck className="w-4 h-4 text-[#214ecf]" />
                <span>النسخة النهائية الجاهزة للاختبار (Final Assembled Submission)</span>
              </h4>
              <button
                disabled={!combinedParagraph}
                onClick={handleCopy}
                className="text-xs font-bold text-slate-700 hover:text-slate-900 flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'تم النسخ بنجاح!' : 'نسخ الفقرة كاملة'}</span>
              </button>
            </div>

            <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 text-sm font-brand-en leading-relaxed text-slate-900 select-all whitespace-pre-wrap">
              {combinedParagraph ? (
                <>
                  <span className="inline-block w-8" aria-hidden="true" />
                  {combinedParagraph}
                </>
              ) : (
                <span className="text-slate-400 font-sans italic text-xs block text-center py-6">
                  لم تقم بكتابة أي جمل بعد. توجه لمعمل البناء واكتب الجمل لترى تحليلاً دقيقاً.
                </span>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* MODEL ESSAY TAB                                          */}
      {/* ======================================================== */}
      {activeTab === 'model' && (
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-6 max-w-4xl mx-auto">
          <div>
            <span className="text-xs font-bold text-[#214ecf] bg-[#214ecf]/10 px-2.5 py-1 rounded-md">
              النموذج المثالي الموصى به (Full Model 8-Sentence Paragraph)
            </span>
            <h3 className="text-xl font-bold text-slate-900 mt-2 font-brand-en">
              {activePrompt.titleEn}
            </h3>
            <p className="text-xs text-slate-600 mt-1">{activePrompt.titleAr}</p>
          </div>

          {/* Full Model Paragraph Block */}
          <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 text-sm font-brand-en leading-relaxed text-slate-900">
            <span className="inline-block w-8" aria-hidden="true" />
            <span className="text-[#214ecf] font-bold bg-[#214ecf]/10 px-1.5 py-0.5 rounded">
              {activePrompt.modelParagraph.topicSentence}
            </span>{' '}
            {activePrompt.modelParagraph.supportingSentences.map((s, idx) => (
              <span key={idx} className={s.type === 'SS' ? 'text-slate-900 font-semibold' : 'text-slate-700'}>
                {s.sentence}{' '}
              </span>
            ))}
            <span className="text-emerald-800 font-bold bg-emerald-50 px-1.5 py-0.5 rounded">
              {activePrompt.modelParagraph.concludingSentence}
            </span>
          </div>

          {/* Sentence by Sentence Breakdown */}
          <div className="space-y-3 pt-2">
            <h4 className="text-sm font-bold text-slate-800">تحليل وتفكيك جمل الفقرة النموذجية:</h4>
            <div className="space-y-2 text-xs">
              <div className="p-3 bg-[#214ecf]/5 border border-[#214ecf]/15 rounded-xl">
                <strong className="text-[#214ecf] block mb-0.5">Sentence 1 (Topic Sentence):</strong>
                <p className="font-brand-en text-slate-900 font-semibold">{activePrompt.modelParagraph.topicSentence}</p>
                <span className="text-[11px] text-slate-500 font-sans block mt-0.5">تقدم الفكرة الرئيسية وتحدد محور الحديث العام.</span>
              </div>

              {activePrompt.modelParagraph.supportingSentences.map((item, idx) => (
                <div key={idx} className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                  <div className="flex items-center justify-between text-[11px] font-bold text-slate-700 mb-0.5">
                    <span>Sentence {idx + 2} ({item.type === 'SS' ? 'Supporting Sentence' : 'Detail'}):</span>
                    <span className="text-slate-500 font-sans">{item.labelAr}</span>
                  </div>
                  <p className="font-brand-en text-slate-800">{item.sentence}</p>
                </div>
              ))}

              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl">
                <strong className="text-emerald-900 block mb-0.5">Sentence 8 (Concluding Sentence):</strong>
                <p className="font-brand-en text-slate-900 font-semibold">{activePrompt.modelParagraph.concludingSentence}</p>
                <span className="text-[11px] text-slate-500 font-sans block mt-0.5">تختم الفقرة بإعادة صياغة الفكرة ورأي نهائي متزن.</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* VIDEO TAB (خانة مقطع الفيديو لشرح معمل الكتابة)           */}
      {/* ======================================================== */}
      {activeTab === 'video' && (
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Header Card */}
          <div className="p-6 rounded-3xl bg-gradient-to-l from-slate-950 via-slate-900 to-[#214ecf] text-white shadow-md">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-[#ea9835] text-slate-950 text-xs font-bold flex items-center gap-1.5">
                  <Video className="w-3.5 h-3.5" />
                  <span>الشرح المرئي والإرشادي</span>
                </span>
                <span className="text-xs text-[#84a5f2] font-brand-en">Writing Tutorial Video & Guide</span>
              </div>
              <h3 className="text-xl font-bold tracking-tight text-white">
                شرح معمل الكتابة الأكاديمية لاختبار المنتصف (8 جمل)
              </h3>
              <p className="text-xs text-white/80 max-w-2xl leading-relaxed">
                شرح تطبيقي عملي لكيفية صياغة الجملة المفتاحية، واستخدام أدوات الربط، وصياغة الجمل الداعمة بدقة للاختبار النصفي.
              </p>
            </div>
          </div>

          <div className="p-3 sm:p-4 bg-white rounded-3xl border border-slate-200 shadow-md space-y-2.5 max-w-3xl mx-auto">
            <div className="w-full max-w-full rounded-2xl overflow-hidden bg-black shadow-inner">
              <video
                src="/videos/فيديو.MP4"
                controls
                preload="metadata"
                playsInline
                className="block w-full max-w-full h-auto"
                onError={() => setVideoLoadError(true)}
              >
                متصفحك لا يدعم تشغيل هذا الفيديو مباشرة.
              </video>
            </div>
            {videoLoadError && (
              <p role="alert" className="px-2 text-xs font-semibold text-red-700">
                تعذّر تحميل ملف الفيديو. يُرجى التحقق من اتصالك أو إعادة تحميل الصفحة.
              </p>
            )}
            <div className="px-2 pt-1 space-y-1">
              <h4 className="text-sm font-bold text-slate-900">
                شرح استراتيجية كتابة الفقرة الأكاديمية (8 جمل)
              </h4>
              <p className="text-xs text-slate-500 max-w-lg leading-relaxed">
                تابع التوجيهات والقواعد المعتمدة أدناه لصياغة الجملة المفتاحية (Topic Sentence)، والجمل الداعمة (Supporting Sentences)، والجملة الختامية (Concluding Sentence) لتحقيق الدرجة الكاملة (5/5).
              </p>
            </div>
          </div>

          {/* Quick Learning Checkpoints */}
          <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
            <h4 className="text-xs font-bold text-slate-900 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>أهم الملاحظات الواجب تطبيقها بعد مشاهدة مقطع الشرح:</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-700">
              <div className="p-3 bg-white rounded-xl border border-slate-200 space-y-1">
                <span className="font-bold text-[#214ecf] block">1. مسافة البادئة (Indent):</span>
                <p className="text-[11px] text-slate-600">ترك مسافة بمقدار 5 أحرف أو ضغط مفتاح Tab في بداية أول سطر فقط.</p>
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200 space-y-1">
                <span className="font-bold text-[#ea9835] block">2. أدوات الربط (Connectors):</span>
                <p className="text-[11px] text-slate-600">استخدام أدوات مثل (because, when, in order to, but) لربط الأفكار بمرونة.</p>
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200 space-y-1">
                <span className="font-bold text-emerald-700 block">3. الجملة الختامية (Conclusion):</span>
                <p className="text-[11px] text-slate-600">تلخيص الأفكار الداعمة الست دون إضافة معلومات مفاجئة لم تُذكر سابقاً.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
