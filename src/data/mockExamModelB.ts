import { ExamQuestion, ReadingPassage, ListeningScenario } from './mockExamData';

export const READING_PASSAGES_MODEL_B: ReadingPassage[] = [
  {
    id: 'passage-3',
    title: 'Passage 1: Staying Safe Online and Recognizing Misinformation (Book 2)',
    titleAr: 'النص 1: الأمان على الإنترنت وتمييز الأخبار المضللة (الكتاب الثاني)',
    unit: 1,
    content: [
      '1. The Internet provides immense knowledge and convenience, but it also presents serious risks to unsuspecting users. Cybercrime and online scams have become increasingly sophisticated. For instance, Nora discovered an online boutique offering authentic designer handbags at a 90% discount. Enticed by the unbelievably low price, she submitted her full name, postal address, and credit card credentials. Unfortunately, the handbag was never shipped, and fraudulent charges soon appeared on her bank statement.',
      '2. In another common scenario, Ahmed received an urgent text message appearing to come from his courier delivery company, claiming that an unpaid fee was required to deliver his parcel. When he clicked the attached link, malicious software (malware) was secretly installed on his computer. Cyber security experts emphasize that individuals must develop critical thinking skills: always verify website URLs, beware of unrealistically cheap bargains, install reputable antivirus applications, and never use identical passwords across multiple personal accounts.'
    ],
    contentAr: [
      '١. يتيح الإنترنت معارف هائلة وتسهيلات استثنائية، إلا أنه ينطوي في الوقت ذاته على مخاطر جسيمة للمستخدمين غير الحذرين؛ حيث أصبحت الجرائم السيبرانية والاحتيال الإلكتروني أكثر تعقيداً ودهاءً. على سبيل المثال، اكتشفت نورا متجراً إلكترونياً يعرض حقائب فاخرة أصلية بخصم خيالي بلغ 90%. وبدافع السعر الزهيد غير الواقعي، أدخلت اسمها الكامل وعنوانها البريدي وبيانات بطاقتها الائتمانية. وللأسف، لم يتم شحن الحقيبة إطلاقاً، وسرعان ما ظهرت عمليات سحب غير مصرح بها في كشف حسابها البنكي.',
      '٢. وفي سيناريو شائع آخر، تلقى أحمد رسالة نصية عاجلة تبدو وكأنها صادرة من شركة شحن وتوصيل الطرود، تفيد بضرورة دفع رسوم إضافية لاستلام طرده. وعندما نقر على الرابط المرفق، تسللت برمجية خبيثة ضارة (Malware) وثُبّتت سراً على جهازه الحاسوبي. ويشدد خبراء الأمن السيبراني على ضرورة تحلي الأفراد بالتفكير النقدي: التحقق دائماً من روابط المواقع (URLs)، والحذر من الصفقات الرخيصة غير المنطقية، وتثبيت برامج مكافحة الفيروسات المعتمدة، وتجنب استخدام كلمة مرور واحدة لحسابات متعددة.'
    ]
  },
  {
    id: 'passage-4',
    title: 'Passage 2: The Psychology of Extreme Sports and High-Altitude Mountaineering',
    titleAr: 'النص 2: سيكولوجية الرياضات الخطرة وتسلق الجبال الشاهقة (الوحدة 5)',
    unit: 5,
    content: [
      '1. Why do people willingly risk their lives participating in extreme sports such as big-wave surfing, wingsuit flying, and high-altitude mountaineering? For decades, traditional psychologists hypothesized that extreme athletes were simply reckless thrill-seekers with an unhealthy disregard for safety. However, modern scientific studies paint a very different picture. Elite mountaineers who climb peaks like Mount Everest or K2 spend months preparing their physical stamina and testing specialized cold-weather gear. Rather than seeking danger itself, they describe an overwhelming feeling of profound mental focus, absolute presence, and personal empowerment when overcoming harsh environments.',
      '2. Nevertheless, high-altitude climbing introduces severe physiological hazards. Above 8,000 meters—a region known as the "Death Zone"—the atmospheric oxygen level drops by two-thirds compared to sea level. Climbers frequently experience severe headaches, confusion, and frostbite. In these life-threatening conditions, having expensive modern equipment is not enough; mental discipline, thorough preparation, and the humility to turn back when a blizzard strikes are the genuine traits that save human lives.'
    ],
    contentAr: [
      '١. لماذا يخاطر الأفراد بحياتهم طواعية عند ممارسة الرياضات الخطرة مثل ركوب الأمواج العاتية، أو الطيران بالبدلات المجنحة، أو تسلق قمم الجبال الشاهقة؟ لعقود خلت، افترض علماء النفس التقليديون أن الرياضيين المتطرفين هم مجرد متهورين باحثين عن الإثارة ولديهم استخفاف غير صحي بإجراءات السلامة. ومع ذلك، تقدم الدراسات العلمية الحديثة صورة مغايرة تماماً؛ فمتسلقو النخبة الذين يتسلقون قمم مثل إفرست أو كي تو (K2) يقضون أشهراً طويلة في بناء لياقتهم البدنية واختبار معداتهم المخصصة للطقس شديد البرودة. وبدلاً من البحث عن الخطر بحد ذاته، يصف هؤلاء الرياضيون شعوراً غامراً بالتركيز الذهني الفائق، والحضور اللحظي التام، والشعور بالقوة الشخصية عند التغلب على البيئات القاسية.',
      '٢. ومع ذلك، فإن تسلق الجبال الشاهقة ينطوي على مخاطر فسيولوجية مميتة؛ فعند الارتفاع الذي يتجاوز 8,000 متر—وهي المنطقة المعروفة باسم "منطقة الموت" (Death Zone)—ينخفض مستوى الأكسجين في الغلاف الجوي بمقدار الثلثين مقارنة بمستوى سطح البحر. وغالباً ما يعاني المتسلقون من صداع حاد، وتشوش ذهني، وقضمة الصقيع (Frostbite). وفي مثل هذه الظروف المهددة للحياة، لا يكفي امتلاك معدات باهظة الثمن وحدها؛ بل إن الانضباط الذهني، والاستعداد الدقيق، والتحلي بالحكمة للتراجع عند هبوب العواصف الثلجية هي السمات الحقيقية التي تنقذ أرواح البشر.'
    ]
  }
];

