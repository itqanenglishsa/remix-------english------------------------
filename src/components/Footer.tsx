import React from 'react';
import { ItqanLogo } from './ItqanLogo';
import { BrandReadingIcon, BrandWritingIcon, BrandSpeakingIcon, BrandListeningIcon } from './BrandIcons';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-right">
          {/* Brand Identity & Mission */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <ItqanLogo variant="white" size="md" showSubtitle={true} />
            <div className="h-8 w-px bg-slate-800 hidden sm:block" />
            <div className="text-right">
              <p className="font-bold text-white text-xs">
                منصة إتقان لتعليم اللغة الإنجليزية للناطقين بالعربية
              </p>
              <p className="text-[11px] text-slate-400">
                شريك النجاح الأكاديمي لطلاب السنة التحضيرية · جامعة الإمام عبد الرحمن بن فيصل
              </p>
            </div>
          </div>

          {/* 4 Skills Icons Strip */}
          <div className="flex items-center gap-4 text-slate-400">
            <div className="flex items-center gap-1.5" title="Writing">
              <BrandWritingIcon size={18} className="text-[#e06045]" />
              <span className="text-[11px]">الكتابة</span>
            </div>
            <div className="flex items-center gap-1.5" title="Reading">
              <BrandReadingIcon size={18} className="text-[#214ecf]" />
              <span className="text-[11px]">القراءة</span>
            </div>
            <div className="flex items-center gap-1.5" title="Listening">
              <BrandListeningIcon size={18} className="text-[#ea9835]" />
              <span className="text-[11px]">الاستماع</span>
            </div>
            <div className="flex items-center gap-1.5" title="Speaking">
              <BrandSpeakingIcon size={18} className="text-[#84a5f2]" />
              <span className="text-[11px]">التحدث</span>
            </div>
          </div>

          {/* Exam Details */}
          <div className="text-center lg:text-left text-[11px] space-y-0.5">
            <p className="text-slate-300">
              المقرر: <span className="font-brand-en font-medium">Q: Skills for Success Book 1 (Units 3, 4, 5, 6)</span>
            </p>
            <p className="text-slate-400">
              موعد الاختبار: الثلاثاء 20 أكتوبر 2026 (1:00 - 3:00 ظهراً) · التحدث: 18-19 أكتوبر
            </p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-500 text-center">
          <p>© 2026 منصة إتقان ENGLISH. جميع المهارات اللغوية في تجربة تعليمية واحدة.</p>
          <p>عمادة السنة التحضيرية والدراسات المساندة · قسم اللغة الإنجليزية DEL.</p>
        </div>
      </div>
    </footer>
  );
};
