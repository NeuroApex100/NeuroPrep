/* =========================================================
   NEUROLOGY LEARNING SYSTEM
   app.js
   ========================================================= */

var currentChapter = null;
var currentQuestions = [];
var currentIndex = 0;
var answered = false;
var currentScore = 0;

var STORAGE_KEY = "neurologyLearningSystem_v1";


/* =========================================================
   CHAPTERS
   ========================================================= */

var chapters = [

{
    id:"cerebrovascular",
    title:"Cerebrovascular Diseases",
    fa:"بیماری‌های عروق مغزی",
    icon:"🧠",
    bank:"cerebrovascularQuestions"
},

{
    id:"epilepsy",
    title:"Epilepsy & Seizure",
    fa:"صرع و تشنج",
    icon:"⚡",
    bank:"epilepsyQuestions"
},

{
    id:"movement",
    title:"Movement Disorders",
    fa:"اختلالات حرکتی",
    icon:"🕺",
    bank:"movementQuestions"
},

{
    id:"ms",
    title:"MS & Demyelinating Diseases",
    fa:"ام‌اس و بیماری‌های دمیلینه‌کننده",
    icon:"🧬",
    bank:"msQuestions"
},

{
    id:"neuromuscular",
    title:"Neuromuscular Diseases",
    fa:"بیماری‌های نوروموسکولار",
    icon:"💪",
    bank:"neuromuscularQuestions"
},

{
    id:"headache",
    title:"Headache & Facial Pain",
    fa:"سردرد و درد صورت",
    icon:"🤕",
    bank:"headacheQuestions"
},

{
    id:"dementia",
    title:"Dementia & Cognitive Disorders",
    fa:"دمانس و اختلالات شناختی",
    icon:"🧩",
    bank:"dementiaQuestions"
},

{
    id:"viral-prion",
    title:"Viral & Prion Diseases",
    fa:"بیماری‌های ویروسی و پریونی",
    icon:"🦠",
    bank:"viralPrionQuestions"
},

{
    id:"neuroimmunology",
    title:"Neuroimmunology",
    fa:"نورواِمیونولوژی",
    icon:"🛡️",
    bank:"neuroimmunologyQuestions"
},

{
    id:"neuro-oncology",
    title:"Neuro-oncology",
    fa:"نوروانکولوژی",
    icon:"🎗️",
    bank:"neuroOncologyQuestions"
},

{
    id:"genetics",
    title:"Neurogenetics & Metabolic Disorders",
    fa:"نوروجنتیک و بیماری‌های متابولیک",
    icon:"🧬",
    bank:"neurogeneticsQuestions"
},

{
    id:"spinal",
    title:"Spinal Cord Disorders",
    fa:"اختلالات نخاع",
    icon:"🦴",
    bank:"spinalCordQuestions"
},

{
    id:"neuro-ophthalmology",
    title:"Neuro-ophthalmology",
    fa:"نوروافتالمولوژی",
    icon:"👁️",
    bank:"neuroOphthalmologyQuestions"
},

{
    id:"neuro-otology",
    title:"Neuro-otology",
    fa:"نورواتولوژی",
    icon:"👂",
    bank:"neuroOtologyQuestions"
},

{
    id:"pediatric",
    title:"Pediatric Neurology",
    fa:"نورولوژی کودکان",
    icon:"👶",
    bank:"pediatricNeurologyQuestions"
},

{
    id:"critical",
    title:"Neurocritical Care",
    fa:"نوروانتنسيو",
    icon:"🚑",
    bank:"neurocriticalQuestions"
},

{
    id:"trauma",
    title:"Neurotrauma",
    fa:"نوروتروما",
    icon:"🚨",
    bank:"neurotraumaQuestions"
},

{
    id:"sleep",
    title:"Autonomic & Sleep Disorders",
    fa:"اختلالات اتونومیک و خواب",
    icon:"😴",
    bank:"autonomicSleepQuestions"
},

{
    id:"diagnostic",
    title:"Neurodiagnostic Methods",
    fa:"روش‌های تشخیصی نورولوژی",
    icon:"🔬",
    bank:"neurodiagnosticQuestions"
},

{
    id:"pharmacology",
    title:"Neuropharmacology & Treatment",
    fa:"نوروفارماکولوژی و اصول درمان",
    icon:"💊",
    bank:"neuropharmacologyQuestions"
}

];


