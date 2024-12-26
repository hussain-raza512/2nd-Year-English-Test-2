
const inputMarks=document.getElementById("input")
const result=document.getElementById("result")
const nameInput=document.getElementById("nameInput")


const questions = [


   
        {
            question: "The boy should make himself <u>cultivate</u> a poise and calm. 'Cultivate' means:",
            answers: [
                { text: "Develop", correct: true },
                { text: "Ignore", correct: false },
                { text: "Reject", correct: false },
                { text: "Demote", correct: false }
            ]
        },
        {
            question: "The boy must cultivate a poise that <u>smothers</u> the fidgets. 'Smothers' means:",
            answers: [
                { text: "Demote", correct: false },
                { text: "Enhance", correct: false },
                { text: "Promote", correct: false },
                { text: "Muffle", correct: true }
            ]
        },
        {
            question: "Today water is carried to cities through <u>aqueduct</u>. 'Aqueduct' means:",
            answers: [
                { text: "Pipe Line", correct: false },
                { text: "Large Vehicles", correct: false },
                { text: "Machines", correct: false },
                { text: "Inland Water", correct: true }
            ]
        },
        {
            question: "There is no <u>substitute</u> for health. 'Substitute' means:",
            answers: [
                { text: "Prevention", correct: false },
                { text: "Enhancement", correct: false },
                { text: "Cure", correct: false },
                { text: "Alternative", correct: true }
            ]
        },
        {
            question: "The sun and other stars are <u>extremely</u> hot. 'Extremely' means:",
            answers: [
                { text: "Properly", correct: false },
                { text: "Exceedingly", correct: true },
                { text: "Normally", correct: false },
                { text: "Seriously", correct: false }
            ]
        },
        {
            question: "We have learned how to provide ourselves with a <u>variety</u> of food. 'Variety' means:",
            answers: [
                { text: "Groups", correct: false },
                { text: "Different Kinds", correct: true },
                { text: "Easy", correct: false },
                { text: "Healthful", correct: false }
            ]
        },
        {
            question: "In the past, city streets were full of <u>garbage</u>. 'Garbage' means:",
            answers: [
                { text: "Luggage", correct: false },
                { text: "Waste", correct: true },
                { text: "Lights", correct: false },
                { text: "Dirt", correct: false }
            ]
        },
        {
            question: "The creation of Earth was indeed a <u>rare</u> event. 'Rare' means:",
            answers: [
                { text: "Special", correct: false },
                { text: "Important", correct: false },
                { text: "Unusual", correct: true },
                { text: "Frightening", correct: false }
            ]
        },
        {
            question: "The moon raises <u>tides</u> on the Earth. 'Tides' means:",
            answers: [
                { text: "Attraction", correct: false },
                { text: "Rays", correct: false },
                { text: "Radiation", correct: false },
                { text: "Waves", correct: true }
            ]
        },
        {
            question: "He would not <u>consent</u> to the operation. 'Consent' means:",
            answers: [
                { text: "Resist", correct: false },
                { text: "Claim", correct: false },
                { text: "Agree", correct: true },
                { text: "Hate", correct: false }
            ]
        },
        {
            question: "Nervous habits are not easy to <u>uproot</u>. 'Uproot' means:",
            answers: [
                { text: "Plant", correct: false },
                { text: "Eradicate", correct: true },
                { text: "Ignore", correct: false },
                { text: "Resist", correct: false }
            ]
        },
        {
            question: "<u>Suppose</u> you had been an unusually strong little fellow. 'Suppose' means:",
            answers: [
                { text: "Claim", correct: false },
                { text: "Assume", correct: true },
                { text: "Believe", correct: false },
                { text: "Say", correct: false }
            ]
        },
        {
            question: "Science demonstrates that <u>unsanitary</u> conditions cause diseases. 'Unsanitary' means:",
            answers: [
                { text: "Hygienic", correct: false },
                { text: "Healthy", correct: false },
                { text: "Dirty", correct: true },
                { text: "Profitable", correct: false }
            ]
        },
        {
            question: "A few stars are <u>hardly</u> bigger than the Earth. 'Hardly' means:",
            answers: [
                { text: "Scarcely", correct: true },
                { text: "Boldly", correct: false },
                { text: "Nicely", correct: false },
                { text: "Tightly", correct: false }
            ]
        },
        {
            question: "<u>Gradually</u> the pieces became cooler. 'Gradually' means:",
            answers: [
                { text: "Soon", correct: false },
                { text: "Generally", correct: false },
                { text: "Slowly", correct: true },
                { text: "Slightly", correct: false }
            ]
        },
 

        // Mr Chips Start from Here


      
        {
            question: "The air full of flowers scents and the plick-plock of cricket on the <u>pitch</u>. 'Pitch' means:",
            answers: [
                { text: "Field", correct: true },
                { text: "Court", correct: false },
                { text: "Road", correct: false },
                { text: "Track", correct: false }
            ]
        },
        {
            question: "Wetherby himself was very fatherly and <u>courteous</u>. 'Courteous' means:",
            answers: [
                { text: "Rude", correct: false },
                { text: "Polite", correct: true },
                { text: "Strict", correct: false },
                { text: "Angry", correct: false }
            ]
        },
        {
            question: "You are a young man, Mr. Chipping, and Brookfield is an old <u>foundation</u>. 'Foundation' means:",
            answers: [
                { text: "Building", correct: false },
                { text: "Base", correct: true },
                { text: "Structure", correct: false },
                { text: "Office", correct: false }
            ]
        },
        {
            question: "Big Hall full of lusty barbarians ready to pounce on him as their legitimate <u>prey</u>. 'Prey' means:",
            answers: [
                { text: "Target", correct: true },
                { text: "Hunting", correct: false },
                { text: "Opponent", correct: false },
                { text: "Victim", correct: false }
            ]
        },
        
        

        {
            question: "The air full of flowers <u>scents</u> and the plick-plock of cricket on the pitch. 'Scents' means:",
            answers: [
                { text: "Flowers", correct: false },
                { text: "Smell", correct: true },
                { text: "Plants", correct: false },
                { text: "Picture", correct: false }
            ]
        },





        {
            question: "Not that he was <u>boastful</u> or conceited. Boastful means:",
            answers: [
                { text: "Proud", correct: true },
                { text: "Nice", correct: false },
                { text: "Conceited", correct: false },
                { text: "Poor", correct: false }
            ]
        },

        {
            question: "Later, the school <u>declined</u> again. Declined means:",
            answers: [
               
                { text: "Improved", correct: false },
                { text: "Increased", correct: false },
                { text: "Decreased", correct: true },
                { text: "Regained", correct: false }
            ]
        },

        {
            question: "Across the road behind a rampart of ancient elms lay Brookfield, under its autumn mantle of <u>creeper</u>. Creeper means:",
            answers: [
                { text: "Crawling", correct: false },
                
                { text: "Walking", correct: false },
                { text: "Bushy", correct: false },
                { text: "Vine", correct: true }
            ]
        },

        {
            question: "At fifty, he was the <u>doyen</u> of the staff. Doyen means:",
            answers: [
                { text: "Headmaster", correct: false },
                { text: "Senior member", correct: true },
                { text: "Bead", correct: false },
                { text: "Principal", correct: false }
            ]
        },

        {
            question: "The school went up and down, dwindling almost to non-existence at one time, becoming almost <u>illustrious</u> at another. Illustrious means:",
            answers: [
                { text: "Lighting", correct: false },
                { text: "Obscure", correct: false },
                { text: "Famous", correct: true },
                { text: "Beautiful", correct: false }
            ]
        },






        {
            question: "Which was <u>oddly</u> incorrect, because Chips was not a bachelor at all. Oddly means:",
            answers: [
                { text: "Surprisingly", correct: true },
                { text: "Really", correct: false },
                { text: "Truly", correct: false },
                { text: "Always", correct: false }
            ]
        },
        {
            question: "He was not, despite his long years of <u>assiduous</u> teaching, a profound classical scholar. <u>Assiduous</u> means:",
            answers: [
                { text: "English", correct: false },
                { text: "Greek", correct: false },
                { text: "Diligent", correct: true },
                { text: "Maths", correct: false }
            ]
        },
        {
            question: "Once <u>thrashed</u> him for climbing on the gymnasium roof.  Thrashed means:",
            answers: [
                { text: "Beat", correct: true },
                { text: "Taught", correct: false },
                { text: "Asked", correct: false },
                { text: "Made", correct: false }
            ]
        },
        {
            question: "Yes, I knew him, sir. <u>cheeky</u> he was to me, generally. Cheeky means:",
            answers: [
                { text: "Nice", correct: false },            
                { text: "Polite", correct: false },
                { text: "Handsome", correct: false },

                { text: "Disrespectful", correct: true },


            ]
        },
        {
            question: "A pleasant, <u>placid</u> life at Mrs. Wickett's. Placid means:",
            answers: [
                { text: "Lonely", correct: false },
                { text: "Peaceful", correct: true },
                { text: "Warm", correct: false },
                { text: "Handsome", correct: false }
            ]
        }
        
        


        
        


        
        
    



];



