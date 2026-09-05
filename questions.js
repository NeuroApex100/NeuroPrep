var cerebrovascularQuestions = [

  {
    source: "تهران 93",
    question: "خانم 56 ساله مبتلا به دیابت و پرفشاری خون، به‌طور ناگهانی دچار همی‌پارزی راست، کاهش حس سطحی و عمقی در سمت راست و همی‌آنوبی همونیم راست شده است. محتمل‌ترین محل ضایعه کدام است؟",
    options: [
      "Middle Cerebral Artery",
      "Posterior Cerebral Artery",
      "Anterior Choroidal Artery",
      "Anterior Cerebral Artery",
      "Basilar Artery"
    ],
    correct: 2,

    diagnosis: "Anterior Choroidal Artery Syndrome",

    differentials: [
      "Middle cerebral artery infarction",
      "Posterior cerebral artery infarction",
      "Thalamic infarction",
      "Internal carotid artery disease"
    ],

    correctReason:
      "شریان Anterior Choroidal شاخه‌ای از ICA است و خون‌رسانی آن شامل posterior limb of internal capsule، optic tract و بخش‌هایی از مسیرهای حسی و حرکتی است. درگیری آن می‌تواند ترکیب مشخصی از همی‌پارزی، اختلال حسی و همی‌آنوبی همونیم ایجاد کند.",

    optionExplanations: [
      "MCA معمولاً علاوه بر ضعف، اختلالات قشری مانند aphasia یا neglect ایجاد می‌کند و الگوی این سؤال اختصاصی‌تر از یک ضایعه MCA است.",
      "PCA بیشتر با اختلال میدان بینایی و در صورت درگیری تالاموس با اختلالات حسی همراه است.",
      "پاسخ صحیح. ترکیب همی‌پارزی، همی‌هیپوستزی و همی‌آنوبی همونیم کلاسیک برای Anterior Choroidal Artery Syndrome است.",
      "ACA عمدتاً سطح داخلی فرونتال و پاریتال را تغذیه می‌کند و ضعف غالب پا ایجاد می‌کند.",
      "Basilar artery معمولاً علائم brainstem و درگیری اعصاب کرانیال ایجاد می‌کند."
    ],

    examTip:
      "Anterior choroidal syndrome را با سه‌گانه motor + sensory + visual به خاطر بسپارید.",

    examTrap:
      "وجود همی‌آنوبی به‌تنهایی نباید شما را به سمت PCA ببرد؛ ترکیب آن با همی‌پارزی شدید، سرنخ مهمی برای anterior choroidal artery است.",

    flashcardQuestion:
      "سه علامت مهم Anterior Choroidal Artery Syndrome چیست؟",

    flashcardAnswer:
      "Contralateral hemiparesis + hemisensory loss + contralateral homonymous hemianopia",

    explanation:
      "Anterior Choroidal Artery syndrome می‌تواند مسیرهای حرکتی، حسی و بینایی را همزمان درگیر کند.",

    note: "کلید طبق پاسخنامه دانشگاه: C",
    trap: "همی‌آنوبی به‌تنهایی الزاماً به معنی PCA infarction نیست.",
    reference: "Neurology / Cerebrovascular Disease"
  },


  {
    source: "Cerebrovascular Exam",
    question: "بیماری با سکته مغزی حاد همراه با سرگیجه شدید و کاهش شنوایی یک‌طرفه مراجعه کرده است. کدام شریان بیشتر مطرح است؟",
    options: [
      "PICA",
      "AICA",
      "SCA",
      "PCA",
      "ACA"
    ],
    correct: 1,

    diagnosis: "AICA infarction",

    differentials: [
      "PICA infarction",
      "Vestibular neuritis",
      "Labyrinthine ischemia",
      "Brainstem infarction"
    ],

    correctReason:
      "AICA معمولاً ساختارهای لترال پونز و مسیرهای مرتبط با سیستم وستیبولوکوکلئر را درگیر می‌کند؛ بنابراین vertigo همراه با ipsilateral hearing loss یک سرنخ مهم برای AICA infarction است.",

    optionExplanations: [
      "PICA بیشتر با lateral medullary syndrome، آتاکسی و اختلالات حسی همراه است و کاهش شنوایی برجسته‌تر به نفع AICA است.",
      "پاسخ صحیح. AICA می‌تواند هسته یا مسیر عصب VIII و ساختارهای گوش داخلی را درگیر کند.",
      "SCA بیشتر با ataxia و درگیری superior cerebellar structures همراه است.",
      "PCA بیشتر با اختلالات بینایی و تالاموس ارتباط دارد.",
      "ACA با این الگوی brainstem/vestibulocochlear تطابق ندارد."
    ],

    examTip:
      "Vertigo + ipsilateral hearing loss = به AICA فکر کنید.",

    examTrap:
      "وجود vertigo به‌تنهایی برای تشخیص PICA کافی نیست؛ hearing loss سرنخ مهمی برای AICA است.",

    flashcardQuestion:
      "کدام شریان با vertigo و unilateral hearing loss کلاسیکاً مطرح می‌شود؟",

    flashcardAnswer: "AICA",

    explanation:
      "درگیری AICA می‌تواند سیستم وستیبولوکوکلئر را گرفتار کند.",
    note: "کلید پاسخنامه: B",
    trap: "AICA را با PICA در بیمار دارای hearing loss اشتباه نکنید.",
    reference: "Cerebrovascular Disease"
  },


  {
    source: "Cerebrovascular Exam",
    question: "مرد 60 ساله دیابتی دچار کاهش حس سطحی و عمقی در نیمه راست بدن همراه با ضعف خفیف همان سمت شده است. محتمل‌ترین محل ضایعه کدام است؟",
    options: [
      "Internal capsule",
      "Pons",
      "Thalamus – thalamogeniculate territory",
      "Medulla",
      "Cerebellum"
    ],
    correct: 2,

    diagnosis: "Thalamic sensory-motor infarction",

    differentials: [
      "Internal capsule infarction",
      "Lacunar pontine infarction",
      "Brainstem lesion",
      "Cortical sensory stroke"
    ],

    correctReason:
      "درگیری همزمان حس سطحی و عمقی در نیمه بدن با ضعف خفیف می‌تواند ناشی از infarction در نواحی تالاموس باشد. Thalamogeniculate territory با هسته‌های حسی تالاموس ارتباط دارد.",

    optionExplanations: [
      "Internal capsule بیشتر ضعف خالص یا شدید حرکتی ایجاد می‌کند.",
      "Pontine lesions می‌توانند علائم حسی و حرکتی بدهند ولی الگوی سؤال بیشتر تالاموسی است.",
      "پاسخ صحیح طبق کلید دانشگاهی: Thalamogeniculate territory.",
      "Medullary lesions معمولاً علائم crossed brainstem ایجاد می‌کنند.",
      "Cerebellar lesions معمولاً اختلال حسی نیمه بدن ایجاد نمی‌کنند."
    ],

    examTip:
      "Sensory loss involving both superficial and deep sensation → thalamus را جدی بگیرید.",

    examTrap:
      "ضعف خفیف همراه با اختلال حسی را فوراً internal capsule فرض نکنید.",

    flashcardQuestion:
      "کدام ناحیه تالاموس با مسیرهای حسی مرتبط است؟",

    flashcardAnswer: "Thalamogeniculate sensory territory",

    explanation:
      "تالاموس یکی از مهم‌ترین محل‌های ایجاد pure sensory و sensory-motor stroke است.",
    note: "کلید طبق پاسخنامه دانشگاه: C",
    trap: "Pure sensory stroke را با peripheral neuropathy اشتباه نکنید.",
    reference: "Cerebrovascular Disease"
  },


  {
    source: "Cerebrovascular Exam",
    question: "کدام ژن با Cerebral Amyloid Angiopathy ارتباط دارد؟",
    options: [
      "NOTCH3",
      "APOE4",
      "HTRA1",
      "COL4A1",
      "APP"
    ],
    correct: 1,

    diagnosis: "Cerebral Amyloid Angiopathy",

    differentials: [
      "CADASIL",
      "COL4A1-related small vessel disease",
      "Hypertensive arteriopathy",
      "Hereditary amyloid angiopathy"
    ],

    correctReason:
      "APOE ε4 یکی از عوامل ژنتیکی شناخته‌شده مرتبط با تجمع amyloid در عروق مغزی و افزایش خطر cerebral amyloid angiopathy است.",

    optionExplanations: [
      "NOTCH3 به‌طور کلاسیک با CADASIL مرتبط است.",
      "پاسخ صحیح طبق کلید دانشگاهی: APOE4.",
      "HTRA1 با برخی انواع hereditary small-vessel disease مرتبط است.",
      "COL4A1 با cerebral small-vessel disease و hemorrhageهای ارثی ارتباط دارد.",
      "APP در برخی انواع hereditary cerebral amyloid angiopathy نقش دارد، اما کلید این سؤال APOE4 است."
    ],

    examTip:
      "CADASIL = NOTCH3؛ CAA = APOE ε4 association.",

    examTrap:
      "وجود APP ممکن است سؤال را گمراه‌کننده کند؛ در این سؤال کلید دانشگاهی APOE4 است.",

    flashcardQuestion:
      "مهم‌ترین ژن شناخته‌شده مرتبط با خطر CAA در جمعیت عمومی چیست؟",

    flashcardAnswer: "APOE ε4",

    explanation:
      "APOE ε4 با cerebral amyloid deposition و CAA ارتباط دارد.",
    note: "کلید طبق پاسخنامه دانشگاه: B",
    trap: "NOTCH3 را با CAA اشتباه نکنید؛ NOTCH3 = CADASIL.",
    reference: "Cerebrovascular Disease"
  },


  {
    source: "Cerebrovascular Exam",
    question: "بیماری پس از یک حمله همی‌پارزی گذرا به مدت یک ساعت بررسی می‌شود. کدام مورد کمترین ارتباط را به‌عنوان منبع احتمالی آمبولی دارد؟",
    options: [
      "قلب",
      "آئورت",
      "کاروتید",
      "MCA",
      "پلاک آترواسکلروتیک"
    ],
    correct: 3,

    diagnosis: "Embolic TIA / ischemic cerebrovascular event",

    differentials: [
      "Cardioembolic TIA",
      "Artery-to-artery embolism",
      "Large artery atherosclerosis",
      "Small vessel TIA mimic"
    ],

    correctReason:
      "MCA خود یک شریان داخل مغزی و مقصد احتمالی آمبولی است، نه یک منبع کلاسیک تولید آمبولی. منابع اصلی embolism شامل قلب، آئورت و شریان‌های بزرگ مانند carotid هستند.",

    optionExplanations: [
      "قلب یکی از مهم‌ترین منابع cardioembolism است.",
      "آئورت می‌تواند منبع atheroembolism باشد.",
      "Carotid plaque یکی از منابع مهم artery-to-artery embolism است.",
      "پاسخ صحیح طبق کلید: MCA منبع کلاسیک آمبولی نیست و بیشتر محل گیر افتادن آمبولی است.",
      "پلاک آترواسکلروتیک می‌تواند منبع embolic material باشد."
    ],

    examTip:
      "در سؤال‌های embolic source، قلب، آئورت و carotid را به‌عنوان source بشناسید.",

    examTrap:
      "محل ایجاد infarction را با منبع embolism اشتباه نکنید.",

    flashcardQuestion:
      "سه منبع مهم embolism مغزی کدام‌اند؟",

    flashcardAnswer:
      "Heart, aortic arch, and large-artery atherosclerotic plaques",

    explanation:
      "MCA بیشتر محل target/occlusion است تا منبع آمبولی.",
    note: "کلید طبق پاسخنامه دانشگاه: D",
    trap: "Source ≠ site of arterial occlusion.",
    reference: "Cerebrovascular Disease"
  },


  {
    source: "تهران 93",
    question: "خانم 50 ساله دیابتی، 6 ساعت پس از شروع سکته مغزی و با انسداد MCA مراجعه کرده است. طبق پاسخنامه دانشگاهی قدیمی، درمان انتخابی کدام است؟",
    options: [
      "Warfarin",
      "Heparin",
      "Aspirin alone",
      "Aspirin + Clopidogrel",
      "Thrombolysis"
    ],
    correct: 3,

    diagnosis: "Acute ischemic stroke – historical antiplatelet question",

    differentials: [
      "Large vessel occlusion",
      "Cardioembolic stroke",
      "Minor non-cardioembolic stroke",
      "Stroke requiring reperfusion therapy"
    ],

    correctReason:
      "کلید دانشگاهی این سؤال قدیمی گزینه D است و برای پروژه شما حفظ شده است. با این حال، درمان امروزی AIS با MCA occlusion بر اساس زمان، severity، vessel status و eligibility for IV thrombolysis/mechanical thrombectomy تعیین می‌شود.",

    optionExplanations: [
      "Warfarin درمان روتین acute ischemic stroke نیست.",
      "Heparin به‌صورت روتین برای acute ischemic stroke توصیه نمی‌شود.",
      "Aspirin در بسیاری از AISها استفاده می‌شود ولی این گزینه کلید سؤال نیست.",
      "پاسخ طبق پاسخنامه دانشگاه: Aspirin + Clopidogrel.",
      "در 6 ساعت و در صورت LVO باید eligibility برای reperfusion، به‌خصوص mechanical thrombectomy، بررسی شود؛ صرفاً گفتن thrombolysis بدون توجه به معیارها کافی نیست."
    ],

    examTip:
      "در سؤال‌های قدیمی، کلید دانشگاه را از رویکرد امروزی جدا کنید.",

    examTrap:
      "این سؤال نمونه‌ای از اختلاف سؤال قدیمی با practice امروزی است.",

    flashcardQuestion:
      "در بیمار با MCA occlusion حاد، مهم‌ترین اقدام امروزی چیست؟",

    flashcardAnswer:
      "Rapid vascular imaging and assessment for reperfusion therapy, especially mechanical thrombectomy when eligible.",

    explanation:
      "کلید دانشگاهی این سؤال قدیمی حفظ شده است؛ اما در رویکرد جدید، بیمار LVO باید سریع برای reperfusion ارزیابی شود.",

    note:
      "پاسخ طبق پاسخنامه دانشگاه: D. این سؤال با استانداردهای جدید نیازمند تفسیر مجدد است.",

    trap:
      "DAPT درمان جایگزین thrombectomy در LVO واجد شرایط نیست.",

    reference: "Tehran 93 / Modern AIS Guidelines"
  },


  {
    source: "Cerebrovascular Exam",
    question: "مرد 45 ساله با همی‌پارزی راست و dysarthria همراه با درد گردن و ptosis/miosis سمت چپ مراجعه کرده است. محتمل‌ترین تشخیص چیست؟",
    options: [
      "Vertebral artery dissection",
      "Basilar thrombosis",
      "MCA stenosis",
      "Internal carotid artery dissection",
      "PCA dissection"
    ],
    correct: 3,

    diagnosis: "Cervical internal carotid artery dissection",

    differentials: [
      "Vertebral artery dissection",
      "Carotid atherosclerosis",
      "Brainstem stroke",
      "Cavernous sinus pathology"
    ],

    correctReason:
      "Carotid dissection می‌تواند با درد گردن/سر و ipsilateral Horner syndrome به علت درگیری sympathetic fibers همراه شود و به‌دنبال thromboembolism موجب ischemic stroke شود.",

    optionExplanations: [
      "Vertebral dissection بیشتر با posterior circulation symptoms همراه است.",
      "Basilar thrombosis می‌تواند dysarthria و علائم brainstem ایجاد کند ولی neck pain + Horner به نفع dissection است.",
      "MCA stenosis معمولاً neck pain و Horner ایجاد نمی‌کند.",
      "پاسخ صحیح. Cervical ICA dissection کلاسیکاً با ipsilateral partial Horner و درد همراه است.",
      "PCA dissection علت معمول این تابلوی بالینی نیست."
    ],

    examTip:
      "Neck pain + ipsilateral Horner + ischemic stroke = carotid dissection.",

    examTrap:
      "Horner در carotid dissection معمولاً partial است؛ pupil involvement بدون anhidrosis کامل ممکن است دیده شود.",

    flashcardQuestion:
      "ترکیب neck pain، Horner syndrome و stroke به نفع چیست؟",

    flashcardAnswer: "Internal carotid artery dissection",

    explanation:
      "درد و Horner از سرنخ‌های بسیار مهم carotid dissection هستند.",
    note: "کلید طبق پاسخنامه: D",
    trap: "Vertebral dissection بیشتر posterior circulation را درگیر می‌کند.",
    reference: "Cerebrovascular Disease"
  },


  {
    source: "Cerebrovascular Exam",
    question: "خانم 28 ساله پس از فعالیت با درد و ضعف بازو و کاهش نبض براکیال مراجعه کرده است و Takayasu arteritis مطرح است. کدام درمان در پاسخنامه سؤال ذکر شده است؟",
    options: [
      "Aspirin",
      "Warfarin",
      "Prednisolone",
      "Clopidogrel",
      "Atorvastatin"
    ],
    correct: 2,

    diagnosis: "Takayasu arteritis",

    differentials: [
      "Atherosclerotic peripheral arterial disease",
      "Thoracic outlet syndrome",
      "Arterial dissection",
      "Large-vessel vasculitis"
    ],

    correctReason:
      "Takayasu یک large-vessel vasculitis است و درمان بیماری فعال بر پایه corticosteroids و در بسیاری از بیماران immunosuppressive therapy است.",

    optionExplanations: [
      "Aspirin ممکن است برای پیشگیری از vascular events استفاده شود ولی درمان اصلی التهاب فعال نیست.",
      "Warfarin درمان اصلی Takayasu نیست.",
      "پاسخ صحیح طبق کلید: Prednisolone.",
      "Clopidogrel ممکن است در شرایط خاص ضدپلاکتی استفاده شود ولی درمان بیماری زمینه‌ای نیست.",
      "Statin درمان التهاب Takayasu نیست مگر اندیکاسیون جداگانه وجود داشته باشد."
    ],

    examTip:
      "Young woman + pulseless arm + large-vessel disease = Takayasu.",

    examTrap:
      "در Takayasu ابتدا به درمان vasculitis فکر کنید، نه صرفاً درمان thrombosis.",

    flashcardQuestion:
      "درمان خط اول Takayasu فعال چیست؟",

    flashcardAnswer: "Glucocorticoids such as prednisolone",

    explanation:
      "Corticosteroids پایه درمان Takayasu فعال هستند.",
    note: "کلید طبق پاسخنامه: C",
    trap: "Atherosclerosis در یک زن جوان با pulse deficit کمتر محتمل است.",
    reference: "Cerebrovascular / Vasculitis"
  },


  {
    source: "Cerebrovascular Exam",
    question: "بیماری با خونریزی داخل مغزی در حال مصرف warfarin و INR بالا مراجعه کرده است. سریع‌ترین روش برای اصلاح اثر anticoagulation چیست؟",
    options: [
      "Fresh frozen plasma alone",
      "Platelet transfusion",
      "Prothrombin complex concentrate",
      "Aspirin",
      "Heparin"
    ],
    correct: 2,

    diagnosis: "Warfarin-associated intracerebral hemorrhage",

    differentials: [
      "Spontaneous hypertensive ICH",
      "DOAC-associated ICH",
      "Antiplatelet-associated hemorrhage",
      "Coagulopathy-related bleeding"
    ],

    correctReason:
      "در warfarin-associated ICH باید reversal فوری انجام شود. PCC به‌سرعت فاکتورهای وابسته به ویتامین K را جایگزین می‌کند و همراه با IV vitamin K استفاده می‌شود.",

    optionExplanations: [
      "FFP می‌تواند استفاده شود اما نسبت به PCC کندتر و از نظر حجم مایع بیشتر است.",
      "Platelet transfusion درمان reversal اثر warfarin نیست.",
      "پاسخ صحیح: 4-factor PCC همراه با IV vitamin K.",
      "Aspirin خونریزی را اصلاح نمی‌کند.",
      "Heparin وضعیت انعقادی را بدتر می‌کند."
    ],

    examTip:
      "Warfarin + ICH → 4-factor PCC + IV vitamin K.",

    examTrap:
      "PCC به‌تنهایی کافی نیست؛ vitamin K برای reversal پایدار لازم است.",

    flashcardQuestion:
      "در warfarin-associated ICH چه reversal درمانی انجام می‌دهیم؟",

    flashcardAnswer: "4-factor PCC + IV vitamin K",

    explanation:
      "PCC سریع‌ترین روش اصلاح INR است و vitamin K اثر پایدارتر ایجاد می‌کند.",
    note: "کلید طبق پاسخنامه: C",
    trap: "FFP انتخاب جایگزین است، نه انتخاب سریع‌تر در صورت دسترسی PCC.",
    reference: "Intracerebral Hemorrhage"
  },


  {
    source: "Cerebrovascular Exam",
    question: "در Susac syndrome کدام عبارت نادرست است؟",
    options: [
      "می‌تواند با encephalopathy همراه باشد",
      "می‌تواند branch retinal artery occlusion ایجاد کند",
      "می‌تواند hearing loss ایجاد کند",
      "CSF معمولاً pleocytosis همراه با normal protein دارد",
      "MRI مغز ممکن است corpus callosum lesions نشان دهد"
    ],
    correct: 3,

    diagnosis: "Susac syndrome",

    differentials: [
      "Multiple sclerosis",
      "ADEM",
      "CNS vasculitis",
      "MOG-associated disease"
    ],

    correctReason:
      "Susac syndrome کلاسیکاً با triad of encephalopathy, branch retinal artery occlusions و sensorineural hearing loss شناخته می‌شود. عبارت گزینه D مطابق کلید دانشگاهی نادرست در نظر گرفته شده است.",

    optionExplanations: [
      "درست؛ encephalopathy بخش اصلی triad است.",
      "درست؛ BRAO یافته مهم است.",
      "درست؛ sensorineural hearing loss کلاسیک است.",
      "طبق کلید دانشگاهی، این عبارت نادرست است؛ الگوی CSF در Susac اختصاصی نیست و می‌تواند protein elevation و گاهی سلول افزایش‌یافته داشته باشد.",
      "درست؛ corpus callosum lesions از یافته‌های MRI مهم هستند."
    ],

    examTip:
      "Susac = Brain + Eye + Ear.",

    examTrap:
      "وجود encephalopathy همراه با hearing loss و retinal vascular occlusion را با MS اشتباه نکنید.",

    flashcardQuestion:
      "سه جزء کلاسیک Susac syndrome چیست؟",

    flashcardAnswer:
      "Encephalopathy + branch retinal artery occlusion + sensorineural hearing loss",

    explanation:
      "Susac یک autoimmune microangiopathy است.",
    note: "کلید طبق پاسخنامه دانشگاه: D",
    trap: "CSF یافته اختصاصی تشخیصی Susac نیست.",
    reference: "Neuroimmunology / Cerebrovascular"
  },


  {
    source: "Cerebrovascular Exam",
    question: "در CADASIL، کدام یافته MRI نادرست است؟",
    options: [
      "White matter hyperintensities",
      "درگیری external capsule",
      "درگیری نواحی posterior temporal horn",
      "درگیری anterior temporal poles",
      "Lacunar infarcts"
    ],
    correct: 2,

    diagnosis: "CADASIL",

    differentials: [
      "Sporadic small-vessel ischemic disease",
      "CARASIL",
      "COL4A1 disease",
      "Multiple sclerosis"
    ],

    correctReason:
      "در CADASIL درگیری anterior temporal poles و external capsule از سرنخ‌های بسیار مهم MRI هستند. طبق کلید دانشگاهی، عبارت گزینه C نادرست در نظر گرفته شده است.",

    optionExplanations: [
      "درست؛ white matter lesions شایع‌اند.",
      "درست؛ external capsule از محل‌های تیپیک است.",
      "طبق کلید دانشگاهی نادرست.",
      "درست؛ anterior temporal pole involvement سرنخ بسیار مهم CADASIL است.",
      "درست؛ lacunes نیز شایع هستند."
    ],

    examTip:
      "CADASIL MRI = anterior temporal poles + external capsule.",

    examTrap:
      "وجود temporal lesion را با MS اشتباه نکنید؛ anterior temporal pole involvement بسیار به نفع CADASIL است.",

    flashcardQuestion:
      "دو محل بسیار تیپیک MRI در CADASIL کدام‌اند؟",

    flashcardAnswer: "Anterior temporal poles and external capsule",

    explanation:
      "CADASIL ناشی از جهش NOTCH3 است و الگوی MRI مشخصی دارد.",
    note: "کلید طبق پاسخنامه دانشگاه: C",
    trap: "NOTCH3 chromosome 19 = CADASIL.",
    reference: "CADASIL"
  },


  {
    source: "Cerebrovascular Exam",
    question: "مرد 75 ساله با TIA شامل aphasia و همی‌پارزی راست به مدت 15 دقیقه، دارای stenosis علامت‌دار 75 درصدی ICA چپ است. در صورت خطر جراحی مناسب، بهترین اقدام چیست؟",
    options: [
      "Medical therapy only",
      "Carotid endarterectomy",
      "Carotid stenting in all cases",
      "Warfarin",
      "No treatment"
    ],
    correct: 1,

    diagnosis: "Symptomatic severe carotid stenosis",

    differentials: [
      "Cardioembolic TIA",
      "Intracranial stenosis",
      "Carotid dissection",
      "Small-vessel TIA"
    ],

    correctReason:
      "در symptomatic carotid stenosis شدید، به‌خصوص 70–99%، carotid endarterectomy در بیمار مناسب از درمان‌های مهم پیشگیری ثانویه است.",

    optionExplanations: [
      "Medical therapy ضروری است ولی در symptomatic severe stenosis به‌تنهایی کافی نیست اگر بیمار کاندید CEA باشد.",
      "پاسخ صحیح: Carotid endarterectomy.",
      "Stenting برای همه بیماران انتخاب اول نیست و به سن و anatomy و surgical risk وابسته است.",
      "Warfarin درمان روتین atherosclerotic carotid stenosis نیست.",
      "عدم درمان صحیح نیست."
    ],

    examTip:
      "Symptomatic 70–99% ICA stenosis → CEA اگر surgical risk قابل قبول باشد.",

    examTrap:
      "Symptomatic بودن stenosis از درصد stenosis مهم است.",

    flashcardQuestion:
      "در symptomatic ICA stenosis شدید، درمان revascularization اصلی چیست؟",

    flashcardAnswer: "Carotid endarterectomy in appropriate surgical candidates",

    explanation:
      "CEA در symptomatic severe carotid stenosis نقش مهمی در کاهش recurrent stroke دارد.",
    note: "کلید طبق پاسخنامه: B",
    trap: "CEA و CAS را یکسان فرض نکنید.",
    reference: "Carotid Disease"
  },


  {
    source: "Cerebrovascular Exam",
    question: "کدام یافته در cavernous malformation نادرست است؟",
    options: [
      "ممکن است با خونریزی همراه باشد",
      "MRI حساس‌ترین روش تشخیص است",
      "معمولاً به صورت popcorn یا mulberry دیده می‌شود",
      "معمولاً جریان خون بسیار سریع دارد",
      "ممکن است multiple lesions وجود داشته باشد"
    ],
    correct: 2,

    diagnosis: "Cerebral cavernous malformation",

    differentials: [
      "Arteriovenous malformation",
      "Capillary telangiectasia",
      "Hemorrhagic metastasis",
      "Hypertensive microbleeds"
    ],

    correctReason:
      "Cavernous malformations low-flow vascular lesions هستند و در MRI اغلب ظاهر popcorn/mulberry همراه با hemosiderin rim دارند.",

    optionExplanations: [
      "درست؛ bleeding می‌تواند رخ دهد.",
      "درست؛ MRI روش بسیار حساس است.",
      "درست؛ popcorn/mulberry appearance کلاسیک است.",
      "طبق کلید دانشگاهی نادرست؛ cavernoma یک low-flow lesion است و high-flow نیست.",
      "درست؛ به‌خصوص در familial forms متعدد بودن ممکن است."
    ],

    examTip:
      "Cavernoma = popcorn/mulberry + hemosiderin rim + low flow.",

    examTrap:
      "Cavernoma را با AVM که high-flow است اشتباه نکنید.",

    flashcardQuestion:
      "ظاهر کلاسیک cavernous malformation در MRI چیست؟",

    flashcardAnswer: "Popcorn/mulberry lesion with hemosiderin rim",

    explanation:
      "محصولات مختلف خونریزی در سنین متفاوت باعث ظاهر مختلط signal می‌شوند.",
    note: "کلید طبق پاسخنامه دانشگاه: C",
    trap: "Cavernoma = low-flow.",
    reference: "Cerebrovascular Malformations"
  },


  {
    source: "Cerebrovascular Exam",
    question: "کدام محل در MRI بیشترین ارزش تشخیصی برای CADASIL دارد؟",
    options: [
      "Occipital cortex",
      "Brainstem only",
      "Basal ganglia only",
      "Anterior temporal poles",
      "Cerebellar cortex"
    ],
    correct: 3,

    diagnosis: "CADASIL",

    differentials: [
      "MS",
      "Small vessel ischemic disease",
      "CARASIL",
      "Mitochondrial disease"
    ],

    correctReason:
      "Anterior temporal pole involvement یکی از مشخص‌ترین MRI clues در CADASIL است.",

    optionExplanations: [
      "Occipital involvement اختصاصی نیست.",
      "Brainstem involvement ممکن است دیده شود ولی اختصاصی نیست.",
      "Basal ganglia lacunes شایع‌اند اما اختصاصی نیستند.",
      "پاسخ صحیح؛ anterior temporal poles.",
      "Cerebellar cortex محل کلاسیک CADASIL نیست."
    ],

    examTip:
      "Anterior temporal poles را در CADASIL فراموش نکنید.",

    examTrap:
      "Temporal pole با temporal lobe lesions شایع MS یکسان نیست.",

    flashcardQuestion:
      "Most characteristic MRI location in CADASIL?",
    flashcardAnswer: "Anterior temporal poles",

    explanation:
      "درگیری anterior temporal poles و external capsule سرنخ‌های مهم CADASIL هستند.",
    note: "کلید طبق پاسخنامه: D",
    trap: "Anterior temporal poles = CADASIL.",
    reference: "CADASIL"
  },


  {
    source: "Cerebrovascular Exam",
    question: "در vertebral artery dissection کدام یافته معمولاً انتظار نمی‌رود؟",
    options: [
      "Neck pain",
      "Vertigo",
      "Ataxia",
      "Anterior ischemic optic neuropathy",
      "Posterior circulation ischemia"
    ],
    correct: 3,

    diagnosis: "Vertebral artery dissection",

    differentials: [
      "Carotid dissection",
      "PICA infarction",
      "AICA infarction",
      "Vestibular disorder"
    ],

    correctReason:
      "Vertebral dissection عمدتاً posterior circulation را درگیر می‌کند و neck pain، headache، vertigo و brainstem/cerebellar ischemia ایجاد می‌کند. AION یافته تیپیک آن نیست.",

    optionExplanations: [
      "Neck pain شایع است.",
      "Vertigo می‌تواند وجود داشته باشد.",
      "Ataxia ممکن است ناشی از cerebellar/brainstem ischemia باشد.",
      "پاسخ صحیح طبق کلید: AION یافته تیپیک vertebral dissection نیست.",
      "Posterior circulation ischemia از عوارض مهم است."
    ],

    examTip:
      "Vertebral dissection → posterior circulation.",

    examTrap:
      "وجود vertigo بدون بررسی vascular causes می‌تواند باعث missed dissection شود.",

    flashcardQuestion:
      "Vertebral artery dissection بیشتر کدام circulation را درگیر می‌کند؟",

    flashcardAnswer: "Posterior circulation",

    explanation:
      "Dissection vertebral می‌تواند embolize کند یا موجب occlusion posterior circulation شود.",
    note: "کلید طبق پاسخنامه: D",
    trap: "AION را به‌عنوان یافته کلاسیک vertebral dissection حفظ نکنید.",
    reference: "Cervical Artery Dissection"
  },


  {
    source: "Cerebrovascular Exam",
    question: "کدام ویژگی به نفع carotid dissection نسبت به atherosclerotic carotid stenosis است؟",
    options: [
      "سن بالا",
      "وجود plaque کلسیفیه",
      "وجود ریسک‌فاکتورهای متعدد vascular",
      "درد گردن و ارتباط با دیواره شریان در ناحیه cervical",
      "وجود isolated bruit"
    ],
    correct: 3,

    diagnosis: "Carotid artery dissection",

    differentials: [
      "Atherosclerotic carotid stenosis",
      "Fibromuscular dysplasia",
      "Vasculitis",
      "Carotid thrombosis"
    ],

    correctReason:
      "Carotid dissection معمولاً در cervical portion رخ می‌دهد و با neck/head pain، Horner syndrome و ischemic symptoms همراه می‌شود.",

    optionExplanations: [
      "سن بالا بیشتر به نفع atherosclerosis است.",
      "Calcified plaque به نفع atherosclerosis است.",
      "Multiple vascular risk factors بیشتر به نفع atherosclerosis است.",
      "پاسخ صحیح؛ cervical location و درد سرنخ مهم dissection هستند.",
      "Bruit به‌تنهایی اختصاصی نیست."
    ],

    examTip:
      "Young patient + neck pain + stroke = dissection until proven otherwise.",

    examTrap:
      "Bruit اختصاصی carotid atherosclerosis نیست.",

    flashcardQuestion:
      "دو سرنخ مهم carotid dissection چیست؟",
    flashcardAnswer: "Neck/head pain and cervical arterial involvement",
    explanation: "Carotid dissection معمولاً در cervical ICA ایجاد می‌شود.",
    note: "کلید طبق پاسخنامه: D",
    trap: "Bruit به‌تنهایی تشخیص را ثابت نمی‌کند.",
    reference: "Cervical Artery Dissection"
  },


  {
    source: "Cerebrovascular Exam",
    question: "در Top of the Basilar syndrome کدام علامت کمتر انتظار می‌رود؟",
    options: [
      "Monocular blindness",
      "Altered consciousness",
      "Oculomotor abnormalities",
      "Visual disturbances",
      "Thalamic manifestations"
    ],
    correct: 0,

    diagnosis: "Top of the basilar syndrome",

    differentials: [
      "PCA infarction",
      "Midbrain infarction",
      "Thalamic infarction",
      "Basilar artery occlusion"
    ],

    correctReason:
      "Top of basilar syndrome ساختارهای rostral brainstem، thalami و posterior cerebral territories را درگیر می‌کند. Monocular blindness یک علامت cortical/posterior circulation کلاسیک برای این syndrome نیست و بیشتر به retinal/ophthalmic circulation مربوط است.",

    optionExplanations: [
      "پاسخ صحیح طبق کلید؛ monocular blindness معمولاً ناشی از retinal/optic pathway anterior to chiasm است.",
      "Altered consciousness ممکن است درگیری thalamus/brainstem را نشان دهد.",
      "Oculomotor abnormalities بسیار مهم‌اند.",
      "Visual disturbances شایع‌اند.",
      "Thalamic manifestations ممکن است وجود داشته باشند."
    ],

    examTip:
      "Top of basilar = midbrain + thalamus + PCA territory.",

    examTrap:
      "Monocular و homonymous visual loss را از هم جدا کنید.",

    flashcardQuestion:
      "Top of basilar syndrome عمدتاً چه نواحی را درگیر می‌کند؟",
    flashcardAnswer: "Rostral midbrain, thalami and posterior cerebral territories",
    explanation: "علائم چشمی، هوشیاری و visual disturbances ممکن است دیده شوند.",
    note: "کلید طبق پاسخنامه: A",
    trap: "Monocular blindness ≠ typical top-of-basilar visual deficit.",
    reference: "Posterior Circulation"
  },


  {
    source: "Cerebrovascular Exam",
    question: "در بیمار دارای carotid bruit کدام عبارت صحیح‌تر است؟",
    options: [
      "هر bruit الزاماً به معنی ICA stenosis شدید است",
      "Bruit فقط در carotid atherosclerosis دیده می‌شود",
      "وجود bruit تشخیص stenosis را قطعی می‌کند",
      "Bruit ممکن است حتی در external carotid stenosis نیز ایجاد شود",
      "Bruit همیشه با stroke همراه است"
    ],
    correct: 3,

    diagnosis: "Carotid bruit",

    differentials: [
      "Carotid stenosis",
      "External carotid disease",
      "Turbulent flow",
      "Transmitted cardiac murmur"
    ],

    correctReason:
      "Carotid bruit ناشی از turbulent flow است و الزاماً به معنی severe ICA stenosis نیست. طبق کلید دانشگاهی، می‌تواند در external carotid disease نیز شنیده شود.",

    optionExplanations: [
      "شدت bruit الزاماً با شدت stenosis متناسب نیست.",
      "Bruit فقط در یک علت ایجاد نمی‌شود.",
      "برای تشخیص stenosis باید imaging انجام شود.",
      "پاسخ صحیح طبق کلید.",
      "بسیاری از بیماران بدون stroke نیز bruit دارند."
    ],

    examTip:
      "Bruit = turbulent flow، نه تشخیص قطعی stenosis.",

    examTrap:
      "شدت bruit با درصد stenosis رابطه خطی ندارد.",

    flashcardQuestion:
      "آیا carotid bruit به‌تنهایی severe ICA stenosis را ثابت می‌کند؟",
    flashcardAnswer: "No.",
    explanation: "Bruit فقط وجود turbulent flow را مطرح می‌کند.",
    note: "کلید طبق پاسخنامه: D",
    trap: "برای تشخیص severity به duplex/CTA/MRA نیاز است.",
    reference: "Carotid Disease"
  },


  {
    source: "Cerebrovascular Exam",
    question: "حداقل میزان stenosis کاروتید بدون علامت که در پاسخنامه قدیمی سؤال برای CEA مطرح شده است کدام است؟",
    options: [
      "30%",
      "40%",
      "50%",
      "70%",
      "90%"
    ],
    correct: 3,

    diagnosis: "Asymptomatic carotid stenosis",

    differentials: [
      "Symptomatic carotid stenosis",
      "Carotid dissection",
      "Intracranial stenosis",
      "Carotid occlusion"
    ],

    correctReason:
      "کلید دانشگاهی این سؤال D یعنی 70% است. در عمل امروزی تصمیم برای intervention در asymptomatic stenosis فقط بر اساس درصد stenosis نیست و باید life expectancy، surgical risk، plaque characteristics و best medical therapy نیز در نظر گرفته شود.",

    optionExplanations: [
      "30% معمولاً اندیکاسیون CEA نیست.",
      "40% معمولاً اندیکاسیون CEA نیست.",
      "50% به‌تنهایی در asymptomatic disease معمولاً اندیکاسیون کلاسیک CEA نیست.",
      "پاسخ طبق کلید دانشگاهی: 70%.",
      "90% ممکن است severe باشد ولی سؤال حداقل threshold را می‌پرسد."
    ],

    examTip:
      "در سؤال‌های قدیمی: asymptomatic severe carotid stenosis معمولاً با threshold حدود 70% مطرح می‌شود.",

    examTrap:
      "Symptomatic و asymptomatic thresholds را با هم مخلوط نکنید.",

    flashcardQuestion:
      "Threshold کلاسیک مطرح‌شده در سؤالات قدیمی برای asymptomatic carotid stenosis چیست؟",
    flashcardAnswer: "70%",
    explanation: "این پاسخ مطابق کلید دانشگاهی قدیمی است؛ تصمیم امروزی چندعاملی است.",
    note: "کلید طبق پاسخنامه دانشگاه: D. رویکرد امروزی صرفاً بر درصد stenosis متکی نیست.",
    trap: "سن، life expectancy و perioperative risk مهم‌اند.",
    reference: "Carotid Disease"
  },


  {
    source: "Cerebrovascular Exam",
    question: "در کدام وضعیت، anticoagulation با warfarin از نظر پیشگیری از stroke اهمیت بیشتری دارد؟",
    options: [
      "Atherosclerotic carotid stenosis",
      "Lacunar infarction",
      "Small vessel disease",
      "Transient ischemic attack بدون منبع مشخص",
      "Atrial fibrillation"
    ],
    correct: 4,

    diagnosis: "Cardioembolic stroke prevention in atrial fibrillation",

    differentials: [
      "Non-cardioembolic stroke",
      "Large artery atherosclerosis",
      "Lacunar stroke",
      "Carotid stenosis"
    ],

    correctReason:
      "Atrial fibrillation یک منبع مهم cardioembolism است و anticoagulation برای پیشگیری از thromboembolic stroke نقش اصلی دارد.",

    optionExplanations: [
      "Atherosclerotic carotid disease عمدتاً با antiplatelet و vascular risk reduction درمان می‌شود.",
      "Lacunar infarction معمولاً antiplatelet-based secondary prevention دارد.",
      "Small vessel disease اندیکاسیون معمول warfarin نیست.",
      "TIA بدون منبع مشخص الزاماً اندیکاسیون warfarin ندارد.",
      "پاسخ صحیح: atrial fibrillation."
    ],

    examTip:
      "AF = cardioembolic risk → anticoagulation.",

    examTrap:
      "Antiplatelet و anticoagulant را بر اساس mechanism stroke انتخاب کنید.",

    flashcardQuestion:
      "مهم‌ترین اندیکاسیون کلاسیک anticoagulation برای secondary prevention stroke چیست؟",
    flashcardAnswer: "Atrial fibrillation with thromboembolic risk",
    explanation: "AF از مهم‌ترین منابع cardioembolism است.",
    note: "کلید طبق پاسخنامه: E",
    trap: "Non-cardioembolic stroke معمولاً antiplatelet می‌خواهد.",
    reference: "Stroke Prevention"
  },


  {
    source: "Cerebrovascular Exam",
    question: "بیمار 25 ساله با vertigo حاد و nystagmus دوطرفه مراجعه کرده و احتمال vertebral artery dissection مطرح است. در ارزیابی اولیه کدام روش تصویربرداری می‌تواند کمک‌کننده باشد؟",
    options: [
      "Plain skull X-ray",
      "Neck vascular Doppler",
      "EEG",
      "EMG",
      "Bone scan"
    ],
    correct: 1,

    diagnosis: "Possible vertebral artery dissection",

    differentials: [
      "Peripheral vestibulopathy",
      "Posterior circulation stroke",
      "Vertebral dissection",
      "Vestibular migraine"
    ],

    correctReason:
      "در شک به cervical artery dissection باید vascular imaging انجام شود. Doppler ممکن است کمک‌کننده باشد، گرچه CTA یا MRA در بسیاری از موارد ارزیابی دقیق‌تری ارائه می‌دهند.",

    optionExplanations: [
      "Plain X-ray vascular dissection را تشخیص نمی‌دهد.",
      "پاسخ طبق کلید دانشگاهی: neck vascular Doppler.",
      "EEG برای dissection نیست.",
      "EMG برای ارزیابی عصب محیطی/عضله است.",
      "Bone scan ارتباطی ندارد."
    ],

    examTip:
      "در شک به dissection به vascular imaging فکر کنید.",

    examTrap:
      "Normal Doppler به‌تنهایی dissection را کاملاً رد نمی‌کند.",

    flashcardQuestion:
      "برای بررسی vertebral artery dissection چه نوع imaging لازم است؟",
    flashcardAnswer: "Vascular imaging such as CTA/MRA; Doppler may be supportive.",
    explanation:
      "CTA/MRA معمولاً برای بررسی دقیق‌تر cervical arterial dissection استفاده می‌شوند.",
    note: "کلید طبق پاسخنامه: B",
    trap: "Doppler منفی الزاماً dissection را رد نمی‌کند.",
    reference: "Cervical Artery Dissection"
  },


  {
    source: "Cerebrovascular Exam",
    question: "در internal carotid artery dissection کدام یافته تصویربرداری ممکن است با فراوانی کمتری دیده شود؟",
    options: [
      "Double lumen",
      "Intimal flap",
      "Mural hematoma",
      "Irregular arterial contour",
      "Pseudoaneurysm"
    ],
    correct: 0,

    diagnosis: "Internal carotid artery dissection",

    differentials: [
      "Atherosclerotic stenosis",
      "Fibromuscular dysplasia",
      "Vasculitis",
      "Arterial thrombosis"
    ],

    correctReason:
      "Double lumen می‌تواند در dissection دیده شود ولی حساسیت آن محدود است؛ mural hematoma و سایر indirect signs ممکن است بیشتر کمک‌کننده باشند.",

    optionExplanations: [
      "طبق کلید دانشگاهی، double lumen کم‌فراوان‌تر/کم‌حساس‌تر است.",
      "Intimal flap یکی از نشانه‌های مستقیم dissection است.",
      "Mural hematoma از یافته‌های مهم است.",
      "Irregular contour می‌تواند دیده شود.",
      "Pseudoaneurysm از عوارض احتمالی است."
    ],

    examTip:
      "عدم مشاهده double lumen، dissection را رد نمی‌کند.",

    examTrap:
      "به دنبال mural hematoma و intimal flap باشید.",

    flashcardQuestion:
      "چرا double lumen برای رد یا اثبات carotid dissection کافی نیست؟",
    flashcardAnswer: "Because its sensitivity is limited; mural hematoma and other signs may be more useful.",
    explanation:
      "ظاهر مستقیم double lumen همیشه دیده نمی‌شود.",
    note: "کلید طبق پاسخنامه: A",
    trap: "Negative finding does not exclude dissection.",
    reference: "Cervical Artery Dissection"
  },


  {
    source: "Cerebrovascular Exam",
    question: "کدام مورد از عوامل مرتبط با malignant MCA infarction نیست؟",
    options: [
      "Large infarct volume",
      "Severe neurological deficit",
      "Edema",
      "Herniation / severe midbrain pressure",
      "Young age"
    ],
    correct: 3,

    diagnosis: "Malignant MCA infarction",

    differentials: [
      "Large hemispheric infarction",
      "Cerebellar malignant infarction",
      "Intracranial hemorrhage",
      "Brain edema"
    ],

    correctReason:
      "طبق کلید دانشگاهی، گزینه D به‌عنوان factor اولیه مطرح‌شده در سؤال انتخاب شده است؛ herniation در واقع پیامد خطرناک edema و malignant infarction است نه یک عامل predisposition اولیه.",

    optionExplanations: [
      "Large infarct volume خطر malignant edema را افزایش می‌دهد.",
      "Severe deficit با infarct بزرگ همراه است.",
      "Cerebral edema مکانیسم اصلی deterioration است.",
      "طبق کلید، herniation/severe pressure بیشتر complication/consequence است تا factor اولیه.",
      "سن پایین‌تر یکی از عوامل مرتبط با خطر edema شدیدتر است."
    ],

    examTip:
      "Malignant MCA = large territory infarct + severe edema + herniation risk.",

    examTrap:
      "Risk factor را با complication اشتباه نکنید.",

    flashcardQuestion:
      "مهم‌ترین complication در malignant MCA infarction چیست؟",
    flashcardAnswer: "Massive cerebral edema leading to herniation",
    explanation:
      "ادم وسیع می‌تواند باعث افزایش ICP و transtentorial herniation شود.",
    note: "کلید طبق پاسخنامه: D",
    trap: "Herniation پیامد malignant edema است.",
    reference: "Large Hemispheric Infarction"
  },


  {
    source: "Cerebrovascular Exam",
    question: "بیمار پس از قرار گرفتن در معرض سرما و مصرف pseudoephedrine دچار حملات مکرر thunderclap headache شده است و MRI طبیعی است. بهترین بررسی کدام است؟",
    options: [
      "EEG",
      "Lumbar puncture فقط",
      "MRA",
      "EMG",
      "Carotid ultrasound"
    ],
    correct: 2,

    diagnosis: "Reversible cerebral vasoconstriction syndrome (RCVS)",

    differentials: [
      "Subarachnoid hemorrhage",
      "Cerebral venous thrombosis",
      "Primary thunderclap headache",
      "Cervical artery dissection"
    ],

    correctReason:
      "Recurrent thunderclap headaches همراه با exposure به vasoactive drugs مانند sympathomimetics و MRI اولیه طبیعی، RCVS را مطرح می‌کند. MRA/CTA برای بررسی cerebral vasoconstriction کمک‌کننده است.",

    optionExplanations: [
      "EEG برای RCVS تست تشخیصی اصلی نیست.",
      "LP برای رد SAH ممکن است لازم باشد، اما برای vascular narrowing، angiography لازم است.",
      "پاسخ صحیح: MRA.",
      "EMG ارتباطی ندارد.",
      "Carotid ultrasound برای intracranial vasoconstriction مناسب نیست."
    ],

    examTip:
      "Recurrent thunderclap + vasoactive trigger = RCVS.",

    examTrap:
      "MRI طبیعی در شروع بیماری RCVS را رد نمی‌کند.",

    flashcardQuestion:
      "در RCVS کدام imaging مفید است؟",
    flashcardAnswer: "CTA or MRA demonstrating segmental cerebral vasoconstriction",
    explanation:
      "تنگی‌های سگمنتال عروق مغزی مشخصه مهم RCVS هستند.",
    note: "کلید طبق پاسخنامه: C",
    trap: "Early vascular imaging may occasionally be normal.",
    reference: "RCVS"
  },


  {
    source: "Cerebrovascular Exam",
    question: "در Transcranial Doppler، در محل شدیدترین arterial stenosis کدام یافته کمتر انتظار می‌رود؟",
    options: [
      "Increased flow velocity",
      "Spectral broadening",
      "Turbulence",
      "Bidirectional flow",
      "Post-stenotic changes"
    ],
    correct: 3,

    diagnosis: "Intracranial arterial stenosis on TCD",

    differentials: [
      "Normal cerebral blood flow",
      "Vasospasm",
      "Hyperdynamic flow",
      "Arteriovenous shunting"
    ],

    correctReason:
      "Stenosis معمولاً با افزایش focal velocity و turbulence همراه است. Bidirectional flow یافته تیپیک محل stenosis نیست و طبق کلید دانشگاهی پاسخ C/D? در این بانک گزینه D است.",

    optionExplanations: [
      "افزایش velocity در محل stenosis انتظار می‌رود.",
      "Spectral broadening به علت turbulence ممکن است رخ دهد.",
      "Turbulence از یافته‌های قابل انتظار است.",
      "طبق کلید دانشگاهی، bidirectional flow در محل stenosis یافته تیپیک نیست.",
      "تغییرات جریان distal ممکن است دیده شوند."
    ],

    examTip:
      "Stenosis → focal velocity increase.",

    examTrap:
      "Bidirectional flow بیشتر باید در زمینه collateral flow یا شرایط خاص تفسیر شود.",

    flashcardQuestion:
      "مهم‌ترین یافته TCD در محل arterial stenosis چیست؟",
    flashcardAnswer: "Increased focal flow velocity",
    explanation:
      "کاهش قطر عروق باعث افزایش سرعت جریان در محل تنگی می‌شود.",
    note: "کلید طبق پاسخنامه: D",
    trap: "Velocity را با flow volume یکی ندانید.",
    reference: "Transcranial Doppler"
  },


  {
    source: "Cerebrovascular Exam",
    question: "در بیماری که پس از stroke دچار seizure شده است، کدام عبارت درباره ادامه درمان ضدتشنج صحیح‌تر است؟",
    options: [
      "EEG به‌تنهایی همیشه نیاز به ادامه دارو را ثابت می‌کند",
      "هر seizure بعد از stroke الزاماً epilepsy مادام‌العمر است",
      "EEG به‌تنهایی برای تصمیم‌گیری درباره ادامه درمان کافی نیست",
      "همه بیماران باید lifelong antiseizure therapy بگیرند",
      "Seizure پس از stroke هرگز اهمیت ندارد"
    ],
    correct: 2,

    diagnosis: "Post-stroke seizure",

    differentials: [
      "Acute symptomatic seizure",
      "Late post-stroke epilepsy",
      "Nonconvulsive seizure",
      "Metabolic seizure"
    ],

    correctReason:
      "EEG اطلاعات مهمی می‌دهد ولی به‌تنهایی تعیین‌کننده مدت درمان نیست. زمان seizure نسبت به stroke، infarct characteristics، recurrence risk و clinical context اهمیت دارند.",

    optionExplanations: [
      "EEG به‌تنهایی کافی نیست.",
      "Early seizure ممکن است acute symptomatic باشد.",
      "پاسخ طبق کلید دانشگاهی.",
      "Lifelong treatment برای همه بیماران لازم نیست.",
      "Post-stroke seizure می‌تواند اهمیت بالینی داشته باشد."
    ],

    examTip:
      "Early post-stroke seizure ≠ automatically chronic epilepsy.",

    examTrap:
      "EEG را به‌عنوان تنها معیار تصمیم‌گیری در نظر نگیرید.",

    flashcardQuestion:
      "آیا EEG به‌تنهایی مدت درمان antiseizure medication را تعیین می‌کند؟",
    flashcardAnswer: "No.",
    explanation:
      "تصمیم بر اساس زمان seizure، recurrence risk و وضعیت بالینی گرفته می‌شود.",
    note: "کلید طبق پاسخنامه دانشگاه: C",
    trap: "Acute symptomatic seizure با epilepsy مزمن متفاوت است.",
    reference: "Post-Stroke Epilepsy"
  },


  {
    source: "Cerebrovascular Exam",
    question: "مهم‌ترین complication اولیه و خطرناک SAH کدام است؟",
    options: [
      "Rebleeding",
      "Hydrocephalus مزمن",
      "Hyponatremia",
      "Seizure",
      "Vasospasm"
    ],
    correct: 0,

    diagnosis: "Aneurysmal subarachnoid hemorrhage",

    differentials: [
      "Perimesencephalic SAH",
      "Intracerebral hemorrhage",
      "Cerebral venous thrombosis",
      "RCVS"
    ],

    correctReason:
      "Rebleeding پس از aneurysmal SAH یک complication بسیار خطرناک با mortality بالا است و به‌خصوص در ساعات/روزهای ابتدایی اهمیت دارد.",

    optionExplanations: [
      "پاسخ صحیح طبق کلید دانشگاهی: rebleeding.",
      "Hydrocephalus می‌تواند رخ دهد.",
      "Hyponatremia ممکن است رخ دهد.",
      "Seizure ممکن است رخ دهد.",
      "Delayed cerebral ischemia/vasospasm نیز complication مهمی است ولی timing متفاوتی دارد."
    ],

    examTip:
      "SAH complications را زمانی به خاطر بسپارید: early = rebleeding، later = vasospasm/DCI.",

    examTrap:
      "Vasospasm مهم است اما rebleeding می‌تواند خیلی زودتر رخ دهد.",

    flashcardQuestion:
      "یکی از خطرناک‌ترین complications اولیه aneurysmal SAH چیست؟",
    flashcardAnswer: "Rebleeding",
    explanation:
      "Rebleeding در ساعات اولیه اهمیت ویژه دارد.",
    note: "کلید طبق پاسخنامه دانشگاه: A",
    trap: "Vasospasm معمولاً complication delayed است.",
    reference: "SAH"
  },


  {
    source: "Cerebrovascular Exam",
    question: "در Anterior Choroidal Artery Syndrome کدام عبارت نادرست است؟",
    options: [
      "Anterior limb of internal capsule به‌طور کلاسیک محل اصلی syndrome است",
      "همی‌پارزی ممکن است ایجاد شود",
      "اختلال حسی ممکن است وجود داشته باشد",
      "همی‌آنوبی همونیم ممکن است ایجاد شود",
      "ICA می‌تواند منشأ این شریان باشد"
    ],
    correct: 0,

    diagnosis: "Anterior Choroidal Artery Syndrome",

    differentials: [
      "MCA infarction",
      "PCA infarction",
      "Internal capsule infarction",
      "Thalamic infarction"
    ],

    correctReason:
      "طبق کلید دانشگاهی، گزینه A نادرست است؛ ساختار مهم در این syndrome posterior limb of internal capsule است، نه anterior limb.",

    optionExplanations: [
      "پاسخ صحیح طبق کلید: anterior limb عبارت نادرست است؛ posterior limb اهمیت بیشتری دارد.",
      "همی‌پارزی ممکن است شدید باشد.",
      "Sensory deficit ممکن است وجود داشته باشد.",
      "Optic tract involvement می‌تواند homonymous hemianopia ایجاد کند.",
      "AChA معمولاً از ICA منشأ می‌گیرد."
    ],

    examTip:
      "Anterior choroidal → posterior limb of internal capsule.",

    examTrap:
      "Anterior limb و posterior limb internal capsule را اشتباه نکنید.",

    flashcardQuestion:
      "کدام قسمت internal capsule در Anterior Choroidal Syndrome مهم است؟",
    flashcardAnswer: "Posterior limb of the internal capsule",
    explanation:
      "AChA structures شامل posterior limb، optic tract و بخش‌هایی از medial temporal structures را تغذیه می‌کند.",
    note: "کلید طبق پاسخنامه: A",
    trap: "Anterior limb ≠ posterior limb.",
    reference: "Anterior Choroidal Artery Syndrome"
  },


  {
    source: "Cerebrovascular Exam",
    question: "بیماری با diplopia گذرا، بی‌حسی سمت چپ، partial Horner سمت راست و ataxia سمت راست بدون ضعف واضح مراجعه کرده است. محتمل‌ترین محل ضایعه کدام است؟",
    options: [
      "Left pons",
      "Right cerebellum",
      "Left medulla",
      "Right dorsolateral midbrain",
      "Right thalamus"
    ],
    correct: 3,

    diagnosis: "Right dorsolateral midbrain lesion",

    differentials: [
      "Lateral medullary syndrome",
      "Pontine infarction",
      "Thalamic lesion",
      "Cerebellar infarction"
    ],

    correctReason:
      "ترکیب ipsilateral Horner، ocular symptoms و ipsilateral ataxia بدون weakness می‌تواند نشان‌دهنده درگیری dorsolateral midbrain باشد.",

    optionExplanations: [
      "Left pons با الگوی crossed signs ممکن است اما localization داده‌شده کمتر تطابق دارد.",
      "Cerebellar lesion به‌تنهایی Horner ایجاد نمی‌کند.",
      "Lateral medulla می‌تواند Horner و ataxia ایجاد کند ولی diplopia pattern و localization سؤال بیشتر midbrain را مطرح می‌کند.",
      "پاسخ طبق کلید: right dorsolateral midbrain.",
      "Thalamic lesion معمولاً این الگوی Horner/ataxia/ocular را ایجاد نمی‌کند."
    ],

    examTip:
      "Horner + ipsilateral ataxia + ocular signs → brainstem localization را دقیق انجام دهید.",

    examTrap:
      "Medulla و midbrain را صرفاً با دیدن Horner یکی نگیرید.",

    flashcardQuestion:
      "محل ضایعه در این الگوی بالینی کجاست؟",
    flashcardAnswer: "Right dorsolateral midbrain",
    explanation:
      "Localization بر اساس ترکیب sympathetic، cerebellar و ocular findings انجام می‌شود.",
    note: "کلید طبق پاسخنامه: D",
    trap: "Crossed brainstem signs را دقیق بررسی کنید.",
    reference: "Brainstem Vascular Syndromes"
  },


  {
    source: "Cerebrovascular Exam",
    question: "کدام یافته در Susac syndrome می‌تواند دیده شود؟",
    options: [
      "Only peripheral neuropathy",
      "Isolated spinal cord lesion",
      "Leptomeningeal enhancement",
      "Pure motor neuron disease",
      "Isolated basal ganglia calcification"
    ],
    correct: 2,

    diagnosis: "Susac syndrome",

    differentials: [
      "MS",
      "CNS vasculitis",
      "ADEM",
      "MOGAD"
    ],

    correctReason:
      "Susac می‌تواند طیف متنوعی از یافته‌های MRI داشته باشد و leptomeningeal enhancement نیز گزارش شده است. طبق کلید دانشگاهی گزینه C صحیح است.",

    optionExplanations: [
      "Susac صرفاً peripheral neuropathy نیست.",
      "Isolated spinal cord lesion مشخصه اصلی نیست.",
      "پاسخ صحیح طبق کلید: leptomeningeal enhancement.",
      "Motor neuron disease ارتباطی با Susac ندارد.",
      "Basal ganglia calcification یافته تیپیک نیست."
    ],

    examTip:
      "Susac MRI فقط به corpus callosum lesions محدود نیست.",

    examTrap:
      "در Susac باید brain + retina + inner ear را همزمان در نظر گرفت.",

    flashcardQuestion:
      "یکی از یافته‌های تصویربرداری گزارش‌شده در Susac چیست؟",
    flashcardAnswer: "Leptomeningeal enhancement",
    explanation:
      "MRI در Susac می‌تواند یافته‌های متنوعی نشان دهد.",
    note: "کلید طبق پاسخنامه: C",
    trap: "وجود leptomeningeal enhancement تشخیص را به‌تنهایی قطعی نمی‌کند.",
    reference: "Susac Syndrome"
  }

];
