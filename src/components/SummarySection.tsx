import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Volume2, 
  CheckCircle2, 
  XCircle, 
  RefreshCw, 
  Lightbulb, 
  Sparkles,
  ChevronDown,
  ChevronUp,
  Globe,
  BookOpen
} from 'lucide-react';
import { UNITS_SUMMARY_DATA, VocabItem, UnitOverview } from '../data/unitsSummaryData';
import { playAudioText } from '../utils/speechHelper';
import { 
  BrandReadingIcon, 
  BrandWritingIcon, 
  BrandSpeakingIcon, 
  BrandListeningIcon 
} from './BrandIcons';

interface SummarySectionProps {
  onStartExamWithUnit?: (unitNumber: number) => void;
}

export const SummarySection: React.FC<SummarySectionProps> = ({ onStartExamWithUnit }) => {
  const [selectedUnit, setSelectedUnit] = useState<number | 'all'>('all');
  const [selectedSkill, setSelectedSkill] = useState<'all' | 'grammar' | 'vocab' | 'reading' | 'listening' | 'pronunciation'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'cards' | 'flashcards'>('cards');
  
  // Flashcard state
  const [flashcardIndex, setFlashcardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // Collapsed state for each unit (by default all units are collapsed / hidden)
  const [collapsedUnits, setCollapsedUnits] = useState<{ [unitNumber: number]: boolean }>({
    3: true,
    4: true,
    5: true,
    6: true,
  });

  const toggleUnitCollapse = (unitNumber: number) => {
    setCollapsedUnits((prev) => {
      const current = prev[unitNumber] ?? true;
      return {
        ...prev,
        [unitNumber]: !current,
      };
    });
  };

  // Filtered Units
  const filteredUnits = useMemo(() => {
    return UNITS_SUMMARY_DATA.filter((unit) => {
      if (selectedUnit !== 'all' && unit.unitNumber !== selectedUnit) {
        return false;
      }
      return true;
    });
  }, [selectedUnit]);

  // All Vocab list for search and flashcards
  const allVocab = useMemo(() => {
    let list: VocabItem[] = [];
    filteredUnits.forEach((u) => {
      list = [...list, ...u.vocabularyList];
    });

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (v) =>
          v.word.toLowerCase().includes(q) ||
          v.arabicMeaning.includes(q) ||
          v.definition.toLowerCase().includes(q) ||
          v.exampleSentence.toLowerCase().includes(q)
      );
    }
    return list;
  }, [filteredUnits, searchQuery]);

  // Handle Speech Audio
  const handlePronounce = (text: string) => {
    playAudioText(text);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header & Controls Deck */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-[#214ecf] mb-1">
            <span>كتاب Q: Skills 1 (الوحدات 3-6)</span>
            <span aria-hidden="true">·</span>
            <span className="text-purple-700 font-bold bg-purple-50 px-2 py-0.5 rounded">+ كتاب Q: Skills 2 (الوحدة 1)</span>
          </div>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            مستودع المراجعة الذكية للوحدات المطلوبة
          </h2>
          <p className="text-xs text-slate-600 mt-1">
            شرح القواعد والمفردات مع النطق الصوتي، نصوص القراءة، مهارات الاستماع وتدوين الملاحظات.
          </p>
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center gap-2 self-start md:self-auto">
          <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200">
            <button
              onClick={() => { setViewMode('cards'); setIsFlipped(false); }}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-colors whitespace-nowrap ${
                viewMode === 'cards' ? 'bg-[#214ecf] text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              عرض الملخصات الكاملة
            </button>
            <button
              onClick={() => { setViewMode('flashcards'); setIsFlipped(false); }}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-colors whitespace-nowrap ${
                viewMode === 'flashcards' ? 'bg-[#214ecf] text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              بطاقات الحفظ (Flashcards)
            </button>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="my-6 space-y-4">
        {/* Unit Selectors & Search Input */}
        <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
          {/* Unit Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
            <button
              onClick={() => { setSelectedUnit('all'); setFlashcardIndex(0); }}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors ${
                selectedUnit === 'all'
                  ? 'bg-[#214ecf] text-white font-bold'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              جميع الوحدات (كتاب 1 و 2)
            </button>

            <span className="text-[11px] font-bold text-slate-400 px-1 border-r border-slate-300 mr-1 ml-0.5 whitespace-nowrap hidden sm:inline">
              الكتاب 1:
            </span>

            {UNITS_SUMMARY_DATA.filter((u) => !u.bookBadge?.includes('Book 2')).map((u) => {
              const isSelected = selectedUnit === u.unitNumber;
              return (
                <button
                  key={`b1-${u.unitNumber}`}
                  onClick={() => { setSelectedUnit(u.unitNumber); setFlashcardIndex(0); }}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors ${
                    isSelected
                      ? 'bg-[#214ecf] text-white font-bold shadow-xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  <span>الوحدة {u.unitNumber}</span>
                </button>
              );
            })}

            <span className="text-[11px] font-bold text-purple-700 px-1 border-r border-purple-300 mr-2 ml-1 whitespace-nowrap hidden sm:inline">
              الكتاب 2:
            </span>

            {UNITS_SUMMARY_DATA.filter((u) => u.bookBadge?.includes('Book 2')).map((u) => {
              const isSelected = selectedUnit === u.unitNumber;
              return (
                <button
                  key={`b2-${u.unitNumber}`}
                  onClick={() => { setSelectedUnit(u.unitNumber); setFlashcardIndex(0); }}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-purple-700 text-white font-bold shadow-xs ring-2 ring-purple-300'
                      : 'bg-purple-100 text-purple-900 border border-purple-300 hover:bg-purple-200'
                  }`}
                >
                  <span>الوحدة {u.unitNumber} (الكتاب 2)</span>
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 text-slate-400 absolute right-3 top-2.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ابحث عن كلمة، قاعدة، أو مصطلح..."
              className="w-full pl-3 pr-9 py-1.5 text-xs bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#214ecf]/20 focus:border-[#214ecf]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute left-3 top-2 text-xs text-slate-400 hover:text-slate-600"
              >
                مسح
              </button>
            )}
          </div>
        </div>

        {/* Skill Filter Buttons & Expand/Collapse All Control */}
        {viewMode === 'cards' && (
          <div className="flex flex-wrap items-center justify-between gap-2 pt-1 border-t border-slate-100">
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
              <span className="text-xs text-slate-500 font-medium ml-2 shrink-0">تصفية المهارة:</span>
              {[
                { id: 'all', label: 'الكل' },
                { id: 'grammar', label: '📝 القواعد (Grammar)' },
                { id: 'vocab', label: '💡 المفردات (Vocabulary)' },
                { id: 'reading', label: '📖 نصوص القراءة (Reading)' },
                { id: 'listening', label: '🎧 الاستماع والملاحظات (Listening)' },
                { id: 'pronunciation', label: '🗣️ التحدث والنطق (Speaking & Pronunciation)' },
              ].map((skill) => (
                <button
                  key={skill.id}
                  onClick={() => setSelectedSkill(skill.id as any)}
                  className={`px-3 py-1.5 text-xs rounded-lg transition-colors whitespace-nowrap font-medium ${
                    selectedSkill === skill.id
                      ? 'bg-slate-900 text-white font-bold'
                      : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {skill.label}
                </button>
              ))}
            </div>

            {/* Quick Toggle All Units */}
            <div className="flex items-center gap-1.5 shrink-0">
              <button
                type="button"
                onClick={() => {
                  const allCollapsed = filteredUnits.every((u) => (collapsedUnits[u.unitNumber] ?? true) === true);
                  const newMap: { [k: number]: boolean } = {};
                  filteredUnits.forEach((u) => {
                    newMap[u.unitNumber] = !allCollapsed;
                  });
                  setCollapsedUnits(newMap);
                }}
                className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors flex items-center gap-1.5"
              >
                <span>
                  {filteredUnits.every((u) => (collapsedUnits[u.unitNumber] ?? true) === true)
                    ? 'إظهار جميع الوحدات'
                    : 'طي / إخفاء جميع الوحدات'}
                </span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${filteredUnits.every((u) => (collapsedUnits[u.unitNumber] ?? true) === true) ? '' : 'rotate-180'}`} />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* ======================================================== */}
      {/* FLASHCARD MODE                                            */}
      {/* ======================================================== */}
      {viewMode === 'flashcards' ? (
        <div className="max-w-xl mx-auto py-6">
          <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
            <span>بطاقة {allVocab.length > 0 ? flashcardIndex + 1 : 0} من أصل {allVocab.length}</span>
            <span>اضغط على البطاقة لقلبها ومشاهدة المعنى</span>
          </div>

          {allVocab.length > 0 ? (
            <div>
              {/* Flip Card Container */}
              <div
                onClick={() => setIsFlipped(!isFlipped)}
                className="cursor-pointer min-h-[300px] rounded-2xl border-2 border-slate-200 bg-white p-7 shadow-sm hover:border-[#214ecf] transition-all flex flex-col justify-between text-center relative select-none"
              >
                {/* Top Badge Info */}
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span className={`font-bold text-xs ${allVocab[flashcardIndex].unit === 1 ? 'text-purple-700 bg-purple-100 px-2 py-0.5 rounded-md' : 'text-[#214ecf]'}`}>
                    {allVocab[flashcardIndex].unit === 1 ? 'الكتاب 2 (Book 2) · الوحدة 1' : `الوحدة ${allVocab[flashcardIndex].unit} (الكتاب 1)`}
                  </span>
                  <div className="flex items-center gap-1.5">
                    {allVocab[flashcardIndex].badge && (
                      <span className="text-[11px] font-bold text-[#ea9835] bg-[#ea9835]/15 px-2 py-0.5 rounded">
                        {allVocab[flashcardIndex].badge}
                      </span>
                    )}
                    <span className="italic text-slate-400 font-brand-en">({allVocab[flashcardIndex].partOfSpeech})</span>
                  </div>
                </div>

                {/* Middle Content: Front vs Back */}
                {!isFlipped ? (
                  <div className="py-8">
                    <h3 className="text-3xl font-bold text-slate-900 font-brand-en tracking-wide mb-2">
                      {allVocab[flashcardIndex].word}
                    </h3>
                    <p className="text-xs text-slate-400">انقر هنا لعرض الترجمة وشرح المعنى</p>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handlePronounce(allVocab[flashcardIndex].word);
                      }}
                      className="mt-4 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#214ecf]/10 text-[#214ecf] text-xs font-bold hover:bg-[#214ecf]/20 transition-colors"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                      <span>استمع للنطق الصحيح</span>
                    </button>
                  </div>
                ) : (
                  <div className="py-6 text-right space-y-3">
                    <div>
                      <span className="text-xs text-slate-400 block mb-0.5">المعنى العربي:</span>
                      <p className="text-2xl font-bold text-[#214ecf]">
                        {allVocab[flashcardIndex].arabicMeaning}
                      </p>
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 block mb-0.5">التعريف بالإنجليزية:</span>
                      <p className="text-xs text-slate-700 font-brand-en leading-relaxed">
                        {allVocab[flashcardIndex].definition}
                      </p>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                      <span className="text-[11px] text-slate-500 block mb-1">مثال في جملة:</span>
                      <p className="text-xs text-slate-800 font-brand-en italic">
                        "{allVocab[flashcardIndex].exampleSentence}"
                      </p>
                    </div>
                  </div>
                )}

                {/* Bottom Card Footer */}
                <div className="text-[11px] text-slate-400 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span>{isFlipped ? 'الوجه الخلفي (التفسير والمثال)' : 'الوجه الأمامي (الكلمة بالإنجليزية)'}</span>
                  <span className="text-[#214ecf] font-semibold underline">انقر للقلب</span>
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center justify-between gap-3 mt-4">
                <button
                  disabled={flashcardIndex === 0}
                  onClick={() => {
                    setFlashcardIndex((prev) => Math.max(0, prev - 1));
                    setIsFlipped(false);
                  }}
                  className="flex-1 py-2 px-3 text-xs font-bold rounded-lg border border-slate-300 bg-white hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed text-slate-700"
                >
                  السابق
                </button>
                <button
                  onClick={() => {
                    const randomIndex = Math.floor(Math.random() * allVocab.length);
                    setFlashcardIndex(randomIndex);
                    setIsFlipped(false);
                  }}
                  className="py-2 px-3 text-xs font-bold rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 flex items-center gap-1"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>عشوائي</span>
                </button>
                <button
                  disabled={flashcardIndex === allVocab.length - 1}
                  onClick={() => {
                    setFlashcardIndex((prev) => Math.min(allVocab.length - 1, prev + 1));
                    setIsFlipped(false);
                  }}
                  className="flex-1 py-2 px-3 text-xs font-bold rounded-lg bg-[#214ecf] text-white hover:bg-[#1a3ea8] disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  التالي
                </button>
              </div>
            </div>
          ) : (
            <div className="p-8 text-center bg-white rounded-xl border border-slate-200">
              <p className="text-sm text-slate-600">لا توجد كلمات مطابقة لبحثك الحالي.</p>
            </div>
          )}
        </div>
      ) : (
        /* ======================================================== */
        /* FULL SUMMARY CARDS MODE                                   */
        /* ======================================================== */
        <div className="space-y-12">
          {filteredUnits.map((unit, index) => {
            const isCollapsed = collapsedUnits[unit.unitNumber] ?? true;
            const isBook2 = unit.bookBadge?.includes('Book 2');

            return (
              <React.Fragment key={`${unit.bookBadge || 'b1'}-${unit.unitNumber}`}>
                {/* Book 1 Header when showing all units */}
                {selectedUnit === 'all' && index === 0 && (
                  <div className="flex items-center justify-between p-4 rounded-2xl bg-gradient-to-l from-slate-100 via-blue-50/60 to-white border border-slate-200 shadow-2xs">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl bg-[#214ecf] text-white flex items-center justify-center font-bold text-xs shadow-2xs">
                        B1
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">
                          الكتاب الأول: Q: Skills for Success 1
                        </h4>
                        <p className="text-xs text-slate-500">
                          الوحدات الأربعة الأساسية المعتمدة: الوحدة 3، الوحدة 4، الوحدة 5، والوحدة 6.
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-bold px-3 py-1 rounded-lg bg-[#214ecf]/10 text-[#214ecf]">
                      4 وحدات (Units 3 - 6)
                    </span>
                  </div>
                )}

                {/* Prominent Transition Section between Book 1 and Book 2 */}
                {isBook2 && (
                  <div className="relative overflow-hidden rounded-3xl bg-gradient-to-l from-purple-950 via-slate-900 to-indigo-950 p-6 sm:p-8 text-white border-2 border-purple-500/40 shadow-xl my-8">
                    <div className="absolute top-0 right-0 w-full h-1.5 bg-gradient-to-l from-[#ea9835] via-purple-400 to-[#84a5f2]" />
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                      <div className="space-y-2.5">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-[#ea9835]/20 text-[#ea9835] border border-[#ea9835]/30">
                            ✨ مقرر معتمد للاختبار
                          </span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
                          <span>كتاب Q: Skills for Success 2 (الكتاب الثاني)</span>
                          <span className="text-sm font-semibold text-purple-200">· الوحدة الأولى (Unit 1)</span>
                        </h3>
                        <p className="text-xs sm:text-sm text-purple-100/90 leading-relaxed max-w-3xl">
                          تم إدراج هذه الوحدة مباشرة بعد إكمال الوحدة السادسة من الكتاب الأول وفق توزيع الخطة المعتمدة، وتتضمن:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs text-purple-100">
                          <div className="p-3.5 rounded-2xl bg-white/10 border border-white/10 space-y-1">
                            <span className="font-bold text-white flex items-center gap-1.5">
                              <span>📖 القراءة والمفردات:</span>
                            </span>
                            <p className="text-purple-200/90 leading-normal">
                              الأمان الرقمي وحالات الاحتيال (نورا، أحمد، ماريا) + تمييز الأخبار الكاذبة والمضللة (Fake News & Misinformation).
                            </p>
                          </div>
                          <div className="p-3.5 rounded-2xl bg-white/10 border border-white/10 space-y-1">
                            <span className="font-bold text-white flex items-center gap-1.5">
                              <span>📝 القواعد والاستماع:</span>
                            </span>
                            <p className="text-purple-200/90 leading-normal">
                              صيغة الأمر (The Imperative) وأدوات الربط (and, but, so, because, however) + الفرق بين الهبة (Fad) والتوجه (Trend).
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="shrink-0 flex lg:flex-col items-center gap-3 bg-purple-900/60 p-4 rounded-2xl border border-purple-400/30 text-center">
                        <div className="text-center">
                          <span className="text-[11px] text-purple-200 block">التوزيع الإجمالي للمقرر</span>
                          <span className="text-sm sm:text-base font-bold text-white block font-brand-en">Book 1 (3-6) + Book 2 (1)</span>
                        </div>
                        <span className="px-3 py-1 bg-white/10 text-purple-200 text-xs rounded-lg font-medium">
                          إجمالي 5 وحدات
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                <div className="space-y-6">
                  {/* Unit Title Banner with distinct styling for Book 2 */}
                  <div 
                    onClick={() => toggleUnitCollapse(unit.unitNumber)}
                    className={`p-6 rounded-2xl text-white shadow-xs cursor-pointer select-none transition-all hover:shadow-md group ${
                      unit.bookBadge?.includes('Book 2')
                        ? 'bg-gradient-to-l from-purple-900 via-indigo-900 to-slate-950 border border-purple-500/30 ring-1 ring-purple-500/20'
                        : 'bg-gradient-to-l from-[#214ecf] via-[#1a3ea8] to-slate-900'
                    }`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                      <div className="flex items-center gap-2">
                        <span className={`px-2.5 py-0.5 rounded-md text-slate-950 text-xs font-bold ${
                          unit.bookBadge?.includes('Book 2') ? 'bg-purple-300' : 'bg-[#ea9835]'
                        }`}>
                          الوحدة {unit.unitNumber} {unit.bookBadge?.includes('Book 2') ? '(الكتاب الثاني Q: Skills 2)' : '(الكتاب الأول)'}
                        </span>
                        <span className="text-xs text-[#84a5f2]">{unit.themeAr}</span>
                      </div>

                    {/* Actions Container */}
                    <div className="flex items-center gap-2">
                      {onStartExamWithUnit && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onStartExamWithUnit(unit.unitNumber);
                          }}
                          className="text-xs font-bold px-3.5 py-1.5 bg-white/15 hover:bg-white/25 rounded-lg text-white transition-colors flex items-center gap-1.5"
                        >
                          <Sparkles className="w-3.5 h-3.5 text-[#ea9835]" />
                          <span>اختبر معلومات الوحدة {unit.unitNumber}</span>
                        </button>
                      )}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold tracking-tight text-white mb-1 font-brand-en flex items-center justify-between">
                    <span>
                      Unit {unit.unitNumber}: {unit.themeEn}
                      {unit.bookTitle && <span className="text-sm font-normal text-white/70 mr-2 font-sans">· {unit.bookTitle}</span>}
                    </span>
                  </h3>
                  <p className="text-xs text-white/90 leading-relaxed max-w-3xl">
                    {unit.bigQuestionAr}
                  </p>
                  <div className="mt-3 pt-3 border-t border-white/15 flex flex-wrap items-center justify-between gap-4 text-xs text-white/80">
                    <div className="flex flex-wrap gap-4">
                      <span>القراءة والكتابة: <strong className="text-white">{unit.rwDomain}</strong></span>
                      <span aria-hidden="true">·</span>
                      <span>الاستماع والتحدث: <strong className="text-white">{unit.lsDomain}</strong></span>
                    </div>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleUnitCollapse(unit.unitNumber);
                      }}
                      className="text-xs font-medium px-2.5 py-1 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-colors flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>{isCollapsed ? 'المزيد' : 'أقل'}</span>
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isCollapsed ? '' : 'rotate-180'}`} />
                    </button>
                  </div>
                </div>

                {/* Collapsible Unit Content */}
                {!isCollapsed && (
                  <div className="space-y-6 transition-all duration-300">
                {/* 1. GRAMMAR RULES */}
              {(selectedSkill === 'all' || selectedSkill === 'grammar') && (
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#214ecf]" />
                    <h4 className="text-base font-bold text-slate-900">
                      قواعد الوحدة {unit.unitNumber} (Grammar Rules)
                    </h4>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {unit.grammarRules.map((rule) => (
                      <div key={rule.id} className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs">
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <h5 className="text-sm font-bold text-[#214ecf] font-brand-en">
                            {rule.titleEn}
                          </h5>
                          <span className="text-[11px] text-slate-500 font-medium">الوحدة {unit.unitNumber}</span>
                        </div>
                        <p className="text-xs font-bold text-slate-800 mb-2">{rule.titleAr}</p>
                        <p className="text-xs text-slate-600 mb-3 leading-relaxed whitespace-pre-line">
                          {rule.ruleExplanationAr}
                        </p>

                        {/* Formula Box */}
                        <div className="p-3 bg-[#214ecf]/5 border border-[#214ecf]/20 rounded-xl text-xs font-brand-en text-slate-900 font-semibold mb-3">
                          <span className="block text-[10px] text-[#214ecf] font-sans mb-0.5">الصيغة التركيبية (Rule Formula):</span>
                          {rule.formula}
                        </div>

                        {/* Examples */}
                        <div className="space-y-1.5 mb-3 text-xs">
                          <span className="text-[11px] font-bold text-slate-700 block">أمثلة تطبيقية:</span>
                          {rule.examples.map((ex, idx) => (
                            <div key={idx} className="p-2.5 bg-slate-50 rounded-lg border border-slate-100">
                              <div className="flex items-center justify-between gap-2 font-brand-en text-slate-900 font-medium">
                                <span>{ex.en}</span>
                                <button
                                  onClick={() => handlePronounce(ex.en)}
                                  className="text-slate-400 hover:text-[#214ecf] p-0.5"
                                  title="استمع للمثال"
                                >
                                  <Volume2 className="w-3.5 h-3.5" />
                                </button>
                              </div>
                              <span className="text-[11px] text-slate-500 block mt-0.5">{ex.ar}</span>
                            </div>
                          ))}
                        </div>

                        {/* Common Traps / Mistakes */}
                        {rule.commonMistakes && rule.commonMistakes.length > 0 && (
                          <div className="p-3 bg-[#e06045]/10 border border-[#e06045]/20 rounded-xl text-xs space-y-1.5">
                            <span className="font-bold flex items-center gap-1 text-[#e06045] text-[11px]">
                              <XCircle className="w-3.5 h-3.5" />
                              <span>فخ شائع في الاختبار (Common Exam Mistake):</span>
                            </span>
                            {rule.commonMistakes.map((m, idx) => (
                              <div key={idx} className="space-y-0.5">
                                <p className="line-through text-slate-500 font-brand-en">❌ {m.wrong}</p>
                                <p className="font-bold text-emerald-700 font-brand-en">✅ {m.correct}</p>
                                <p className="text-[11px] text-slate-600 font-sans">{m.explanationAr}</p>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 2. VOCABULARY LIST */}
              {(selectedSkill === 'all' || selectedSkill === 'vocab') && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#ea9835]" />
                      <h4 className="text-base font-bold text-slate-900">
                        مفردات الوحدة {unit.unitNumber} المعتمدة (Oxford 3000 & OPAL)
                      </h4>
                    </div>
                    <span className="text-xs text-slate-500">
                      {unit.vocabularyList.length} مصطلحات أساسية
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {unit.vocabularyList.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl border border-slate-200 bg-white hover:border-[#214ecf] transition-all shadow-xs flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between gap-1 mb-1.5">
                            <div className="flex items-center gap-1.5">
                              <span className="text-sm font-bold text-slate-900 font-brand-en">
                                {item.word}
                              </span>
                              <span className="text-[10px] text-slate-400 italic font-brand-en">
                                ({item.partOfSpeech})
                              </span>
                            </div>
                            <div className="flex items-center gap-1">
                              {item.badge && (
                                <span className="text-[10px] font-bold text-[#ea9835] bg-[#ea9835]/15 px-1.5 py-0.2 rounded">
                                  {item.badge}
                                </span>
                              )}
                              <button
                                onClick={() => handlePronounce(item.word)}
                                className="text-slate-400 hover:text-[#214ecf] p-1 rounded hover:bg-slate-100 transition-colors"
                                title="نطق الكلمة"
                              >
                                <Volume2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>

                          <div className="text-xs font-bold text-[#214ecf] mb-1">
                            {item.arabicMeaning}
                          </div>
                          <p className="text-[11px] text-slate-600 font-brand-en leading-relaxed mb-2">
                            {item.definition}
                          </p>
                        </div>

                        <div className="pt-2 border-t border-slate-100 text-[11px] text-slate-600 italic font-brand-en bg-slate-50/70 p-2 rounded-lg">
                          "{item.exampleSentence}"
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 3. READING SUMMARIES & SKILLS */}
              {(selectedSkill === 'all' || selectedSkill === 'reading') && (
                <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-xs space-y-5">
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <BrandReadingIcon size={22} className="text-[#214ecf]" />
                      <h4 className="text-base font-bold text-slate-900">
                        نصوص القراءة المعتمدة (Reading Texts - Unit {unit.unitNumber})
                      </h4>
                    </div>

                    <span className="text-xs text-[#214ecf] font-bold bg-[#214ecf]/10 px-3 py-1 rounded-lg flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>نصوص المنهج باللغة الإنجليزية كاملة مع زر الترجمة للمزيد</span>
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Reading Text 1 */}
                    <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] font-bold text-[#214ecf] bg-white px-2 py-0.5 rounded shadow-2xs">
                            النص القرائي الأول (Reading 1)
                          </span>
                          <span className="text-xs text-slate-400 font-brand-en">Unit {unit.unitNumber}</span>
                        </div>

                        <h5 className="text-sm font-bold text-slate-900 font-brand-en text-left" dir="ltr">
                          {unit.readingSummary.reading1TitleEn || unit.readingSummary.reading1Title}
                        </h5>

                        {unit.readingSummary.reading1SummaryEn && (
                          <p className="text-xs text-slate-600 font-brand-en leading-relaxed text-left" dir="ltr">
                            {unit.readingSummary.reading1SummaryEn}
                          </p>
                        )}

                        {/* Complete English Reading Text Displayed Directly */}
                        <div className="space-y-1.5">
                          <span className="text-[11px] font-bold text-slate-500 font-brand-en uppercase tracking-wider block text-left" dir="ltr">
                            Full Reading Passage (English):
                          </span>
                          <div 
                            className="p-4 bg-white rounded-xl border border-slate-200 text-xs text-slate-800 font-brand-en leading-relaxed whitespace-pre-line text-left shadow-2xs max-h-[360px] overflow-y-auto"
                            dir="ltr"
                          >
                            {unit.readingSummary.reading1FullTextEn || unit.readingSummary.reading1FullTextAr}
                          </div>
                        </div>
                      </div>

                      {/* Additional Button for Arabic Translation (المزيد) */}
                      {unit.readingSummary.reading1FullTextAr && (
                        <details className="group mt-4 pt-3 border-t border-slate-200">
                          <summary className="cursor-pointer text-xs font-bold text-[#214ecf] hover:text-[#1a3ea8] bg-white hover:bg-slate-100 p-2.5 rounded-xl border border-slate-200 flex items-center justify-between transition-colors shadow-2xs select-none">
                            <span className="flex items-center gap-2">
                              <Globe className="w-3.5 h-3.5 text-[#214ecf]" />
                              <span>المزيد: عرض الترجمة العربية المعتمدة للنص</span>
                            </span>
                            <span className="text-[10px] text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                          </summary>
                          <div className="mt-2.5 p-3.5 bg-amber-50/60 rounded-xl border border-amber-200/70 text-xs text-slate-800 leading-relaxed whitespace-pre-line text-right" dir="rtl">
                            <div className="text-[11px] font-bold text-[#ea9835] pb-1.5 mb-2 border-b border-amber-200/50">
                              ترجمة النص القرائي الأول للمراجعة والفهم:
                            </div>
                            {unit.readingSummary.reading1FullTextAr}
                          </div>
                        </details>
                      )}
                    </div>

                    {/* Reading Text 2 */}
                    <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] font-bold text-[#214ecf] bg-white px-2 py-0.5 rounded shadow-2xs">
                            النص القرائي الثاني (Reading 2)
                          </span>
                          <span className="text-xs text-slate-400 font-brand-en">Unit {unit.unitNumber}</span>
                        </div>

                        <h5 className="text-sm font-bold text-slate-900 font-brand-en text-left" dir="ltr">
                          {unit.readingSummary.reading2TitleEn || unit.readingSummary.reading2Title}
                        </h5>

                        {unit.readingSummary.reading2SummaryEn && (
                          <p className="text-xs text-slate-600 font-brand-en leading-relaxed text-left" dir="ltr">
                            {unit.readingSummary.reading2SummaryEn}
                          </p>
                        )}

                        {/* Complete English Reading Text Displayed Directly */}
                        <div className="space-y-1.5">
                          <span className="text-[11px] font-bold text-slate-500 font-brand-en uppercase tracking-wider block text-left" dir="ltr">
                            Full Reading Passage (English):
                          </span>
                          <div 
                            className="p-4 bg-white rounded-xl border border-slate-200 text-xs text-slate-800 font-brand-en leading-relaxed whitespace-pre-line text-left shadow-2xs max-h-[360px] overflow-y-auto"
                            dir="ltr"
                          >
                            {unit.readingSummary.reading2FullTextEn || unit.readingSummary.reading2FullTextAr}
                          </div>
                        </div>
                      </div>

                      {/* Additional Button for Arabic Translation (المزيد) */}
                      {unit.readingSummary.reading2FullTextAr && (
                        <details className="group mt-4 pt-3 border-t border-slate-200">
                          <summary className="cursor-pointer text-xs font-bold text-[#214ecf] hover:text-[#1a3ea8] bg-white hover:bg-slate-100 p-2.5 rounded-xl border border-slate-200 flex items-center justify-between transition-colors shadow-2xs select-none">
                            <span className="flex items-center gap-2">
                              <Globe className="w-3.5 h-3.5 text-[#214ecf]" />
                              <span>المزيد: عرض الترجمة العربية المعتمدة للنص</span>
                            </span>
                            <span className="text-[10px] text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                          </summary>
                          <div className="mt-2.5 p-3.5 bg-amber-50/60 rounded-xl border border-amber-200/70 text-xs text-slate-800 leading-relaxed whitespace-pre-line text-right" dir="rtl">
                            <div className="text-[11px] font-bold text-[#ea9835] pb-1.5 mb-2 border-b border-amber-200/50">
                              ترجمة النص القرائي الثاني للمراجعة والفهم:
                            </div>
                            {unit.readingSummary.reading2FullTextAr}
                          </div>
                        </details>
                      )}
                    </div>
                  </div>

                  {/* Target Reading Skill */}
                  <div className="p-4 rounded-xl bg-[#fcded6]/40 border border-[#e06045]/20">
                    <span className="text-[11px] font-bold text-[#e06045] block mb-0.5">
                      مهارة القراءة المستهدفة في الاختبار: {unit.readingSummary.targetSkillTitle}
                    </span>
                    <p className="text-xs text-slate-800 leading-relaxed">
                      {unit.readingSummary.targetSkillAr}
                    </p>
                  </div>

                  {/* Key Takeaways */}
                  <div className="space-y-1.5">
                    <span className="text-xs font-bold text-slate-800 block">أبرز الحقائق والبيانات للاختبار:</span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                      {unit.readingSummary.keyTakeaways.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-1.5 p-2.5 bg-slate-50 rounded-lg border border-slate-100">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#214ecf] shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* 4. LISTENING, SPEAKING & PRONUNCIATION */}
              {(selectedSkill === 'all' || selectedSkill === 'listening' || selectedSkill === 'pronunciation') && (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                  {/* Pronunciation Rule */}
                  <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs">
                    <span className="text-[11px] font-bold text-[#214ecf] bg-[#214ecf]/10 px-2 py-0.5 rounded-md inline-block mb-2">
                      قاعدة النطق (Pronunciation)
                    </span>
                    <h5 className="text-sm font-bold text-slate-900 mb-2 font-brand-en">
                      {unit.listeningSpeakingSummary.pronunciationRule.title}
                    </h5>
                    <p className="text-xs text-slate-600 leading-relaxed mb-3">
                      {unit.listeningSpeakingSummary.pronunciationRule.explanationAr}
                    </p>
                    <div className="space-y-1 text-xs font-brand-en">
                      {unit.listeningSpeakingSummary.pronunciationRule.examples.map((ex, exIdx) => (
                        <div key={exIdx} className="p-2 bg-slate-50 rounded-lg border border-slate-100 text-slate-800 flex items-center justify-between">
                          <span>{ex}</span>
                          <button
                            onClick={() => handlePronounce(ex)}
                            className="text-slate-400 hover:text-[#214ecf]"
                            title="استمع"
                          >
                            <Volume2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Speaking Skill Phrases */}
                  <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs">
                    <span className="text-[11px] font-bold text-[#ea9835] bg-[#ea9835]/15 px-2 py-0.5 rounded-md inline-block mb-2">
                      مهارة التحدث (Speaking Skill)
                    </span>
                    <h5 className="text-sm font-bold text-slate-900 mb-2 font-brand-en">
                      {unit.listeningSpeakingSummary.speakingSkill.title}
                    </h5>
                    <p className="text-xs text-slate-600 leading-relaxed mb-3">
                      {unit.listeningSpeakingSummary.speakingSkill.explanationAr}
                    </p>
                    <div className="space-y-1.5 text-xs">
                      {unit.listeningSpeakingSummary.speakingSkill.keyPhrases.map((phrase, phIdx) => (
                        <div key={phIdx} className="p-2 bg-slate-50 rounded-lg border border-slate-100">
                          <div className="flex items-center justify-between font-brand-en font-bold text-slate-900">
                            <span>"{phrase.phrase}"</span>
                            <button
                              onClick={() => handlePronounce(phrase.phrase)}
                              className="text-slate-400 hover:text-[#214ecf]"
                            >
                              <Volume2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                          <span className="text-[11px] text-slate-500 block mt-0.5">{phrase.useCase}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Note-taking Skill */}
                  <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs">
                    <span className="text-[11px] font-bold text-slate-800 bg-slate-100 px-2 py-0.5 rounded-md inline-block mb-2">
                      مهارة تدوين الملاحظات (Note-Taking)
                    </span>
                    <h5 className="text-sm font-bold text-slate-900 mb-2 font-brand-en">
                      {unit.listeningSpeakingSummary.noteTakingSkill.title}
                    </h5>
                    <p className="text-xs text-slate-600 leading-relaxed mb-3">
                      {unit.listeningSpeakingSummary.noteTakingSkill.explanationAr}
                    </p>
                    <div className="space-y-1.5 text-xs text-slate-700">
                      {unit.listeningSpeakingSummary.noteTakingSkill.tips.map((tip, tipIdx) => (
                        <div key={tipIdx} className="flex items-start gap-1.5 p-2 bg-slate-50 rounded-lg border border-slate-100">
                          <Lightbulb className="w-3.5 h-3.5 text-[#ea9835] shrink-0 mt-0.5" />
                          <span>{tip}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </React.Fragment>
    );
  })}
</div>
)}
</section>
);
};
