/* =========================================================
   NEUROLOGY EXAM
   Main Application
   ========================================================= */


/* =========================================================
   GLOBAL VARIABLES
   ========================================================= */

var currentTopic = "";
var currentQuestions = [];

var currentQuestionIndex = 0;
var score = 0;

var answered = false;

var flashcardIndex = 0;


/* =========================================================
   QUESTION BANK RESOLVER
   ========================================================= */

function getQuestionBank(topic) {

    if (topic === "Cerebrovascular Diseases") {

        if (typeof cerebrovascularQuestions !== "undefined") {
            return cerebrovascularQuestions;
        }

        if (window.cerebrovascularQuestions) {
            return window.cerebrovascularQuestions;
        }
    }


    if (topic === "Viral & Prion Diseases") {

        if (typeof viralPrionQuestions !== "undefined") {
            return viralPrionQuestions;
        }

        if (window.viralPrionQuestions) {
            return window.viralPrionQuestions;
        }
    }


    /*
      Future chapters can be connected here.

      Example:

      if (topic === "Epilepsy & Seizure") {
          return epilepsyQuestions;
      }
    */


    return [];
}


/* =========================================================
   START TOPIC
   ========================================================= */

function startTopic(topic) {

    currentTopic = topic;

    currentQuestions = getQuestionBank(topic);

    currentQuestionIndex = 0;
    score = 0;
    answered = false;


    document.getElementById("chaptersPage").classList.remove("active");
    document.getElementById("flashcardPage").classList.remove("active");
    document.getElementById("examPage").classList.add("active");


    document.getElementById("examTitle").innerText = topic;


    var scoreBox = document.getElementById("scoreBox");

    if (scoreBox) {
        scoreBox.style.display = "none";
    }


    if (!currentQuestions || currentQuestions.length === 0) {

        document.getElementById("questionText").innerHTML =
            "⚠️ هنوز بانک سوالات این فصل اضافه نشده است.";

        document.getElementById("questionNumber").innerText = "";

        document.getElementById("optionsContainer").innerHTML = "";

        document.getElementById("resultBox").style.display = "none";

        document.getElementById("analysisContainer").style.display = "none";

        document.getElementById("questionFlashcard").style.display = "none";

        document.getElementById("checkButton").style.display = "none";

        document.getElementById("nextButton").style.display = "none";

        return;
    }


    document.getElementById("analysisContainer").style.display = "none";

    document.getElementById("questionFlashcard").style.display = "none";

    document.getElementById("checkButton").style.display = "inline-block";

    document.getElementById("nextButton").style.display = "none";


    showQuestion();
}


/* =========================================================
   SHOW QUESTION
   ========================================================= */

function showQuestion() {

    if (!currentQuestions ||
        currentQuestions.length === 0) {
        return;
    }


    var question =
        currentQuestions[currentQuestionIndex];


    answered = false;


    var total = currentQuestions.length;

    var number =
        currentQuestionIndex + 1;


    document.getElementById("questionNumber").innerText =
        "سوال " + number + " از " + total;


    document.getElementById("progressText").innerText =
        "پیشرفت: " + number + " از " + total;


    var percent =
        ((currentQuestionIndex) / total) * 100;


    document.getElementById("progressFill").style.width =
        percent + "%";


    document.getElementById("questionText").innerHTML =
        formatText(question.question || question.text || "");


    var optionsContainer =
        document.getElementById("optionsContainer");


    optionsContainer.innerHTML = "";


    var options =
        question.options || [];


    for (var i = 0; i < options.length; i++) {

        var option = document.createElement("label");

        option.className = "option";

        option.setAttribute("data-index", i);


        var radio =
            document.createElement("input");

        radio.type = "radio";

        radio.name = "answer";

        radio.value = i;


        var text =
            document.createElement("span");

        text.innerHTML =
            formatText(options[i]);


        option.appendChild(radio);

        option.appendChild(text);

        optionsContainer.appendChild(option);
    }


    hideResult();

    hideAnalysis();

    prepareFlashcard(question);


    document.getElementById("checkButton").style.display =
        "inline-block";


    document.getElementById("nextButton").style.display =
        "none";


    document.getElementById("questionFlashcard").style.display =
        "block";


    updateProgress();
}


