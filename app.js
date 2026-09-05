/* =========================================================
   NeuroPrep / Neurology Exam
   FINAL APP.JS
   =========================================================

   امکانات:
   1. بانک سؤال مستقل برای هر فصل
   2. ادامه آزمون ناتمام
   3. ذخیره پاسخ‌ها
   4. پایان آزمون در هر زمان
   5. مرور سؤالات غلط
   6. پاسخ‌دهی مجدد واقعی در حالت مرور
   7. حذف سؤال از لیست غلط پس از پاسخ صحیح
   8. تحلیل کامل سؤال
   9. فلش‌کارت
   10. ذخیره دائمی اطلاعات در LocalStorage

   ========================================================= */


/* =========================================================
   GLOBAL VARIABLES
   ========================================================= */

let currentTopic = "";

let currentQuestions = [];

let currentQuestionIndex = 0;

let currentOriginalIndex = 0;

let currentMode = "normal";

let currentAnswered = false;

let currentScore = 0;

let currentReviewIndexes = [];


/* =========================================================
   CHAPTER DEFINITIONS
   ========================================================= */

const TOPICS = [

    {
        key: "Cerebrovascular Diseases",
        title: "بیماری‌های عروق مغزی",
        icon: "🧠",
        bank: "cerebrovascularQuestions"
    },

    {
        key: "Epilepsy & Seizure",
        title: "صرع و تشنج",
        icon: "⚡",
        bank: "epilepsyQuestions"
    },

    {
        key: "Movement Disorders",
        title: "اختلالات حرکتی",
        icon: "🚶",
        bank: "movementDisordersQuestions"
    },

    {
        key: "Multiple Sclerosis & Demyelinating Diseases",
        title: "MS و بیماری‌های دمیلینه‌کننده",
        icon: "🧬",
        bank: "multipleSclerosisQuestions"
    },

    {
        key: "Neuromuscular Diseases",
        title: "بیماری‌های نوروماسکولار",
        icon: "💪",
        bank: "neuromuscularQuestions"
    },

    {
        key: "Headache & Facial Pain",
        title: "سردرد و دردهای صورت",
        icon: "🤕",
        bank: "headacheQuestions"
    },

    {
        key: "Dementia & Cognitive Disorders",
        title: "دمانس و اختلالات شناختی",
        icon: "🧩",
        bank: "dementiaQuestions"
    },

    {
        key: "Viral & Prion Diseases",
        title: "بیماری‌های ویروسی و پریونی",
        icon: "🦠",
        bank: "viralPrionQuestions"
    },

    {
        key: "Neuroimmunology",
        title: "نورواِمیونولوژی",
        icon: "🛡️",
        bank: "neuroimmunologyQuestions"
    },

    {
        key: "Neuro-oncology",
        title: "نوروانکولوژی",
        icon: "🎗️",
        bank: "neuroOncologyQuestions"
    },

    {
        key: "Neurogenetics & Metabolic Disorders",
        title: "بیماری‌های نوروجنتیک و متابولیک",
        icon: "🧬",
        bank: "neurogeneticsQuestions"
    },

    {
        key: "Spinal Cord Disorders",
        title: "بیماری‌های نخاع",
        icon: "🦴",
        bank: "spinalCordQuestions"
    },

    {
        key: "Neuro-ophthalmology",
        title: "نوروافتالمولوژی",
        icon: "👁️",
        bank: "neuroOphthalmologyQuestions"
    },

    {
        key: "Neuro-otology",
        title: "نورواتولوژی",
        icon: "👂",
        bank: "neuroOtologyQuestions"
    },

    {
        key: "Pediatric Neurology",
        title: "نورولوژی کودکان",
        icon: "👶",
        bank: "pediatricNeurologyQuestions"
    },

    {
        key: "Neurocritical Care",
        title: "نورولوژی مراقبت‌های ویژه",
        icon: "🚑",
        bank: "neurocriticalCareQuestions"
    },

    {
        key: "Neurotrauma",
        title: "نوروتروما",
        icon: "🚨",
        bank: "neurotraumaQuestions"
    },

    {
        key: "Autonomic & Sleep Disorders",
        title: "اختلالات اتونوم و خواب",
        icon: "😴",
        bank: "autonomicSleepQuestions"
    },

    {
        key: "Neurodiagnostic Methods",
        title: "روش‌های تشخیصی نورولوژی",
        icon: "🔬",
        bank: "neurodiagnosticQuestions"
    },

    {
        key: "Neuropharmacology & Principles of Treatment",
        title: "نوروفارماکولوژی و اصول درمان",
        icon: "💊",
        bank: "neuropharmacologyQuestions"
    }

];


/* =========================================================
   SAFE DOM
   ========================================================= */

function el(id) {
    return document.getElementById(id);
}


/* =========================================================
   STORAGE
   ========================================================= */

function storageKey(topic) {

    return "neurologyprep_" +
        topic
        .replace(/[^a-zA-Z0-9]/g, "_");

}


function defaultTopicData() {

    return {

        currentIndex: 0,

        answers: {},

        wrong: [],

        completed: false,

        lastUpdated: Date.now()

    };

}


function getTopicData(topic) {

    const raw =
        localStorage.getItem(
            storageKey(topic)
        );


    if (!raw) {

        return defaultTopicData();

    }


    try {

        const data =
            JSON.parse(raw);


        if (!data.answers) {
            data.answers = {};
        }

        if (!data.wrong) {
            data.wrong = [];
        }

        if (typeof data.currentIndex !== "number") {
            data.currentIndex = 0;
        }

        if (typeof data.completed !== "boolean") {
            data.completed = false;
        }


        return data;

    }

    catch (error) {

        console.error(
            "Storage error:",
            error
        );


        return defaultTopicData();

    }

}


function saveTopicData(topic, data) {

    data.lastUpdated = Date.now();


    localStorage.setItem(

        storageKey(topic),

        JSON.stringify(data)

    );

}


/* =========================================================
   QUESTION BANK RESOLUTION
   ========================================================= */

