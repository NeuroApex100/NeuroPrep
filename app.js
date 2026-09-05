/* =========================================================
   NeuroPrep - Main Application
   Compatible with current index.html
   ========================================================= */


/* =========================================================
   1. GLOBAL VARIABLES
   ========================================================= */

var currentTopic = "";
var currentQuestions = [];
var currentQuestionIndex = 0;
var currentOriginalIndex = 0;

var currentMode = "normal"; 
// normal | review

var currentAnswered = false;
var currentScore = 0;

var currentReviewIndexes = [];
var currentReviewPosition = 0;

var flashcardIndex = 0;


/* =========================================================
   2. TOPIC CONFIGURATION
   ========================================================= */

var TOPICS = {

    "Cerebrovascular Diseases": {
        title: "Cerebrovascular Diseases",
        persian: "بیماری‌های عروقی مغز",
        icon: "🧠",
        variableName: "cerebrovascularQuestions"
    },

    "Epilepsy & Seizure": {
        title: "Epilepsy & Seizure",
        persian: "صرع و تشنج",
        icon: "⚡",
        variableName: "epilepsyQuestions"
    },

    "Movement Disorders": {
        title: "Movement Disorders",
        persian: "اختلالات حرکتی",
        icon: "🕺",
        variableName: "movementDisordersQuestions"
    },

    "Multiple Sclerosis & Demyelinating Diseases": {
        title: "Multiple Sclerosis & Demyelinating Diseases",
        persian: "MS و بیماری‌های دمیلینه‌کننده",
        icon: "🧬",
        variableName: "multipleSclerosisQuestions"
    },

    "Neuromuscular Diseases": {
        title: "Neuromuscular Diseases",
        persian: "بیماری‌های نوروموسکولار",
        icon: "💪",
        variableName: "neuromuscularQuestions"
    },

    "Headache & Facial Pain": {
        title: "Headache & Facial Pain",
        persian: "سردرد و دردهای صورت",
        icon: "🤕",
        variableName: "headacheQuestions"
    },

    "Dementia & Cognitive Disorders": {
        title: "Dementia & Cognitive Disorders",
        persian: "دمانس و اختلالات شناختی",
        icon: "🧠",
        variableName: "dementiaQuestions"
    },

    "Viral & Prion Diseases": {
        title: "Viral & Prion Diseases",
        persian: "بیماری‌های ویروسی و پریونی",
        icon: "🦠",
        variableName: "viralPrionQuestions"
    },

    "Neuroimmunology": {
        title: "Neuroimmunology",
        persian: "نوروايمونولوژی",
        icon: "🛡️",
        variableName: "neuroimmunologyQuestions"
    },

    "Neuro-oncology": {
        title: "Neuro-oncology",
        persian: "نوروانکولوژی",
        icon: "🎗️",
        variableName: "neuroOncologyQuestions"
    },

    "Neurogenetics & Metabolic Disorders": {
        title: "Neurogenetics & Metabolic Disorders",
        persian: "نوروجنتیک و بیماری‌های متابولیک",
        icon: "🧬",
        variableName: "neurogeneticsQuestions"
    },

    "Spinal Cord Disorders": {
        title: "Spinal Cord Disorders",
        persian: "بیماری‌های نخاع",
        icon: "🦴",
        variableName: "spinalCordQuestions"
    },

    "Neuro-ophthalmology": {
        title: "Neuro-ophthalmology",
        persian: "نوروافتالمولوژی",
        icon: "👁️",
        variableName: "neuroOphthalmologyQuestions"
    },

    "Neuro-otology": {
        title: "Neuro-otology",
        persian: "نورواتولوژی",
        icon: "👂",
        variableName: "neuroOtologyQuestions"
    },

    "Pediatric Neurology": {
        title: "Pediatric Neurology",
        persian: "نورولوژی کودکان",
        icon: "👶",
        variableName: "pediatricNeurologyQuestions"
    },

    "Neurocritical Care": {
        title: "Neurocritical Care",
        persian: "نوروانتنسيو",
        icon: "🚑",
        variableName: "neurocriticalCareQuestions"
    },

    "Neurotrauma": {
        title: "Neurotrauma",
        persian: "نوروتروما",
        icon: "🚨",
        variableName: "neurotraumaQuestions"
    },

    "Autonomic & Sleep Disorders": {
        title: "Autonomic & Sleep Disorders",
        persian: "اختلالات اتونوم و خواب",
        icon: "😴",
        variableName: "autonomicSleepQuestions"
    },

    "Neurodiagnostic Methods": {
        title: "Neurodiagnostic Methods",
        persian: "روش‌های تشخیص نورولوژیک",
        icon: "🔬",
        variableName: "neurodiagnosticQuestions"
    },

    "Neuropharmacology & Principles of Treatment": {
        title: "Neuropharmacology & Principles of Treatment",
        persian: "نوروفارماکولوژی و اصول درمان",
        icon: "💊",
        variableName: "neuropharmacologyQuestions"
    }
};


/* =========================================================
   3. STORAGE
   ========================================================= */

