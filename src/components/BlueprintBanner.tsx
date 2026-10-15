import React, { useState, useEffect } from 'react';
import { Calendar, Clock, BookOpen, ArrowLeft } from 'lucide-react';
import { IAU_MIDTERM_BLUEPRINT } from '../data/blueprintData';
import { ItqanLogo } from './ItqanLogo';
import { 
  BrandReadingIcon, 
  BrandWritingIcon, 
  BrandSpeakingIcon, 
  BrandListeningIcon 
} from './BrandIcons';

interface BlueprintBannerProps {
  onNavigate: (tab: 'summary' | 'exam' | 'writing' | 'speaking' | 'blueprint') => void;
}

export const BlueprintBanner: React.FC<BlueprintBannerProps> = ({ onNavigate }) => {
  // Countdown to Exam Date: Oct 20, 2026 13:00:00 AST
  const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number; seconds: number }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const examTarget = new Date('2026-10-20T13:00:00+03:00').getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = examTarget - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Top Institutional & Brand Identity Bar */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#214ecf] tracking-wide mb-1.5">
              <span>إتقان ENGLISH</span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight flex items-center gap-3">
              <span>مخطط ودليل اختبار المنتصف (Midterm Exam Blueprint)</span>
            </h1>
          </div>

          {/* Countdown & Exam Badge */}
          <div className="bg-[#214ecf] text-white rounded-2xl p-4 shrink-0 shadow-sm flex flex-col justify-between border border-[#84a5f2]/40">
            <div className="flex items-center justify-between gap-3 text-xs text-white/90 font-medium mb-1.5">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#ea9835]" />
                <span>العد التنازلي للاختبار التحريري:</span>
              </span>
              <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded-full font-bold">الأسبوع 9</span>
            </div>
            
            <div className="flex items-baseline gap-3 text-center tabular-nums font-brand-en">
              <div className="bg-black/15 px-2.5 py-1 rounded-lg min-w-[42px]">
                <span className="text-xl font-bold text-white block">{timeLeft.days}</span>
                <span className="text-[10px] text-white/70 block font-sans">يوم</span>
              </div>
              <span className="text-white/40 font-bold">:</span>
              <div className="bg-black/15 px-2.5 py-1 rounded-lg min-w-[42px]">
                <span className="text-xl font-bold text-white block">{timeLeft.hours}</span>
                <span className="text-[10px] text-white/70 block font-sans">ساعة</span>
              </div>
              <span className="text-white/40 font-bold">:</span>
              <div className="bg-black/15 px-2.5 py-1 rounded-lg min-w-[42px]">
                <span className="text-xl font-bold text-white block">{timeLeft.minutes}</span>
                <span className="text-[10px] text-white/70 block font-sans">دقيقة</span>
              </div>
              <span className="text-white/40 font-bold">:</span>
              <div className="bg-black/15 px-2.5 py-1 rounded-lg min-w-[42px]">
                <span className="text-xl font-bold text-[#ea9835] block">{timeLeft.seconds}</span>
                <span className="text-[10px] text-white/70 block font-sans">ثانية</span>
              </div>
            </div>
          </div>
        </div>

        {/* Schedule & Timing Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <div className="flex items-center gap-2 text-xs font-bold text-[#214ecf] mb-1">
              <Calendar className="w-4 h-4 text-[#214ecf]" />
              <span>الاختبار التحريري (Written Exam)</span>
            </div>
            <p className="text-sm font-bold text-slate-900">{IAU_MIDTERM_BLUEPRINT.examDay}</p>
            <p className="text-xs text-slate-600 mt-0.5">{IAU_MIDTERM_BLUEPRINT.examDate} · {IAU_MIDTERM_BLUEPRINT.writtenTime}</p>
            <p className="text-xs text-[#214ecf] font-semibold mt-1">المدة: ساعتان (120 دقيقة)</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <div className="flex items-center gap-2 text-xs font-bold text-[#e06045] mb-1">
              <Clock className="w-4 h-4 text-[#e06045]" />
              <span>اختبار التحدث (Speaking Exam)</span>
            </div>
            <p className="text-sm font-bold text-slate-900">الأحد و/أو الإثنين 18 - 19 أكتوبر 2026</p>
            <p className="text-xs text-slate-600 mt-0.5">حسب جدول مجموعات قسم اللغة الإنجليزية (DEL)</p>
            <p className="text-xs text-slate-700 font-semibold mt-1">نقاش جماعي (3-4 دقائق) + سؤال فردي (دقيقة)</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <div className="flex items-center gap-2 text-xs font-bold text-[#ea9835] mb-1">
              <BookOpen className="w-4 h-4 text-[#ea9835]" />
              <span>محتوى الاختبار وتوزيع الدرجات</span>
            </div>
            <p className="text-sm font-bold text-slate-900">المجموع: 20 درجة (100% من وزن الاختبار)</p>
            <p className="text-xs text-slate-600 mt-0.5">كتاب Q: Skills 1 (الوحدات: 3، 4، 5، 6) + كتاب Q: Skills 2 (الوحدة 1)</p>
            <p className="text-xs text-slate-700 font-semibold mt-1">مستوى المبتدئين (Beginner Level)</p>
          </div>
        </div>

        {/* The 4 Skills Brand Ribbon (From Brand Guidelines Page 8) */}
        <div className="mb-6 p-4 rounded-2xl bg-gradient-to-l from-[#214ecf]/5 via-white to-[#ea9835]/5 border border-slate-200">
          <div className="flex items-center justify-between text-xs font-bold text-slate-800 mb-3">
            <span>المهارات اللغوية الأربع المعتمدة (Four Core Language Skills):</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-center gap-3 shadow-2xs">
              <div className="w-10 h-10 rounded-lg bg-[#214ecf]/10 text-[#214ecf] flex items-center justify-center shrink-0">
                <BrandReadingIcon size={24} />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-900 block">القراءة (Reading)</span>
                <span className="text-[11px] text-slate-500 block">10 أسئلة · درجتان</span>
              </div>
            </div>

            <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-center gap-3 shadow-2xs">
              <div className="w-10 h-10 rounded-lg bg-[#ea9835]/10 text-[#ea9835] flex items-center justify-center shrink-0">
                <BrandListeningIcon size={24} />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-900 block">الاستماع (Listening)</span>
                <span className="text-[11px] text-slate-500 block">10 أسئلة · درجتان</span>
              </div>
            </div>

            <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-center gap-3 shadow-2xs">
              <div className="w-10 h-10 rounded-lg bg-[#e06045]/10 text-[#e06045] flex items-center justify-center shrink-0">
                <BrandWritingIcon size={24} />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-900 block">الكتابة (Writing)</span>
                <span className="text-[11px] text-slate-500 block">فقرة من 8 جمل · 5 درجات</span>
              </div>
            </div>

            <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-center gap-3 shadow-2xs">
              <div className="w-10 h-10 rounded-lg bg-[#84a5f2]/20 text-[#214ecf] flex items-center justify-center shrink-0">
                <BrandSpeakingIcon size={24} />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-900 block">التحدث (Speaking)</span>
                <span className="text-[11px] text-slate-500 block">جماعي وفردي · 5 درجات</span>
              </div>
            </div>
          </div>
        </div>

        {/* The 3 Core Sections Breakdown Cards with Brand Styling */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Card 1: MCQs */}
          <div className="flex flex-col justify-between p-6 rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-[#214ecf] transition-all">
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-xs font-bold text-[#214ecf] bg-[#214ecf]/10 px-2.5 py-0.5 rounded-md">
                  الوزن: 50% (10 درجات)
                </span>
                <span className="text-xs text-slate-500 font-medium">50 سؤال اختيار من متعدد</span>
              </div>
              <h2 className="text-lg font-bold text-slate-900 mb-2">
                1. الأسئلة الموضوعية (MCQs)
              </h2>
              <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                50 سؤالاً موضوعياً بنظام الاختيار من متعدد تغطي كامل مهارات المقرر (الوحدات 3، 4، 5، 6 من كتاب 1 + الوحدة 1 من كتاب 2):
              </p>
              <div className="space-y-2 text-xs border-t border-slate-100 pt-3">
                <div className="flex items-center justify-between text-slate-700">
                  <span className="flex items-center gap-1.5"><BrandReadingIcon size={14} className="text-[#214ecf]" /> القراءة (Reading):</span>
                  <span className="font-semibold text-slate-900">10 أسئلة (درجتان)</span>
                </div>
                <div className="flex items-center justify-between text-slate-700">
                  <span className="flex items-center gap-1.5">💡 المفردات (Vocabulary):</span>
                  <span className="font-semibold text-slate-900">15 سؤالاً (3 درجات)</span>
                </div>
                <div className="flex items-center justify-between text-slate-700">
                  <span className="flex items-center gap-1.5">📝 القواعد (Grammar):</span>
                  <span className="font-semibold text-slate-900">15 سؤالاً (3 درجات)</span>
                </div>
                <div className="flex items-center justify-between text-slate-700">
                  <span className="flex items-center gap-1.5"><BrandListeningIcon size={14} className="text-[#ea9835]" /> الاستماع (Listening):</span>
                  <span className="font-semibold text-slate-900">10 أسئلة (درجتان)</span>
                </div>
              </div>
            </div>
            <div className="mt-6 flex flex-col gap-2">
              <button
                onClick={() => onNavigate('exam')}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-bold text-white bg-[#214ecf] hover:bg-[#1a3ea8] rounded-xl transition-colors shadow-xs"
              >
                <span>ابدأ بنك أسئلة الاختبار الشامل (50Q / 120 دقيقة)</span>
                <ArrowLeft className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 2: Writing */}
          <div className="flex flex-col justify-between p-6 rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-[#e06045] transition-all">
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-xs font-bold text-[#e06045] bg-[#e06045]/10 px-2.5 py-0.5 rounded-md">
                  الوزن: 25% (5 درجات)
                </span>
                <span className="text-xs text-slate-500 font-medium">فقرة من 8 جمل</span>
              </div>
              <h2 className="text-lg font-bold text-slate-900 mb-2">
                2. قسم الكتابة (Writing)
              </h2>
              <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                تختار موضوعاً واحداً من بين 3 خيارات وتكتب فقرة متماسكة ومترابطة من 8 جمل دقيقة البناء:
              </p>
              <div className="space-y-2 text-xs border-t border-slate-100 pt-3 text-slate-700">
                <div className="flex items-start gap-1.5">
                  <span className="text-[#e06045] font-bold">●</span>
                  <span><strong>جملة مفتاحية (Topic Sentence):</strong> الفكرة العامة وإزاحة السطر الأول.</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <span className="text-[#e06045] font-bold">●</span>
                  <span><strong>6 جمل داعمة وتفاصيل:</strong> أسباب وأمثلة مع أدوات الربط (because, when, in order to).</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <span className="text-[#e06045] font-bold">●</span>
                  <span><strong>جملة ختامية (Concluding Sentence):</strong> إعادة صياغة ورأي نهائي.</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => onNavigate('writing')}
              className="mt-6 w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-bold text-white bg-[#e06045] hover:bg-[#c84d33] rounded-xl transition-colors shadow-xs"
            >
              <span>فتح معمل التدريب على الفقرة</span>
              <ArrowLeft className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 3: Speaking */}
          <div className="flex flex-col justify-between p-6 rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-[#ea9835] transition-all">
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-xs font-bold text-[#ea9835] bg-[#ea9835]/15 px-2.5 py-0.5 rounded-md">
                  الوزن: 25% (5 درجات)
                </span>
                <span className="text-xs text-slate-500 font-medium">شفهي حضوري</span>
              </div>
              <h2 className="text-lg font-bold text-slate-900 mb-2">
                3. قسم التحدث (Speaking)
              </h2>
              <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                تقييم شفهي حضوري لقياس مهارات التواصل الأكاديمي والطلاقة واللفظ السليم:
              </p>
              <div className="space-y-2 text-xs border-t border-slate-100 pt-3 text-slate-700">
                <div className="flex items-start gap-1.5">
                  <span className="text-[#ea9835] font-bold">●</span>
                  <span><strong>نقاش جماعي (3-4 دقائق):</strong> تبادل الآراء، وإسناد المعلومات، والتفاعل.</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <span className="text-[#ea9835] font-bold">●</span>
                  <span><strong>سؤال فردي (دقيقة واحدة):</strong> إجابة متسلسلة باستخدام مفردات وقواعد الوحدات.</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <span className="text-[#ea9835] font-bold">●</span>
                  <span><strong>معايير التقييم:</strong> صحة القواعد، ثراء الكلمات، التنغيم، والتواصل البصري.</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => onNavigate('speaking')}
              className="mt-6 w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-bold text-white bg-[#ea9835] hover:bg-[#d48422] rounded-xl transition-colors shadow-xs"
            >
              <span>دليل ونماذج اختبار التحدث</span>
              <ArrowLeft className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