console.log(questions)
console.log(questions[0].answers[0].correct)


const questionElement=document.getElementById("question");
const answerButtons=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");


let currentQuestionIndex=0;
let score=0;





function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion()
    result.style.display="none";
    nameInput.style.display="none";
    
    
    
}


function showQuestion(){

    resetState();
    result.style.display="none";
    nameInput.style.display="none";

    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex+1;
    questionElement.innerHTML=questionNo + "." + currentQuestion.question;


    currentQuestion.answers.forEach(answer=>{

        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button)

        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click", selectAnswer)

    })
}





function resetState(){
    result.style.display="none";
    nameInput.style.display="none";
    nextButton.style.display="none";
    while(answerButtons.firstChild){
answerButtons.removeChild(answerButtons.firstChild)
    }
}



function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }

    // selectedBtn.classList.add("locked");
    Array.from(answerButtons.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct")
        }
        button.disabled=true;
    });

    nextButton.style.display="block";
    

}


function showScore(){
    resetState();
    result.style.display="block";
    nameInput.style.display="block";
    questionElement.innerHTML=`You Scored ${score} out of ${questions.length}!!`;
    nextButton.innerHTML="Play Again";
    nextButton.style.display="none";  // agr ap chahty ky score lock ho jaye aur student play again py click kar ky dubara sa test dy paye
    // nextButton.style.display="block";
   
    inputMarks.value=score;

}


function handleNextButton(){
    currentQuestionIndex++;
    
    if(currentQuestionIndex<questions.length){
        showQuestion()
    } else{

        showScore()
        inputMarks.value=score;

    }
}

nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton()
    } else{startQuiz()}
    
    // is else ko remove kar dain  agr ap chahty ky score lock ho jaye aur student play again py click kar ky dubara sa test dy paye

   
})



startQuiz();







function showConfirmation() {
    alert("Your result has been submitted!");
  }





let timerInterval;
function startTimer() {
  clearInterval(timerInterval);
  let secondsRemaining = 900;
  
  displayTime();

  timerInterval = setInterval(() => {
    secondsRemaining--;
    displayTime();
    if (secondsRemaining <= 0) {
      clearInterval(timerInterval);
      document.body.style.backgroundColor = "red";
      showScore();
    }
  }, 1000);

  function displayTime() {
    const minutes = Math.floor(secondsRemaining / 60);
    const seconds = secondsRemaining % 60;
    document.getElementById('timer').innerHTML = `Remaining Time = <span style="color: red;">${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}</span>`;

  }
}





















































