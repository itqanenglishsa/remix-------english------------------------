export interface ExamQuestion {
  id: number;
  section: 'reading' | 'vocabulary' | 'grammar' | 'listening';
  unit: 1 | 3 | 4 | 5 | 6;
  questionEn: string;
  questionAr: string;
  options: string[];
  correctIndex: number;
  explanationEn: string;
  explanationAr: string;
  passageId?: string;
  audioScenarioId?: string;
}

export interface ReadingPassage {
  id: string;
  title: string;
  titleAr: string;
  unit: number;
  content: string[];
  contentAr: string[];
}

export interface ListeningScenario {
  id: string;
  title: string;
  unit: number;
  duration?: string;
  audioUrl?: string;
  speakerA?: string;
  speakerB?: string;
  dialogue: { speaker: string; text: string; timestamp?: string; role?: string }[];
}

export interface ExamModel {
  id: number;
  numberAr: string;
  titleAr: string;
  titleEn: string;
  badgeAr: string;
  colorTheme: string;
  descriptionAr: string;
  coverageSummaryAr: string;
  featuresAr: string[];
  difficulty: 'متوازن' | 'متقدم' | 'تحدي واختبار نهائي';
  questions: ExamQuestion[];
}

export const READING_PASSAGES: ReadingPassage[] = [
  {
    id: 'passage-1',
    title: 'Passage 1: What Can Facial Expressions and Body Language Reveal?',
    titleAr: 'النص القرائي 1: ماذا تكشف تعابير الوجه ولغة الجسد؟',
    unit: 4,
    content: [
      '1. Laughter and smiling are universal human behaviors. Scientific studies reveal that human babies begin to smile and laugh at approximately four months of age, long before they learn their first spoken words. Laughter is fundamentally social. Research by psychologist Robert Provine demonstrated that people are thirty times more likely to laugh when they are in social groups than when they are alone. Furthermore, people rarely laugh solely because of humorous jokes; most laughter occurs after ordinary statements to signal friendliness, comfort, and positive connection.',
      '2. However, interpreting body language requires careful observation. When people feel nervous, their body language often communicates their discomfort. For instance, people might move their hands rapidly, touch their faces, or cross their arms. In law enforcement, detectives observe suspects’ facial expressions and non-verbal signals during questioning. Although detectives look for clues such as rapid blinking or hesitation, they acknowledge that body language alone is not foolproof proof of deception. A person may exhibit nervous gestures simply because being questioned in a police station is an intimidating and stressful experience.'
    ],
    contentAr: [
      '١. يُعد الضحك والابتسام سلوكين بشريين عالميين مشتركين بين جميع الثقافات. وتكشف الدراسات العلمية أن الأطفال الرضع يبدأون بالابتسام والضحك في عمر أربعة أشهر تقريباً، قبل وقت طويل من تعلمهم ونطقهم لأولى كلماتهم. والضحك بطبيعته ظاهرة اجتماعية بالدرجة الأولى؛ إذ أثبتت أبحاث عالم النفس الشهير روبرت بروفاين أن الناس يضحكون في المجموعات أكثر بثلاثين ضعفاً (30 times) مقارنة بضحكهم عندما يكونون بمفردهم. وعلاوة على ذلك، نادراً ما يضحك الناس لمجرد النكات الفكاهية وحدها؛ بل إن الغالبية العظمى من الضحك تصدر بعد عبارات وجمل يومية عادية للتعبير عن الود، والارتياح، وبناء تواصل إيجابي بين المتحدثين.',
      '٢. ومع ذلك، فإن تفسير لغة الجسد يتطلب ملاحظة دقيقة وحذرة؛ فعندما يشعر الأشخاص بالتوتر، غالباً ما تعكس لغة أجسادهم حالة القلق وعدم الارتياح. على سبيل المثال، قد يحركون أيديهم بسرعة، أو يلمسون وجوههم، أو يشبكون أذرعهم. وفي الأجهزة الأمنية، يراقب المحققون تعابير وجوه المشتبه بهم وإيماءاتهم غير اللفظية أثناء الاستجواب. ورغم أن المحققين يبحثون عن علامات دالة مثل الرمش المتسارع أو التردد، إلا أنهم يعترفون صراحة بأن لغة الجسد وحدها ليست دليلاً قاطعاً على الكذب أو الخداع؛ فالشخص قد يُبدي حركات متوترة لمجرد أن خضوعه للتحقيق داخل مركز الشرطة بحد ذاته موقف مخيف وضاغط نفسياً.'
    ]
  },
  {
    id: 'passage-2',
    title: 'Passage 2: The Paradox of Choice in Modern Supermarkets',
    titleAr: 'النص القرائي 2: مفارقة كثرة الخيارات في محلات السوبرماركت الحديثة',
    unit: 6,
    content: [
      '1. In modern retail stores and supermarkets, consumers are faced with an overwhelming variety of products. In a landmark psychological study conducted by Sheena Iyengar and Mark Lepper in 2000, researchers tested customer behavior using gourmet jam displays. On one day, they offered shoppers a tasting booth featuring 24 different flavors of jam. On a different day, they displayed only 6 flavors. While the large display attracted more curious onlookers (60% versus 40%), only 3% of consumers who saw the 24 jams actually made a purchase. In stark contrast, 30% of shoppers who sampled from the 6-jam booth bought a jar. Having too many options caused "decision fatigue" and discouraged shoppers from deciding.',
      '2. In addition, supermarket managers strategically design their store layouts to influence consumer spending. They place essential daily items, such as milk, eggs, and bread, at the back of the store in order to make customers walk through every aisle. Along the way, pleasant bakery aromas stimulate hunger, and high-priced items are positioned on middle shelves right at eye level. By understanding these subtle marketing techniques, smart consumers can compare prices and avoid unnecessary purchases.'
    ],
    contentAr: [
      '١. في متاجر التجزئة ومحلات السوبرماركت المعاصرة، يواجه المتسوقون تنوعاً هائلاً وفائضاً من المنتجات. وفي دراسة نفسية تاريخية بارزة أجرتها الباحثة شينا إينغار ومارك ليبر عام 2000، اختبر الباحثون سلوك المشترين عبر منصات تذوق المربى الفاخر. في أحد الأيام، وفروا منصة تذوق تشتمل على 24 نكهة مختلفة من المربى، بينما عرضوا في يوم آخر 6 نكهات فقط. ورغم أن العرض الضخم المكون من 24 نوعاً جذب فضول عدد أكبر من الزبائن (60% توقفوا للنظر مقابل 40% للعرض الصغير)، إلا أن 3% فقط من المتسوقين اشتروا مربى فعلياً! وعلى العكس تماماً، فإن 30% من الزبائن الذين تذوقوا من منصة الـ 6 نكهات اشتروا علبة مربى (أي عشرة أضعاف نسبة الشراء). لقد تسببت كثرة الخيارات في حدوث "إجهاد اتخاذ القرار" (Decision Fatigue) وتثبيط المتسوقين عن اتخاذ قرار الشراء.',
      '٢. علاوة على ذلك، يخطط مديرو السوبرماركت مساحات المتجر بذكاء استراتيجي للتأثير على حجم إنفاق المتسوقين؛ حيث يضعون السلع الأساسية اليومية مثل الحليب والبيض والخبز في أقصى الجزء الخلفي من المتجر، وذلك لكي يجبروا المتسوقين على السير عبر جميع الممرات ورؤية سلع إضافية. وعلى طول المسار، تنبعث روائح المخبوزات الشهية لتحفيز الشعور بالجوع، كما توضع المنتجات الأغلى ثمناً على الرفوف الوسطى المقابلة لمستوى العين مباشرة (Eye level). ومن خلال إدراك هذه الحيل التسويقية الدقيقة، يستطيع المتسوق الذكي مقارنة الأسعار وتجنب شراء ما لا يحتاجه.'
    ]
  },
  {
    id: 'passage-3',
    title: 'Passage 3: Staying Safe Online and Recognizing Misinformation',
    titleAr: 'النص القرائي 3: البقاء آمناً على الإنترنت وتمييز المعلومات المضللة (الكتاب الثاني)',
    unit: 1,
    content: [
      '1. The Internet is full of useful information, but it can also cause serious problems if users are not careful. Online scams and identity theft are increasing. For example, Nora found a website selling luxury handbags at an extremely low price. Attracted by the unrealistically cheap bargain, she entered her credit card details, but the handbag never arrived. In another case, Ahmed clicked on an unfamiliar link, and dangerous malware was downloaded onto his laptop. The virus slowed his system down and repeatedly directed him to suspicious websites.',
      '2. In addition, recognizing misinformation in the media has become an essential critical thinking skill. Fake news, clickbait headlines, and altered videos are frequently spread across social media to earn advertising money or manipulate opinions. Security experts advise Internet users to verify news from reliable, independent organizations, inspect web addresses for spelling errors, install strong antivirus software, and create complex passwords with numbers and symbols.'
    ],
    contentAr: [
      '١. الإنترنت مليء بالمعلومات المفيدة، لكنه قد يسبب مشاكل خطيرة إذا لم يكن المستخدمون حذرين؛ حيث تتزايد عمليات الاحتيال وسرقة الهوية. على سبيل المثال، وجدت نورا موقعاً يبيع حقائب فاخرة بأسعار منخفضة جداً، فانخدعت بالصفقة الرخيصة غير الواقعية وأدخلت بيانات بطاقتها الائتمانية، لكن الحقيبة لم تصل قط. وفي حالة أخرى، نقر أحمد على رابط مجهول، فحُمّلت برمجية خبيثة ضارة (Malware) على حاسوبه المحمول، مما تسبب في إبطاء جهازه وتوجيهه باستمرار إلى مواقع مشبوهة.',
      '٢. بالإضافة إلى ذلك، أصبح تمييز المعلومات المضللة في وسائل الإعلام مهارة تفكير نقدي بالغة الأهمية. فالأخبار الزائفة والعناوين المثيرة (Clickbait) ومقاطع الفيديو المعدلة تنتشر بشكل متكرر عبر وسائل التواصل الاجتماعي لجني أرباح الإعلانات أو توجيه الرأي العام. ويوصي خبراء الأمن الرقمي بالتحقق من الأخبار عبر وكالات إخبارية موثوقة ومستقلة، وتدقيق عناوين المواقع لكشف أي أخطاء إملائية، وتثبيت برامج حماية قوية، وإنشاء كلمات مرور معقدة تحتوي على أرقام ورموز.'
    ]
  }
];

