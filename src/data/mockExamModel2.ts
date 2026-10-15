import { ExamQuestion, ReadingPassage, ListeningScenario } from './mockExamData';

export const READING_PASSAGES_MODEL_2: ReadingPassage[] = [
  {
    id: 'passage-model2-1',
    title: "Passage 1: Taleb's Journey: Exploring Heritage and Culture in Peru and Saudi Arabia",
    titleAr: 'النص القرائي 1: رحلة طالب لاستكشاف التراث والثقافات في البيرو والمملكة العربية السعودية (الكتاب الأول - الوحدة 3)',
    unit: 3,
    content: [
      '1. Ten years ago, Taleb took his first international journey to Japan, an experience that completely transformed his perspective on the world. Today, he dedicates an entire month every year to exploring new global destinations and documenting them on his popular travel blog. During his recent expedition to Peru, Taleb hiked the ancient Inca trail leading to the mountaintop ruins of Machu Picchu. He observed that preserving indigenous traditions and Quechua linguistic heritage requires active community involvement. By publishing authentic photo-essays online, Taleb helps young followers understand the cultural significance of remote architectural wonders.',
      '2. More recently, Taleb spent two weeks in Saudi Arabia, immersing himself in both ancient history and breathtaking nature. In Jeddah, he toured the historic Al-Balad district, admiring the traditional coral architecture and intricately carved wooden balconies (rawashin). He also went scuba diving in the Red Sea, recording vibrant coral reefs and marine wildlife. Taleb emphasized that traveling is not merely about relaxation; it is an educational endeavor that promotes mutual cultural respect. His blog encourages tourists to learn key phrases in the local language, support domestic artisans, and travel responsibly without harming historic environments.'
    ],
    contentAr: [
      '١. قبل عشر سنوات، خاض الشاب طالب أولى رحلاته الدولية إلى اليابان، وهي التجربة التي غيرت نظرته للعالم بصورة جذرية. واليوم، يخصص شهراً كاملاً كل عام لاستكشاف وجهات عالمية جديدة وتوثيقها عبر مدونة السفر الشهيرة الخاصة به. وخلال رحلته الاستكشافية الأخيرة إلى البيرو، سار طالب على درب الإنكا القديم المؤدي إلى أطلال ماتشو بيتشو الشاهقة على قمم الجبال. ولاحظ أن الحفاظ على التقاليد الأصلية والتراث اللغوي للغة الكيتشوا يتطلب مشاركة مجتمعية فاعلة. ومن خلال نشر مقالات مصورة واقعية على الإنترنت، يساعد طالب متابعيه من الشباب على فهم الأهمية الثقافية للعجائب المعمارية النائية.',
      '٢. وفي الآونة الأخيرة، أمضى طالب أسبوعين في المملكة العربية السعودية، منغمساً في استكشاف التاريخ العريق والطبيعة الخلابة؛ حيث تجول في جدة التاريخية (حي البلد)، متأملاً العمارة المرجانية القديمة والرواشين الخشبية المحفورة بدقة بالغة. كما مارس رياضة الغوص في مياه البحر الأحمر، موثقاً الشعاب المرجانية النابضة بالحياة والكائنات البحرية المتنوعة. وأكد طالب في تدوينته أن السفر ليس مجرد استجمام وترفيه، بل هو مسعى تعليمي يعزز الاحترام الثقافي المتبادل بين الشعوب؛ داعياً السياح لتعلم عبارات أساسية باللغة المحلية ودعم الحرفيين والمحافظة على البيئات التراثية.'
    ]
  },
  {
    id: 'passage-model2-2',
    title: 'Passage 2: Digital Security: Protecting Personal Data and Defeating Phishing Attacks',
    titleAr: 'النص القرائي 2: الأمن الرقمي: حماية البيانات الشخصية ومواجهة هجمات التصيد الاحتيالي (الكتاب الثاني - الوحدة 1)',
    unit: 1,
    content: [
      '1. As digital technology integrates deeper into our daily routines, cybercriminals employ increasingly sophisticated techniques to deceive unsuspecting Internet users. One prevalent threat is phishing, where fraudulent emails or text messages masquerade as trusted institutions such as national banks or postal services. For example, Ahmed received an urgent SMS claiming his debit card was temporarily suspended. The message provided a direct link prompting him to enter his secret pin and personal verification codes. By recognizing the suspicious non-governmental web domain, Ahmed avoided submitting his private information and promptly contacted his official bank branch.',
      '2. In addition to financial fraud, identity theft poses catastrophic consequences for online victims. Malicious hackers often exploit stolen personal credentials to open unauthorized credit lines, purchase high-value merchandise, or launch secondary attacks. To defend against digital intrusion, cybersecurity specialists recommend several essential habits. First, create complex passwords featuring uppercase letters, numerical digits, and unique symbols. Second, always activate two-factor authentication (2FA) across all academic and financial accounts. Finally, never download unverified email attachments or click on sensational clickbait advertisements offering free gifts.'
    ],
    contentAr: [
      '١. مع تغلغل التقنية الرقمية في تفاصيل حياتنا اليومية، يبتكر مجرمو الإنترنت أساليب متطورة ومخادعة للإيقاع بمستخدمي الشبكة غير الحذرين. وتُعد هجمات التصيد الاحتيالي (Phishing) من أبرز التهديدات الشائعة؛ حيث تنتحل رسائل البريد الإلكتروني أو الرسائل النصية المزيفة صفة جهات رسمية موثوقة مثل البنوك الوطنية أو خدمات البريد السريع. على سبيل المثال، تلقى أحمد رسالة نصية عاجلة تزعم تجميد بطاقته البنكية مؤقتاً، وتتضمن رابطاً مباشراً يطلب إدخال رمزه السري ورمز التحقق. وبفضل فطنته وملاحظته لغرابة عنوان الموقع (Domain) غير التابع للجهة الرسمية، امتنع أحمد عن إدخال بياناته وتواصل فوراً مع الفرع الرسمي للبنك.',
      '٢. وإلى جانب الاحتيال المالي، تترتب على سرقة الهوية (Identity theft) عواقب وخيمة على الضحايا؛ إذ يستغل قراصنة الإنترنت البيانات الشخصية المسروقة لفتح خطوط ائتمانية غير مصرح بها، أو شراء بضائع باهظة الثمن، أو شن هجمات احتيالية أخرى. وللحماية من الاختراقات الرقمية، يوصي خبراء الأمن السيبراني بممارسات أساسية: أولاً، إنشاء كلمات مرور قوية ومعقدة تجمع بين الحروف الكبيرة والأرقام والرموز الفريدة. ثانياً، تفعيل خاصية المصادقة الثنائية (2FA) لجميع الحسابات الأكاديمية والبنكية. وأخيراً، تجنب تنزيل أي ملفات مرفقة غير موثوقة أو النقر على الإعلانات المثيرة (Clickbait) التي تزعم تقديم مكافآت مجانية.'
    ]
  }
];

