const questions = [
  {
    question: "Which is the largest animal in the world?",
    answers: [
      { text: "Shark", correct: false },
      { text: "Blue Whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Giraffe", correct: false }
    ]
  },
  {
    question: "What is the capital of India?",
    answers: [
      { text: "Mumbai", correct: false },
      { text: "New Delhi", correct: true },
      { text: "Kolkata", correct: false },
      { text: "Chennai", correct: false }
    ]
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      { text: "Earth", correct: false },
      { text: "Mars", correct: true },
      { text: "Jupiter", correct: false },
      { text: "Venus", correct: false }
    ]
  },
  {
    question: "Who is known as the Father of the Nation in India?",
    answers: [
      { text: "Jawaharlal Nehru", correct: false },
      { text: "Mahatma Gandhi", correct: true },
      { text: "Subhas Chandra Bose", correct: false },
      { text: "Bhagat Singh", correct: false }
    ]
  },
  {
    question: "Which is the smallest continent in the world?",
    answers: [
      { text: "Europe", correct: false },
      { text: "Australia", correct: true },
      { text: "Antarctica", correct: false },
      { text: "South America", correct: false }
    ]
  },
  {
    question: "Which gas do plants absorb from the atmosphere?",
    answers: [
      { text: "Oxygen", correct: false },
      { text: "Carbon Dioxide", correct: true },
      { text: "Nitrogen", correct: false },
      { text: "Hydrogen", correct: false }
    ]
  },
  {
    question: "Which is the longest river in the world?",
    answers: [
      { text: "Amazon", correct: false },
      { text: "Nile", correct: true },
      { text: "Ganga", correct: false },
      { text: "Yangtze", correct: false }
    ]
  },
  {
    question: "How many continents are there in the world?",
    answers: [
      { text: "5", correct: false },
      { text: "6", correct: false },
      { text: "7", correct: true },
      { text: "8", correct: false }
    ]
  },
  {
    question: "Which is the national animal of India?",
    answers: [
      { text: "Lion", correct: false },
      { text: "Tiger", correct: true },
      { text: "Elephant", correct: false },
      { text: "Leopard", correct: false }
    ]
  },
  {
    question: "Who wrote the Indian National Anthem?",
    answers: [
      { text: "Bankim Chandra Chatterjee", correct: false },
      { text: "Rabindranath Tagore", correct: true },
      { text: "Sarojini Naidu", correct: false },
      { text: "Subramania Bharati", correct: false }
    ]
  },
  {
    question: "Which organ purifies blood in the human body?",
    answers: [
      { text: "Heart", correct: false },
      { text: "Kidney", correct: true },
      { text: "Lungs", correct: false },
      { text: "Liver", correct: false }
    ]
  },
  {
    question: "Which is the fastest land animal?",
    answers: [
      { text: "Lion", correct: false },
      { text: "Cheetah", correct: true },
      { text: "Horse", correct: false },
      { text: "Tiger", correct: false }
    ]
  },
  {
    question: "Which country is known as the Land of the Rising Sun?",
    answers: [
      { text: "China", correct: false },
      { text: "Japan", correct: true },
      { text: "Thailand", correct: false },
      { text: "South Korea", correct: false }
    ]
  },
  {
    question: "What is the chemical symbol of Gold?",
    answers: [
      { text: "Ag", correct: false },
      { text: "Au", correct: true },
      { text: "Fe", correct: false },
      { text: "Cu", correct: false }
    ]
  },
  {
    question: "Which is the largest ocean in the world?",
    answers: [
      { text: "Atlantic Ocean", correct: false },
      { text: "Pacific Ocean", correct: true },
      { text: "Indian Ocean", correct: false },
      { text: "Arctic Ocean", correct: false }
    ]
  },
  {
    question: "Who was the first President of India?",
    answers: [
      { text: "Jawaharlal Nehru", correct: false },
      { text: "Dr. Rajendra Prasad", correct: true },
      { text: "Dr. B. R. Ambedkar", correct: false },
      { text: "Sardar Patel", correct: false }
    ]
  },
  {
    question: "Which vitamin is produced when skin is exposed to sunlight?",
    answers: [
      { text: "Vitamin A", correct: false },
      { text: "Vitamin B", correct: false },
      { text: "Vitamin C", correct: false },
      { text: "Vitamin D", correct: true }
    ]
  },
  {
    question: "Which is the tallest mountain in the world?",
    answers: [
      { text: "K2", correct: false },
      { text: "Mount Everest", correct: true },
      { text: "Kangchenjunga", correct: false },
      { text: "Makalu", correct: false }
    ]
  },
  {
    question: "Which country has the largest population in the world?",
    answers: [
      { text: "India", correct: true },
      { text: "China", correct: false },
      { text: "USA", correct: false },
      { text: "Russia", correct: false }
    ]
  },
  {
    question: "Which instrument is used to measure temperature?",
    answers: [
      { text: "Barometer", correct: false },
      { text: "Thermometer", correct: true },
      { text: "Hygrometer", correct: false },
      { text: "Anemometer", correct: false }
    ]
  }
];


const questionElement =document.getElementById('question');
const answer_btn=document.getElementById('answer-buttons');
const next_btn=document.getElementById('next');

let current_Question_index=0;
let score=0;

function startQuiz(){
    current_Question_index=0;
    score=0;
    next_btn.innerHTML="Next";
    showQuestion(); 
}

function  showQuestion(){

    resetState();
    let currentQuestion=questions[current_Question_index];
    let questionNo=current_Question_index +1;
    questionElement.innerHTML=questionNo+". " + currentQuestion.question;

     currentQuestion.answers.forEach(answer =>{
        const button =document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answer_btn.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener('click',selectAnswer);
     });
}

function  resetState(){
    next_btn.style.display="none";
    while(answer_btn.firstChild){
        answer_btn.removeChild(answer_btn.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn=e.target;
    const isCorrect =selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answer_btn.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    next_btn.style.display="block";
}

function showScore(){
    resetState();
    questionElement.innerHTML=`you scored ${score} out of ${questions.length}!`;
    next_btn.innerHTML="Play Again";
    next_btn.style.display="block";
}

function handleNextButton(){
    current_Question_index++;
    if(current_Question_index <questions.length){
        showQuestion();
    }else{
        showScore();
    }
}
next_btn.addEventListener('click',()=>{
    if(current_Question_index < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz();