function getQuestionsForTopic(topic) {

    const definition =
        TOPICS.find(
            item => item.key === topic
        );


    if (!definition) {

        return [];

    }


    const variableName =
        definition.bank;


    /*
       استفاده از window باعث می‌شود
       اگر فایل بانک سؤال وجود نداشته باشد
       برنامه متوقف نشود.
    */

    if (
        typeof window[variableName] !==
        "undefined"
    ) {

        return Array.isArray(
            window[variableName]
        )
            ? window[variableName]
            : [];

    }


    /*
       نام‌های جایگزین برای بعضی بانک‌ها
    */

    const aliases = {

        "Multiple Sclerosis & Demyelinating Diseases":
            [
                "msQuestions",
                "multipleSclerosisQuestions",
                "demyelinatingQuestions"
            ],

        "Neurogenetics & Metabolic Disorders":
            [
                "neurogeneticsQuestions",
                "neurogeneticQuestions",
                "metabolicQuestions"
            ],

        "Neurodiagnostic Methods":
            [
                "neurodiagnosticQuestions",
                "diagnosticMethodsQuestions"
            ],

        "Viral & Prion Diseases":
            [
                "viralPrionQuestions",
                "neuroinfectiousQuestions"
            ]

    };


    const possible =
        aliases[topic] || [];


    for (
        let i = 0;
        i < possible.length;
        i++
    ) {

        if (
            typeof window[possible[i]] !==
            "undefined" &&
            Array.isArray(
                window[possible[i]]
            )
        ) {

            return window[possible[i]];

        }

    }


    return [];

}


/* =========================================================
   TOPIC TITLE
   ========================================================= */

function getTopicTitle(topic) {

    const item =
        TOPICS.find(
            x => x.key === topic
        );


    return item
        ? item.title
        : topic;

}


/* =========================================================
   START TOPIC
   ========================================================= */

function startTopic(topic) {

    const questions =
        getQuestionsForTopic(topic);


    if (!questions.length) {

        alert(
            "بانک سؤال این فصل هنوز آماده نشده است."
        );

        return;

    }


    currentTopic = topic;

    currentQuestions = questions;

    currentMode = "normal";

    currentReviewIndexes = [];

    currentScore = 0;

    currentAnswered = false;


    const data =
        getTopicData(topic);


    /*
       اگر فصل قبلاً تمام شده است
    */

    if (data.completed) {

        const restart =
            confirm(

                "این فصل قبلاً به پایان رسیده است.\n\n" +

                "آیا می‌خواهید آزمون را از ابتدا شروع کنید؟"

            );


        if (!restart) {

            return;

        }


        const fresh =
            defaultTopicData();


        saveTopicData(
            topic,
            fresh
        );


        data.currentIndex = 0;
        data.answers = {};
        data.wrong = [];
        data.completed = false;

    }


    currentQuestionIndex =
        Number(data.currentIndex) || 0;


    if (
        currentQuestionIndex >=
        currentQuestions.length
    ) {

        currentQuestionIndex = 0;

    }


    currentScore =
        calculateScore(
            currentQuestions,
            data.answers
        );


    showExamPage();


    if (currentQuestions.length) {

        showQuestion();

    }

}


/* =========================================================
   SHOW EXAM PAGE
   ========================================================= */

function showExamPage() {

    if (el("chaptersPage")) {

        el("chaptersPage")
            .style.display = "none";

    }


    if (el("examPage")) {

        el("examPage")
            .style.display = "block";

    }


    if (el("scoreBox")) {

        el("scoreBox")
            .style.display = "none";

    }


    const questionCard =
        document.querySelector(
            ".question-card"
        );


    if (questionCard) {

        questionCard.style.display =
            "block";

    }


    const examTop =
        document.querySelector(
            ".exam-top"
        );


    if (examTop) {

        examTop.style.display =
            "block";

    }


    if (el("flashcardPage")) {

        el("flashcardPage")
            .style.display = "none";

    }

}


/* =========================================================
   CALCULATE SCORE
   ========================================================= */

function calculateScore(
    questions,
    answers
) {

    let result = 0;


    if (!answers) {

        return 0;

    }


    Object.keys(answers)
        .forEach(
            key => {

                const index =
                    Number(key);


                if (
                    questions[index] &&
                    Number(
                        answers[key]
                    ) ===
                    Number(
                        questions[index].correct
                    )
                ) {

                    result++;

                }

            }
        );


    return result;

}


/* =========================================================
   SHOW NORMAL QUESTION
   ========================================================= */

function showQuestion() {

    if (!currentQuestions.length) {

        return;

    }


    const question =
        currentQuestions[
            currentQuestionIndex
        ];


    if (!question) {

        return;

    }


    const data =
        getTopicData(currentTopic);


    /*
       بسیار مهم:
       هر بار سؤال جدید نمایش داده می‌شود
       وضعیت پاسخ کاملاً از صفر ساخته می‌شود.
    */

    currentAnswered = false;


    currentOriginalIndex =
        currentQuestionIndex;


    renderQuestion(
        question,
        currentQuestionIndex,
        currentQuestions.length
    );


    /*
       اگر قبلاً در آزمون اصلی پاسخ داده شده
       پاسخ را فقط برای نمایش نتیجه قبلی
       restore می‌کنیم.
    */

    if (
        Object.prototype.hasOwnProperty.call(
            data.answers,
            currentQuestionIndex
        )
    ) {

        restoreNormalAnswer(
            question,
            Number(
                data.answers[
                    currentQuestionIndex
                ]
            )
        );

    }


    updateExamStatus(
        data
    );


    updateButtons();

}


/* =========================================================
   RENDER QUESTION
   ========================================================= */

function renderQuestion(
    question,
    displayIndex,
    total
) {

    if (el("questionNumber")) {

        el("questionNumber")
            .textContent =
            currentMode === "review"
                ? "مرور سؤال " +
                  (displayIndex + 1)
                : "سؤال " +
                  (displayIndex + 1);

    }


    if (el("progressText")) {

        el("progressText")
            .textContent =
            currentMode === "review"
                ? "مرور " +
                  (displayIndex + 1) +
                  " از " +
                  total
                : "سؤال " +
                  (displayIndex + 1) +
                  " از " +
                  total;

    }


    if (el("progressFill")) {

        const percentage =
            total > 0
                ? (
                    ((displayIndex + 1) /
                    total) * 100
                  )
                : 0;


        el("progressFill")
            .style.width =
            percentage + "%";

    }


    if (el("questionMode")) {

        el("questionMode")
            .textContent =
            currentMode === "review"
                ? "🔄 مرور سؤال غلط"
                : "📝 آزمون";

    }


    if (el("examTitle")) {

        el("examTitle")
            .textContent =
            currentMode === "review"
                ? getTopicTitle(
                    currentTopic
                  ) +
                  " — مرور سؤالات غلط"
                : getTopicTitle(
                    currentTopic
                  );

    }


    if (el("questionText")) {

        el("questionText")
            .textContent =
            question.question || "";

    }


    const container =
        el("optionsContainer");


    if (!container) {

        return;

    }


    /*
       بسیار مهم:
       قبل از ساخت سؤال جدید،
       گزینه‌های سؤال قبلی کاملاً حذف می‌شوند.
    */

    container.innerHTML = "";


    const options =
        Array.isArray(question.options)
            ? question.options
            : [];


    options.forEach(
        function(
            optionText,
            index
        ) {

            const label =
                document.createElement(
                    "label"
                );


            label.className =
                "option";


            const input =
                document.createElement(
                    "input"
                );


            input.type = "radio";

            input.name =
                "answer";

            input.value =
                index;


            const span =
                document.createElement(
                    "span"
                );


            span.className =
                "option-text";


            span.textContent =
                optionText;


            const mark =
                document.createElement(
                    "span"
                );


            mark.className =
                "option-mark";


            label.appendChild(
                input
            );


            label.appendChild(
                span
            );


            label.appendChild(
                mark
            );


            container.appendChild(
                label
            );

        }
    );


    resetAnalysis();


    /*
       فعال بودن گزینه‌ها
    */

    document
        .querySelectorAll(
            'input[name="answer"]'
        )
        .forEach(
            input => {
                input.disabled = false;
            }
        );


    if (el("checkButton")) {

        el("checkButton")
            .disabled = false;

    }


    if (el("nextButton")) {

        el("nextButton")
            .disabled = true;

        el("nextButton")
            .textContent =
            displayIndex === total - 1
                ? "نمایش نتیجه"
                : "سؤال بعدی ▶";

    }


    if (el("reviewCurrentButton")) {

        el("reviewCurrentButton")
            .style.display =
            "none";

    }

}