export const LISTENING_SCENARIOS_MODEL_2: ListeningScenario[] = [
  {
    id: 'audio-model2-1',
    title: 'Listening Passage: University Career & Tech Forum: Wearable Sensors, Interview Body Language, and Digital Safety',
    unit: 5,
    duration: '01:50',
    dialogue: [
      { 
        speaker: 'Coach Miller', 
        text: 'Welcome students to our annual university prep forum. Today we have Dr. Sarah from Sports Science, Maya from Human Resources, and IT Officer Tariq.',
        timestamp: '00:00',
        role: 'منسق المنتدى الأكاديمي والرياضي'
      },
      { 
        speaker: 'Coach Miller', 
        text: 'Dr. Sarah, where are wearable biometric sensors placed on athletes, and what metrics do they track?',
        timestamp: '00:13',
        role: 'منسق المنتدى الأكاديمي'
      },
      { 
        speaker: 'Dr. Sarah', 
        text: 'They are seamlessly woven into smart compression shirts and athletic shoes. They measure heart rate variability, muscle exertion, and the force of every step in real time. When the algorithm detects extreme muscle fatigue, the coach substitutes the player immediately before a serious muscle tear or ligament injury occurs.',
        timestamp: '00:20',
        role: 'أستاذة العلوم الرياضية والمستشعرات الحيوية'
      },
      { 
        speaker: 'John', 
        text: 'Really, Maya? Moving to job interviews, what body language signals create a negative first impression?',
        timestamp: '00:52',
        role: 'طالب جامعي مشارك (نبرة تعجبية صاعدة ↗)'
      },
      { 
        speaker: 'Maya', 
        text: 'Slouching in the chair, crossing your arms defensively, and continually looking down at the floor signal anxiety and lack of confidence. Instead, maintain steady eye contact with the interviewer, offer a firm handshake, sit upright with an open posture, and nod gently to show active listening.',
        timestamp: '00:59',
        role: 'خبيرة الموارد البشرية والمقابلات الوظيفية'
      },
      { 
        speaker: 'Student Layla', 
        text: 'Officer Tariq, what warnings does your IT center give students regarding social networks?',
        timestamp: '01:25',
        role: 'طالبة جامعية مشاركة'
      },
      { 
        speaker: 'Officer Tariq', 
        text: 'Beware of fake job recruitment offers with dramatic clickbait headlines promising to earn 5,000 dollars a day working ten minutes from home! If you accidentally open a suspicious link: Do not enter any personal login credentials. Close your browser immediately, disconnect from public Wi-Fi, and run a thorough antivirus system scan.',
        timestamp: '01:31',
        role: 'ضابط أمن المعلومات والأمن السيبراني'
      }
    ]
  }
];

