export interface VocabItem {
  word: string;
  partOfSpeech: string;
  definition: string;
  arabicMeaning: string;
  exampleSentence: string;
  unit: number;
  book: 'LS' | 'RW' | 'Both';
  badge?: string; // e.g. OPAL, Oxford 3000
}

export interface GrammarRule {
  id: string;
  unit: number;
  titleEn: string;
  titleAr: string;
  ruleExplanationAr: string;
  ruleExplanationEn: string;
  formula: string;
  examples: { en: string; ar: string }[];
  commonMistakes: { wrong: string; correct: string; explanationAr: string }[];
}

export interface ReadingSummary {
  unit: number;
  reading1Title: string;
  reading1TitleEn?: string;
  reading1SummaryEn?: string;
  reading1SummaryAr: string;
  reading1FullTextEn?: string;
  reading1FullTextAr?: string;
  reading2Title: string;
  reading2TitleEn?: string;
  reading2SummaryEn?: string;
  reading2SummaryAr: string;
  reading2FullTextEn?: string;
  reading2FullTextAr?: string;
  targetSkillTitle: string;
  targetSkillAr: string;
  keyTakeaways: string[];
}

export interface ListeningSpeakingSummary {
  unit: number;
  listening1Title: string;
  listening1SummaryAr: string;
  listening2Title: string;
  listening2SummaryAr: string;
  pronunciationRule: { title: string; explanationAr: string; examples: string[] };
  speakingSkill: { title: string; explanationAr: string; keyPhrases: { phrase: string; useCase: string }[] };
  noteTakingSkill: { title: string; explanationAr: string; tips: string[] };
}

export interface UnitOverview {
  unitNumber: number;
  bookTitle?: string;
  bookBadge?: string;
  themeEn: string;
  themeAr: string;
  bigQuestionEn: string;
  bigQuestionAr: string;
  rwDomain: string;
  lsDomain: string;
  readingSummary: ReadingSummary;
  listeningSpeakingSummary: ListeningSpeakingSummary;
  grammarRules: GrammarRule[];
  vocabularyList: VocabItem[];
}