/* =========================================================
   CHECK ANSWER
   ========================================================= */

function checkAnswer() {

    if (answered) {
        return;
    }


    var selected =
        document.querySelector(
            'input[name="answer"]:checked'
        );


    if (!selected) {

        showModal(
            "انتخاب پاسخ",
            "لطفاً ابتدا یکی از گزینه‌ها را انتخاب کنید."
        );

        return;
    }


    var question =
        currentQuestions[currentQuestionIndex];


    var selectedIndex =
        parseInt(selected.value, 10);


    var correctIndex =
        getCorrectIndex(question);


    answered = true;


    var optionLabels =
        document.querySelectorAll(".option");


    for (var i = 0; i < optionLabels.length; i++) {

        optionLabels[i].classList.add("disabled");

        var radio =
            optionLabels[i].querySelector("input");

        if (radio) {
            radio.disabled = true;
        }


        if (i === correctIndex) {

            optionLabels[i].classList.add("correct");

            addCorrectMark(optionLabels[i]);
        }


        if (i === selectedIndex &&
            selectedIndex !== correctIndex) {

            optionLabels[i].classList.add("incorrect");

            addIncorrectMark(optionLabels[i]);
        }
    }


    var isCorrect =
        selectedIndex === correctIndex;


    if (isCorrect) {
        score++;
    }


    showResult(isCorrect, question);


    showAnalysis(question, correctIndex);


    document.getElementById("checkButton").style.display =
        "none";


    if (currentQuestionIndex <
        currentQuestions.length - 1) {

        document.getElementById("nextButton").style.display =
            "inline-block";

    } else {

        document.getElementById("nextButton").innerText =
            "مشاهده نتیجه";

        document.getElementById("nextButton").style.display =
            "inline-block";
    }
}


/* =========================================================
   CORRECT ANSWER INDEX
   ========================================================= */

function getCorrectIndex(question) {

    var correct = question.correct;


    if (typeof correct === "number") {
        return correct;
    }


    if (typeof correct === "string") {

        var value =
            correct.trim().toUpperCase();


        /*
          Supports:
          A B C D E
        */

        if (value === "A") return 0;
        if (value === "B") return 1;
        if (value === "C") return 2;
        if (value === "D") return 3;
        if (value === "E") return 4;


        /*
          Also supports:
          "0", "1", "2", ...
        */

        if (!isNaN(parseInt(value, 10))) {
            return parseInt(value, 10);
        }
    }


    return 0;
}


/* =========================================================
   RESULT
   ========================================================= */

function showResult(isCorrect, question) {

    var resultBox =
        document.getElementById("resultBox");

    var title =
        document.getElementById("resultTitle");

    var message =
        document.getElementById("resultMessage");


    resultBox.style.display = "block";


    if (isCorrect) {

        resultBox.className =
            "result-box correct-result";

        title.innerHTML =
            "✓ عالی! پاسخ شما صحیح است.";

        message.innerHTML =
            "پاسخ صحیح را انتخاب کردید.";

    } else {

        resultBox.className =
            "result-box incorrect-result";

        title.innerHTML =
            "✕ پاسخ غلط است.";

        var correctIndex =
            getCorrectIndex(question);

        var correctOption =
            question.options &&
            question.options[correctIndex]
                ? question.options[correctIndex]
                : "";


        message.innerHTML =
            "<strong>پاسخ صحیح:</strong> " +
            formatText(correctOption);
    }
}


/* =========================================================
   HIDE RESULT
   ========================================================= */

function hideResult() {

    var box =
        document.getElementById("resultBox");

    box.style.display = "none";

    box.className = "result-box";

    document.getElementById("resultTitle").innerHTML = "";

    document.getElementById("resultMessage").innerHTML = "";
}