/* =========================================================
   RESET ANALYSIS
   ========================================================= */

function resetAnalysis() {

    if (el("resultBox")) {

        el("resultBox")
            .style.display = "none";

        el("resultBox")
            .className = "result";

    }


    const ids = [

        "diagnosisText",
        "differentialText",
        "correctReasonText",
        "wrongReasonsText",
        "examTipText",
        "examTrapText"

    ];


    ids.forEach(
        id => {

            if (el(id)) {

                el(id)
                    .innerHTML = "";

            }

        }
    );


    if (el("analysisContainer")) {

        el("analysisContainer")
            .style.display = "none";

    }


    if (el("explanationBox")) {

        el("explanationBox")
            .style.display = "none";

    }


    if (el("noteBox")) {

        el("noteBox")
            .style.display = "none";

    }

}


/* =========================================================
   RESTORE NORMAL ANSWER
   ========================================================= */

function restoreNormalAnswer(
    question,
    selectedIndex
) {

    currentAnswered = true;


    const inputs =
        document.querySelectorAll(
            'input[name="answer"]'
        );


    const options =
        document.querySelectorAll(
            ".option"
        );


    if (
        inputs[selectedIndex]
    ) {

        inputs[selectedIndex]
            .checked = true;

    }


    markCorrectOption(
        question,
        options
    );


    if (
        selectedIndex ===
        Number(question.correct)
    ) {

        showResult(
            true,
            "عالی",
            "پاسخ شما صحیح است."
        );

    }

    else {

        markWrongOption(
            selectedIndex,
            options
        );


        showResult(
            false,
            "پاسخ غلط است",
            "پاسخ صحیح با علامت سبز مشخص شده است."
        );

    }


    showQuestionAnalysis(
        question
    );


    disableOptions();


    if (el("checkButton")) {

        el("checkButton")
            .disabled = true;

    }


    if (el("nextButton")) {

        el("nextButton")
            .disabled = false;

    }

}


/* =========================================================
   CHECK ANSWER
   ========================================================= */

function checkAnswer() {

    if (currentAnswered) {

        return;

    }


    const selected =
        document.querySelector(
            'input[name="answer"]:checked'
        );


    if (!selected) {

        alert(
            "لطفاً ابتدا یک گزینه را انتخاب کنید."
        );

        return;

    }


    const selectedIndex =
        Number(
            selected.value
        );


    const question =
        currentQuestions[
            currentQuestionIndex
        ];


    if (!question) {

        return;

    }


    currentAnswered = true;


    const options =
        document.querySelectorAll(
            ".option"
        );


    /*
       =====================================================
       حالت عادی
       =====================================================
    */

    if (
        currentMode === "normal"
    ) {

        const data =
            getTopicData(
                currentTopic
            );


        /*
           ذخیره پاسخ با شماره اصلی سؤال
        */

        data.answers[
            currentQuestionIndex
        ] = selectedIndex;


        if (
            selectedIndex ===
            Number(question.correct)
        ) {

            /*
               حذف از لیست غلط
            */

            data.wrong =
                data.wrong.filter(
                    index =>
                        Number(index) !==
                        Number(
                            currentQuestionIndex
                        )
                );


            currentScore =
                calculateScore(
                    currentQuestions,
                    data.answers
                );


            markCorrectOption(
                question,
                options
            );


            showResult(
                true,
                "عالی",
                "پاسخ شما صحیح است."
            );

        }

        else {

            if (
                !data.wrong.includes(
                    currentQuestionIndex
                )
            ) {

                data.wrong.push(
                    currentQuestionIndex
                );

            }


            markCorrectOption(
                question,
                options
            );


            markWrongOption(
                selectedIndex,
                options
            );


            showResult(
                false,
                "پاسخ غلط است",
                "پاسخ صحیح با علامت سبز مشخص شده است."
            );

        }


        /*
           تحلیل کامل سؤال
        */

        showQuestionAnalysis(
            question
        );


        disableOptions();


        /*
           سؤال بعدی برای ادامه ذخیره می‌شود.
        */

        if (
            currentQuestionIndex <
            currentQuestions.length - 1
        ) {

            data.currentIndex =
                currentQuestionIndex + 1;

        }


        /*
           اگر آخرین سؤال بود،
           completed هنوز false است تا
           فقط با نمایش نتیجه نهایی کامل شود.
        */

        saveTopicData(
            currentTopic,
            data
        );


        updateExamStatus(
            data
        );


        updateChapterStatuses();


    }


    /*
       =====================================================
       حالت مرور سؤالات غلط
       =====================================================
    */

    else if (
        currentMode === "review"
    ) {

        /*
           currentOriginalIndex بسیار مهم است.
           این همان شماره واقعی سؤال در بانک اصلی است.
        */

        const originalIndex =
            currentReviewIndexes[
                currentQuestionIndex
            ];


        const data =
            getTopicData(
                currentTopic
            );


        if (
            selectedIndex ===
            Number(question.correct)
        ) {

            /*
               پاسخ صحیح در مرور:
               سؤال از لیست غلط حذف می‌شود.
            */

            data.wrong =
                data.wrong.filter(
                    index =>
                        Number(index) !==
                        Number(
                            originalIndex
                        )
                );


            /*
               پاسخ صحیح جدید نیز
               در بانک اصلی ذخیره می‌شود.
            */

            data.answers[
                originalIndex
            ] =
                selectedIndex;


            markCorrectOption(
                question,
                options
            );


            showResult(
                true,
                "عالی",
                "این سؤال را در مرور مجدداً صحیح پاسخ دادید."
            );

        }

        else {

            /*
               اگر باز هم غلط باشد،
               سؤال در wrong باقی می‌ماند.
            */

            if (
                !data.wrong.includes(
                    originalIndex
                )
            ) {

                data.wrong.push(
                    originalIndex
                );

            }


            data.answers[
                originalIndex
            ] =
                selectedIndex;


            markCorrectOption(
                question,
                options
            );


            markWrongOption(
                selectedIndex,
                options
            );


            showResult(
                false,
                "پاسخ هنوز صحیح نیست",
                "این سؤال همچنان در فهرست سؤالات غلط باقی می‌ماند."
            );

        }


        /*
           تحلیل کامل سؤال
        */

        showQuestionAnalysis(
            question
        );


        disableOptions();


        saveTopicData(
            currentTopic,
            data
        );


        updateChapterStatuses();

    }


    updateButtons();

}


