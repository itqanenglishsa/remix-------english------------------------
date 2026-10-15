export interface SpeakingTopic {
  id: string;
  unit: number;
  titleAr: string;
  titleEn: string;
  category: 'Group' | 'Individual';
  promptQuestionEn: string;
  promptQuestionAr: string;
  preparationPoints: string[];
  suggestedPhrases: { phrase: string; context: string }[];
  modelAnswerEn?: string;
}

export const SPEAKING_GUIDE_DATA = {
  examInfo: {
    dates: 'الأحد و/أو الإثنين 18 - 19 أكتوبر 2026',
    durationTotal: '5 درجات (25% من الدرجة الكلية)',
    part1Duration: '3 إلى 4 دقائق للمجموعة (Group Discussion)',
    part2Duration: 'دقيقة واحدة لكل طالب (Individual Question)',
    criteria: [
      'Fluency & Coherence (الطلاقة وترابط الأفكار)',
      'Grammar Accuracy (دقة القواعد: gerunds, be going to, when, because)',
      'Vocabulary Range (تنوع المفردات المناسبة لموضوع الوحدة)',
      'Pronunciation & Intonation (اللفظ السليم والتنغيم الصوتي)',
      'Interactive Communication (التواصل والتفاعل بلغة الجسد)'
    ]
  },
  groupDiscussionTopics: [
    {
      id: 'group-1',
      unit: 3,
      titleAr: 'نقاش جماعي 1: هل وسائل التواصل الاجتماعي مفيدة للسياحة أم تفسدها؟',
      titleEn: 'Group Topic 1: Does social media help or harm international travel?',
      category: 'Group' as const,
      promptQuestionEn: 'Some people argue that travel influencers make tourism exciting, while others claim they crowd small towns and show fake photos. What is your group’s opinion?',
      promptQuestionAr: 'يرى البعض أن مشاهير السفر يروجون للسياحة بإيجابية، بينما يرى آخرون أنهم يتسببون بازدحام البلدات الصغيرة وعرض صور غير واقعية. ما رأي مجموعتكم؟',
      preparationPoints: [
        'Mention at least two benefits (discovering new cultures, finding good tips).',
        'Mention at least two drawbacks (crowded historic places, high prices).',
        'Use opinion phrases (In my opinion, I feel that, Don\'t you agree?).'
      ],
      suggestedPhrases: [
        { phrase: "In my opinion, travel blogs are very helpful because...", context: 'إبداء الرأي' },
        { phrase: "I understand your point, but don't you think places get too crowded?", context: 'اعتراض مهذب' },
        { phrase: "According to recent studies, 91% of tourists...", context: 'إسناد معلومة' }
      ]
    },
    {
      id: 'group-2',
      unit: 5,
      titleAr: 'نقاش جماعي 2: هل سيحل الواقع الافتراضي (VR) محل التمارين الرياضية التقليدية؟',
      titleEn: 'Group Topic 2: Is Virtual Reality going to replace traditional sports training?',
      category: 'Group' as const,
      promptQuestionEn: 'Technology allows athletes to practice skills safely with VR headsets. Do you think this is better than practicing on real fields? Why or why not?',
      promptQuestionAr: 'تتيح التكنولوجيا للرياضيين التدرب بنظارات الواقع الافتراضي بأمان. هل تعتقدون أن هذا أفضل من التدرب في الملاعب الواقعية؟ ولماذا؟',
      preparationPoints: [
        'Discuss safety benefits (avoiding head injuries and concussions).',
        'Discuss physical limitations (lack of real sunshine, outdoor team spirit).',
        'Use future tense with "be going to" (Teams are going to use VR...).'
      ],
      suggestedPhrases: [
        { phrase: "What do you think of using VR in football?", context: 'سؤال الزميل عن رأيه' },
        { phrase: "I feel that VR is wonderful for practicing tactics safely.", context: 'إبداء الرأي' },
        { phrase: "You're right, but athletes still need physical endurance on the field.", context: 'موافقة مع استدراك' }
      ]
    },
    {
      id: 'group-3',
      unit: 6,
      titleAr: 'نقاش جماعي 3: هل كثرة الخيارات في المتاجر تسعد المستهلكين أم تربكهم؟',
      titleEn: 'Group Topic 3: Do too many shopping choices make people happier or more stressed?',
      category: 'Group' as const,
      promptQuestionEn: 'Research shows that shoppers buying jam bought more when there were only 6 choices instead of 24. How do you personally make decisions when you shop?',
      promptQuestionAr: 'أظهرت أبحاث المستهلكين أن الزبائن اشتروا أكثر عند توفر 6 خيارات فقط بدلاً من 24. كيف تتخذون قراراتكم شخصياً عند التسوق؟',
      preparationPoints: [
        'Reference the jam experiment (Iyengar & Lepper study).',
        'Discuss online shopping versus physical supermarket shopping.',
        'Use conjunctions (and / but) and infinitives of purpose (in order to).'
      ],
      suggestedPhrases: [
        { phrase: "The survey showed that more choices cause decision fatigue.", context: 'إسناد دليل' },
        { phrase: "I completely agree, because I spend hours comparing items online.", context: 'تأييد تام' },
        { phrase: "Companies should offer fewer items in order not to confuse us.", context: 'صيغة هدف منفية' }
      ]
    },
    {
      id: 'group-4',
      unit: 1,
      titleAr: 'نقاش جماعي 4: هل يمكنك تصديق ما تقرأه على الإنترنت وكيف تميز التضليل؟ (الكتاب الثاني)',
      titleEn: 'Group Topic 4: Can you believe what you read online and how to identify fake news? (Book 2)',
      category: 'Group' as const,
      promptQuestionEn: 'The Internet is full of sensational headlines, altered videos, and fake news. In your group, discuss: Why do people spread misinformation, and what steps should educated students take to verify facts before sharing?',
      promptQuestionAr: 'يمتلئ الإنترنت بالعناوين المثيرة ومقاطع الفيديو المزيفة والأخبار الكاذبة. ناقشوا في مجموعتكم: لماذا ينشر الناس معلومات مضللة، وما هي الخطوات التي يجب على الطلاب اتخاذها للتأكد قبل النشر؟',
      preparationPoints: [
        'Mention types of misinformation (clickbait headlines for ad money, deepfake videos).',
        'Explain how to verify stories (checking source credibility, cross-checking reputable news).',
        'Use the imperative form (Check the source! Be careful before clicking!).'
      ],
      suggestedPhrases: [
        { phrase: "In my opinion, we must always question sensational headlines.", context: 'إبداء الرأي' },
        { phrase: "Don't share stories before confirming them from a reliable news agency.", context: 'صيغة أمر منهي' },
        { phrase: "Social media creates echo chambers, so we only see what we already agree with.", context: 'ربط بالنتيجة' }
      ]
    }
  ],
  individualQuestions: [
    {
      id: 'ind-1',
      unit: 3,
      titleAr: 'سؤال فردي: أسباب تعلم لغة جديدة',
      titleEn: 'Individual: Reasons to Study a Second Language',
      category: 'Individual' as const,
      promptQuestionEn: 'Why do you think it is important for university students to learn English or another second language? Give two clear reasons.',
      promptQuestionAr: 'لماذا تعتقد أنه من المهم لطلاب الجامعة تعلم اللغة الإنجليزية أو لغة ثانية؟ اذكر سببين واضحين.',
      preparationPoints: ['Career opportunities', 'Communicating with international peers', 'Use gerunds (Learning English is useful...)'],
      suggestedPhrases: [
        { phrase: "First of all, learning a foreign language opens up global career opportunities.", context: 'سبب 1' },
        { phrase: "In addition, it helps us understand different cultures when we travel.", context: 'سبب 2' }
      ]
    },
    {
      id: 'ind-2',
      unit: 4,
      titleAr: 'سؤال فردي: دور لغة الجسد في المقابلات',
      titleEn: 'Individual: Body Language in Daily Life',
      category: 'Individual' as const,
      promptQuestionEn: 'How does a person’s body language and facial expressions affect how others view them during a job interview or university presentation?',
      promptQuestionAr: 'كيف تؤثر لغة الجسد وتعابير الوجه على انطباع الآخرين عنك في مقابلة عمل أو عرض جامعي؟',
      preparationPoints: ['Eye contact', 'Smiling warmly', 'Staying calm and avoiding nervous gestures'],
      suggestedPhrases: [
        { phrase: "Maintaining good eye contact shows that you are confident and trustworthy.", context: 'تواصل بصري' },
        { phrase: "When a speaker smiles naturally, the audience feels more comfortable.", context: 'تعابير ودية' }
      ]
    },
    {
      id: 'ind-3',
      unit: 5,
      titleAr: 'سؤال فردي: الرياضة التنافسية مقابل الألعاب الترفيهية',
      titleEn: 'Individual: Differences Between Sports and Games',
      category: 'Individual' as const,
      promptQuestionEn: 'What is the main difference between a sport and a game in your view? Give examples of both.',
      promptQuestionAr: 'ما هو الفرق الرئيسي بين الرياضة واللعبة في نظرك؟ أعطِ أمثلة عليهما.',
      preparationPoints: ['Physical exertion in sports', 'Rules and mental skill in games', 'Examples: soccer vs chess/billiards'],
      suggestedPhrases: [
        { phrase: "In my opinion, sports require serious physical effort and stamina.", context: 'تعريف الرياضة' },
        { phrase: "For example, running is a sport, while billiards is a game of skill.", context: 'أمثلة توضيحية' }
      ]
    },
    {
      id: 'ind-4',
      unit: 6,
      titleAr: 'سؤال فردي: التسوق الذكي وتجنب الإسراف',
      titleEn: 'Individual: How You Avoid Unnecessary Purchases',
      category: 'Individual' as const,
      promptQuestionEn: 'Stores use marketing tricks to make us buy things we do not need. How do you decide what to buy and avoid wasting money?',
      promptQuestionAr: 'تستخدم المتاجر حيلاً تسويقية لجعلنا نشتري ما لا نحتاجه. كيف تقرر مشترياتك وتتجنب هدر المال؟',
      preparationPoints: ['Writing a shopping list', 'Comparing prices online', 'Avoiding shopping when hungry'],
      suggestedPhrases: [
        { phrase: "I always prepare a numbered list before entering the supermarket.", context: 'التخطيط' },
        { phrase: "I do this in order not to buy unnecessary items on impulse.", context: 'بيان الهدف' }
      ]
    },
    {
      id: 'ind-5',
      unit: 1,
      titleAr: 'سؤال فردي: كيف تحمي نفسك وحساباتك من الاحتيال وسرقة الهوية؟ (الكتاب الثاني)',
      titleEn: 'Individual: How You Keep Your Accounts and Identity Safe Online (Book 2)',
      category: 'Individual' as const,
      promptQuestionEn: 'Online scams, phishing emails, and malware threaten Internet users every day. How do you protect your personal identity and accounts when browsing or shopping online?',
      promptQuestionAr: 'تهدد عمليات الاحتيال وبرمجيات التجسس وسرقة الهوية مستخدمي الإنترنت يومياً. كيف تحمي هويتك الشخصية وحساباتك عند التصفح أو التسوق الرقمي؟',
      preparationPoints: [
        'Creating strong passwords with 8+ characters, numbers, and symbols',
        'Verifying website URLs and company spelling before payment',
        'Using the imperative form (Be careful! Do not click strange links!)'
      ],
      suggestedPhrases: [
        { phrase: "First, I never reuse the same password across multiple university accounts.", context: 'أمان الحسابات' },
        { phrase: "When I shop online, I always inspect the URL to confirm it is authentic.", context: 'فحص الروابط' }
      ]
    }
  ],
  shadowingSentences: [
    {
      id: 'sh-1',
      unit: 3,
      sentenceEn: "Learning a second language helps students connect with people from diverse cultures.",
      sentenceAr: "تعلم لغة ثانية يساعد الطلاب على التواصل مع أشخاص من ثقافات متنوعة.",
      targetSkill: "Gerund as Subject (Learning...)"
    },
    {
      id: 'sh-2',
      unit: 3,
      sentenceEn: "Social media influencers inspire travelers, but they often cause overcrowding in small towns.",
      sentenceAr: "مشاهير وسائل التواصل يلهمون المسافرين، لكنهم يتسببون غالباً بازدحام البلدات الصغيرة.",
      targetSkill: "Compound sentence with 'but'"
    },
    {
      id: 'sh-3',
      unit: 4,
      sentenceEn: "Maintaining confident eye contact creates a positive impression during job interviews.",
      sentenceAr: "الحفاظ على تواصل بصري واثق يترك انطباعاً إيجابياً أثناء مقابلات العمل.",
      targetSkill: "Fluency & Professional Presentation"
    },
    {
      id: 'sh-4',
      unit: 4,
      sentenceEn: "Laughter reduces daily stress levels and strengthens social relationships among teammates.",
      sentenceAr: "الضحك يقلل مستويات التوتر اليومي ويقوي الروابط الاجتماعية بين الزملاء.",
      targetSkill: "Compound predicate with 'and'"
    },
    {
      id: 'sh-5',
      unit: 5,
      sentenceEn: "Athletes are going to use virtual reality technology to practice difficult tactics safely.",
      sentenceAr: "سيستخدم الرياضيون تقنية الواقع الافتراضي للتدرب على التكتيكات الصعبة بأمان.",
      targetSkill: "Future tense with 'be going to'"
    },
    {
      id: 'sh-6',
      unit: 5,
      sentenceEn: "Playing competitive sports requires physical endurance, strict discipline, and quick reflexes.",
      sentenceAr: "ممارسة الرياضات التنافسية تتطلب قدرة تحمل بدنية، وانضباطاً صارماً، وسرعة بديهة.",
      targetSkill: "Complex vocabulary range"
    },
    {
      id: 'sh-7',
      unit: 6,
      sentenceEn: "Customers make better purchasing decisions when stores offer a limited number of options.",
      sentenceAr: "يتخذ المستهلكون قرارات شراء أفضل عندما تقدم المتاجر عدداً محدوداً من الخيارات.",
      targetSkill: "Complex sentence with 'when'"
    },
    {
      id: 'sh-8',
      unit: 6,
      sentenceEn: "I always prepare a written shopping list in order to avoid buying unnecessary products.",
      sentenceAr: "أقوم دائماً بإعداد قائمة تسوق مكتوبة حتى أتجنب شراء منتجات غير ضرورية.",
      targetSkill: "Infinitive of purpose (in order to avoid)"
    },
    {
      id: 'sh-9',
      unit: 1,
      sentenceEn: "Be careful when clicking on links, and never share your passwords on unverified websites.",
      sentenceAr: "كن حذراً عند النقر على الروابط، ولا تشارك كلمات مرورك أبداً على مواقع غير موثوقة.",
      targetSkill: "The Imperative (Be careful... and never share...)"
    },
    {
      id: 'sh-10',
      unit: 1,
      sentenceEn: "A fad becomes popular suddenly, but a true trend continues growing and developing over time.",
      sentenceAr: "الهبة المؤقتة تشتهر فجأة، لكن التوجه الحقيقي يستمر في النمو والتطور بمرور الوقت.",
      targetSkill: "Fad vs Trend (Compound sentence with 'but')"
    }
  ]
};