/* =========================================================
   ANALYSIS
   ========================================================= */

function showAnalysis(question, correctIndex) {

    var container =
        document.getElementById("analysisContainer");


    var diagnosis =
        question.diagnosis ||
        question.concept ||
        question.topic ||
        "اطلاعات تکمیلی برای این سؤال در بانک وارد نشده است.";


    var differential =
        question.differential ||
        question.differentials ||
        "در بانک سؤال اطلاعاتی برای تشخیص افتراقی ثبت نشده است.";


    var correctReason =
        question.explanation ||
        question.correctExplanation ||
        "توضیح اختصاصی برای این سؤال هنوز وارد نشده است.";


    var wrongReasons =
        question.wrongReasons ||
        buildWrongReasons(question, correctIndex);


    var examTip =
        question.examTip ||
        question.note ||
        "نکته اختصاصی امتحانی برای این سؤال هنوز وارد نشده است.";


    var examTrap =
        question.examTrap ||
        question.trap ||
        "دام امتحانی اختصاصی برای این سؤال هنوز وارد نشده است.";


    document.getElementById("diagnosisText").innerHTML =
        formatText(diagnosis);


    document.getElementById("differentialText").innerHTML =
        formatText(differential);


    document.getElementById("correctReasonText").innerHTML =
        formatText(correctReason);


    document.getElementById("wrongReasonsText").innerHTML =
        formatText(wrongReasons);


    document.getElementById("examTipText").innerHTML =
        formatText(examTip);


    document.getElementById("examTrapText").innerHTML =
        formatText(examTrap);


    container.style.display = "block";
}


/* =========================================================
   BUILD WRONG REASONS
   ========================================================= */

function buildWrongReasons(question, correctIndex) {

    if (!question.options) {
        return "اطلاعات گزینه‌ها موجود نیست.";
    }


    var result = [];


    for (var i = 0;
         i < question.options.length;
         i++) {

        if (i === correctIndex) {
            continue;
        }


        result.push(
            "<strong>گزینه " +
            getOptionLetter(i) +
            ":</strong> " +
            formatText(question.options[i])
        );
    }


    if (result.length === 0) {
        return "گزینه دیگری برای مقایسه وجود ندارد.";
    }


    return result.join("<br><br>");
}


/* =========================================================
   OPTION LETTER
   ========================================================= */

function getOptionLetter(index) {

    var letters = [
        "A",
        "B",
        "C",
        "D",
        "E"
    ];

    return letters[index] || "";
}


/* =========================================================
   ADD MARKS
   ========================================================= */

function addCorrectMark(element) {

    removeMark(element);

    var mark =
        document.createElement("span");

    mark.className = "answer-mark";

    mark.innerHTML = " ✓";

    mark.style.color = "#277342";

    mark.style.fontWeight = "bold";

    element.appendChild(mark);
}


function addIncorrectMark(element) {

    removeMark(element);

    var mark =
        document.createElement("span");

    mark.className = "answer-mark";

    mark.innerHTML = " ✕";

    mark.style.color = "#b43d3d";

    mark.style.fontWeight = "bold";

    element.appendChild(mark);
}


function removeMark(element) {

    var old =
        element.querySelector(".answer-mark");

    if (old) {
        old.parentNode.removeChild(old);
    }
}


/* =========================================================
   NEXT QUESTION
   ========================================================= */

function nextQuestion() {

    if (!answered) {
        return;
    }


    if (currentQuestionIndex <
        currentQuestions.length - 1) {

        currentQuestionIndex++;

        showQuestion();

    } else {

        finishExam();
    }
}


/* =========================================================
   FINISH EXAM
   ========================================================= */