/* =========================================================
   BASIC HELPERS
   ========================================================= */

function $(id){
    return document.getElementById(id);
}


function escapeHtml(text){

    return String(text)
        .replace(/&/g,"&amp;")
        .replace(/</g,"&lt;")
        .replace(/>/g,"&gt;")
        .replace(/"/g,"&quot;")
        .replace(/'/g,"&#039;");

}


/* =========================================================
   STORAGE
   ========================================================= */

function loadData(){

    var raw = localStorage.getItem(STORAGE_KEY);

    if(!raw){

        return {
            questions:{},
            flashcards:{},
            activity:[]
        };

    }

    try{

        return JSON.parse(raw);

    }

    catch(e){

        return {
            questions:{},
            flashcards:{},
            activity:[]
        };

    }

}


function saveData(data){

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(data)
    );

}


/* =========================================================
   GET QUESTION BANK
   ========================================================= */

function getBank(chapter){

    var bank = window[chapter.bank];

    if(
        Object.prototype.toString.call(bank)
        === "[object Array]"
    ){

        return bank;

    }

    return [];

}


/* =========================================================
   PAGE NAVIGATION
   ========================================================= */

function showPage(id){

    var pages =
        document.querySelectorAll(".page");

    for(
        var i=0;
        i<pages.length;
        i++
    ){

        pages[i].classList.remove("active");

    }

    if($(id)){

        $(id).classList.add("active");

    }

    window.scrollTo(0,0);

    updateDashboard();

}


/* =========================================================
   CHAPTER LIST
   ========================================================= */

function renderChapters(){

    var box = $("chaptersGrid");

    if(!box) return;

    box.innerHTML = "";

    for(
        var i=0;
        i<chapters.length;
        i++
    ){

        var c = chapters[i];

        var bank = getBank(c);

        var card =
            document.createElement("div");

        card.className = "chapter";

        card.onclick =
            (function(chapter){

                return function(){

                    openChapter(
                        chapter.id
                    );

                };

            })(c);


        var count =
            bank.length
            ? bank.length+" سؤال"
            : "بانک سؤال هنوز اضافه نشده";


        card.innerHTML =

            '<div class="icon">'+
            c.icon+
            '</div>'+

            '<h3>'+
            escapeHtml(c.fa)+
            '</h3>'+

            '<small>'+
            escapeHtml(c.title)+
            '</small>'+

            '<div class="count">'+
            count+
            '</div>';


        box.appendChild(card);

    }

}


/* =========================================================
   OPEN CHAPTER
   ========================================================= */

function openChapter(id){

    for(
        var i=0;
        i<chapters.length;
        i++
    ){

        if(chapters[i].id === id){

            currentChapter =
                chapters[i];

            currentQuestions =
                getBank(
                    currentChapter
                ).slice(0);

            currentIndex = 0;

            currentScore = 0;

            answered = false;


            if(!currentQuestions.length){

                showModal(

                    currentChapter.fa,

                    '<p>'+
                    'برای این فصل هنوز بانک سؤال در برنامه تعریف نشده است.'+
                    '</p>'+

                    '<p>'+
                    'ساختار برنامه آماده است و بعداً می‌توانیم بانک این فصل را اضافه کنیم.'+
                    '</p>'

                );

                return;

            }


            $("examTitle").textContent =
                currentChapter.icon+
                " "+
                currentChapter.fa;


            $("questionSource").textContent =
                currentChapter.title;


            showPage("examPage");

            renderQuestion();

            return;

        }

    }

}


/* =========================================================
   RENDER QUESTION
   ========================================================= */

function renderQuestion(){

    if(!currentQuestions.length)
        return;


    var q =
        currentQuestions[currentIndex];


    answered = false;


    $("questionNumber").textContent =
        "سؤال "+(currentIndex+1);


    $("progressText").textContent =
        "سؤال "+
        (currentIndex+1)+
        " از "+
        currentQuestions.length;


    $("progressFill").style.width =

        (
            (
                (currentIndex+1)
                /
                currentQuestions.length
            )
            *
            100
        )+"%";


    $("questionText").textContent =

        q.question
        ||
        q.questionText
        ||
        "متن سؤال موجود نیست";


    $("optionsContainer").innerHTML = "";


    var options =
        q.options || [];


    for(
        var i=0;
        i<options.length;
        i++
    ){

        var label =
            document.createElement("label");


        label.className =
            "option";


        label.innerHTML =

            '<input type="radio" '+
            'name="answer" '+
            'value="'+i+'">'+

            '<span>'+

            '<b>'+
            String.fromCharCode(65+i)+
            ".</b> "+

            escapeHtml(
                String(options[i])
            )+

            '</span>';


        $("optionsContainer")
            .appendChild(label);

    }


    $("resultBox").className =
        "result";


    $("resultBox").style.display =
        "none";


    $("analysisContainer")
        .style.display =
        "none";


    $("questionFlashcards")
        .innerHTML =
        "";


    $("checkButton")
        .style.display =
        "inline-block";


    $("nextButton")
        .style.display =
        "none";

}


/* =========================================================
   NORMALIZE CORRECT ANSWER
   ========================================================= */

function normalizeCorrect(value){

    if(typeof value === "number"){

        return value;

    }


    if(typeof value === "string"){

        var s =
            value.trim()
                .toUpperCase();


        if(
            /^[A-E]$/.test(s)
        ){

            return (
                s.charCodeAt(0)-65
            );

        }


        if(
            /^\d+$/.test(s)
        ){

            return parseInt(
                s,
                10
            );

        }

    }


    return -1;

}


/* =========================================================
   CHECK ANSWER
   ========================================================= */

function checkAnswer(){

    if(answered)
        return;


    var selected =
        document.querySelector(
            'input[name="answer"]:checked'
        );


    if(!selected){

        showModal(
            "انتخاب پاسخ",
            "<p>لطفاً ابتدا یکی از گزینه‌ها را انتخاب کنید.</p>"
        );

        return;

    }


    var q =
        currentQuestions[currentIndex];


    var chosen =
        parseInt(
            selected.value,
            10
        );


    var correct =
        normalizeCorrect(
            q.correct
        );


    var isCorrect =
        chosen === correct;


    answered = true;


    if(isCorrect){

        currentScore++;

    }


    var labels =
        document.querySelectorAll(
            ".option"
        );


    for(
        var i=0;
        i<labels.length;
        i++
    ){

        var inp =
            labels[i]
                .querySelector("input");


        inp.disabled = true;


        labels[i]
            .classList
            .add("disabled");


        if(i === correct){

            labels[i]
                .classList
                .add("correct");

        }


        if(
            i === chosen
            &&
            !isCorrect
        ){

            labels[i]
                .classList
                .add("wrong");

        }

    }


    $("resultBox").style.display =
        "block";


    $("resultBox").className =

        isCorrect
        ? "result correct"
        : "result wrong";


    $("resultTitle").textContent =

        isCorrect
        ? "🟢 عالی — پاسخ صحیح است"
        : "🔴 پاسخ غلط است";


    $("resultMessage").textContent =

        isCorrect

        ? "اکنون تحلیل آموزشی سؤال را مرور کنید."

        : "پاسخ صحیح مشخص شده است. تحلیل سؤال را با دقت مطالعه کنید.";


    saveQuestionResult(
        q,
        isCorrect,
        chosen,
        correct
    );


    renderAnalysis(
        q,
        correct
    );


    $("checkButton")
        .style.display =
        "none";


    $("nextButton")
        .style.display =
        "inline-block";


    updateDashboard();

}


/* =========================================================
   SAVE QUESTION RESULT
   ========================================================= */

function saveQuestionResult(
    q,
    isCorrect,
    chosen,
    correct
){

    var data =
        loadData();


    var id =
        questionId(
            currentChapter,
            q,
            currentIndex
        );


    if(!data.questions[id]){

        data.questions[id] = {

            chapter:
                currentChapter.id,

            attempts:0,

            correct:0,

            wrong:0,

            lastAnswer:null,

            lastCorrect:null,

            nextReview:null

        };

    }


    var item =
        data.questions[id];


    item.attempts++;


    item.lastAnswer =
        chosen;


    item.lastCorrect =
        isCorrect;


    if(isCorrect){

        item.correct++;

    }

    else{

        item.wrong++;

    }


    /*
       Spaced repetition اولیه

       Correct:
       1 → 2 → 4 → 8 → 16 → 30 روز

       Wrong:
       1 روز
    */

    var days;


    if(isCorrect){

        days =
            Math.min(
                30,
                Math.pow(
                    2,
                    Math.min(
                        item.correct,
                        5
                    )
                )
            );

    }

    else{

        days = 1;

    }


    var d =
        new Date();


    d.setDate(
        d.getDate()+days
    );


    item.nextReview =
        d.toISOString();


    data.activity.unshift({

        id:id,

        chapter:
            currentChapter.fa,

        text:
            isCorrect
            ? "پاسخ صحیح"
            : "پاسخ غلط",

        date:
            new Date()
                .toISOString()

    });


    if(
        data.activity.length > 30
    ){

        data.activity.length = 30;

    }


    saveData(data);

}


/* =========================================================
   RENDER EDUCATIONAL ANALYSIS
   ========================================================= */

function renderAnalysis(
    q,
    correct
){

    $("analysisContainer")
        .style.display =
        "block";


    var diagnosis =
        q.diagnosis
        ||
        q.mainDiagnosis
        ||
        q.diagnosisText;


    var reasoning =
        q.clinicalReasoning
        ||
        q.reasoning;


    var differential =
        q.differentialDiagnosis
        ||
        q.differential
        ||
        [];


    var whyCorrect =
        q.whyCorrect
        ||
        q.explanation
        ||
        q.correctExplanation;


    var highYield =
        q.highYield
        ||
        q.note
        ||
        q.examTip
        ||
        q.highYieldPoint;


    var trap =
        q.examTrap
        ||
        q.trap;


    var related =
        q.relatedTopics
        ||
        q.related
        ||
        [];


    var reference =
        q.reference
        ||
        q.references
        ||
        "";


    $("diagnosisText").textContent =

        diagnosis
        ||
        "برای این سؤال هنوز تشخیص آموزشی جداگانه در بانک ثبت نشده است.";


    $("clinicalReasoningText")
        .textContent =

        reasoning
        ||
        "استدلال بالینی اختصاصی هنوز در بانک سؤال وارد نشده است.";


    $("differentialText")
        .innerHTML =

        formatList(
            differential
        );


    $("correctReasonText")
        .textContent =

        whyCorrect
        ||
        "توضیح پاسخ صحیح در بانک سؤال ثبت نشده است.";


    $("examTipText")
        .textContent =

        highYield
        ||
        "نکته High-Yield برای این سؤال ثبت نشده است.";


    $("examTrapText")
        .textContent =

        trap
        ||
        "دام امتحانی برای این سؤال ثبت نشده است.";


    $("relatedTopicsText")
        .innerHTML =

        formatList(
            related
        );


    $("referenceText")
        .textContent =

        reference
        ||
        "منبع اختصاصی در بانک سؤال ثبت نشده است.";


    renderWrongReasons(
        q,
        correct
    );


    renderQuestionFlashcards(q);

}


/* =========================================================
   WRONG OPTIONS
   ========================================================= */

function renderWrongReasons(
    q,
    correct
){

    var box =
        $("wrongReasonsText");


    box.innerHTML = "";


    var options =
        q.options || [];


    var wr =
        q.whyWrong
        ||
        q.wrongReasons
        ||
        {};


    for(
        var i=0;
        i<options.length;
        i++
    ){

        if(i === correct)
            continue;


        var letter =
            String.fromCharCode(
                65+i
            );


        var text =
            wr[letter];


        if(
            text === undefined
            &&
            wr[i] !== undefined
        ){

            text =
                wr[i];

        }


        if(text === undefined){

            if(i === 0)
                text = q.explanationA;

            if(i === 1)
                text = q.explanationB;

            if(i === 2)
                text = q.explanationC;

            if(i === 3)
                text = q.explanationD;

            if(i === 4)
                text = q.explanationE;

        }


        var div =
            document.createElement("div");


        div.innerHTML =

            "<b>"+
            letter+
            ".</b> "+

            escapeHtml(

                text
                ||
                "علت رد این گزینه هنوز در بانک سؤال ثبت نشده است."

            );


        box.appendChild(div);

    }

}


/* =========================================================
   QUESTION FLASHCARDS
   ========================================================= */

function renderQuestionFlashcards(q){

    var box =
        $("questionFlashcards");


    box.innerHTML = "";


    var cards =
        q.flashcards
        ||
        q.learningFlashcards
        ||
        [];


    /*
       اگر فلش‌کارت اختصاصی در بانک وجود داشته باشد
       همان‌ها نمایش داده می‌شوند.
    */

    if(
        Object.prototype.toString.call(cards)
        === "[object Array]"
        &&
        cards.length
    ){

        for(
            var i=0;
            i<cards.length;
            i++
        ){

            addFlashcardCard(
                box,
                cards[i],
                currentChapter,
                q,
                i
            );

        }

        return;

    }


    /*
       اگر هنوز فلش‌کارت اختصاصی ساخته نشده باشد،
       از اطلاعات آموزشی موجود کارت مفهومی می‌سازیم.

       نکته:
       صورت سؤال اصلی هرگز به‌عنوان فلش‌کارت
       استفاده نمی‌شود.
    */

    var generated = [];


    if(
        q.diagnosis
        ||
        q.mainDiagnosis
    ){

        generated.push({

            question:
                "تشخیص اصلی این سؤال چیست؟",

            answer:
                q.diagnosis
                ||
                q.mainDiagnosis

        });

    }


    if(
        q.highYield
        ||
        q.note
    ){

        generated.push({

            question:
                "مهم‌ترین نکته High-Yield این سؤال چیست؟",

            answer:
                q.highYield
                ||
                q.note

        });

    }


    if(
        q.examTrap
        ||
        q.trap
    ){

        generated.push({

            question:
                "دام امتحانی این مبحث چیست؟",

            answer:
                q.examTrap
                ||
                q.trap

        });

    }


    for(
        var j=0;
        j<generated.length;
        j++
    ){

        addFlashcardCard(

            box,

            generated[j],

            currentChapter,

            q,

            j

        );

    }


    if(!generated.length){

        box.innerHTML =

            '<div class="empty">'+
            'برای این سؤال هنوز فلش‌کارت مفهومی جداگانه در بانک ثبت نشده است.'+
            '</div>';

    }

}


/* =========================================================
   ADD FLASHCARD
   ========================================================= */

function addFlashcardCard(
    container,
    card,
    chapter,
    q,
    index
){

    var div =
        document.createElement("div");


    div.className =
        "flashcard";


    var question =
        card.question
        ||
        card.front
        ||
        card.q
        ||
        "";


    var answer =
        card.answer
        ||
        card.back
        ||
        card.a
        ||
        "";


    var key =
        card.keyPoint
        ||
        card.key
        ||
        "";


    div.innerHTML =

        '<div class="flash-q">'+
        '🧠 '+
        escapeHtml(question)+
        '</div>'+

        '<div class="flash-a">'+

        '<div>'+
        escapeHtml(answer)+
        '</div>'+

        (
            key

            ?

            '<p><b>⭐ نکته:</b> '+
            escapeHtml(key)+
            '</p>'

            :

            ''

        )+

        '</div>'+

        '<div class="actions">'+

        '<button class="secondary" '+
        'onclick="toggleFlash(this)">'+
        'نمایش پاسخ'+
        '</button>'+

        '</div>';


    container.appendChild(div);


    /*
       ذخیره در localStorage
    */

    var data =
        loadData();


    var id =
        questionId(
            chapter,
            q,
            index
        )+
        "_fc_"+index;


    if(!data.flashcards[id]){

        data.flashcards[id] = {

            chapter:
                chapter.id,

            question:
                question,

            answer:
                answer,

            keyPoint:
                key,

            created:
                new Date()
                    .toISOString()

        };


        saveData(data);

    }

}


/* =========================================================
   TOGGLE FLASHCARD
   ========================================================= */

function toggleFlash(btn){

    var card =
        btn.parentNode.parentNode;


    var answer =
        card.querySelector(
            ".flash-a"
        );


    if(
        answer.classList.contains("show")
    ){

        answer.classList.remove("show");

        btn.textContent =
            "نمایش پاسخ";

    }

    else{

        answer.classList.add("show");

        btn.textContent =
            "مخفی کردن پاسخ";

    }

}


/* =========================================================
   NEXT QUESTION
   ========================================================= */

function nextQuestion(){

    if(
        currentIndex
        <
        currentQuestions.length-1
    ){

        currentIndex++;

        renderQuestion();

        window.scrollTo(
            0,
            0
        );

    }

    else{

        finishExam();

    }

}


/* =========================================================
   FINISH EXAM
   ========================================================= */

function finishExam(){

    var percent =

        currentQuestions.length

        ?

        Math.round(

            (
                currentScore
                /
                currentQuestions.length
            )
            *
            100

        )

        :

        0;


    $("finalScore")
        .textContent =
        percent+"%";


    $("finalDetails")
        .textContent =

        currentScore+
        " پاسخ صحیح از "+
        currentQuestions.length+
        " سؤال";


    if(percent >= 85){

        $("finalMessage")
            .textContent =
            "عملکرد عالی؛ اکنون سؤالات غلط و فلش‌کارت‌ها را مرور کنید.";

    }

    else if(percent >= 70){

        $("finalMessage")
            .textContent =
            "خوب است؛ برای تثبیت، سؤالات غلط را مرور کنید.";

    }

    else{

        $("finalMessage")
            .textContent =
            "این فصل نیاز به مرور بیشتر دارد. ابتدا تحلیل سؤالات غلط را مطالعه کنید.";

    }


    showPage(
        "finalPage"
    );

}


/* =========================================================
   WRONG QUESTIONS
   ========================================================= */

function renderWrongQuestions(){

    var box =
        $("wrongQuestionsList");


    box.innerHTML = "";


    var data =
        loadData();


    var found = [];


    for(
        var i=0;
        i<chapters.length;
        i++
    ){

        var bank =
            getBank(
                chapters[i]
            );


        for(
            var j=0;
            j<bank.length;
            j++
        ){

            var id =
                questionId(
                    chapters[i],
                    bank[j],
                    j
                );


            if(
                data.questions[id]
                &&
                data.questions[id].wrong > 0
                &&
                data.questions[id].lastCorrect === false
            ){

                found.push({

                    chapter:
                        chapters[i],

                    question:
                        bank[j],

                    index:j,

                    stats:
                        data.questions[id]

                });

            }

        }

    }


    if(!found.length){

        box.innerHTML =

            '<div class="empty">'+
            'هنوز سؤال غلطی ثبت نشده است. عالی!'+
            '</div>';

        return;

    }


    for(
        var k=0;
        k<found.length;
        k++
    ){

        var item =
            found[k];


        var card =
            document.createElement("div");


        card.className =
            "panel";


        card.innerHTML =

            '<h3>'+
            escapeHtml(
                item.chapter.fa
            )+
            '</h3>'+

            '<p>'+
            escapeHtml(
                item.question.question
                ||
                item.question.questionText
                ||
                ""
            )+
            '</p>'+

            '<small>'+
            'تعداد تلاش: '+
            item.stats.attempts+
            ' | غلط: '+
            item.stats.wrong+
            '</small>'+

            '<div class="actions">'+

            '<button class="primary">'+
            'مرور سؤال'+
            '</button>'+

            '</div>';


        card
            .querySelector("button")
            .onclick =

            (function(x){

                return function(){

                    currentChapter =
                        x.chapter;


                    currentQuestions =
                        getBank(
                            x.chapter
                        ).slice(0);


                    currentIndex =
                        x.index;


                    currentScore =
                        0;


                    showPage(
                        "examPage"
                    );


                    renderQuestion();

                };

            })(item);


        box.appendChild(card);

    }

}


/* =========================================================
   ALL FLASHCARDS
   ========================================================= */

function renderFlashcards(){

    var box =
        $("allFlashcards");


    box.innerHTML = "";


    var data =
        loadData();


    var keys =
        Object.keys(
            data.flashcards
        );


    if(!keys.length){

        box.innerHTML =

            '<div class="empty">'+
            'هنوز فلش‌کارتی ساخته نشده است.'+
            '</div>';

        return;

    }


    for(
        var i=0;
        i<keys.length;
        i++
    ){

        var c =
            data.flashcards[
                keys[i]
            ];


        var div =
            document.createElement("div");


        div.className =
            "flashcard";


        div.innerHTML =

            '<div class="flash-q">'+
            '🧠 '+
            escapeHtml(
                c.question
            )+
            '</div>'+

            '<div class="flash-a">'+

            '<div>'+
            escapeHtml(
                c.answer
            )+
            '</div>'+

            (
                c.keyPoint

                ?

                '<p><b>⭐ نکته:</b> '+
                escapeHtml(
                    c.keyPoint
                )+
                '</p>'

                :

                ''

            )+

            '</div>'+

            '<div class="actions">'+

            '<button class="secondary" '+
            'onclick="toggleFlash(this)">'+
            'نمایش پاسخ'+
            '</button>'+

            '</div>';


        box.appendChild(div);

    }

}


/* =========================================================
   DASHBOARD
   ========================================================= */

function updateDashboard(){

    var data =
        loadData();


    var answered = 0;

    var correct = 0;

    var wrong = 0;


    var keys =
        Object.keys(
            data.questions
        );


    for(
        var i=0;
        i<keys.length;
        i++
    ){

        var q =
            data.questions[
                keys[i]
            ];


        answered +=
            q.attempts || 0;


        correct +=
            q.correct || 0;


        wrong +=
            q.wrong || 0;

    }


    $("statAnswered")
        .textContent =
        answered;


    $("statCorrect")
        .textContent =
        correct;


    $("statWrong")
        .textContent =
        wrong;


    var mastery =

        answered

        ?

        Math.round(
            (
                correct
                /
                answered
            )
            *
            100
        )

        :

        0;


    $("statMastery")
        .textContent =
        mastery+"%";


    $("overallProgress")
        .style.width =
        mastery+"%";


    $("overallText")
        .textContent =

        answered

        ?

        "از "+
        answered+
        " تلاش ثبت‌شده، "+
        correct+
        " پاسخ صحیح بوده است."

        :

        "هنوز فعالیتی ثبت نشده است.";


    var act =
        $("recentActivity");


    if(
        data.activity
        &&
        data.activity.length
    ){

        var html = "";

        var n =
            Math.min(
                5,
                data.activity.length
            );


        for(
            var j=0;
            j<n;
            j++
        ){

            html +=

                "<div>• "+
                escapeHtml(
                    data.activity[j]
                        .chapter
                )+
                " — "+
                escapeHtml(
                    data.activity[j]
                        .text
                )+
                "</div>";

        }


        act.innerHTML =
            html;

    }

    else{

        act.innerHTML =
            "برای شروع، یک فصل را انتخاب کنید.";

    }

}


/* =========================================================
   QUESTION ID
   ========================================================= */

function questionId(
    chapter,
    q,
    index
){

    if(
        q
        &&
        q.id
    ){

        return (
            chapter.id+
            "_"+
            String(q.id)
        );

    }


    return (
        chapter.id+
        "_q_"+
        index
    );

}


/* =========================================================
   FORMAT LIST
   ========================================================= */

function formatList(value){

    if(
        Object.prototype.toString.call(value)
        === "[object Array]"
    ){

        if(!value.length){

            return "موردی ثبت نشده است.";

        }


        var out = "";


        for(
            var i=0;
            i<value.length;
            i++
        ){

            out +=

                "• "+
                escapeHtml(
                    String(value[i])
                )+
                "<br>";

        }


        return out;

    }


    return value

        ?

        escapeHtml(
            String(value)
        )

        :

        "موردی ثبت نشده است.";

}


/* =========================================================
   MODAL
   ========================================================= */

function showModal(
    title,
    body
){

    $("modalTitle")
        .textContent =
        title;


    $("modalBody")
        .innerHTML =
        body;


    $("modal")
        .classList
        .add("show");

}


function closeModal(){

    $("modal")
        .classList
        .remove("show");

}


/* =========================================================
   START
   ========================================================= */

window.onload = function(){

    renderChapters();

    updateDashboard();

};