function storageKey(topic) {
    return "neurologyprep_" +
        topic.replace(/[^a-zA-Z0-9]/g, "_");
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

    var key = storageKey(topic);
    var raw = localStorage.getItem(key);

    if (!raw) {
        return defaultTopicData();
    }

    try {

        var data = JSON.parse(raw);

        if (!data || typeof data !== "object") {
            return defaultTopicData();
        }

        if (!data.answers || typeof data.answers !== "object") {
            data.answers = {};
        }

        if (!Array.isArray(data.wrong)) {
            data.wrong = [];
        }

        data.wrong = data.wrong.map(function (x) {
            return Number(x);
        }).filter(function (x) {
            return !isNaN(x);
        });

        if (typeof data.currentIndex !== "number") {
            data.currentIndex = 0;
        }

        data.completed = !!data.completed;

        return data;

    } catch (error) {

        console.error("Storage error:", error);
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
   4. QUESTION BANK FINDER
   ========================================================= */

function getQuestionsForTopic(topic) {

    var config = TOPICS[topic];

    if (!config) {
        console.error("Unknown topic:", topic);
        return [];
    }

    var variableName = config.variableName;

    /*
       Because the question banks are declared with "var",
       they are available through window in a classic script.
    */

    var bank = window[variableName];

    if (Array.isArray(bank)) {
        return bank;
    }


    /* Alternative aliases for future files */

    var aliases = {

        "Cerebrovascular Diseases":
            ["cerebrovascularQuestions"],

        "Viral & Prion Diseases":
            ["viralPrionQuestions", "viralQuestions"],

        "Multiple Sclerosis & Demyelinating Diseases":
            ["multipleSclerosisQuestions", "msQuestions"],

        "Neurogenetics & Metabolic Disorders":
            ["neurogeneticsQuestions", "geneticMetabolicQuestions"],

        "Neurodiagnostic Methods":
            ["neurodiagnosticQuestions", "diagnosticMethodsQuestions"]

    };


    if (aliases[topic]) {

        for (var i = 0; i < aliases[topic].length; i++) {

            var possibleBank =
                window[aliases[topic][i]];

            if (Array.isArray(possibleBank)) {
                return possibleBank;
            }
        }
    }


    console.warn(
        "Question bank not found:",
        topic,
        variableName
    );

    return [];
}


/* =========================================================
   5. START TOPIC
   ========================================================= */

function startTopic(topic) {

    console.log("Starting topic:", topic);

    var questions = getQuestionsForTopic(topic);

    if (!questions || questions.length === 0) {

        showGeneralModal(
            "Question Bank",
            "بانک سؤال این فصل هنوز آماده یا متصل نشده است."
        );

        console.error(
            "Bank not ready:",
            topic
        );

        return;
    }


    currentTopic = topic;
    currentQuestions = questions;
    currentMode = "normal";

    currentReviewIndexes = [];
    currentReviewPosition = 0;

    var data = getTopicData(topic);


    /*
       If chapter has already been completed,
       ask whether the user wants to restart.
    */

    if (data.completed) {

        var restart = confirm(
            "این فصل قبلاً تکمیل شده است.\n\n" +
            "آیا می‌خواهید آزمون را از ابتدا شروع کنید؟"
        );

        if (restart) {

            data = defaultTopicData();
            saveTopicData(topic, data);

        } else {

            data.currentIndex =
                Math.min(
                    data.currentIndex,
                    currentQuestions.length - 1
                );
        }
    }


    currentQuestionIndex =
        Math.min(
            data.currentIndex || 0,
            currentQuestions.length - 1
        );


    currentScore = calculateScore();

    showExamPage();

    showQuestion();

    updateExamStatus();
}


/* =========================================================
   6. PAGE NAVIGATION
   ========================================================= */

function showExamPage() {

    var chaptersPage =
        document.getElementById("chaptersPage");

    var examPage =
        document.getElementById("examPage");

    var scoreBox =
        document.getElementById("scoreBox");

    var flashcardPage =
        document.getElementById("flashcardPage");


    if (chaptersPage) {
        chaptersPage.style.display = "none";
    }

    if (examPage) {
        examPage.style.display = "block";
    }

    if (scoreBox) {
        scoreBox.style.display = "none";
    }

    if (flashcardPage) {
        flashcardPage.style.display = "none";
    }
}


function backToChapters() {

    var chaptersPage =
        document.getElementById("chaptersPage");

    var examPage =
        document.getElementById("examPage");

    var scoreBox =
        document.getElementById("scoreBox");

    var flashcardPage =
        document.getElementById("flashcardPage");


    if (examPage) {
        examPage.style.display = "none";
    }

    if (scoreBox) {
        scoreBox.style.display = "none";
    }

    if (flashcardPage) {
        flashcardPage.style.display = "none";
    }

    if (chaptersPage) {
        chaptersPage.style.display = "block";
    }

    updateChapterStatuses();
}


function endExam() {

    if (!currentQuestions.length) {
        backToChapters();
        return;
    }

    var leave = confirm(
        "آیا می‌خواهید آزمون را ترک کنید؟\n\n" +
        "پاسخ‌های ثبت‌شده شما حفظ خواهند شد."
    );

    if (leave) {
        backToChapters();
    }
}


/* =========================================================
   7. RENDER QUESTION
   ========================================================= */

function showQuestion() {

    if (!currentQuestions.length) {
        return;
    }


    if (currentMode === "normal") {

        if (
            currentQuestionIndex < 0 ||
            currentQuestionIndex >= currentQuestions.length
        ) {
            currentQuestionIndex = 0;
        }

        currentOriginalIndex =
            currentQuestionIndex;

    } else {

        if (
            currentReviewPosition < 0 ||
            currentReviewPosition >= currentReviewIndexes.length
        ) {
            return;
        }

        currentOriginalIndex =
            currentReviewIndexes[currentReviewPosition];
    }


    var question =
        currentQuestions[currentOriginalIndex];

    if (!question) {
        return;
    }


    currentAnswered = false;


    renderQuestion(
        question,
        currentOriginalIndex
    );


    /*
       Restore previously answered question
       in normal mode.
    */

    if (currentMode === "normal") {

        var data =
            getTopicData(currentTopic);

        var savedAnswer =
            data.answers[
                String(currentOriginalIndex)
            ];

        if (
            savedAnswer !== undefined &&
            savedAnswer !== null
        ) {

            restoreNormalAnswer(
                question,
                Number(savedAnswer)
            );
        }
    }


    updateButtons();
    updateExamStatus();
}


function renderQuestion(question, originalIndex) {

    var config =
        TOPICS[currentTopic];


    var examTitle =
        document.getElementById("examTitle");

    var questionNumber =
        document.getElementById("questionNumber");

    var questionMode =
        document.getElementById("questionMode");

    var questionText =
        document.getElementById("questionText");

    var optionsContainer =
        document.getElementById("optionsContainer");


    if (examTitle) {

        examTitle.textContent =
            config
                ? config.persian
                : currentTopic;
    }


    if (questionNumber) {

        questionNumber.textContent =
            "سؤال " +
            (originalIndex + 1) +
            " از " +
            currentQuestions.length;
    }


    if (questionMode) {

        if (currentMode === "review") {

            questionMode.textContent =
                "مرور سؤالات غلط";

        } else {

            questionMode.textContent =
                "آزمون";
        }
    }


    if (questionText) {

        questionText.innerHTML =
            question.question || "";
    }


    if (optionsContainer) {

        optionsContainer.innerHTML = "";


        var letters = ["A", "B", "C", "D", "E"];


        (question.options || []).forEach(
            function (option, index) {

                var label =
                    document.createElement("label");

                label.className =
                    "option";

                label.setAttribute(
                    "data-option-index",
                    index
                );


                var radio =
                    document.createElement("input");

                radio.type = "radio";
                radio.name = "answer";
                radio.value = index;


                var square =
                    document.createElement("span");

                square.className =
                    "option-square";


                var letter =
                    document.createElement("span");

                letter.className =
                    "option-letter";

                letter.textContent =
                    letters[index] || "";


                var text =
                    document.createElement("span");

                text.className =
                    "option-text";

                text.innerHTML =
                    option;


                label.appendChild(radio);
                label.appendChild(square);
                label.appendChild(letter);
                label.appendChild(text);

                optionsContainer.appendChild(label);
            }
        );
    }


    resetAnalysis();
}


/* =========================================================
   8. RESTORE SAVED ANSWER
   ========================================================= */

function restoreNormalAnswer(question, answerIndex) {

    var radio =
        document.querySelector(
            'input[name="answer"][value="' +
            answerIndex +
            '"]'
        );


    if (!radio) {
        return;
    }


    radio.checked = true;

    currentAnswered = true;


    if (Number(answerIndex) === Number(question.correct)) {

        markCorrectOption(answerIndex);

        showResult(
            true,
            "عالی",
            "پاسخ شما صحیح است."
        );

    } else {

        markWrongOption(answerIndex);

        markCorrectOption(question.correct);

        showResult(
            false,
            "پاسخ غلط است",
            "پاسخ صحیح مشخص شده است."
        );
    }


    disableOptions();

    showQuestionAnalysis(question);

    updateButtons();
}


/* =========================================================
   9. CHECK ANSWER
   ========================================================= */

function checkAnswer() {

    if (!currentQuestions.length) {
        return;
    }


    var selected =
        document.querySelector(
            'input[name="answer"]:checked'
        );


    if (!selected) {

        showGeneralModal(
            "انتخاب پاسخ",
            "لطفاً ابتدا یکی از گزینه‌ها را انتخاب کنید."
        );

        return;
    }


    if (currentAnswered) {
        return;
    }


    var answerIndex =
        Number(selected.value);


    var question =
        currentQuestions[currentOriginalIndex];


    if (!question) {
        return;
    }


    currentAnswered = true;


    var isCorrect =
        answerIndex === Number(question.correct);


    /*
       Save answer
    */

    var data =
        getTopicData(currentTopic);


    data.answers[
        String(currentOriginalIndex)
    ] = answerIndex;


    /*
       Manage wrong answers
    */

    var wrongIndex =
        data.wrong.indexOf(
            currentOriginalIndex
        );


    if (!isCorrect) {

        if (wrongIndex === -1) {

            data.wrong.push(
                currentOriginalIndex
            );
        }

    } else {

        if (wrongIndex !== -1) {

            data.wrong.splice(
                wrongIndex,
                1
            );
        }
    }


    /*
       If this is the last normal question,
       mark chapter completed.
    */

    if (
        currentMode === "normal" &&
        currentOriginalIndex ===
        currentQuestions.length - 1
    ) {

        data.completed = true;
    }


    /*
       Save current position
    */

    if (currentMode === "normal") {

        data.currentIndex =
            currentQuestionIndex;
    }


    saveTopicData(
        currentTopic,
        data
    );


    /*
       Update score
    */

    currentScore =
        calculateScore();


    /*
       Visual feedback
    */

    if (isCorrect) {

        markCorrectOption(
            answerIndex
        );

        showResult(
            true,
            "عالی",
            "پاسخ شما صحیح است."
        );

    } else {

        markWrongOption(
            answerIndex
        );

        markCorrectOption(
            question.correct
        );

        showResult(
            false,
            "پاسخ غلط است",
            "پاسخ صحیح مشخص شده است."
        );
    }


    disableOptions();

    showQuestionAnalysis(question);

    updateButtons();

    updateExamStatus();
}


/* =========================================================
   10. OPTION VISUALS
   ========================================================= */

function markCorrectOption(index) {

    var option =
        document.querySelector(
            '.option[data-option-index="' +
            index +
            '"]'
        );


    if (!option) {
        return;
    }


    option.classList.add(
        "correct-option"
    );


    var square =
        option.querySelector(
            ".option-square"
        );


    if (square) {
        square.innerHTML = "✓";
    }
}


function markWrongOption(index) {

    var option =
        document.querySelector(
            '.option[data-option-index="' +
            index +
            '"]'
        );


    if (!option) {
        return;
    }


    option.classList.add(
        "wrong-option"
    );


    var square =
        option.querySelector(
            ".option-square"
        );


    if (square) {
        square.innerHTML = "✕";
    }
}


function disableOptions() {

    var radios =
        document.querySelectorAll(
            'input[name="answer"]'
        );


    radios.forEach(
        function (radio) {
            radio.disabled = true;
        }
    );
}


/* =========================================================
   11. RESULT BOX
   ========================================================= */

function showResult(
    correct,
    title,
    message
) {

    var resultBox =
        document.getElementById(
            "resultBox"
        );

    var resultTitle =
        document.getElementById(
            "resultTitle"
        );

    var resultMessage =
        document.getElementById(
            "resultMessage"
        );


    if (!resultBox) {
        return;
    }


    resultBox.style.display =
        "block";


    resultBox.classList.remove(
        "correct-result",
        "wrong-result"
    );


    resultBox.classList.add(
        correct
            ? "correct-result"
            : "wrong-result"
    );


    if (resultTitle) {
        resultTitle.textContent =
            title;
    }


    if (resultMessage) {
        resultMessage.textContent =
            message;
    }
}


/* =========================================================
   12. ANALYSIS
   ========================================================= */

function resetAnalysis() {

    var container =
        document.getElementById(
            "analysisContainer"
        );


    if (container) {
        container.style.display = "none";
    }


    var ids = [
        "diagnosisText",
        "differentialText",
        "correctReasonText",
        "wrongReasonsText",
        "examTipText",
        "examTrapText"
    ];


    ids.forEach(
        function (id) {

            var el =
                document.getElementById(id);

            if (el) {
                el.innerHTML = "";
            }
        }
    );
}


function showQuestionAnalysis(question) {

    var container =
        document.getElementById(
            "analysisContainer"
        );


    if (!container || !question) {
        return;
    }


    container.style.display =
        "block";


    setAnalysisField(
        "diagnosisText",
        question.diagnosis
    );


    setAnalysisField(
        "differentialText",
        question.differentials
    );


    setAnalysisField(
        "correctReasonText",
        question.correctReason ||
        question.explanation
    );


    /*
       Preferred new format:
       optionExplanations: [
          "Explanation A",
          "Explanation B",
          ...
       ]
    */

    var wrongReasons =
        document.getElementById(
            "wrongReasonsText"
        );


    if (wrongReasons) {

        if (
            Array.isArray(
                question.optionExplanations
            )
        ) {

            wrongReasons.innerHTML =
                formatOptionExplanations(
                    question
                );

        } else if (
            Array.isArray(
                question.wrongReasons
            )
        ) {

            wrongReasons.innerHTML =
                formatWrongReasons(
                    question.wrongReasons
                );

        } else {

            wrongReasons.innerHTML =
                "";
        }
    }


    setAnalysisField(
        "examTipText",
        question.examTip
    );


    setAnalysisField(
        "examTrapText",
        question.examTrap ||
        question.trap
    );
}


function setAnalysisField(
    id,
    value
) {

    var el =
        document.getElementById(id);


    if (!el || value === undefined || value === null) {
        return;
    }


    if (Array.isArray(value)) {

        el.innerHTML =
            value.map(
                function (item) {
                    return "<div>" +
                        item +
                        "</div>";
                }
            ).join("");

    } else {

        el.innerHTML =
            value;
    }
}


/* =========================================================
   13. OPTION-BY-OPTION EXPLANATIONS
   ========================================================= */

function formatOptionExplanations(question) {

    var explanations =
        question.optionExplanations || [];

    var options =
        question.options || [];

    var correct =
        Number(question.correct);


    var letters =
        ["A", "B", "C", "D", "E"];


    var html =
        '<div class="option-explanations">';


    options.forEach(
        function (option, index) {

            var isCorrect =
                index === correct;


            var explanation =
                explanations[index] ||
                "";


            html +=
                '<div class="' +
                (
                    isCorrect
                        ? "option-analysis-correct"
                        : "option-analysis-wrong"
                ) +
                '">';


            html +=
                "<strong>" +
                (letters[index] || "") +
                (isCorrect
                    ? " ✓"
                    : " ✕") +
                "</strong> ";


            html +=
                "<span>" +
                option +
                "</span>";


            if (explanation) {

                html +=
                    '<div class="option-analysis-text">' +
                    explanation +
                    "</div>";
            }


            html +=
                "</div>";
        }
    );


    html +=
        "</div>";


    return html;
}


function formatWrongReasons(reasons) {

    if (!Array.isArray(reasons)) {
        return "";
    }


    return reasons.map(
        function (reason) {

            return "<div>" +
                reason +
                "</div>";
        }
    ).join("");
}


/* =========================================================
   14. NEXT QUESTION
   ========================================================= */

function nextQuestion() {

    if (!currentQuestions.length) {
        return;
    }


    if (!currentAnswered) {

        showGeneralModal(
            "پاسخ سؤال",
            "ابتدا پاسخ سؤال را ثبت کنید."
        );

        return;
    }


    if (currentMode === "review") {

        nextReviewQuestion();

        return;
    }


    /*
       Normal mode
    */

    if (
        currentQuestionIndex <
        currentQuestions.length - 1
    ) {

        currentQuestionIndex++;


        var data =
            getTopicData(currentTopic);


        data.currentIndex =
            currentQuestionIndex;


        saveTopicData(
            currentTopic,
            data
        );


        showQuestion();

    } else {

        finishNormalExam();
    }
}


/* =========================================================
   15. FINISH NORMAL EXAM
   ========================================================= */

function finishNormalExam() {

    var data =
        getTopicData(currentTopic);


    data.completed = true;

    data.currentIndex =
        currentQuestions.length - 1;


    saveTopicData(
        currentTopic,
        data
    );


    currentScore =
        calculateScore();


    showFinalScore();
}


/* =========================================================
   16. SCORE
   ========================================================= */

function calculateScore() {

    if (!currentQuestions.length) {
        return 0;
    }


    var data =
        getTopicData(currentTopic);


    var score = 0;


    Object.keys(
        data.answers
    ).forEach(
        function (key) {

            var index =
                Number(key);

            var answer =
                Number(data.answers[key]);


            if (
                index >= 0 &&
                index < currentQuestions.length
            ) {

                var question =
                    currentQuestions[index];


                if (
                    question &&
                    answer ===
                    Number(question.correct)
                ) {

                    score++;
                }
            }
        }
    );


    return score;
}


function showFinalScore() {

    var examPage =
        document.getElementById(
            "examPage"
        );

    var scoreBox =
        document.getElementById(
            "scoreBox"
        );


    if (examPage) {
        examPage.style.display =
            "none";
    }


    if (scoreBox) {
        scoreBox.style.display =
            "block";
    }


    var finalScore =
        document.getElementById(
            "finalScore"
        );

    var finalDetails =
        document.getElementById(
            "finalDetails"
        );

    var finalMessage =
        document.getElementById(
            "finalMessage"
        );


    var total =
        currentQuestions.length;


    var percent =
        total > 0
            ? Math.round(
                currentScore /
                total *
                100
            )
            : 0;


    if (finalScore) {

        finalScore.textContent =
            currentScore +
            " / " +
            total;
    }


    if (finalDetails) {

        finalDetails.textContent =
            "درصد پاسخ‌های صحیح: " +
            percent +
            "%";
    }


    if (finalMessage) {

        if (percent >= 90) {

            finalMessage.textContent =
                "عملکرد عالی 👏";

        } else if (percent >= 75) {

            finalMessage.textContent =
                "عملکرد بسیار خوب 👍";

        } else if (percent >= 60) {

            finalMessage.textContent =
                "عملکرد قابل قبول؛ مرور سؤالات غلط پیشنهاد می‌شود.";

        } else {

            finalMessage.textContent =
                "بهتر است سؤالات غلط را مرور و دوباره تمرین کنید.";
        }
    }


    updateScoreReviewButton();
}


/* =========================================================
   17. WRONG ANSWER REVIEW
   ========================================================= */

function startWrongReview() {

    var data =
        getTopicData(currentTopic);


    var wrong =
        Array.isArray(data.wrong)
            ? data.wrong
            : [];


    wrong =
        wrong.filter(
            function (index) {

                return (
                    index >= 0 &&
                    index < currentQuestions.length
                );
            }
        );


    if (wrong.length === 0) {

        showGeneralModal(
            "مرور سؤالات غلط",
            "در حال حاضر سؤال غلطی برای مرور وجود ندارد."
        );

        return;
    }


    currentReviewIndexes =
        wrong.slice();


    currentReviewPosition = 0;

    currentMode = "review";

    showExamPage();

    showReviewQuestion();
}


function showReviewQuestion() {

    if (
        currentReviewPosition < 0 ||
        currentReviewPosition >=
        currentReviewIndexes.length
    ) {
        showReviewScore();
        return;
    }


    currentOriginalIndex =
        currentReviewIndexes[
            currentReviewPosition
        ];


    var question =
        currentQuestions[
            currentOriginalIndex
        ];


    currentAnswered = false;


    renderQuestion(
        question,
        currentOriginalIndex
    );


    /*
       In review mode, show previous answer
       but allow user to answer again.
    */

    var data =
        getTopicData(currentTopic);


    var saved =
        data.answers[
            String(currentOriginalIndex)
        ];


    if (
        saved !== undefined &&
        saved !== null
    ) {

        var radio =
            document.querySelector(
                'input[name="answer"][value="' +
                Number(saved) +
                '"]'
            );


        if (radio) {
            radio.checked = true;
        }
    }


    updateButtons();
}


function nextReviewQuestion() {

    if (!currentAnswered) {

        showGeneralModal(
            "پاسخ سؤال",
            "ابتدا پاسخ سؤال را ثبت کنید."
        );

        return;
    }


    if (
        currentReviewPosition <
        currentReviewIndexes.length - 1
    ) {

        currentReviewPosition++;

        showReviewQuestion();

    } else {

        showReviewScore();
    }
}


function showReviewScore() {

    currentMode = "normal";

    currentReviewIndexes = [];
    currentReviewPosition = 0;

    showFinalScore();
}


/* =========================================================
   18. PARTIAL SCORE
   ========================================================= */

function showPartialScore() {

    var score =
        calculateScore();

    var total =
        currentQuestions.length;


    var answered =
        Object.keys(
            getTopicData(currentTopic).answers
        ).length;


    var percent =
        total > 0
            ? Math.round(
                score /
                total *
                100
            )
            : 0;


    showGeneralModal(
        "وضعیت فعلی آزمون",
        "<strong>" +
        "پاسخ داده شده: " +
        answered +
        " از " +
        total +
        "</strong><br><br>" +
        "پاسخ صحیح: " +
        score +
        "<br>" +
        "درصد فعلی: " +
        percent +
        "%"
    );
}


/* =========================================================
   19. BUTTON MANAGEMENT
   ========================================================= */

function updateButtons() {

    var checkButton =
        document.getElementById(
            "checkButton"
        );

    var nextButton =
        document.getElementById(
            "nextButton"
        );


    if (checkButton) {

        checkButton.disabled =
            currentAnswered;
    }


    if (nextButton) {

        nextButton.disabled =
            !currentAnswered;
    }


    /*
       Update next button text
    */

    if (nextButton) {

        if (currentMode === "review") {

            if (
                currentReviewPosition >=
                currentReviewIndexes.length - 1
            ) {

                nextButton.textContent =
                    "پایان مرور";

            } else {

                nextButton.textContent =
                    "سؤال بعدی ←";
            }

        } else {

            if (
                currentQuestionIndex >=
                currentQuestions.length - 1
            ) {

                nextButton.textContent =
                    "پایان آزمون";

            } else {

                nextButton.textContent =
                    "سؤال بعدی ←";
            }
        }
    }
}


function updateExamStatus() {

    var progressText =
        document.getElementById(
            "progressText"
        );

    var progressFill =
        document.getElementById(
            "progressFill"
        );


    if (!currentQuestions.length) {
        return;
    }


    var position;


    if (currentMode === "review") {

        position =
            currentReviewPosition + 1;

        if (progressText) {

            progressText.textContent =
                "مرور " +
                position +
                " از " +
                currentReviewIndexes.length;
        }

        if (progressFill) {

            progressFill.style.width =
                (
                    position /
                    currentReviewIndexes.length *
                    100
                ) + "%";
        }

    } else {

        position =
            currentQuestionIndex + 1;

        if (progressText) {

            progressText.textContent =
                position +
                " از " +
                currentQuestions.length;
        }

        if (progressFill) {

            progressFill.style.width =
                (
                    position /
                    currentQuestions.length *
                    100
                ) + "%";
        }
    }
}


/* =========================================================
   20. CHAPTER STATUS
   ========================================================= */

function updateChapterStatuses() {

    Object.keys(TOPICS).forEach(
        function (topic) {

            updateOneChapterStatus(
                topic
            );
        }
    );
}


function updateOneChapterStatus(topic) {

    var config =
        TOPICS[topic];


    if (!config) {
        return;
    }


    var questions =
        getQuestionsForTopic(topic);


    var data =
        getTopicData(topic);


    var statusId =
        "status-" +
        getChapterId(topic);


    var actionsId =
        "actions-" +
        getChapterId(topic);


    var status =
        document.getElementById(
            statusId
        );

    var actions =
        document.getElementById(
            actionsId
        );


    if (status) {

        if (!questions.length) {

            status.textContent =
                "بانک سؤال آماده نیست";

        } else if (data.completed) {

            status.textContent =
                questions.length +
                " سؤال • تکمیل شده ✓";

        } else {

            var answered =
                Object.keys(
                    data.answers
                ).length;


            status.textContent =
                questions.length +
                " سؤال • " +
                answered +
                " پاسخ داده شده";
        }
    }


    if (actions) {

        actions.innerHTML = "";


        if (questions.length) {

            var button =
                document.createElement(
                    "button"
                );


            button.textContent =
                "شروع / ادامه";

            button.onclick =
                function () {
                    startTopic(topic);
                };


            actions.appendChild(
                button
            );
        }
    }
}


function getChapterId(topic) {

    var ids = {

        "Cerebrovascular Diseases":
            "Cerebrovascular",

        "Epilepsy & Seizure":
            "Epilepsy",

        "Movement Disorders":
            "Movement",

        "Viral & Prion Diseases":
            "Viral"
    };


    return ids[topic] ||
        topic
            .replace(/[^a-zA-Z0-9]/g, "");
}


/* =========================================================
   21. RESET CHAPTER
   ========================================================= */

function resetTopic() {

    if (!currentTopic) {
        return;
    }


    var reset =
        confirm(
            "تمام پاسخ‌های این فصل حذف شود؟"
        );


    if (!reset) {
        return;
    }


    localStorage.removeItem(
        storageKey(currentTopic)
    );


    currentQuestionIndex = 0;
    currentScore = 0;
    currentAnswered = false;


    currentMode = "normal";


    showQuestion();

    updateChapterStatuses();
}


/* =========================================================
   22. QUESTION FLASHCARD
   ========================================================= */

function openQuestionFlashcard() {

    if (!currentQuestions.length) {
        return;
    }


    var question =
        currentQuestions[
            currentOriginalIndex
        ];


    if (!question) {
        return;
    }


    var questionText =
        document.getElementById(
            "questionFlashcardQuestion"
        );

    var answerText =
        document.getElementById(
            "questionFlashcardAnswer"
        );


    if (questionText) {

        questionText.innerHTML =
            question.flashcardQuestion ||
            question.question ||
            "";
    }


    if (answerText) {

        answerText.innerHTML =
            question.flashcardAnswer ||
            question.explanation ||
            "";
    }


    if (answerText) {
        answerText.style.display =
            "none";
    }
}


function toggleQuestionFlashcard() {

    var answer =
        document.getElementById(
            "questionFlashcardAnswer"
        );


    if (!answer) {
        return;
    }


    if (
        answer.style.display === "none" ||
        answer.style.display === ""
    ) {

        answer.style.display =
            "block";

    } else {

        answer.style.display =
            "none";
    }
}


/* =========================================================
   23. LARGE FLASHCARD PAGE
   ========================================================= */

function openFlashcards() {

    if (!currentQuestions.length) {
        return;
    }


    flashcardIndex =
        currentOriginalIndex;


    var examPage =
        document.getElementById(
            "examPage"
        );

    var chaptersPage =
        document.getElementById(
            "chaptersPage"
        );

    var scoreBox =
        document.getElementById(
            "scoreBox"
        );

    var flashcardPage =
        document.getElementById(
            "flashcardPage"
        );


    if (examPage) {
        examPage.style.display =
            "none";
    }

    if (chaptersPage) {
        chaptersPage.style.display =
            "none";
    }

    if (scoreBox) {
        scoreBox.style.display =
            "none";
    }

    if (flashcardPage) {
        flashcardPage.style.display =
            "block";
    }


    renderLargeFlashcard();
}


function renderLargeFlashcard() {

    if (!currentQuestions.length) {
        return;
    }


    if (
        flashcardIndex < 0
    ) {
        flashcardIndex = 0;
    }


    if (
        flashcardIndex >=
        currentQuestions.length
    ) {

        flashcardIndex =
            currentQuestions.length - 1;
    }


    var question =
        currentQuestions[
            flashcardIndex
        ];


    if (!question) {
        return;
    }


    var title =
        document.getElementById(
            "flashcardTopicTitle"
        );

    var questionText =
        document.getElementById(
            "flashcardLargeQuestion"
        );

    var answerText =
        document.getElementById(
            "flashcardLargeAnswer"
        );

    var progress =
        document.getElementById(
            "flashcardProgress"
        );


    if (title) {

        title.textContent =
            TOPICS[currentTopic]
                ? TOPICS[currentTopic].persian
                : currentTopic;
    }


    if (questionText) {

        questionText.innerHTML =
            question.flashcardQuestion ||
            question.question ||
            "";
    }


    if (answerText) {

        answerText.innerHTML =
            question.flashcardAnswer ||
            question.explanation ||
            "";

        answerText.style.display =
            "none";
    }


    if (progress) {

        progress.textContent =
            "فلش‌کارت " +
            (flashcardIndex + 1) +
            " از " +
            currentQuestions.length;
    }
}


function toggleLargeFlashcard() {

    var answer =
        document.getElementById(
            "flashcardLargeAnswer"
        );


    if (!answer) {
        return;
    }


    if (
        answer.style.display === "none" ||
        answer.style.display === ""
    ) {

        answer.style.display =
            "block";

    } else {

        answer.style.display =
            "none";
    }
}


function nextFlashcard() {

    if (!currentQuestions.length) {
        return;
    }


    if (
        flashcardIndex <
        currentQuestions.length - 1
    ) {

        flashcardIndex++;

        renderLargeFlashcard();
    }
}


function previousFlashcard() {

    if (!currentQuestions.length) {
        return;
    }


    if (flashcardIndex > 0) {

        flashcardIndex--;

        renderLargeFlashcard();
    }
}


function closeFlashcards() {

    var flashcardPage =
        document.getElementById(
            "flashcardPage"
        );


    if (flashcardPage) {
        flashcardPage.style.display =
            "none";
    }


    showExamPage();

    showQuestion();
}


/* =========================================================
   24. GENERAL MODAL
   ========================================================= */

function showGeneralModal(
    title,
    content
) {

    var modal =
        document.getElementById(
            "generalModal"
        );

    var modalTitle =
        document.getElementById(
            "modalTitle"
        );

    var modalContent =
        document.getElementById(
            "modalContent"
        );


    if (!modal) {

        alert(
            (title || "") +
            "\n\n" +
            stripHTML(content || "")
        );

        return;
    }


    if (modalTitle) {

        modalTitle.textContent =
            title || "";
    }


    if (modalContent) {

        modalContent.innerHTML =
            content || "";
    }


    modal.style.display =
        "flex";
}


function closeGeneralModal() {

    var modal =
        document.getElementById(
            "generalModal"
        );


    if (modal) {

        modal.style.display =
            "none";
    }
}


function stripHTML(text) {

    var div =
        document.createElement(
            "div"
        );

    div.innerHTML =
        text;

    return div.textContent ||
        div.innerText ||
        "";
}


/* =========================================================
   25. REVIEW CURRENT QUESTION
   ========================================================= */

function reviewCurrentQuestion() {

    if (!currentQuestions.length) {
        return;
    }


    var question =
        currentQuestions[
            currentOriginalIndex
        ];


    if (!question) {
        return;
    }


    showQuestionAnalysis(
        question
    );


    var analysis =
        document.getElementById(
            "analysisContainer"
        );


    if (analysis) {

        analysis.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
}


/* =========================================================
   26. SCORE REVIEW BUTTON
   ========================================================= */

function updateScoreReviewButton() {

    var button =
        document.getElementById(
            "scoreReviewButton"
        );


    if (!button) {
        return;
    }


    var data =
        getTopicData(currentTopic);


    var wrong =
        Array.isArray(data.wrong)
            ? data.wrong
            : [];


    button.style.display =
        wrong.length
            ? "inline-block"
            : "none";


    button.onclick =
        function () {
            startWrongReview();
        };
}


/* =========================================================
   27. KEYBOARD CONTROLS
   ========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        /*
           Don't interfere with typing into inputs
           or textareas.
        */

        var tag =
            event.target &&
            event.target.tagName
                ? event.target.tagName.toLowerCase()
                : "";


        if (
            tag === "input" ||
            tag === "textarea" ||
            tag === "select"
        ) {
            return;
        }


        /*
           Enter = check answer
        */

        if (
            event.key === "Enter"
        ) {

            if (!currentAnswered) {

                checkAnswer();

            } else {

                nextQuestion();
            }
        }


        /*
           ArrowRight / ArrowLeft
           Support both directions.
        */

        if (
            event.key === "ArrowRight"
        ) {

            if (currentAnswered) {
                nextQuestion();
            }
        }


        if (
            event.key === "ArrowLeft"
        ) {

            if (
                currentMode === "review" &&
                currentReviewPosition > 0
            ) {

                currentReviewPosition--;

                showReviewQuestion();

            } else if (
                currentMode === "normal" &&
                currentQuestionIndex > 0
            ) {

                currentQuestionIndex--;

                showQuestion();
            }
        }
    }
);


/* =========================================================
   28. CLICK OUTSIDE MODAL
   ========================================================= */

document.addEventListener(
    "click",
    function (event) {

        var modal =
            document.getElementById(
                "generalModal"
            );


        if (
            modal &&
            event.target === modal
        ) {

            closeGeneralModal();
        }
    }
);


/* =========================================================
   29. INITIALIZATION
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        console.log(
            "NeuroPrep initialized."
        );


        console.log(
            "Cerebrovascular bank:",
            Array.isArray(
                window.cerebrovascularQuestions
            )
                ? window.cerebrovascularQuestions.length
                : "NOT FOUND"
        );


        console.log(
            "Viral/Prion bank:",
            Array.isArray(
                window.viralPrionQuestions
            )
                ? window.viralPrionQuestions.length
                : "NOT FOUND"
        );


        updateChapterStatuses();
    }
);


/* =========================================================
   30. DEBUG FUNCTION
   ========================================================= */

function showBankInformation() {

    var result = [];


    Object.keys(TOPICS).forEach(
        function (topic) {

            var bank =
                getQuestionsForTopic(topic);


            result.push(
                topic +
                " : " +
                bank.length +
                " سؤال"
            );
        }
    );


    console.log(
        result.join("\n")
    );


    showGeneralModal(
        "وضعیت بانک‌های سؤال",
        result.join("<br>")
    );
}


/* =========================================================
   END OF APP.JS
   ========================================================= */
