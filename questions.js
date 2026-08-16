const cerebrovascularQuestions = [

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
        و بیماری آلزایمر ارتباط دارد.
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
        با توجه به گذشت ۶ ساعت از شروع علائم،
        پاسخ صحیح گزینه D یعنی درمان با آسپیرین و پلاویکس
        اعلام شده است.
        `,

        note: `
        در این بانک سؤال، برای سؤالات آزمونی قدیمی،
        کلید رسمی همان آزمون ملاک پاسخ صحیح است.
        `,

        trap: `
        توجه کنید که پاسخ این سؤال مربوط به
        پاسخنامه آزمون سال ۹۳ است و ممکن است با
        رویکردهای امروزی درمان سکته مغزی متفاوت باشد.
        `,

        reference: `
        پاسخنامه آزمون تهران ۹۳؛
        برای مقایسه با رویکرد امروزی، گایدلاین‌های
        AHA/ASA مورد استفاده قرار گیرند.
        `
    },


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
        را به عنوان سرنخ مهم دیسکشن کاروتید
        به خاطر بسپارید.
        `,

        trap: `
        درد گردن و <span class="english">Horner Syndrome</span>
        را در بیمار جوان با سکته ایسکمیک نباید نادیده گرفت.
        `,

        reference: `
        منابع استاندارد نورولوژی عروقی و دیسکشن شریان کاروتید
        `
    },


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
        زمینه‌ای نیست؛ در بیماری فعال، سرکوب التهاب
        اهمیت اصلی دارد.
        `,

        reference: `
        منابع استاندارد واسکولیت‌های عروق بزرگ
        `
    },


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
        باعث جایگزینی سریع فاکتورهای انعقادی وابسته
        به ویتامین K می‌شود و در خونریزی شدید ناشی
        از وارفارین برای اصلاح سریع انعقاد به کار می‌رود.
        `,

        note: `
        <span class="english">
        Warfarin-associated ICH → PCC + IV Vitamin K
        </span>
        `,

        trap: `
        <span class="english">Vitamin K</span>
        برای برگشت پایدار اثر وارفارین ضروری است،
        اما اثر آن به سرعت <span class="english">PCC</span>
        نیست.
        `,

        reference: `
        گایدلاین‌های مدیریت خونریزی مرتبط با وارفارین
        و منابع استاندارد نورولوژی عروقی
        `
    },


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
        با درگیری قابل توجه
        <span class="english">Corpus Callosum</span>
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
            `<span class="english">
            Multiple Confluent White Matter Lesions
            </span>`,

            `ضایعات کوچکتر در حوالی
            <span class="english">Basal Ganglia</span>
            می‌تواند دیده شود.`,

            `وجود ضایعات پوستریور به شاخ تمپورال بطن‌های طرفی
            اختصاصی است.`,

            `ضایعات <span class="english">MRI</span>
            می‌تواند آسیمتریک باشد.`
        ],

        correct: 2,

        explanation: `
        بیمار مبتلا به
        <span class="english">CADASIL</span>
        است که ناشی از جهش ژن
        <span class="english">NOTCH3</span>
        می‌باشد.

        در MRI، ضایعات ماده سفید به‌ویژه در
        <span class="english">Anterior Temporal Poles</span>
        و <span class="english">External Capsule</span>
        از یافته‌های شاخص هستند.

        بنابراین عبارت گزینه C صحیح نیست.
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
        GeneReviews – CADASIL؛
        MRI در CADASIL شامل درگیری anterior temporal lobes
        و external capsules است.
        `
    },


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
            به
            <span class="english">Superficial Temporal</span>
            شود.`
        ],

        correct: 1,

        explanation: `
        بیمار دچار یک حمله ایسکمیک گذرا در قلمرو کاروتید چپ
        شده و تنگی کاروتید داخلی چپ ۷۵٪ دارد.

        در بیمار دارای
        <span class="english">Symptomatic Severe Carotid Stenosis</span>،
        انجام
        <span class="english">Carotid Endarterectomy</span>
        در صورت مناسب بودن ریسک جراحی توصیه می‌شود.

        بنابراین در این سؤال گزینه B صحیح است.
        `,

        note: `
        <span class="english">
        Symptomatic Carotid Stenosis ≥70% → CEA
        </span>
        `,

        trap: `
        تنگی ۷۵٪ در سمت چپ است و علائم بیمار نیز
        با نیمکره چپ سازگار است؛ بنابراین این تنگی
        «علامت‌دار» محسوب می‌شود.
        `,

        reference: `
        AHA/ASA Guidelines for Extracranial Carotid Disease؛
        در symptomatic carotid stenosis شدید،
        Carotid Endarterectomy اندیکاسیون دارد.
        `
    },


    {
        source: "تهران ۹۳",

        question: `
        در مورد <span class="english">Cavernous Malformation</span>
        همه موارد زیر صحیح است بجز؟
        `,

        options: [
            `شیوع آن از
            <span class="english">AVM</span>
            کمتر می‌باشد.`,

            `در حدود نیمی از آنها در ساقه مغز وجود دارند.`,

            `تمایل به خونریزی به طور واضحی کمتر از
            <span class="english">AVM</span>
            می‌باشد.`,

            `<span class="english">MRI</span>
            در تشخیص آن را تأیید می‌کند.`
        ],

        correct: 2,

        explanation: `
        طبق پاسخنامه آزمون تهران ۹۳،
        پاسخ صحیح گزینه C است.

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
        مقایسه خطر خونریزی cavernoma و AVM
        به محل ضایعه، سابقه خونریزی و سایر عوامل بستگی دارد؛
        بنابراین عبارت گزینه C را در اینجا مطابق
        پاسخنامه رسمی آزمون در نظر می‌گیریم.
        `,

        reference: `
        پاسخنامه آزمون تهران ۹۳؛
        منابع استاندارد Cerebrovascular Malformations
        `
    },


    {
        source: "دانشگاه ایران ۹۳",

        question: `
        درگیری کدام یک از مناطق زیر در
        <span class="english">MRI</span>
        بیماران
        <span class="english">CADASIL</span>
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
        درگیری
        <span class="english">Anterior Temporal Poles</span>
        یکی از یافته‌های بسیار شاخص و کاراکترستیک
        در <span class="english">CADASIL</span>
        است.

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
        GeneReviews – CADASIL؛
        MRI involvement of anterior temporal lobes and external capsules.
        `
    },


    {
        source: "دانشگاه ایران ۹۳",

        question: `
        در
        <span class="english">Vertebral Dissection</span>
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
        طبق پاسخنامه رسمی موردنظر شما،
        پاسخ صحیح گزینه D یعنی
        <span class="english">AION</span>
        است.

        <span class="english">Vertebral Artery Dissection</span>
        می‌تواند با درد گردن و علائم ایسکمی
        در گردش خون خلفی تظاهر کند و در صورت درگیری
        ناحیه لترال مدولا، سندرم
        <span class="english">Wallenberg</span>
        ایجاد شود.

        <span class="english">AION</span>
        یعنی
        <span class="english">Anterior Ischemic Optic Neuropathy</span>
        تظاهر کلاسیک دیسکشن شریان ورتبرال نیست.
        `,

        note: `
        <span class="english">
        Vertebral Dissection → Posterior Circulation Ischemia
        </span>
        `,

        trap: `
        <span class="english">Cortical Blindness</span>
        بیشتر با درگیری قشر بینایی لوب اکسیپیتال
        و قلمرو <span class="english">PCA</span>
        ارتباط دارد.
        `,

        reference: `
        منابع استاندارد Vertebral Artery Dissection
        و Posterior Circulation Stroke
        `
    }

];
