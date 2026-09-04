// ============================================================
// Viral & Prion Diseases of the Nervous System
// 50 Neurology Promotion Exam Questions
// ============================================================

const viralPrionQuestions = [

    // Q1
    {
        question: "در آنسفالیت با کدام یک از عوامل عفونی زیر، درگیری بیشتر لوب تمپورال و نواحی orbitofrontal مغز دیده می‌شود؟",
        options: [
            "Treponema pallidum",
            "Herpes simplex",
            "Cryptococcus neoformans",
            "Toxoplasma gondii"
        ],
        correct: 1,
        explanation: "درگیری تیپیک لوب‌های تمپورال و orbitofrontal از یافته‌های کلاسیک آنسفالیت ناشی از Herpes simplex است.",
        note: "نکته آزمونی: Temporal lobe predilection یکی از سرنخ‌های مهم HSV encephalitis است."
    },

    // Q2
    {
        question: "در بیمار مبتلا به ایدز کدام یک از تومورهای زیر شایع‌تر است؟",
        options: [
            "Metastatic lymphoma",
            "Primary CNS lymphoma",
            "Kaposi sarcoma",
            "PNET"
        ],
        correct: 1,
        explanation: "در میان گزینه‌های سؤال، Primary CNS lymphoma پاسخ صحیح است.",
        note: "نکته آزمونی: در بیمار HIV مثبت با ضایعه CNS باید به افتراق Primary CNS lymphoma و toxoplasmosis توجه کرد."
    },

    // Q3
    {
        question: "کودک ۱۰ ساله به علت افت تحصیلی و تغییرات رفتاری مراجعه کرده است. سپس دچار تشنج ژنرالیزه، میوکلونوس و اختلال پیشرونده شناختی شده و EEG امواج کند ژنرالیزه با ولتاژ بالا و دوره‌های suppression را نشان می‌دهد. محتمل‌ترین تشخیص چیست؟",
        options: [
            "AIDS Encephalopathy",
            "Neurocysticercosis",
            "SSPE",
            "Rabies Encephalitis"
        ],
        correct: 2,
        explanation: "شرح حال پیشرونده پس از سابقه سرخک، اختلال شناختی، میوکلونوس و الگوی مشخص EEG به نفع Subacute Sclerosing Panencephalitis (SSPE) است.",
        note: "پاسخ دانشگاه: SSPE."
    },

    // Q4
    {
        question: "مرد ۲۷ ساله با سابقه مصرف تزریقی هروئین، دچار دمانس پیشرونده شده است. MRI ضایعات متعدد ماده سفید بدون enhancement و بیوپسی الیگودندروسیت‌های دارای هسته بزرگ و inclusion body را نشان می‌دهد. محتمل‌ترین تشخیص چیست؟",
        options: [
            "HTLV-1 infection",
            "Neurosarcoidosis",
            "PML",
            "General paresis"
        ],
        correct: 2,
        explanation: "Progressive Multifocal Leukoencephalopathy یا PML ناشی از JC virus است و با درگیری ماده سفید و inclusion در oligodendrocytes مشخص می‌شود.",
        note: "نکته آزمونی: PML معمولاً ضایعات ماده سفید با enhancement کم یا بدون enhancement ایجاد می‌کند."
    },

    // Q5
    {
        question: "کدام یک از ویروس‌های زیر از طریق اعصاب محیطی به سیستم عصبی مرکزی حمله می‌کند؟",
        options: [
            "Mumps",
            "Varicella zoster",
            "Polio",
            "Rabies"
        ],
        correct: 3,
        explanation: "Rabies virus می‌تواند از محل گزش در امتداد اعصاب محیطی به سمت CNS منتقل شود.",
        note: "نکته آزمونی: انتقال رتروگراد در آکسون‌ها از ویژگی مهم Rabies است."
    },

    // Q6
    {
        question: "کدام یافته در الکتروانسفالوگرافی انسفالیت هرپسی دیده می‌شود؟",
        options: [
            "فعالیت آلفا در ناحیه فرونتال",
            "فعالیت بتا در ناحیه تمپورال",
            "Wave & Spike با فرکانس سه هرتز",
            "امواج اپی‌لپتی‌فورم پریودیک دوطرفه"
        ],
        correct: 3,
        explanation: "در HSV encephalitis می‌توان periodic epileptiform discharges را مشاهده کرد که به‌طور کلاسیک در نواحی تمپورال برجسته هستند.",
        note: "در منابع جدیدتر اصطلاح PLEDs/LPDs یا periodic lateralized discharges نیز استفاده می‌شود."
    },

    // Q7
    {
        question: "کدام یک از موارد زیر بیشتر با ایجاد Motor Neuron Disease ارتباط دارد؟",
        options: [
            "Poliomyelitis",
            "HIV",
            "Progressive Multifocal Leukoencephalopathy",
            "Subacute Sclerosing Panencephalitis"
        ],
        correct: 0,
        explanation: "Poliovirus سلول‌های شاخ قدامی نخاع را درگیر کرده و می‌تواند سندرم نورون حرکتی ایجاد کند.",
        note: "پاسخ دانشگاه: Poliomyelitis."
    },

    // Q8
    {
        question: "کدام یک از نوروپاتی‌های زیر در HIV بیشتر از سایر موارد دیده می‌شود؟",
        options: [
            "پلی‌نوروپاتی حسی‌حرکتی دیستال",
            "مونونوریت مولتی‌پلکس",
            "CIDP",
            "گانگلیونوریت"
        ],
        correct: 0,
        explanation: "Distal symmetric sensorimotor polyneuropathy شایع‌ترین الگوی نوروپاتی محیطی در HIV است.",
        note: "نکته آزمونی: الگوی distal symmetric polyneuropathy را به خاطر بسپارید."
    },

    // Q9
    {
        question: "کدام یک از موارد زیر یافته معمول در بررسی CSF بیمار مبتلا به SSPE نیست؟",
        options: [
            "فشار بالا",
            "پروتئین نرمال",
            "وجود oligoclonal band",
            "فرمول سلولی نرمال"
        ],
        correct: 1,
        explanation: "بر اساس کلید سؤال، پروتئین نرمال یافته معمول SSPE محسوب نمی‌شود.",
        note: "پاسخ کلید دانشگاه: B."
    },

    // Q10
    {
        question: "کدام یک از انواع بیماری Creutzfeldt-Jakob از طریق خون منتقل نمی‌شود؟",
        options: [
            "Sporadic",
            "Familial",
            "Iatrogenic",
            "Variant",
            "هر چهار گزینه صحیح هستند"
        ],
        correct: 4,
        explanation: "بر اساس کلید دانشگاه، گزینه E به‌عنوان پاسخ صحیح در نظر گرفته شده است.",
        note: "پاسخ طبق کلید دانشگاه: E."
    },

    // Q11
    {
        question: "بیماری با فلج عصب ۷، تهوع و سرگیجه مراجعه کرده و MRI مغز نرمال است. در صورت تشخیص Ramsay Hunt، کدام تست برای تأیید تشخیص توصیه می‌شود؟",
        options: [
            "PCR هرپس زوستر در CSF",
            "PCR هرپس سیمپلکس در CSF",
            "PCR هرپس زوستر از ترشحات لاله گوش",
            "بررسی آنتی‌بادی هرپس زوستر در خون"
        ],
        correct: 2,
        explanation: "بر اساس سؤال، PCR مربوط به VZV از ترشحات ضایعات گوش/لاله گوش برای تأیید تشخیص پیشنهاد شده است.",
        note: "Ramsay Hunt syndrome ناشی از reactivation ویروس Varicella-zoster است."
    },

    // Q12
    {
        question: "مرد ۲۰ ساله با تب و اختلال سطح هوشیاری مراجعه کرده است. MRI تغییر سیگنال در قسمت inferior و medial لوب تمپورال و cortex اینسولا را نشان می‌دهد. کدام درمان ارجح است؟",
        options: [
            "دگزامتازون ۸ میلی‌گرم هر ۶ ساعت",
            "آمفوتریسین ۰.۵ میلی‌گرم روزانه",
            "آسیکلوویر ۵۰ میلی‌گرم به ازای هر کیلوگرم در روز",
            "آمپی‌سیلین ۱ گرم هر ۴ ساعت"
        ],
        correct: 2,
        explanation: "در این سناریو تشخیص مورد نظر HSV encephalitis است و درمان با acyclovir وریدی باید سریع شروع شود.",
        note: "نکته آزمونی: در شک بالینی بالا، منتظر نتیجه PCR نمی‌مانیم."
    },

    // Q13
    {
        question: "مرد ۴۰ ساله با همی‌پارزی راست و آفازی مراجعه کرده است. دو ماه قبل دچار ضایعات هرپتیک در سمت چپ پیشانی شده بود و اکنون MRI انفارکت‌های کوچک و CSF پلئوسیتوز مونونوکلئر دارد. کدام درمان توصیه می‌شود؟",
        options: [
            "آسپرین و وارفارین",
            "کورتیکواستروئید و آسیکلوویر وریدی",
            "آسیکلوویر وریدی",
            "آسپرین و کلوپیدوگرول"
        ],
        correct: 1,
        explanation: "این تابلوی بالینی به نفع VZV vasculopathy است و طبق کلید سؤال درمان با corticosteroid و IV acyclovir پیشنهاد شده است.",
        note: "تشخیص مورد نظر: واسکولوپاتی/واسکولیت ناشی از VZV."
    },

    // Q14
    {
        question: "زن ۶۰ ساله به علت درد سوزشی شدید در محل ضایعات قبلی هرپتیک در قفسه سینه مراجعه کرده است. کدام مورد صحیح است؟",
        options: [
            "درمان انتخابی اولیه بلوک عصب است.",
            "نهایتاً علی‌رغم شدت درد بهبود خواهد یافت.",
            "نشانه وجود بدخیمی است.",
            "ارتباطی با ضایعات هرپتیک ندارد و نیاز به بیوپسی دارد."
        ],
        correct: 1,
        explanation: "شرح حال با Postherpetic Neuralgia مطابقت دارد و طبق کلید سؤال، درد با وجود شدت زیاد نهایتاً بهبود می‌یابد.",
        note: "Postherpetic neuralgia از عوارض مهم Herpes zoster است."
    },

    // Q15
    {
        question: "بیمار مبتلا به ایدز با درد رادیکولر کمر، دلیریوم، نیستاگموس و افتالموپلژی مراجعه کرده است. MRI ضایعات ماده سفید و meningeal enhancement نشان می‌دهد. کدام روش تشخیصی مفیدتر است؟",
        options: [
            "کشت CSF",
            "PCR",
            "تیتر IgG antibody",
            "کشت خون"
        ],
        correct: 1,
        explanation: "با توجه به تابلوی meningoradiculitis در بیمار HIV، PCR برای شناسایی CMV کمک‌کننده است.",
        note: "تشخیص مورد نظر سؤال: CMV meningoradiculitis."
    },

    // Q16
    {
        question: "مرد ۴۰ ساله مبتلا به ایدز با سردرد، کنفوزیون و همی‌پلژی مراجعه کرده است. MRI یک توده enhancing پری‌ونتریکولار را نشان می‌دهد. کدام روش درمانی توصیه می‌شود؟",
        options: [
            "بیوپسی استرئوتاکتیک و سپس کورتیکواستروئید و رادیوتراپی",
            "سولفادیازین و پیریمتامین و بررسی تغییر اندازه ضایعه",
            "رزکسیون ضایعه و سپس رادیوتراپی",
            "سولفادیازین و متوتروکسات وریدی"
        ],
        correct: 1,
        explanation: "در بیمار AIDS با ضایعه enhancing مغزی، درمان تجربی toxoplasmosis و بررسی پاسخ ضایعه در نظر گرفته می‌شود.",
        note: "تشخیص مورد نظر: cerebral toxoplasmosis."
    },

    // Q17
    {
        question: "بیمار ۱۴ ساله با سابقه سرخک، افت تحصیلی، اختلال شخصیتی و تکلم مراجعه کرده است و EEG الگوی burst suppression نشان می‌دهد. کدام مورد در مورد بیماری نادرست است؟",
        options: [
            "در CSF اکثراً پروتئین بالا است.",
            "تعداد گلبول‌های سفید در CSF بسیار کم است.",
            "در MRI مغز ضایعات در ماده سفید دیده می‌شود.",
            "مخچه در اکثر موارد درگیر است."
        ],
        correct: 3,
        explanation: "در SSPE درگیری غالباً منتشر بوده و درگیری مخچه در اکثر موارد وجود ندارد؛ بنابراین گزینه D نادرست است.",
        note: "تشخیص مورد نظر: SSPE."
    },

    // Q18
    {
        question: "بیمار میانسالی با تب، تشنج و کاهش سطح هوشیاری مراجعه کرده است. MRI درگیری دوطرفه لوب تمپورال و فرونتال و EEG دارای temporal PLED است. کدام مورد نادرست است؟",
        options: [
            "بیماری معمولاً عود ندارد.",
            "در سه هفته اول آزمایش nested-PCR مثبت کاذب ندارد.",
            "در اکثر موارد ضایعات MRI enhancement دارند.",
            "Mesencephalon مستقیماً در این بیماری درگیر نمی‌شود."
        ],
        correct: 1,
        explanation: "طبق کلید سؤال، گزینه B نادرست در نظر گرفته شده است.",
        note: "تشخیص مورد نظر: HSV encephalitis. پاسخ طبق کلید دانشگاه: B."
    },

    // Q19
    {
        question: "پسری ۱۲ ساله با تب، خستگی و عدم تعادل مراجعه کرده و در معاینه اختلالات مخچه‌ای واضح دارد. کدام عامل کمتر موجب ایجاد Acute cerebellitis می‌شود؟",
        options: [
            "EBV",
            "CMV",
            "Mycoplasma",
            "Herpes simplex virus"
        ],
        correct: 3,
        explanation: "طبق کلید سؤال، HSV در مقایسه با EBV، CMV و Mycoplasma کمتر با acute cerebellitis ارتباط دارد.",
        note: "تشخیص مورد نظر: Acute cerebellitis."
    },

    // Q20
    {
        question: "بیمار دچار درد شدید در ناحیه پیشانی سمت راست شده و در روز پنجم در همان ناحیه دچار بثورات پوستی می‌شود. کدام درمان توصیه می‌شود؟",
        options: [
            "آسیکلوویر",
            "Cloxacillin",
            "فقط مسکن و گاباپنتین",
            "نیازی به درمان ندارد و خودبه‌خود خوب می‌شود."
        ],
        correct: 0,
        explanation: "شرح حال با Herpes zoster در توزیع V1 سازگار است و acyclovir درمان ضدویروسی مناسب است.",
        note: "درگیری V1 به دلیل خطر ocular complications اهمیت ویژه دارد."
    },

    // Q21
    {
        question: "کدام یک از آزمایش‌های CSF برای تشخیص بیماری Creutzfeldt-Jakob دقیق‌تر است؟",
        options: [
            "Peptide 14-3-3",
            "Enolase",
            "Neopterin",
            "PCR"
        ],
        correct: 0,
        explanation: "بر اساس کلید این سؤال، بررسی CSF برای 14-3-3 peptide پاسخ صحیح است.",
        note: "در منابع جدید، MRI DWI/ADC و RT-QuIC نیز در تشخیص CJD اهمیت بسیار زیادی دارند."
    },

    // Q22
    {
        question: "آقای ۳۵ ساله مبتلا به ایدز با تشخیص آنسفالیت مزمن و پلی‌رادیکولوپاتی بستری است. MRI تغییرات منتشر ماده سفید را نشان می‌دهد. کدام گزینه نادرست است؟",
        options: [
            "در MRI مننژال enhancement دیده می‌شود.",
            "ارگانیسم مسئول در بزاق دیده می‌شود.",
            "در CSF ممکن است سلول‌های التهابی دیده شوند.",
            "تشخیص قطعی با حضور آنتی‌بادی علیه بیماری داده می‌شود."
        ],
        correct: 3,
        explanation: "طبق کلید سؤال، گزینه D نادرست است و تشخیص مورد نظر CMV infection است.",
        note: "پاسخ طبق کلید دانشگاه: D."
    },

    // Q23
    {
        question: "بیمار HIV مثبت بدون درمان ضدرتروویروسی و بدون پروفیلاکسی عفونت‌های فرصت‌طلب، با تب و تشنج مراجعه کرده است. CD4 برابر 150 است و MRI ضایعات متعدد ring-enhancing در corticomedullary junction و basal ganglia نشان می‌دهد. مناسب‌ترین رژیم درمانی کدام است؟",
        options: [
            "Pyrimethamine + Sulfadiazine",
            "رژیم چهار دارویی ضدسل",
            "Dexamethasone",
            "داروهای ضدرتروویروس"
        ],
        correct: 0,
        explanation: "ضایعات متعدد ring-enhancing در بیمار HIV به‌ویژه در basal ganglia به نفع cerebral toxoplasmosis است.",
        note: "تشخیص مورد نظر: Toxoplasma encephalitis."
    },

    // Q24
    {
        question: "بیمار مبتلا به ایدز دچار فلج نیمه بدن شده است. احتمال وجود کدام یک از موارد زیر به طور همزمان کمتر است؟",
        options: [
            "Cryptococcoma",
            "Neurosyphilis",
            "Neurotuberculosis",
            "Cytomegalovirus infection"
        ],
        correct: 1,
        explanation: "طبق کلید سؤال، Neurosyphilis کمترین احتمال همراهی را در این سناریو دارد.",
        note: "پاسخ طبق کلید دانشگاه: B."
    },

    // Q25
    {
        question: "کودکی با اختلال تعادل و سرگیجه مراجعه کرده است. وجود کدام یک از موارد زیر به ضرر تشخیص Acute cerebellitis است؟",
        options: [
            "جذب ماده حاجب در cortex مخچه در MRI",
            "Confusion",
            "Ophthalmoplegia",
            "علامت Babinski"
        ],
        correct: 2,
        explanation: "طبق کلید سؤال، ophthalmoplegia یافته‌ای است که بیشتر به ضرر تشخیص acute cerebellitis است.",
        note: "پاسخ طبق کلید دانشگاه: C."
    },

    // Q26
    {
        question: "مرد ۴۶ ساله با اختلال رفتاری، آژیتاسیون، hallucination، اختلال شدید حافظه و دمانس سریع‌السیر مراجعه کرده و myoclonus حساس به صدا دارد. کدام اقدام تشخیصی کمتر حائز اهمیت است؟",
        options: [
            "EEG",
            "آنالیز CSF و بررسی 14-3-3 protein",
            "Brain MRI",
            "Brain CT scan با و بدون کنتراست"
        ],
        correct: 3,
        explanation: "در شک به CJD، EEG، CSF biomarkers و MRI اهمیت تشخیصی بیشتری نسبت به CT دارند.",
        note: "تشخیص مورد نظر: CJD."
    },

    // Q27
    {
        question: "بیمار پنج هفته پس از ophthalmic zoster دچار همی‌پارزی حاد و اختلال بینایی شده است. CSF دارای pleocytosis مونونوکلئر و افزایش IgG index است و MRI infarctهای کوچک و عمقی نشان می‌دهد. کدام گزینه برای تشخیص حساس‌تر است؟",
        options: [
            "DNA ویروس VZV در CSF",
            "آنتی‌بادی اختصاصی علیه VZV در CSF",
            "DNA و آنتی‌بادی اختصاصی علیه VZV در خون",
            "کشت ویروسی"
        ],
        correct: 1,
        explanation: "در VZV vasculopathy، به‌خصوص با فاصله زمانی از زونا، VZV-specific antibody در CSF می‌تواند حساس‌تر از PCR باشد.",
        note: "نکته آزمونی مهم: CSF anti-VZV IgG برای VZV vasculopathy اهمیت زیادی دارد."
    },

    // Q28
    {
        question: "مرد ۲۲ ساله به دنبال یک عفونت به طور ناگهانی دچار ataxia، nystagmus و dysarthria شده است. MRI طبیعی و CSF دارای pleocytosis خفیف و افزایش پروتئین است. محتمل‌ترین علت کدام است؟",
        options: [
            "VZV",
            "CMV",
            "HSV",
            "EBV"
        ],
        correct: 3,
        explanation: "طبق کلید سؤال، EBV محتمل‌ترین عامل acute post-infectious cerebellar syndrome است.",
        note: "پاسخ دانشگاه: EBV."
    },

    // Q29
    {
        question: "کدام یک از موارد زیر در بیماری Creutzfeldt-Jakob معمولاً دیده نمی‌شود؟",
        options: [
            "Visual disturbance",
            "Headache",
            "Well-formed seizure",
            "Ataxia"
        ],
        correct: 2,
        explanation: "Seizureهای کاملاً well-formed در مقایسه با سایر علائم ذکرشده یافته معمول CJD نیستند.",
        note: "نکته آزمونی: myoclonus، ataxia، dementia و visual/cerebellar manifestations شایع‌ترند."
    },

    // Q30
    {
        question: "کدام یک از موارد زیر از علائم اولیه دمانس ناشی از HIV است؟",
        options: [
            "تشدید رفلکس‌های وتری",
            "Abulia",
            "Gait ataxia",
            "علامت Babinski"
        ],
        correct: 2,
        explanation: "طبق کلید سؤال، gait ataxia از علائم اولیه HIV-associated dementia در نظر گرفته شده است.",
        note: "پاسخ دانشگاه: C."
    },

    // Q31
    {
        question: "شایع‌ترین محل درگیری Herpes zoster کدام است؟",
        options: [
            "شاخه ophthalmic عصب تری‌ژمینال",
            "Cervical",
            "Thoracic",
            "Lumbar"
        ],
        correct: 2,
        explanation: "Thoracic dermatomes شایع‌ترین محل درگیری Herpes zoster هستند.",
        note: "نکته آزمونی: Thoracic > cervical/lumbar/ophthalmic."
    },

    // Q32
    {
        question: "در کدام یک از بیماری‌های زیر دمانس می‌تواند تنها اختلال نورولوژیک بیمار باشد؟",
        options: [
            "Subacute Spongiform Encephalopathy",
            "AIDS",
            "Marchiafava-Bignami disease",
            "Huntington chorea"
        ],
        correct: 1,
        explanation: "طبق کلید سؤال، AIDS می‌تواند با اختلال شناختی و دمانس به عنوان تظاهر غالب یا حتی تنها تظاهر نورولوژیک مطرح شود.",
        note: "پاسخ دانشگاه: AIDS."
    },

    // Q33
    {
        question: "مرد ۴۰ ساله دچار سندرم پیشرونده مخچه‌ای، پیرامیدال و دمانس شده و پس از چهار سال فوت می‌کند. در اتوپسی مقادیر فراوان amyloid plaque در cortex، cerebellum و basal ganglia دیده می‌شود. محتمل‌ترین تشخیص چیست؟",
        options: [
            "Creutzfeldt-Jakob disease",
            "New variant Creutzfeldt-Jakob disease",
            "Kuru",
            "Gerstmann-Sträussler-Scheinker disease"
        ],
        correct: 3,
        explanation: "ترکیب progressive cerebellar syndrome، pyramidal signs، dementia و amyloid plaques به نفع Gerstmann-Sträussler-Scheinker disease است.",
        note: "GSS یک بیماری پریونی ارثی و بسیار نادر است."
    },

    // Q34
    {
        question: "آقای ۷۰ ساله با درد شدید Postherpetic مراجعه کرده است. کدام گزینه نادرست است؟",
        options: [
            "راش‌های جلدی طی ۴ تا ۵ روز بعد از شروع درد ظاهر می‌شوند.",
            "ترکیب والپروات با یک antidepressant برای درمان مفید است.",
            "Rhizotomy تری‌ژمینال روش مفیدی در کنترل درد است.",
            "آسیکلوویر دوره درد و ضایعات جلدی را کوتاه می‌کند."
        ],
        correct: 2,
        explanation: "Trigeminal rhizotomy برای درد ناشی از postherpetic neuralgia در ناحیه قفسه سینه روش مناسب و مرتبطی نیست.",
        note: "پاسخ دانشگاه: C."
    },

    // Q35
    {
        question: "در رابطه با افتراق بیماری Creutzfeldt-Jakob از New Variant CJD کدام مورد صحیح است؟",
        options: [
            "این دو شروع متفاوتی دارند.",
            "اپیدمی در هر دو مورد گزارش شده است.",
            "امواج پریودیک در EEG در مراحل اولیه New Variant دیده می‌شود.",
            "اولین علامت New Variant آتاکسی است."
        ],
        correct: 0,
        explanation: "بر اساس کلید سؤال، تفاوت در نحوه و زمان شروع علائم از نکات افتراقی دو فرم است.",
        note: "در vCJD علائم psychiatric/sensory معمولاً زودتر از dementia و علائم نورولوژیک بروز می‌کنند."
    },

    // Q36
    {
        question: "بیمار مبتلا به ایدز با تشخیص PML تحت درمان با داروهای antiretroviral قرار گرفته است. چند روز بعد علائم تشدید شده و MRI در ضایعات قبلی enhancement نشان می‌دهد. برای ادامه درمان کدام گزینه پیشنهاد می‌شود؟",
        options: [
            "قطع داروی antiretroviral",
            "ادامه درمان با داروی antiretroviral",
            "اضافه کردن کورتون به داروی antiretroviral",
            "IVIg"
        ],
        correct: 0,
        explanation: "پاسخ ثبت‌شده در کلید دانشگاه گزینه A است.",
        note: "⚠️ پاسخ طبق کلید دانشگاه: A. این سؤال از نظر منابع جدید ممکن است نیاز به بازبینی داشته باشد؛ enhancement پس از شروع ART می‌تواند با PML-IRIS سازگار باشد."
    },

    // Q37
    {
        question: "بیمار مبتلا به ایدز از سه روز قبل دچار علائم سایکوموتور و همی‌پارزی شده است. Brain MRI با تزریق، ضایعات متعدد enhancing نشان می‌دهد. مناسب‌ترین اقدام بعدی کدام است؟",
        options: [
            "شروع درمان ضد توکسوپلاسموز و همزمان ارسال سرولوژی توکسوپلاسما",
            "ارسال سرولوژی توکسوپلاسموز و انتظار نتیجه جهت شروع درمان",
            "سیتولوژی CSF برای تشخیص لنفوما",
            "شروع درمان آنتی‌توبرکلوزیس"
        ],
        correct: 2,
        explanation: "بر اساس کلید دانشگاه، انجام CSF cytology برای بررسی lymphoma پاسخ سؤال است.",
        note: "پاسخ طبق کلید دانشگاه: C؛ متن سؤال تشخیص IRIS را نیز ذکر کرده است."
    },

    // Q38
    {
        question: "تمام موارد زیر در مورد Variant CJD صحیح است به جز:",
        options: [
            "میانگین سن بیماران پایین‌تر از فرم تیپیک CJD است.",
            "شروع علائم معمولاً با علائم حسی و psychiatric است.",
            "EEG امواج sharp periodic را در اوایل بیماری نشان می‌دهد.",
            "بیوپسی لوزه به تشخیص بیماری کمک می‌کند."
        ],
        correct: 2,
        explanation: "در vCJD الگوی کلاسیک periodic sharp wave complexes مانند CJD اسپورادیک معمولاً در مراحل اولیه دیده نمی‌شود.",
        note: "پاسخ دانشگاه: C."
    },

    // Q39
    {
        question: "آقای ۴۵ ساله مبتلا به CLL تحت درمان، با تغییرات رفتاری، اختلالات بینایی، کوادری‌پارزی پیشرونده، عدم تعادل، دیزآرتری و دمانس مراجعه کرده است. CSF نرمال و MRI ضایعات cortical غیرقرینه بدون enhancement را نشان می‌دهد. محتمل‌ترین تشخیص چیست؟",
        options: [
            "Bacterial Brain Abscess",
            "Progressive Multifocal Leukoencephalopathy",
            "Cryptococcoma",
            "Tuberculoma"
        ],
        correct: 1,
        explanation: "در بیمار immunocompromised با اختلالات پیشرونده عصبی و ضایعات بدون enhancement، PML مطرح است.",
        note: "تشخیص مورد نظر: PML."
    },

    // Q40
    {
        question: "تظاهرات نورولوژیک به صورت dysarthria، diplopia و اسپاسم عضلات صورت در Rabies ناشی از درگیری کدام منطقه آناتومیک است؟",
        options: [
            "Tegmental Medullary nuclei",
            "Midbrain",
            "Pons",
            "Globus pallidus"
        ],
        correct: 0,
        explanation: "طبق کلید سؤال، Tegmental medullary nuclei مسئول این تظاهرات در نظر گرفته شده‌اند.",
        note: "پاسخ دانشگاه: A."
    },

    // Q41
    {
        question: "کدام یک از موارد زیر در مورد CMV polyradiculoneuropathy صحیح نیست؟",
        options: [
            "در MRI بیماران meningeal enhancement دیده می‌شود.",
            "ممکن است تست آنتی‌بادی در سرم بیماران منفی باشد.",
            "در بررسی CSF سلول‌های غالب مونونوکلئر هستند.",
            "بررسی PCR-CMV بهترین روش تشخیص است."
        ],
        correct: 2,
        explanation: "طبق کلید سؤال، گزینه C نادرست است.",
        note: "پاسخ دانشگاه: C."
    },

    // Q42
    {
        question: "بیمار ۶۶ ساله با دمانس پیشرونده مراجعه کرده و EEG نمای pseudo-periodic discharge دارد. کدام روش برای تشخیص حساس‌تر است؟",
        options: [
            "CSF و بررسی 14-3-3 peptide",
            "CSF و بررسی Total Tau",
            "MRI با T1, T2, FLAIR",
            "MRI با DWI و T2"
        ],
        correct: 3,
        explanation: "در CJD، MRI به‌خصوص DWI می‌تواند محدودیت انتشار را در cortex و basal ganglia نشان دهد و حساسیت تشخیصی بالایی دارد.",
        note: "تشخیص مورد نظر: CJD."
    },

    // Q43
    {
        question: "مرد ۵۶ ساله با درد شدید سوزشی یک‌طرفه در قفسه سینه و شکم و وزیکول‌های clustered در dermatomes T5 تا T10 مراجعه کرده است. سابقه دیابت دارد و معاینه نورولوژیک نرمال است. مناسب‌ترین اقدام درمانی کدام است؟",
        options: [
            "آمی‌تریپتیلین خوراکی به همراه پماد آسیکلوویر و capsaicin موضعی برای یک هفته",
            "فامسیکلوویر خوراکی به همراه آمی‌تریپتیلین به مدت یک هفته",
            "آسیکلوویر وریدی به همراه آمی‌تریپتیلین به مدت ۱۰ روز",
            "آسیکلوویر خوراکی به مدت ۷ روز به همراه ونلافاکسین"
        ],
        correct: 2,
        explanation: "پاسخ ثبت‌شده در کلید دانشگاه گزینه C است.",
        note: "⚠️ پاسخ طبق کلید دانشگاه: C."
    },

    // Q44
    {
        question: "سربازی در پادگان دچار تب و گلودرد شده و پس از آن سردرد، استفراغ، تشنج، کاهش سطح هوشیاری، ایکتر، راش پوستی و آدنوپاتی گردنی پیدا کرده است. CSF دارای پروتئین بالا و lymphocytic pleocytosis است. کدام تشخیص بیشتر مطرح است؟",
        options: [
            "Cerebral malaria",
            "Epstein-Barr virus encephalitis",
            "Amebic brain infection",
            "Reye syndrome"
        ],
        correct: 1,
        explanation: "تب، گلودرد، لنفادنوپاتی گردنی و lymphocytic CSF با infectious mononucleosis ناشی از EBV سازگار است.",
        note: "تشخیص مورد نظر: EBV encephalitis / infectious mononucleosis."
    },

    // Q45
    {
        question: "پزشک ۵۰ ساله‌ای با اختلال رفتاری و شناختی پیشرونده، سپس rigidity و stimulus-sensitive myoclonus پیدا کرده است. MRI در basal ganglia دوطرفه diffusion restriction دارد و CSF طبیعی است. محتمل‌ترین EEG finding کدام است؟",
        options: [
            "Random high voltage slow activity",
            "Slow generalized spike and wave",
            "Generalized periodic sharp waves",
            "Periodic lateralized epileptiform discharge"
        ],
        correct: 2,
        explanation: "در CJD کلاسیک، periodic sharp wave complexes در EEG یافته شناخته‌شده‌ای هستند.",
        note: "تشخیص مورد نظر: CJD."
    },

    // Q46
    {
        question: "مرد جوانی با تب، سردرد، کنفوزیون، اختلال تکلم و تشنج مراجعه کرده است. MRI ضایعه تمپورال چپ و CSF دارای lymphocytes اندک و پروتئین بالا است. PCR هرپس پس از چهار روز منفی گزارش شده است. اقدام بعدی چیست؟",
        options: [
            "ادامه درمان آسیکلوویر و انجام LP مجدد",
            "قطع آسیکلوویر و شروع Amphotericin B",
            "ادامه آسیکلوویر و انجام brain biopsy",
            "قطع آسیکلوویر و شروع vancomycin و cephalosporin"
        ],
        correct: 0,
        explanation: "در صورت شک بالینی و تصویربرداری قوی به نفع HSV encephalitis، منفی شدن زودهنگام PCR نباید باعث قطع درمان شود و تکرار LP/PCR توصیه می‌شود.",
        note: "نکته آزمونی بسیار مهم: PCR اولیه HSV می‌تواند در روزهای ابتدایی بیماری منفی باشد."
    },

    // Q47
    {
        question: "خانم میانسالی با اختلالات رفتاری تحت درمان با ۹۰۰ میلی‌گرم lithium روزانه قرار گرفته و سپس دچار فراموشی، myoclonus، tremor، rigidity، bradykinesia و علائم مخچه‌ای شده است. آزمایش خون hypothyroidism را نشان می‌دهد. محتمل‌ترین تشخیص کدام است؟",
        options: [
            "مسمومیت دارویی با لیتیوم",
            "Hypothyroidism ناشی از مصرف لیتیوم",
            "Dementia with Lewy bodies",
            "Creutzfeldt-Jakob disease"
        ],
        correct: 3,
        explanation: "پاسخ ثبت‌شده در کلید دانشگاه CJD است.",
        note: "⚠️ پاسخ طبق کلید دانشگاه: D."
    },

    // Q48
    {
        question: "مرد ۵۲ ساله با اختلالات رفتاری، بدبینی، پرخاشگری، فراموشی، اختلال تعادل و myoclonus حساس به صدا مراجعه کرده است. MRI افزایش سیگنال قرینه در basal ganglia نشان می‌دهد. کدام ارزیابی کمک کمتری به تشخیص می‌کند؟",
        options: [
            "EEG",
            "بررسی CSF",
            "بررسی سایر سکانس‌های MRI",
            "بیوپسی بافت چربی شکم"
        ],
        correct: 3,
        explanation: "در شک به CJD، EEG، CSF و MRI ارزش تشخیصی دارند، در حالی که abdominal fat biopsy کمک تشخیصی محدودی دارد.",
        note: "تشخیص مورد نظر: CJD."
    },

    // Q49
    {
        question: "در کدام یک از موارد زیر بررسی بیمار از نظر عفونت HIV در تمامی بیماران ضرورت دارد؟",
        options: [
            "میوپاتی التهابی",
            "Subcortical dementia",
            "Inflammatory demyelinating polyneuropathy",
            "هر دو جواب B و C درست هستند"
        ],
        correct: 3,
        explanation: "گزینه D صحیح است؛ یعنی هر دو گزینه B و C در این سؤال به عنوان موارد نیازمند بررسی HIV در نظر گرفته شده‌اند.",
        note: "ساختار این سؤال همچنان تک‌گزینه‌ای است: پاسخ برنامه فقط D است و عبارت D محتوای B و C را در خود جمع کرده است."
    },

    // Q50
    {
        question: "بیمار جوانی با سردرد، تب، تشنج و کنفوزیون مراجعه کرده است. MRI ضایعات نکروتیک در نواحی cingulate gyrus، insula، lateral temporal lobe و تا midbrain با درجاتی از enhancement نشان می‌دهد. CSF دارای lymphocytic pleocytosis است و PCR برای HSV-1 منفی گزارش شده است. توصیه شما برای ادامه درمان چیست؟",
        options: [
            "ادامه آسیکلوویر به تنهایی + تکرار PCR برای HSV-1 و HSV-2",
            "ادامه آسیکلوویر به تنهایی + تکرار PCR برای HSV-1",
            "قطع آسیکلوویر + ادامه پوشش ضد میکروبی بر اساس شرایط بالینی",
            "قطع آسیکلوویر + تکرار PCR و تصمیم‌گیری براساس پاسخ"
        ],
        correct: 0,
        explanation: "با توجه به تابلوی بالینی و MRI بسیار مشکوک به HSV encephalitis، منفی شدن یک PCR نباید به‌تنهایی موجب قطع acyclovir شود و تکرار PCR برای HSV-1 و HSV-2 توصیه شده است.",
        note: "پاسخ دانشگاه: A."
    }

];