function finishExam() {

    document.getElementById("questionText").innerHTML =
        "آزمون این فصل به پایان رسید.";

    document.getElementById("questionNumber").innerText = "";

    document.getElementById("optionsContainer").innerHTML = "";

    document.getElementById("resultBox").style.display = "none";

    document.getElementById("analysisContainer").style.display = "none";

    document.getElementById("questionFlashcard").style.display = "none";

    document.getElementById("checkButton").style.display = "none";

    document.getElementById("nextButton").style.display = "none";


    var total =
        currentQuestions.length;


    var percent =
        total > 0
            ? Math.round((score / total) * 100)
            : 0;


    document.getElementById("scoreBox").style.display =
        "block";


    document.getElementById("finalScore").innerText =
        score + " / " + total;


    document.getElementById("finalDetails").innerHTML =
        "درصد پاسخ‌های صحیح: <strong>" +
        percent +
        "%</strong>";


    var message = "";


    if (percent >= 80) {
        message = "عملکرد بسیار خوب 👏";
    } else if (percent >= 60) {
        message = "عملکرد خوب؛ مرور نکات اشتباه توصیه می‌شود.";
    } else {
        message = "بهتر است این فصل را دوباره مرور کنید.";
    }


    document.getElementById("finalMessage").innerText =
        message;


    document.getElementById("progressFill").style.width =
        "100%";
}


/* =========================================================
   END EXAM
   ========================================================= */

function endExam() {

    if (!currentQuestions ||
        currentQuestions.length === 0) {

        backToChapters();

        return;
    }


    finishExam();
}


/* =========================================================
   RESTART
   ========================================================= */

function restartTopic() {

    startTopic(currentTopic);
}


/* =========================================================
   BACK TO CHAPTERS
   ========================================================= */

function backToChapters() {

    document.getElementById("examPage").classList.remove("active");

    document.getElementById("flashcardPage").classList.remove("active");

    document.getElementById("chaptersPage").classList.add("active");
}


/* =========================================================
   FLASHCARD — CURRENT QUESTION
   ========================================================= */

function prepareFlashcard(question) {

    var card =
        document.getElementById("questionFlashcard");


    var q =
        document.getElementById("questionFlashcardQuestion");


    var a =
        document.getElementById("questionFlashcardAnswer");


    q.innerHTML =
        formatText(
            question.flashcardQuestion ||
            question.question ||
            ""
        );


    var answer =
        question.flashcardAnswer ||
        buildFlashcardAnswer(question);


    a.innerHTML =
        formatText(answer);


    a.classList.remove("visible");


    document.getElementById(
        "showQuestionFlashcardButton"
    ).innerText =
        "نمایش پاسخ فلش‌کارت";


    card.style.display = "block";
}


/* =========================================================
   BUILD FLASHCARD ANSWER
   ========================================================= */

function buildFlashcardAnswer(question) {

    var correctIndex =
        getCorrectIndex(question);


    var answer =
        question.options &&
        question.options[correctIndex]
            ? question.options[correctIndex]
            : "";


    var explanation =
        question.explanation ||
        question.correctExplanation ||
        "";


    if (explanation) {

        answer +=
            "<br><br><strong>توضیح:</strong><br>" +
            explanation;
    }


    var note =
        question.note ||
        question.examTip ||
        "";


    if (note) {

        answer +=
            "<br><br><strong>نکته:</strong><br>" +
            note;
    }


    return answer;
}


/* =========================================================
   TOGGLE CURRENT FLASHCARD
   ========================================================= */

function toggleQuestionFlashcard() {

    var answer =
        document.getElementById(
            "questionFlashcardAnswer"
        );


    var button =
        document.getElementById(
            "showQuestionFlashcardButton"
        );


    if (answer.classList.contains("visible")) {

        answer.classList.remove("visible");

        button.innerText =
            "نمایش پاسخ فلش‌کارت";

    } else {

        answer.classList.add("visible");

        button.innerText =
            "پنهان کردن پاسخ";
    }
}


/* =========================================================
   FLASHCARD PAGE
   ========================================================= */

