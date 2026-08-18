const cerebrovascularQuestions = [

    // =========================
    // سؤال ۱
    // =========================

    {
        source: "تهران ۹۳",

        question: `
        بیمار خانم ۵۶ ساله با سابقه دیابت و هایپرتنشن که از روز گذشته
        به طور ناگهانی دچار ضعف نیمه راست بدن در حد دوپنجم در اندام
        فوقانی و تحتانی به همراه کاهش حس سطحی همان سمت و اختلال میدان
        بینایی به صورت همونیموس همی آنوپی سمت راست گشته است.
        سطح و محتوای هوشیاری و تکلم نرمال است.
        با توجه به علائم و یافته‌های فوق محتمل‌ترین درگیری عروقی کدام است؟
        `,

        options: [
            `شاخه فوقانی شریان مغزی میانی
            <span class="english">MCA</span>`,

            `شریان مغزی خلفی
            <span class="english">PCA</span>`,

            `شریان کوروئیدال قدامی
            <span class="english">Anterior Choroidal Artery</span>`,

            `شاخه تحتانی شریان مغزی میانی
            <span class="english">MCA</span>`
        ],

        correct: 2,

        explanation: `
        ترکیب همی‌پارزی، اختلال حسی و همی‌آنوبی همونیموس
        در سمت مقابل، الگوی کلاسیک درگیری
        <span class="english">Anterior Choroidal Artery</span>
        است.
        `,

        note: `
        <span class="english">
        Hemiparesis + Hemisensory Loss + Homonymous Hemianopia
        </span>
        را به نفع
        <span class="english">Anterior Choroidal Artery</span>
        به خاطر بسپارید.
        `,

        trap: `
        همی‌آنوبی به تنهایی می‌تواند شما را به سمت
        <span class="english">PCA</span>
        هدایت کند، اما همراهی آن با همی‌پارزی و اختلال حسی
        سرنخ مهمی به نفع
        <span class="english">Anterior Choroidal Artery</span>
        است.
        `,

        reference: `
        منابع استاندارد نورولوژی عروقی و آناتومی عروق مغزی
        `
    },


    // =========================
    // سؤال ۲
    // =========================

    {
        source: "تهران ۹۳",

        question: `
        در سکته مغزی همراه با سرگیجه و کاهش شنوایی یک طرفه
        احتمال درگیری کدام یک از شریان‌های زیر بیشتر است؟
        `,

        options: [
            `<span class="english">PCA</span>`,

            `<span class="english">
            Anterior Inferior Cerebellar Artery (AICA)
            </span>`,

            `<span class="english">
            Posterior Inferior Cerebellar Artery (PICA)
            </span>`,

            `<span class="english">
            Vertebral Artery
            </span>`
        ],

        correct: 1,

        explanation: `
        سرگیجه همراه با کاهش شنوایی یک‌طرفه،
        به‌خصوص در زمینه سکته گردش خون خلفی،
        سرنخ مهمی برای درگیری
        <span class="english">AICA</span>
        است.
        `,

        note: `
        <span class="english">
        Vertigo + Ipsilateral Hearing Loss → AICA
        </span>
        `,

        trap: `
        درگیری <span class="english">PICA</span>
        بیشتر با سندرم لترال مدولاری مطرح است،
        در حالی که کاهش شنوایی یک‌طرفه سرنخ مهمی
        برای <span class="english">AICA</span> محسوب می‌شود.
        `,

        reference: `
        منابع استاندارد نورولوژی عروقی و سندرم‌های گردش خون خلفی
        `
    },


    // =========================
    // سؤال ۳
    // =========================

    {
        source: "تهران ۹۳",

        question: `
        بیمار ۶۰ ساله دیابتی با علائم اختلال سطحی و عمقی
        سمت راست بدن و صورت همراه با پارزی خفیف در همین سمت
        مراجعه کرده است. با توجه به علائم کلینیکی انسداد
        کدام شریان زیر محتمل‌تر است؟
        `,

        options: [
            `<span class="english">Interpeduncular</span>`,

            `<span class="english">Thalamoperforating</span>`,

            `<span class="english">Thalamogeniculate</span>`,

            `<span class="english">Anterior Choroidal</span>`
        ],

        correct: 2,

        explanation: `
        درگیری تالاموس می‌تواند باعث اختلال حس سطحی
        و عمقی در صورت و بدن سمت مقابل شود.
        در این سؤال پاسخ مورد انتظار
        <span class="english">Thalamogeniculate</span>
        است.
        `,

        note: `
        درگیری تالاموس را در بیمار دارای
        <span class="english">Contralateral Hemisensory Loss</span>
        در نظر داشته باشید.
        `,

        trap: `
        وجود پارزی خفیف ممکن است باعث شود
        <span class="english">Anterior Choroidal</span>
        به ذهن برسد؛ اما الگوی غالب حسی و درگیری
        صورت و بدن، سؤال را به سمت تالاموس هدایت می‌کند.
        `,

        reference: `
        منابع استاندارد آناتومی عروقی تالاموس و نورولوژی عروقی
        `
    },


    // =========================
    // سؤال ۴
    // =========================

    {
        source: "تهران ۹۳",

        question: `
        کدام ژن با آمیلوئید آنژیوپاتی مرتبط است؟
        `,

        options: [
            `<span class="english">APOE2</span>`,
            `<span class="english">APOE4</span>`,
            `<span class="english">PARK7</span>`,
            `<span class="english">PARK2</span>`
        ],

        correct: 1,

        explanation: `
        طبق پاسخنامه آزمون تهران ۹۳،
        پاسخ صحیح <span class="english">APOE4</span> است.

        <span class="english">APOE4</span> با افزایش خطر
        <span class="english">Cerebral Amyloid Angiopathy</span>
        ارتباط دارد.
        `,

        note: `
        <span class="english">
        APOE4 → Cerebral Amyloid Angiopathy
        </span>
        `,

        trap: `
        در این سؤال پاسخنامه رسمی آزمون ملاک قرار گرفته است.
        `,

        reference: `
        منابع نورولوژی عروقی و مطالعات ژنتیکی
        Cerebral Amyloid Angiopathy
        `
    },


    // =========================
    // سؤال ۵
    // =========================

    {
        source: "تهران ۹۳",

        question: `
        بیماری با علائم یک ساعته همی‌پارزی گذرا مراجعه می‌کند.
        به نظر شما کدام یک از مناطق زیر منشاء ایسکمیک کمتری می‌باشد؟
        `,

        options: [
            `آمبولی با منشاء قلبی`,
            `آمبولی با منشاء آئورت`,
            `آمبولی با منشاء کاروتید`,
            `آمبولی با منشاء شریان مغز میانی`
        ],

        correct: 3,

        explanation: `
        در این سؤال، قلب، آئورت و شریان کاروتید
        به عنوان منابع بالقوه آمبولی مطرح هستند،
        در حالی که <span class="english">MCA</span>
        بیشتر محل گیر افتادن آمبولی است تا منشاء آن.
        `,

        note: `
        منبع آمبولی را با محل گیر افتادن آمبولی اشتباه نکنید.
        `,

        trap: `
        <span class="english">MCA</span>
        معمولاً محل درگیری آمبولی در گردش قدامی است
        و نه منبع اصلی آمبولی.
        `,

        reference: `
        منابع استاندارد سکته مغزی و مکانیسم‌های ایسکمی مغزی
        `
    },


    // =========================
    // سؤال ۶
    // =========================

    {
        source: "تهران ۹۳",

        question: `
        خانم ۵۰ ساله دیابتی با گذشت ۶ ساعت و با تشخیص استروک مراجعه می‌کند.
        در ارزیابی انسداد شریان مغز میانی دیده می‌شود.
        کدام روش درمانی برای نامبرده ارجح است؟
        `,

        options: [
            `تزریق ترومبولیتیک وریدی`,
            `تزریق ترومبولیتیک شریانی`,
            `تزریق ترومبولیتیک شریانی و استنت`,
            `درمان با آسپیرین و پلاویکس`
        ],

        correct: 3,

        explanation: `
        طبق پاسخنامه آزمون تهران ۹۳،
        با توجه به گذشت ۶ ساعت،
        پاسخ صحیح گزینه D یعنی درمان با آسپیرین و پلاویکس
        اعلام شده است.
        `,

        note: `
        در این بانک سؤال، برای سؤالات آزمونی قدیمی،
        کلید رسمی همان آزمون ملاک پاسخ صحیح است.
        `,

        trap: `
        توجه کنید که پاسخ این سؤال مربوط به پاسخنامه آزمون سال ۹۳
        است و ممکن است با رویکردهای امروزی درمان سکته مغزی متفاوت باشد.
        `,

        reference: `
        پاسخنامه آزمون تهران ۹۳؛
        برای مقایسه با رویکرد امروزی، گایدلاین‌های AHA/ASA
        مورد استفاده قرار گیرند.
        `
    },


    // =========================
    // سؤال ۷
    // =========================

    {
        source: "تهران ۹۳",

        question: `
        بیمار ۴۵ ساله با علائم همی‌پارزی سمت راست با دیزآرتری
        همراه با درد گردن، پتوز و میوز سمت چپ مراجعه نموده است.
        به نظر شما چه عامل عروقی در این بیمار مطرح است؟
        `,

        options: [
            `<span class="english">Fibromuscular Dysplasia</span>`,
            `<span class="english">Giant Cell Arteritis</span>`,
            `<span class="english">Takayasu Arteritis</span>`,
            `<span class="english">Carotid Dissection</span>`
        ],

        correct: 3,

        explanation: `
        درد گردن همراه با پتوز و میوز و ایجاد
        <span class="english">Horner Syndrome</span>
        در یک فرد نسبتاً جوان، سرنخ مهمی برای
        <span class="english">Carotid Dissection</span>
        است.
        `,

        note: `
        <span class="english">
        Neck Pain + Partial Horner Syndrome
        </span>
        `,

        trap: `
        درد گردن و <span class="english">Horner Syndrome</span>
        را در بیمار جوان با سکته ایسکمیک نباید نادیده گرفت.
        `,

        reference: `
        منابع استاندارد نورولوژی عروقی و دیسکشن شریان کاروتید
        `
    },


    // =========================
    // سؤال ۸
    // =========================

    {
        source: "تهران ۹۳",

        question: `
        خانم ۲۸ ساله‌ای به علت درد و ضعف در اندام فوقانی راست
        به دنبال کار کردن مراجعه کرده است و پالس شریان براکیال
        کاهش یافته است. بر اساس بیشترین تشخیص احتمالی
        کدام درمان را پیشنهاد می‌کنید؟
        `,

        options: [
            `آسپرین`,
            `وارفارین`,
            `پردنیزولون`,
            `پنتوکسی‌فیلین`
        ],

        correct: 2,

        explanation: `
        با توجه به سن پایین، درگیری عروق اندام فوقانی
        و کاهش نبض، اگر تشخیص مورد نظر
        <span class="english">Takayasu Arteritis</span>
        باشد، کورتیکواستروئید مانند پردنیزولون
        درمان اصلی بیماری فعال است.
        `,

        note: `
        <span class="english">
        Takayasu Arteritis
        </span>
        را در زنان جوان با درگیری عروق بزرگ
        و کاهش یا عدم تقارن نبض‌ها در نظر داشته باشید.
        `,

        trap: `
        درمان ضدپلاکتی به تنهایی درمان بیماری التهابی
        زمینه‌ای نیست؛ در بیماری فعال، سرکوب التهاب اهمیت اصلی دارد.
        `,

        reference: `
        منابع استاندارد واسکولیت‌های عروق بزرگ
        `
    },


    // =========================
    // سؤال ۹
    // =========================

    {
        source: "تهران ۹۳",

        question: `
        در خونریزی مغزی ناشی از وارفارین همراه با
        <span class="english">INR</span> بالا،
        کدام داروی زیر سریع‌تر زمان
        <span class="english">INR</span> را اصلاح می‌کند؟
        `,

        options: [
            `<span class="english">Recombinant Activated Factor VII</span>`,
            `<span class="english">FFP</span>`,
            `<span class="english">PCC</span>`,
            `<span class="english">Vitamin K</span>`
        ],

        correct: 2,

        explanation: `
        <span class="english">PCC</span>
        باعث جایگزینی سریع فاکتورهای انعقادی وابسته به ویتامین K
        می‌شود و در خونریزی شدید ناشی از وارفارین برای اصلاح سریع
        انعقاد به کار می‌رود.
        `,

        note: `
        <span class="english">
        Warfarin-associated ICH → PCC + IV Vitamin K
        </span>
        `,

        trap: `
        <span class="english">Vitamin K</span>
        برای برگشت پایدار اثر وارفارین ضروری است،
        اما اثر آن به سرعت <span class="english">PCC</span> نیست.
        `,

        reference: `
        گایدلاین‌های مدیریت خونریزی مرتبط با وارفارین
        و منابع استاندارد نورولوژی عروقی
        `
    },


    // =========================
    // سؤال ۱۰
    // =========================

    {
        source: "تهران ۹۳",

        question: `
        بیمار خانم ۲۵ ساله با علائم آنسفالوپاتی،
        <span class="english">Confusion</span>،
        اختلال رفتاری و سردرد مراجعه کرده است.

        در معاینات نورولوژیک علاوه بر موارد فوق،
        تاری دید دوطرفه و آتاکسی نیز دارد.

        در معاینه چشم‌پزشکی و آنژیوگرافی فلورسئین
        علائم <span class="english">BRAO</span>
        با درگیری قابل توجه <span class="english">Corpus Callosum</span>
        که نمای <span class="english">Snowball Appearance</span>
        را نشان می‌دهد.

        با توجه به تشخیص احتمالی،
        همه موارد زیر صحیح است غیر از؟
        `,

        options: [
            `یک <span class="english">Immune-mediated Endotheliopathy</span>
            می‌باشد.`,

            `<span class="english">IVIG</span>
            تراپی می‌تواند در درمان آن کمک‌کننده باشد.`,

            `کاهش شنوایی به طور شایعی ظاهر می‌شود.`,

            `در بررسی <span class="english">CSF</span>
            اغلب پلئوسیتوز با پروتئین نرمال دارد.`
        ],

        correct: 3,

        explanation: `
        شرح حال به شدت به نفع
        <span class="english">Susac Syndrome</span>
        است.

        سه جزء کلاسیک این بیماری عبارت‌اند از:

        <br><br>

        <span class="english">Encephalopathy</span>
        +
        <span class="english">Branch Retinal Artery Occlusions</span>
        +
        <span class="english">Sensorineural Hearing Loss</span>

        <br><br>

        ضایعات <span class="english">Snowball</span>
        در <span class="english">Corpus Callosum</span>
        نیز بسیار تیپیک هستند.

        بنابراین گزینه D نادرست است.
        `,

        note: `
        <span class="english">
        Susac Syndrome = Brain + Retina + Inner Ear
        </span>
        `,

        trap: `
        وجود همزمان آنسفالوپاتی، انسداد شریان‌های شبکیه
        و کاهش شنوایی را به عنوان سه‌گانه
        <span class="english">Susac</span>
        به خاطر بسپارید.
        `,

        reference: `
        منابع استاندارد Neuroimmunology و Susac Syndrome
        `
    },


    // =========================
    // سؤال ۱۱
    // =========================

    {
        source: "تهران ۹۳",

        question: `
        بیمار ۴۰ ساله با علائم دمانس به درمانگاه مراجعه کرده است.
        وی سابقه حملات استروک در چند نوبت از دو سال قبل را دارد.
        سابقه هایپرتنشن و دیابت ندارد و سیگاری نیز نبوده است.

        در بررسی ژنتیک موتاسیون در ژن
        <span class="english">NOTCH3</span>
        روی کروموزوم ۱۹ دارد.

        با توجه به تشخیص بیمار، همه موارد زیر در تصویر
        <span class="english">MRI</span>
        بیمار صحیح است به جز؟
        `,

        options: [
            `<span class="english">Multiple Confluent White Matter Lesions</span>`,
            `ضایعات کوچکتر در حوالی <span class="english">Basal Ganglia</span>
            می‌تواند دیده شود.`,
            `وجود ضایعات پوستریور به شاخ تمپورال بطن‌های طرفی اختصاصی است.`,
            `ضایعات <span class="english">MRI</span> می‌تواند آسیمتریک باشد.`
        ],

        correct: 2,

        explanation: `
        بیمار مبتلا به <span class="english">CADASIL</span>
        است که ناشی از جهش ژن <span class="english">NOTCH3</span>
        می‌باشد.

        در MRI، ضایعات ماده سفید به‌ویژه در
        <span class="english">Anterior Temporal Poles</span>
        و <span class="english">External Capsule</span>
        از یافته‌های شاخص هستند.

        بنابراین گزینه C صحیح نیست.
        `,

        note: `
        <span class="english">
        CADASIL → Anterior Temporal Poles + External Capsule
        </span>
        `,

        trap: `
        <span class="english">Temporal Pole</span>
        را با <span class="english">Temporal Horn</span>
        اشتباه نکنید.
        `,

        reference: `
        GeneReviews – CADASIL
        `
    },


    // =========================
    // سؤال ۱۲
    // =========================

    {
        source: "تهران ۹۳",

        question: `
        آقای ۷۵ ساله با علائم آفازی و همی‌پارزی سمت راست
        به صورت گذرا که در مدت ۱۵ دقیقه برگشت نموده است
        مراجعه کرده است.

        <span class="english">CT</span> اسکن مغز طبیعی است.

        بنابر یافته‌های سونوگرافی و
        <span class="english">CT Angiography</span>،
        کاروتید داخلی راست ۶۰٪ و سمت چپ ۷۵٪ تنگی دارد.

        کدام درمان را پیشنهاد می‌کنید؟
        `,

        options: [
            `با توجه به سن، درمان دارویی با آسپرین توصیه می‌شود.`,
            `با توجه به ریسک جراحی کمتر از ۳٪،
            اندآرترکتومی کاروتید چپ انجام شود.`,
            `درمان دارویی با وارفارین توصیه می‌شود.`,
            `اقدام به آناستوموز شریان
            <span class="english">Middle Cerebral</span>
            به <span class="english">Superficial Temporal</span> شود.`
        ],

        correct: 1,

        explanation: `
        بیمار دچار یک حمله ایسکمیک گذرا در قلمرو کاروتید چپ
        شده و تنگی کاروتید داخلی چپ ۷۵٪ دارد.

        در بیمار دارای
        <span class="english">Symptomatic Severe Carotid Stenosis</span>،
        انجام <span class="english">Carotid Endarterectomy</span>
        در صورت مناسب بودن ریسک جراحی توصیه می‌شود.
        `,

        note: `
        <span class="english">
        Symptomatic Carotid Stenosis ≥70% → CEA
        </span>
        `,

        trap: `
        تنگی ۷۵٪ در سمت چپ است و علائم بیمار نیز
        با نیمکره چپ سازگار است؛ بنابراین این تنگی
        علامت‌دار محسوب می‌شود.
        `,

        reference: `
        AHA/ASA Guidelines for Extracranial Carotid Disease
        `
    },


    // =========================
    // سؤال ۱۳
    // =========================

    {
        source: "تهران ۹۳",

        question: `
        در مورد <span class="english">Cavernous Malformation</span>
        همه موارد زیر صحیح است بجز؟
        `,

        options: [
            `شیوع آن از <span class="english">AVM</span> کمتر می‌باشد.`,
            `در حدود نیمی از آنها در ساقه مغز وجود دارند.`,
            `تمایل به خونریزی به طور واضحی کمتر از
            <span class="english">AVM</span> می‌باشد.`,
            `<span class="english">MRI</span> در تشخیص آن را تأیید می‌کند.`
        ],

        correct: 2,

        explanation: `
        طبق پاسخنامه آزمون، پاسخ صحیح گزینه C است.
        <span class="english">Cavernous Malformation</span>
        یک ناهنجاری عروقی متفاوت از
        <span class="english">AVM</span>
        است و MRI روش اصلی تشخیص آن محسوب می‌شود.
        `,

        note: `
        نمای کلاسیک cavernoma در MRI به صورت
        <span class="english">Popcorn / Mulberry</span>
        توصیف می‌شود.
        `,

        trap: `
        پاسخ این سؤال مطابق کلید موردنظر شما تنظیم شده است.
        `,

        reference: `
        منابع استاندارد Cerebrovascular Malformations
        `
    },


    // =========================
    // سؤال ۱۴
    // =========================

    {
        source: "دانشگاه ایران ۹۳",

        question: `
        درگیری کدام یک از مناطق زیر در
        <span class="english">MRI</span>
        بیماران <span class="english">CADASIL</span>
        از همه کاراکترستیک‌تر است؟
        `,

        options: [
            `<span class="english">Periventricular White Matter</span>`,
            `<span class="english">Internal Capsule</span>`,
            `<span class="english">Cerebellar Hemispheres</span>`,
            `<span class="english">Temporal Poles</span>`
        ],

        correct: 3,

        explanation: `
        درگیری <span class="english">Anterior Temporal Poles</span>
        یکی از یافته‌های بسیار شاخص و کاراکترستیک
        در <span class="english">CADASIL</span> است.

        بنابراین پاسخ صحیح گزینه D است.
        `,

        note: `
        <span class="english">
        CADASIL → Anterior Temporal Poles + External Capsule
        </span>
        `,

        trap: `
        ضایعات <span class="english">Periventricular</span>
        نیز در CADASIL شایع هستند، اما
        <span class="english">Temporal Poles</span>
        از یافته‌های شاخص‌تر بیماری هستند.
        `,

        reference: `
        GeneReviews – CADASIL
        `
    },


    // =========================
    // سؤال ۱۵
    // =========================

    {
        source: "دانشگاه ایران ۹۳",

        question: `
        در <span class="english">Vertebral Dissection</span>
        همه موارد زیر دیده می‌شود به جز؟
        `,

        options: [
            `<span class="english">Cortical Blindness</span>`,
            `<span class="english">Wallenberg Syndrome</span>`,
            `<span class="english">Neck Pain</span>`,
            `<span class="english">AION</span>`
        ],

        correct: 3,

        explanation: `
        طبق پاسخنامه موردنظر شما،
        پاسخ صحیح گزینه D یعنی
        <span class="english">AION</span> است.

        <span class="english">Vertebral Artery Dissection</span>
        می‌تواند با درد گردن و علائم ایسکمی در گردش خون خلفی
        تظاهر کند و در صورت درگیری ناحیه لترال مدولا،
        سندرم <span class="english">Wallenberg</span> ایجاد شود.

        <span class="english">AION</span>
        تظاهر کلاسیک دیسکشن شریان ورتبرال نیست.
        `,

        note: `
        <span class="english">
        Vertebral Dissection → Posterior Circulation Ischemia
        </span>
        `,

        trap: `
        <span class="english">AION</span>
        را به عنوان تظاهر کلاسیک دیسکشن ورتبرال در نظر نگیرید.
        `,

        reference: `
        منابع استاندارد Vertebral Artery Dissection
        و Posterior Circulation Stroke
        `
    },


    // =========================
    // سؤال ۱۶
    // =========================

    {
        source: "دانشگاه ایران ۹۳",

        question: `
        تفاوت دیسکشن کاروتید با تنگی آترواسکلروتیک
        در کدام یک از موارد زیر است؟
        `,

        options: [
            `شدت تنگی`,
            `علائم نورولوژیک`,
            `تغییرات همودینامیک داخل مغز`,
            `محل تنگی`
        ],

        correct: 3,

        explanation: `
        تفاوت مهم دیسکشن کاروتید با تنگی آترواسکلروتیک
        در محل و شکل درگیری عروقی است.

        دیسکشن معمولاً در بخش‌های متفاوتی از شریان
        نسبت به پلاک آترواسکلروتیک ایجاد می‌شود
        و می‌تواند با هماتوم دیواره و تنگی طولانی همراه باشد.

        بنابراین پاسخ صحیح گزینه D است.
        `,

        note: `
        <span class="english">
        Carotid Dissection → Different Location + Mural Hematoma
        </span>
        `,

        trap: `
        شدت تنگی به تنهایی نمی‌تواند دیسکشن را
        از آترواسکلروز متمایز کند.
        `,

        reference: `
        منابع استاندارد Carotid Artery Dissection
        و Cerebrovascular Disease
        `
    },


    // =========================
    // سؤال ۱۷
    // =========================

    {
        source: "دانشگاه ایران ۹۳",

        question: `
        همه علائم زیر می‌تواند به دلیل سندرم
        <span class="english">Top of Basilar</span>
        باشد به جز؟
        `,

        options: [
            `<span class="english">Monocular Blindness</span>`,
            `<span class="english">Left Hemiparesis</span>`,
            `<span class="english">Cortical Blindness</span>`,
            `<span class="english">Acute Confusional State</span>`
        ],

        correct: 0,

        explanation: `
        سندرم <span class="english">Top of Basilar</span>
        می‌تواند ساختارهای تالاموس، مغز میانی و
        مسیرهای بینایی را درگیر کند و باعث اختلالات
        هوشیاری، حرکتی و بینایی شود.

        <span class="english">Monocular Blindness</span>
        بیشتر به درگیری مسیر بینایی پیش از کیاسما
        مانند شبکیه یا عصب بینایی مربوط است.

        بنابراین پاسخ صحیح گزینه A است.
        `,

        note: `
        <span class="english">
        Top of Basilar → Midbrain + Thalamus + Occipital Visual Pathways
        </span>
        `,

        trap: `
        <span class="english">Monocular</span>
        را با <span class="english">Cortical Blindness</span>
        اشتباه نکنید؛ نابینایی قشری معمولاً دوطرفه است.
        `,

        reference: `
        منابع استاندارد Posterior Circulation Stroke
        و Top of Basilar Syndrome
        `
    },


    // =========================
    // سؤال ۱۸
    // =========================

    {
        source: "دانشگاه ایران ۹۳",

        question: `
        در مورد کاروتید بروئی کدام یک از گزینه‌های زیر
        صحیح‌تر است؟
        `,

        options: [
            `شدت بروئی با شدت تنگی در اولتراسوند،
            نسبت مستقیم دارد.`,

            `بروئی صرفاً در سمت کاروتید تنگ یا مسدود شنیده می‌شود.`,

            `بروئی اکولر نشانه افزایش جریان در سمت درگیر است.`,

            `بروئی کاروتید ممکن است به دلیل تنگی کاروتید خارجی باشد.`
        ],

        correct: 3,

        explanation: `
        <span class="english">Carotid Bruit</span>
        الزاماً شدت تنگی را نشان نمی‌دهد و می‌تواند
        در شرایط مختلف عروقی شنیده شود.

        همچنین ممکن است در اثر تنگی
        <span class="english">External Carotid Artery</span>
        ایجاد شود.

        بنابراین پاسخ صحیح گزینه D است.
        `,

        note: `
        <span class="english">
        Carotid Bruit ≠ Reliable Measure of Stenosis Severity
        </span>
        `,

        trap: `
        در انسداد کامل کاروتید ممکن است دیگر جریان کافی
        برای ایجاد بروئی وجود نداشته باشد؛ بنابراین
        نبود بروئی، انسداد را رد نمی‌کند.
        `,

        reference: `
        منابع استاندارد Carotid Stenosis و Vascular Examination
        `
    },


    // =========================
    // سؤال ۱۹
    // =========================

    {
        source: "دانشگاه ایران ۹۳",

        question: `
        در تنگی بدون علامت کاروتید،
        حداقل تنگی که اندیکاسیون اندآرترکتومی دارد چقدر است؟
        `,

        options: [
            `<span class="english">50%</span>`,
            `<span class="english">80%</span>`,
            `<span class="english">99%</span>`,
            `<span class="english">70%</span>`
        ],

        correct: 3,

        explanation: `
        طبق پاسخنامه این آزمون،
        حداقل تنگی موردنظر برای اندآرترکتومی در
        <span class="english">Asymptomatic Carotid Stenosis</span>
        برابر ۷۰٪ در نظر گرفته شده است.

        بنابراین پاسخ گزینه D است.
        `,

        note: `
        <span class="english">
        Asymptomatic Carotid Stenosis → ≥70%
        </span>
        `,

        trap: `
        معیارهای امروزی انتخاب بیمار برای
        <span class="english">CEA</span>
        علاوه بر درصد تنگی، به سن، امید به زندگی،
        ریسک جراحی و درمان طبی بهینه نیز وابسته هستند.
        `,

        reference: `
        پاسخنامه دانشگاه ایران ۹۳؛
        منابع استاندارد Carotid Endarterectomy
        `
    },


    // =========================
    // سؤال ۲۰
    // =========================

    {
        source: "دانشگاه ایران ۹۳",

        question: `
        در کدام یک از موارد زیر استفاده از آنتی‌کواگولان
        (وارفارین) تأثیر بیشتری دارد؟
        `,

        options: [
            `<span class="english">Recurrent TIA</span>`,
            `پلاک قوس آئورت`,
            `<span class="english">PFO</span>`,
            `<span class="english">Transient AF</span>`
        ],

        correct: 3,

        explanation: `
        در این سؤال، وجود
        <span class="english">Atrial Fibrillation</span>
        به عنوان یک منبع قلبی آمبولی، اندیکاسیون مهم
        برای درمان ضدانعقادی محسوب می‌شود.

        بنابراین پاسخ موردنظر گزینه D است.
        `,

        note: `
        <span class="english">
        AF → Cardioembolic Stroke Risk → Anticoagulation
        </span>
        `,

        trap: `
        <span class="english">PFO</span>
        به‌تنهایی معمولاً معادل اندیکاسیون قطعی
        برای وارفارین نیست.
        `,

        reference: `
        منابع استاندارد Cardioembolic Stroke Prevention
        `
    },


    // =========================
    // سؤال ۲۱
    // =========================

    {
        source: "دانشگاه ایران ۹۳",

        question: `
        آقای ۲۵ ساله با سرگیجه حاد مراجعه کرده است.
        در معاینه نیستاگموس
        <span class="english">Bidirectional</span>
        دارد.

        چشم چپ نسبت به چشم راست میوزیس دارد.
        سرگیجه با هر حرکتی بدتر می‌شود.

        کدام اقدام زیر مناسب‌تر است؟
        `,

        options: [
            `بستری و <span class="english">LP</span>`,
            `<span class="english">Electronystagmography</span>`,
            `ادیومتری سرپایی`,
            `داپلر عروق گردن`
        ],

        correct: 3,

        explanation: `
        در یک بیمار جوان با سرگیجه حاد،
        نیستاگموس دوطرفه و وجود یافته‌های عصبی همراه،
        باید به یک علت عروقی در گردش خون خلفی،
        از جمله <span class="english">Vertebral Artery Dissection</span>
        فکر کرد.

        طبق کلید موردنظر شما، پاسخ گزینه D است.
        `,

        note: `
        <span class="english">
        Young Patient + Acute Vertigo + Neurologic Signs
        → Consider Vertebral Dissection
        </span>
        `,

        trap: `
        سرگیجه همراه با یافته عصبی را نباید صرفاً
        به بیماری گوش داخلی نسبت داد.
        `,

        reference: `
        منابع استاندارد Vertebral Artery Dissection
        و Posterior Circulation Ischemia
        `
    },


    // =========================
    // سؤال ۲۲
    // =========================

    {
        source: "دانشگاه ایران ۹۳",

        question: `
        کدام یک از یافته‌های زیر در
        <span class="english">Imaging</span>
        دیسکشن کاروتید داخلی شیوع کمتری دارد؟
        `,

        options: [
            `<span class="english">Double Lumen</span>`,
            `<span class="english">Wall Hematoma</span>`,
            `<span class="english">String Sign</span>`,
            `<span class="english">Tapering Occlusion</span>`
        ],

        correct: 0,

        explanation: `
        در دیسکشن کاروتید،
        یافته‌هایی مانند
        <span class="english">Mural Hematoma</span>،
        <span class="english">Tapering Stenosis/Occlusion</span>،
        <span class="english">Intimal Flap</span>
        و <span class="english">Double Lumen</span>
        ممکن است دیده شوند.

        <span class="english">Double Lumen</span>
        اگرچه یک یافته کلاسیک و نسبتاً اختصاصی برای دیسکشن است،
        اما نسبت به برخی یافته‌های غیرمستقیم شیوع کمتری دارد.

        بنابراین پاسخ صحیح گزینه A است.
        `,

        note: `
        <span class="english">
        Double Lumen + Intimal Flap
        </span>
        از یافته‌های اختصاصی دیسکشن هستند.
        `,

        trap: `
        عدم مشاهده <span class="english">Double Lumen</span>
        دیسکشن را رد نمی‌کند.
        `,

        reference: `
        Adams and Victor's Principles of Neurology؛
        منابع استاندارد تصویربرداری Cervical Artery Dissection
        `
    },


    // =========================
    // سؤال ۲۳
    // =========================

    {
        source: "دانشگاه ایران ۹۳",

        question: `
        در بیمار با سکته مغز میانی همه فاکتورهای زیر
        به نفع همی‌کرانیوکتومی می‌باشد به جز؟
        `,

        options: [
            `سن کمتر از ۶۰ سال.`,

            `زمان کمتر از ۴۸ ساعت از شروع سکته.`,

            `درگیری نیمکره مغلوب.`,

            `وجود هرنی و فشار شدید به میدبرین.`
        ],

        correct: 3,

        explanation: `
        همی‌کرانیوکتومی دکمپرسیو در
        <span class="english">Malignant MCA Infarction</span>
        می‌تواند در بیماران منتخب، به‌ویژه افراد جوان‌تر
        و در ساعات اولیه بیماری، مفید باشد.

        طبق پاسخنامه موردنظر شما، گزینه D پاسخ صحیح است.
        `,

        note: `
        <span class="english">
        Malignant MCA Infarction → Early Decompressive Hemicraniectomy
        </span>
        `,

        trap: `
        وجود هرنی شدید و فشار شدید بر ساختارهای حیاتی
        نشان‌دهنده مرحله پیشرفته آسیب است و نباید به عنوان
        یک فاکتور مطلوب برای تصمیم‌گیری اولیه تلقی شود.
        `,

        reference: `
        منابع استاندارد Malignant MCA Infarction
        و Decompressive Hemicraniectomy
        `
    },


    // =========================
    // سؤال ۲۴
    // =========================

    {
        source: "دانشگاه ایران ۹۳",

        question: `
        خانم ۳۵ ساله‌ای که سابقه میگرن داشته است،
        از سه روز قبل به دنبال سرماخوردگی و مصرف سودوافدرین،
        سه بار دچار سردرد شده است که هر بار
        <span class="english">Thunderclap</span>
        بوده است و در کمتر از یک دقیقه به حداکثر رسیده است.

        <span class="english">MRI</span>
        مغز بیمار نرمال است.

        کدام اقدام مناسب‌تر است؟
        `,

        options: [
            `<span class="english">EEG</span>`,
            `<span class="english">MRI with Contrast</span>`,
            `<span class="english">MR Angiography</span>`,
            `<span class="english">MR Venography</span>`
        ],

        correct: 2,

        explanation: `
        سردردهای مکرر از نوع
        <span class="english">Thunderclap Headache</span>
        به‌خصوص پس از مصرف داروهای سمپاتومیمتیک مانند
        سودوافدرین، احتمال
        <span class="english">Reversible Cerebral Vasoconstriction Syndrome</span>
        را مطرح می‌کند.

        طبق پاسخنامه موردنظر شما،
        انجام <span class="english">MR Angiography</span>
        مناسب‌ترین اقدام است.
        `,

        note: `
        <span class="english">
        Recurrent Thunderclap Headache → Think RCVS
        </span>
        `,

        trap: `
        سابقه میگرن نباید باعث شود
        <span class="english">Thunderclap Headache</span>
        را به‌سادگی به میگرن نسبت دهیم.
        `,

        reference: `
        منابع استاندارد Thunderclap Headache و
        Reversible Cerebral Vasoconstriction Syndrome
        `
    },


    // =========================
    // سؤال ۲۵
    // =========================

    {
        source: "دانشگاه ایران ۹۳",

        question: `
        همه یافته‌های زیر در تنگی شدید شریانی در
        <span class="english">TCD</span>
        در محل تنگی دیده می‌شود به جز؟
        `,

        options: [
            `افزایش سرعت دیاستولیک`,

            `افزایش سرعت سیستولیک`,

            `جریان <span class="english">Bidirectional</span>`,

            `<span class="english">Spectral Turbulence</span>`
        ],

        correct: 2,

        explanation: `
        در تنگی شدید شریانی،
        افزایش سرعت جریان و
        <span class="english">Spectral Broadening/Turbulence</span>
        می‌تواند در محل تنگی مشاهده شود.

        طبق پاسخنامه موردنظر شما،
        جریان <span class="english">Bidirectional</span>
        پاسخ صحیح است.
        `,

        note: `
        <span class="english">
        Severe Stenosis → Increased Velocity + Spectral Broadening
        </span>
        `,

        trap: `
        افزایش سرعت سیستولیک و دیاستولیک و
        <span class="english">Spectral Turbulence</span>
        را از یافته‌های مهم تنگی قابل توجه در
        <span class="english">TCD</span>
        در نظر بگیرید.
        `,

        reference: `
        منابع استاندارد Transcranial Doppler و Cerebrovascular Hemodynamics
        `
    }

];
cerebrovascularQuestions.push(

    // سؤال ۲۶
    {
        source: "دانشگاه بهشتی ۹۳",

        question: `
        در اپی‌لپسی
        <span class="english">Post-Stroke</span>
        کدام عبارت صحیح است؟
        `,

        options: [
            `تا آخر عمر فرد باید داروی ضد صرع بگیرد.`,

            `بعد از یک سال درمان باید
            <span class="english">EEG</span>
            انجام داد و اگر غیرطبیعی بود درمان ادامه یابد.`,

            `نتایج <span class="english">EEG</span>
            برای ادامه درمان ارزشی ندارد.`,

            `احتیاج به درمان ندارد.`
        ],

        correct: 1,

        explanation: `
        طبق پاسخنامه دانشگاه بهشتی ۹۳، پاسخ صحیح گزینه B است.

        در اپی‌لپسی پس از سکته مغزی، درمان ضدتشنج
        می‌تواند برای یک دوره ادامه پیدا کند و پس از آن
        ارزیابی مجدد با <span class="english">EEG</span>
        در تصمیم‌گیری برای ادامه درمان کمک‌کننده است.

        وجود فعالیت اپی‌لپتیک یا امواج فوکال غیرطبیعی
        می‌تواند به نفع ادامه درمان باشد.
        `,

        note: `
        <span class="english">
        Post-Stroke Epilepsy → AED + EEG Follow-up
        </span>
        `,

        trap: `
        عبارت «تا آخر عمر» یک حکم مطلق است و برای همه بیماران
        قابل تعمیم نیست.
        `,

        reference: `
        پاسخنامه دانشگاه بهشتی ۹۳؛
        منابع استاندارد Post-Stroke Epilepsy
        `
    },


    // سؤال ۲۷
    {
        source: "دانشگاه بهشتی ۹۳",

        question: `
        کدام یک از عوارض زیر در بیمار مبتلا به
        خونریزی ساب‌آراکنوئید بیشتر دیده می‌شود؟
        `,

        options: [
            `<span class="english">Rebleeding</span>`,

            `<span class="english">Vasospasm</span>`,

            `هیدروسفالی`,

            `تشنج`
        ],

        correct: 0,

        explanation: `
        طبق پاسخنامه دانشگاه بهشتی ۹۳،
        پاسخ صحیح گزینه A یعنی
        <span class="english">Rebleeding</span> است.

        خونریزی مجدد یکی از عوارض مهم
        <span class="english">Subarachnoid Hemorrhage</span>
        است و در منابع کلاسیک حدود ۳۰ درصد موارد گزارش شده است.
        `,

        note: `
        <span class="english">
        SAH → Rebleeding
        </span>
        `,

        trap: `
        <span class="english">Vasospasm</span>
        نیز از عوارض مهم SAH است، اما در این سؤال
        پاسخنامه آزمون، <span class="english">Rebleeding</span>
        را به عنوان پاسخ صحیح اعلام کرده است.
        `,

        reference: `
        پاسخنامه دانشگاه بهشتی ۹۳؛
        منابع استاندارد Subarachnoid Hemorrhage
        `
    },


    // سؤال ۲۸
    {
        source: "دانشگاه بهشتی ۹۳",

        question: `
        در سندروم استروک مرتبط با شریان
        <span class="english">Anterior Choroidal</span>
        کدام مورد صحیح نیست؟
        `,

        options: [
            `علائم شامل همی‌پلژی و همی‌هیپوستزی و
            همونیموس همی‌آنوبی مقابل ناشی از درگیری
            بازوی قدامی کپسول داخلی است.`,

            `شریان کوروئیدال قدامی از کاروتید داخلی
            درست بالای شریان
            <span class="english">Posterior Communicating</span>
            منشا می‌گیرد.`,

            `این شریان خون‌رسانی به
            <span class="english">Choroid Plexus</span>
            را انجام می‌دهد.`,

            `آناستوموز با شریان کوروئیدال خلفی دارد.`
        ],

        correct: 0,

        explanation: `
        پاسخ صحیح گزینه A است.

        سندرم
        <span class="english">Anterior Choroidal Artery</span>
        به طور کلاسیک با همی‌پلژی، همی‌هیپوستزی
        و همونیموس همی‌آنوبی در سمت مقابل همراه است.

        درگیری راه‌های حرکتی و حسی در
        <span class="english">Posterior Limb of Internal Capsule</span>
        اهمیت دارد؛ بنابراین عبارت مربوط به
        «بازوی قدامی کپسول داخلی» نادرست است.
        `,

        note: `
        <span class="english">
        Anterior Choroidal Syndrome =
        Hemiplegia + Hemisensory Loss + Homonymous Hemianopia
        </span>
        `,

        trap: `
        <span class="english">Anterior Limb</span>
        و
        <span class="english">Posterior Limb</span>
        کپسول داخلی را با یکدیگر اشتباه نکنید.
        `,

        reference: `
        منابع استاندارد Neuroanatomy و Cerebrovascular Disease؛
        پاسخنامه دانشگاه بهشتی ۹۳
        `
    },


    // سؤال ۲۹
    {
        source: "دانشگاه بهشتی ۹۳",

        question: `
        بیماری ۵۰ ساله با دوبینی گذرا و ناگهانی همراه با
        بی‌حسی سمت چپ بدن مراجعه کرده است.

        در زمان معاینه دوبینی از بین رفته بود.

        معاینه فیزیکی نشان می‌دهد که در سمت راست
        افتادگی نسبی پلک و کوچک بودن مردمک راست
        نسبت به چپ دارد.

        مردمک نسبت به نور واکنش مناسب نشان می‌دهد
        و حرکات چشم طبیعی است.

        بیمار در طرف راست آتاکسی خفیفی دارد و
        هیچ‌گونه ضعف عضلانی دیده نمی‌شود.

        ضایعه از نظر آناتومیکی کجاست؟
        `,

        options: [
            `<span class="english">Basal Right Side of Midbrain</span>`,

            `<span class="english">Basal Right Side of Pons</span>`,

            `<span class="english">Dorsolateral Right Side of Medulla</span>`,

            `<span class="english">Dorsolateral Right Side of Midbrain</span>`
        ],

        correct: 2,

        explanation: `
        پاسخ صحیح گزینه C است.

        ترکیب علائم بیمار به نفع
        <span class="english">Wallenberg Syndrome</span>
        و درگیری بخش
        <span class="english">Dorsolateral Medulla</span>
        است.

        بنابراین محل ضایعه در سمت راست،
        بخش دورسولترال مدولا است.
        `,

        note: `
        <span class="english">
        Wallenberg Syndrome → Dorsolateral Medulla
        </span>
        `,

        trap: `
        وجود پتوز و میوز ممکن است ذهن را به سمت
        مغز میانی ببرد، اما الگوی کلی علائم
        با ضایعه دورسولترال مدولا سازگار است.
        `,

        reference: `
        منابع استاندارد Brainstem Neuroanatomy و
        Wallenberg Syndrome؛
        پاسخنامه دانشگاه بهشتی ۹۳
        `
    },


    // سؤال ۳۰
    {
        source: "دانشگاه بهشتی ۹۳",

        question: `
        کدام یک از موارد زیر در بیماری
        <span class="english">Susac Syndrome</span>
        دیده می‌شود؟
        `,

        options: [
            `آنژیوگرافی مغز غیرطبیعی است.`,

            `ضایعات
            <span class="english">Enhance</span>
            نمی‌شود.`,

            `<span class="english">
            Leptomeningeal Enhancement
            </span>
            دیده می‌شود.`,

            `<span class="english">
            Corpus Callosum
            </span>
            به ندرت درگیر می‌شود.`
        ],

        correct: 2,

        explanation: `
        پاسخ صحیح گزینه C است.

        در
        <span class="english">Susac Syndrome</span>
        ممکن است
        <span class="english">Leptomeningeal Enhancement</span>
        دیده شود.

        همچنین درگیری
        <span class="english">Corpus Callosum</span>
        از یافته‌های مهم و تیپیک بیماری است.
        `,

        note: `
        <span class="english">
        Susac Syndrome =
        Encephalopathy + BRAO + Sensorineural Hearing Loss
        </span>
        `,

        trap: `
        درگیری
        <span class="english">Corpus Callosum</span>
        در سوساک شایع است و ضایعات
        <span class="english">Snowball</span>
        از یافته‌های شناخته‌شده MRI هستند.
        `,

        reference: `
        منابع استاندارد Neuroimmunology و Susac Syndrome؛
        پاسخنامه دانشگاه بهشتی ۹۳
        `
    }

);