export const LISTENING_SCENARIOS_MODEL_B: ListeningScenario[] = [
  {
    id: 'audio-4',
    title: 'Listening Scenario 1: Cybersecurity Awareness: Spotting Phishing and Identity Theft',
    unit: 1,
    dialogue: [
      { speaker: 'Security Officer Tariq', text: 'Good morning, team. Today we must address a wave of fraudulent emails targeting our department staff.' },
      { speaker: 'Employee Lina', text: 'Officer Tariq, what exactly does a phishing email look like?' },
      { speaker: 'Security Officer Tariq', text: 'Typically, it conveys false urgency. It claims your email account will be deleted within twenty-four hours unless you click an embedded link and confirm your private password immediately.' },
      { speaker: 'Employee Lina', text: 'How should employees respond when they notice such suspicious messages?' },
      { speaker: 'Security Officer Tariq', text: 'Never click on untrusted links or download unexpected attachments. Instead, check the sender’s exact email domain and report the message to our IT security team immediately.' }
    ]
  },
  {
    id: 'audio-5',
    title: 'Listening Scenario 2: Body Language and Micro-Expressions in Job Interviews',
    unit: 4,
    dialogue: [
      { speaker: 'Career Coach Nadia', text: 'Welcome, candidates. In professional job interviews, your body language speaks before you say a single word.' },
      { speaker: 'Job Seeker Ryan', text: 'Is eye contact really that critical, Coach Nadia?' },
      { speaker: 'Career Coach Nadia', text: 'Yes, absolutely. Maintaining natural eye contact communicates confidence, honesty, and genuine interest. Conversely, staring down at your shoes or repeatedly tapping your fingers signals nervousness or a lack of preparation.' },
      { speaker: 'Job Seeker Ryan', text: 'What about arm posture?' },
      { speaker: 'Career Coach Nadia', text: 'Crossing your arms across your chest often creates an unintentional defensive barrier. Keep an open posture, sit upright, and offer a firm handshake with a warm, genuine smile.' }
    ]
  },
  {
    id: 'audio-6',
    title: 'Listening Scenario 3: Technology and Heart-Rate Monitors in Extreme Training',
    unit: 5,
    dialogue: [
      { speaker: 'Coach Marcus', text: 'Hello, team. In modern athletic training, data tracking devices are just as vital as physical workouts.' },
      { speaker: 'Athlete Sarah', text: 'How do smart wearables help marathon runners prevent injuries?' },
      { speaker: 'Coach Marcus', text: 'Smartwatches continuously measure your heart rate and cadence. When your pulse remains dangerously elevated or your stride becomes uneven, the sensor alerts you that your muscles are exhausted.' },
      { speaker: 'Athlete Sarah', text: 'So it stops runners from overtraining?' },
      { speaker: 'Coach Marcus', text: 'Exactly. By monitoring recovery data, athletes know precisely when to rest and when to push forward safely.' }
    ]
  }
];