export const LISTENING_SCENARIOS: ListeningScenario[] = [
  {
    id: 'audio-1',
    title: 'Listening Passage: Innovations in Sports Technology, Endangered Languages, and Modern Trends',
    unit: 5,
    duration: '02:06',
    dialogue: [
      { 
        speaker: 'Host', 
        text: 'Good morning and welcome to our university academic podcast. Today we are joined by Dr. Suleiman, Professor Ramirez, and Professor Vance to discuss technology, languages, and modern trends.', 
        timestamp: '00:00',
        role: 'مقدم البودكاست الأكاديمي'
      },
      { 
        speaker: 'Dr. Suleiman', 
        text: 'Thank you! First, virtual reality is transforming training in sports like football, rugby, and car racing.', 
        timestamp: '00:15',
        role: 'خبير العلوم الرياضية والواقع الافتراضي'
      },
      { 
        speaker: 'Host', 
        text: 'How does VR improve athlete safety?', 
        timestamp: '00:23',
        role: 'مقدم البودكاست'
      },
      { 
        speaker: 'Dr. Suleiman', 
        text: 'In contact sports, players frequently collide and risk severe head injuries or concussions. With VR headsets, athletes practice tactical decisions without physical contact. Furthermore, it allows training indoors anytime in bad weather, and a tennis player can repeat the exact same difficult shot a hundred times until they master it.', 
        timestamp: '00:27',
        role: 'خبير العلوم الرياضية والواقع الافتراضي'
      },
      { 
        speaker: 'Host', 
        text: 'Fascinating. Professor Ramirez, how does research connect with global linguistics today?', 
        timestamp: '00:51',
        role: 'مقدم البودكاست'
      },
      { 
        speaker: 'Professor Ramirez', 
        text: 'Well, there are approximately 7,000 living languages spoken worldwide today. However, linguists estimate between 10% and 50% may disappear by the end of this century. A language enters critical danger when young children stop learning it at school or home, so we use digital recordings and educational apps to preserve them.', 
        timestamp: '00:58',
        role: 'أستاذ اللغويات وحفظ اللغات'
      },
      { 
        speaker: 'Host', 
        text: 'Turning to modern technological adoption, Professor Vance, why do some inventions succeed while others fail?', 
        timestamp: '01:23',
        role: 'مقدم البودكاست'
      },
      { 
        speaker: 'Professor Vance', 
        text: 'In business and marketing, it is crucial to distinguish between a fad and a trend. A fad is popular very suddenly, but short-lived like fidget spinners. A trend, on the other hand, develops steadily and changes lives over many years.', 
        timestamp: '01:31',
        role: 'أستاذ التسويق وسلوك المستهلك'
      },
      { 
        speaker: 'Host', 
        text: 'Did people ever mistake famous inventions for fads?', 
        timestamp: '01:48',
        role: 'مقدم البودكاست'
      },
      { 
        speaker: 'Professor Vance', 
        text: 'Yes, indeed! When Thomas Edison introduced the electric lightbulb, critics insisted it was just a useless fad that would soon fail. Today, electric lighting is essential worldwide.', 
        timestamp: '01:53',
        role: 'أستاذ التسويق وسلوك المستهلك'
      }
    ]
  }
];