/* =========================================================
   MARK CORRECT OPTION
   ========================================================= */

function markCorrectOption(
    question,
    options
) {

    const correct =
        Number(question.correct);


    if (!options[correct]) {

        return;

    }


    options[correct]
        .classList.add(
            "correct-option"
        );


    const mark =
        options[correct]
            .querySelector(
                ".option-mark"
            );


    if (mark) {

        mark.textContent = "✓";

    }

}


/* =========================================================
   MARK WRONG OPTION
   ========================================================= */

function markWrongOption(
    index,
    options
) {

    if (!options[index]) {

        return;

    }


    options[index]
        .classList.add(
            "wrong-option"
        );


    const mark =
        options[index]
            .querySelector(
                ".option-mark"
            );


    if (mark) {

        mark.textContent = "✕";

    }

}


/* =========================================================
   DISABLE OPTIONS
   ========================================================= */

function disableOptions() {

    document
        .querySelectorAll(
            'input[name="answer"]'
        )
        .forEach(
            input => {

                input.disabled = true;

            }
        );


    if (el("checkButton")) {

        el("checkButton")
            .disabled = true;

    }


    if (el("nextButton")) {

        el("nextButton")
            .disabled = false;

    }

}


/* =========================================================
   SHOW RESULT
   ========================================================= */

function showResult(
    correct,
    title,
    message
) {

    const box =
        el("resultBox");


    if (!box) {

        return;

    }


    box.style.display =
        "block";


    box.className =
        correct
            ? "result correct"
            : "result wrong";


    if (el("resultTitle")) {

        el("resultTitle")
            .textContent =
            title;

    }


    if (el("resultMessage")) {

        el("resultMessage")
            .textContent =
            message;

    }

}


/* =========================================================
   QUESTION ANALYSIS
   ========================================================= */

function showQuestionAnalysis(
    question
) {

    /*
       =====================================================
       ساختار پیشنهادی هر سؤال:

       {
          question: "...",
          options: ["...", "...", "...", "..."],
          correct: 1,

          diagnosis: "...",

          differentials: [
              "...",
              "...",
              "..."
          ],

          correctReason: "...",

          wrongReasons: [
              "...",
              "...",
              "...",
              "..."
          ],

          examTip: "...",

          examTrap: "...",

          flashcardQuestion: "...",

          flashcardAnswer: "..."
       }

       برای سازگاری با بانک‌های قدیمی،
       explanation و note نیز پشتیبانی می‌شوند.
       =====================================================
    */


    const diagnosis =
        question.diagnosis ||
        "برای این سؤال تشخیص اختصاصی وارد نشده است.";


    const differentials =
        question.differentials ||
        question.differential ||
        "";


    const correctReason =
        question.correctReason ||
        question.explanation ||
        "علت علمی گزینه صحیح در بانک سؤال ثبت نشده است.";


    const wrongReasons =
        question.wrongReasons ||
        [];


    const examTip =
        question.examTip ||
        question.note ||
        "نکته آزمونی برای این سؤال ثبت نشده است.";


    const examTrap =
        question.examTrap ||
        "تله آزمونی اختصاصی برای این سؤال ثبت نشده است.";


    /*
       اگر analysisContainer وجود دارد،
       تحلیل جدید را در آن قرار می‌دهیم.
    */

    if (el("analysisContainer")) {

        el("analysisContainer")
            .style.display = "block";

    }


    /*
       تشخیص
    */

    if (el("diagnosisText")) {

        el("diagnosisText")
            .innerHTML =
            formatAnalysisText(
                diagnosis
            );

    }


    /*
       افتراق‌ها
    */

    if (el("differentialText")) {

        el("differentialText")
            .innerHTML =
            formatList(
                differentials
            );

    }


    /*
       علت درست بودن گزینه صحیح
    */

    if (el("correctReasonText")) {

        el("correctReasonText")
            .innerHTML =
            formatAnalysisText(
                correctReason
            );

    }


    /*
       دلایل غلط بودن گزینه‌ها
    */

    if (el("wrongReasonsText")) {

        el("wrongReasonsText")
            .innerHTML =
            formatWrongReasons(
                wrongReasons,
                question
            );

    }


    /*
       نکته آزمونی
    */

    if (el("examTipText")) {

        el("examTipText")
            .innerHTML =
            formatAnalysisText(
                examTip
            );

    }


    /*
       تله آزمونی
    */

    if (el("examTrapText")) {

        el("examTrapText")
            .innerHTML =
            formatAnalysisText(
                examTrap
            );

    }


    /*
       سازگاری با indexهای قدیمی‌تر
    */

    if (
        el("explanationBox") &&
        question.explanation
    ) {

        el("explanationBox")
            .style.display =
            "block";

    }


    if (
        el("explanationText") &&
        question.explanation
    ) {

        el("explanationText")
            .textContent =
            question.explanation;

    }


    if (
        el("noteBox") &&
        question.note
    ) {

        el("noteBox")
            .style.display =
            "block";

    }


    if (
        el("noteText") &&
        question.note
    ) {

        el("noteText")
            .textContent =
            question.note;

    }

}


/* =========================================================
   FORMAT ANALYSIS TEXT
   ========================================================= */

function formatAnalysisText(
    value
) {

    if (
        value === null ||
        value === undefined
    ) {

        return "";

    }


    if (Array.isArray(value)) {

        return formatList(
            value
        );

    }


    return escapeHTML(
        String(value)
    ).replace(
        /\n/g,
        "<br>"
    );

}


/* =========================================================
   FORMAT LIST
   ========================================================= */

