const quizData = [
    {
        question: "1. In all low-income countries across the world today, how many girls finish primary school?",
        a: "20 percent",
        b: "60 percent",
        c: "80 percent",
        correct: "c"
    },
    {
        question: "2. Where does majority of the world population live?",
        a: "Low-income countries",
        b: "Middle-income countries",
        c: "High-income countries",
        correct: "b"
    },
    {
        question: "3. In the last 20 years, the proportion of the world population living in extreme poverty has...?",
        a: "Almost doubled",
        b: "Remained more or less the same",
        c: "Almost Halved",
        correct: "c"
    },
    {
        question: "4. What is the life expectance of the world today?",
        a: "50 years",
        b: "60 years",
        c: "70 years",
        correct: "c"
    },
    {
        question: "5. There are 2 billion children in the world today, age 0 to 15 years old.How many children will there be in the year 2100, according to the United Nations?",
        a: "4 billion",
        b: "3 billion",
        c: "2 billion",
        correct: "c"
    },
    {
        question: "6. The UN predicts that by 2100, the population of the world will have increased by another 4 billion people. what is the main reason?",
        a: "There will be more children (age below 15)",
        b: "There will be more adults (age between 15 and 47)",
        c: "There will be more very old people (age 75 and older)",
        correct: "b"
    },
    {
        question: "7. How did the number of deaths per year from natural disasters change over the last hundred years?",
        a: "More than doubled",
        b: "Remained about the same",
        c: "Decreased to less than half",
        correct: "c"
    },
    {
        question: "8. How many of the world’s 1-year-old children today have been vaccinated against some disease?",
        a: "20 percent",
        b: "50 percent",
        c: "80 percent",
        correct: "c"
    },
    {
        question: "9. Worldwide, 30-year-old men have spent 10 years in school, on average. How many years have women of the same age spent in school?",
        a: "9 years",
        b: "6 years",
        c: "3 years",
        correct: "a"
    },
    {
        question: "10. In 1996, tigers, giant pandas, and black rhinos were all listed as endangered. How many of these three species are more critically endangered today?",
        a: "Two of them",
        b: "One of them",
        c: "None of them",
        correct: "c"
    },
    {
        question: "11. How many people in the world have some access to electricity?",
        a: "20 percent",
        b: "50 percent",
        c: "80 percent",
        correct: "c"
    },
    {
        question: "12. Global climate experts believe that, over the next 100 years, the average temperature will …",
        a: "get Warmer",
        b: "remain the same",
        c: "get colder",
        correct: "a"
    }
];

let currentQuiz = 0;
let score = 0;
const your_name = prompt("Please Enter Your Name:");

alert(`There are 12 Questions in this Quiz Challenge. Test Yourself how much you know about the world.Your net score will be shown immediately after submitting your last question. Good Luck!`);

alert(`You Have Only 60 seconds to Attempt them....`);

const questions = document.getElementById("question");
const answers = document.querySelectorAll(".answer");
const submitBtn = document.getElementById("enter");
const cover = document.querySelector(".cover");

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
//const d_text = document.getElementById("d_text");

function loadQuiz() {
    deSelect();
    questions.innerHTML = quizData[currentQuiz].question;

    a_text.innerHTML = quizData[currentQuiz].a;
    b_text.innerHTML = quizData[currentQuiz].b;
    c_text.innerHTML = quizData[currentQuiz].c;
    //d_text.innerHTML = quizData[currentQuiz].d;
}
loadQuiz();

submitBtn.addEventListener("click", function () {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length && timer > 0) {
            loadQuiz();
        }

    } else {
        if (timer > 0) {
            alert("Fill In The Answer To Proceed!!");
        }
    }
});

let timer = 60;
const myTime = document.getElementById('timer');
// Timing function 
let x = setInterval(function () {
    timer--;
    if (timer < 10) {
        //timer = "0" + timer;
        myTime.style.color = 'red';
    }
    if (timer === 0 || currentQuiz === quizData.length) {
        clearTimeout(x);
        alert(`Your Score is: ${score}/${quizData.length}. Thank You ${your_name} For Attempting Our Quiz Challenge.`);
        //alert(`Refresh To Attempt Again!`);
        cover.innerText = "REFRESH TO PLAY AGAIN";
    }
    myTime.innerHTML = timer;

}, 1000);

// Function to get selected value
function getSelected() {
    let answer = undefined;
    answers.forEach(function (answers) {
        if (answers.checked) {
            answer = answers.id;
        }
    });
    return answer;
}

// function for deselecting the radio button
function deSelect() {
    answers.forEach(function (answer) {
        answer.checked = false;
    });
}