function openFlashcards() {

    if (!currentQuestions ||
        currentQuestions.length === 0) {

        showModal(
            "فلش‌کارت",
            "برای این فصل هنوز فلش‌کارتی وجود ندارد."
        );

        return;
    }


    flashcardIndex =
        currentQuestionIndex;


    document.getElementById("examPage").classList.remove("active");

    document.getElementById("chaptersPage").classList.remove("active");

    document.getElementById("flashcardPage").classList.add("active");


    document.getElementById("flashcardTopicTitle").innerText =
        "فلش‌کارت‌های " + currentTopic;


    showLargeFlashcard();
}


/* =========================================================
   SHOW LARGE FLASHCARD
   ========================================================= */

function showLargeFlashcard() {

    var question =
        currentQuestions[flashcardIndex];


    if (!question) {
        return;
    }


    document.getElementById(
        "flashcardLargeQuestion"
    ).innerHTML =
        formatText(
            question.flashcardQuestion ||
            question.question ||
            ""
        );


    document.getElementById(
        "flashcardLargeAnswer"
    ).innerHTML =
        formatText(
            question.flashcardAnswer ||
            buildFlashcardAnswer(question)
        );


    document.getElementById(
        "flashcardLargeAnswer"
    ).classList.remove("visible");


    document.getElementById(
        "flashcardShowButton"
    ).innerText =
        "نمایش پاسخ";


    document.getElementById(
        "flashcardProgress"
    ).innerText =
        "فلش‌کارت " +
        (flashcardIndex + 1) +
        " از " +
        currentQuestions.length;
}


/* =========================================================
   TOGGLE LARGE FLASHCARD
   ========================================================= */

function toggleLargeFlashcard() {

    var answer =
        document.getElementById(
            "flashcardLargeAnswer"
        );


    var button =
        document.getElementById(
            "flashcardShowButton"
        );


    if (answer.classList.contains("visible")) {

        answer.classList.remove("visible");

        button.innerText =
            "نمایش پاسخ";

    } else {

        answer.classList.add("visible");

        button.innerText =
            "پنهان کردن پاسخ";
    }
}


/* =========================================================
   PREVIOUS FLASHCARD
   ========================================================= */

function previousFlashcard() {

    if (flashcardIndex > 0) {

        flashcardIndex--;

        showLargeFlashcard();
    }
}


/* =========================================================
   NEXT FLASHCARD
   ========================================================= */

function nextFlashcard() {

    if (flashcardIndex <
        currentQuestions.length - 1) {

        flashcardIndex++;

        showLargeFlashcard();

    } else {

        flashcardIndex = 0;

        showLargeFlashcard();
    }
}


/* =========================================================
   CLOSE FLASHCARDS
   ========================================================= */

function closeFlashcards() {

    document.getElementById("flashcardPage").classList.remove("active");

    document.getElementById("examPage").classList.add("active");

    showQuestion();
}


/* =========================================================
   HIDE ANALYSIS
   ========================================================= */

function hideAnalysis() {

    document.getElementById(
        "analysisContainer"
    ).style.display = "none";
}


/* =========================================================
   PROGRESS
   ========================================================= */

function updateProgress() {

    var total =
        currentQuestions.length;


    if (!total) {
        return;
    }


    var percent =
        ((currentQuestionIndex) / total) * 100;


    document.getElementById(
        "progressFill"
    ).style.width =
        percent + "%";
}


/* =========================================================
   MODAL
   ========================================================= */

function showModal(title, content) {

    document.getElementById(
        "modalTitle"
    ).innerText = title;


    document.getElementById(
        "modalContent"
    ).innerHTML = content;


    document.getElementById(
        "generalModal"
    ).style.display = "flex";
}


function closeGeneralModal() {

    document.getElementById(
        "generalModal"
    ).style.display = "none";
}


/* =========================================================
   TEXT FORMATTER
   ========================================================= */

function formatText(text) {

    if (text === null ||
        text === undefined) {

        return "";
    }


    return String(text)
        .replace(/\n/g, "<br>");
}


/* =========================================================
   INITIALIZATION
   ========================================================= */

window.onload = function() {

    /*
      We deliberately do not start a question here.
      The user must first select a chapter.
    */

    document.getElementById("chaptersPage")
        .classList.add("active");

};