export const MOCK_EXAM_QUESTIONS: ExamQuestion[] = [
  // ==========================================
  // SECTION 1: READING (10 Questions, Q1 - Q10)
  // ==========================================
  {
    id: 1,
    section: 'reading',
    unit: 4,
    passageId: 'passage-1',
    questionEn: 'According to paragraph 1, when do human infants first start smiling and laughing?',
    questionAr: 'وفقاً للفقرة الأولى، متى يبدأ الرضع بالابتسام والضحك لأول مرة؟',
    options: [
      'At about four months of age',
      'Immediately after birth',
      'When they start speaking their first words',
      'At one year of age'
    ],
    correctIndex: 0,
    explanationEn: 'The passage explicitly states: "human babies begin to smile and laugh at approximately four months of age".',
    explanationAr: 'يذكر النص بوضوح في الفقرة الأولى أن الرضع يبدأون بالضحك والابتسام في عمر أربعة أشهر تقريباً.'
  },
  {
    id: 2,
    section: 'reading',
    unit: 4,
    passageId: 'passage-1',
    questionEn: 'What did Robert Provine’s study reveal about laughter?',
    questionAr: 'ماذا كشفت دراسة روبرت بروفاين حول الضحك؟',
    options: [
      'People laugh 30 times more often in social groups than alone',
      'People laugh only when hearing stand-up comedy',
      'Adults laugh much more than young children',
      'Men laugh significantly more than women'
    ],
    correctIndex: 0,
    explanationEn: 'Paragraph 1 states that "people are thirty times more likely to laugh when they are in social groups than when they are alone."',
    explanationAr: 'أثبتت دراسة بروفاين أن الناس يضحكون في المجموعات أكثر بثلاثين ضعفاً مقارنة بضحكهم بمفردهم.'
  },
  {
    id: 3,
    section: 'reading',
    unit: 4,
    passageId: 'passage-1',
    questionEn: 'Why does the author state that laughter is fundamentally social?',
    questionAr: 'لماذا يوضح الكاتب أن الضحك اجتماعي بالدرجة الأولى؟',
    options: [
      'Because most laughter occurs after everyday statements to show friendliness',
      'Because people only laugh when told to do so',
      'Because people never laugh at humorous stories',
      'Because it is an involuntary reflex that has no meaning'
    ],
    correctIndex: 0,
    explanationEn: 'The text notes that "most laughter occurs after ordinary statements to signal friendliness, comfort, and positive connection."',
    explanationAr: 'معظم الضحك يحدث بعد عبارات عادية في الحديث للتعبير عن الود والألفة والراحة بين الأشخاص.'
  },
  {
    id: 4,
    section: 'reading',
    unit: 4,
    passageId: 'passage-1',
    questionEn: 'In paragraph 2, what does the pronoun "they" in the sentence "they acknowledge that body language..." refer to?',
    questionAr: 'في الفقرة الثانية، على من يعود الضمير "they" في جملة "they acknowledge..."؟',
    options: [
      'Detectives',
      'Suspects',
      'Studies',
      'Facial expressions'
    ],
    correctIndex: 0,
    explanationEn: 'The preceding clause discusses detectives observing suspects, so "they acknowledge" refers to detectives.',
    explanationAr: 'الضمير they يعود على المحققين (Detectives) المذكورين في الجملة السابقة.'
  },
  {
    id: 5,
    section: 'reading',
    unit: 4,
    passageId: 'passage-1',
    questionEn: 'Why is body language NOT considered foolproof evidence of lying by detectives?',
    questionAr: 'لماذا لا تعتبر لغة الجسد دليلاً قاطعاً على الكذب لدى المحققين؟',
    options: [
      'Because being questioned in a police station is stressful and causes nervousness',
      'Because suspects never show any facial expressions',
      'Because all suspects are trained professional actors',
      'Because body language never changes during conversations'
    ],
    correctIndex: 0,
    explanationEn: 'The text explains: "A person may exhibit nervous gestures simply because being questioned in a police station is an intimidating and stressful experience."',
    explanationAr: 'لأن التواجد في مركز الشرطة والخضوع للاستجواب موقف مخيف وضاغط يولد التوتر الطبيعي حتى لدى الصادقين.'
  },
  {
    id: 6,
    section: 'reading',
    unit: 6,
    passageId: 'passage-2',
    questionEn: 'In the jam experiment described in Passage 2, what happened when 24 flavors were displayed?',
    questionAr: 'في تجربة المربى الموضحة في النص الثاني، ماذا حدث عند عرض 24 نكهة؟',
    options: [
      'More people stopped to look, but only 3% bought jam',
      '30% of shoppers bought a jar of jam',
      'Nobody visited the booth at all',
      'Customers complained about the taste of the jam'
    ],
    correctIndex: 0,
    explanationEn: 'The text states that 60% stopped to look, but only 3% actually purchased jam when given 24 choices.',
    explanationAr: 'جذب العرض الكبير 60% من الفضوليين ولكن 3% فقط اشتروا، بسبب إجهاد اتخاذ القرار وتشتت الخيارات.'
  },
  {
    id: 7,
    section: 'reading',
    unit: 6,
    passageId: 'passage-2',
    questionEn: 'What percentage of shoppers made a purchase when only 6 flavors were shown?',
    questionAr: 'ما هي نسبة المتسوقين الذين اشتروا مربى عندما عُرضت 6 نكهات فقط؟',
    options: [
      '30%',
      '3%',
      '60%',
      '10%'
    ],
    correctIndex: 0,
    explanationEn: 'The text states: "In stark contrast, 30% of shoppers who sampled from the 6-jam booth bought a jar."',
    explanationAr: 'اشترى 30% من المتسوقين عندما كانت الخيارات مقتصرة على 6 أنواع فقط (عشرة أضعاف نسبة العرض الكبير).'
  },
  {
    id: 8,
    section: 'reading',
    unit: 6,
    passageId: 'passage-2',
    questionEn: 'Why do supermarkets place essential items like milk and bread at the back of the store?',
    questionAr: 'لماذا تضع محلات السوبرماركت السلع الأساسية كالخبز والحليب في نهاية المتجر؟',
    options: [
      'In order to make customers walk through every aisle and see more products',
      'Because there is no refrigeration at the front of the supermarket',
      'To prevent customers from buying too many items',
      'Because fresh milk is always delivered through the back door'
    ],
    correctIndex: 0,
    explanationEn: 'Paragraph 2 explains: "They place essential daily items... at the back of the store in order to make customers walk through every aisle."',
    explanationAr: 'لإجبار المتسوقين على السير في جميع الممرات ومشاهدة منتجات إضافية لزيادة مشترياتهم.'
  },
  {
    id: 9,
    section: 'reading',
    unit: 1,
    passageId: 'passage-3',
    questionEn: 'According to Passage 3, why did Nora lose her money when shopping online?',
    questionAr: 'وفقاً للنص الثالث، لماذا خسرت نورا أموالها عند التسوق عبر الإنترنت؟',
    options: [
      'She was attracted by an unrealistically low price on a fraudulent website and never received the item',
      'Her bank refused to process the transaction for the handbag',
      'The luxury brand sold out of handbags before shipping',
      'She cancelled the order after paying by mistake'
    ],
    correctIndex: 0,
    explanationEn: 'The passage explains that Nora was lured by an unrealistically low price for a Louis Vuitton handbag on a fake website, paid with her card, and the handbag never arrived.',
    explanationAr: 'يوضح النص أن نورا انخدعت بسعر منخفض جداً وغير واقعي لحقيبة لويس فيتون على موقع احتيالي، ودفعت بالبطاقة ولم تصلها الحقيبة قط.'
  },
  {
    id: 10,
    section: 'reading',
    unit: 1,
    passageId: 'passage-3',
    questionEn: 'What is the main idea of paragraph 2 regarding misinformation in the media?',
    questionAr: 'ما هي الفكرة الرئيسية للفقرة الثانية بشأن المعلومات المضللة في الإعلام؟',
    options: [
      'Sensational headlines and altered media spread rapidly, requiring users to verify news from reliable sources',
      'All online news stories are completely trustworthy and accurate',
      'Social media companies delete all fake stories automatically within seconds',
      'People should only read printed physical newspapers'
    ],
    correctIndex: 0,
    explanationEn: 'Paragraph 2 highlights that recognizing misinformation is essential because fake news and clickbait spread quickly, and users must critically verify sources.',
    explanationAr: 'تؤكد الفقرة أن تمييز التضليل الإعلامي مهارة تفكير نقدي ضرورية لأن الأخبار الكاذبة والعناوين المثيرة تنتشر بسرعة، مما يوجب التحقق من المصادر الموثوقة.'
  },

  // ==========================================
  // SECTION 2: VOCABULARY (15 Questions, Q11 - Q25)
  // ==========================================
  {
    id: 11,
    section: 'vocabulary',
    unit: 3,
    questionEn: 'Social media influencers have the power to _______ the travel choices of millions of followers.',
    questionAr: 'يمتلك المؤثرون القدرة على _______ قرارات السفر لملايين المتابعين.',
    options: ['affect', 'effect', 'disappear', 'waste'],
    correctIndex: 0,
    explanationEn: 'The verb "affect" means to produce an effect on or influence something.',
    explanationAr: 'الفعل affect يعني "يؤثر على"، أما effect فهي اسم.'
  },
  {
    id: 12,
    section: 'vocabulary',
    unit: 3,
    questionEn: 'Which of the following is a correct compound phrase using a modifying noun?',
    questionAr: 'أي من العبارات التالية صحيحة باستخدام اسم مخصص (Modifying Noun)؟',
    options: ['family vacation', 'families vacation', 'vacations family', 'family vacations time'],
    correctIndex: 0,
    explanationEn: 'In English modifying nouns, the first noun acts like an adjective and cannot be plural. "family vacation" is correct.',
    explanationAr: 'الاسم الأول الذي يصف الاسم الثاني يعامل كصفة ولا يُجمع؛ نقول family vacation وليس families vacation.'
  },
  {
    id: 13,
    section: 'vocabulary',
    unit: 3,
    questionEn: 'Adding the suffix "-ful" to the noun "use" changes it into which part of speech and meaning?',
    questionAr: 'إضافة اللاحقة "-ful" إلى الاسم "use" تحوله إلى أي نوع من الكلمات وبأي معنى؟',
    options: [
      'An adjective meaning able to be used or helpful (useful)',
      'A verb meaning to use repeatedly',
      'An adverb meaning quickly',
      'A noun meaning a person who uses'
    ],
    correctIndex: 0,
    explanationEn: 'The suffix -ful turns a noun into an adjective (e.g., use -> useful, help -> helpful).',
    explanationAr: 'اللاحقة -ful تحول الاسم إلى صفة بمعنى مفيد (useful).'
  },
  {
    id: 14,
    section: 'vocabulary',
    unit: 4,
    questionEn: 'In the sentence "The police officer needed to observe the suspect carefully", what is a synonym for "observe"?',
    questionAr: 'في الجملة أعلاه، ما هو المرادف الدقيق لكلمة "observe"؟',
    options: ['watch', 'ignore', 'call', 'scare'],
    correctIndex: 0,
    explanationEn: '"Observe" means to watch someone or something attentively.',
    explanationAr: 'الفعل observe يعني يراقب أو يلاحظ بدقة، ومرادفه watch.'
  },
  {
    id: 15,
    section: 'vocabulary',
    unit: 4,
    questionEn: 'A healthy lifestyle and frequent laughter can help _______ serious heart diseases.',
    questionAr: 'نمط الحياة الصحي والضحك المتكرر يساعدان في _______ أمراض القلب الخطيرة.',
    options: ['prevent', 'complain', 'disappear', 'cause'],
    correctIndex: 0,
    explanationEn: '"Prevent" means to stop something dangerous or harmful from happening.',
    explanationAr: 'الفعل prevent يعني يمنع أو يقي من حدوث المرض.'
  },
  {
    id: 16,
    section: 'vocabulary',
    unit: 4,
    questionEn: 'Identify the part of speech of the word "laughter" in the sentence: "Laughter is natural for humans."',
    questionAr: 'حدد نوع كلمة "laughter" في الجملة السابقة:',
    options: ['Noun', 'Verb', 'Adjective', 'Adverb'],
    correctIndex: 0,
    explanationEn: '"Laughter" is a noun functioning as the subject of the sentence.',
    explanationAr: 'كلمة laughter اسم (Noun) وهي فاعل الجملة.'
  },
  {
    id: 17,
    section: 'vocabulary',
    unit: 5,
    questionEn: 'The coach was very pleased because the new tennis player showed exceptional _______ during practice.',
    questionAr: 'كان المدرب مسروراً جداً لأن لاعب التنس الجديد أظهر _______ استثنائية أثناء التمرين.',
    options: ['effort', 'exciting', 'compete', 'physical'],
    correctIndex: 0,
    explanationEn: 'The sentence requires a noun after the adjective "exceptional". "Effort" (strenuous physical or mental exertion) fits grammatically and semantically.',
    explanationAr: 'نحتاج اسماً بعد الصفة exceptional؛ وeffort تعني بذل الجهد والاجتهاد.'
  },
  {
    id: 18,
    section: 'vocabulary',
    unit: 5,
    questionEn: 'Adding the prefix "un-" to the adjective "friendly" creates a word that means:',
    questionAr: 'إضافة البادئة "un-" إلى الصفة "friendly" تنتج كلمة تعني:',
    options: ['Not friendly (hostile / unkind)', 'Very friendly', 'Friendly again', 'Becoming friendly'],
    correctIndex: 0,
    explanationEn: 'The prefix un- means "not" and creates the antonym: unfriendly = not friendly.',
    explanationAr: 'البادئة un- تعني النفي (Not)، وكلمة unfriendly تعني غير ودود.'
  },
  {
    id: 19,
    section: 'vocabulary',
    unit: 5,
    questionEn: 'VR training provides athletes with a _______ way to practice their skills without traveling.',
    questionAr: 'يوفر التدريب بالواقع الافتراضي للرياضيين طريقة _______ لممارسة مهاراتهم دون الحاجة للسفر.',
    options: ['convenient', 'bored', 'unhappy', 'dangerous'],
    correctIndex: 0,
    explanationEn: '"Convenient" means useful, easy, and not causing trouble.',
    explanationAr: 'الصفة convenient تعني مريحة وملائمة وتوفر الوقت والجهد.'
  },
  {
    id: 20,
    section: 'vocabulary',
    unit: 6,
    questionEn: 'In English, which verb collocates correctly with the word "decision"?',
    questionAr: 'في اللغة الإنجليزية، أي فعل يشكل متلازمة صحيحة مع كلمة "decision"؟',
    options: ['make a decision', 'do a decision', 'create a decision', 'happen a decision'],
    correctIndex: 0,
    explanationEn: 'The correct standard English collocation is "make a decision".',
    explanationAr: 'المتلازمة اللفظية الصحيحة هي make a decision (يتخذ قراراً)، ويُمنع قول do a decision.'
  },
  {
    id: 21,
    section: 'vocabulary',
    unit: 6,
    questionEn: 'What fraction corresponds to the percentage "75%"?',
    questionAr: 'ما هو الكسر اللفظي المقابل للنسبة المئوية 75%؟',
    options: ['three quarters', 'one third', 'one half', 'two thirds'],
    correctIndex: 0,
    explanationEn: '75% is equivalent to three quarters (3/4).',
    explanationAr: '75% تقابل ثلاثة أرباع (three quarters أو three fourths).'
  },
  {
    id: 22,
    section: 'vocabulary',
    unit: 6,
    questionEn: 'A customer who purchases goods and services for everyday personal use is called a(n) _______.',
    questionAr: 'العميل الذي يشتري السلع والخدمات لاستخدامه الشخصي يسمى _______.',
    options: ['consumer', 'influencer', 'advertiser', 'expert'],
    correctIndex: 0,
    explanationEn: 'A "consumer" is a person who buys and uses products and services.',
    explanationAr: 'المستهلك هو consumer.'
  },
  {
    id: 23,
    section: 'vocabulary',
    unit: 1,
    questionEn: 'A harmful software program downloaded onto a computer that damages the system is called _______.',
    questionAr: 'يُطلق على البرنامج الضار الذي يُحمّل على الحاسوب ويتسبب في إتلاف النظام اسم _______.',
    options: ['malware', 'password', 'headline', 'failure'],
    correctIndex: 0,
    explanationEn: '"Malware" is software specifically designed to damage, disrupt, or gain unauthorized access to a computer system.',
    explanationAr: 'البرمجيات الخبيثة والضارة بالحاسوب تسمى malware.'
  },
  {
    id: 24,
    section: 'vocabulary',
    unit: 1,
    questionEn: 'Before believing or sharing breaking news on social media, verify that it comes from a _______ source.',
    questionAr: 'قبل تصديق الأخبار العاجلة أو مشاركتها على وسائل التواصل، تحقق من صدورها عن مصدر _______.',
    options: ['reliable', 'fake', 'dangerous', 'decline'],
    correctIndex: 0,
    explanationEn: '"Reliable" means trustworthy, authentic, and credible.',
    explanationAr: 'المصدر الموثوق الذي يمكن الاعتماد عليه يسمى reliable source.'
  },
  {
    id: 25,
    section: 'vocabulary',
    unit: 1,
    questionEn: 'In word families, "choice" is the noun form, and _______ is the corresponding verb form.',
    questionAr: 'في عائلات الكلمات (Word families)، كلمة "choice" هي اسم و _______ هو الفعل المقابل لها.',
    options: ['choose', 'choosing', 'chose', 'chosen'],
    correctIndex: 0,
    explanationEn: 'The base verb corresponding to the noun "choice" is "choose" (to make a selection).',
    explanationAr: 'الفعل المقابل للاسم choice هو choose (يختار).'
  },

  // ==========================================
  // SECTION 3: GRAMMAR (15 Questions, Q26 - Q40)
  // ==========================================
  {
    id: 26,
    section: 'grammar',
    unit: 3,
    questionEn: '_______ English online with native speakers helps improve fluency rapidly.',
    questionAr: '_______ اللغة الإنجليزية عبر الإنترنت مع متحدثين أصليين يساعد على تحسين الطلاقة سريعاً.',
    options: ['Practicing', 'Practice', 'Practiced', 'Practices'],
    correctIndex: 0,
    explanationEn: 'A gerund (-ing form) is required as the subject of the sentence.',
    explanationAr: 'يجب استخدام اسم الفعل Gerund (Practicing) كفاعل للجملة.'
  },
  {
    id: 27,
    section: 'grammar',
    unit: 3,
    questionEn: 'Nawaf avoids _______ fast food because he wants to maintain a healthy weight.',
    questionAr: 'يتجنب نواف _______ الوجبات السريعة لأنه يرغب بالحفاظ على وزن صحي.',
    options: ['eating', 'to eat', 'eat', 'ate'],
    correctIndex: 0,
    explanationEn: 'The verb "avoid" must be followed by a gerund (-ing form), not an infinitive.',
    explanationAr: 'الفعل avoid يتبعه دائماً Gerund (-ing)؛ نقول avoids eating.'
  },
  {
    id: 28,
    section: 'grammar',
    unit: 3,
    questionEn: 'Choose the sentence with CORRECT punctuation for the conjunction "because":',
    questionAr: 'اختر الجملة التي تحتوي على علامات الترقيم الصحيحة مع "because":',
    options: [
      'Because Salem studied diligently for the exam, he achieved an A grade.',
      'Because Salem studied diligently for the exam he achieved an A grade.',
      'Salem achieved an A grade, because he studied diligently for the exam.',
      'Salem achieved an A grade because, he studied diligently for the exam.'
    ],
    correctIndex: 0,
    explanationEn: 'When a sentence begins with "Because [clause]", it must be followed by a comma before the main clause. When "because" is in the middle, no comma is used.',
    explanationAr: 'عندما تبدأ الجملة بـ Because، يجب وضع فاصلة بين الجملتين. وإذا كانت في الوسط فلا توضع فاصلة.'
  },
  {
    id: 29,
    section: 'grammar',
    unit: 4,
    questionEn: 'Choose the sentence that correctly uses the simple present for an informal story narrative:',
    questionAr: 'اختر الجملة التي تستخدم زمن المضارع البسيط لسرد قصة غير رسمية بشكل صحيح:',
    options: [
      'Anya hears the door, rushes downstairs, and opens it.',
      'Anya heard the door, rushes downstairs, and opened it.',
      'Anya hear the door, rush downstairs, and opens it.',
      'Anya hears the door, rushed downstairs, and open it.'
    ],
    correctIndex: 0,
    explanationEn: 'In informal narratives in the simple present, all verbs with third-person singular (Anya) must take -s/-es consistently (hears, rushes, opens).',
    explanationAr: 'عند السرد بالمضارع البسيط، يجب أن تتفق جميع أفعال الفاعل المفرد الغائب وتضاف إليها s/es بتناسق.'
  },
  {
    id: 30,
    section: 'grammar',
    unit: 4,
    questionEn: 'When university students _______ exams, they often feel stressed.',
    questionAr: 'عندما _______ طلاب الجامعة الاختبارات، فإنهم غالباً ما يشعرون بالتوتر.',
    options: ['take', 'takes', 'taking', 'took'],
    correctIndex: 0,
    explanationEn: '"University students" is plural, so the base verb "take" is required in the present time clause.',
    explanationAr: 'الفاعل جمع (university students)، لذا نستخدم الفعل المجرد take في زمن المضارع.'
  },
  {
    id: 31,
    section: 'grammar',
    unit: 4,
    questionEn: 'Choose the correctly punctuated sentence using "when":',
    questionAr: 'اختر الجملة ذات الترقيم الصحيح باستخدام "when":',
    options: [
      'When people smile, their brains release positive chemicals.',
      'When people smile their brains release positive chemicals.',
      'People release positive chemicals, when they smile.',
      'When, people smile their brains release positive chemicals.'
    ],
    correctIndex: 0,
    explanationEn: 'When the sentence opens with a "When" clause, a comma must separate it from the independent clause.',
    explanationAr: 'عند بدء الجملة بـ When، يجب وضع فاصلة بعد شبه الجملة الأولى.'
  },
  {
    id: 32,
    section: 'grammar',
    unit: 5,
    questionEn: 'Look at those dark storm clouds! It _______ rain very soon.',
    questionAr: 'انظر إلى تلك الغيوم المظلمة! سوف _______ تمطر قريباً جداً.',
    options: ['is going to', 'are going to', 'am going to', 'going to'],
    correctIndex: 0,
    explanationEn: 'The subject "It" takes "is going to" for future predictions based on present evidence.',
    explanationAr: 'الضمير It يأخذ is going to للتعبير عن المستقبل بناءً على دليل حالي.'
  },
  {
    id: 33,
    section: 'grammar',
    unit: 5,
    questionEn: 'What is the correct negative form of "be going to" in: "They _______ play football tonight"?',
    questionAr: 'ما هي صيغة النفي الصحيحة لـ "be going to" في الجملة أعلاه؟',
    options: ['are not going to', 'do not going to', 'will not going to', 'not are going to'],
    correctIndex: 0,
    explanationEn: 'The negative is formed with [be + not + going to + verb]: "are not going to".',
    explanationAr: 'النفي الصحيح هو are not going to.'
  },
  {
    id: 34,
    section: 'grammar',
    unit: 5,
    questionEn: 'The championship match is going to take place _______ Dammam this Friday.',
    questionAr: 'المباراة النهائية ستقام _______ مدينة الدمام يوم الجمعة القادم.',
    options: ['in', 'on', 'at', 'with'],
    correctIndex: 0,
    explanationEn: 'Use "in" for cities, regions, and countries (e.g., in Dammam, in Saudi Arabia).',
    explanationAr: 'المدن والمحافظات والدول تأخذ دائماً حرف الجر in.'
  },
  {
    id: 35,
    section: 'grammar',
    unit: 5,
    questionEn: 'The athletes trained vigorously _______ the basketball court all morning.',
    questionAr: 'تدرب الرياضيون بنشاط _______ ملعب كرة السلة طوال الصباح.',
    options: ['on', 'in', 'at', 'to'],
    correctIndex: 0,
    explanationEn: 'Use "on" for sports courts and flat surfaces (on a tennis court, on a basketball court).',
    explanationAr: 'ملاعب الرياضات المسطحة تأخذ حرف الجر on (on the court).'
  },
  {
    id: 36,
    section: 'grammar',
    unit: 6,
    questionEn: 'Stores offer attractive discounts, _______ bargains are not the only way to influence buyers.',
    questionAr: 'تقدم المتاجر خصومات جذابة، _______ الصفقات ليست الطريقة الوحيدة للتأثير على المشترين.',
    options: ['but', 'and', 'so', 'or'],
    correctIndex: 0,
    explanationEn: '"But" connects two contrasting ideas.',
    explanationAr: 'أداة العطف but تربط بين فكرتين متناقضتين أو متعارضتين.'
  },
  {
    id: 37,
    section: 'grammar',
    unit: 6,
    questionEn: 'Marketing specialists study consumer habits, _______ they analyze big data to forecast trends.',
    questionAr: 'يدرس متخصصو التسويق عادات المستهلكين، _______ يحللون البيانات الضخمة لتوقع الاتجاهات.',
    options: ['and', 'but', 'so that', 'although'],
    correctIndex: 0,
    explanationEn: '"And" connects two complementary or similar ideas adding more information.',
    explanationAr: 'أداة العطف and تربط بين فكرتين متوافقتين لإضافة معلومة جديدة.'
  },
  {
    id: 38,
    section: 'grammar',
    unit: 1,
    questionEn: 'Which of the following sentences correctly uses the negative IMPERATIVE form to give a warning?',
    questionAr: 'أي من الجمل التالية تستخدم صيغة الأمر المنفي (Negative Imperative) بشكل صحيح لتقديم تحذير؟',
    options: [
      "Don't click on unknown links in suspicious emails.",
      "Doesn't click on unknown links in suspicious emails.",
      "Not to click on unknown links in suspicious emails.",
      "No clicking on unknown links in suspicious emails."
    ],
    correctIndex: 0,
    explanationEn: 'The negative imperative is formed with "Don\'t + base form of the verb" (Don\'t click).',
    explanationAr: 'صيغة الأمر المنفي تبدأ دائماً بـ Don\'t يتبعها الفعل المجرد (Don\'t click).'
  },
  {
    id: 39,
    section: 'grammar',
    unit: 1,
    questionEn: '_______ very careful when sharing personal information on public websites.',
    questionAr: '_______ حذراً للغاية عند مشاركة معلوماتك الشخصية على المواقع العامة.',
    options: ['Be', 'Being', 'To be', 'Are'],
    correctIndex: 0,
    explanationEn: 'The imperative begins directly with the base form of the verb ("Be").',
    explanationAr: 'صيغة الأمر تبدأ بالمصدر الأساسي المجرد للفعل (Be careful).'
  },
  {
    id: 40,
    section: 'grammar',
    unit: 1,
    questionEn: 'Ahmed’s laptop was infected with a dangerous virus, _______ he took it to an IT specialist.',
    questionAr: 'أصيب حاسوب أحمد بفيروس خطير، _______ أخذه إلى فني متخصص في تقنية المعلومات.',
    options: ['so', 'because', 'when', 'although'],
    correctIndex: 0,
    explanationEn: 'The coordinating conjunction "so" introduces the result of the situation in the first clause.',
    explanationAr: 'أداة الربط so تعبر عن النتيجة (الجهاز أصيب بفيروس، لذا أخذه للفني).'
  },

  // ==========================================
  // SECTION 4: LISTENING (10 Questions, Q41 - Q50)
  // ==========================================
  {
    id: 41,
    section: 'listening',
    unit: 5,
    audioScenarioId: 'audio-1',
    questionEn: 'According to Dr. Suleiman in the audio podcast, how does VR training protect athletes from concussions?',
    questionAr: 'وفقاً للدكتور سليمان في التسجيل الصوتي، كيف يحمي الواقع الافتراضي الرياضيين من الارتجاج؟',
    options: [
      'It allows players to practice decision-making without real physical contact or collisions',
      'It gives them robotic helmets that absorb 100% of shocks',
      'It teaches them how to fall softly on grass',
      'It replaces human players with computer avatars entirely'
    ],
    correctIndex: 0,
    explanationEn: 'Dr. Suleiman states that athletes practice tactical decisions without physical contact, preventing collisions.',
    explanationAr: 'أوضح الدكتور أن اللاعبين يتدربون على اتخاذ القرارات دون أي تلاحم جسدي أو تصادم، مما يقيهم الارتجاج.'
  },
  {
    id: 42,
    section: 'listening',
    unit: 5,
    audioScenarioId: 'audio-1',
    questionEn: 'What is one major convenience of virtual reality sports training mentioned in the audio?',
    questionAr: 'ما هي إحدى المزايا المريحة للتدريب بالواقع الافتراضي المذكورة في المقطع؟',
    options: [
      'Athletes can practice indoors anytime, regardless of bad weather',
      'It eliminates the need for any human coaches',
      'It makes athletes run faster than cars',
      'It is completely free of charge for all schools'
    ],
    correctIndex: 0,
    explanationEn: 'Dr. Suleiman highlights that athletes can train indoors anytime without being affected by weather conditions.',
    explanationAr: 'التدريب داخل الصالات في أي وقت دون التأثر بسوء الأحوال الجوية الخارجية.'
  },
  {
    id: 43,
    section: 'listening',
    unit: 5,
    audioScenarioId: 'audio-1',
    questionEn: 'Which specific example of skill practice did Dr. Suleiman provide?',
    questionAr: 'ما هو المثال المحدد على تكرار المهارة الذي ذكره الدكتور سليمان؟',
    options: [
      'A tennis player repeating the same difficult shot a hundred times',
      'A swimmer doing 50 laps in a virtual pool',
      'A runner sprint training in the snow',
      'A basketball player throwing a ball from half court'
    ],
    correctIndex: 0,
    explanationEn: 'He explicitly gave the example of a tennis player practicing the exact same shot a hundred times until they master it.',
    explanationAr: 'ضرب مثالاً بلاعب التنس الذي يستطيع تكرار نفس الضربة الصعبة 100 مرة حتى يتقنها.'
  },
  {
    id: 44,
    section: 'listening',
    unit: 5,
    audioScenarioId: 'audio-1',
    questionEn: 'What sports did Dr. Suleiman mention at the beginning of the talk?',
    questionAr: 'ما هي الرياضات التي ذكرها الدكتور سليمان في مستهل حديثه؟',
    options: [
      'Football, rugby, and car racing',
      'Baseball, golf, and hockey',
      'Cricket, gymnastics, and swimming',
      'Skiing, snowboarding, and surfing'
    ],
    correctIndex: 0,
    explanationEn: 'In his greeting, he mentioned football, rugby, and car racing.',
    explanationAr: 'ذكر كرة القدم والرجبي وسباقات السيارات.'
  },
  {
    id: 45,
    section: 'listening',
    unit: 5,
    audioScenarioId: 'audio-1',
    questionEn: 'What tone and intonation is used when the host asks: "How does VR improve athlete safety?"',
    questionAr: 'ما هو التنغيم الصوتي (Intonation) المستخدم في سؤال المذيع Wh-question أعلاه؟',
    options: [
      'Falling intonation at the end (↘)',
      'Rising intonation at the end (↗)',
      'Monotone with no pitch change',
      'Whispering intonation'
    ],
    correctIndex: 0,
    explanationEn: 'Information questions starting with Wh- (How, What, When) typically take a falling intonation (↘).',
    explanationAr: 'أسئلة المعلومات (Wh- questions) تنتهي بنبرة هابطة (Falling intonation ↘).'
  },
  {
    id: 46,
    section: 'listening',
    unit: 3,
    audioScenarioId: 'audio-1',
    questionEn: 'Approximately how many living languages are spoken around the world today?',
    questionAr: 'كم عدد اللغات الحية المتحدثة حول العالم اليوم تقريباً وفقاً للنص المسموع؟',
    options: ['About 7,000 languages', 'About 300 languages', 'About 50,000 languages', 'About 1,500 languages'],
    correctIndex: 0,
    explanationEn: 'Professor Ramirez states: "There are approximately 7,000 living languages."',
    explanationAr: 'ذكر البروفيسور راميريز أن هناك حوالي 7000 لغة حية في العالم اليوم.'
  },
  {
    id: 47,
    section: 'listening',
    unit: 3,
    audioScenarioId: 'audio-1',
    questionEn: 'What percentage of world languages are estimated to be in danger of disappearing by the end of this century?',
    questionAr: 'ما هي النسبة المقدرة للغات المهددة بالاندثار بنهاية هذا القرن؟',
    options: ['Between 10% and 50%', 'Exactly 95%', 'Less than 1%', 'Between 75% and 90%'],
    correctIndex: 0,
    explanationEn: 'The professor states that linguists estimate between 10% and 50% could vanish.',
    explanationAr: 'تشير التقديرات إلى أن ما بين 10% إلى 50% من اللغات مهددة بالاختفاء.'
  },
  {
    id: 48,
    section: 'listening',
    unit: 3,
    audioScenarioId: 'audio-1',
    questionEn: 'When does a language officially enter critical danger of disappearing?',
    questionAr: 'متى تصبح اللغة معرضة لخطر الانقراض الحقيقي؟',
    options: [
      'When young children stop learning it at school or at home',
      'When it is spoken by fewer than one million people',
      'When a country adopts a new constitution',
      'When people write poetry in other languages'
    ],
    correctIndex: 0,
    explanationEn: 'The audio explains: "A language enters danger when young children stop learning it at school or home."',
    explanationAr: 'تدخل اللغة مرحلة الخطر عندما يتوقف الأطفال والجيل الناشئ عن تعلمها والتحدث بها.'
  },
  {
    id: 49,
    section: 'listening',
    unit: 1,
    audioScenarioId: 'audio-1',
    questionEn: 'According to Professor Vance in the dialogue, what is the key difference between a fad and a trend?',
    questionAr: 'وفقاً للأستاذ فانس في النص المسموع، ما هو الفرق الجوهري بين "الهبة المؤقتة" (Fad) و"الترند" (Trend)؟',
    options: [
      'A fad is popular suddenly but short-lived, while a trend grows steadily and lasts over time',
      'A fad is an expensive gadget, while a trend is always completely free',
      'Fads only occur in universities, while trends happen only in sports',
      'There is no distinction; both words mean the exact same thing'
    ],
    correctIndex: 0,
    explanationEn: 'The audio explains: "A fad is something that becomes popular very suddenly, but it does not last long... A trend, on the other hand, is a general direction in which something develops, grows, and changes lives over many years."',
    explanationAr: 'الهبة المؤقتة (Fad) تشتهر فجأة وتختفي سريعاً، بينما التوجه (Trend) ينمو تدريجياً ويستمر لسنوات طويلة.'
  },
  {
    id: 50,
    section: 'listening',
    unit: 1,
    audioScenarioId: 'audio-1',
    questionEn: 'Which world-changing invention was initially dismissed by wealthy critics as merely a temporary fad?',
    questionAr: 'أي اختراع غير العالم اعتبره النقاد والمستثمرون في بدايته مجرد "هبة مؤقتة فاشلة"؟',
    options: [
      "Thomas Edison's electric lightbulb",
      "The invention of the wheel",
      "The modern printing press",
      "The compass used by ancient sailors"
    ],
    correctIndex: 0,
    explanationEn: 'Professor Vance notes that when Thomas Edison introduced the electric lightbulb, critics insisted it was just a useless fad that would soon fail.',
    explanationAr: 'أوضح الأستاذ أن المصباح الكهربائي لتوماس إديسون قوبل باستهزاء من مستثمرين ظنوا أنه مجرد هبة عابرة ستفشل سريعاً.'
  }
];