function formatList(
    value
) {

    if (!value) {

        return "ثبت نشده است.";

    }


    if (Array.isArray(value)) {

        if (!value.length) {

            return "ثبت نشده است.";

        }


        return "<ul>" +

            value
                .map(
                    item =>
                        "<li>" +
                        escapeHTML(
                            String(item)
                        ) +
                        "</li>"
                )
                .join("") +

            "</ul>";

    }


    return formatAnalysisText(
        value
    );

}


/* =========================================================
   FORMAT WRONG REASONS
   ========================================================= */

function formatWrongReasons(
    wrongReasons,
    question
) {

    if (
        !wrongReasons ||
        (
            Array.isArray(
                wrongReasons
            ) &&
            wrongReasons.length === 0
        )
    ) {

        return (
            "علت نادرست بودن گزینه‌های دیگر " +
            "برای این سؤال هنوز ثبت نشده است."
        );

    }


    /*
       اگر wrongReasons به صورت object باشد:

       {
          "0": "...",
          "1": "...",
          "2": "...",
          "3": "..."
       }
    */

    if (
        typeof wrongReasons ===
        "object" &&
        !Array.isArray(wrongReasons)
    ) {

        let html = "<ul>";


        Object.keys(
            wrongReasons
        ).forEach(
            key => {

                html +=
                    "<li><strong>" +
                    optionLetter(
                        Number(key)
                    ) +
                    ":</strong> " +
                    escapeHTML(
                        String(
                            wrongReasons[key]
                        )
                    ) +
                    "</li>";

            }
        );


        html += "</ul>";


        return html;

    }


    /*
       اگر به شکل آرایه باشد
    */

    if (
        Array.isArray(
            wrongReasons
        )
    ) {

        let html = "<ul>";


        wrongReasons.forEach(
            function(
                reason,
                index
            ) {

                /*
                   گزینه صحیح را تکرار نمی‌کنیم
                */

                if (
                    question &&
                    Number(index) ===
                    Number(
                        question.correct
                    )
                ) {

                    return;

                }


                html +=
                    "<li><strong>" +
                    optionLetter(index) +
                    ":</strong> " +
                    escapeHTML(
                        String(reason)
                    ) +
                    "</li>";

            }
        );


        html += "</ul>";


        return html;

    }


    return escapeHTML(
        String(wrongReasons)
    );

}


/* =========================================================
   OPTION LETTER
   ========================================================= */

function optionLetter(
    index
) {

    const letters = [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F"
    ];


    return letters[index] ||
        String(index + 1);

}


/* =========================================================
   ESCAPE HTML
   ========================================================= */

function escapeHTML(
    text
) {

    return text
        .replace(
            /&/g,
            "&amp;"
        )
        .replace(
            /</g,
            "&lt;"
        )
        .replace(
            />/g,
            "&gt;"
        )
        .replace(
            /"/g,
            "&quot;"
        )
        .replace(
            /'/g,
            "&#039;"
        );

}


/* =========================================================
   NEXT QUESTION
   ========================================================= */

function nextQuestion() {

    if (!currentAnswered) {

        return;

    }


    /*
       =====================================================
       REVIEW MODE
       =====================================================
    */

    if (
        currentMode === "review"
    ) {

        if (
            currentQuestionIndex <
            currentQuestions.length - 1
        ) {

            currentQuestionIndex++;


            /*
               بسیار مهم:
               سؤال جدید با renderQuestion ساخته می‌شود
               و هیچ پاسخ قبلی از DOM باقی نمی‌ماند.
            */

            const originalIndex =
                currentReviewIndexes[
                    currentQuestionIndex
                ];


            currentOriginalIndex =
                originalIndex;


            showReviewQuestion();


            scrollTop();

        }

        else {

            showReviewScore();

        }


        return;

    }


    /*
       =====================================================
       NORMAL MODE
       =====================================================
    */

    if (
        currentQuestionIndex <
        currentQuestions.length - 1
    ) {

        currentQuestionIndex++;


        currentOriginalIndex =
            currentQuestionIndex;


        showQuestion();


        scrollTop();

    }

    else {

        finishNormalExam();

    }

}


/* =========================================================
   REVIEW QUESTION
   ========================================================= */

function showReviewQuestion() {

    if (
        !currentQuestions.length
    ) {

        return;

    }


    const question =
        currentQuestions[
            currentQuestionIndex
        ];


    if (!question) {

        return;

    }


    /*
       currentQuestions در مرور فقط شامل
       سؤالات غلط است.
    */

    currentOriginalIndex =
        currentReviewIndexes[
            currentQuestionIndex
        ];


    currentAnswered = false;


    renderQuestion(
        question,
        currentQuestionIndex,
        currentQuestions.length
    );


    if (el("questionMode")) {

        el("questionMode")
            .textContent =
            "🔄 مرور مجدد سؤال غلط";

    }


    if (el("examStatus")) {

        el("examStatus")
            .textContent =
            "🔄 حالت مرور سؤالات غلط — " +
            "لطفاً دوباره پاسخ دهید.";

    }

}


/* =========================================================
   START WRONG REVIEW
   ========================================================= */

function startWrongReview(
    topicOverride = null
) {

    if (topicOverride) {

        currentTopic =
            topicOverride;

    }


    if (!currentTopic) {

        alert(
            "فصلی برای مرور انتخاب نشده است."
        );

        return;

    }


    const originalQuestions =
        getQuestionsForTopic(
            currentTopic
        );


    const data =
        getTopicData(
            currentTopic
        );


    if (
        !data.wrong ||
        !data.wrong.length
    ) {

        alert(
            "در این فصل سؤال غلطی برای مرور وجود ندارد."
        );

        return;

    }


    /*
       فقط شماره‌هایی را نگه می‌داریم
       که واقعاً در بانک سؤال وجود دارند.
    */

    currentReviewIndexes =
        data.wrong
            .map(
                index => Number(index)
            )
            .filter(
                index =>
                    originalQuestions[index]
            );


    if (
        !currentReviewIndexes.length
    ) {

        alert(
            "سؤال قابل مرور پیدا نشد."
        );

        return;

    }


    currentQuestions =
        currentReviewIndexes.map(
            index =>
                originalQuestions[index]
        );


    currentQuestionIndex = 0;

    currentOriginalIndex =
        currentReviewIndexes[0];

    currentMode = "review";

    currentAnswered = false;

    currentScore = 0;


    showExamPage();


    showReviewQuestion();


    scrollTop();

}


/* =========================================================
   REVIEW SCORE
   ========================================================= */