export const MODEL_2_QUESTIONS: ExamQuestion[] = [
  // ==========================================
  // SECTION 1: READING (10 Questions, Q101 - Q110)
  // ==========================================
  {
    id: 101,
    section: 'reading',
    unit: 3,
    passageId: 'passage-model2-1',
    questionEn: 'What initial journey inspired Taleb to dedicate time each year to exploring world cultures?',
    questionAr: 'ما هي الرحلة الأولى التي ألهمت طالب لتخصيص وقت سنوي لاستكشاف ثقافات العالم؟',
    options: [
      'His first international trip to Japan ten years ago',
      'A school vacation to southern Peru',
      'A diving expedition in the Red Sea',
      'A business conference in Latin America'
    ],
    correctIndex: 0,
    explanationEn: 'Paragraph 1 states: "Ten years ago, Taleb took his first international journey to Japan, an experience that completely transformed his perspective on the world."',
    explanationAr: 'تذكر الفقرة الأولى صراحة أن رحلته الأولى إلى اليابان قبل عشر سنوات هي التي غيرت نظرته للعالم ودفعته لاستكشاف الوجهات وتوثيقها.'
  },
  {
    id: 102,
    section: 'reading',
    unit: 3,
    passageId: 'passage-model2-1',
    questionEn: 'According to paragraph 1, what does Taleb consider necessary for preserving indigenous linguistic heritage in Peru?',
    questionAr: 'وفقاً للفقرة الأولى، ما الذي يراه طالب ضرورياً للحفاظ على التراث اللغوي للغات الأصلية في البيرو؟',
    options: [
      'Active community involvement and public awareness',
      'Closing historical ruins to all foreign tourists',
      'Translating ancient books into modern languages only',
      'Demolishing ancient trails to build modern roads'
    ],
    correctIndex: 0,
    explanationEn: 'The text notes: "preserving indigenous traditions and Quechua linguistic heritage requires active community involvement."',
    explanationAr: 'يوضح النص أن حماية التراث اللغوي يتطلب مشاركة مجتمعية فاعلة ومستمرة.'
  },
  {
    id: 103,
    section: 'reading',
    unit: 3,
    passageId: 'passage-model2-1',
    questionEn: 'In Jeddah’s historical district of Al-Balad, what distinctive architectural feature did Taleb admire?',
    questionAr: 'في حي البلد التاريخي بجدة، ما هي السمة المعمارية الفريدة التي أبدى طالب إعجابه بها؟',
    options: [
      'Traditional coral architecture and wooden balconies (rawashin)',
      'Ultra-modern glass skyscrapers with solar panels',
      'Large concrete bridges crossing the sea',
      'Stone pyramids built in ancient desert valleys'
    ],
    correctIndex: 0,
    explanationEn: 'Paragraph 2 mentions: "admiring the traditional coral architecture and intricately carved wooden balconies (rawashin)".',
    explanationAr: 'أبرزت الفقرة الثانية إعجابه بعمارة أحجار المرجان والرواشين الخشبية المحفورة بدقة.'
  },
  {
    id: 104,
    section: 'reading',
    unit: 3,
    passageId: 'passage-model2-1',
    questionEn: 'According to Taleb, what is the deeper purpose of traveling beyond leisure and relaxation?',
    questionAr: 'وفقاً لطالب، ما هو الهدف الأعمق للسفر بما يتجاوز مجرد الاسترخاء والترفيه؟',
    options: [
      'An educational endeavor that fosters mutual cultural respect',
      'An opportunity to purchase luxury imported goods at discounts',
      'A method to collect souvenir stamps for passports',
      'A way to demonstrate personal wealth on social media'
    ],
    correctIndex: 0,
    explanationEn: 'The author notes: "traveling is not merely about relaxation; it is an educational endeavor that promotes mutual cultural respect."',
    explanationAr: 'يؤكد النص أن السفر مسعى تعليمي يعزز الاحترام الثقافي المتبادل بين الشعوب.'
  },
  {
    id: 105,
    section: 'reading',
    unit: 3,
    passageId: 'passage-model2-1',
    questionEn: 'What advice does Taleb give to travelers visiting international historical destinations?',
    questionAr: 'ما هي النصيحة التي يوجهها طالب للمسافرين عند زيارة وجهات تراثية عالمية؟',
    options: [
      'Learn basic local words, support artisans, and avoid damaging heritage sites',
      'Speak only your native language loudly to be understood',
      'Rely exclusively on international fast-food chains',
      'Avoid interacting with local community residents'
    ],
    correctIndex: 0,
    explanationEn: 'Paragraph 2 concludes by advising tourists to learn key phrases, support domestic artisans, and travel responsibly.',
    explanationAr: 'ينصح بتعلم عبارات أساسية باللغة المحلية، ودعم الحرفيين المحليين، وحماية البيئات التاريخية.'
  },
  {
    id: 106,
    section: 'reading',
    unit: 1,
    passageId: 'passage-model2-2',
    questionEn: 'What deceptive technique describes emails or text messages that pretend to come from reputable organizations?',
    questionAr: 'ما هو المصطلح التقني الذي يصف الرسائل المخادعة التي تنتحل هوية مؤسسات موثوقة؟',
    options: ['Phishing (التصيد الاحتيالي)', 'Broadcasting', 'Cloud computing', 'Data indexing'],
    correctIndex: 0,
    explanationEn: 'Paragraph 1 explains: "One prevalent threat is phishing, where fraudulent emails or text messages masquerade as trusted institutions".',
    explanationAr: 'يوضح النص أن التصيد الاحتيالي (Phishing) هو انتحال صفة مؤسسات رسمية لخداع المستخدمين.'
  },
  {
    id: 107,
    section: 'reading',
    unit: 1,
    passageId: 'passage-model2-2',
    questionEn: 'How did Ahmed successfully detect that the urgent SMS about his debit card was a scam?',
    questionAr: 'كيف استطاع أحمد اكتشاف أن الرسالة العاجلة بخصوص بطاقته البنكية كانت احتيالية؟',
    options: [
      'He noticed the suspicious, non-governmental web domain link',
      'His telephone battery died before he could respond',
      'He had never owned a debit card or bank account before',
      'The message was written in an unknown ancient language'
    ],
    correctIndex: 0,
    explanationEn: 'The passage states: "By recognizing the suspicious non-governmental web domain, Ahmed avoided submitting his private information".',
    explanationAr: 'اكتشف الخدعة من خلال ملاحظة غرابة عنوان الموقع الإلكتروني (Domain) وعدم تبعيته للنطاق الرسمي.'
  },
  {
    id: 108,
    section: 'reading',
    unit: 1,
    passageId: 'passage-model2-2',
    questionEn: 'What dangerous crime occurs when criminals use stolen credentials to open lines of credit in a victim’s name?',
    questionAr: 'ما هي الجريمة الخطيرة التي تحدث عندما يستغل المجرمون بيانات مسروقة لفتح حسابات ائتمانية باسم الضحية؟',
    options: [
      'Identity theft (سرقة الهوية)',
      'Digital copyright licensing',
      'Hardware overheating',
      'Data compression'
    ],
    correctIndex: 0,
    explanationEn: 'Paragraph 2 highlights identity theft where hackers exploit stolen credentials to open unauthorized credit lines.',
    explanationAr: 'سرقة الهوية (Identity theft) هي الجريمة المذكورة التي تستغل فيها البيانات لفتح حسابات أو شراء بضائع دون إذن.'
  },
  {
    id: 109,
    section: 'reading',
    unit: 1,
    passageId: 'passage-model2-2',
    questionEn: 'Which security precaution is explicitly recommended in paragraph 2 to fortify online accounts?',
    questionAr: 'أي من الإجراءات الأمنية التالية موصى بها صراحة في الفقرة الثانية لتحصين الحسابات؟',
    options: [
      'Activating two-factor authentication (2FA) and complex passwords',
      'Using the exact same simple password for all websites',
      'Writing PIN numbers directly onto credit cards',
      'Sharing banking passwords with close coworkers'
    ],
    correctIndex: 0,
    explanationEn: 'Paragraph 2 recommends creating complex passwords and activating two-factor authentication (2FA).',
    explanationAr: 'يوصي النص بتفعيل المصادقة الثنائية (2FA) وإنشاء كلمات مرور معقدة.'
  },
  {
    id: 110,
    section: 'reading',
    unit: 1,
    passageId: 'passage-model2-2',
    questionEn: 'What type of online advertisements often trick users by promising unrealistic free prizes or urgent rewards?',
    questionAr: 'ما نوع الإعلانات الإلكترونية التي تخدع المستخدمين بوعود غير واقعية بجوائز مجانية أو أرباح سريعة؟',
    options: [
      'Sensational clickbait advertisements',
      'Academic peer-reviewed journals',
      'Official university course bulletins',
      'Government meteorological forecasts'
    ],
    correctIndex: 0,
    explanationEn: 'The passage warns never to click on "sensational clickbait advertisements offering free gifts."',
    explanationAr: 'يحذر النص من النقر على إعلانات العناوين المثيرة والخادعة (Clickbait).'
  },

  // ==========================================
  // SECTION 2: VOCABULARY (15 Questions, Q111 - Q125)
  // ==========================================
  {
    id: 111,
    section: 'vocabulary',
    unit: 3,
    questionEn: 'Linguists travel to remote villages to _______ dying languages before no speakers remain.',
    questionAr: 'يسافر علماء اللغويات إلى القرى النائية لـ _______ اللغات المهددة بالاندثار قبل اختفاء متحدثيها.',
    options: ['preserve', 'destroy', 'ignore', 'forget'],
    correctIndex: 0,
    explanationEn: 'Preserve means to keep safe from injury, harm, or disappearance.',
    explanationAr: 'الفعل preserve يعني يحافظ على أو يصون من الزوال.'
  },
  {
    id: 112,
    section: 'vocabulary',
    unit: 3,
    questionEn: 'A language that has no living native speakers left in the world is classified as _______.',
    questionAr: 'اللغة التي لم يعد لها أي متحدث أصلي حي حول العالم تُصنف بأنها لغة _______.',
    options: ['extinct', 'fluent', 'popular', 'dominant'],
    correctIndex: 0,
    explanationEn: 'An extinct language is one that no longer has any living native speakers.',
    explanationAr: 'كلمة extinct تعني منقرضة أو ميتة لغوياً.'
  },
  {
    id: 113,
    section: 'vocabulary',
    unit: 3,
    questionEn: 'Because Sara lived in London for five years, she became completely _______ in English.',
    questionAr: 'نظراً لأن سارة عاشت في لندن لمدة خمس سنوات، فقد أصبحت _______ تماماً في اللغة الإنجليزية.',
    options: ['fluent', 'extinct', 'nervous', 'suspicious'],
    correctIndex: 0,
    explanationEn: 'Fluent means able to speak or write a language easily and accurately.',
    explanationAr: 'الصفة fluent تعني طليق اللسان أو فصيح.'
  },
  {
    id: 114,
    section: 'vocabulary',
    unit: 4,
    questionEn: 'Smiling and laughing are _______ human behaviors observed in every human society.',
    questionAr: 'يُعد الابتسام والضحك من السلوكيات البشرية الـ _______ المشاهدة في كل المجتمعات.',
    options: ['universal', 'fake', 'dangerous', 'temporary'],
    correctIndex: 0,
    explanationEn: 'Universal means shared or done by all people or things in the world.',
    explanationAr: 'الصفة universal تعني عالمي أو مشترك بين جميع البشر.'
  },
  {
    id: 115,
    section: 'vocabulary',
    unit: 4,
    questionEn: 'When the suspect gave conflicting answers, his rapid blinking was a non-verbal _______ of anxiety.',
    questionAr: 'عندما قدم المشتبه به إجابات متناقضة، كان رمشه المتسارع بمثابة _______ غير لفظية على القلق.',
    options: ['signal', 'discount', 'concussion', 'password'],
    correctIndex: 0,
    explanationEn: 'Signal means a gesture, action, or sound that gives information or indicates a condition.',
    explanationAr: 'كلمة signal تعني إشارة أو علامة دالة.'
  },
  {
    id: 116,
    section: 'vocabulary',
    unit: 4,
    questionEn: 'Doctors report that laughing frequently can help _______ mental stress and lower blood pressure.',
    questionAr: 'يشير الأطباء إلى أن الضحك المتكرر يساعد في _______ التوتر النفسي وخفض ضغط الدم.',
    options: ['relieve', 'increase', 'worsen', 'deceive'],
    correctIndex: 0,
    explanationEn: 'Relieve means to reduce or alleviate pain, anxiety, or stress.',
    explanationAr: 'الفعل relieve يعني يخفف أو يُزيل التوتر والألم.'
  },
  {
    id: 117,
    section: 'vocabulary',
    unit: 5,
    questionEn: 'High-speed optical camera tracking systems ensure high _______ when determining tennis ball bounces.',
    questionAr: 'تضمن أنظمة تتبع الكاميرات عالية السرعة _______ فائقة عند تحديد مكان ارتداد كرة التنس.',
    options: ['accuracy', 'fatigue', 'scam', 'posture'],
    correctIndex: 0,
    explanationEn: 'Accuracy means the quality or state of being correct or precise.',
    explanationAr: 'كلمة accuracy تعني الدقة والإتقان.'
  },
  {
    id: 118,
    section: 'vocabulary',
    unit: 5,
    questionEn: 'Athletes wearing VR headsets can _______ realistic game scenarios without the danger of physical collisions.',
    questionAr: 'يستطيع الرياضيون الذين يرتدون نظارات الواقع الافتراضي أن _______ سيناريوهات لعب واقعية دون خطر التصادم البدني.',
    options: ['simulate', 'prohibit', 'injure', 'cancel'],
    correctIndex: 0,
    explanationEn: 'Simulate means to imitate the appearance or character of an experience.',
    explanationAr: 'الفعل simulate يعني يحاكي تجربة أو يقلدها.'
  },
  {
    id: 119,
    section: 'vocabulary',
    unit: 5,
    questionEn: 'A severe blow to the head during a football collision can cause a dangerous brain _______.',
    questionAr: 'يمكن أن تؤدي الضربة القوية على الرأس أثناء اصطدام في كرة القدم إلى حدوث _______ خطير في الدماغ.',
    options: ['concussion', 'discount', 'transaction', 'dialect'],
    correctIndex: 0,
    explanationEn: 'A concussion is a temporary unconsciousness or confusion caused by a blow on the head.',
    explanationAr: 'كلمة concussion تعني ارتجاج في المخ.'
  },
  {
    id: 120,
    section: 'vocabulary',
    unit: 6,
    questionEn: 'When shoppers see twenty different varieties of cereal, they may suffer from decision _______.',
    questionAr: 'عندما يرى المتسوقون عشرين صنفاً مختلفاً من حبوب الإفطار، قد يعانون من _______ اتخاذ القرار.',
    options: ['fatigue', 'accuracy', 'gesture', 'malware'],
    correctIndex: 0,
    explanationEn: 'Decision fatigue is the deteriorating quality of decisions made after a long session of decision-making.',
    explanationAr: 'المصطلح decision fatigue يعني إجهاد أو إنهاك اتخاذ القرار.'
  },
  {
    id: 121,
    section: 'vocabulary',
    unit: 6,
    questionEn: 'Supermarkets strategically place candy bars near the cash registers to encourage _______ buying.',
    questionAr: 'تضع المتاجر قطع الحلوى بجوار صناديق الدفع لتشجيع الشراء الـ _______ المفاجئ.',
    options: ['impulse', 'fluent', 'extinct', 'phishing'],
    correctIndex: 0,
    explanationEn: 'Impulse buying is the buying of goods without planning to do so in advance, as a result of a sudden urge.',
    explanationAr: 'المصطلح impulse buying يعني الشراء الاندفاعي أو العفوي دون تخطيط مسبق.'
  },
  {
    id: 122,
    section: 'vocabulary',
    unit: 6,
    questionEn: 'Store managers position profitable merchandise at _______ level so customers notice it instantly.',
    questionAr: 'يضع مديرو المتاجر السلع المربحة في مستوى _______ لكي يلاحظها الزبائن على الفور.',
    options: ['eye', 'foot', 'floor', 'ceiling'],
    correctIndex: 0,
    explanationEn: 'Eye level refers to the height of a typical standing person’s eyes.',
    explanationAr: 'المصطلح eye level يعني في مستوى النظر.'
  },
  {
    id: 123,
    section: 'vocabulary',
    unit: 1,
    questionEn: 'A software program designed specifically to harm or spy on computer systems is called _______.',
    questionAr: 'البرنامج المصمم خصيصاً للإضرار بالحواسيب أو التجسس عليها يُسمى _______ خبيثة.',
    options: ['malware', 'hardware', 'gesture', 'collocation'],
    correctIndex: 0,
    explanationEn: 'Malware is software that is specifically designed to disrupt, damage, or gain unauthorized access to a computer system.',
    explanationAr: 'المصطلح malware يعني البرمجيات الخبيثة والضارة.'
  },
  {
    id: 124,
    section: 'vocabulary',
    unit: 1,
    questionEn: 'Sensational headlines written solely to generate advertising clicks are known as _______.',
    questionAr: 'العناوين المثيرة المكتوبة فقط لحصد نقرات الإعلانات والمشاهدات تُعرف بـ _______.',
    options: ['clickbait', 'fluency', 'telemetry', 'antivirus'],
    correctIndex: 0,
    explanationEn: 'Clickbait refers to sensational or misleading text or thumbnail designed to attract attention and encourage visitors to click a link.',
    explanationAr: 'المصطلح clickbait يعني العناوين الخادعة لجذب النقرات والمشاهدات.'
  },
  {
    id: 125,
    section: 'vocabulary',
    unit: 1,
    questionEn: 'Unlike a temporary fad that vanishes in months, a _______ causes long-term lasting change across society.',
    questionAr: 'على عكس "الهبة المؤقتة" التي تختفي خلال شهور، فإن الـ _______ يُحدث تغييراً مستداماً طويل الأمد في المجتمع.',
    options: ['trend', 'scam', 'concussion', 'preposition'],
    correctIndex: 0,
    explanationEn: 'A trend is a general direction in which something is developing or changing over time.',
    explanationAr: 'المصطلح trend يعني التوجه أو الاتجاه المستمر.'
  },

  // ==========================================
  // SECTION 3: GRAMMAR (15 Questions, Q126 - Q140)
  // ==========================================
  {
    id: 126,
    section: 'grammar',
    unit: 3,
    questionEn: '_______ about ancient civilizations is one of my favorite weekend hobbies.',
    questionAr: '_______ عن الحضارات القديمة هو إحدى هواياتي المفضلة في عطلة نهاية الأسبوع.',
    options: ['Reading', 'Read', 'To readed', 'Reads'],
    correctIndex: 0,
    explanationEn: 'A gerund (verb + -ing) is used here as the subject of the sentence.',
    explanationAr: 'نستخدم صيغة اسم المصدر Gerund (Reading) كفاعل للجملة في بدايتها.'
  },
  {
    id: 127,
    section: 'grammar',
    unit: 3,
    questionEn: 'Fahad is very good at _______ English with native speakers without hesitation.',
    questionAr: 'فهد بارع جداً في _______ اللغة الإنجليزية مع المتحدثين الأصليين دون تردد.',
    options: ['speaking', 'speak', 'spoke', 'spoken'],
    correctIndex: 0,
    explanationEn: 'After prepositions like "at", the verb must be in the gerund form (-ing).',
    explanationAr: 'بعد حروف الجر مثل at، يجب أن يأتي الفعل بصيغة Gerund (-ing).'
  },
  {
    id: 128,
    section: 'grammar',
    unit: 3,
    questionEn: 'You should avoid _______ into strange dark alleys while traveling in unfamiliar cities.',
    questionAr: 'يجب أن تتجنب _______ إلى الأزقة المظلمة الغريبة أثناء السفر في مدن غير مألوفة.',
    options: ['walking', 'walk', 'walked', 'to walk'],
    correctIndex: 0,
    explanationEn: 'The verb "avoid" is followed by a gerund (verb + -ing).',
    explanationAr: 'الفعل avoid يُتبع دائماً باسم المصدر Gerund (-ing).'
  },
  {
    id: 129,
    section: 'grammar',
    unit: 4,
    questionEn: 'The suspect was sweating profusely; he _______ be feeling very guilty or nervous.',
    questionAr: 'كان المشتبه به يتصبب عرقاً بغزارة؛ إنه _______ يشعر بالذنب الشديد أو التوتر.',
    options: ['might', 'should to', 'ought', 'can not'],
    correctIndex: 0,
    explanationEn: '"Might" expresses logical possibility or deduction based on observable signs.',
    explanationAr: 'نستخدم الفعل المساعد might للتعبير عن الاحتمال القائم على الملاحظة.'
  },
  {
    id: 130,
    section: 'grammar',
    unit: 4,
    questionEn: 'If you want to make a positive impression in an interview, you _______ maintain eye contact.',
    questionAr: 'إذا أردت ترك انطباع إيجابي في المقابلة الشخصية، _______ أن تحافظ على التواصل البصري.',
    options: ['should', 'might to', 'can to', 'must to'],
    correctIndex: 0,
    explanationEn: '"Should" gives advice or recommendations and is followed directly by the base verb.',
    explanationAr: 'الفعل should يُستخدم لتقديم النصيحة ويأتي بعده الفعل في المصدر مباشرة دون to.'
  },
  {
    id: 131,
    section: 'grammar',
    unit: 5,
    questionEn: 'Look at those dark storm clouds! It _______ rain heavily this afternoon.',
    questionAr: 'انظر إلى تلك الغيوم الركامية الداكنة! إنها _______ تمطر بغزارة هذا المساء.',
    options: ['is going to', 'will to', 'going', 'is go'],
    correctIndex: 0,
    explanationEn: '"Be going to" is used for future predictions based on immediate visible physical evidence.',
    explanationAr: 'نستخدم be going to للتنبؤ المستقبلي المبني على دليل ملموس ومشاهد (الغيوم الداكنة).'
  },
  {
    id: 132,
    section: 'grammar',
    unit: 5,
    questionEn: 'The medical team has already made a decision; they _______ test the smart sensor tomorrow.',
    questionAr: 'لقد اتخذ الفريق الطبي قراره بالفعل؛ هم _______ يختبرون الحساس الذكي غداً.',
    options: ['are going to', 'will to', 'go to', 'are go'],
    correctIndex: 0,
    explanationEn: '"Be going to" is used for previously planned actions and intentional decisions.',
    explanationAr: 'نستخدم are going to للخطط والقرارات المحددة مسبقاً.'
  },
  {
    id: 133,
    section: 'grammar',
    unit: 5,
    questionEn: 'I feel exhausted after training. I think I _______ take a short nap right now.',
    questionAr: 'أشعر بالإرهاق بعد التمرين. أعتقد أنني _______ آخذ قيلولة قصيرة الآن.',
    options: ['will', 'going to', 'am will', 'was'],
    correctIndex: 0,
    explanationEn: '"Will" is used for spontaneous, immediate decisions made at the exact moment of speaking.',
    explanationAr: 'نستخدم will للقرارات العفوية واللحظية المتخذة أثناء الحديث.'
  },
  {
    id: 134,
    section: 'grammar',
    unit: 6,
    questionEn: 'Milk and fresh bakery items are located _______ the back of the grocery store.',
    questionAr: 'يقع الحليب والمخبوزات الطازجة _______ الجزء الخلفي من متجر البقالة.',
    options: ['at', 'between', 'under', 'through'],
    correctIndex: 0,
    explanationEn: 'The preposition "at" is used in the phrase "at the back of".',
    explanationAr: 'نستخدم حرف الجر at مع العبارة at the back of.'
  },
  {
    id: 135,
    section: 'grammar',
    unit: 6,
    questionEn: 'The supermarket entrance is positioned right _______ the parking lot.',
    questionAr: 'يقع مدخل السوبرماركت مباشرة _______ مواقف السيارات.',
    options: ['opposite', 'at between', 'next', 'in front'],
    correctIndex: 0,
    explanationEn: '"Opposite" indicates facing something across an open space.',
    explanationAr: 'كلمة opposite تعني في الجهة المقابلة مباشرة.'
  },
  {
    id: 136,
    section: 'grammar',
    unit: 1,
    questionEn: '_______ your password with anyone, even if they claim to work for the IT department.',
    questionAr: '_______ كلمة مرورك لأي شخص، حتى لو ادعى أنه يعمل في قسم تقنية المعلومات.',
    options: ['Never share', 'Not share', 'No sharing', 'You are not share'],
    correctIndex: 0,
    explanationEn: 'Negative imperatives use "Never" or "Do not" followed by the base form of the verb.',
    explanationAr: 'صيغة الأمر المنفي للتحذير تبدأ بـ Never متبوعة بالمصدر الأساسي للفعل.'
  },
  {
    id: 137,
    section: 'grammar',
    unit: 1,
    questionEn: '_______ the security certificate before entering credit card details on any online store.',
    questionAr: '_______ من شهادة الأمان قبل إدخال بيانات بطاقتك الائتمانية في أي متجر إلكتروني.',
    options: ['Verify', 'Verifying', 'To verified', 'Verifies'],
    correctIndex: 0,
    explanationEn: 'An affirmative imperative sentence begins with the base form of the verb.',
    explanationAr: 'صيغة الأمر المثبت (Imperative) تبدأ دائماً بالمصدر المجرد للفعل (Verify).'
  },
  {
    id: 138,
    section: 'grammar',
    unit: 1,
    questionEn: 'Online shopping offers great convenience, _______ shoppers must stay alert against counterfeit goods.',
    questionAr: 'يوفر التسوق عبر الإنترنت راحة كبيرة، _______ يجب على المتسوقين البقاء حذرين من البضائع المقلدة.',
    options: ['but', 'so', 'because', 'and also'],
    correctIndex: 0,
    explanationEn: '"But" connects two contrasting or unexpected clauses.',
    explanationAr: 'أداة العطف but تربط بين فكرتين متناقضتين (الراحة مقابل الحذر من الاحتيال).'
  },
  {
    id: 139,
    section: 'grammar',
    unit: 1,
    questionEn: 'Ahmed noticed an unfamiliar link in the email, _______ he deleted the message immediately.',
    questionAr: 'لاحظ أحمد وجود رابط غير مألوف في الرسالة، _______ قام بحذف الرسالة على الفور.',
    options: ['so', 'because', 'however', 'but'],
    correctIndex: 0,
    explanationEn: '"So" shows result or consequence (noticing the link led to deleting the message).',
    explanationAr: 'أداة الربط so تُستخدم لتوضيح النتيجة والسبب (ملاحظة الرابط قادت لحذف الرسالة).'
  },
  {
    id: 140,
    section: 'grammar',
    unit: 1,
    questionEn: 'Smartphones were adopted rapidly worldwide _______ they replaced multiple separate electronic devices.',
    questionAr: 'تم تبني الهواتف الذكية بسرعة هائلة حول العالم _______ استبدلت عدة أجهزة إلكترونية منفصلة.',
    options: ['because', 'so', 'however', 'but'],
    correctIndex: 0,
    explanationEn: '"Because" explains the reason or cause of an action.',
    explanationAr: 'أداة الربط because توضح العلة والسبب وراء سرعة انتشار الهواتف الذكية.'
  },

  // ==========================================
  // SECTION 4: LISTENING (10 Questions, Q141 - Q150)
  // ==========================================
  {
    id: 141,
    section: 'listening',
    unit: 5,
    audioScenarioId: 'audio-model2-1',
    questionEn: 'Where are the biometric wearable sensors placed according to Dr. Sarah?',
    questionAr: 'أين يتم وضع الحساسات الحيوية القابلة للارتداء وفقاً لما أوضحته الدكتورة سارة؟',
    options: [
      'Woven into compression shirts and athletic shoes',
      'Implanted under the skin of the athletes',
      'Placed on the sidelines of the stadium benches',
      'Attached to the referee’s official whistle'
    ],
    correctIndex: 0,
    explanationEn: 'Dr. Sarah explains: "They are seamlessly woven into smart compression shirts and athletic shoes."',
    explanationAr: 'ذكرت الدكتورة أنها تُنسج في قمصان الضغط الرياضية والأحذية.'
  },
  {
    id: 142,
    section: 'listening',
    unit: 5,
    audioScenarioId: 'audio-model2-1',
    questionEn: 'What crucial metric do these sensors monitor to protect players from severe muscle tears?',
    questionAr: 'ما هو المقياس الحيوي الحاسم الذي تراقبه هذه الحساسات لحماية اللاعبين من التمزقات العضلية؟',
    options: [
      'Extreme muscle fatigue and heart rate variability',
      'The brand of sportswear the athlete wears',
      'The volume of cheering fans in the stadium',
      'The color of the player’s shoes'
    ],
    correctIndex: 0,
    explanationEn: 'The audio mentions tracking heart rate variability, muscle exertion, and detecting extreme muscle fatigue.',
    explanationAr: 'تراقب الحساسات إجهاد العضلات ومعدل ضربات القلب.'
  },
  {
    id: 143,
    section: 'listening',
    unit: 5,
    audioScenarioId: 'audio-model2-1',
    questionEn: 'What action does a coach take when the algorithm detects dangerous player fatigue?',
    questionAr: 'ما هو الإجراء الذي يتخذه المدرب عندما يرصد النظام إجهاداً حاداً لدى اللاعب؟',
    options: [
      'Substitutes the player immediately to prevent injury',
      'Forces the player to run faster laps',
      'Cancels the entire sports season',
      'Ignores the alert and continues the match'
    ],
    correctIndex: 0,
    explanationEn: 'Dr. Sarah notes: "the coach substitutes the player immediately before a serious muscle tear or ligament injury occurs."',
    explanationAr: 'يقوم المدرب باستبدال اللاعب فوراً لمنع تفاقم الإصابة أو التمزق.'
  },
  {
    id: 144,
    section: 'listening',
    unit: 4,
    audioScenarioId: 'audio-model2-1',
    questionEn: 'According to HR specialist Maya, what negative signal is communicated when a job applicant slouches and crosses arms?',
    questionAr: 'وفقاً لمختصة الموارد البشرية مايا، ما هي الرسالة السلبية التي تنقلها وضعية انحناء الظهر وتشبيك الذراعين؟',
    options: [
      'Anxiety, defensiveness, and lack of confidence',
      'Extreme physical fitness and intelligence',
      'Readiness to begin work immediately',
      'Fluency in foreign languages'
    ],
    correctIndex: 0,
    explanationEn: 'Maya states: "Slouching in the chair, crossing your arms defensively, and continually looking down at the floor signal anxiety and lack of confidence."',
    explanationAr: 'أوضحت مايا أن هذه الحركات تعكس التوتر، والموقف الدفاعي، وقلة الثقة بالنفس.'
  },
  {
    id: 145,
    section: 'listening',
    unit: 4,
    audioScenarioId: 'audio-model2-1',
    questionEn: 'Which positive non-verbal habit does Maya recommend to demonstrate active listening in an interview?',
    questionAr: 'ما هي العادة الإيجابية غير اللفظية التي توصي بها مايا لإظهار الاستماع النشط أثناء المقابلة؟',
    options: [
      'Maintaining steady eye contact, sitting upright, and nodding gently',
      'Looking at your wristwatch every thirty seconds',
      'Typing notes continuously on a smartphone',
      'Interrupting the interviewer with humorous jokes'
    ],
    correctIndex: 0,
    explanationEn: 'Maya advises maintaining eye contact, a firm handshake, sitting upright, and nodding gently.',
    explanationAr: 'توصي بالتواصل البصري، والجلوس باعتدال، والإيماء الخفيف بالرأس للتعبير عن الاستماع النشط.'
  },
  {
    id: 146,
    section: 'listening',
    unit: 4,
    audioScenarioId: 'audio-model2-1',
    questionEn: 'What intonation pattern is used when John asks: "Really, Maya?"',
    questionAr: 'ما هو نمط التنغيم الصوتي (Intonation) المستخدم في سؤال جون الاستفساري التعجبي "Really, Maya?"',
    options: [
      'Rising intonation at the end (↗) indicating surprise',
      'Falling intonation at the end (↘)',
      'Flat monotone pitch with no inflection',
      'Muffled whisper intonation'
    ],
    correctIndex: 0,
    explanationEn: 'Expressing surprise or seeking confirmation in single-word questions typically takes a rising intonation (↗).',
    explanationAr: 'التعبير عن الدهشة أو طلب التأكيد ينتهي بنبرة صوتية صاعدة (Rising intonation ↗).'
  },
  {
    id: 147,
    section: 'listening',
    unit: 1,
    audioScenarioId: 'audio-model2-1',
    questionEn: 'What warning does IT Officer Tariq issue to university students?',
    questionAr: 'ما هو التحذير الذي وجهه ضابط الأمن السيبراني طارق لطلاب الجامعة في اللقاء؟',
    options: [
      'Fake job recruitment offers circulating on social networks',
      'A change in the library operating hours',
      'New grading policies in mathematics',
      'The cancellation of final sports tournaments'
    ],
    correctIndex: 0,
    explanationEn: 'Officer Tariq states: "Today our IT security center is warning everyone about recent fake job offers circulating on social networks."',
    explanationAr: 'حذر من إعلانات التوظيف الوهمية المنتشرة عبر وسائل التواصل الاجتماعي.'
  },
  {
    id: 148,
    section: 'listening',
    unit: 1,
    audioScenarioId: 'audio-model2-1',
    questionEn: 'Which unrealistic claim characterizes fraudulent recruitment posts described by the officer?',
    questionAr: 'ما هو الادعاء غير الواقعي الذي يميز إعلانات التوظيف الاحتيالية المذكورة؟',
    options: [
      'Earning 5,000 dollars a day working ten minutes from home',
      'Requiring a university bachelor’s degree in engineering',
      'Offering a standard hourly wage during business hours',
      'Scheduling an in-person interview at a campus office'
    ],
    correctIndex: 0,
    explanationEn: 'Officer Tariq describes dramatic headlines such as: "Earn 5,000 dollars a day working ten minutes from home!"',
    explanationAr: 'تزعم الإعلانات أرباحاً خيالية مثل جني 5000 دولار يومياً مقابل عشر دقائق من المنزل.'
  },
  {
    id: 149,
    section: 'listening',
    unit: 1,
    audioScenarioId: 'audio-model2-1',
    questionEn: 'What immediate step should a student take if they mistakenly click a suspicious online link?',
    questionAr: 'ما الخطوة الفورية التي يجب على الطالب اتخاذها إذا نقر بالخطأ على رابط إلكتروني مشبوه؟',
    options: [
      'Close browser immediately without entering passwords and run antivirus scan',
      'Enter debit card details to confirm their identity',
      'Forward the link to all classmates and friends',
      'Leave the laptop on public Wi-Fi overnight'
    ],
    correctIndex: 0,
    explanationEn: 'Officer Tariq advises: "Do not enter any personal login credentials. Close your browser immediately, disconnect from public Wi-Fi, and run a thorough antivirus system scan."',
    explanationAr: 'يوصي بعدم إدخال أي بيانات، وإغلاق المتصفح فوراً، وفصل الاتصال بالشبكة، وإجراء فحص ببرنامج الحماية.'
  },
  {
    id: 150,
    section: 'listening',
    unit: 1,
    audioScenarioId: 'audio-model2-1',
    questionEn: 'In Officer Tariq’s sentence "Do not enter any personal login credentials", which grammatical structure is used?',
    questionAr: 'في جملة الضابط "Do not enter any personal login credentials"، ما هو التركيب القواعدي المستخدم؟',
    options: [
      'Negative imperative (صيغة أمر منهي)',
      'Past perfect continuous',
      'Comparative adjective',
      'Gerund as a prepositional complement'
    ],
    correctIndex: 0,
    explanationEn: '"Do not enter..." is a negative imperative used to give a direct safety instruction or warning.',
    explanationAr: 'جملة "Do not enter..." تمثل صيغة الأمر المنفي (Negative imperative) المستخدمة للتحذير وإعطاء التعليمات.'
  }
];
