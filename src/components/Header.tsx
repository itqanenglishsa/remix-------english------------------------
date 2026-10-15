import React from 'react';
import { ItqanLogo } from './ItqanLogo';
import { BrandReadingIcon, BrandWritingIcon, BrandSpeakingIcon, BrandListeningIcon } from './BrandIcons';

interface HeaderProps {
  activeTab: 'summary' | 'exam' | 'writing' | 'speaking' | 'blueprint';
  setActiveTab: (tab: 'summary' | 'exam' | 'writing' | 'speaking' | 'blueprint') => void;
  onStartFullExam: () => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab, onStartFullExam }) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#214ecf]/15 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-6">
        {/* Zone 1: Single text element Brand wordmark with Itqan Logo */}
        <div 
          onClick={() => setActiveTab('summary')}
          className="flex items-center gap-3 cursor-pointer shrink-0"
        >
          <ItqanLogo size="sm" showSubtitle={true} />
        </div>

        {/* Zone 2: Concise single-line nav links */}
        <nav className="hidden lg:flex items-center gap-1">
          <button
            onClick={() => setActiveTab('summary')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
              activeTab === 'summary'
                ? 'bg-[#214ecf] text-white shadow-xs'
                : 'text-slate-700 hover:text-[#214ecf] hover:bg-[#84a5f2]/10'
            }`}
          >
            ملخص الوحدات (كتاب 1 و 2)
          </button>
          <button
            onClick={() => setActiveTab('exam')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
              activeTab === 'exam'
                ? 'bg-[#214ecf] text-white shadow-xs'
                : 'text-slate-700 hover:text-[#214ecf] hover:bg-[#84a5f2]/10'
            }`}
          >
            الاختبار الشامل (50Q)
          </button>
          <button
            onClick={() => setActiveTab('writing')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
              activeTab === 'writing'
                ? 'bg-[#214ecf] text-white shadow-xs'
                : 'text-slate-700 hover:text-[#214ecf] hover:bg-[#84a5f2]/10'
            }`}
          >
            معمل الكتابة (8 جمل)
          </button>
          <button
            onClick={() => setActiveTab('speaking')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
              activeTab === 'speaking'
                ? 'bg-[#214ecf] text-white shadow-xs'
                : 'text-slate-700 hover:text-[#214ecf] hover:bg-[#84a5f2]/10'
            }`}
          >
            اختبار التحدث
          </button>
          <button
            onClick={() => setActiveTab('blueprint')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
              activeTab === 'blueprint'
                ? 'bg-[#214ecf] text-white shadow-xs'
                : 'text-slate-700 hover:text-[#214ecf] hover:bg-[#84a5f2]/10'
            }`}
          >
            مخطط الدرجات
          </button>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={onStartFullExam}
            className="flex items-center justify-center px-3.5 py-2 text-xs font-bold text-white bg-[#214ecf] hover:bg-[#1a3ea8] active:scale-98 rounded-lg shadow-sm transition-all whitespace-nowrap shrink-0"
          >
            <span className="hidden sm:inline">الاختبار الشامل المعتمد (50Q)</span>
            <span className="sm:hidden">الاختبار (50Q)</span>
          </button>
        </div>
      </div>
      
      {/* Mobile navigation bar */}
      <div className="lg:hidden flex items-center justify-between border-t border-slate-200 bg-slate-50 px-2 py-1.5 overflow-x-auto text-xs gap-1">
        <button
          onClick={() => setActiveTab('summary')}
          className={`py-1.5 px-2.5 font-medium rounded-md whitespace-nowrap ${
            activeTab === 'summary' ? 'text-white font-bold bg-[#214ecf]' : 'text-slate-600'
          }`}
        >
          الملخص
        </button>
        <button
          onClick={() => setActiveTab('exam')}
          className={`py-1.5 px-2.5 font-medium rounded-md whitespace-nowrap ${
            activeTab === 'exam' ? 'text-white font-bold bg-[#214ecf]' : 'text-slate-600'
          }`}
        >
          الاختبار
        </button>
        <button
          onClick={() => setActiveTab('writing')}
          className={`py-1.5 px-2.5 font-medium rounded-md whitespace-nowrap ${
            activeTab === 'writing' ? 'text-white font-bold bg-[#214ecf]' : 'text-slate-600'
          }`}
        >
          الكتابة
        </button>
        <button
          onClick={() => setActiveTab('speaking')}
          className={`py-1.5 px-2.5 font-medium rounded-md whitespace-nowrap ${
            activeTab === 'speaking' ? 'text-white font-bold bg-[#214ecf]' : 'text-slate-600'
          }`}
        >
          التحدث
        </button>
        <button
          onClick={() => setActiveTab('blueprint')}
          className={`py-1.5 px-2.5 font-medium rounded-md whitespace-nowrap ${
            activeTab === 'blueprint' ? 'text-white font-bold bg-[#214ecf]' : 'text-slate-600'
          }`}
        >
          المخطط
        </button>
      </div>
    </header>
  );
};