function showReviewScore() {

    const data =
        getTopicData(
            currentTopic
        );


    const remainingWrong =
        data.wrong
            ? data.wrong.length
            : 0;


    /*
       اگر همه سؤالات درست شده باشند
    */

    if (remainingWrong === 0) {

        alert(
            "🎉 عالی!\n\n" +
            "تمام سؤالاتی که قبلاً غلط پاسخ داده بودید، " +
            "در مرور مجدد صحیح پاسخ داده شدند."
        );

    }

    else {

        alert(
            "مرور این مجموعه به پایان رسید.\n\n" +
            "تعداد سؤالاتی که هنوز نیاز به مرور دارند: " +
            remainingWrong
        );

    }


    backToChapters();

}


/* =========================================================
   END EXAM
   ========================================================= */

function endExam() {

    /*
       در حالت مرور،
       پایان مرور فقط به فصل برمی‌گردد.
    */

    if (
        currentMode === "review"
    ) {

        backToChapters();

        return;

    }


    if (!currentTopic) {

        return;

    }


    const data =
        getTopicData(
            currentTopic
        );


    /*
       اگر سؤال فعلی پاسخ داده شده،
       سؤال بعدی محل ادامه خواهد بود.
    */

    if (currentAnswered) {

        if (
            currentQuestionIndex <
            currentQuestions.length - 1
        ) {

            data.currentIndex =
                currentQuestionIndex + 1;

        }

        else {

            data.currentIndex =
                currentQuestions.length;

        }

    }

    else {

        /*
           اگر هنوز پاسخ نداده،
           همان سؤال محل ادامه است.
        */

        data.currentIndex =
            currentQuestionIndex;

    }


    data.completed = false;


    saveTopicData(
        currentTopic,
        data
    );


    showPartialScore(
        data
    );

}


/* =========================================================
   PARTIAL SCORE
   ========================================================= */

function showPartialScore(
    data
) {

    const total =
        currentQuestions.length;


    const answeredCount =
        Object.keys(
            data.answers || {}
        ).filter(
            key =>
                Number(key) <
                total
        ).length;


    const correctCount =
        calculateScore(
            currentQuestions,
            data.answers
        );


    const wrongCount =
        data.wrong
            ? data.wrong.length
            : 0;


    const remaining =
        Math.max(
            0,
            total -
            answeredCount
        );


    const percentage =
        answeredCount > 0
            ? Math.round(
                (
                    correctCount /
                    answeredCount
                ) * 100
              )
            : 0;


    hideQuestionCard();


    if (el("scoreBox")) {

        el("scoreBox")
            .style.display =
            "block";

    }


    if (el("scoreTitle")) {

        el("scoreTitle")
            .textContent =
            "آزمون متوقف شد";

    }


    if (el("finalScore")) {

        el("finalScore")
            .textContent =
            correctCount +
            " صحیح از " +
            answeredCount +
            " پاسخ داده‌شده";

    }


    if (el("finalDetails")) {

        el("finalDetails")
            .innerHTML =

            "✅ صحیح: " +
            correctCount +

            "<br>❌ غلط: " +
            wrongCount +

            "<br>⏳ باقی‌مانده: " +
            remaining +

            "<br>📊 درصد پاسخ صحیح: " +
            percentage +
            "%";

    }


    if (el("finalMessage")) {

        el("finalMessage")
            .textContent =
            "پیشرفت شما ذخیره شد. دفعه بعد آزمون از سؤال بعدی ادامه پیدا می‌کند.";

    }


    updateScoreReviewButton(
        wrongCount
    );

}


/* =========================================================
   FINISH NORMAL EXAM
   ========================================================= */

function finishNormalExam() {

    const data =
        getTopicData(
            currentTopic
        );


    data.currentIndex =
        currentQuestions.length;


    data.completed =
        true;


    saveTopicData(
        currentTopic,
        data
    );


    showFinalScore();

}


/* =========================================================
   FINAL SCORE
   ========================================================= */

function showFinalScore() {

    const data =
        getTopicData(
            currentTopic
        );


    const total =
        currentQuestions.length;


    const correctCount =
        calculateScore(
            currentQuestions,
            data.answers
        );


    const wrongCount =
        data.wrong
            ? data.wrong.length
            : 0;


    const percentage =
        total > 0
            ? Math.round(
                (
                    correctCount /
                    total
                ) * 100
              )
            : 0;


    hideQuestionCard();


    if (el("scoreBox")) {

        el("scoreBox")
            .style.display =
            "block";

    }


    if (el("scoreTitle")) {

        el("scoreTitle")
            .textContent =
            "آزمون به پایان رسید 🎉";

    }


    if (el("finalScore")) {

        el("finalScore")
            .textContent =
            correctCount +
            " از " +
            total +
            "  (" +
            percentage +
            "%)";

    }


    if (el("finalDetails")) {

        el("finalDetails")
            .innerHTML =

            "✅ پاسخ صحیح: " +
            correctCount +

            "<br>❌ پاسخ غلط: " +
            wrongCount +

            "<br>📚 تعداد کل سؤالات: " +
            total;

    }


    let message;


    if (percentage >= 90) {

        message =
            "عملکرد عالی 🌟";

    }

    else if (percentage >= 75) {

        message =
            "عملکرد بسیار خوب 👍";

    }

    else if (percentage >= 60) {

        message =
            "عملکرد قابل قبول؛ مرور سؤالات غلط توصیه می‌شود.";

    }

    else {

        message =
            "بهتر است این فصل را مجدداً مرور کنید.";

    }


    if (el("finalMessage")) {

        el("finalMessage")
            .textContent =
            message;

    }


    updateScoreReviewButton(
        wrongCount
    );


    updateChapterStatuses();

}


/* =========================================================
   HIDE QUESTION CARD
   ========================================================= */

function hideQuestionCard() {

    const card =
        document.querySelector(
            ".question-card"
        );


    if (card) {

        card.style.display =
            "none";

    }


    const top =
        document.querySelector(
            ".exam-top"
        );


    if (top) {

        top.style.display =
            "none";

    }

}


/* =========================================================
   SCORE REVIEW BUTTON
   ========================================================= */

function updateScoreReviewButton(
    wrongCount
) {

    const button =
        el("scoreReviewButton");


    if (!button) {

        return;

    }


    if (wrongCount > 0) {

        button.style.display =
            "inline-block";

        button.textContent =
            "🔄 مرور " +
            wrongCount +
            " سؤال غلط";

    }

    else {

        button.style.display =
            "none";

    }

}


/* =========================================================
   EXAM STATUS
   ========================================================= */

