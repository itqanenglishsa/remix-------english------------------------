export interface ExamBlueprint {
  university: string;
  deanship: string;
  department: string;
  semester: string;
  examDate: string;
  examDay: string;
  writtenTime: string;
  durationHours: number;
  speakingDates: string;
  targetLevel: string;
  textbook: string;
  units: number[];
  totalMarks: number;
  sections: {
    id: string;
    titleAr: string;
    titleEn: string;
    weightPercent: number;
    marks: number;
    questionsCount?: number;
    descriptionAr: string;
    descriptionEn: string;
    breakdown?: { labelAr: string; labelEn: string; count: number; marks: number }[];
  }[];
}

export const IAU_MIDTERM_BLUEPRINT: ExamBlueprint = {
  university: 'جامعة الإمام عبد الرحمن بن فيصل (IAU)',
  deanship: 'عمادة السنة التحضيرية والدراسات المساندة',
  department: 'قسم اللغة الإنجليزية (DEL - Department of English Language)',
  semester: 'الفصل الدراسي الأول 2026-2027',
  examDate: '20 أكتوبر 2026',
  examDay: 'الثلاثاء (الأسبوع التاسع)',
  writtenTime: '1:00 ظهراً - 3:00 عصراً (مستوى المبتدئين Beginner)',
  durationHours: 2,
  speakingDates: 'الأحد و/أو الإثنين 18 - 19 أكتوبر 2026',
  targetLevel: 'مستوى المبتدئين (Beginner Level)',
  textbook: 'Q: Skills for Success Book 1 (الوحدات 3، 4، 5، 6) + Book 2 (الوحدة 1)',
  units: [3, 4, 5, 6, 1],
  totalMarks: 20,
  sections: [
    {
      id: 'mcq',
      titleAr: 'الأسئلة الموضوعية (MCQs)',
      titleEn: 'Multiple Choice Questions',
      weightPercent: 50,
      marks: 10,
      questionsCount: 50,
      descriptionAr: '50 سؤال اختيار من متعدد يغطي جميع مهارات المقرر الأربعة.',
      descriptionEn: '50 Multiple Choice Questions covering all four core skills.',
      breakdown: [
        { labelAr: 'القراءة (Reading)', labelEn: 'Reading Comprehension', count: 10, marks: 2 },
        { labelAr: 'المفردات (Vocabulary)', labelEn: 'Vocabulary & Word Skills', count: 15, marks: 3 },
        { labelAr: 'القواعد (Grammar)', labelEn: 'Grammar Structures', count: 15, marks: 3 },
        { labelAr: 'الاستماع (Listening)', labelEn: 'Listening Comprehension', count: 10, marks: 2 },
      ]
    },
    {
      id: 'writing',
      titleAr: 'الكتابة (Writing)',
      titleEn: 'Paragraph Writing',
      weightPercent: 25,
      marks: 5,
      descriptionAr: 'اختيار موضوع واحد من بين 3 مواضيع وكتابة فقرة متكاملة من 8 جمل مضبوطة البناء.',
      descriptionEn: 'Select 1 topic from 3 prompts and write an eight-sentence paragraph with proper structure.'
    },
    {
      id: 'speaking',
      titleAr: 'التحدث (Speaking)',
      titleEn: 'Oral Examination',
      weightPercent: 25,
      marks: 5,
      descriptionAr: 'نقاش جماعي (3-4 دقائق للمجموعة) وسؤال فردي (دقيقة واحدة لكل طالب).',
      descriptionEn: 'Group Discussion (3-4 mins per group) + Individual Question (1 min per student).'
    }
  ]
};
