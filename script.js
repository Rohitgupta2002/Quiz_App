const questions = [
  {
    question: "What is the largest planet in our solar system?",
    answers: [
      { text: "Earth", correct: false },
      { text: "Jupiter", correct: true },
      { text: "Saturn", correct: false },
      { text: "Mars", correct: false }
    ]
  },
  {
    question: "Which country invented tea?",
    answers: [
      { text: "India", correct: false },
      { text: "China", correct: true },
      { text: "England", correct: false },
      { text: "Japan", correct: false }
    ]
  },
  {
    question: "What is the currency of Japan?",
    answers: [
      { text: "Yen", correct: true },
      { text: "Won", correct: false },
      { text: "Dollar", correct: false },
      { text: "Rupee", correct: false }
    ]
  },
  {
    question: "Which scientist proposed the theory of relativity?",
    answers: [
      { text: "Isaac Newton", correct: false },
      { text: "Albert Einstein", correct: true },
      { text: "Galileo Galilei", correct: false },
      { text: "Nikola Tesla", correct: false }
    ]
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    answers: [
      { text: "Osmium", correct: false },
      { text: "Oxygen", correct: true },
      { text: "Gold", correct: false },
      { text: "Silver", correct: false }
    ]
  },
  {
    question: "Which ocean lies on the east coast of the United States?",
    answers: [
      { text: "Atlantic", correct: true },
      { text: "Pacific", correct: false },
      { text: "Indian", correct: false },
      { text: "Arctic", correct: false }
    ]
  },
  {
    question: "Which country hosted the 2016 Summer Olympics?",
    answers: [
      { text: "China", correct: false },
      { text: "Brazil", correct: true },
      { text: "UK", correct: false },
      { text: "Japan", correct: false }
    ]
  },
  {
    question: "What is the main ingredient in guacamole?",
    answers: [
      { text: "Tomato", correct: false },
      { text: "Avocado", correct: true },
      { text: "Potato", correct: false },
      { text: "Carrot", correct: false }
    ]
  },
  {
    question: "Which organ is responsible for pumping blood in the human body?",
    answers: [
      { text: "Lungs", correct: false },
      { text: "Heart", correct: true },
      { text: "Liver", correct: false },
      { text: "Kidney", correct: false }
    ]
  },
  {
    question: "Which continent is Egypt part of?",
    answers: [
      { text: "Asia", correct: false },
      { text: "Africa", correct: true },
      { text: "Europe", correct: false },
      { text: "South America", correct: false }
    ]
  },
  {
    question: "Which is the largest internal organ in the human body?",
    answers: [
      { text: "Kidney", correct: false },
      { text: "Liver", correct: true },
      { text: "Heart", correct: false },
      { text: "Lungs", correct: false }
    ]
  },
  {
    question: "Who painted the Mona Lisa?",
    answers: [
      { text: "Vincent van Gogh", correct: false },
      { text: "Leonardo da Vinci", correct: true },
      { text: "Pablo Picasso", correct: false },
      { text: "Michelangelo", correct: false }
    ]
  },
  {
    question: "Which planet is closest to the sun?",
    answers: [
      { text: "Mercury", correct: true },
      { text: "Venus", correct: false },
      { text: "Earth", correct: false },
      { text: "Mars", correct: false }
    ]
  },
  {
    question: "Which country is known for inventing pizza?",
    answers: [
      { text: "Italy", correct: true },
      { text: "France", correct: false },
      { text: "USA", correct: false },
      { text: "Mexico", correct: false }
    ]
  },
  {
    question: "Which metal is liquid at room temperature?",
    answers: [
      { text: "Mercury", correct: true },
      { text: "Lead", correct: false },
      { text: "Aluminum", correct: false },
      { text: "Gold", correct: false }
    ]
  },
  {
    question: "Which instrument measures atmospheric pressure?",
    answers: [
      { text: "Thermometer", correct: false },
      { text: "Barometer", correct: true },
      { text: "Hygrometer", correct: false },
      { text: "Seismometer", correct: false }
    ]
  },
  {
    question: "Which is the largest island in the world?",
    answers: [
      { text: "Greenland", correct: true },
      { text: "Borneo", correct: false },
      { text: "Madagascar", correct: false },
      { text: "Iceland", correct: false }
    ]
  },
  {
    question: "Which gas do humans inhale to survive?",
    answers: [
      { text: "Oxygen", correct: true },
      { text: "Carbon Dioxide", correct: false },
      { text: "Nitrogen", correct: false },
      { text: "Helium", correct: false }
    ]
  },
  {
    question: "Which city is famous as the City of Canals?",
    answers: [
      { text: "Venice", correct: true },
      { text: "Amsterdam", correct: false },
      { text: "Bruges", correct: false },
      { text: "Copenhagen", correct: false }
    ]
  },
  {
    question: "Which planet has rings around it?",
    answers: [
      { text: "Saturn", correct: true },
      { text: "Mars", correct: false },
      { text: "Venus", correct: false },
      { text: "Mercury", correct: false }
    ]
  },
  {
    question: "Which is the longest bone in the human body?",
    answers: [
      { text: "Femur", correct: true },
      { text: "Tibia", correct: false },
      { text: "Humerus", correct: false },
      { text: "Fibula", correct: false }
    ]
  },
  {
    question: "Which country is called the Land of the Midnight Sun?",
    answers: [
      { text: "Norway", correct: true },
      { text: "Sweden", correct: false },
      { text: "Finland", correct: false },
      { text: "Iceland", correct: false }
    ]
  },
  {
    question: "Which chemical element has the symbol 'Na'?",
    answers: [
      { text: "Sodium", correct: true },
      { text: "Nitrogen", correct: false },
      { text: "Neon", correct: false },
      { text: "Nickel", correct: false }
    ]
  },
  {
    question: "Which country is famous for the Great Wall?",
    answers: [
      { text: "China", correct: true },
      { text: "Japan", correct: false },
      { text: "India", correct: false },
      { text: "Mongolia", correct: false }
    ]
  },
  {
    question: "Which planet is known as the 'Morning Star' or 'Evening Star'?",
    answers: [
      { text: "Venus", correct: true },
      { text: "Mars", correct: false },
      { text: "Jupiter", correct: false },
      { text: "Mercury", correct: false }
    ]
  },
  {
    question: "Which animal is known as the Ship of the Desert?",
    answers: [
      { text: "Camel", correct: true },
      { text: "Horse", correct: false },
      { text: "Elephant", correct: false },
      { text: "Donkey", correct: false }
    ]
  },
  {
    question: "Which ocean is the second largest in the world?",
    answers: [
      { text: "Atlantic Ocean", correct: true },
      { text: "Indian Ocean", correct: false },
      { text: "Pacific Ocean", correct: false },
      { text: "Arctic Ocean", correct: false }
    ]
  },
  {
    question: "Which gas is used in electric bulbs to prevent filament burning?",
    answers: [
      { text: "Argon", correct: true },
      { text: "Oxygen", correct: false },
      { text: "Nitrogen", correct: false },
      { text: "Carbon Dioxide", correct: false }
    ]
  },
  {
    question: "Which country is known as the Land of Volcanoes?",
    answers: [
      { text: "Iceland", correct: true },
      { text: "Italy", correct: false },
      { text: "Japan", correct: false },
      { text: "Hawaii", correct: false }
    ]
  },
  {
    question: "Which organ in the human body produces insulin?",
    answers: [
      { text: "Liver", correct: false },
      { text: "Pancreas", correct: true },
      { text: "Kidney", correct: false },
      { text: "Heart", correct: false }
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
