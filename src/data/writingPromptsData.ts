export interface WritingPrompt {
  id: string;
  unit: number;
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  descriptionEn: string;
  targetConnectors: string[];
  modelParagraph: {
    topicSentence: string;
    supportingSentences: { sentence: string; type: 'SS' | 'Detail'; labelAr: string }[];
    concludingSentence: string;
  };
  sentenceTemplates: {
    sentenceNumber: number;
    type: 'TS' | 'SS' | 'Detail' | 'CS';
    guideAr: string;
    starterHintEn: string;
  }[];
}

export const WRITING_PROMPTS_DATA: WritingPrompt[] = [
  {
    id: 'prompt-1',
    unit: 3,
    titleAr: 'الموضوع 1: كيف تُغيّر وسائل التواصل الاجتماعي طريقة سفرنا؟',
    titleEn: 'Topic 1: How Social Media Affects the Way We Travel',
    descriptionAr: 'اكتب فقرة أكاديمية من 8 جمل تشرح فيها تأثير منصات التواصل ومشاركات الصور والمدونات على وجهات السياح وسلوكهم أثناء السفر.',
    descriptionEn: 'Write an eight-sentence paragraph explaining how social media platforms and travel bloggers influence where and how people travel.',
    targetConnectors: ['because', 'for example', 'in addition', 'also', 'finally', 'for these reasons'],
    modelParagraph: {
      topicSentence: 'Social media platforms have dramatically changed the way modern tourists plan their travels.',
      supportingSentences: [
        { sentence: 'First of all, travelers discover exciting new destinations by viewing photos online.', type: 'SS', labelAr: 'فكرة داعمة 1: اكتشاف الوجهات' },
        { sentence: 'Because scenic pictures go viral quickly, thousands of people visit the same popular landmarks.', type: 'Detail', labelAr: 'تفصيل مع أداة because' },
        { sentence: 'In addition, travel bloggers provide valuable practical advice about restaurants and hotels.', type: 'SS', labelAr: 'فكرة داعمة 2: نصائح المدونين' },
        { sentence: 'Tourists follow these online guides in order to save both time and money.', type: 'Detail', labelAr: 'تفصيل مع أداة in order to' },
        { sentence: 'Furthermore, travelers constantly post photos on social media during their vacations.', type: 'SS', labelAr: 'فكرة داعمة 3: مشاركة التجارب' },
        { sentence: 'They want to share their positive experiences with family and friends back home.', type: 'Detail', labelAr: 'تفصيل توضيحي' }
      ],
      concludingSentence: 'For these reasons, social media has transformed tourism into a more connected and visual experience.'
    },
    sentenceTemplates: [
      { sentenceNumber: 1, type: 'TS', guideAr: 'الجملة المفتاحية (Topic Sentence): حدد الفكرة الرئيسية للفقرة بأكملها.', starterHintEn: 'Social media platforms have changed the way we travel in several important ways.' },
      { sentenceNumber: 2, type: 'SS', guideAr: 'الجملة الداعمة الأولى (SS 1): تحدث عن اكتشاف الوجهات الجديدة.', starterHintEn: 'First of all, people discover new places by looking at photos online.' },
      { sentenceNumber: 3, type: 'Detail', guideAr: 'تفصيل 1: استخدم أداة الربط because لبيان السبب.', starterHintEn: 'Because beautiful photos inspire people, many travelers want to visit faraway countries.' },
      { sentenceNumber: 4, type: 'SS', guideAr: 'الجملة الداعمة الثانية (SS 2): تحدث عن نصائح المدونين.', starterHintEn: 'In addition, travel bloggers provide useful advice for vacation planning.' },
      { sentenceNumber: 5, type: 'Detail', guideAr: 'تفصيل 2: استخدم أداة in order to لبيان الهدف.', starterHintEn: 'Tourists read these recommendations in order to choose the best hotels.' },
      { sentenceNumber: 6, type: 'SS', guideAr: 'الجملة الداعمة الثالثة (SS 3): تحدث عن مشاركة الصور فورياً.', starterHintEn: 'Finally, people share their own travel stories on social media.' },
      { sentenceNumber: 7, type: 'Detail', guideAr: 'تفصيل 3: وضح متى أو لماذا يشاركون الصور.', starterHintEn: 'When tourists visit famous landmarks, they immediately take and post photos.' },
      { sentenceNumber: 8, type: 'CS', guideAr: 'الجملة الختامية (Concluding Sentence): أعد صياغة الفكرة الرئيسية برأي نهائي.', starterHintEn: 'In conclusion, social media plays a vital role in modern international tourism.' }
    ]
  },
  {
    id: 'prompt-2',
    unit: 4,
    titleAr: 'الموضوع 2: لماذا يُعد الضحك مفيداً لصحة الإنسان النفسية والجسدية؟',
    titleEn: 'Topic 2: Why Laughter Is Good for Human Health and Well-being',
    descriptionAr: 'اكتب فقرة من 8 جمل تشرح فيها الفوائد البيولوجية والنفسية للضحك مستعيناً بمعلومات الوحدة الرابعة.',
    descriptionEn: 'Write an eight-sentence paragraph explaining the physiological and social benefits of laughter based on Unit 4 concepts.',
    targetConnectors: ['when', 'because', 'first of all', 'furthermore', 'for example', 'in conclusion'],
    modelParagraph: {
      topicSentence: 'Laughter is one of the most natural and beneficial activities for human health.',
      supportingSentences: [
        { sentence: 'First of all, frequent laughing exercises the cardiovascular system and muscles.', type: 'SS', labelAr: 'فكرة داعمة 1: الفائدة الجسدية' },
        { sentence: 'When people laugh for fifteen minutes, their bodies can burn fifty calories.', type: 'Detail', labelAr: 'تفصيل رقمي مع when' },
        { sentence: 'In addition, laughter produces positive chemicals in the brain called endorphins.', type: 'SS', labelAr: 'فكرة داعمة 2: الفائدة الكيميائية' },
        { sentence: 'These natural chemicals help reduce stress and increase tolerance to physical pain.', type: 'Detail', labelAr: 'تفصيل علمي' },
        { sentence: 'Furthermore, sharing laughter strengthens social bonds and friendships.', type: 'SS', labelAr: 'فكرة داعمة 3: التواصل الاجتماعي' },
        { sentence: 'People laugh thirty times more often when they are together with others.', type: 'Detail', labelAr: 'تفصيل إحصائي من الدرس' }
      ],
      concludingSentence: 'To conclude, laughing regularly keeps our bodies healthy and makes our lives much happier.'
    },
    sentenceTemplates: [
      { sentenceNumber: 1, type: 'TS', guideAr: 'الجملة المفتاحية: بيّن أن الضحك له فوائد متعددة للجسم والنفس.', starterHintEn: 'Laughter has several powerful benefits for human health and daily life.' },
      { sentenceNumber: 2, type: 'SS', guideAr: 'الجملة الداعمة 1: تأثيره على النشاط البدني.', starterHintEn: 'First, laughing provides light physical exercise for the entire body.' },
      { sentenceNumber: 3, type: 'Detail', guideAr: 'تفصيل 1: استخدم When مع رقم أو حقيقة علمية.', starterHintEn: 'When people laugh vigorously, they increase their heart rate and burn calories.' },
      { sentenceNumber: 4, type: 'SS', guideAr: 'الجملة الداعمة 2: الهرمونات والمشاعر الإيجابية.', starterHintEn: 'Secondly, laughter stimulates the release of healthy brain chemicals.' },
      { sentenceNumber: 5, type: 'Detail', guideAr: 'تفصيل 2: استخدم because لبيان سبب تخفيف الألم والتوتر.', starterHintEn: 'Patients feel less pain because their brains release natural endorphins.' },
      { sentenceNumber: 6, type: 'SS', guideAr: 'الجملة الداعمة 3: الجانب الاجتماعي وتقوية العلاقات.', starterHintEn: 'Finally, laughter connects human beings and improves friendships.' },
      { sentenceNumber: 7, type: 'Detail', guideAr: 'تفصيل 3: اذكر حقيقة من دراسة بروفاين (30 مرة).', starterHintEn: 'Studies prove that people laugh much more often when they are in groups.' },
      { sentenceNumber: 8, type: 'CS', guideAr: 'الجملة الختامية: اختم بنصيحة أو تلخيص لأهمية الضحك اليومي.', starterHintEn: 'For these reasons, making time to laugh each day is essential for well-being.' }
    ]
  },
  {
    id: 'prompt-3',
    unit: 5,
    titleAr: 'الموضوع 3: كيف ساهمت التكنولوجيا الحديثة في تطوير الرياضة وتدريب الرياضيين؟',
    titleEn: 'Topic 3: How Technology Has Improved Modern Sports and Training',
    descriptionAr: 'اكتب فقرة من 8 جمل توضح فيها كيف أحدثت التكنولوجيا الحديثة ونظارات الواقع الافتراضي ثورة في الأداء الرياضي والسلامة.',
    descriptionEn: 'Write an eight-sentence paragraph explaining how technological innovations and virtual reality have enhanced athletic performance and safety.',
    targetConnectors: ['in order to', 'be going to', 'on the court', 'furthermore', 'for instance', 'in summary'],
    modelParagraph: {
      topicSentence: 'Modern technology is playing an essential role in improving sports and athletic training.',
      supportingSentences: [
        { sentence: 'First of all, virtual reality allows athletes to practice tactical decisions safely.', type: 'SS', labelAr: 'فكرة داعمة 1: تقنية الواقع الافتراضي' },
        { sentence: 'Football and rugby players use VR headsets in order to avoid dangerous head collisions.', type: 'Detail', labelAr: 'تفصيل مع in order to' },
        { sentence: 'In addition, computerized sensors track player speed and heart rates on the field.', type: 'SS', labelAr: 'فكرة داعمة 2: أجهزة الاستشعار' },
        { sentence: 'Coaches analyze this digital data to design personalized training programs.', type: 'Detail', labelAr: 'تفصيل مع infinitive' },
        { sentence: 'Furthermore, improved materials make modern sports equipment lighter and more durable.', type: 'SS', labelAr: 'فكرة داعمة 3: خامات المعدات' },
        { sentence: 'For example, car racing teams are going to use lightweight plant materials for speed.', type: 'Detail', labelAr: 'تفصيل مع be going to' }
      ],
      concludingSentence: 'In summary, modern technology continues to make sports safer, faster, and more exciting for everyone.'
    },
    sentenceTemplates: [
      { sentenceNumber: 1, type: 'TS', guideAr: 'الجملة المفتاحية: وضح كيف ساهمت التكنولوجيا في تقدم الرياضة.', starterHintEn: 'Modern technology has revolutionized the world of sports in several key ways.' },
      { sentenceNumber: 2, type: 'SS', guideAr: 'الجملة الداعمة 1: التدريب بالواقع الافتراضي (VR).', starterHintEn: 'First, virtual reality technology provides safe and effective training.' },
      { sentenceNumber: 3, type: 'Detail', guideAr: 'تفصيل 1: استخدم in order to لتوضيح تجنب الإصابات.', starterHintEn: 'Athletes use headsets in order to practice difficult plays without getting injured.' },
      { sentenceNumber: 4, type: 'SS', guideAr: 'الجملة الداعمة 2: استخدام الحساسات والتحليل الرقمي.', starterHintEn: 'Next, digital devices help coaches monitor performance on the court.' },
      { sentenceNumber: 5, type: 'Detail', guideAr: 'تفصيل 2: استخدم preposition of location (on / at).', starterHintEn: 'Smart cameras record every movement at the sports facility.' },
      { sentenceNumber: 6, type: 'SS', guideAr: 'الجملة الداعمة 3: المستقبل والخطط التكنولوجية.', starterHintEn: 'Finally, new equipment is becoming lighter and more eco-friendly.' },
      { sentenceNumber: 7, type: 'Detail', guideAr: 'تفصيل 3: استخدم صيغة be going to.', starterHintEn: 'Teams are going to use sustainable materials in racing cars.' },
      { sentenceNumber: 8, type: 'CS', guideAr: 'الجملة الختامية: لخص أثر التكنولوجيا على المتعة والسلامة.', starterHintEn: 'To conclude, technological advances make sports both safer and more competitive.' }
    ]
  },
  {
    id: 'prompt-4',
    unit: 1,
    titleAr: 'الموضوع 4: كيف تحمي نفسك وبياناتك الشخصية على الإنترنت؟ (الكتاب الثاني)',
    titleEn: 'Topic 4: Practical Ways to Stay Safe Online and Avoid Scams (Book 2 - Unit 1)',
    descriptionAr: 'اكتب فقرة أكاديمية من 8 جمل تشرح فيها أهم الخطوات لحماية الحسابات وتجنب الاحتيال الإلكتروني وسرقة الهوية مستعيناً بمفردات وقواعد الوحدة الأولى من الكتاب الثاني (Connecting sentences & The Imperative).',
    descriptionEn: 'Write an eight-sentence paragraph explaining practical steps to keep personal data safe, recognize online scams, and create strong passwords based on Book 2 Unit 1 concepts.',
    targetConnectors: ['because', 'however', 'so', 'when', 'for example', 'in addition', 'finally'],
    modelParagraph: {
      topicSentence: 'Internet users can follow several practical steps to keep their personal information safe online.',
      supportingSentences: [
        { sentence: 'First, check web addresses carefully when you purchase products from unfamiliar shopping sites.', type: 'SS', labelAr: 'فكرة داعمة 1: فحص الروابط' },
        { sentence: 'Cybercriminals create fake websites with low prices because they want to steal credit card numbers.', type: 'Detail', labelAr: 'تفصيل مع أداة because' },
        { sentence: 'In addition, do not click on unknown links received in suspicious email messages.', type: 'SS', labelAr: 'فكرة داعمة 2: الحذر من الروابط المشبوهة' },
        { sentence: 'Malware can infect your computer quietly, so you must install a strong antivirus program.', type: 'Detail', labelAr: 'تفصيل مع أداة so' },
        { sentence: 'Furthermore, use complex and unique passwords for all your online university and banking accounts.', type: 'SS', labelAr: 'فكرة داعمة 3: كلمات المرور القوية' },
        { sentence: 'Simple passwords are easy to guess. However, an eight-character password with symbols stops identity theft.', type: 'Detail', labelAr: 'تفصيل مع However' }
      ],
      concludingSentence: 'In conclusion, being cautious and thinking before you click ensures a safe digital experience.'
    },
    sentenceTemplates: [
      { sentenceNumber: 1, type: 'TS', guideAr: 'الجملة المفتاحية: وضح أهمية اتباع إرشادات السلامة الرقمية على الإنترنت.', starterHintEn: 'There are several vital steps students must take in order to stay safe online.' },
      { sentenceNumber: 2, type: 'SS', guideAr: 'الجملة الداعمة 1: التحقق من عناوين المواقع الرسمية وهجائها.', starterHintEn: 'First, check the spelling of website addresses before entering any payment details.' },
      { sentenceNumber: 3, type: 'Detail', guideAr: 'تفصيل 1: استخدم أداة because لتوضيح أسباب الحذر من الأسعار الرخيصة جداً.', starterHintEn: 'Fraudulent sellers offer fake bargains because they want to attract unsuspecting buyers.' },
      { sentenceNumber: 4, type: 'SS', guideAr: 'الجملة الداعمة 2: الحذر من النقر على الروابط (استخدم صيغة الأمر Don\'t click).', starterHintEn: 'In addition, do not click on unknown links sent by unfamiliar email senders.' },
      { sentenceNumber: 5, type: 'Detail', guideAr: 'تفصيل 2: استخدم أداة الربط so لبيان ضرورة تثبيت برامج الحماية.', starterHintEn: 'Malicious links can download viruses, so you should install protective antivirus software.' },
      { sentenceNumber: 6, type: 'SS', guideAr: 'الجملة الداعمة 3: إنشاء كلمات مرور قوية لكل حساب.', starterHintEn: 'Finally, create strong and distinct passwords for each of your online accounts.' },
      { sentenceNumber: 7, type: 'Detail', guideAr: 'تفصيل 3: استخدم أداة However أو when لتوضيح شروط كلمة المرور الفعالة.', starterHintEn: 'Easy passwords are weak. However, passwords with numbers and symbols protect your identity.' },
      { sentenceNumber: 8, type: 'CS', guideAr: 'الجملة الختامية: لخص بقاعدة التفكير قبل النقر (Think before you click).', starterHintEn: 'In summary, practicing digital awareness and thinking before you click protects you from harm.' }
    ]
  }
];