function updateExamStatus(
    data
) {

    if (!el("examStatus")) {

        return;

    }


    if (
        currentMode === "review"
    ) {

        el("examStatus")
            .textContent =
            "🔄 حالت مرور سؤالات غلط";

        return;

    }


    const answeredCount =
        Object.keys(
            data.answers || {}
        ).length;


    const correctCount =
        calculateScore(
            currentQuestions,
            data.answers
        );


    const wrongCount =
        data.wrong
            ? data.wrong.length
            : 0;


    const remaining =
        Math.max(
            0,
            currentQuestions.length -
            answeredCount
        );


    el("examStatus")
        .textContent =

        "پاسخ داده‌شده: " +
        answeredCount +

        " | صحیح: " +
        correctCount +

        " | غلط: " +
        wrongCount +

        " | باقی‌مانده: " +
        remaining;

}


/* =========================================================
   BUTTON STATE
   ========================================================= */

function updateButtons() {

    if (el("checkButton")) {

        el("checkButton")
            .disabled =
            currentAnswered;

    }


    if (el("nextButton")) {

        el("nextButton")
            .disabled =
            !currentAnswered;


        if (
            currentQuestionIndex ===
            currentQuestions.length - 1
        ) {

            el("nextButton")
                .textContent =
                currentMode === "review"
                    ? "پایان مرور"
                    : "نمایش نتیجه";

        }

        else {

            el("nextButton")
                .textContent =
                "سؤال بعدی ▶";

        }

    }

}


/* =========================================================
   CHAPTER STATUS
   ========================================================= */

function updateChapterStatuses() {

    TOPICS.forEach(
        topic => {

            updateOneChapterStatus(
                topic
            );

        }
    );

}


/* =========================================================
   ONE CHAPTER STATUS
   ========================================================= */

function updateOneChapterStatus(
    topic
) {

    const questions =
        getQuestionsForTopic(
            topic.key
        );


    /*
       تلاش برای پیدا کردن status/actions
       بر اساس نام‌های مختلفی که ممکن است
       در index استفاده شده باشد.
    */

    const safeName =
        topic.key
            .replace(
                /[^a-zA-Z0-9]/g,
                ""
            );


    const statusCandidates = [

        "status-" +
        topic.key,

        "status-" +
        safeName,

        "status-" +
        topic.key.split(" ")[0]

    ];


    const actionCandidates = [

        "actions-" +
        topic.key,

        "actions-" +
        safeName,

        "actions-" +
        topic.key.split(" ")[0]

    ];


    let status = null;

    let actions = null;


    for (
        let i = 0;
        i < statusCandidates.length;
        i++
    ) {

        const candidate =
            el(
                statusCandidates[i]
            );


        if (candidate) {

            status = candidate;

            break;

        }

    }


    for (
        let i = 0;
        i < actionCandidates.length;
        i++
    ) {

        const candidate =
            el(
                actionCandidates[i]
            );


        if (candidate) {

            actions = candidate;

            break;

        }

    }


    if (!status || !actions) {

        return;

    }


    actions.innerHTML = "";


    if (!questions.length) {

        status.textContent =
            "⚪ بانک سؤال هنوز آماده نشده است.";

        return;

    }


    const data =
        getTopicData(
            topic.key
        );


    const answeredCount =
        Object.keys(
            data.answers || {}
        ).length;


    const wrongCount =
        data.wrong
            ? data.wrong.length
            : 0;


    if (data.completed) {

        status.innerHTML =
            "✅ تکمیل شده | " +
            "غلط: " +
            wrongCount;

    }

    else if (
        answeredCount > 0
    ) {

        status.innerHTML =

            "🟡 پیشرفت: " +
            answeredCount +
            " از " +
            questions.length +

            " | ❌ غلط: " +
            wrongCount;

    }

    else {

        status.innerHTML =
            "⚪ هنوز شروع نشده";

    }


    /*
       =====================================================
       START / CONTINUE
       =====================================================
    */

    const startButton =
        document.createElement(
            "button"
        );


    startButton.type =
        "button";


    startButton.className =
        answeredCount > 0 &&
        !data.completed
            ? "chapter-btn continue-btn"
            : "chapter-btn start-btn";


    startButton.textContent =
        answeredCount > 0 &&
        !data.completed
            ? "▶ ادامه آزمون"
            : "▶ شروع آزمون";


    startButton.onclick =
        function(
            event
        ) {

            if (event) {

                event.stopPropagation();

            }


            startTopic(
                topic.key
            );

        };


    actions.appendChild(
        startButton
    );


    /*
       =====================================================
       REVIEW WRONG
       =====================================================
    */

    if (wrongCount > 0) {

        const reviewButton =
            document.createElement(
                "button"
            );


        reviewButton.type =
            "button";


        reviewButton.className =
            "chapter-btn review-btn";


        reviewButton.textContent =
            "🔄 مرور " +
            wrongCount +
            " غلط";


        reviewButton.onclick =
            function(
                event
            ) {

                if (event) {

                    event.stopPropagation();

                }


                startWrongReview(
                    topic.key
                );

            };


        actions.appendChild(
            reviewButton
        );

    }


    /*
       =====================================================
       RESET
       =====================================================
    */

    if (
        answeredCount > 0 ||
        data.completed
    ) {

        const resetButton =
            document.createElement(
                "button"
            );


        resetButton.type =
            "button";


        resetButton.className =
            "chapter-btn reset-btn";


        resetButton.textContent =
            "پاک کردن پیشرفت";


        resetButton.onclick =
            function(
                event
            ) {

                if (event) {

                    event.stopPropagation();

                }


                resetTopic(
                    topic.key
                );

            };


        actions.appendChild(
            resetButton
        );

    }

}


/* =========================================================
   RESET TOPIC
   ========================================================= */

function resetTopic(
    topic
) {

    const ok =
        confirm(

            "تمام پیشرفت، پاسخ‌ها و سؤالات غلط این فصل پاک شود؟"

        );


    if (!ok) {

        return;

    }


    localStorage.removeItem(
        storageKey(topic)
    );


    updateChapterStatuses();

}


/* =========================================================
   BACK TO CHAPTERS
   ========================================================= */

