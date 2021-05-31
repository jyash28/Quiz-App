const quizDB = [
    {
        question: "Q1 : What is the best way to apply bold styling to text?",
        a: "<strong>",
        b: "Use CSS.",
        c: "<bold>",
        d: "<b>",
        ans:"ans1"
    },
    {
        question: " Q2: In HTML5, which tag or tags embed a webpage inside of a webpage?",
        a: "<iframe>, <frame>, and <frameset>",
        b: "<frame>",
        c: "<iframe>",
        d: "<frame> and <frameset>",
        ans:"ans4"
    },
    {
        question: "Q3:  When is the <link> tag used?",
        a:"when linking style sheets, JavaScript, and icons for mobile apps",
        b: "when linking style sheets, favicons, and preloading assets",
        c:"when linking style sheets and favicons",
        d: "when linking style sheets, external URLs, and favicons",
        ans: "ans3"
    },
    {
        question: " Q4: With which tags is the <source> element associated?",
        a: "<svg>, <picture>, <audio>, and <video>",
        b: "<picture>, <audio>, and <video>",
        c: "It is interchangeable with the src attribute, so any element which uses src may use <source>",
        d: "<audio> and <video>",
        ans:"ans2"
    }

];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit =  document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;

const loadQuestion = () => {
    const questionList = quizDB[questionCount];

    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}

loadQuestion();

const getcheckAnswer = () =>{
    let answer;
    
    answers.forEach((curAnsElem) =>{
     if(curAnsElem.checked){
         answer = curAnsElem.id;
     }
      
    });
    return answer;
}

const deselectAll = () =>{
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}

submit.addEventListener('click',() =>{

    const checkedAnswer = getcheckAnswer();
    console.log(checkedAnswer);

    if (checkedAnswer === quizDB[questionCount].ans){
        score++;
    }
    questionCount++;

    deselectAll();

    if(questionCount < quizDB.length){
        loadQuestion();
    }else{
        showScore.innerHTML=`
            <h3> You Scored ${score}/${quizDB.length}✌️</h3>
            <button class="btn" onclick="location.reload()">Play Again</button>
        `;
        showScore.classList.remove('scoreArea')
    }
});