export const MOCK_EXAM_QUESTIONS_MODEL_B: ExamQuestion[] = [
  // ==========================================
  // SECTION 1: READING (10 Questions, Q1 - Q10)
  // ==========================================
  {
    id: 101,
    section: 'reading',
    unit: 1,
    passageId: 'passage-3',
    questionEn: 'What tempted Nora into submitting her personal credentials on the fraudulent website?',
    questionAr: 'ما الذي أغرى نورا لإدخال بياناتها الشخصية في الموقع الاحتيالي؟',
    options: [
      'A luxury handbag offered at an unbelievable 90% discount',
      'A free airline ticket to Paris',
      'An invitation to a fashion exhibition',
      'A recommendation from her university professor'
    ],
    correctIndex: 0,
    explanationEn: 'Paragraph 1 explains that Nora was enticed by authentic designer handbags offered at an unrealistically cheap 90% discount.',
    explanationAr: 'يوضح النص أن نورا انخدعت بعرض حقائب فاخرة بخصم خيالي بلغ 90%، مما دفعها لإدخال بياناتها.'
  },
  {
    id: 102,
    section: 'reading',
    unit: 1,
    passageId: 'passage-3',
    questionEn: 'In paragraph 2, what caused malware to be secretly installed on Ahmed’s computer?',
    questionAr: 'في الفقرة الثانية، ما الذي تسبب في تثبيت البرمجية الخبيثة سراً على حاسوب أحمد؟',
    options: [
      'Clicking a link in an urgent fake delivery message',
      'Downloading an official system update',
      'Connecting to his university Wi-Fi network',
      'Opening a document sent by his employer'
    ],
    correctIndex: 0,
    explanationEn: 'The passage states: "When he clicked the attached link, malicious software (malware) was secretly installed on his computer."',
    explanationAr: 'يذكر النص صراحة أن النقر على الرابط المرفق بالرسالة النصية المزيفة هو ما أدى لتثبيت البرمجية الخبيثة.'
  },
  {
    id: 103,
    section: 'reading',
    unit: 1,
    passageId: 'passage-3',
    questionEn: 'Which of the following is NOT recommended by cybersecurity experts in the passage?',
    questionAr: 'أيٌّ من الآتي لم يوصِ به خبراء الأمن السيبراني في النص؟',
    options: [
      'Using the exact same password across all personal accounts for convenience',
      'Verifying the accurate URL spelling of websites',
      'Installing trustworthy antivirus protection software',
      'Exercising critical thinking when encountering cheap offers'
    ],
    correctIndex: 0,
    explanationEn: 'Experts advise to "never use identical passwords across multiple personal accounts", so using the same password is bad practice.',
    explanationAr: 'يوصي الخبراء بعدم تكرار كلمة المرور الواحدة في حسابات متعددة؛ لذا فإن تكرارها سلوك خاطئ.'
  },
  {
    id: 104,
    section: 'reading',
    unit: 1,
    passageId: 'passage-3',
    questionEn: 'In paragraph 1, the word "fraudulent" in "fraudulent charges" is closest in meaning to:',
    questionAr: 'في الفقرة الأولى، ما الكلمة الأقرب في المعنى لكلمة "fraudulent" (احتيالي/غير مصرح به)؟',
    options: [
      'Illegal and deceitful',
      'Official and approved',
      'Cheap and discounted',
      'Regular and monthly'
    ],
    correctIndex: 0,
    explanationEn: '"Fraudulent" means involving deceit, criminal deception, or unauthorized illegal actions.',
    explanationAr: 'كلمة fraudulent تعني احتيالي أو غير قانوني قائم على الخداع.'
  },
  {
    id: 105,
    section: 'reading',
    unit: 1,
    passageId: 'passage-3',
    questionEn: 'What is the primary message of Passage 1 regarding online behavior?',
    questionAr: 'ما هي الرسالة المحورية للنص الأول فيما يتعلق بالسلوك على الإنترنت؟',
    options: [
      'Users must combine security tools with personal critical thinking and vigilance',
      'Online shopping should be completely banned worldwide',
      'Text messages are safer than emails in all situations',
      'Delivery companies are always responsible for cybercrimes'
    ],
    correctIndex: 0,
    explanationEn: 'The passage highlights that vigilance, skepticism, and critical thinking protect users from scams and malware.',
    explanationAr: 'الرسالة الأساسية هي ضرورة الجمع بين التفكير النقدي والحذر الشخصي واستخدام برامج الحماية لتفادي الاحتيال.'
  },
  {
    id: 106,
    section: 'reading',
    unit: 5,
    passageId: 'passage-4',
    questionEn: 'What was the traditional psychological assumption about extreme sports athletes?',
    questionAr: 'ما هو الافتراض التقليدي لدى علماء النفس قديماً حول رياضيي الرياضات الخطرة؟',
    options: [
      'They were reckless thrill-seekers who disregarded safety',
      'They were deeply disciplined and scientific planners',
      'They only engaged in sports to earn corporate money',
      'They were physically weaker than team athletes'
    ],
    correctIndex: 0,
    explanationEn: 'Paragraph 1 notes that psychologists historically assumed extreme athletes were "reckless thrill-seekers with an unhealthy disregard for safety."',
    explanationAr: 'افترض علماء النفس سابقاً أنهم متهورون يبحثون عن الإثارة الطائشة ويتجاهلون قواعد السلامة.'
  },
  {
    id: 107,
    section: 'reading',
    unit: 5,
    passageId: 'passage-4',
    questionEn: 'Why do elite mountaineers describe feelings of empowerment rather than seeking danger for its own sake?',
    questionAr: 'لماذا يصف متسلقو النخبة شعورهم بالقوة بدلاً من البحث عن الخطر لذاته؟',
    options: [
      'Because they achieve complete mental focus and presence in harsh environments',
      'Because they want to appear famous on social media networks',
      'Because they never prepare for the physical climb',
      'Because mountain climbing is legally required in their country'
    ],
    correctIndex: 0,
    explanationEn: 'The text notes: "Rather than seeking danger itself, they describe an overwhelming feeling of profound mental focus, absolute presence, and personal empowerment when overcoming harsh environments."',
    explanationAr: 'المتسلقون يختبرون تركيزاً ذهنياً فائقاً وشعوراً بالحضور والتمكين عند التغلب على التحديات الطبيعية القاسية.'
  },
  {
    id: 108,
    section: 'reading',
    unit: 5,
    passageId: 'passage-4',
    questionEn: 'What occurs physiologically in the "Death Zone" above 8,000 meters?',
    questionAr: 'ماذا يحدث فسيولوجياً في "منطقة الموت" على ارتفاع يزيد عن 8,000 متر؟',
    options: [
      'Atmospheric oxygen levels drop by two-thirds, causing headaches and confusion',
      'The temperature rises dramatically, causing heatstroke',
      'Gravity decreases significantly, making climbing effortless',
      'Climbers no longer require any water or food'
    ],
    correctIndex: 0,
    explanationEn: 'Paragraph 2 explains that atmospheric oxygen decreases by two-thirds compared to sea level, triggering severe physiological distress.',
    explanationAr: 'ينخفض الأكسجين بمقدار الثلثين مقارنة بمستوى سطح البحر، مما يؤدي للصداع الشديد والتشوش الذهني.'
  },
  {
    id: 109,
    section: 'reading',
    unit: 5,
    passageId: 'passage-4',
    questionEn: 'In paragraph 2, the word "frostbite" refers to:',
    questionAr: 'في الفقرة الثانية، تشير كلمة "frostbite" (عضة الصقيع) إلى:',
    options: [
      'Injury to body tissues caused by extreme freezing temperatures',
      'A bite from a dangerous wild mountain animal',
      'A sudden avalanche of heavy snow',
      'An infectious bacterial illness spread by food'
    ],
    correctIndex: 0,
    explanationEn: 'Frostbite is injury to skin and body tissue caused by severe exposure to freezing cold.',
    explanationAr: 'عضة الصقيع (frostbite) هي تلف وتجمد في أنسجة الجسم ناتج عن البرودة القارصة الشديدة.'
  },
  {
    id: 110,
    section: 'reading',
    unit: 5,
    passageId: 'passage-4',
    questionEn: 'According to the author in Passage 2, what ultimately saves a mountaineer’s life when a blizzard strikes?',
    questionAr: 'وفقاً للكاتب في النص الثاني، ما الذي ينقذ حياة المتسلق عند هبوب عاصفة ثلجية؟',
    options: [
      'Mental discipline and the humility to turn back down the mountain',
      'Pushing aggressively toward the peak at all costs',
      'Relying entirely on expensive high-tech outerwear',
      'Calling emergency helicopters that can land anywhere in a storm'
    ],
    correctIndex: 0,
    explanationEn: 'The passage concludes that mental discipline and the humility to retreat when danger strikes are what truly save human lives.',
    explanationAr: 'يخلص الكاتب إلى أن الانضباط الذهني والتواضع والقرار الشجاع بالتراجع عند الخطر هو ما ينقذ الحياة.'
  },

  // ==========================================
  // SECTION 2: VOCABULARY (15 Questions, Q11 - Q25)
  // ==========================================
  {
    id: 111,
    section: 'vocabulary',
    unit: 3,
    questionEn: 'Taleb wrote in his travel blog that visiting Al-Balad in Jeddah was an unforgettable ________ that enriched his cultural perspective.',
    questionAr: 'كتب طالب في مدونة سفره أن زيارة حي البلد في جدة كانت ________ لا تُنسى أثرت منظوره الثقافي.',
    options: ['experience', 'danger', 'scam', 'collision'],
    correctIndex: 0,
    explanationEn: '"Experience" means an event or occurrence that leaves an impression on someone.',
    explanationAr: 'تجربة أو خبرة شخصية مميزة تترك أثراً عميقاً (experience).'
  },
  {
    id: 112,
    section: 'vocabulary',
    unit: 3,
    questionEn: 'Linguists travel to isolated mountain villages to ________ elderly speakers before their rare dialect disappears completely.',
    questionAr: 'يسافر علماء اللسانيات إلى القرى الجبلية المعزولة لكي ________ كبار السن قبل أن تختفي لهجتهم النادرة تماماً.',
    options: ['record', 'deceive', 'cross', 'afford'],
    correctIndex: 0,
    explanationEn: '"Record" means to store audio, video, or writing for preservation and study.',
    explanationAr: 'يسجل صوتياً أو يوثق لحفظ اللغة من الاندثار (record).'
  },
  {
    id: 113,
    section: 'vocabulary',
    unit: 3,
    questionEn: 'A person who has grown up speaking Arabic from childhood as their first language is called a ________ of Arabic.',
    questionAr: 'الشخص الذي نشأ وهو يتحدث اللغة العربية منذ طفولته كلغة أولى يُسمى ________ للغة العربية.',
    options: ['native speaker', 'tourist guide', 'detective', 'consumer'],
    correctIndex: 0,
    explanationEn: 'A "native speaker" is someone who learned a language in early childhood in their home country.',
    explanationAr: 'المتحدث الأصلي للغة (native speaker).'
  },
  {
    id: 114,
    section: 'vocabulary',
    unit: 4,
    questionEn: 'When the suspect began to tap his foot nervously and avoid eye contact, his non-verbal ________ signaled extreme discomfort.',
    questionAr: 'عندما بدأ المشتبه به بالنقر بقدمه بتوتر وتجنب النظر في الأعين، أرسلت ________ غير اللفظية إشارة تدل على عدم الارتياح الشديد.',
    options: ['gestures', 'passwords', 'discounts', 'destinations'],
    correctIndex: 0,
    explanationEn: '"Gestures" are movements of the body, hands, or face that express an idea or emotion.',
    explanationAr: 'إيماءات وحركات الجسد التعبيرية (gestures).'
  },
  {
    id: 115,
    section: 'vocabulary',
    unit: 4,
    questionEn: 'Smiling and laughing are considered ________ human behaviors because they exist across all cultures and continents.',
    questionAr: 'يُعتبر الابتسام والضحك سلوكيات بشرية ________ لأنها توجد في كافة الثقافات والقارات حول العالم.',
    options: ['universal', 'fake', 'dangerous', 'temporary'],
    correctIndex: 0,
    explanationEn: '"Universal" means existing everywhere or involving all people throughout the world.',
    explanationAr: 'سلوك عالمي أو كوني مشترك بين جميع البشر (universal).'
  },
  {
    id: 116,
    section: 'vocabulary',
    unit: 4,
    questionEn: 'Detectives carefully ________ suspects’ subtle facial micro-expressions to notice any inconsistencies in their statements.',
    questionAr: 'يقوم المحققون بـ ________ تعابير الوجه الدقيقة للمشتبه بهم بعناية لملاحظة أي تناقض في أقوالهم.',
    options: ['observe', 'purchase', 'download', 'injure'],
    correctIndex: 0,
    explanationEn: '"Observe" means to watch carefully and attentively, especially to notice details.',
    explanationAr: 'يراقب أو يلاحظ بدقة متناهية (observe).'
  },
  {
    id: 117,
    section: 'vocabulary',
    unit: 5,
    questionEn: 'Motorcyclists and Formula 1 drivers must always wear a certified safety ________ to protect their heads from fatal trauma.',
    questionAr: 'يجب على سائقي الدراجات النارية وسيارات الفورمولا 1 ارتداء ________ أمان معتمدة لحماية رؤوسهم من الإصابات القاتلة.',
    options: ['helmet', 'coupon', 'script', 'headline'],
    correctIndex: 0,
    explanationEn: 'A "helmet" is a hard protective hat worn to protect the head from injury.',
    explanationAr: 'خوذة حماية الرأس (helmet).'
  },
  {
    id: 118,
    section: 'vocabulary',
    unit: 5,
    questionEn: 'In contact sports like American football and rugby, high-speed ________ between players can lead to painful concussions.',
    questionAr: 'في رياضات الاحتكاك الجسدي، يمكن أن تؤدي حالات ________ السريعة بين اللاعبين إلى ارتجاجات مؤلمة.',
    options: ['collisions', 'discussions', 'destinations', 'traditions'],
    correctIndex: 0,
    explanationEn: 'A "collision" is an instance of one moving object or person crashing violently into another.',
    explanationAr: 'تصادم عنيف أو اصطدام بين جسدين متحركين (collision).'
  },
  {
    id: 119,
    section: 'vocabulary',
    unit: 5,
    questionEn: 'Extreme marathon runners need extraordinary physical ________ to run continuously across deserts for 42 kilometers.',
    questionAr: 'يحتاج عدّاءو الماراثونات القصوى إلى ________ بدنية استثنائية للركض المتواصل عبر الصحراء لمسافة 42 كيلومتراً.',
    options: ['endurance', 'clickbait', 'distraction', 'variety'],
    correctIndex: 0,
    explanationEn: '"Endurance" is the ability to withstand hardship, fatigue, and stress over extended periods.',
    explanationAr: 'القدرة على التحمل والصمود البدني الشاق (endurance).'
  },
  {
    id: 120,
    section: 'vocabulary',
    unit: 6,
    questionEn: 'Supermarket managers use subtle sensory ________ such as fresh bakery scents and soft background music to encourage buying.',
    questionAr: 'يستخدم مديرو السوبرماركت أساليب و________ حسية مثل رائحة المخبوزات الطازجة والموسيقى الهادئة لتشجيع الشراء.',
    options: ['strategies', 'injuries', 'dialects', 'antiviruses'],
    correctIndex: 0,
    explanationEn: '"Strategies" are calculated plans of action designed to achieve a specific goal or influence behavior.',
    explanationAr: 'استراتيجيات وخطط تسويقية مدروسة (strategies).'
  },
  {
    id: 121,
    section: 'vocabulary',
    unit: 6,
    questionEn: 'When consumers are confronted with forty different brands of cereal, they often feel ________ and leave without making a choice.',
    questionAr: 'عندما يواجه المستهلكون أربعين علامة تجارية مختلفة، فإنهم غالباً ما يشعرون بـ ________ ويغادرون دون اتخاذ قرار.',
    options: ['overwhelmed', 'fluent', 'athletic', 'universal'],
    correctIndex: 0,
    explanationEn: '"Overwhelmed" means feeling overpowered by an excessive amount of something, such as choices.',
    explanationAr: 'الشعور بالعجز والارتباك الشديد لكثرة الخيارات (overwhelmed).'
  },
  {
    id: 122,
    section: 'vocabulary',
    unit: 6,
    questionEn: 'Items placed at eye level in supermarket aisles are typically more expensive than products positioned on the lowest ________.',
    questionAr: 'المنتجات الموضوعة على مستوى العين تكون عادةً أغلى ثمناً مقارنة بالسلع الموضوعة على ________ السفلية.',
    options: ['shelves', 'helmets', 'passports', 'viruses'],
    correctIndex: 0,
    explanationEn: '"Shelves" are flat horizontal boards or surfaces used for storing and displaying retail goods.',
    explanationAr: 'رفوف العرض في المتاجر (shelves).'
  },
  {
    id: 123,
    section: 'vocabulary',
    unit: 1,
    questionEn: 'Criminals who engage in ________ theft use stolen identification numbers to open fraudulent bank accounts in other citizens’ names.',
    questionAr: 'المجرمون الذين يمارسون سرقة ________ يستخدمون بيانات الهوية المسروقة لفتح حسابات بنكية احتيالية بأسماء المواطنين.',
    options: ['identity', 'altitude', 'gesture', 'flavour'],
    correctIndex: 0,
    explanationEn: '"Identity theft" is the crime of obtaining personal info to assume someone’s identity for financial gain.',
    explanationAr: 'سرقة الهوية الرقمية (identity theft).'
  },
  {
    id: 124,
    section: 'vocabulary',
    unit: 1,
    questionEn: 'Sensational article titles designed exclusively to make Internet readers click on advertising links are known as ________.',
    questionAr: 'العناوين المثيرة المصممة خصيصاً لجذب مستخدمي الإنترنت للنقر على الروابط الربحية تُعرف بـ ________.',
    options: ['clickbait', 'endurance', 'posture', 'grammar'],
    correctIndex: 0,
    explanationEn: '"Clickbait" refers to provocative or sensational headlines designed to encourage users to click through.',
    explanationAr: 'العناوين المثيرة المخادعة لجلب النقرات (clickbait).'
  },
  {
    id: 125,
    section: 'vocabulary',
    unit: 1,
    questionEn: 'Unlike a temporary fad that vanishes in a few months, a true technology ________ grows steadily and alters societal habits permanently.',
    questionAr: 'على عكس الهبة المؤقتة التي تختفي في أشهر، فإن ________ التكنولوجي الحقيقي ينمو بثبات ويغير عادات المجتمع للأبد.',
    options: ['trend', 'scam', 'collision', 'mistake'],
    correctIndex: 0,
    explanationEn: 'A "trend" is a general long-term direction of change and development, unlike a short-lived "fad".',
    explanationAr: 'التوجه طويل الأمد (trend) بخلاف الهبة العابرة (fad).'
  },

  // ==========================================
  // SECTION 3: GRAMMAR (15 Questions, Q26 - Q40)
  // ==========================================
  {
    id: 126,
    section: 'grammar',
    unit: 3,
    questionEn: 'Farah and her family ________ to book their airline tickets to Japan early next Tuesday.',
    questionAr: 'فرح وعائلتها ________ حجز تذاكر الطيران إلى اليابان في وقت مبكر من يوم الثلاثاء القادم.',
    options: ['plan', 'planning', 'plans', 'are plan'],
    correctIndex: 0,
    explanationEn: 'Subject "Farah and her family" is plural; verb "plan" takes the infinitive "to book" (plan + to + base verb).',
    explanationAr: 'الفاعل جمع (Farah and her family) ويتبعه الفعل plan متبوعاً بالمصدر to book.'
  },
  {
    id: 127,
    section: 'grammar',
    unit: 3,
    questionEn: '________ historical museums in Europe helps students appreciate ancient civilizations.',
    questionAr: '________ المتاحف التاريخية في أوروبا يساعد الطلاب على تقدير الحضارات القديمة.',
    options: ['Visiting', 'Visit', 'Visited', 'To be visit'],
    correctIndex: 0,
    explanationEn: 'A Gerund (Visiting) functions as the singular subject of the sentence, followed by singular verb "helps".',
    explanationAr: 'اسم الفعل (Gerund: Visiting) يقوم مقام الفاعل المفرد للجملة ويتبعه الفعل helps.'
  },
  {
    id: 128,
    section: 'grammar',
    unit: 3,
    questionEn: 'My younger brother decided ________ Spanish at the language institute this semester.',
    questionAr: 'قرر أخي الصغير ________ اللغة الإسبانية في معهد اللغات هذا الفصل.',
    options: ['to study', 'studying', 'studied', 'study'],
    correctIndex: 0,
    explanationEn: 'The verb "decide" is always followed by an infinitive with "to" (decide + to study).',
    explanationAr: 'الفعل decide يتبعه دائماً مصدر مع to (to study).'
  },
  {
    id: 129,
    section: 'grammar',
    unit: 4,
    questionEn: 'When visiting a formal diplomatic reception, you ________ avoid wearing casual sportswear.',
    questionAr: 'عند حضور حفل استقبال دبلوماسي رسمي، ________ أن تتجنب ارتداء الملابس الرياضية غير الرسمية.',
    options: ['should', 'could not', 'able to', 'ought'],
    correctIndex: 0,
    explanationEn: '"Should" expresses strong recommendations and good advice in formal contexts.',
    explanationAr: 'نستخدم should لتقديم النصيحة والتوجيه السليم في السياقات الرسمية.'
  },
  {
    id: 130,
    section: 'grammar',
    unit: 4,
    questionEn: 'Experienced police interrogators ________ detect subtle nervousness that untrained citizens completely miss.',
    questionAr: 'المحققون الخبراء ________ رصد التوتر الخفي الذي يغفل عنه المواطنون غير المدربين.',
    options: ['are able to', 'can to', 'could to', 'able'],
    correctIndex: 0,
    explanationEn: '"Are able to" correctly expresses present ability for plural subject "interrogators". "Can" never takes "to".',
    explanationAr: 'الصيغة الصحيحة هي are able to مع الفاعل الجمع؛ وcan لا تأخذ to بعدها أبداً.'
  },
  {
    id: 131,
    section: 'grammar',
    unit: 4,
    questionEn: 'Candidates ________ arrive at least fifteen minutes prior to their interview schedule to review notes.',
    questionAr: 'يجب على المتقدمين للوظيفة ________ الوصول قبل ربع ساعة على الأقل من موعد المقابلة لمراجعة الملاحظات.',
    options: ['must', 'ought', 'are can', 'could to'],
    correctIndex: 0,
    explanationEn: '"Must" expresses necessity and strong professional requirement.',
    explanationAr: 'نستخدم must للتعبير عن الضرورة والالتزام المهني.'
  },
  {
    id: 132,
    section: 'grammar',
    unit: 5,
    questionEn: 'Look at those dark, swirling storm clouds over the mountain! It ________ snow very heavily tonight.',
    questionAr: 'انظر إلى تلك الغيوم الداكنة الدوارة فوق الجبل! إنها ________ تساقط ثلوج غزيرة هذه الليلة.',
    options: ['is going to', 'will to', 'going to', 'shall be'],
    correctIndex: 0,
    explanationEn: 'We use "be going to" when there is clear observable physical evidence in the present (dark clouds).',
    explanationAr: 'نستخدم be going to للتنبؤ بوجود دليل مادي ملموس في الوقت الحاضر (غيوم العاصفة).'
  },
  {
    id: 133,
    section: 'grammar',
    unit: 5,
    questionEn: 'I predict that virtual reality technology ________ completely revolutionize university classrooms within ten years.',
    questionAr: 'أتوقع أن تقنية الواقع الافتراضي ________ تحدث ثورة شاملة في قاعات الجامعات خلال عشر سنوات.',
    options: ['will', 'is going', 'going to', 'was'],
    correctIndex: 0,
    explanationEn: 'We use "will" + base verb for general personal predictions without immediate physical evidence.',
    explanationAr: 'نستخدم will للتنبؤات العامة المبنية على الرأي أو التوقع المستقبلي بدون دليل فوري.'
  },
  {
    id: 134,
    section: 'grammar',
    unit: 5,
    questionEn: 'Nasser bought high-altitude climbing ropes because he ________ attempt the summit next month.',
    questionAr: 'اشترى ناصر حبال التسلق الشاهقة لأنه ________ محاولة الوصول للقمة الشهر القادم.',
    options: ['is going to', 'will to', 'going', 'does'],
    correctIndex: 0,
    explanationEn: '"Is going to" expresses a prior plan and deliberate intention backed by physical action (purchasing ropes).',
    explanationAr: 'نستخدم is going to للتعبير عن خطة ونية مسبقة مؤكدة باتخاذ خطوة فعلية كشراء الحبال.'
  },
  {
    id: 135,
    section: 'grammar',
    unit: 6,
    questionEn: 'The specialty organic coffee in the gourmet market is significantly ________ than the supermarket instant brand.',
    questionAr: 'القهوة العضوية المتخصصة في المتجر الفاخر هي أكثر ________ بكثير مقارنة بقهوة السوبرماركت سريعة التحضير.',
    options: ['more expensive', 'expensiver', 'most expensive', 'as expensive'],
    correctIndex: 0,
    explanationEn: 'Long adjectives with three or more syllables form comparatives with "more + adjective + than".',
    explanationAr: 'الصفات الطويلة (expensive) تُصاغ للمقارنة باستخدام more + الصفة + than.'
  },
  {
    id: 136,
    section: 'grammar',
    unit: 6,
    questionEn: 'Of all the supermarkets in our district, Al-Danah offers the ________ variety of imported fresh fruits.',
    questionAr: 'من بين جميع محلات السوبرماركت في منطقتنا، يقدم متجر الدانة التنوع ________ من الفواكه الطازجة المستوردة.',
    options: ['widest', 'wider', 'most wide', 'more wide'],
    correctIndex: 0,
    explanationEn: 'Short adjectives form superlatives with "the + adjective + -est" (the widest).',
    explanationAr: 'صيغة التفضيل العليا للصفات القصيرة (wide) تنتهي بـ -est مسبوقة بـ the (the widest).'
  },
  {
    id: 137,
    section: 'grammar',
    unit: 6,
    questionEn: 'Many shoppers believe that buying in bulk quantities is ________ than purchasing single small packages.',
    questionAr: 'يعتقد العديد من المتسوقين أن الشراء بكميات الجملة هو ________ من شراء العبوات الفردية الصغيرة.',
    options: ['better', 'gooder', 'best', 'more good'],
    correctIndex: 0,
    explanationEn: '"Good" is an irregular adjective; its comparative form is "better" (not gooder).',
    explanationAr: 'الصفة good شاذة؛ وتصاغ للمقارنة بكلمة better وليس gooder.'
  },
  {
    id: 138,
    section: 'grammar',
    unit: 1,
    questionEn: '________ click on links in unsolicited emails, because they may install dangerous malware.',
    questionAr: '________ تنقر على الروابط في الرسائل الإلكترونية غير الموثوقة، لأنها قد تثبت برمجيات خبيثة ضارة.',
    options: ['Do not', 'Not', 'No to', 'Are not'],
    correctIndex: 0,
    explanationEn: 'Negative imperative commands begin with "Do not" (or Don\'t) + base form of the verb.',
    explanationAr: 'صيغة النهي أو الأمر المنفي في الإنجليزية تبدأ بـ Do not متبوعة بالفعل في المصدر.'
  },
  {
    id: 139,
    section: 'grammar',
    unit: 1,
    questionEn: 'Sarah created a twelve-character password with letters, numbers, ________ special symbols to protect her email.',
    questionAr: 'أنشأت سارة كلمة مرور مكونة من 12 خانة تحتوي على أحرف وأرقام ________ رموز خاصة لحماية بريدها.',
    options: ['and', 'but', 'so', 'however'],
    correctIndex: 0,
    explanationEn: 'The conjunction "and" connects parallel items in a list to add consistent information.',
    explanationAr: 'أداة العطف and تربط بين عناصر متوافقة في قائمة وتضيف معلومة منسجمة.'
  },
  {
    id: 140,
    section: 'grammar',
    unit: 1,
    questionEn: 'The online offer seemed extraordinarily cheap; ________, the customer realized the website was fraudulent.',
    questionAr: 'بدا العرض على الإنترنت رخيصاً بشكل غير طبيعي؛ ________، أدرك الزبون أن الموقع كان احتيالياً.',
    options: ['however', 'and', 'so', 'because'],
    correctIndex: 0,
    explanationEn: '"However" shows contrast between two separate independent clauses, followed by a comma.',
    explanationAr: 'الكلمة الانتقالية however تفيد التناقض والاستدراك بين فكرتين وتتبع بفاصلة.'
  },

  // ==========================================
  // SECTION 4: LISTENING (10 Questions, Q41 - Q50)
  // ==========================================
  {
    id: 141,
    section: 'listening',
    unit: 1,
    audioScenarioId: 'audio-4',
    questionEn: 'In Listening Scenario 1, what does a typical phishing email claim to create false urgency?',
    questionAr: 'في السيناريو الصوتي الأول، ماذا تدعي رسائل التصيد الاحتيالي لخلق حالة طوارئ وهمية؟',
    options: [
      'That the employee’s email account will be deleted within 24 hours unless they click a link',
      'That the company is closing down permanently tomorrow',
      'That every worker must attend an outdoor picnic',
      'That the company earned record profits this quarter'
    ],
    correctIndex: 0,
    explanationEn: 'Officer Tariq states: "It claims your email account will be deleted within twenty-four hours unless you click an embedded link and confirm your private password immediately."',
    explanationAr: 'يوضح الضابط طارق أن الرسالة تدعي حذف الحساب خلال 24 ساعة إذا لم ينقر الموظف لتأكيد كلمة المرور فوراً.'
  },
  {
    id: 142,
    section: 'listening',
    unit: 1,
    audioScenarioId: 'audio-4',
    questionEn: 'According to Officer Tariq, what is the best immediate step when spotting a suspicious email?',
    questionAr: 'وفقاً للضابط طارق، ما هي أفضل خطوة فورية عند اكتشاف بريد إلكتروني مشبوه؟',
    options: [
      'Inspect the sender’s domain and report the message to the IT security team',
      'Forward the email to all friends to ask their opinions',
      'Reply to the email requesting more proof',
      'Click the link quickly to see if the website is legitimate'
    ],
    correctIndex: 0,
    explanationEn: 'Tariq advises: "Never click on untrusted links... check the sender’s exact email domain and report the message to our IT security team immediately."',
    explanationAr: 'عدم النقر على الروابط والتحقق من نطاق البريد وإبلاغ فريق أمن المعلومات بالشركة فوراً.'
  },
  {
    id: 143,
    section: 'listening',
    unit: 1,
    audioScenarioId: 'audio-4',
    questionEn: 'Why do scammers frequently attach files to phishing emails?',
    questionAr: 'لماذا يرفق المحتالون ملفات ومرفقات في رسائل التصيد الإلكتروني؟',
    options: [
      'To secretly install malware or spyware onto the recipient’s computer',
      'To provide free legal documents to users',
      'To clean up the recipient’s hard drive',
      'To improve the recipient’s internet connection speed'
    ],
    correctIndex: 0,
    explanationEn: 'Tariq cautions against downloading unexpected attachments because they execute malware.',
    explanationAr: 'لتثبيت برمجيات خبيثة أو تجسسية خفية في أجهزة الضحايا بمجرد فتحها.'
  },
  {
    id: 144,
    section: 'listening',
    unit: 4,
    audioScenarioId: 'audio-5',
    questionEn: 'In Scenario 2, what positive traits does maintaining natural eye contact communicate in a job interview?',
    questionAr: 'في السيناريو الثاني، ما هي الصفات الإيجابية التي يعكسها التواصل البصري الطبيعي في المقابلة الوظيفية؟',
    options: [
      'Confidence, honesty, and genuine interest',
      'Arrogance and aggressiveness',
      'Impatience and a desire to leave quickly',
      'Extreme shyness and hesitation'
    ],
    correctIndex: 0,
    explanationEn: 'Coach Nadia explains: "Maintaining natural eye contact communicates confidence, honesty, and genuine interest."',
    explanationAr: 'توضح المدربة نادية أن التواصل البصري الطبيعي يعكس الثقة والصدق والاهتمام الحقيقي بالوظيفة.'
  },
  {
    id: 145,
    section: 'listening',
    unit: 4,
    audioScenarioId: 'audio-5',
    questionEn: 'What does repeatedly tapping fingers or staring down at shoes signal to an interviewer?',
    questionAr: 'ما الذي يرسله النقر المتكرر بالأصابع أو النظر المستمر للأسفل إلى صاحب المقابلة؟',
    options: [
      'Nervousness or a lack of thorough preparation',
      'Complete mastery of professional skills',
      'High enthusiasm for working extra hours',
      'Deep amusement at the interviewer’s questions'
    ],
    correctIndex: 0,
    explanationEn: 'Coach Nadia notes that staring at shoes or tapping fingers signals nervousness or inadequate preparation.',
    explanationAr: 'يدل على التوتر والقلق أو ضعف الاستعداد المسبق للمقابلة.'
  },
  {
    id: 146,
    section: 'listening',
    unit: 4,
    audioScenarioId: 'audio-5',
    questionEn: 'Why does Coach Nadia recommend avoiding crossing your arms across your chest during an interview?',
    questionAr: 'لماذا تنصح المدربة نادية بتجنب تشبيك الأذرع أمام الصدر أثناء المقابلة؟',
    options: [
      'Because it often creates an unintentional defensive or closed barrier',
      'Because it causes physical arm fatigue very rapidly',
      'Because the interviewer cannot see your wristwatch',
      'Because crossed arms make speech impossible to hear'
    ],
    correctIndex: 0,
    explanationEn: 'Crossing arms is viewed non-verbally as defensive and emotionally closed off.',
    explanationAr: 'لأن تشبيك الأذرع يوحي لاإرادياً بوجود حاجز دفاعي أو انغلاق وعدم ارتياح.'
  },
  {
    id: 147,
    section: 'listening',
    unit: 4,
    audioScenarioId: 'audio-5',
    questionEn: 'What posture does Coach Nadia advise candidates to adopt when meeting employers?',
    questionAr: 'ما هي الوضعية الجسدية التي تنصح بها المدربة نادية عند لقاء أصحاب العمل؟',
    options: [
      'Keep an open posture, sit upright, and offer a firm handshake with a warm smile',
      'Slouch deeply back into the sofa to show total relaxation',
      'Lean forward aggressively with hands resting on the interviewer’s desk',
      'Look strictly out the window to appear thoughtful'
    ],
    correctIndex: 0,
    explanationEn: 'Coach Nadia specifically instructs: "Keep an open posture, sit upright, and offer a firm handshake with a warm, genuine smile."',
    explanationAr: 'الحفاظ على وضعية جسدية منفتحة، والجلوس باستقامة، ومصافحة اليد بثقة مع ابتسامة دافئة.'
  },
  {
    id: 148,
    section: 'listening',
    unit: 5,
    audioScenarioId: 'audio-6',
    questionEn: 'In Scenario 3, how do smart wearable watches help marathon runners avoid physical injury?',
    questionAr: 'في السيناريو الثالث، كيف تساعد الساعات الذكية عدّائي الماراثون على تجنب الإصابات الجسدية؟',
    options: [
      'They measure heart rate and stride cadence, alerting athletes when muscles are exhausted',
      'They inject medicine automatically into runners’ legs',
      'They carry heavy hydration bottles on the runner’s wrist',
      'They eliminate the need for running shoes entirely'
    ],
    correctIndex: 0,
    explanationEn: 'Coach Marcus explains that smartwatches track heart rate and cadence to warn when exhaustion poses an injury risk.',
    explanationAr: 'تقيس نبضات القلب ومعدل الخطوات وتحذر العداء عندما تنهك عضلاته لتجنب الإصابة.'
  },
  {
    id: 149,
    section: 'listening',
    unit: 5,
    audioScenarioId: 'audio-6',
    questionEn: 'What is the main danger of "overtraining" that Coach Marcus discusses with Sarah?',
    questionAr: 'ما هو الخطر الرئيسي لـ "الإفراط في التدريب" (overtraining) الذي يناقشه المدرب مع سارة؟',
    options: [
      'Pushing through muscle exhaustion without adequate rest causes serious injury and burnout',
      'Athletes become too fast for their competitors',
      'Smartwatches run out of battery during training',
      'Athletes forget the rules of their sport'
    ],
    correctIndex: 0,
    explanationEn: 'Overtraining without recovery leads to chronic fatigue, muscle tearing, and injury.',
    explanationAr: 'إجهاد العضلات دون منحها وقتاً كافياً للتعافي يقود إلى تمزقات عضلية وإصابات بالغة.'
  },
  {
    id: 150,
    section: 'listening',
    unit: 5,
    audioScenarioId: 'audio-6',
    questionEn: 'What conclusion do Coach Marcus and Sarah reach regarding technology in sports training?',
    questionAr: 'ما هي النتيجة التي توصل إليها المدرب وسارة بخصوص التقنية في التدريب الرياضي؟',
    options: [
      'Wearable data allows athletes to know precisely when to rest and when to push safely',
      'Sports technology is an expensive fad that should be abandoned',
      'Technology should replace human coaches completely',
      'Only professional Olympic winners should wear smartwatches'
    ],
    correctIndex: 0,
    explanationEn: 'Wearable sensors provide actionable recovery metrics so athletes balance rest with intense workouts.',
    explanationAr: 'تتيح البيانات الرقمية للرياضيين معرفة الوقت المثالي للراحة وموعد تكثيف التمرين بأمان.'
  }
];