import { READING_PASSAGES_MODEL_2, LISTENING_SCENARIOS_MODEL_2, MODEL_2_QUESTIONS } from './mockExamModel2';
import { READING_PASSAGES_MODEL_3, LISTENING_SCENARIOS_MODEL_3, MODEL_3_QUESTIONS } from './mockExamModel3';

export const ALL_READING_PASSAGES: ReadingPassage[] = [
  ...READING_PASSAGES,
  ...READING_PASSAGES_MODEL_2,
  ...READING_PASSAGES_MODEL_3
];

export const ALL_LISTENING_SCENARIOS: ListeningScenario[] = [
  ...LISTENING_SCENARIOS,
  ...LISTENING_SCENARIOS_MODEL_2,
  ...LISTENING_SCENARIOS_MODEL_3
];

export const EXAM_MODELS: ExamModel[] = [
  {
    id: 1,
    numberAr: 'النموذج 1',
    titleAr: 'النموذج القياسي المعتمد (Standard Mock 1)',
    titleEn: 'Official Standard Model 1',
    badgeAr: 'النموذج الرسمي المعتمد',
    colorTheme: '#214ecf',
    descriptionAr: 'محاكاة كاملة للاختبار النصفي الشامل، بتغطية شاملة لجميع أقسام القراءة والمفردات والقواعد والاستماع بنص موحد لـ 10 أسئلة.',
    coverageSummaryAr: 'كتاب 1 (الوحدات 3، 4، 5، 6) + كتاب 2 (الوحدة 1): نصوص لغة الجسد ومفارقة الاختيارات + نص استماع شامل (10 أسئلة) لتقنيات الرياضة واللغات المهددة والهبات المؤقتة.',
    featuresAr: ['10 أسئلة قراءة', '15 سؤال مفردات', '15 سؤال قواعد', '10 أسئلة لنص استماع موحد'],
    difficulty: 'متوازن',
    questions: MOCK_EXAM_QUESTIONS
  },
  {
    id: 2,
    numberAr: 'النموذج 2',
    titleAr: 'النموذج الأكاديمي المكثف (Advanced Mock 2)',
    titleEn: 'Academic Practice Model 2',
    badgeAr: 'نموذج مكثف شامل',
    colorTheme: '#7c3aed',
    descriptionAr: 'نموذج تدريبي شامل يركز على التطبيقات الدقيقة والمصطلحات التخصصية والأمان الرقمي مع نص استماع موحد لـ 10 أسئلة.',
    coverageSummaryAr: 'كتاب 1 (الوحدات 3، 4، 5، 6) + كتاب 2 (الوحدة 1): نصوص رحلة طالب والوعي السيبراني + نص استماع شامل (10 أسئلة) للحساسات الذكية والمقابلات والأمن الرقمي.',
    featuresAr: ['10 أسئلة قراءة', '15 سؤال مفردات', '15 سؤال قواعد', '10 أسئلة لنص استماع موحد'],
    difficulty: 'متقدم',
    questions: MODEL_2_QUESTIONS
  },
  {
    id: 3,
    numberAr: 'النموذج 3',
    titleAr: 'نموذج التحدي والاختبار النهائي (Mastery Mock 3)',
    titleEn: 'Comprehensive Challenge Model 3',
    badgeAr: 'تحدي الدرجة الكاملة',
    colorTheme: '#ea9835',
    descriptionAr: 'نموذج التحدي النهائي الشامل لمراجعة تفاصيل المقرر مع نص استماع موحد لـ 10 أسئلة متدرجة.',
    coverageSummaryAr: 'كتاب 1 (الوحدات 3، 4، 5، 6) + كتاب 2 (الوحدة 1): نصوص علم الضحك والأنظمة الرياضية + نص استماع شامل (10 أسئلة) لحفظ اللغات وعلم التسوق وتوجهات التقنية.',
    featuresAr: ['10 أسئلة قراءة', '15 سؤال مفردات', '15 سؤال قواعد', '10 أسئلة لنص استماع موحد'],
    difficulty: 'تحدي واختبار نهائي',
    questions: MODEL_3_QUESTIONS
  }
];