function backToChapters() {

    /*
       در حالت عادی وضعیت فعلی حفظ می‌شود.
    */

    if (
        currentTopic &&
        currentMode === "normal" &&
        currentQuestions.length
    ) {

        const data =
            getTopicData(
                currentTopic
            );


        /*
           اگر سؤال پاسخ داده شده،
           ادامه از سؤال بعدی خواهد بود.
        */

        if (currentAnswered) {

            if (
                currentQuestionIndex <
                currentQuestions.length - 1
            ) {

                data.currentIndex =
                    currentQuestionIndex + 1;

            }

            else {

                /*
                   اگر آخرین سؤال پاسخ داده شده
                   ولی نتیجه هنوز باز نشده،
                   محل ادامه انتهای بانک است.
                */

                data.currentIndex =
                    currentQuestions.length;

            }

        }

        else {

            /*
               سؤال بدون پاسخ حفظ می‌شود.
            */

            data.currentIndex =
                currentQuestionIndex;

        }


        data.completed =
            data.completed || false;


        saveTopicData(
            currentTopic,
            data
        );

    }


    /*
       برگشت به صفحه فصل‌ها
    */

    if (el("examPage")) {

        el("examPage")
            .style.display =
            "none";

    }


    if (el("chaptersPage")) {

        el("chaptersPage")
            .style.display =
            "block";

    }


    if (el("flashcardPage")) {

        el("flashcardPage")
            .style.display =
            "none";

    }


    const scoreBox =
        el("scoreBox");


    if (scoreBox) {

        scoreBox.style.display =
            "none";

    }


    const card =
        document.querySelector(
            ".question-card"
        );


    if (card) {

        card.style.display =
            "block";

    }


    const top =
        document.querySelector(
            ".exam-top"
        );


    if (top) {

        top.style.display =
            "block";

    }


    currentQuestions = [];

    currentQuestionIndex = 0;

    currentOriginalIndex = 0;

    currentScore = 0;

    currentAnswered = false;

    currentTopic = "";

    currentMode = "normal";

    currentReviewIndexes = [];


    updateChapterStatuses();


    scrollTop();

}


/* =========================================================
   FLASHCARD — CURRENT QUESTION
   ========================================================= */

function openQuestionFlashcard() {

    const question =
        currentQuestions[
            currentQuestionIndex
        ];


    if (!question) {

        return;

    }


    const questionText =
        question.flashcardQuestion ||
        question.question ||
        "";


    const answerText =
        question.flashcardAnswer ||
        question.examTip ||
        question.note ||
        question.explanation ||
        "نکته‌ای برای این فلش‌کارت ثبت نشده است.";


    /*
       اگر index جدید دارای فلش‌کارت کوچک باشد
    */

    if (
        el("questionFlashcardQuestion") &&
        el("questionFlashcardAnswer")
    ) {

        el("questionFlashcardQuestion")
            .textContent =
            questionText;


        el("questionFlashcardAnswer")
            .textContent =
            answerText;

    }


    /*
       فلش‌کارت بزرگ
    */

    if (
        el("flashcardLargeQuestion") &&
        el("flashcardLargeAnswer")
    ) {

        el("flashcardLargeQuestion")
            .textContent =
            questionText;


        el("flashcardLargeAnswer")
            .textContent =
            answerText;

    }


    if (el("flashcardProgress")) {

        el("flashcardProgress")
            .textContent =
            "سؤال " +
            (currentQuestionIndex + 1) +
            " از " +
            currentQuestions.length;

    }


    if (el("flashcardPage")) {

        el("flashcardPage")
            .style.display =
            "block";

    }


    if (el("examPage")) {

        el("examPage")
            .style.display =
            "none";

    }


    scrollTop();

}


/* =========================================================
   CLOSE FLASHCARD
   ========================================================= */

function closeFlashcard() {

    if (el("flashcardPage")) {

        el("flashcardPage")
            .style.display =
            "none";

    }


    if (el("examPage")) {

        el("examPage")
            .style.display =
            "block";

    }


    scrollTop();

}


/* =========================================================
   FLASHCARD TOGGLE
   ========================================================= */

function toggleFlashcardAnswer() {

    const answer =
        el("flashcardLargeAnswer");


    if (!answer) {

        return;

    }


    if (
        answer.style.display ===
        "none"
    ) {

        answer.style.display =
            "block";

    }

    else {

        answer.style.display =
            "none";

    }

}


/* =========================================================
   FLASHCARD NEXT
   ========================================================= */

function nextFlashcard() {

    if (
        !currentQuestions.length
    ) {

        return;

    }


    if (
        currentQuestionIndex <
        currentQuestions.length - 1
    ) {

        currentQuestionIndex++;

    }

    else {

        currentQuestionIndex = 0;

    }


    openQuestionFlashcard();

}


/* =========================================================
   SCROLL TOP
   ========================================================= */

function scrollTop() {

    try {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }

    catch (error) {

        window.scrollTo(
            0,
            0
        );

    }

}


/* =========================================================
   KEYBOARD SHORTCUTS
   ========================================================= */

document.addEventListener(
    "keydown",
    function(event) {

        /*
           Enter = بررسی پاسخ
        */

        if (
            event.key === "Enter" &&
            !event.shiftKey
        ) {

            if (
                currentQuestions.length &&
                !currentAnswered
            ) {

                checkAnswer();

            }

        }


        /*
           ArrowRight / ArrowLeft
           فقط بعد از پاسخ
        */

        if (
            event.key === "ArrowLeft" &&
            currentAnswered
        ) {

            nextQuestion();

        }

    }
);


/* =========================================================
   INITIALIZE
   ========================================================= */

window.addEventListener(
    "DOMContentLoaded",
    function() {

        console.log(
            "NeuroPrep app.js loaded successfully."
        );


        updateChapterStatuses();


        /*
           اگر دکمه‌های فلش‌کارت در index
           با onclick تعریف نشده باشند،
           اینجا نیز قابل اتصال هستند.
        */

        const flashcardButtons =
            document.querySelectorAll(
                "[data-action='flashcard']"
            );


        flashcardButtons.forEach(
            button => {

                button.addEventListener(
                    "click",
                    openQuestionFlashcard
                );

            }
        );


        const nextButtons =
            document.querySelectorAll(
                "[data-action='next-question']"
            );


        nextButtons.forEach(
            button => {

                button.addEventListener(
                    "click",
                    nextQuestion
                );

            }
        );


        const checkButtons =
            document.querySelectorAll(
                "[data-action='check-answer']"
            );


        checkButtons.forEach(
            button => {

                button.addEventListener(
                    "click",
                    checkAnswer
                );

            }
        );


        const endButtons =
            document.querySelectorAll(
                "[data-action='end-exam']"
            );


        endButtons.forEach(
            button => {

                button.addEventListener(
                    "click",
                    endExam
                );

            }
        );

    }
);


/* =========================================================
   DEBUG INFORMATION
   ========================================================= */

function showBankInformation() {

    console.log(
        "========== NeuroPrep Question Banks =========="
    );


    TOPICS.forEach(
        topic => {

            const questions =
                getQuestionsForTopic(
                    topic.key
                );


            console.log(
                topic.title +
                " : " +
                questions.length +
                " questions"
            );

        }
    );


    console.log(
        "=============================================="
    );

}