export const UNITS_SUMMARY_DATA: UnitOverview[] = [
  // ================= UNIT 3 =================
  {
    unitNumber: 3,
    themeEn: 'Linguistics & Communications',
    themeAr: 'علم اللغويات ووسائل التواصل والسفر',
    bigQuestionEn: 'How are language and culture related? / How does social media change the way we travel?',
    bigQuestionAr: 'كيف ترتبط اللغة بالثقافة؟ وكيف تُغيّر وسائل التواصل الاجتماعي طريقتنا في السفر؟',
    rwDomain: 'Communications and Media (الاتصالات والإعلام)',
    lsDomain: 'Linguistics (علم اللغويات)',
    readingSummary: {
      unit: 3,
      reading1Title: 'Travel with Talib (السفر مع طالب)',
      reading1TitleEn: 'Talib’s Travel Blog: Top 5 Destinations to Visit',
      reading1SummaryEn: 'A personal travel blog by Talib recommending five top global destinations: Machu Picchu in Peru, London, Bali in Indonesia, Jeddah in Saudi Arabia (Red Sea diving and historical Al-Balad), and Hong Kong. It shows how travel blogs help discover diverse cultures.',
      reading1SummaryAr: 'مدونة سفر لشاب يدعى طالب يشارك فيها تجاربه في زيارة وجهات عالمية مختلفة مثل ماتشو بيتشو في البيرو، ولندن، وبالي، وجدة في السعودية (الغوص في البحر الأحمر وتاريخ المدينة القديمة)، وهونغ كونغ. تؤكد المقالة كيف تساعد المدونات السياحية في اكتشاف وجهات جديدة وثقافات متنوعة.',
      reading1FullTextEn: `Hello world travelers! Many of you asked on my blog for my personal top 5 places to visit around the world. It was a tough choice, but here are my top picks:

1. Machu Picchu, Peru:
Do you love towering mountains and ancient history? This lost city in the high Andes sits on top of the world!
Traveler tip: Take the 360-degree panoramic train through the Andes for breathtaking views and unforgettable photos.

2. London, England:
If you love history, museums, theatre, and shopping, London brings it all together in one city. It is a truly multicultural capital where people, culinary traditions, and languages meet from every corner of the globe.

3. Bali, Indonesia:
Looking to unwind on picturesque beaches or catch great waves? Bali has some of the world's finest beaches, alongside magnificent historical monuments like the Ujung Water Palace.

4. Jeddah, Saudi Arabia:
Do you love scuba diving and exploring marine life, or would you like to develop your diving skills? Jeddah, the Bride of the Red Sea, offers both! After exploring the coral reefs, explore the heritage architecture of historic Al-Balad and modern waterfronts.

5. Hong Kong SAR, China:
A thrilling family-friendly destination featuring world-class theme parks, vibrant street food markets, and tranquil islands completely free of cars.

About Talib: Welcome to my blog! Traveling transformed my perspective ten years ago on my first journey to Japan. Now I dedicate a month each year to exploring a new culture and sharing honest advice with you.`,
      reading1FullTextAr: `مرحباً بمسافري العالم!
الكثير منكم طلب مني في المدونة قائمتي المفضلة لأفضل 5 أماكن للزيارة حول العالم. كان اختيارها مهمة صعبة، ولكن ها هي وجهاتي المختارة:

١. ماتشو بيتشو، بيرو (Machu Picchu, Peru):
هل تحبون الجبال الشاهقة والمناطق الأثرية القديمة؟ هذه المدينة المفقودة في أعالي جبال الأنديز تقع على قمة العالم!
نصيحتي للمسافرين: استقلوا قطار الـ 360 درجة لمشاهدة جبال الأنديز الخلابة والتقاط أروع الصور التذكارية.

٢. لندن، إنجلترا (London, England):
إذا كنتم تعشقون التاريخ والمتاحف والمسارح والتسوق، فلندن تجمع كل ذلك في مكان واحد. إنها مدينة عالمية تمتزج فيها الثقافات والأطعمة والفنون واللغات من شتى بقاع الأرض.

٣. بالي، إندونيسيا (Bali, Indonesia):
هل تبحثون عن الاسترخاء على الشواطئ الساحرة أو ركوب الأمواج؟ بالي تضم أجمل شواطئ العالم، إلى جانب معالم تاريخية مذهلة مثل قصر أوجونغ المائي التراثي.

٤. جدة، المملكة العربية السعودية (Jeddah, Saudi Arabia):
هل تحبون الغوص واستكشاف أعماق البحار؟ أم ترغبون في تطوير مهاراتكم؟ مدينة جدة عروس البحر الأحمر تجمع بين الاثنين! بعد اكتشاف الشعاب المرجانية الساحرة، يمكنكم التجول في جدة التاريخية والأسواق التراثية والمراكز التجارية الحديثة.

٥. هونغ كونغ، الصين (Hong Kong SAR, China):
وجهة مثالية وممتعة لجميع أفراد الأسرة، حيث تضم مدناً ترفيهية عالمية وأسواقاً للأطعمة، ويمكنكم استكشاف الجزر الهادئة الخالية تماماً من السيارات.

نبذة عن طالب: مرحباً بكم في مدونتي! لقد غيّر السفر نظرتي للحياة قبل عشر سنوات خلال رحلتي الأولى لليابان، والآن أخصص شهراً كاملاً كل عام لاستكشاف وجهة جديدة ومشاركة خبراتي ونصائحي الصادقة معكم.`,
      reading2Title: 'Travel Bloggers: The Good and The Bad (مدونو السفر: الإيجابيات والسلبيات)',
      reading2TitleEn: 'Travel Bloggers: The Good and The Bad',
      reading2SummaryEn: 'Examines the phenomenon of over 30 million travel blogs and how influencers shape tourist choices. It weighs benefits (trip inspiration, packing advice) against drawbacks (overcrowding, filtered unrealistic photos, and sponsored ads).',
      reading2SummaryAr: 'تناقش المقالة ظاهرة وجود أكثر من 30 مليون مدونة سفر وتأثير المؤثرين (Influencers) على قرارات السياح. تعرض الإيجابيات (مساعدة الناس في التخطيط، صور ملهمة، نصائح حقيقية) والسلبيات (الازدحام الشديد في البلدات الصغيرة، الصور المضللة غير الواقعية، الإعلانات المدفوعة الخفية).',
      reading2FullTextEn: `Today, there are at least 30 million travel blogs and vlogs online. While not all are famous, top influencers reach tens of millions of followers and directly impact travel choices (91% of followers report considering a destination after seeing a photo on social media).

1. A Gateway to Discovering New Destinations:
Social media enables ordinary travelers to explore hidden corners of the world, inspiring people to embark on adventures they might not have discovered on their own.

2. Only the Bright Side (The Filtered Reality):
Often, influencers share only their most glamorous moments, omitting extreme heat, crowded lines, or delayed transit. Visitors may experience disappointment when reality does not match filtered images.

3. Reliable Practical Guidance:
Many travel bloggers offer expert advice on appropriate clothing, safe drinking water, and convenient airport transportation.

4. Sponsored Advertising:
Tourism accounts for 9% of the global economy. Governments and luxury resorts sponsor influencers with complimentary stays to promote destinations, perks rarely available to typical tourists.

5. Overtourism Crisis:
Influencer attention can suddenly flood quiet coastal villages with thousands of visitors, overwhelming local infrastructure and eroding authentic culture.`,
      reading2FullTextAr: `اليوم، يوجد ما لا يقل عن 30 مليون مدونة وفلوغ سياحي عبر الإنترنت. ورغم أن ليست جميعها مشهورة، إلا أن بعض المؤثرين يحظون بمتابعة عشرات الملايين من الأشخاص، ويؤثرون بشكل مباشر على قرارات السفر التي يتخذها الناس (حيث يفيد 91% من المتابعين بأنهم يفكرون في زيارة مكان ما لمجرد رؤية صورة له في وسائل التواصل الاجتماعي).

أولاً: وسيلة لاكتشاف وجهات جديدة:
تساعد وسائل التواصل الناس العاديين على استكشاف العالم، حيث يشارك المدونون صوراً رائعة لأماكن نائية، مما يشجع الناس على خوض التجربة بأنفسهم.

ثانياً: الجوانب الإيجابية فقط (مشكلة التضليل):
في كثير من الأحيان، ينشر الناس في وسائل التواصل تجاربهم الإيجابية فقط؛ فلا يذكرون الطقس الحار أو الازدحام الشديد أو طوابير الانتظار المملة. وعندما يزور السائح نفس المكان قد يصاب بخيبة أمل لأن الواقع يختلف عما شاهده في الصور المفلترة.

ثالثاً: نصائح وإرشادات ممتازة:
العديد من مدوني السفر خبراء حقيقيون؛ يمكنهم تقديم إجابات دقيقة لأسئلة السائحين حول نوعية الملابس المناسبة، وسلامة مياه الشرب، وأفضل وسائل المواصلات من المطار.

رابعاً: الإعلانات المدفوعة (Paid to Advertise):
السياحة تمثل 9% من حجم الاقتصاد العالمي. ولذلك تدعو الدول والشركات المؤثرين وتتحمل تكاليف إقامتهم في أفخم الفنادق لكي يروجوا لوجهاتها. لذا فالمسافر العادي من غير المرجح أن يحظى بنفس الامتيازات الفاخرة!

خامساً: أزمة الازدحام المفرط (Too Many Tourists):
قد يتسبب المؤثرون في جعل بلدة صغيرة هادئة وجهة مشهورة فجأة، فيتدفق إليها آلاف السياح في نفس الوقت. وهذه البلدات غالباً لا تملك بنية تحتية كافية (مطاعم ومواقف ومرافق)، مما يؤدي إلى تلوث الشواطئ الهادئة وفقدان البلدة لهويتها وثقافتها الأصلية.`,
      targetSkillTitle: 'Reading Charts, Graphs, and Tables (قراءة المخططات والرسوم البيانية والجداول)',
      targetSkillAr: 'استخراج الأرقام والنسب المئوية والاتجاهات من الرسوم الدائرية (Pie charts) والأعمدة البيانية (Bar graphs) ومقارنة البيانات بين الدول.',
      keyTakeaways: [
        '91% من الأشخاص يفكرون بزيارة مكان معين بسبب رؤية صورة له في وسائل التواصل.',
        'السياحة تمثل نحو 9% من الاقتصاد العالمي.',
        'المؤثرون قد يظهرون الجانب المثالي فقط دون التنبيه للمشاكل مثل الطقس أو الازدحام.',
        'المدن الصغيرة قد تعاني من التلوث ونقص المرافق بسبب تدفق أعداد هائلة من السياح.'
      ]
    },
    listeningSpeakingSummary: {
      unit: 3,
      listening1Title: 'What Can Languages Teach Us? (ماذا تعلمنا اللغات؟)',
      listening1SummaryAr: 'نقاش بين طلاب وأستاذ حول أسباب تعلم لغات أخرى (فرص العمل، مساعدة الآخرين، متعة السفر). وتركز المحادثة على كيفية عكس اللغة لثقافة شعبها، مثل تعدد كلمات "الثلج" في أيسلندا، واستخدام درجات الاحترام والألقاب في اللغة اليابانية لكبار السن، وقواعد العائلة في الصينية، وقيم الضيافة والاهتمام في العربية.',
      listening2Title: 'Languages and Cultures in Danger (لغات وثقافات مهددة بالاندثار)',
      listening2SummaryAr: 'مقابلة مع خبير لغوي توضح اختفاء لغات العالم عندما يموت المتحدثون بها دون نقلها للأطفال. من أسباب اندثار اللغات: الأمراض والحروب قديماً، وهجرة السكان، واقتصار التعليم المدرسي على لغات كبرى مهيمنة، وتدخل خبراء اللسانيات لتوثيق اللغات وتسجيل نطقها وكتابة معاجم لها لحفظها.',
      pronunciationRule: {
        title: 'Intonation in Questions (التنغيم في الأسئلة)',
        explanationAr: 'في أسئلة Yes/No يرتفع الصوت في النهاية (Rising ↗). أما في أسئلة المعلومات (Wh- questions) فينخفض الصوت في النهاية (Falling ↘). وفي أسئلة الاختيار (Choice) يرتفع في الخيار الأول ثم ينخفض في الثاني.',
        examples: [
          'Do you speak English every day? ↗ (Yes/No = Rising)',
          'When did you start studying Greek? ↘ (Wh- = Falling)',
          'Which do you prefer, English ↗ or French? ↘ (Choice = Rise then Fall)'
        ]
      },
      speakingSkill: {
        title: 'Introducing Topics in a Presentation (تقديم وتنسيق موضوعات العرض التقديمي)',
        explanationAr: 'استخدام عبارات أكاديمية محددة للانتقال بين أجزاء الحديث بسلاسة وإشعار المستمعين بتسلسل الأفكار.',
        keyPhrases: [
          { phrase: "Let's start with...", useCase: 'لبدء الحديث بالموضوع الأول' },
          { phrase: "The first thing I'm going to talk about is...", useCase: 'لتقديم الفكرة الأولى بوضوح' },
          { phrase: "Now let's move on to...", useCase: 'للانتقال لموضوع جديد' },
          { phrase: "Next, we're going to look at...", useCase: 'للانتقال للنقطة التالية' },
          { phrase: "To wrap up / Finally, let's talk about...", useCase: 'لاختتام العرض التقديمي' },
          { phrase: "Now [Name] is going to show you...", useCase: 'لتقديم المتحدث التالي في العرض الجماعي' }
        ]
      },
      noteTakingSkill: {
        title: 'Marking Important Information in Notes (تمييز المعلومات الهامة بالرموز)',
        explanationAr: 'استخدام التسطير والدوائر والرموز (* للنقاط الهامة، ! للحقائق المفاجئة، ؟ للنقاط غير المفهومة) لتسريع المراجعة.',
        tips: [
          'ضع دائرة حول الأرقام والتواريخ (مثلاً: 7,000 languages).',
          'استخدم نجمة (*) للحقائق الأساسية وعلامة تعجب (!) للمعلومات غير المتوقعة.',
          'استخدم علامة الاستفهام (؟) للكلمات التي تحتاج لسؤال الأستاذ عنها لاحقاً.'
        ]
      }
    },
    grammarRules: [
      {
        id: 'u3-g1',
        unit: 3,
        titleEn: 'Gerunds as Subjects and Objects',
        titleAr: 'اسم الفعل (Gerunds: Verb + ing) كفاعل أو مفعول به',
        ruleExplanationAr: 'اسم الفعل (Gerund) هو صيغة الفعل المضاف إليها ing ويعامل معاملة الاسم المفرد. يمكن أن يقع كفاعل في بداية الجملة ويتبعه فعل مفرد، أو كمفعول به بعد أفعال محددة مثل: enjoy, avoid, dislike, hate, like, love, prefer, discuss.',
        ruleExplanationEn: 'A gerund is an -ing form of a verb that functions as a noun. It can be the subject of a sentence (followed by a singular verb) or the object following specific verbs.',
        formula: 'Subject: [Verb + ing] + Verb (singular) ... | Object: Subject + [enjoy/avoid/like/...] + [Verb + ing]',
        examples: [
          { en: 'Learning a new language is exciting and useful.', ar: 'تعلم لغة جديدة أمر ممتع ومفيد. (Gerund كفاعل)' },
          { en: 'Joining a social media group is a good way to practice.', ar: 'الانضمام لمجموعة تواصل هو وسيلة جيدة للممارسة. (Gerund كفاعل)' },
          { en: 'I enjoy meeting people from different countries.', ar: 'أستمتع بمقابلة أشخاص من بلدان مختلفة. (Gerund كمفعول بعد enjoy)' },
          { en: 'She avoids speaking in front of large crowds.', ar: 'هي تتجنب التحدث أمام الحشود الكبيرة. (Gerund كمفعول بعد avoid)' }
        ],
        commonMistakes: [
          { wrong: 'Learn English is easy.', correct: 'Learning English is easy.', explanationAr: 'يجب استخدام اسم الفعل (Learning) كفاعل للجملة وليس الفعل المجرد.' },
          { wrong: 'I enjoy to travel to new cities.', correct: 'I enjoy traveling to new cities.', explanationAr: 'الفعل enjoy يتبعه دائماً Gerund (-ing) وليس مصدر بـ (to + verb).' }
        ]
      },
      {
        id: 'u3-g2',
        unit: 3,
        titleEn: 'Sentences with Because',
        titleAr: 'الجمل السببية باستخدام Because (لإعطاء السبب)',
        ruleExplanationAr: 'تربط أداة because بين جملتين لبيان السبب والنتيجة. إذا جاءت because في منتصف الجملة لا نضع فاصلة (comma). أما إذا بدأت الجملة بـ Because، فيجب وضع فاصلة بين الجملتين بعد شبه الجملة السببية.',
        ruleExplanationEn: 'Because introduces the reason for a situation. When because is in the middle, do not use a comma. When the sentence begins with Because, put a comma after the clause.',
        formula: '[Result] + because + [Reason]  OR  Because + [Reason] , + [Result]',
        examples: [
          { en: 'Rakan often goes to the beach because he likes to surf.', ar: 'يذهب راكان للشاطئ لأنه يحب ركوب الأمواج. (بدون فاصلة)' },
          { en: 'Because Rakan likes to surf, he often goes to the beach.', ar: 'لأن راكان يحب ركوب الأمواج، فهو يذهب غالباً للشاطئ. (مع فاصلة)' },
          { en: 'The tourists are happy because they have great photos.', ar: 'السياح سعداء لأن لديهم صوراً رائعة.' }
        ],
        commonMistakes: [
          { wrong: 'Because it was raining. We stayed home.', correct: 'Because it was raining, we stayed home.', explanationAr: 'Because لا تشكل جملة مستقلة بذاتها؛ يجب وصلها بجملة النتيجة مع فاصلة.' },
          { wrong: 'I was tired, because I studied all night.', correct: 'I was tired because I studied all night.', explanationAr: 'لا تضع فاصلة قبل because عندما تأتي في وسط الجملة.' }
        ]
      }
    ],
    vocabularyList: [
      { word: 'culture', partOfSpeech: 'noun', definition: 'The customs, ideas, and way of life of a group of people or country', arabicMeaning: 'ثقافة / عادات مجتمع', exampleSentence: 'Language is an essential mirror of human culture.', unit: 3, book: 'RW', badge: 'OPAL' },
      { word: 'discover', partOfSpeech: 'verb', definition: 'To find or learn something for the first time', arabicMeaning: 'يكتشف', exampleSentence: 'Travelers discover wonderful historical landmarks in Saudi Arabia.', unit: 3, book: 'RW', badge: 'OPAL' },
      { word: 'experience', partOfSpeech: 'noun', definition: 'Something that has happened to you; personal knowledge gained', arabicMeaning: 'تجربة / خبرة', exampleSentence: 'My visit to Machu Picchu was an unforgettable experience.', unit: 3, book: 'RW', badge: 'OPAL' },
      { word: 'popular', partOfSpeech: 'adjective', definition: 'Liked or enjoyed by a large number of people', arabicMeaning: 'شائع / محبوب / ذو شعبية', exampleSentence: 'Instagram is a popular platform for travel photography.', unit: 3, book: 'RW', badge: 'Oxford 3000' },
      { word: 'advertise', partOfSpeech: 'verb', definition: 'To put information out so that people want to buy something or visit a place', arabicMeaning: 'يُعلن / يروّج تجارياً', exampleSentence: 'Airlines advertise cheap flights to attract young tourists.', unit: 3, book: 'RW' },
      { word: 'affect', partOfSpeech: 'verb', definition: 'To make something or someone change in a particular way; influence', arabicMeaning: 'يؤثر على', exampleSentence: 'Social media influencers affect the travel decisions of millions.', unit: 3, book: 'RW', badge: 'OPAL' },
      { word: 'average', partOfSpeech: 'adjective', definition: 'Usual, typical, or normal amount', arabicMeaning: 'متوسط / معتاد', exampleSentence: 'The average traveler spends three hours researching online.', unit: 3, book: 'RW', badge: 'OPAL' },
      { word: 'be likely to', partOfSpeech: 'adj. phr.', definition: 'Having a high probability of happening; probable', arabicMeaning: 'من المرجح أن', exampleSentence: 'Tourists are likely to take many photos on their vacations.', unit: 3, book: 'RW', badge: 'OPAL' },
      { word: 'provide', partOfSpeech: 'verb', definition: 'To give something to someone who needs it; supply', arabicMeaning: 'يوفّر / يزوّد', exampleSentence: 'Travel blogs provide practical packing tips and advice.', unit: 3, book: 'RW', badge: 'OPAL' },
      { word: 'tourism', partOfSpeech: 'noun', definition: 'The business of providing services, transport, and tours for visitors', arabicMeaning: 'سياحة', exampleSentence: 'Tourism creates thousands of jobs in coastal cities.', unit: 3, book: 'RW' },
      { word: 'ancient', partOfSpeech: 'adjective', definition: 'Belonging to the distant past; very old', arabicMeaning: 'قديم جداً / عريق', exampleSentence: 'Latin and Ancient Greek are no longer spoken in everyday life.', unit: 3, book: 'LS' },
      { word: 'disappear', partOfSpeech: 'verb', definition: 'To cease to exist; go away and become impossible to find', arabicMeaning: 'يختفي / يندثر', exampleSentence: 'Many indigenous languages disappear when children stop speaking them.', unit: 3, book: 'LS' },
      { word: 'fascinating', partOfSpeech: 'adjective', definition: 'Extremely interesting and charming', arabicMeaning: 'رائع / مذهل / شيق للغاية', exampleSentence: 'The history of human language is completely fascinating.', unit: 3, book: 'LS', badge: 'OPAL' },
      { word: 'useful', partOfSpeech: 'adjective (suffix -ful)', definition: 'Able to be used for a practical purpose; helpful', arabicMeaning: 'مفيد (من use + ful)', exampleSentence: 'Knowing two languages is very useful for university students.', unit: 3, book: 'LS' },
      { word: 'exciting', partOfSpeech: 'adjective (suffix -ing)', definition: 'Causing great enthusiasm and eagerness', arabicMeaning: 'حماسي / مثير (من excite + ing)', exampleSentence: 'Going on an expedition is an exciting adventure.', unit: 3, book: 'LS' },
      { word: 'modifying noun', partOfSpeech: 'grammar concept', definition: 'A noun placed before another noun to describe it (first noun is singular)', arabicMeaning: 'اسم مخصص (مثل: travel plan, family vacation)', exampleSentence: 'We booked a summer vacation at a beach resort.', unit: 3, book: 'RW' }
    ]
  },

  // ================= UNIT 4 =================
  {
    unitNumber: 4,
    themeEn: 'Body Language & The Science of Laughter',
    themeAr: 'لغة الجسد وعلم الضحك والصحة النفسية',
    bigQuestionEn: 'What can body language tell us? / What makes you laugh?',
    bigQuestionAr: 'ماذا تخبرنا لغة الجسد؟ وما الذي يضحكنا؟',
    rwDomain: 'Biological Sciences & Psychology (العلوم البيولوجية وعلم النفس)',
    lsDomain: 'Biological Sciences (العلوم البيولوجية والسلوك البشري)',
    readingSummary: {
      unit: 4,
      reading1Title: 'No Laughing Matter (الضحك أمر جاد)',
      reading1TitleEn: 'No Laughing Matter: The Social Science of Laughter',
      reading1SummaryEn: 'Explains that laughter is an innate behavior starting in infants at 4 months, long before speech. Studies show we laugh 30 times more in social groups than when alone. Laughter is contagious and difficult to fake, serving primarily to build friendly social connection rather than simply reacting to jokes.',
      reading1SummaryAr: 'توضح المقالة أن الضحك أمر طبيعي وفطري يبدأ عند الرضع في عمر 4 أشهر قبل النطق. وتؤكد الدراسات أن الضحك اجتماعي بالدرجة الأولى، فنحن نضحك مع الآخرين أكثر بـ 30 ضعفاً مقارنة بوجودنا بمفردنا. كما أن الضحك معدٍ ويصعب تزييفه، وغالباً ما يكون لإظهار الود والتواصل وليس فقط بسبب النكات.',
      reading1FullTextEn: `1. What is laughter?
Laughter is a natural, instinctive human behavior. Infants begin smiling and laughing at approximately four months of age, long before uttering their first spoken words. Laughter is profoundly social: research proves that people are thirty times more likely to laugh when in social company than when alone. Furthermore, laughter is contagious—when one person laughs, companions are biologically primed to join in.

2. Honest Laughter is Difficult to Fake:
Genuine laughter is notoriously hard to simulate convincingly. Behavioral studies demonstrate that listeners readily detect fake laughter and respond with instinctive discomfort.

3. Why Do People Laugh?
Surprisingly, only 10% to 20% of everyday laughter is prompted by humorous jokes. The vast majority occurs after mundane conversational statements to signal friendliness, warmth, and mutual goodwill. People also laugh when nervous to ease tension, or when experiencing relief.

4. What Makes Something Funny?
Incongruity and the unexpected trigger our sense of humor. Humorous appreciation shifts across life stages: young children laugh at novel sensory surprises, whereas teenagers often employ humor as a defense mechanism to diffuse social anxiety.`,
      reading1FullTextAr: `١. ما هو الضحك؟ (What is laughter?)
الضحك طبيعة فطرية لدى البشر؛ فنحن نبدأ بالضحك عند سن أربعة أشهر تقريباً، حتى قبل أن نبدأ بتعلم الكلام!
والضحك سلوك اجتماعي بامتياز؛ فهو يربطنا بالآخرين، ونحن نضحك عندما نكون مع غيرنا أكثر بـ 30 ضعفاً مقارنة بضحكنا بمفردنا. والضحك معدٍ أيضاً؛ فعندما يضحك شخص، يبدأ الآخرون بالضحك معه.

٢. صعوبة تصنع الضحك (Honest Laughter):
من الصعب جداً تزييف الضحك الحقيقي؛ جرب أن تضحك الآن بشكل مصطنع وستجد الأمر شديد الصعوبة وغير مقنع. أثبتت الدراسات أن معظم الناس يكتشفون الضحك الزائف فوراً ولا يرتاحون لسماعه.

٣. متى يضحك الناس؟ (When do people laugh?)
10% إلى 20% فقط من الضحك سببه نكات ومواقف هزلية. أما معظم الضحك فهدفه إظهار الود؛ كأن يقول الشخص بضحكته: "أنا لا أنافسك، بل أريد أن أكون ودوداً معك".
كما نضحك أحياناً عندما نشعر بالتوتر (Nervous) في بداية الاجتماعات لكسر الجليد، وأحياناً نضحك لشعورنا بأننا أفضل من الآخرين أو عند وقوعهم في أخطاء.

٤. ما الذي يجعل الشيء مضحكاً؟ ولماذا نختلف؟ (What is funny?)
الأشياء غير المتوقعة والمواقف السخيفة هي التي تضحكنا. وتتغير نظرتنا لما هو مضحك مع العمر؛ فالأطفال يضحكون لمجرد المفاجأة واكتشاف العالم، بينما يضحك المراهقون أحياناً لحماية أنفسهم من الحرج وتخفيف الضغوط النفسية.`,
      reading2Title: 'Reasons to Laugh (أسباب علمية تدعوك للضحك)',
      reading2TitleEn: 'Reasons to Laugh: Health and Physiological Benefits',
      reading2SummaryEn: 'Examines the clinical benefits of laughter: releasing mood-elevating endorphins, burning calories (50 kcal per 10-15 mins), decreasing stress hormones, relieving pain, and lowering cardiovascular blood pressure. Highlights international Laughter Clubs.',
      reading2SummaryAr: 'تستعرض الفوائد الصحية والطبية للضحك: إفراز الإندورفينات (مواد كيميائية للشعور بالسعادة ومقاومة الألم)، حرق السعرات (10-15 دقيقة تستهلك 50 سعرة حرارية)، تخفيض ضغط الدم، تعزيز صحة القلب والذاكرة. كما تشير لنوادي الضحك (Laughter Clubs) حول العالم.',
      reading2FullTextEn: `1. Brain Endorphins and Stress Relief:
Can laughter directly enhance our physical wellbeing? Medical research confirms it: laughing stimulates the release of endorphins in the brain, the exact soothing biochemicals produced during aerobic exercise.

2. A Physical Workout for the Body:
A hearty session of 10 to 15 minutes of laughter can burn approximately 50 calories. It activates abdominal muscle groups, accelerates oxygen intake, and stimulates cardiovascular circulation.

3. Natural Pain Relief and Immune Defense:
Clinical experiments demonstrated that patients watching comedic films tolerated ice-water immersion significantly longer than control groups, with analgesic pain relief persisting up to 20 minutes post-laughter.

4. The Global Laughter Club Phenomenon:
With proven benefits including lowered blood pressure and enhanced immunity, thousands of communities now gather in Laughter Clubs worldwide to practice intentional laughter exercises for vitality.`,
      reading2FullTextAr: `١. هرمونات السعادة ومقاومة التوتر:
هل يمكن للضحك أن يجعل الإنسان سعيداً حقاً؟ تؤكد الأبحاث العلمية ذلك؛ فالضحك يغير حالتك النفسية فوراً عبر إفراز مواد كيميائية في الدماغ تسمى "الإندورفينات" (Endorphins)، وهي نفس المواد المهدئة التي يفرزها الجسم بعد ممارسة الرياضة.

٢. الضحك تمرين رياضي متكامل للجسم:
عندما تضحك ملء فمك، تتنفس بعمق وسرعة ويرتفع معدل نبضات قلبك ويتدفق الدم لوجهك. إن الضحك لمدة 10 إلى 15 دقيقة يحرق قرابة 50 سعرة حرارية ويشغل عضلات البطن والجسم بالكامل.

٣. تخفيف الآلام الجسدية (Pain Relief):
أثبتت تجربة علمية أن المرضى الذين شاهدوا مقاطع كوميدية مضحكة تمكنوا من إبقاء أيديهم داخل ماء مثلج لفترة أطول بكثير مقارنة بغيرهم، واستمر مفعول تسكين الألم لنحو 20 دقيقة بعد الضحك.

٤. حماية القلب وتقوية المناعة:
يساعد الضحك على خفض ضغط الدم المرتفع والوقاية من أمراض القلب؛ فالأشخاص الذين يضحكون بانتظام يملكون قلوباً أكثر صحة ومناعة أقوى لمحاربة الأمراض.

٥. تحسين الذاكرة والتعلم لدى كبار السن:
في دراسة أجريت على كبار السن، خضعت مجموعة لمشاهدة فيديو فكاهي لمدة 20 دقيقة قبل اختبار الذاكرة، بينما جلست المجموعة الأخرى في هدوء. والنتيجة: حققت المجموعة التي ضحكت درجات أعلى بكثير في الحفظ والاستيعاب.

٦. نوادي الضحك (Laughter Clubs):
أنشأ الطبيب الهندي مادان كاتاريا نوادي الضحك التي بدأت بممارسة الضحك التظاهري في الحدائق كتمارين تنفس، وسرعان ما تحول الضحك المصطنع إلى ضحك هستيري حقيقي ومعدٍ! وتوجد اليوم آلاف النوادي حول العالم احتفاءً باليوم العالمي للضحك.`,
      targetSkillTitle: 'Identifying the Topic Sentence in a Paragraph (تحديد الجملة المفتاحية في الفقرة)',
      targetSkillAr: 'الجملة المفتاحية (Topic Sentence) تعبر عن الفكرة الرئيسية العامة للفقرة بأكملها، وتأتي عادة كالجملة الأولى أو الثانية، ويجب ألا تكون تفصيلاً دقيقاً بل فكرة جامعة.',
      keyTakeaways: [
        'يبدأ الإنسان بالضحك عند عمر أربعة أشهر.',
        'نحن نضحك مع الآخرين 30 مرة أكثر مما نضحك عندما نكون وحدنا.',
        'الضحك الحقيقي يرفع معدل نبضات القلب مؤقتاً ويحرق 50 سعرة حرارية في 15 دقيقة.',
        'الابتسام حتى وإن كان مصطنعاً يرسل إشارات إيجابية للدماغ تخفف من حدة التوتر.'
      ]
    },
    listeningSpeakingSummary: {
      unit: 4,
      listening1Title: "What's Behind a Face? (ما وراء ملامح الوجه؟)",
      listening1SummaryAr: 'استكشاف معاني تعابير الوجه ولغة الجسد. الابتسامة أداة تواصل عالمية يفهمها الجميع للتعبير عن الود، لكن هناك فروقاً بين الجنسين والثقافات؛ فالنساء يبتسمن أكثر من الرجال عموماً، والابتسامة في بيئات العمل قد تعني المجاملة أو حتى إخفاء القلق والحرج.',
      listening2Title: 'Are They Telling the Truth? (هل يقولون الحقيقة؟)',
      listening2SummaryAr: 'محاضرة لضابط ومحقق أمني يوضح كيف يراقب المحققون لغة الجسد لكشف الكذب أثناء التحقيق (حركات الرأس السريعة، تسارع التنفس، لمس الأنف أو تغطية الفم، تشبيك الذراعين أو الساقين). ويشدد على أن لغة الجسد ليست دليلاً قاطعاً بمفردها لأن التوتر قد يسبب نفس العلامات.',
      pronunciationRule: {
        title: 'Simple Present Third-Person -s / -es (نطق حرف s الغائب)',
        explanationAr: 'يُنطق صوت /s/ بعد الأصوات غير المهتزة (p, t, k, f). ويُنطق /z/ بعد الأصوات المهتزة (b, d, g, v, l, m, n, r والعلل). ويُنطق /ɪz/ أو /əz/ بعد الأصوات الصفيرية (s, z, sh, ch, x).',
        examples: [
          '/s/ sound: asks, looks, stops, laughs',
          '/z/ sound: says, tells, replies, explains, plays',
          '/ɪz/ sound: changes, misses, watches, washes'
        ]
      },
      speakingSkill: {
        title: 'Using Eye Contact, Facial Expressions, and Body Language (استخدام لغة الجسد والتواصل البصري)',
        explanationAr: 'عند التحدث، يساعد التواصل البصري المستمر وتعابير الوجه المعبرة وحركات اليدين الهادئة على نقل المشاعر بصدق وإقناع الجمهور.',
        keyPhrases: [
          { phrase: 'Maintain eye contact', useCase: 'لبناء الثقة والتواصل مع المستمع' },
          { phrase: 'Use natural gestures', useCase: 'لتوضيح حجم الشيء أو المشاعر المصاحبة' },
          { phrase: 'Smile warmly', useCase: 'لخلق بيئة ودية وكسر حاجز التوتر' }
        ]
      },
      noteTakingSkill: {
        title: 'Making Notes Using a Word Web (شبكة المفاهيم / خريطة الكلمات)',
        explanationAr: 'رسم دائرة مركزية للفكرة الأساسية وتفريع دوائر حولها لتنظيم الأفكار المتشابكة قبل التحدث أو كتابة القصة.',
        tips: [
          'اكتب السؤال الأساسي في الدائرة المركزية (مثل: When do we smile?).',
          'فرّع دوائر للمواقف: Greeting, Professional, In photos, Shy/Embarrassed.'
        ]
      }
    },
    grammarRules: [
      {
        id: 'u4-g1',
        unit: 4,
        titleEn: 'Simple Present for Informal Narratives',
        titleAr: 'المضارع البسيط لسرد القصص غير الرسمية (Narratives)',
        ruleExplanationAr: 'عند سرد قصة شخصية أو ملخص مشهد من كتاب، يمكن استخدام زمن المضارع البسيط بدلاً من الماضي لجعل القصة تبدو حية وحماسية وواقعية أمام المستمع.',
        ruleExplanationEn: 'When telling an informal personal story or summarizing an event, you can use the simple present tense to make the story feel immediate and engaging.',
        formula: 'Subject + Verb(s/es) ... [She walks in, hears a noise, and opens the door]',
        examples: [
          { en: 'She hears the doorbell ring, rushes to the door, and sees her friend.', ar: 'تسمع جرس الباب يرن، فتسرع نحو الباب، وترى صديقتها.' },
          { en: 'Then he smiles and tells her that she won a competition.', ar: 'ثم يبتسم ويخبرها بأنها فازت في مسابقة.' },
          { en: 'Detective Jones investigates the crime and asks sharp questions.', ar: 'المحقق جونز يحقق في الجريمة ويوجه أسئلة ذكية.' }
        ],
        commonMistakes: [
          { wrong: 'She hear the phone and answered it.', correct: 'She hears the phone and answers it.', explanationAr: 'يجب توحيد زمن السرد (المضارع البسيط مع إضافة s للغائب المفرد).' }
        ]
      },
      {
        id: 'u4-g2',
        unit: 4,
        titleEn: 'Sentences with When',
        titleAr: 'الجمل الزمنية باستخدام When (عندما)',
        ruleExplanationAr: 'تستخدم when لربط حدثين يقعان في نفس الوقت أو أحدهما يؤدي للآخر. إذا بدأت الجملة بـ When، نضع فاصلة بعد الجملة الأولى. وإذا جاءت when في الوسط، لا نضع فاصلة.',
        ruleExplanationEn: 'When combines two actions occurring together. If the sentence starts with When, use a comma after the clause. If when is in the middle, no comma is needed.',
        formula: 'When + Clause 1 , + Clause 2   OR   Clause 1 + when + Clause 2',
        examples: [
          { en: 'When they are nervous, they laugh.', ar: 'عندما يكونون متوترين، فإنهم يضحكون. (مع فاصلة)' },
          { en: 'They laugh when they are nervous.', ar: 'هم يضحكون عندما يكونون متوترين. (بدون فاصلة)' },
          { en: 'When people smile, their brains release positive chemicals.', ar: 'عندما يبتسم الناس، تفرز أدمغتهم مواد كيميائية إيجابية.' }
        ],
        commonMistakes: [
          { wrong: 'When I am tired I drink coffee.', correct: 'When I am tired, I drink coffee.', explanationAr: 'نسيان الفاصلة عند بدء الجملة بشبه جملة When.' }
        ]
      }
    ],
    vocabularyList: [
      { word: 'calm', partOfSpeech: 'adjective', definition: 'Not excited, nervous, or upset; relaxed', arabicMeaning: 'هادئ / مطمئن', exampleSentence: 'It is important to stay calm during university presentations.', unit: 4, book: 'LS' },
      { word: 'communicate', partOfSpeech: 'verb', definition: 'To share information, ideas, or feelings with someone', arabicMeaning: 'يتواصل', exampleSentence: 'Deaf individuals communicate effectively using sign language.', unit: 4, book: 'LS', badge: 'OPAL' },
      { word: 'emotion', partOfSpeech: 'noun', definition: 'A strong feeling such as joy, sadness, fear, or anger', arabicMeaning: 'عاطفة / شعور', exampleSentence: 'Laughter is an honest expression of human emotion.', unit: 4, book: 'LS' },
      { word: 'facial expression', partOfSpeech: 'noun phrase', definition: 'The look on your face that shows how you feel', arabicMeaning: 'تعابير الوجه', exampleSentence: 'A sincere smile is a universal facial expression.', unit: 4, book: 'LS' },
      { word: 'observe', partOfSpeech: 'verb', definition: 'To watch someone or something very carefully', arabicMeaning: 'يراقب / يلاحظ بدقة', exampleSentence: 'Detectives observe suspects during questioning.', unit: 4, book: 'LS', badge: 'OPAL' },
      { word: 'talented', partOfSpeech: 'adjective', definition: 'Having natural skill or ability', arabicMeaning: 'موهوب', exampleSentence: 'The talented comedian made the whole room laugh.', unit: 4, book: 'LS' },
      { word: 'truth', partOfSpeech: 'noun', definition: 'The true facts about something; reality', arabicMeaning: 'الحقيقة', exampleSentence: 'Polygraph tests attempt to verify if a suspect is telling the truth.', unit: 4, book: 'LS' },
      { word: 'ability', partOfSpeech: 'noun', definition: 'The power, skill, or knowledge to do something', arabicMeaning: 'قدرة / استطاعة', exampleSentence: 'Humans have an innate ability to recognize facial expressions.', unit: 4, book: 'RW', badge: 'OPAL' },
      { word: 'effect', partOfSpeech: 'noun', definition: 'A change that is a result or consequence of an action', arabicMeaning: 'أثر / مفعول (اسم)', exampleSentence: 'Laughter has a positive effect on cardiovascular health.', unit: 4, book: 'RW', badge: 'OPAL' },
      { word: 'prevent', partOfSpeech: 'verb', definition: 'To stop someone from doing something, or stop an event from happening', arabicMeaning: 'يمنع / يقي من', exampleSentence: 'Regular exercise and humor help prevent chronic illnesses.', unit: 4, book: 'RW', badge: 'OPAL' },
      { word: 'rate', partOfSpeech: 'noun', definition: 'The speed or frequency of something over time', arabicMeaning: 'معدل / سرعة', exampleSentence: 'Vigorous laughter increases your heart rate temporarily.', unit: 4, book: 'RW', badge: 'OPAL' },
      { word: 'embarrassed', partOfSpeech: 'adjective', definition: 'Feeling shy, awkward, or ashamed in front of others', arabicMeaning: 'محرج / خجلان', exampleSentence: 'Some people laugh out loud when they feel deeply embarrassed.', unit: 4, book: 'RW' },
      { word: 'synonyms', partOfSpeech: 'vocabulary skill', definition: 'Words that have almost the same meaning (e.g., afraid = scared)', arabicMeaning: 'الترادفات (كلمات بنفس المعنى)', exampleSentence: 'Knowing synonyms expands your vocabulary range.', unit: 4, book: 'LS' }
    ]
  },

  // ================= UNIT 5 =================
  {
    unitNumber: 5,
    themeEn: 'Sports Science & Modern Technology',
    themeAr: 'علوم الرياضة والتكنولوجيا الحديثة',
    bigQuestionEn: 'How is technology changing sports? / How are sports and games different?',
    bigQuestionAr: 'كيف تُغيّر التكنولوجيا الرياضة؟ وما الفرق بين الرياضة واللعبة؟',
    rwDomain: 'Sports Science (علوم الرياضة والنشاط البدني)',
    lsDomain: 'Technology & Sports Innovation (التكنولوجيا والابتكار الرياضي)',
    readingSummary: {
      unit: 5,
      reading1Title: 'Play Ball! Pickleball (العب الكرة! رياضة البكل بول)',
      reading1TitleEn: 'Play Ball! The Phenomenon of Pickleball',
      reading1SummaryEn: 'Explores the rise of pickleball, invented in 1965 as an easy-to-learn hybrid of badminton, tennis, and table tennis. Highlights its rapid growth across all age groups (36 million players, 31% annual growth) while addressing tennis players’ complaints regarding court encroachment and paddle noise.',
      reading1SummaryAr: 'تتناول المقالة نشأة رياضة البكل بول (Pickleball) التي ابتُكرت عام 1965 كخليط من الريشة الطائرة والتنس وتنس الطاولة. تشرح أسباب شعبيتها الكبيرة (سهولة التعلم في حصة أو حصتين، صغر الملعب، بطء طيران الكرة، ملاءمتها لجميع الأعمار خصوصاً فوق 55 عاماً) مع ذكر شكاوى لاعبي التنس من ضجيج المضرب واستحواذها على الملاعب.',
      reading1FullTextEn: `1. What is Pickleball? (Play Ball!)
What happens when you blend three beloved racket sports—badminton, tennis, and table tennis? The outcome is the fastest-growing recreational sport in North America: Pickleball.

2. How Did the Sport Begin?
In 1965, three fathers invented the game to entertain their bored children during summer break. Using improvised wooden paddles and a perforated plastic wiffle ball, they played on an old badminton court with a lowered net. The whole family immediately embraced the game because everyone could play together regardless of age.

3. Why Has It Achieved Global Popularity?
Pickleball is remarkably accessible. Its rules are straightforward and beginners master fundamentals in just one or two sessions. Because the court is compact and the ball travels slower than a tennis ball, players enjoy fast-paced rallies without exhausting sprints.

4. Who Plays Pickleball?
Over 36 million active enthusiasts play annually, with an impressive 31% year-over-year growth rate. While historically favored by adults over 55, the average player age is dropping rapidly as youth leagues expand.

5. Criticisms and the Tennis Conflict:
The solid paddle produces a distinctive, loud "pop" on every stroke. Furthermore, municipal tennis players frequently express frustration as standard tennis courts are subdivided into four pickleball courts to accommodate high demand.`,
      reading1FullTextAr: `١. ما هي رياضة البكل بول؟ (Play Ball!)
ماذا يحدث عندما تخلط بين ثلاث رياضات شهيرة: كرة الريشة، والتنس، وتنس الطاولة؟ النتيجة هي أسرع رياضة نمواً في الولايات المتحدة وتدعى "البكل بول" (Pickleball).

٢. كيف بدأت هذه الرياضة؟ (How did it start?)
في عام 1965، ابتكر ثلاثة أصدقاء هذه اللعبة بهدف اللعب مع أطفالهم. استخدموا مضارب من تنس الطاولة وكرة بلاستيكية صلبة مفرغة، ولعبوا على ملعب ريشة طائرة بشبكة منخفضة. أحبت العائلة اللعبة فوراً لأنها سمحت لجميع أفراد الأسرة بالمشاركة معاً.

٣. لماذا تحظى بكل هذه الشعبية؟ (Why is it popular?)
لأنها لعبة سهلة جداً في التعلم والممارسة؛ فقواعدها بسيطة ويمكن لأي شخص إتقانها في حصة أو حصتين فقط. كما أن اللاعبين لا يحتاجون للجري السريع أو بذل مجهود شاق، فالملعب صغير ومضاربها خفيفة، والكرة تطير ببطء ويسهل تتبعها.

٤. من يمارس البكل بول؟ (Who plays it?)
أكثر من 36 مليون شخص يمارسونها سنوياً بمعدل نمو يبلغ 31% كل عام. ورغم أنها تحظى بشعبية طاغية بين الأشخاص فوق 55 عاماً، إلا أن متوسط أعمار اللاعبين ينخفض باستمرار بسبب إقبال الشباب والأطفال، فهي رياضة شاملة ومرحبة بالجميع (Inclusive).

٥. ما هي سلبيات اللعبة وشكاوى لاعبي التنس؟ (What's not to like?)
البكل بول لعبة صاخبة؛ فالمضرب الصلب يحدث صوتاً حاداً (Pop) في كل مرة تصطدم به الكرة، كما يتحدث اللاعبون كثيراً أثناء اللعب. بالإضافة لذلك، يشتكي لاعبو التنس من نقص الملاعب واستيلاء البكل بول عليها، حيث يمكن تقسيم ملعب تنس واحد إلى أربعة ملاعب بكل بول!`,
      reading2Title: 'Games or Sports? (ألعاب أم رياضات؟ - مدونة بينا الرياضية)',
      reading2TitleEn: 'Games or Sports? The Defining Criteria of Athletics',
      reading2SummaryEn: 'A sports blog debate evaluating what defines a true "sport": physical exertion, structured competition, and developed skill. Discusses reader opinions comparing billiards, competitive marathon running, traditional Arabian falconry, and martial arts like Tae Kwon Do.',
      reading2SummaryAr: 'نقاش حول المعايير التي تجعل النشاط "رياضة": الجهد البدني (Physical effort)، المنافسة (Competition)، والمهارة (Skill). تناقش تدوينات القراء أمثلة مثل البلياردو (لعبة مهارة وليست رياضة بدنية)، والجري، والصيد بالصقور (رياضة تراثية تتطلب تدريباً شاقاً)، والتايكوندو (فن قتالي ورياضة).',
      reading2FullTextEn: `1. Is Billiards Really a Sport? (Pena’s Sports Blog):
Kevin Pena poses a question on his blog: "At the Asian Games, medals are contested in basketball, soccer, and billiards. In my view, billiards is an engaging game of skill, but not an athletic sport, which strictly requires intense physical cardiovascular exertion and sweat."

2. Alba’s Comment:
Running is an ancient athletic pursuit requiring both aerobic capacity and technique. It was the sole event at the inaugural Olympic Games 2,700 years ago. Pure competition defines true sport—one competitor triumphs while another is defeated.

3. Bob’s Comment:
Running is not automatically a sport in every setting. Jogging alone for fitness is exercise; however, entering an organized marathon with hundreds of competitors transforms running into genuine sport.

4. Sam’s Comment:
According to the Oxford English Dictionary, sport historically signified recreation demanding cultivated skill. Falconry in the Arabian Peninsula is a premier example: while the trained hawk pursues prey, the handler requires years of patience, endurance, and physical command.

5. Dana’s Comment:
While falconry represents noble heritage, Tae Kwon Do embodies the fusion of martial art and rigorous athletic sport, demanding supreme physical flexibility, cardio conditioning, and disciplined training.`,
      reading2FullTextAr: `١. هل البلياردو رياضة؟ (Pena's Sports Blog)
يتساءل الكاتب كيفن بينا في مدونته الرياضية: في دورة الألعاب الآسيوية تقام منافسات في كرة السلة وكرة القدم والبلياردو. في رأيي، البلياردو لعبة مهارية وليست رياضة بدنية؛ لأن الرياضة الحقيقية تشترط بذل مجهود بدني شاق وعرق وتمرين للأعضاء.

٢. تعليق ألبا (Alba):
الجري رياضة عريقة تتطلب جهداً ومهارة، وكان أول رياضة تُلعب في الألعاب الأولمبية القديمة قبل 2700 عام. التنافسية هي جوهر الرياضة، حيث يفوز شخص ويخسر آخر.

٣. تعليق بوب (Bob):
الجري لا يكون دائماً رياضة؛ فعندما يجري الشخص بمفرده للصحة فهو مجرد تمرين عادي (Exercise)، لكن عندما يتسابق في ماراثون تنافسي رسمي مع متسابقين آخرين يتحول حينها إلى رياضة حقيقية تستحق المشاهدة.

٤. تعليق سام (Sam):
وفقاً لقاموس أكسفورد، عُرفت الرياضة منذ القرن الخامس عشر بأنها نشاط ترفيهي واستجمامي يتطلب مهارة. وخير مثال هو "الصيد بالصقور" (Falconry) في الجزيرة العربية؛ فالإنسان يدرب الصقر على الصيد، ورغم أن الطائر هو من يطارد الفريسة، إلا أن الصيد بالصقور يتطلب تدريباً شاقاً وصبراً ومهارة عالية تجعلها رياضة تراثية بامتياز.

٥. تعليق دانا (Dana):
أرى أن الصيد بالصقور فن تراثي وتدريب نبيل، بينما رياضة التايكوندو (Tae Kwon Do) تجمع بين الفن القتالي والرياضة البدنية؛ لأنها تتطلب مجهوداً بدنياً هائلاً، ومهارة متقنة، وتدريباً مستمراً.`,
      targetSkillTitle: 'Identifying Supporting Sentences and Details (تحديد الجمل الداعمة والتفاصيل)',
      targetSkillAr: 'الجمل الداعمة (Supporting Sentences - SS) تدعم الفكرة الرئيسية مباشرة بأسباب رئيسية. وتليها التفاصيل (Details - D) التي تشتمل على أرقام، تواريخ، أمثلة، واقتباسات تعزز الحجة.',
      keyTakeaways: [
        'البكل بول هي أسرع رياضة نمواً في الولايات المتحدة بنمو سنوي 31%.',
        'الملعب الواحد للتنس يمكن تقسيمه لأربعة ملاعب بكل بول.',
        'الرياضة الحقيقية تجمع بين الجهد البدني والتنافسية المنظمة والقواعد الواضحة.',
        'الصيد بالصقور رياضة عريقة تتطلب مهارة بالغة في تدريب الصقر ورعايته.'
      ]
    },
    listeningSpeakingSummary: {
      unit: 5,
      listening1Title: 'New Technology in Car Racing (التكنولوجيا الحديثة في سباقات السيارات)',
      listening1SummaryAr: 'تقرير عن تقنيات الفورمولا وسباقات السيارات الحديثة، واستخدام الديناميكا الهوائية (Aerodynamics)، والمواد الصديقة للبيئة (ألياف الخيزران والقطن بدلاً من المعادن لتخفيف الوزن)، والوقود الحيوي الأخضر، وأجهزة الاستشعار الذكية التي تحمي سلامة السائقين.',
      listening2Title: 'Training with Virtual Reality (التدريب بالواقع الافتراضي في الرياضة)',
      listening2SummaryAr: 'مقابلة مع الدكتور سليمان حول استخدام نظارات الواقع الافتراضي (VR) لتدريب الرياضيين في كرة القدم والرجبي والتنس. الفوائد الأساسية: السلامة وتجنب إصابات الرأس والارتجاج، التدريب المتكرر على مهارة معينة دون إرهاق جسدي، والراحة (التدريب في أي وقت ومكان دون التأثر بالطقس).',
      pronunciationRule: {
        title: 'Reduction of "be going to" to "gonna" (نطق gonna غير الرسمي)',
        explanationAr: 'في المحادثة اليومية واللغة الشفوية غير الرسمية، يدمج المتحدثون "going to" لتصبح "gonna". تنبيه هام: هذا الاختصار شفهي فقط ويُمنع كتابته نهائياً في الاختبار التحريري الأكاديمي!',
        examples: [
          'Spoken: "We\'re gonna win the game."',
          'Written (Required): "We are going to win the game."',
          'Spoken: "She\'s gonna join the team."',
          'Written (Required): "She is going to join the team."'
        ]
      },
      speakingSkill: {
        title: 'Asking for and Giving Opinions (السؤال عن الآراء وتقديمها)',
        explanationAr: 'استخدام أساليب مهذبة لاستطلاع رأي الزميل وتقديم وجهة نظرك الشخصية أثناء النقاش.',
        keyPhrases: [
          { phrase: 'What do you think of...?', useCase: 'للسؤال عن الرأي' },
          { phrase: 'How do you feel about...?', useCase: 'للسؤال عن الشعور والموقف' },
          { phrase: "In my opinion,...", useCase: 'لتقديم رأي شخصي صريح' },
          { phrase: "I feel that / I think that...", useCase: 'للتعبير عن وجهة نظر شخصية' },
          { phrase: "Don't you agree?", useCase: 'لطلب تأكيد أو مشاركة الرأي من الزميل' }
        ]
      },
      noteTakingSkill: {
        title: 'Using Numbered Lists to Organize Information (استخدام القوائم المرقمة)',
        explanationAr: 'استخدام الترقيم 1، 2، 3 عند استماعك لكلمات الإشارة (First, Secondly, Another reason, Finally) لترتيب النقاط في كولومين منظمين.',
        tips: [
          'أنصت لكلمات الترتيب (First, in addition, finally).',
          'رتب المزايا في قائمة مرقمة: 1. Safety, 2. Skill Practice, 3. Convenience.'
        ]
      }
    },
    grammarRules: [
      {
        id: 'u5-g1',
        unit: 5,
        titleEn: 'Future with "be going to"',
        titleAr: 'صيغة المستقبل للخطط والنوايا باستخدام (be going to)',
        ruleExplanationAr: 'نستخدم (am / is / are + going to + base verb) للتحدث عن خطط ونوايا مستقبلية مسبقة، أو أشياء مخطط لها بالفعل. في النفي نضع not بعد فعل be (am not, is not, are not). وفي السؤال نعكس الفاعل وفعل be.',
        ruleExplanationEn: 'Use be going to + base form of a verb to talk about the future, especially planned actions or future intentions.',
        formula: 'Subject + am/is/are + going to + Verb (base) ... | Negative: am/is/are + not + going to + Verb',
        examples: [
          { en: "I am going to buy a new tennis racket tomorrow.", ar: 'سوف أشتري مضرب تنس جديد غداً. (خطة مؤكدة)' },
          { en: "They are going to join the swimming team at the university.", ar: 'سوف ينضمون لفريق السباحة في الجامعة.' },
          { en: "The stadium isn't going to be open tomorrow.", ar: 'الاستاد لن يكون مفتوحاً غداً. (نفي)' },
          { en: "Are they going to play baseball tonight?", ar: 'هل سيلعبون البيسبول الليلة؟ (سؤال Yes/No)' }
        ],
        commonMistakes: [
          { wrong: 'He is going play soccer tomorrow.', correct: 'He is going to play soccer tomorrow.', explanationAr: 'نسيان حرف الجر to بعد going.' },
          { wrong: 'They gonna study tonight. (in writing)', correct: 'They are going to study tonight.', explanationAr: 'gonna صيغة شفوية عامية؛ يجب كتابة are going to في الاختبار التحريري.' }
        ]
      },
      {
        id: 'u5-g2',
        unit: 5,
        titleEn: 'Prepositions of Location: in, at, on',
        titleAr: 'حروف جر المكان: in, at, on',
        ruleExplanationAr: 'تحديد المكان بدقة:\n- in: للمساحات الكبيرة والمدن والدول (in Saudi Arabia, in Dammam)، وداخل الأماكن المغلقة (in a store, in a room).\n- at: للأماكن والأنشطة المحددة (at school, at work, at home, at the stadium, at Soccer City).\n- on: للأسطح المفتوحة (on a table, on a tennis court, on a field) ولوسائل المواصلات الكبيرة (on a bus, on a train, on a plane).',
        ruleExplanationEn: 'Prepositions of location:\n- in: large geographic areas (countries, cities) or inside spaces.\n- at: specific destinations, institutions, or points.\n- on: flat surfaces, playing courts/fields, and public transport vehicles.',
        formula: 'in [city/country/room] | at [home/work/school/stadium] | on [court/field/bus/train]',
        examples: [
          { en: 'The match will take place in Dammam.', ar: 'ستقام المباراة في الدمام. (مدينة = in)' },
          { en: 'Students play team sports at school and at the sports center.', ar: 'يمارس الطلاب الرياضات الجماعية في المدرسة وفي المركز الرياضي. (مكان محدد = at)' },
          { en: 'They played pickleball on a badminton court.', ar: 'لعبوا البكل بول على ملعب الريشة. (سطح الملعب = on)' },
          { en: 'The team traveled on a bus for three hours.', ar: 'سافر الفريق على متن الحافلة لثلاث ساعات. (وسيلة مواصلات = on)' }
        ],
        commonMistakes: [
          { wrong: 'I play tennis in the court.', correct: 'I play tennis on the court.', explanationAr: 'ملاعب الرياضات المسطحة تأخذ حرف الجر on وليس in.' },
          { wrong: 'He arrived on Dammam.', correct: 'He arrived in Dammam.', explanationAr: 'المدن والمحافظات تأخذ in.' }
        ]
      }
    ],
    vocabularyList: [
      { word: 'athlete', partOfSpeech: 'noun', definition: 'A person who is good at sports and competes in athletic events', arabicMeaning: 'رياضي / لاعب محترف', exampleSentence: 'A professional athlete trains for several hours every day.', unit: 5, book: 'RW', badge: 'Oxford 3000' },
      { word: 'compete', partOfSpeech: 'verb', definition: 'To try to win or do better than someone else in a contest', arabicMeaning: 'يتنافس / يسابق', exampleSentence: 'Over two hundred nations compete in the Olympic Games.', unit: 5, book: 'RW', badge: 'OPAL' },
      { word: 'complain', partOfSpeech: 'verb', definition: 'To say that you are unhappy or dissatisfied about something', arabicMeaning: 'يشتكي / يتذمر', exampleSentence: 'Tennis players complain about the noise from pickleball paddles.', unit: 5, book: 'RW' },
      { word: 'inclusive', partOfSpeech: 'adjective', definition: 'Including as many different types of people or things as possible', arabicMeaning: 'شامل / مرحب بالجميع', exampleSentence: 'Pickleball is an inclusive sport for children and seniors alike.', unit: 5, book: 'RW' },
      { word: 'physical', partOfSpeech: 'adjective', definition: 'Connected with things that you do with your body rather than mind', arabicMeaning: 'بدني / جسدي', exampleSentence: 'Football requires tremendous physical effort and endurance.', unit: 5, book: 'RW', badge: 'OPAL' },
      { word: 'benefit', partOfSpeech: 'noun', definition: 'An advantage or helpful effect that something produces', arabicMeaning: 'فائدة / ميزة', exampleSentence: 'One major benefit of VR training is reducing the risk of concussions.', unit: 5, book: 'LS', badge: 'OPAL' },
      { word: 'convenient', partOfSpeech: 'adjective', definition: 'Useful, easy, or quick to do; not causing problems', arabicMeaning: 'مريح / ملائم', exampleSentence: 'Virtual reality allows convenient practice at any time of day.', unit: 5, book: 'LS' },
      { word: 'protect', partOfSpeech: 'verb', definition: 'To keep safe from harm, injury, or damage', arabicMeaning: 'يحمي / يقِي', exampleSentence: 'Helmets protect cyclists from severe head trauma.', unit: 5, book: 'LS', badge: 'OPAL' },
      { word: 'patience', partOfSpeech: 'noun', definition: 'The ability to stay calm when waiting or dealing with difficulty', arabicMeaning: 'صبر / حلم', exampleSentence: 'Mastering falconry requires great patience and dedication.', unit: 5, book: 'LS' },
      { word: 'prefix un-', partOfSpeech: 'vocabulary skill', definition: 'Prefix added to adjectives meaning "not" (e.g., unhappy, uncommon)', arabicMeaning: 'البادئة un- (تعني: غير / ليس)', exampleSentence: 'It is uncommon for athletes to train without coaches.', unit: 5, book: 'RW' }
    ]
  },


  // ================= UNIT 6 =================
  {
    unitNumber: 6,
    themeEn: 'Business, Marketing & Psychology of Decisions',
    themeAr: 'إدارة الأعمال والتسويق وسيكولوجيا اتخاذ القرارات',
    bigQuestionEn: 'How do we make decisions? / Is choice always a good thing?',
    bigQuestionAr: 'كيف نتخذ قراراتنا؟ وهل كثرة الخيارات أمر إيجابي دائماً؟',
    rwDomain: 'Psychology & Consumer Behavior (علم النفس وسلوك المستهلك)',
    lsDomain: 'Business and Marketing (إدارة الأعمال والتسويق)',
    readingSummary: {
      unit: 6,
      reading1Title: 'Too Many Choices (خيارات أكثر من اللازم)',
      reading1TitleEn: 'Too Many Choices: The Paradox of Choice in Retail',
      reading1SummaryEn: 'The landmark 2000 jam study by Sheena Iyengar & Mark Lepper: offering 24 flavors attracted 60% of shoppers but converted only 3% into buyers. Offering 6 flavors converted 30% (tenfold increase). Excessive choice causes decision fatigue and buyer paralysis.',
      reading1SummaryAr: 'دراسة سيكولوجية شهيرة (تجربة المربى لـ Iyengar & Lepper عام 2000): عند عرض 24 نوع مربى توقف 60% من الزبائن لكن اشترى 3% فقط! بينما عند عرض 6 أنواع فقط اشترى 30% من الزبائن (عشرة أضعاف). الخلاصة: كثرة الخيارات تسبب الإجهاد العقلي (Decision Fatigue) وتدفع المستهلك إما للندم أو الإحجام عن الشراء.',
      reading1FullTextEn: `1. The Famous Gourmet Jam Experiment:
In 2000, behavioral psychologists Sheena Iyengar and Mark Lepper conducted a seminal field experiment in an upscale California supermarket. On alternate Saturdays, researchers arranged a tasting booth displaying either 24 gourmet exotic jam varieties or a simplified lineup of 6 flavors.

2. Browser Curiosity vs. Buyer Action:
The expansive 24-flavor display drew higher initial foot traffic—60% of passing shoppers stopped compared to 40% for the modest booth. However, only 3% of those examining the large display actually bought a jar. In astonishing contrast, 30% of shoppers who sampled from the 6-flavor display made a purchase—ten times the conversion rate!

3. The Burden of Decision Fatigue:
Why did fewer options produce more sales? Having too many choices overwhelms working memory, causing mental fatigue. Shoppers worry about selecting the wrong option and regretting it later, ultimately choosing not to buy anything at all.`,
      reading1FullTextAr: `١. تجربة منصة المربى الشهيرة (The Jam Study):
في عام 2000، أجرى الباحثان شينا إينغار ومارك ليبر دراسة نفسية رائدة في أحد المتاجر الراقية. في أيام السبت، عرضوا منصة تشتمل إما على 24 نكهة من المربى الفاخر، أو تشكيلة مبسطة مكونة من 6 نكهات فقط.

٢. الفضول الاستطلاعي مقابل قرار الشراء الفعلي:
جذب العرض الكبير المكون من 24 نكهة حشوداً أكبر؛ إذ توقف 60% من المارة مقارنة بـ 40% للعرض الصغير. ولكن 3% فقط من زوار العرض الضخم اشتروا علبة مربى، بينما 30% ممن تذوقوا من العرض الصغير اشتروا علبة مربى فعلياً (عشرة أضعاف نسبة الشراء)!

٣. إجهاد اتخاذ القرار والشلل الشرائي:
لماذا أدت الخيارات الأقل إلى مبيعات أكثر؟ لأن كثرة البدائل ترهق العقل وتخلق خوفاً من الندم على الاختيار الخاطئ، فيفضل المشتري مغادرة المتجر دون شراء أي شيء.`,
      reading2Title: 'Making Medical Decisions (اتخاذ القرارات الطبية)',
      reading2TitleEn: 'Making Medical Decisions: Expert Authority vs. Patient Autonomy',
      reading2SummaryEn: 'An online forum discussion posted by Sami regarding his father’s severe chronic back pain and a surgeon’s advice for immediate invasive surgery. Evaluates whether patients should defer unquestioningly to medical authorities or seek independent second opinions.',
      reading2SummaryAr: 'منشور لنقاش على الإنترنت كتبه الشاب سامي حول والده الذي يعاني من آلام في الظهر ونصحه الطبيب بإجراء جراحة عاجلة. يتساءل سامي: هل نثق بالخبير الطبي ونسلّم بقراره؟ أم نبحث عن آراء ثانية ونتحمل مسؤولية اتخاذ القرار بأنفسنا؟ تتباين آراء المعلقين بين من يرى ضرورة احترام تخصص الطبيب ومن يرى وجوب معرفة كل الخيارات.',
      reading2FullTextEn: `1. Sami’s Dilemma (Patient Discussion Forum):
"My father has suffered from chronic lower back pain for two years. Yesterday, an orthopedic surgeon recommended immediate spinal surgery. My father wants to schedule it right away, but my mother and I are worried about complications. Should we trust one doctor's verdict or consult another specialist?"

2. Dr. Helen’s Perspective:
Patients should respect medical expertise, but major surgery permanently alters anatomy. In non-emergency scenarios, seeking a second independent opinion is standard medical best practice that provides peace of mind.

3. Tariq’s Personal Experience:
When doctors suggested knee surgery for my running injury, I consulted a physical therapist first. Through six months of targeted rehabilitation exercises, my pain vanished completely without invasive surgery.

4. Shared Decision-Making:
Modern healthcare emphasizes collaboration: doctors provide clinical diagnoses and risk probabilities, while patients and families evaluate their lifestyle values before making final informed decisions.`,
      reading2FullTextAr: `١. معضلة سامي في منتدى الاستشارات:
"يعاني والدي من آلام مزمنة في الظهر منذ عامين. أوصى جراح عظام بإجراء عملية جراحية عاجلة في العمود الفقري. والدي يريد الموافقة فوراً ثقةً بالطبيب، بينما نشعر أنا وأمي بالقلق الشديد من مضاعفاتها. هل يجب أن نثق بالطبيب أم نبحث عن رأي ثانٍ؟"

٢. رأي الدكتورة هيلين:
يجب احترام خبرة الأطباء، ولكن الجراحات الكبرى خيار لا رجعة فيه. وفي الحالات غير الطارئة، يُعد أخذ رأي استشاري ثانٍ إجراءً طبياً طبيعياً وموصى به لمنح المريض وعائلته الاطمئنان.

٣. تجربة طارق:
عندما نصحني الأطباء بجراحة للركبة بسبب إصابة رياضية، استشرت أخصائي علاج طبيعي أولاً، وخلال ستة أشهر من التمارين المستمرة اختفى الألم تماماً وتجنبت الجراحة.

٤. اتخاذ القرار المشترك (Shared Decision):
الطب الحديث يرتكز على الشراكة؛ فالطبيب يشخص الحالة ويشرح الاحتمالات، بينما يزن المريض وعائلته المخاطر والبدائل قبل اتخاذ القرار النهائي.`,
      targetSkillTitle: 'Identifying Pronoun Referents (تحديد المرجع الذي يعود عليه الضمير)',
      targetSkillAr: 'استراتيجية معرفة الاسم السابق (Antecedent) الذي يشير إليه الضمير (subject pronoun: he, she, it, they / object pronoun: him, her, it, them). يجب أن يتطابق الضمير مع الاسم في العدد والنوع والسياق المنطقي.',
      keyTakeaways: [
        'الدماغ البشري يستهلك نفس الطاقة لاتخاذ قرار بسيط مقارنة بقرار مصيري عندما تكون الخيارات معقدة.',
        'الشركات الذكية تقلل عدد الخيارات لمساعدة العملاء على اتخاذ قرار سريع وسعيد.',
        'الضمائر (it, they, them) تعود على أسماء محددة سابقة لتجنب التكرار في النص.',
        'في القرارات الطبية، الثقة المتبادلة بين المريض والطبيب عنصر جوهري لنجاح العلاج.'
      ]
    },
    listeningSpeakingSummary: {
      unit: 6,
      listening1Title: 'Marketing Strategy (استراتيجية التسويق الحديثة)',
      listening1SummaryAr: 'محاضرة جامعية في التسويق تتناول دور وسائل التواصل والمؤثرين المصغرين (Micro-influencers) الذين يملكون متابعين متفاعلين في مجالات متخصصة. الشركات تستعين بهم لأن الناس يثقون في توصيات الأشخاص العاديين أكثر من المشاهير الكبار أو الإعلانات التقليدية.',
      listening2Title: 'How Stores Influence Customers (كيف تؤثر المتاجر على الزبائن؟)',
      listening2SummaryAr: 'تقرير تلفزيوني يستكشف الحيل التسويقية التي تستخدمها متاجر السوبرماركت لجعل الزبائن ينفقون أموالاً أكثر: وضع السلع الأساسية (الحليب والخبز) في أقصى الخلف لإجبار الزبون على المرور بجميع الممرات، رائحة المخبوزات لجعل الناس يشعرون بالجوع، وضع المنتجات الأغلى على الرفوف بمستوى العين، عروض التخفيضات في مواسم الأعياد ورمضان.',
      pronunciationRule: {
        title: 'Linking Consonants to Vowels (وصل الحرف الساكن بحرف العلة التالي)',
        explanationAr: 'عندما تنتهي كلمة بحرف ساكن وتبدأ الكلمة التي تليها بحرف علة، يربط المتحدث الصوتين معاً كأنهما كلمة واحدة لسلاسة الكلام السريع.',
        examples: [
          'millions of -> million-zof',
          'report about -> repor-tabout',
          'have a lot of -> ha-va-lo-tof',
          'fake account -> fay-kaccount'
        ]
      },
      speakingSkill: {
        title: 'Sourcing Information (إسناد المعلومات لمصادرها الموثوقة)',
        explanationAr: 'عند تقديم نتائج استبيان أو بحث صفي، يجب الإشارة لمصدر الأرقام بعبارات رسمية موثوقة.',
        keyPhrases: [
          { phrase: 'According to the survey / article,...', useCase: 'لبدء الجملة بالإسناد لمصدر موثوق' },
          { phrase: 'The survey found that [X%]...', useCase: 'لعرض النتيجة الرئيسية للاستبيان' },
          { phrase: 'The results showed that...', useCase: 'لعرض إحصائيات المقارنة' },
          { phrase: 'More than half of the students answered...', useCase: 'للتعبير عن النسب والكسور بدقة' }
        ]
      },
      noteTakingSkill: {
        title: 'Using Abbreviations and Symbols (استخدام الاختصارات والرموز)',
        explanationAr: 'تدوين الملاحظات بسرعة عبر إهمال حروف العلة أو كتابة بدايات الكلمات واستخدام الرموز الرياضية.',
        tips: [
          'b/c = because | w/ = with | w/o = without | info = information',
          'prod = product | bus = business | ppl = people | govt = government',
          '+ = and | > = more than | < = less than | % = percent | ↑ = increase | ↓ = decrease'
        ]
      }
    },
    grammarRules: [
      {
        id: 'u6-g1',
        unit: 6,
        titleEn: 'Conjunctions "and" and "but"',
        titleAr: 'حروف العطف: and (للإضافة) و but (للتناقض والتعارض)',
        ruleExplanationAr: 'نستخدم and لربط فكرتين متوافقتين أو إضافة معلومة جديدة. ونستخدم but للربط بين فكرتين متناقضتين أو غير متوقعتين. نضع فاصلة قبل but عندما تربط بين جملتين كاملتين (Independent clauses).',
        ruleExplanationEn: 'Use and to connect two similar ideas. Use but to connect two opposite or contrasting ideas. A comma precedes but when connecting two full clauses.',
        formula: '[Clause 1] , and [Clause 2]   |   [Clause 1] , but [Clause 2]',
        examples: [
          { en: 'Marketing experts study human behavior, and they know what makes people buy.', ar: 'يدرس خبراء التسويق السلوك البشري، وهم يعرفون ما الذي يجعل الناس يشترون. (إضافة = and)' },
          { en: 'Stores offer bargains, but bargains are not the only way stores influence us.', ar: 'تقدم المتاجر صفقات رابحة، لكن الصفقات ليست الطريقة الوحيدة التي تؤثر بها المتاجر علينا. (تناقض = but)' },
          { en: 'About 75% of people shop online, but millions still prefer physical stores.', ar: 'حوالي 75% من الناس يتسوقون عبر الإنترنت، لكن الملايين ما زالوا يفضلون المتاجر التقليدية.' }
        ],
        commonMistakes: [
          { wrong: 'I like shopping online, and I don\'t have a credit card.', correct: 'I like shopping online, but I don\'t have a credit card.', explanationAr: 'الفكرتان متناقضتان (يحب التسوق لكن ليس لديه بطاقة)، لذا يجب استخدام but وليس and.' }
        ]
      },
      {
        id: 'u6-g2',
        unit: 6,
        titleEn: 'Infinitives of Purpose (to / in order to)',
        titleAr: 'صيغ بيان الهدف والغرض: to + مصدر و in order to + مصدر',
        ruleExplanationAr: 'لبيان الهدف والغاية من فعل شيء ما، نستخدم صيغة المصدر (to + base verb) أو الصيغة الأكثر رسمية (in order to + base verb). عند النفي نستخدم حصراً (in order not to + base verb).',
        ruleExplanationEn: 'An infinitive of purpose explains why someone does something. In order to is more formal. The negative is in order not to + verb.',
        formula: 'Subject + Verb + [to + base verb]  OR  Subject + Verb + [in order to + base verb]  |  Negative: [in order not to + verb]',
        examples: [
          { en: 'She went to the clinic to consult a specialist.', ar: 'ذهبت إلى العيادة لاستشارة طبيب متخصص.' },
          { en: 'Supermarkets bake fresh bread in order to make shoppers feel hungry.', ar: 'تخبز المتاجر خبزاً طازجاً لكي تجعل المتسوقين يشعرون بالجوع.' },
          { en: 'Companies limit options in order not to confuse buyers.', ar: 'تقلل الشركات الخيارات لكي لا تربك المشترين. (نفي الغرض = in order not to)' }
        ],
        commonMistakes: [
          { wrong: 'He went to the store for buy milk.', correct: 'He went to the store to buy milk.', explanationAr: 'لا نستخدم for + فعل؛ لبيان الهدف نستخدم to + مصدر.' },
          { wrong: 'I wrote notes for not forgetting.', correct: 'I wrote notes in order not to forget.', explanationAr: 'النفي الصحيح للهدف هو in order not to + مصدر.' }
        ]
      }
    ],
    vocabularyList: [
      { word: 'choice', partOfSpeech: 'noun', definition: 'An act of selecting or making a decision when faced with two or more possibilities', arabicMeaning: 'اختيار / خيار متاح', exampleSentence: 'Having too much choice can cause unnecessary stress.', unit: 6, book: 'RW', badge: 'OPAL' },
      { word: 'compare', partOfSpeech: 'verb', definition: 'To estimate, measure, or note the similarity or dissimilarity between things', arabicMeaning: 'يقارن', exampleSentence: 'Smart consumers compare prices online before buying.', unit: 6, book: 'RW', badge: 'OPAL' },
      { word: 'consumer', partOfSpeech: 'noun', definition: 'A person who purchases goods and services for personal use', arabicMeaning: 'مستهلك / مشترٍ', exampleSentence: 'Consumers appreciate honest product reviews.', unit: 6, book: 'LS', badge: 'OPAL' },
      { word: 'expert', partOfSpeech: 'noun', definition: 'A person who has comprehensive and authoritative knowledge in a particular area', arabicMeaning: 'خبير متمرس', exampleSentence: 'Patients often seek the guidance of a medical expert.', unit: 6, book: 'RW', badge: 'OPAL' },
      { word: 'recommend', partOfSpeech: 'verb', definition: 'To put forward with approval as being suitable for a purpose or role', arabicMeaning: 'يوصي بـ / ينصح بـ', exampleSentence: 'I recommend consulting a second doctor before major surgery.', unit: 6, book: 'RW', badge: 'OPAL' },
      { word: 'purpose', partOfSpeech: 'noun', definition: 'The reason for which something is done or created or for which something exists', arabicMeaning: 'هدف / غاية', exampleSentence: 'The primary purpose of advertising is to persuade consumers.', unit: 6, book: 'RW', badge: 'OPAL' },
      { word: 'bargain', partOfSpeech: 'noun', definition: 'A thing bought or offered for sale more cheaply than is usual or expected', arabicMeaning: 'صفقة رابحة / سلعة مخفضة', exampleSentence: 'Shoppers look for bargains during holiday clearance sales.', unit: 6, book: 'LS' },
      { word: 'influencer', partOfSpeech: 'noun', definition: 'A person with the ability to influence potential buyers by promoting items on social media', arabicMeaning: 'مؤثر على وسائل التواصل', exampleSentence: 'A micro-influencer has a dedicated and trusted audience.', unit: 6, book: 'LS' },
      { word: 'collocation', partOfSpeech: 'vocabulary skill', definition: 'Words that frequently occur together (e.g., make a decision, solve a problem)', arabicMeaning: 'متلازمة لفظية (كلمات تأتي معاً دائماً)', exampleSentence: 'In English, we say "make a decision", never "do a decision".', unit: 6, book: 'RW' },
      { word: 'percentages & fractions', partOfSpeech: 'vocabulary skill', definition: 'Ways of expressing amounts (50% = half, 25% = a quarter, 33% = a third)', arabicMeaning: 'النسب المئوية والكسور (نصف، ثلث، ربع)', exampleSentence: 'More than two thirds of the students passed the exam.', unit: 6, book: 'LS' }
    ]
  },
  // ================= UNIT 1 (BOOK 2 - Q: SKILLS 2) =================
  {
    unitNumber: 1,
    bookTitle: 'Q: Skills for Success Book 2',
    bookBadge: 'الكتاب الثاني (Book 2)',
    themeEn: 'Communications, Media & Trends',
    themeAr: 'وسائل الإعلام والأمان الرقمي والصيحات (الكتاب الثاني)',
    bigQuestionEn: 'Can you believe what you read online? / Why do we follow trends?',
    bigQuestionAr: 'هل يمكنك تصديق ما تقرأه على الإنترنت؟ ولماذا نتبع الصيحات والترندات؟',
    rwDomain: 'Communications and Media (الاتصالات والإعلام)',
    lsDomain: 'Business and Marketing (الأعمال والتسويق)',
    readingSummary: {
      unit: 1,
      reading1Title: 'Staying Safe Online (البقاء آمناً على الإنترنت)',
      reading1TitleEn: 'Staying Safe Online',
      reading1SummaryEn: 'An essential guide on avoiding online scams, phishing, and malware, featuring real-world cases of Nora (scammed when buying a cheap luxury handbag online), Ahmed (clicked an unsafe link that infected his computer with a virus/malware), and Maria (whose identity was stolen through a fake Department of Education email). It provides practical rules: verify company URLs, never click unknown links, guard personal data, install robust antivirus programs, and use complex passwords.',
      reading1SummaryAr: 'دليل عملي حول الحماية من الاحتيال وسرقة الهوية والبرمجيات الخبيثة، مع 3 حالات واقعية: نورا (دفع ثمن حقيبة فاخرة بسعر رخيص جداً ولم تستلمها)، أحمد (ضغط على رابط حمّل برمجية خبيثة malware أبطأت جهازه)، وماريا (سُرقت هويتها عبر بريد تصيد احتيالي زعم أنه من وزارة التعليم لفتح حسابات بنكية باسمها). يقدم النص نصائح أساسية: التحقق من عنوان الموقع وهجائه، الحذر من الروابط، حماية البيانات الشخصية، استخدام برامج حماية، ووضع كلمات مرور قوية.',
      reading1FullTextEn: `1. The Internet is full of useful information. But it can also cause us problems if we aren't careful.

2. A lot of people have been fooled on the Internet, including Nora. Recently, she decided it was time to order a new handbag. When she saw one that she liked from Louis Vuitton, she went online and found a website that was selling it for a very low price. She entered her name, her address, and her credit card number. Then she waited for her handbag to arrive, but it never came. Like many others, Nora was attracted to a price that was too low to be real. She paid for something that she never received.

3. Another problem is clicking on a link that looks OK but isn't. That is what happened to Ahmed. While he was looking online, he found an interesting website about cars. But when he clicked on one of the links, a computer virus—a bad software program—was downloaded onto his computer. This kind of program is called malware. The program made his computer slow down. Sometimes his computer stopped working and he couldn't use some of the programs. The virus also sent him to strange websites when he went online.

4. Identity theft can also be an issue, as Maria found out. She received an email message that said it was from the Department of Education. The message said she needed to go online to change her contact information. She clicked on the website and entered some information. However, the website was not really from the Department of Education. Thieves used Maria's information to steal her identity and pretended to be Maria. They used her personal information to open new bank accounts in her name and buy things using her money.

5. Nora, Ahmed, and Maria all had problems staying safe online, but there are ways to keep yourself safe on the Internet. Here are a few good ideas:
• First, when you are buying something online, check to make sure that you are on the right website. Look closely at the web address. Is the name of the company spelled correctly?
• Second, be careful about clicking on links. Be very careful if the link comes to you in an email. Do you know the sender? Again, look carefully at the web address before clicking. Does the address have any spelling errors? Will it take you to the address that it says it will?
• Third, be careful about sharing your personal information online. Other people can use your personal information to try to use your identity. Only give personal information if you are sure that the website is OK.
• Next, make sure you have a strong program on your computer to protect it against viruses and malware.
• When you are shopping online, use strong passwords for all your online accounts. Don't use easy words or your name. A strong password should have at least eight letters and also include numbers and symbols. It is best not to use the same password for all your accounts. That way, if someone finds one of your passwords, they'll only be able to use it on that one account, and they won't be able to get into any other accounts.

6. Finally, remember, if it seems too good to be true, it probably is. Do you really believe that someone is going to give you a lot of money or sell you something expensive at a very low price? So be careful! Think before you click!`,
      reading1FullTextAr: `١. الإنترنت مليء بالمعلومات المفيدة، لكنه يمكن أن يسبب لنا مشاكل أيضاً إذا لم نكن حذرين.

٢. وقع الكثير من الناس ضحية للخداع على الإنترنت، ومن بينهم نورا؛ حيث رغبت في شراء حقيبة يد جديدة من ماركة لويس فيتون، ووجدت موقعاً يبيعها بسعر منخفض للغاية. أدخلت اسمها وعنوانها ورقم بطاقتها الائتمانية وانتظرت وصول الحقيبة، لكنها لم تصل أبداً. كحال الكثيرين، أغراها السعر غير المنطقي، فدفعت ثمن سلعة لم تستلمها.

٣. مشكلة أخرى شائعة هي النقر على روابط تبدو سليمة لكنها ليست كذلك؛ وهذا ما حدث لأحمد أثناء تصفحه موقعاً للسيارات. عندما ضغط على أحد الروابط، حُمّل فيروس حاسوبي خبيث (برمجية ضارة - malware) على جهازه، مما جعل الحاسوب بطيئاً جداً، وتوقف عن العمل أحياناً، وأصبح يوجهه لمواقع غريبة ومشبوهة.

٤. سرقة الهوية (Identity theft) قضية خطيرة أيضاً كما حدث لماريا؛ إذ وصلتها رسالة بريد إلكتروني زعمت أنها من وزارة التعليم تطلب تحديث بيانات الاتصال. نقرت على الرابط وأدخلت بياناتها، لكن الموقع كان مزيفاً، فاستغل اللصوص هويتها لفتح حسابات بنكية جديدة باسمها والشراء بأموالها.

٥. إليكم نصائح ذهبية للبقاء بأمان على الإنترنت:
• أولاً: عند الشراء، تأكد من أنك في الموقع الرسمي الصحيح، ودقق في هجاء اسم الشركة وعنوان الموقع (URL).
• ثانياً: كن حذراً جداً عند النقر على الروابط، خاصة تلك الواردة في رسائل البريد من مرسلين مجهولين.
• ثالثاً: احذر من مشاركة بياناتك الشخصية الحساسة إلا بعد التأكد التام من أمان وموثوقية الموقع.
• رابعاً: ثبّت برنامج حماية قوي ومحدث على جهازك ضد الفيروسات والبرمجيات الخبيثة.
• خامساً: استخدم كلمات مرور قوية ومعقدة (لا تقل عن 8 خانات وتحتوي على أرقام ورموز) ولا تستخدم نفس كلمة المرور لحسابات متعددة.

٦. وأخيراً، تذكر دائماً: إذا بدا العرض مغرياً لدرجة يصعب تصديقها، فهو على الأرجح فخ احتيالي! فكر جيداً قبل أن تنقر!`,
      reading2Title: 'Recognizing Misinformation in the Media (تمييز المعلومات المضللة في الإعلام)',
      reading2TitleEn: 'Recognizing Misinformation in the Media',
      reading2SummaryEn: 'Explains three key types of online misinformation: sensational clickbait headlines used for advertising profit, altered photos and deepfake videos, and fake news created deliberately to mislead public opinion. It outlines essential critical thinking strategies to verify online information before sharing.',
      reading2SummaryAr: 'يوضح ثلاثة أنواع رئيسية للمعلومات المضللة على الإنترنت: العناوين المثيرة (Clickbait) لجني أرباح الإعلانات، الصور ومقاطع الفيديو المزيفة، والأخبار الكاذبة المنشورة عمداً للتأثير على الرأي العام. كما يقدم استراتيجيات التفكير النقدي للتحقق من الأخبار ومصادرها قبل تصديقها أو مشاركتها.',
      reading2FullTextEn: `1. Do you believe everything you read? Of course not. But how do you know if what you read online is true? Recognizing misinformation in the media is important because not all the information we find on the Internet is true. When the information is false, it is known as "misinformation." There are many ways that people hear or see misinformation.

2. One kind of misinformation tries to get your attention so that you will click on a link on a web page to read some information. Perhaps you have seen headlines like these: "This new habit will change your life!" or "You can become stronger in one month with this new exercise program!" or even "12 secrets they don't want you to know!"

3. These headlines are made to attract your interest, but often when you do click on the link, you don't find the information you were looking for. Instead, you go to other web pages that promise to tell you something even more interesting. Many of these new pages contain advertisements, and the web pages earn money from those ads. In fact, you may never find the information you needed, no matter how many links you click.

4. Another form of misinformation uses photos and videos. Websites may show a photo saying it is from one place when it is actually from another place. Similarly, individuals might change a picture of a famous person by showing them in different clothing or with a different person. It is even possible to create fake videos that make it appear as if someone is saying something they never actually said.

5. A third type of misinformation is known as "fake news." Fake news is information that is not true, but it is presented in a way that is similar to real news. Sometimes people spread fake news on purpose to try to change people's opinions on a subject. It is important to learn to recognize when information is incorrect.

6. So, how can you know if something you read online is true? One way is to look at the source of the information. Is it from a reliable news source? Have you heard of this news organization before? Also, you can check the story by seeing if other news organizations are reporting the same information. If only one source is reporting it, there is a possibility that it may not be true.

7. One problem with misinformation is that social media platforms know what we like to see online. Social media uses this information to show us more stories that agree with what we believe. As a result, we may only see news stories on social media that agree with what we already think, so we don't see information that gives different ways of looking at the world. This can make it difficult for us to identify misinformation if it confirms what we already believe. In addition, the Internet makes it easy to create and share information on social media without careful fact-checking. Therefore, we must always be careful about information shared on social media.

8. So, how can you stop the spread of misinformation? Fortunately, there are a few things we can do. Sometimes, fake news is shared because it gives people strong feelings, such as making them feel good or angry. These emotions can make people share the news without checking to see if it is true. So be careful about news that seems too good or too bad to be true. Developing critical thinking skills and asking questions can help us tell whether information is true or not. Before believing and sharing information, take the time to look at it yourself. By recognizing misinformation, we can get a better understanding of what is really happening in the world.`,
      reading2FullTextAr: `١. هل تصدق كل ما تقرأه؟ بالطبع لا. ولكن كيف تعرف ما إذا كان ما تقرأه على الإنترنت صحيحاً؟ يُعد تمييز المعلومات المضللة في وسائل الإعلام أمراً مهماً لأن ليست كل المعلومات صحيحة.

٢. النوع الأول هو العناوين المثيرة التي تحاول جذب انتباهك لتنقر على الرابط (Clickbait)، مثل: "هذه العادة الجديدة ستغير حياتك!" أو "١٢ سراً لا يريدونك أن تعرفها!".

٣. تُصاغ هذه العناوين لجذب فضولك، ولكنك عند النقر نادراً ما تجد المعلومة الموعودة؛ بل تُوجَّه إلى صفحات مليئة بالإعلانات التجارية التي يربح أصحابها من زيارتك.

٤. النوع الثاني يستخدم الصور ومقاطع الفيديو المزيفة أو المنسوبة لأماكن وشخصيات أخرى، بل ويمكن الآن إنشاء مقاطع فيديو مزيفة تظهر أشخاصاً يقولون كلاماً لم يلفظوا به إطلاقاً.

٥. النوع الثالث هو "الأخبار الكاذبة" (Fake News)، وهي معلومات غير صحيحة تُصاغ بأسلوب يحاكي الأخبار الحقيقية بهدف التأثير عمداً على آراء الناس.

٦. كيف تتحقق؟ تحقق من مصداقية المصدر، وتأكد مما إذا كانت وكالات إخبارية موثوقة أخرى تنقل نفس الخبر.

٧. تحذر المقالة من خوارزميات وسائل التواصل الاجتماعي التي تعرض لك فقط ما يتوافق مع أفكارك المسبقة (Echo chambers)، مما يصعّب عليك اكتشاف التضليل.

٨. لا تشارك الأخبار بدافع العاطفة أو الغضب؛ بل فعل مهارات التفكير النقدي وتأكد بنفسك قبل النشر.`,
      targetSkillTitle: 'Identifying the Main Idea of a Paragraph (تحديد الفكرة الرئيسية للفقرة)',
      targetSkillAr: 'الفكرة الرئيسية هي أهم نقطة في الفقرة، وتظهر غالباً في الجملة الأولى أو الثانية (Topic sentence). ابحث عنها أولاً لتفهم النص بسرعة.',
      keyTakeaways: [
        'الفكرة الرئيسية للفقرة تتواجد غالباً في الجملة الأولى أو الثانية (Topic Sentence).',
        'الحذر من العروض الوهمية: If it seems too good to be true, it probably is.',
        'أنواع التضليل: العناوين المثيرة (Clickbait)، الصور والفيديوهات المعدلة، والأخبار الزائفة (Fake news).',
        'خطوات التحقق: فحص موثوقية المصدر، ومقارنته مع مصادر أخرى معتمدة، وتجنب المشاركة العاطفية السريعة.',
        'ترتيب الأفكار بالكلمات الإشارية (Signal Words): First, Second, Third, Also, Finally.'
      ]
    },
    listeningSpeakingSummary: {
      unit: 1,
      listening1Title: 'They Said It Was Just a Fad (قالوا إنها مجرد هبة مؤقتة - قصص الاختراعات)',
      listening1SummaryAr: 'بودكاست تعليمي يفرق بين مفهوم "الهبة المؤقتة" (Fad) التي تنتشر فجأة وتختفي سريعاً، ومفهوم "الترند أو التوجه المستمر" (Trend) الذي ينمو ويتطور في اتجاه عام. يستعرض البودكاست أمثلة تاريخية: المصباح الكهربائي لتوماس إديسون (الذي اعتبره والد جي بي مورغان والأستاذ هنري مورتون مجرد هبة فاشلة)، والدراجات الهوائية (تطورها من velocipedes الخطيرة إلى دراجات الأمان اليومية)، وألعاب السبينر (fidget spinners).',
      listening2Title: 'Can You Believe What You Read Online? & Surveying Trends',
      listening2SummaryAr: 'نقاش تعليمي حول كيفية إجراء استبيان (Survey) وسؤال الزملاء عن كيفية استجابتهم للصيحات والترندات الحديثة في التكنولوجيا والمطاعم والأزياء، ومدى ثقتهم في المحتوى الرقمي.',
      pronunciationRule: {
        title: 'Interjections and Intonation (عبارات التعجب ونغمة الصوت في المحادثة)',
        explanationAr: 'استخدام عبارات التفاعل والتعجب (Interjections) مثل: Wow!, Really?, Oh no!, Exactly! مع تنغيم صوتي مناسب (Rising or Falling Intonation) للتعبير عن الدهشة أو التعاطف أو التأكيد.',
        examples: [
          '"Wow! Did that really happen?" (نغمة صاعدة للدهشة)',
          '"Oh no, that sounds terrible!" (نغمة هابطة للتعاطف مع مشكلة)',
          '"Exactly! That is what I was thinking." (نغمة تأكيد وثقة)'
        ]
      },
      speakingSkill: {
        title: 'Drawing Attention to Main Ideas & Expressing Opinions',
        explanationAr: 'استخدام عبارات ذكية للفت انتباه المستمع لأهم النقاط وإبداء الرأي الشخصي بطريقة أكاديمية مدعمة بالأسباب.',
        keyPhrases: [
          { phrase: "The most important thing to keep in mind is...", useCase: "لفت الانتباه لأهم نقطة" },
          { phrase: "In my opinion, following every trend is risky because...", useCase: "إبداء الرأي والتعليل" },
          { phrase: "You should always check the source before sharing.", useCase: "تقديم نصيحة مؤكدة" }
        ]
      },
      noteTakingSkill: {
        title: 'Identifying Key Words (تدوين الكلمات المفتاحية والتمييز بين Fad و Trend)',
        explanationAr: 'عند تدوين الملاحظات أثناء الاستماع، ركز على الكلمات المهمة فقط (التي يكررها المتحدث، أو يعرفها، أو يشدد على نطقها) وتجاهل الكلمات الوظيفية الصغيرة مثل a, the, of.',
        tips: [
          'Fad = هبة مؤقتة وسريعة الزوال (A fad becomes popular suddenly, but does not last long)',
          'Trend = توجه عام ومستمر (A trend is the general direction in which something is developing)',
          'سجل الكلمات المفتاحية فقط (Key words) لتوفير الوقت وسرعة المتابعة'
        ]
      }
    },
    grammarRules: [
      {
        id: 'u1b2-g1',
        unit: 1,
        titleEn: 'The Imperative (صيغة الأمر والتعليمات والتحذيرات)',
        titleAr: 'صيغة الأمر: تقديم التعليمات والنصائح والتحذيرات (Be careful! / Don\'t click!)',
        ruleExplanationAr: 'نستخدم صيغة الأمر (The Imperative) لتقديم التعليمات، أو النصائح، أو الاقتراحات، أو التحذيرات. تبدأ الجملة مباشرة بالفعل الأساسي المجرد (Base form) بدون "to"، والفاعل الضمني هو دائماً (you). عند النفي نستخدم حصراً (Don\'t + base form). وللطلب المهذب نستخدم (Please)، ولتقديم اقتراح جماعي نستخدم (Let\'s + base form) ونفيها (Let\'s not + base form).',
        ruleExplanationEn: 'Use the imperative to give instructions, advice, suggestions, and warnings. Use the base form of the verb. Negative is "Don\'t + base form". Use "Please" for polite requests and "Let\'s" for suggestions.',
        formula: 'Affirmative: [Base Verb] + [Object/Complement]  |  Negative: Don\'t + [Base Verb]  |  Polite: Please + [Base Verb]  |  Suggestion: Let\'s + [Base Verb]',
        examples: [
          { en: 'Be careful when you share information about yourself online.', ar: 'كن حذراً عندما تشارك معلومات عن نفسك على الإنترنت.' },
          { en: 'Don\'t click on unknown web links; they can cause malware problems.', ar: 'لا تنقر على روابط غير معروفة؛ فقد تسبب مشاكل برمجيات خبيثة.' },
          { en: 'Please check the spelling of the website address carefully.', ar: 'يُرجى التحقق من هجاء عنوان الموقع بعناية. (طلب مهذب)' },
          { en: 'Let\'s use strong passwords for all our online accounts.', ar: 'دعونا نستخدم كلمات مرور قوية لجميع حساباتنا. (اقتراح جماعي)' },
          { en: 'Let\'s not take the bus today; let\'s walk.', ar: 'دعونا لا نركب الحافلة اليوم؛ دعونا نمشِ. (نفي الاقتراح = Let\'s not)' }
        ],
        commonMistakes: [
          { wrong: 'To check your answers before submitting.', correct: 'Check your answers before submitting.', explanationAr: 'صيغة الأمر تبدأ بالفعل المجرد مباشرة ولا نضع to قبله.' },
          { wrong: 'Looking both ways before crossing the street.', correct: 'Look both ways before crossing the street.', explanationAr: 'لا نستخدم صيغة -ing في الأمر؛ بل الفعل المجرد Look.' },
          { wrong: 'Doesn\'t click on strange links.', correct: 'Don\'t click on strange links.', explanationAr: 'نفي صيغة الأمر يكون بـ Don\'t دائماً.' }
        ]
      },
      {
        id: 'u1b2-g2',
        unit: 1,
        titleEn: 'Connecting Sentences (and, but, so, because, when, however)',
        titleAr: 'أدوات ربط الجمل: and, but, so, because, when, however',
        ruleExplanationAr: 'نربط الجمل لإظهار العلاقات المنطقية: and (للإضافة والتشابه)، but (للتعارض مع فاصلة قبلها)، so (للنتيجة مع فاصلة قبلها)، because (لبيان السبب)، when (لبيان الوقت أو الشرط)، و however (لتقديم فكرة معارضة وتأتي في بداية الجملة الثانية متبوعة بفاصلة).',
        ruleExplanationEn: 'Connect sentences: and (similar ideas), but (different info with comma), so (result with comma), because (reason), when (specific time), however (contrasting transition followed by comma).',
        formula: '[Sentence 1], but [Sentence 2]  |  [Sentence 1], so [Sentence 2]  |  [Sentence 1] because [Reason]  |  [Sentence 1]. However, [Sentence 2].',
        examples: [
          { en: 'There is a lot of useful information online, but many people are still fooled.', ar: 'هناك الكثير من المعلومات المفيدة على الإنترنت، لكن العديد من الناس ما زالوا يتعرضون للخداع. (تعارض = but)' },
          { en: 'His computer had a virus, so he took it to a repair shop.', ar: 'كان في جهازه فيروس، لذا أخذه إلى محل الإصلاح. (نتيجة = so)' },
          { en: 'Nora paid for the handbag because the price was very low.', ar: 'دفعت نورا ثمن الحقيبة لأن السعر كان منخفضاً جداً. (سبب = because)' },
          { en: 'Carlos received a call. However, he knew he didn\'t buy anything.', ar: 'تلقى كارلوس اتصالاً. ومع ذلك، كان يعلم أنه لم يشترِ أي شيء.' }
        ],
        commonMistakes: [
          { wrong: 'He was sick so, he stayed home.', correct: 'He was sick, so he stayed home.', explanationAr: 'الفاصلة توضع قبل so وليس بعدها.' },
          { wrong: 'However Carlos was smart.', correct: 'However, Carlos was smart.', explanationAr: 'كلمة However في بداية الجملة يجب أن يتبعها فاصلة.' }
        ]
      }
    ],
    vocabularyList: [
      { word: 'account', partOfSpeech: 'noun', definition: 'An arrangement that lets a person use the Internet, send email, or post on social media', arabicMeaning: 'حساب مستخدم (على موقع أو تطبيق)', exampleSentence: 'Never share the password of your university account with anyone.', unit: 1, book: 'RW', badge: 'OPAL' },
      { word: 'careful', partOfSpeech: 'adjective', definition: 'Thinking about what you are doing so that you do not have an accident or make mistakes', arabicMeaning: 'حذر / متيقظ', exampleSentence: 'Be careful when downloading files from unfamiliar sources.', unit: 1, book: 'RW' },
      { word: 'click', partOfSpeech: 'verb', definition: 'To press one of the buttons on a computer mouse or tap a link', arabicMeaning: 'ينقر / يضغط على رابط', exampleSentence: 'Think twice before you click on unexpected email attachments.', unit: 1, book: 'RW' },
      { word: 'download', partOfSpeech: 'verb', definition: 'To get a copy of information or software onto your computer, usually using the Internet', arabicMeaning: 'يُحمّل / ينزّل ملفاً', exampleSentence: 'Only download applications from verified official app stores.', unit: 1, book: 'RW' },
      { word: 'identity', partOfSpeech: 'noun', definition: 'Who or what a person or thing is', arabicMeaning: 'هوية شخصية', exampleSentence: 'Cybercriminals attempted to steal Maria\'s identity.', unit: 1, book: 'RW', badge: 'OPAL' },
      { word: 'password', partOfSpeech: 'noun', definition: 'A secret word or code that you need in order to use a computer system or account', arabicMeaning: 'كلمة مرور / كلمة سر', exampleSentence: 'A strong password contains letters, numbers, and symbols.', unit: 1, book: 'RW' },
      { word: 'pretend', partOfSpeech: 'verb', definition: 'To try to make someone believe something that is not true', arabicMeaning: 'يتظاهر بـ / ينتحل صفة', exampleSentence: 'Scammers pretend to represent government agencies.', unit: 1, book: 'RW' },
      { word: 'safe', partOfSpeech: 'adjective', definition: 'Not in danger of being hurt, damaged, or lost', arabicMeaning: 'آمن / في مأمن', exampleSentence: 'Make sure you are shopping on a safe and encrypted website.', unit: 1, book: 'RW' },
      { word: 'malware', partOfSpeech: 'noun', definition: 'Software designed to damage or gain unauthorized access to a computer system', arabicMeaning: 'برمجيات خبيثة / برامج ضارة', exampleSentence: 'Antivirus tools detect and remove malicious malware.', unit: 1, book: 'RW' },
      { word: 'fake', partOfSpeech: 'adjective', definition: 'Something that seems real but is not genuine', arabicMeaning: 'مزيف / غير حقيقي', exampleSentence: 'Critical thinking helps students spot fake news quickly.', unit: 1, book: 'RW' },
      { word: 'headline', partOfSpeech: 'noun', definition: 'The words written in big letters at the top of a news article', arabicMeaning: 'عنوان رئيسي (في خبر أو صحيفة)', exampleSentence: 'The sensational headline was written to attract online clicks.', unit: 1, book: 'RW' },
      { word: 'information', partOfSpeech: 'noun', definition: 'Facts or knowledge provided or learned about something or someone', arabicMeaning: 'معلومات / بيانات', exampleSentence: 'Verify the accuracy of information before reposting it.', unit: 1, book: 'RW', badge: 'OPAL' },
      { word: 'recognize', partOfSpeech: 'verb', definition: 'To identify someone or something from previous knowledge', arabicMeaning: 'يميز / يتعرف على', exampleSentence: 'Smart users easily recognize online phishing attempts.', unit: 1, book: 'RW', badge: 'OPAL' },
      { word: 'reliable', partOfSpeech: 'adjective', definition: 'Consistently good in quality or performance; trustworthy', arabicMeaning: 'موثوق به / يمكن الاعتماد عليه', exampleSentence: 'Always consult a reliable news agency for verified facts.', unit: 1, book: 'RW', badge: 'OPAL' },
      { word: 'social media', partOfSpeech: 'noun', definition: 'Websites and applications that enable users to create and share content', arabicMeaning: 'وسائل التواصل الاجتماعي', exampleSentence: 'Misinformation spreads rapidly across social media platforms.', unit: 1, book: 'RW' },
      { word: 'spread', partOfSpeech: 'verb', definition: 'To reach or cause to reach a larger area or more people', arabicMeaning: 'ينتشر / يشيع', exampleSentence: 'Rumors spread fast when readers share without checking.', unit: 1, book: 'RW', badge: 'OPAL' },
      { word: 'true', partOfSpeech: 'adjective', definition: 'In accordance with fact or reality; accurate', arabicMeaning: 'صحيح / حقيقي', exampleSentence: 'Is the viral news story true, or is it fabricated?', unit: 1, book: 'RW', badge: 'OPAL' },
      { word: 'word families', partOfSpeech: 'vocabulary skill', definition: 'Groups of words derived from the same root (e.g. choose/choice, connect/connection, inform/information)', arabicMeaning: 'عائلات الكلمات (الاسم والفعل من نفس الجذر)', exampleSentence: '"Choice" is the noun and "choose" is the verb.', unit: 1, book: 'RW' },
      { word: 'affordable', partOfSpeech: 'adjective', definition: 'Inexpensive and reasonably priced so that most people can buy it', arabicMeaning: 'في المتناول / بسعر معقول', exampleSentence: 'Electric lightbulbs became affordable for ordinary families.', unit: 1, book: 'LS' },
      { word: 'decline', partOfSpeech: 'verb', definition: 'To become smaller, fewer, or less; decrease', arabicMeaning: 'ينخفض / يتراجع', exampleSentence: 'Sales of old phone models decline as new ones appear.', unit: 1, book: 'LS', badge: 'OPAL' },
      { word: 'essential', partOfSpeech: 'adjective', definition: 'Completely necessary; extremely important', arabicMeaning: 'ضروري وأساسي للغاية', exampleSentence: 'Digital literacy is essential for modern university students.', unit: 1, book: 'LS', badge: 'OPAL' },
      { word: 'failure', partOfSpeech: 'noun', definition: 'Lack of success in doing or achieving something', arabicMeaning: 'فشل / إخفاق', exampleSentence: 'Critics called early bicycles a failure before safety designs.', unit: 1, book: 'LS', badge: 'OPAL' },
      { word: 'wealthy', partOfSpeech: 'adjective', definition: 'Having a great deal of money, resources, or assets', arabicMeaning: 'ثري / فاحش الثراء', exampleSentence: 'Wealthy investors supported Thomas Edison\'s electricity projects.', unit: 1, book: 'LS' },
      { word: 'fad vs trend', partOfSpeech: 'vocabulary skill', definition: 'A fad is popular suddenly but short-lived; a trend develops steadily over time', arabicMeaning: 'الفرق بين الهبة المؤقتة (Fad) والتوجه المستمر (Trend)', exampleSentence: 'Fidget spinners were a fad, whereas online shopping is a permanent trend.', unit: 1, book: 'LS' }
    ]
  }
];
