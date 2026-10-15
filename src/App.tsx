import React, { useState } from 'react';
import { Header } from './components/Header';
import { BlueprintBanner } from './components/BlueprintBanner';
import { SummarySection } from './components/SummarySection';
import { ExamSection } from './components/ExamSection';
import { WritingLab } from './components/WritingLab';
import { SpeakingLab } from './components/SpeakingLab';
import { Footer } from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState<'summary' | 'exam' | 'writing' | 'speaking' | 'blueprint'>('summary');
  const [examUnitFilter, setExamUnitFilter] = useState<number | 'all'>('all');

  const handleStartFullExam = () => {
    setExamUnitFilter('all');
    setActiveTab('exam');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStartExamWithUnit = (unitNumber: number) => {
    setExamUnitFilter(unitNumber);
    setActiveTab('exam');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      {/* Top Bar Navigation */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onStartFullExam={handleStartFullExam}
      />

      {/* Hero Blueprint Banner (Always visible in summary and blueprint tabs) */}
      {(activeTab === 'summary' || activeTab === 'blueprint') && (
        <BlueprintBanner
          onNavigate={(tab) => {
            setActiveTab(tab);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      )}

      {/* Main Content Areas */}
      <main className="flex-1">
        {activeTab === 'summary' && (
          <SummarySection onStartExamWithUnit={handleStartExamWithUnit} />
        )}


        {activeTab === 'exam' && (
          <ExamSection initialUnitFilter={examUnitFilter} />
        )}

        {activeTab === 'writing' && (
          <WritingLab />
        )}

        {activeTab === 'speaking' && (
          <SpeakingLab />
        )}

        {activeTab === 'blueprint' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <h2 className="text-xl font-bold text-slate-900">
                نصائح واستراتيجيات قسم اللغة الإنجليزية (DEL) للدرجة الكاملة (20/20)
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs leading-relaxed text-slate-700">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                  <h3 className="font-bold text-[#214ecf] text-sm">💡 استراتيجية أسئلة MCQs (10 درجات / 50 سؤال):</h3>
                  <p>1. اقرأ السؤال وخياراته الأربعة بعناية قبل اختيار الإجابة؛ تجنب الاستعجال فالوقت (120 دقيقة) كافٍ بمعدل أكثر من دقيقتين لكل سؤال.</p>
                  <p>2. في أسئلة القواعد، دقق في توافق الفاعل مع الفعل وفي وجود حروف الجر بعد الأفعال (avoid + ing، be going to + verb).</p>
                  <p>3. في أسئلة المفردات، انتبه لنوع الكلمة (Part of speech) وما إذا كان السياق يتطلب اسماً أو فعلاً أو صفة.</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                  <h3 className="font-bold text-[#e06045] text-sm">✍️ استراتيجية قسم الكتابة (5 درجات / 8 جمل):</h3>
                  <p>1. ابدأ بمسافة بادئة (Indent) للجملة الأولى، وتأكد من أن الجملة المفتاحية (Topic Sentence) تعلن بوضوح عن الفكرة العامة.</p>
                  <p>2. لا تكتب جملاً قصيرة جداً أو مقطوعة؛ استخدم أدوات الربط المطلوبة (because, when, in order to, but, for example).</p>
                  <p>3. تأكد من عدد الجمل (8 جمل بالضبط) وأن كل جملة تبدأ بحرف كبير (Capital letter) وتنتهي بنقطة (Period).</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                  <h3 className="font-bold text-[#ea9835] text-sm">🎙️ استراتيجية اختبار التحدث (5 درجات):</h3>
                  <p>1. في النقاش الجماعي، لا تقاطع زميلك بشكل مفاجئ، بل استخدم عبارات مثل: "That's a good point, and I also think..."</p>
                  <p>2. في السؤال الفردي، تحدث بثقة لمدة 60 ثانية متواصلة وركز على نطق الكلمات بوضوح والتواصل البصري مع الأستاذ.</p>
                  <p>3. استشهد بالحقائق والأمثلة التي درستها في وحدات الكتاب (مثل دراسة المربى، أو البكل بول، أو فوائد الضحك).</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                  <h3 className="font-bold text-[#214ecf] text-sm">⏰ تنظيم جدول المذاكرة خلال الأسبوع:</h3>
                  <p>1. الأحد والإثنين: المراجعة المكثفة لأسئلة التحدث والتدرب مع الزملاء على النقاش الجماعي.</p>
                  <p>2. الثلاثاء إلى الجمعة: حل بطاقات الحفظ (Flashcards) وإتقان جميع مفردات وقواعد الوحدات 3 و 4 و 5 و 6.</p>
                  <p>3. السبت والأحد قبل الاختبار: إجراء الاختبار الشامل الكامل (50 سؤال) تحت ضغط الوقت.</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
