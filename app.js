// =====================================================
// CEREBROVASCULAR DISEASES
// 30 Questions - 4 Options
// =====================================================

var cerebrovascularQuestions = [

  // =====================================================
  // سؤال ۱
  // =====================================================
  {
    source: "دانشگاه تهران ۹۳",

    question: `
      خانم ۵۶ ساله‌ای با سابقه دیابت و فشارخون بالا،
      به‌طور ناگهانی دچار همی‌پارزی راست با قدرت 2/5
      در اندام فوقانی و تحتانی، اختلال حس سطحی در سمت راست
      و همی‌آنوپی همنام راست شده است.
      سطح هوشیاری و تکلم طبیعی است.

      محتمل‌ترین محل ضایعه کدام است؟
    `,

    options: [
      `Superior Division MCA`,
      `PCA`,
      `Anterior Choroidal Artery`,
      `Inferior Division MCA`
    ],

    correct: 2,

    explanation: `
      ترکیب کلاسیک همی‌پارزی، اختلال حس و
      <span class="english">Homonymous Hemianopia</span>
      به‌شدت به نفع سندرم
      <span class="english">Anterior Choroidal Artery</span>
      است.

      این شریان ساختارهایی از جمله قسمت‌هایی از
      Posterior Limb of Internal Capsule، مسیر بینایی
      و بخش‌هایی از تالاموس را خون‌رسانی می‌کند.
    `,

    note: `
      <span class="english">
      Anterior Choroidal Syndrome =
      Hemiplegia + Hemisensory loss + Homonymous hemianopia
      </span>
    `,

    trap: `
      همی‌آنوپی همنام همراه با همی‌پارزی الزاماً به معنی
      ضایعه MCA نیست؛ ترکیب سه‌گانه فوق را باید به یاد سپرد.
    `
  },


  // =====================================================
  // سؤال ۲
  // =====================================================
  {
    source: "دانشگاه تهران ۹۳",

    question: `
      بیماری پس از سکته مغزی دچار سرگیجه شدید همراه با
      کاهش شنوایی یک‌طرفه شده است.
      کدام شریان بیشتر مطرح است؟
    `,

    options: [
      `PCA`,
      `AICA`,
      `PICA`,
      `Basilar Artery`
    ],

    correct: 1,

    explanation: `
      وجود سرگیجه همراه با کاهش شنوایی یک‌طرفه،
      به‌خصوص در زمینه سکته گردش خون خلفی،
      بیشتر به نفع درگیری
      <span class="english">AICA</span>
      است.

      AICA شریان لابیرنت را نیز معمولاً تأمین می‌کند
      و بنابراین کاهش شنوایی می‌تواند دیده شود.
    `,

    note: `
      <span class="english">
      AICA → Vertigo + Ipsilateral Hearing Loss
      </span>
    `,

    trap: `
      PICA بیشتر با سندرم Wallenberg شناخته می‌شود؛
      کاهش شنوایی واضح، AICA را بیشتر مطرح می‌کند.
    `
  },


  // =====================================================
  // سؤال ۳
  // =====================================================
  {
    source: "دانشگاه تهران ۹۳",

    question: `
      مرد ۶۰ ساله دیابتی دچار اختلال حس سطحی و عمقی
      در سمت راست صورت و بدن همراه با ضعف خفیف همان سمت شده است.
      کدام شریان بیشتر مطرح است؟
    `,

    options: [
      `Interpeduncular Artery`,
      `Thalamoperforating Artery`,
      `Thalamogeniculate Artery`,
      `Anterior Choroidal Artery`
    ],

    correct: 2,

    explanation: `
      درگیری حس سطحی و عمقی در صورت و بدن همراه با
      ضعف خفیف می‌تواند ناشی از ضایعه تالاموس باشد.
      درگیری ناحیه
      <span class="english">Thalamogeniculate</span>
      می‌تواند چنین تابلویی ایجاد کند.
    `,

    note: `
      <span class="english">
      Thalamogeniculate territory → Sensory syndrome
      </span>
    `,

    trap: `
      صرفاً وجود ضعف، تشخیص ضایعه کپسول داخلی را قطعی نمی‌کند؛
      الگوی حسی تالاموسی اهمیت زیادی دارد.
    `
  },


  // =====================================================
  // سؤال ۴
  // =====================================================
  {
    source: "دانشگاه تهران ۹۳",

    question: `
      کدام ژن با Cerebral Amyloid Angiopathy ارتباط دارد؟
    `,

    options: [
      `APOE2`,
      `APOE4`,
      `PARK7`,
      `PARK2`
    ],

    correct: 1,

    explanation: `
      آلل
      <span class="english">APOE ε4</span>
      با رسوب آمیلوئید و افزایش خطر
      <span class="english">Cerebral Amyloid Angiopathy</span>
      ارتباط دارد.
    `,

    note: `
      <span class="english">
      APOE4 → Amyloid deposition / CAA risk
      </span>
    `,

    trap: `
      PARK2 و PARK7 بیشتر در زمینه بیماری‌های نورودژنراتیو
      مانند پارکینسونیسم مطرح هستند.
    `
  },


  // =====================================================
  // سؤال ۵
  // =====================================================
  {
    source: "دانشگاه تهران ۹۳",

    question: `
      بیماری دچار یک اپیزود همی‌پارزی گذرا به مدت یک ساعت شده است.
      کدام مورد کمترین احتمال را به‌عنوان منبع آمبولی دارد؟
    `,

    options: [
      `Cardiac Embolism`,
      `Aortic Source`,
      `Carotid Artery`,
      `MCA Embolism`
    ],

    correct: 3,

    explanation: `
      در این سؤال، MCA خود محل انسداد/آمبولی است و
      در مقایسه با قلب، آئورت و کاروتید به‌عنوان
      «منبع» آمبولی محسوب نمی‌شود.
    `,

    note: `
      <span class="english">
      Think carefully: Source of embolus ≠ site of arterial occlusion
      </span>
    `,

    trap: `
      تفاوت بین «منبع آمبولی» و «محل گیر افتادن آمبولی»
      دام اصلی سؤال است.
    `
  },


  // =====================================================
  // سؤال ۶
  // =====================================================
  {
    source: "دانشگاه تهران ۹۳",

    question: `
      خانم ۵۰ ساله دیابتی، ۶ ساعت پس از شروع سکته مغزی مراجعه کرده است.
      در بررسی، انسداد شریان MCA دیده می‌شود.
      طبق کلید سؤال، بهترین درمان کدام است؟
    `,

    options: [
      `IV Thrombolysis`,
      `Intra-arterial Thrombolysis`,
      `Mechanical Thrombectomy + Intra-arterial Treatment`,
      `Aspirin + Clopidogrel`
    ],

    correct: 3,

    explanation: `
      پاسخ این سؤال مطابق کلید قدیمی دانشگاه تهران ۹۳،
      گزینه D یعنی Aspirin + Clopidogrel است.

      <strong>نکته بسیار مهم:</strong>
      این سؤال از نظر درمان مدرن سکته مغزی نیازمند توجه ویژه است.
      در بیمار واجد شرایط با انسداد عروق بزرگ و زمان ۶ ساعت،
      ارزیابی برای Mechanical Thrombectomy اهمیت اساسی دارد.
    `,

    note: `
      <strong>کلید آزمون قدیمی:</strong>
      Aspirin + Clopidogrel

      <br><br>

      <strong>نکته علمی:</strong>
      در LVO واجد شرایط، درمان اندوواسکولار امروزه اهمیت بسیار بیشتری دارد.
    `,

    trap: `
      کلید قدیمی آزمون را با استاندارد درمان امروزی یکی ندانید.
      برای امتحان، کلید منبع را حفظ کنید؛ برای طبابت، گایدلاین روز را ملاک قرار دهید.
    `
  },


  // =====================================================
  // سؤال ۷
  // =====================================================
  {
    source: "دانشگاه تهران ۹۳",

    question: `
      مرد ۴۵ ساله با همی‌پارزی راست، دیزآرتری و درد گردن مراجعه کرده است.
      در معاینه پتوز و میوز سمت چپ دارد.
      محتمل‌ترین تشخیص کدام است؟
    `,

    options: [
      `Fibromuscular Dysplasia`,
      `Giant Cell Arteritis`,
      `Takayasu Arteritis`,
      `Carotid Artery Dissection`
    ],

    correct: 3,

    explanation: `
      درد گردن همراه با علائم ایسکمیک مغزی و
      <span class="english">Horner Syndrome</span>
      به‌شدت به نفع
      <span class="english">Carotid Artery Dissection</span>
      است.
    `,

    note: `
      <span class="english">
      Neck pain + Stroke + Horner → Carotid Dissection
      </span>
    `,

    trap: `
      وجود Horner در زمینه درد گردن یک سرنخ مهم برای دیسکشن کاروتید است.
    `
  },


  // =====================================================
  // سؤال ۸
  // =====================================================
  {
    source: "دانشگاه تهران ۹۳",

    question: `
      خانم ۲۸ ساله‌ای با درد و ضعف اندام فوقانی راست مراجعه کرده است.
      نبض براکیال کاهش یافته است.
      در صورت مطرح بودن Takayasu Arteritis، کدام درمان مناسب‌تر است؟
    `,

    options: [
      `Aspirin`,
      `Warfarin`,
      `Prednisolone`,
      `Pentoxifylline`
    ],

    correct: 2,

    explanation: `
      Takayasu یک واسکولیت عروق بزرگ است و در فاز فعال بیماری،
      کورتیکواستروئیدها درمان اصلی هستند.
    `,

    note: `
      <span class="english">
      Takayasu → Large-vessel vasculitis → Corticosteroids
      </span>
    `,

    trap: `
      کاهش نبض در فرد جوان همراه با علائم اندام فوقانی
      باید بیماری عروق بزرگ را مطرح کند.
    `
  },


  // =====================================================
  // سؤال ۹
  // =====================================================
  {
    source: "دانشگاه تهران ۹۳",

    question: `
      بیماری که وارفارین مصرف می‌کند دچار ICH شده و INR بالاست.
      سریع‌ترین روش برای اصلاح INR کدام است؟
    `,

    options: [
      `rFVIIa`,
      `FFP`,
      `PCC`,
      `Vitamin K`
    ],

    correct: 2,

    explanation: `
      <span class="english">Prothrombin Complex Concentrate (PCC)</span>
      سریع‌ترین راه برای جایگزینی فاکتورهای وابسته به ویتامین K
      و اصلاح فوری INR است.

      ویتامین K نیز باید داده شود، اما اثر آن فوری نیست.
    `,

    note: `
      <span class="english">
      Warfarin-associated ICH → 4-factor PCC + IV Vitamin K
      </span>
    `,

    trap: `
      Vitamin K به تنهایی برای اصلاح سریع INR کافی نیست.
    `
  },


  // =====================================================
  // سؤال ۱۰
  // =====================================================
  {
    source: "دانشگاه تهران ۹۳",

    question: `
      خانم ۲۵ ساله‌ای با انسفالوپاتی، تغییرات رفتاری، سردرد،
      تاری دید دوطرفه و آتاکسی مراجعه کرده است.
      در بررسی چشم، Branch Retinal Artery Occlusion دیده می‌شود.
      MRI ضایعات Snowball در Corpus Callosum نشان می‌دهد.
      کدام عبارت نادرست است؟
    `,

    options: [
      `بیماری از نوع Endothelial Immune-mediated Disease است`,
      `IVIG می‌تواند در درمان کمک‌کننده باشد`,
      `کاهش شنوایی یافته شایعی است`,
      `CSF معمولاً Pleocytosis همراه با Protein طبیعی دارد`
    ],

    correct: 3,

    explanation: `
      این تابلوی کلاسیک
      <span class="english">Susac Syndrome</span>
      است.

      سه‌گانه اصلی شامل:
      Encephalopathy،
      Branch Retinal Artery Occlusion،
      و Hearing Loss
      می‌باشد.

      عبارت گزینه D مطابق کلید سؤال نادرست است.
    `,

    note: `
      <span class="english">
      Susac = Brain + Retina + Inner Ear
      </span>
    `,

    trap: `
      Snowball lesions در Corpus Callosum یک سرنخ بسیار مهم برای Susac است.
    `
  },


  // =====================================================
  // سؤال ۱۱
  // =====================================================
  {
    source: "دانشگاه تهران ۹۳",

    question: `
      مرد ۴۰ ساله‌ای با دمانس و سکته‌های متعدد مراجعه کرده است.
      سابقه فشارخون و دیابت ندارد.
      آزمایش ژنتیک NOTCH3 در کروموزوم ۱۹ را نشان می‌دهد.
      کدام یافته MRI صحیح نیست؟
    `,

    options: [
      `Multiple Focal White Matter Lesions`,
      `درگیری Basal Ganglia ممکن است وجود داشته باشد`,
      `ضایعات پشت Temporal Horn اختصاصی هستند`,
      `ضایعات دوطرفه و گاهی نامتقارن`
    ],

    correct: 2,

    explanation: `
      در CADASIL، درگیری
      <span class="english">Anterior Temporal Poles</span>
      و <span class="english">External Capsule</span>
      بسیار تیپیک است.

      عبارت «ضایعات پشت Temporal Horn» به این شکل یافته اختصاصی CADASIL نیست.
    `,

    note: `
      <span class="english">
      CADASIL → Anterior Temporal Poles + External Capsule
      </span>
    `,

    trap: `
      Temporal pole را با Temporal horn اشتباه نکنید.
    `
  },


  // =====================================================
  // سؤال ۱۲
  // =====================================================
  {
    source: "دانشگاه تهران ۹۳",

    question: `
      مرد ۷۵ ساله‌ای دچار آفازی و همی‌پارزی گذرای ۱۵ دقیقه‌ای شده است.
      CT ضایعه‌ای نشان نمی‌دهد.
      در CTA تنگی ۷۵ درصدی ICA چپ دیده می‌شود.
      بهترین درمان کدام است؟
    `,

    options: [
      `Aspirin به دلیل سن بالا`,
      `Carotid Endarterectomy در صورت ریسک جراحی کمتر از ۳ درصد`,
      `Warfarin`,
      `MCA-STA Bypass`
    ],

    correct: 1,

    explanation: `
      در بیمار دارای TIA علامت‌دار و تنگی قابل توجه کاروتید داخلی،
      در صورت مناسب بودن شرایط بیمار و ریسک جراحی پایین،
      Carotid Endarterectomy مطرح است.
    `,

    note: `
      <span class="english">
      Symptomatic Carotid Stenosis → Consider CEA
      </span>
    `,

    trap: `
      علامت‌دار بودن تنگی اهمیت زیادی دارد؛
      صرف درصد تنگی بدون توجه به علائم کافی نیست.
    `
  },


  // =====================================================
  // سؤال ۱۳
  // =====================================================
  {
    source: "دانشگاه تهران ۹۳",

    question: `
      در مورد Cavernous Malformation کدام عبارت نادرست است؟
    `,

    options: [
      `از AVM کمتر شایع است`,
      `حدود نیمی از موارد می‌توانند در Brainstem باشند`,
      `تمایل به خونریزی آن به‌طور واضح از AVM بیشتر است`,
      `MRI روش اصلی تشخیص است`
    ],

    correct: 2,

    explanation: `
      MRI روش اصلی تشخیص Cavernous Malformation است و
      ضایعات معمولاً ظاهر کلاسیک
      <span class="english">Popcorn/Mulberry</span>
      دارند.

      عبارت مربوط به اینکه تمایل به خونریزی آن به‌طور واضح
      از AVM بیشتر است، طبق کلید سؤال نادرست است.
    `,

    note: `
      <span class="english">
      Cavernoma → MRI → Popcorn / Mulberry appearance
      </span>
    `,

    trap: `
      Cavernoma را با AVM از نظر ظاهر تصویربرداری و خطر خونریزی یکی ندانید.
    `
  },


  // =====================================================
  // سؤال ۱۴
  // =====================================================
  {
    source: "دانشگاه تهران ۹۳",

    question: `
      کدام محل در MRI برای CADASIL اختصاصی‌تر است؟
    `,

    options: [
      `Periventricular White Matter`,
      `Internal Capsule`,
      `Cerebellar Hemispheres`,
      `Temporal Poles`
    ],

    correct: 3,

    explanation: `
      درگیری Anterior Temporal Poles یکی از یافته‌های بسیار
      تیپیک CADASIL است و در کنار External Capsule اهمیت دارد.
    `,

    note: `
      <span class="english">
      CADASIL → Temporal Poles + External Capsule
      </span>
    `,

    trap: `
      Periventricular lesions در بسیاری از بیماری‌های عروق کوچک
      دیده می‌شوند و اختصاصی CADASIL نیستند.
    `
  },


  // =====================================================
  // سؤال ۱۵
  // =====================================================
  {
    source: "دانشگاه تهران ۹۳",

    question: `
      در Vertebral Artery Dissection کدام مورد دیده نمی‌شود؟
    `,

    options: [
      `Cortical Blindness`,
      `Wallenberg Syndrome`,
      `Neck Pain`,
      `Anterior Ischemic Optic Neuropathy`
    ],

    correct: 3,

    explanation: `
      Vertebral artery dissection می‌تواند باعث علائم گردش خون خلفی،
      از جمله Wallenberg Syndrome و اختلالات بینایی مرکزی شود.

      AION یک تابلوی عروقی قدامی و مربوط به عصب بینایی است
      و یافته تیپیک Vertebral Artery Dissection محسوب نمی‌شود.
    `,

    note: `
      <span class="english">
      Vertebral Dissection → Posterior Circulation
      </span>
    `,

    trap: `
      اختلال بینایی مرکزی را با AION که یک optic nerve disorder است
      اشتباه نکنید.
    `
  },


  // =====================================================
  // سؤال ۱۶
  // =====================================================
  {
    source: "دانشگاه تهران ۹۳",

    question: `
      تفاوت Carotid Artery Dissection با Atherosclerotic Stenosis
      بیشتر در کدام مورد مشخص می‌شود؟
    `,

    options: [
      `شدت تنگی`,
      `علائم نورولوژیک`,
      `تغییرات همودینامیک`,
      `محل تنگی`
    ],

    correct: 3,

    explanation: `
      محل تنگی یکی از مهم‌ترین تفاوت‌های تصویربرداری است.
      دیسکشن معمولاً در قسمت‌های خاصی از شریان و خارج از محل‌های
      کلاسیک آترواسکلروز رخ می‌دهد.
    `,

    note: `
      <span class="english">
      Dissection vs Atherosclerosis → Location matters
      </span>
    `,

    trap: `
      صرفاً شدت تنگی نمی‌تواند علت تنگی را مشخص کند.
    `
  },


  // =====================================================
  // سؤال ۱۷
  // =====================================================
  {
    source: "دانشگاه تهران ۹۳",

    question: `
      در Top of the Basilar Syndrome کدام تظاهر کمتر مطرح است؟
    `,

    options: [
      `Monocular Blindness`,
      `Left Hemiparesis`,
      `Cortical Blindness`,
      `Acute Confusional State`
    ],

    correct: 0,

    explanation: `
      Top of the Basilar Syndrome می‌تواند باعث اختلال هوشیاری،
      علائم چشمی، اختلالات حرکتی و Cortical Blindness شود.

      Monocular blindness بیشتر به درگیری مسیر بینایی قدامی
      مانند retinal/optic nerve یا circulation مربوط است.
    `,

    note: `
      <span class="english">
      Top of Basilar → Midbrain + Thalamus + Occipital regions
      </span>
    `,

    trap: `
      Monocular blindness را با Cortical Blindness اشتباه نکنید.
    `
  },


  // =====================================================
  // سؤال ۱۸
  // =====================================================
  {
    source: "دانشگاه تهران ۹۳",

    question: `
      در مورد Carotid Bruit کدام عبارت صحیح است؟
    `,

    options: [
      `شدت Bruit مستقیماً با شدت تنگی متناسب است`,
      `فقط در سمت دارای تنگی یا انسداد شنیده می‌شود`,
      `نشان‌دهنده افزایش جریان در همان سمت است`,
      `می‌تواند ناشی از تنگی External Carotid Artery نیز باشد`
    ],

    correct: 3,

    explanation: `
      Carotid bruit الزاماً معادل شدت تنگی ICA نیست و
      می‌تواند در شرایط مختلف جریان توربولانت ایجاد شود.

      تنگی External Carotid نیز می‌تواند باعث ایجاد bruit شود.
    `,

    note: `
      <span class="english">
      Bruit ≠ Direct measure of stenosis severity
      </span>
    `,

    trap: `
      شدت صدای bruit را نباید به‌طور مستقیم معادل درصد stenosis دانست.
    `
  },


  // =====================================================
  // سؤال ۱۹
  // =====================================================
  {
    source: "دانشگاه تهران ۹۳",

    question: `
      در بیمار مبتلا به تنگی بدون علامت شریان کاروتید،
      حداقل درصد تنگی برای مطرح شدن Carotid Endarterectomy
      طبق کلید این سؤال کدام است؟
    `,

    options: [
      `50%`,
      `80%`,
      `99%`,
      `70%`
    ],

    correct: 3,

    explanation: `
      پاسخ طبق کلید قدیمی سؤال:
      70 درصد.

      <strong>نکته مهم:</strong>
      در گایدلاین‌های جدید، تصمیم برای CEA در تنگی بدون علامت
      تنها بر اساس درصد تنگی نیست و عواملی مانند امید به زندگی،
      ریسک جراحی، ویژگی‌های پلاک و درمان طبی بهینه نیز اهمیت دارند.
    `,

    note: `
      <strong>کلید آزمون:</strong> 70%

      <br><br>

      <strong>نکته بالینی:</strong>
      تصمیم امروزی چندعاملی است.
    `,

    trap: `
      درصد stenosis را به تنهایی معیار مطلق برای انجام CEA در نظر نگیرید.
    `
  },


  // =====================================================
  // سؤال ۲۰
  // =====================================================
  {
    source: "دانشگاه تهران ۹۳",

    question: `
      Warfarin در کدام وضعیت بیشترین کاربرد را دارد؟
    `,

    options: [
      `Recurrent TIA`,
      `Aortic Arch Plaque`,
      `PFO`,
      `Transient Atrial Fibrillation`
    ],

    correct: 3,

    explanation: `
      Atrial Fibrillation یک منبع مهم آمبولی قلبی است و
      درمان ضدانعقادی برای پیشگیری از سکته مغزی در بیماران مناسب
      اهمیت دارد.
    `,

    note: `
      <span class="english">
      Atrial Fibrillation → Cardioembolic Stroke Risk → Anticoagulation
      </span>
    `,

    trap: `
      Warfarin درمان روتین هر TIA یا PFO نیست.
    `
  },


  // =====================================================
  // سؤال ۲۱
  // =====================================================
  {
    source: "دانشگاه ایران ۹۳",

    question: `
      بیمار ۲۵ ساله با سرگیجه حاد، نیستاگموس دوطرفه،
      آتاکسی و درد گردن مراجعه کرده است.
      محتمل‌ترین تشخیص کدام است؟
    `,

    options: [
      `BPPV`,
      `Vertebral Artery Dissection`,
      `Vestibular Neuritis`,
      `Meniere Disease`
    ],

    correct: 1,

    explanation: `
      در فرد جوان، وجود سرگیجه حاد همراه با علائم عصبی
      و درد گردن، به‌شدت به نفع
      <span class="english">Vertebral Artery Dissection</span>
      است.
    `,

    note: `
      <span class="english">
      Young patient + Neck pain + Posterior circulation signs
      </span>
    `,

    trap: `
      وجود سرگیجه به‌تنهایی نباید باعث تشخیص بیماری گوش داخلی شود.
    `
  },


  // =====================================================
  // سؤال ۲۲
  // =====================================================
  {
    source: "دانشگاه ایران ۹۳",

    question: `
      کدام یافته در تصویربرداری دیسکشن کاروتید اختصاصی‌تر است؟
    `,

    options: [
      `Double Lumen`,
      `Generalized Stenosis`,
      `Calcification`,
      `Atherosclerotic Plaque`
    ],

    correct: 0,

    explanation: `
      وجود
      <span class="english">Double Lumen</span>
      یا
      <span class="english">Intimal Flap</span>
      از یافته‌های تیپیک دیسکشن است.
    `,

    note: `
      <span class="english">
      Dissection → Intimal flap + Double lumen
      </span>
    `,

    trap: `
      تنگی به‌تنهایی اختصاصی دیسکشن نیست.
    `
  },


  // =====================================================
  // سؤال ۲۳
  // =====================================================
  {
    source: "دانشگاه ایران ۹۳",

    question: `
      در انفارکت وسیع شریان مغزی میانی،
      کدام بیمار بیشترین سود را از همی‌کرانیوکتومی می‌برد؟
    `,

    options: [
      `بیمار ۳۰ ساله در ۲۴ ساعت اول`,
      `بیمار ۸۰ ساله بعد از یک هفته`,
      `بیمار با انفارکت کوچک`,
      `بیمار بدون ادم مغزی`
    ],

    correct: 0,

    explanation: `
      در Malignant MCA Infarction،
      سن پایین‌تر و انجام زودهنگام Decompressive Hemicraniectomy
      با پیامد بهتر همراه است.
    `,

    note: `
      <span class="english">
      Malignant MCA infarction → Early decompression
      </span>
    `,

    trap: `
      هرنی شدید مرحله پیشرفته و دیررس است و نباید منتظر ایجاد
      هرنی کامل برای تصمیم‌گیری درباره دکمپرسیون ماند.
    `
  },


  // =====================================================
  // سؤال ۲۴
  // =====================================================
  {
    source: "دانشگاه ایران ۹۳",

    question: `
      خانم جوانی با چند حمله سردرد Thunderclap پس از مصرف
      سودوافدرین مراجعه کرده است.
      MRI طبیعی است.
      بهترین اقدام چیست؟
    `,

    options: [
      `EEG`,
      `MR Angiography`,
      `Lumbar Puncture`,
      `MRI با کنتراست`
    ],

    correct: 1,

    explanation: `
      سردردهای Thunderclap عودکننده پس از مصرف داروهای
      سمپاتومیمتیک می‌تواند به نفع
      <span class="english">Reversible Cerebral Vasoconstriction Syndrome (RCVS)</span>
      باشد و MRA برای بررسی عروق مغزی کمک‌کننده است.
    `,

    note: `
      <span class="english">
      Recurrent Thunderclap + Sympathomimetic → RCVS
      </span>
    `,

    trap: `
      سابقه میگرن نباید باعث شود یک Thunderclap Headache
      بدون بررسی بیشتر به میگرن نسبت داده شود.
    `
  },


  // =====================================================
  // سؤال ۲۵
  // =====================================================
  {
    source: "دانشگاه ایران ۹۳",

    question: `
      در تنگی شدید شریان در TCD کدام یافته انتظار نمی‌رود؟
    `,

    options: [
      `افزایش سرعت سیستولیک`,
      `افزایش سرعت دیاستولیک`,
      `Spectral Broadening`,
      `جریان Bidirectional`
    ],

    correct: 3,

    explanation: `
      در محل تنگی شدید، افزایش سرعت جریان و آشفتگی جریان
      می‌تواند مشاهده شود.

      جریان Bidirectional یافته معمول تنگی شریانی نیست.
    `,

    note: `
      <span class="english">
      Arterial Stenosis → Increased Flow Velocity
      </span>
    `,

    trap: `
      Bidirectional flow را با افزایش velocity در محل stenosis
      اشتباه نکنید.
    `
  },


  // =====================================================
  // سؤال ۲۶
  // =====================================================
  {
    source: "دانشگاه بهشتی ۹۳",

    question: `
      در صرع پس از سکته مغزی کدام عبارت صحیح است؟
    `,

    options: [
      `همه بیماران مادام‌العمر دارو می‌گیرند`,
      `EEG به تنهایی تعیین‌کننده طول درمان است`,
      `مدت درمان بر اساس شرایط بالینی تعیین می‌شود`,
      `نیازی به درمان ندارد`
    ],

    correct: 2,

    explanation: `
      تصمیم برای شروع و ادامه درمان ضدصرع پس از سکته
      بر اساس نوع تشنج، زمان وقوع آن، نوع ضایعه مغزی
      و خطر عود گرفته می‌شود.
    `,

    note: `
      <span class="english">
      Post-stroke epilepsy management is individualized
      </span>
    `,

    trap: `
      EEG به‌تنهایی تعیین‌کننده مدت درمان نیست.
    `
  },


  // =====================================================
  // سؤال ۲۷
  // =====================================================
  {
    source: "دانشگاه بهشتی ۹۳",

    question: `
      مهم‌ترین عارضه زودرس SAH ناشی از آنوریسم چیست؟
    `,

    options: [
      `Rebleeding`,
      `Vasospasm`,
      `Hydrocephalus`,
      `Seizure`
    ],

    correct: 0,

    explanation: `
      Rebleeding یکی از خطرناک‌ترین عوارض زودرس
      Aneurysmal SAH است و به‌خصوص در روزهای ابتدایی
      اهمیت زیادی دارد.
    `,

    note: `
      <span class="english">
      Early SAH complication → Rebleeding
      </span>
    `,

    trap: `
      Vasospasm معمولاً چند روز پس از SAH بیشتر مطرح می‌شود
      و عارضه غالب ساعات اولیه نیست.
    `
  },


  // =====================================================
  // سؤال ۲۸
  // =====================================================
  {
    source: "دانشگاه بهشتی ۹۳",

    question: `
      کدام مورد جزء سندرم Anterior Choroidal نیست؟
    `,

    options: [
      `درگیری بازوی خلفی کپسول داخلی`,
      `همی‌پارزی مقابل`,
      `همی‌هیپوستزی مقابل`,
      `همونیموس همی‌آنوپی`
    ],

    correct: 0,

    explanation: `
      سندرم کلاسیک Anterior Choroidal شامل:
      همی‌پارزی،
      همی‌هیپوستزی
      و Homonymous Hemianopia
      در سمت مقابل است.

      طبق کلید سؤال، گزینه A به‌عنوان پاسخ انتخاب شده است.
    `,

    note: `
      <span class="english">
      Anterior Choroidal Syndrome =
      Hemiparesis + Hemisensory loss + Homonymous hemianopia
      </span>
    `,

    trap: `
      Posterior limb of internal capsule با این سندرم ارتباط دارد؛
      آن را با Anterior limb اشتباه نکنید.
    `
  },


  // =====================================================
  // سؤال ۲۹
  // =====================================================
  {
    source: "دانشگاه بهشتی ۹۳",

    question: `
      بیمار با پتوز و میوز همان سمت،
      آتاکسی همان سمت و اختلال حس سمت مقابل دارد.
      محل ضایعه کجاست؟
    `,

    options: [
      `Midbrain دورسولترال`,
      `Pons`,
      `Medulla`,
      `Cortex`
    ],

    correct: 0,

    explanation: `
      ترکیب Horner Syndrome در یک سمت،
      آتاکسی همان سمت و اختلال حسی در سمت مقابل،
      به نفع ضایعه دورسولترال Midbrain است.
    `,

    note: `
      <span class="english">
      Ipsilateral Horner + Ipsilateral Ataxia +
      Contralateral Sensory Loss → Dorsolateral Midbrain
      </span>
    `,

    trap: `
      وجود علائم متقاطع در ساقه مغز به تعیین محل ضایعه کمک زیادی می‌کند.
    `
  },


  // =====================================================
  // سؤال ۳۰
  // =====================================================
  {
    source: "دانشگاه بهشتی ۹۳",

    question: `
      در Susac Syndrome کدام یافته تیپیک‌تر است؟
    `,

    options: [
      `درگیری Corpus Callosum`,
      `درگیری نخاع`,
      `ضایعات Basal Ganglia`,
      `درگیری عصب محیطی`
    ],

    correct: 0,

    explanation: `
      Susac Syndrome یک بیماری میکروآنژیوپاتی است که
      مغز، شبکیه و گوش داخلی را درگیر می‌کند.

      ضایعات Corpus Callosum، به‌خصوص الگوهای Snowball،
      از یافته‌های تصویربرداری تیپیک بیماری هستند.
    `,

    note: `
      <span class="english">
      Susac = Brain + Retina + Inner Ear
      <br>
      Corpus Callosum Snowball Lesions
      </span>
    `,

    trap: `
      درگیری نخاع یا عصب محیطی جزء تظاهرات اصلی Susac نیست.
    `
  }

];
