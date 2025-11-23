// --- DATA: STATEMENTS ---
const statements = [
    { text: "You feel energized after spending time with a large group of people.", target: "E", opposite: "I" },
    { text: "You tend to speak before you have fully thought through the details.", target: "E", opposite: "I" },
    { text: "You enjoy being the center of attention.", target: "E", opposite: "I" },
    { text: "You usually start conversations with people you don't know well.", target: "E", opposite: "I" },
    { text: "Your social calendar is usually very full.", target: "E", opposite: "I" },
    { text: "You often find yourself daydreaming about the future.", target: "N", opposite: "S" },
    { text: "You are more interested in the meaning of a story than the details.", target: "N", opposite: "S" },
    { text: "You value creativity and innovation over proven methods.", target: "N", opposite: "S" },
    { text: "You trust your gut instinct more than your eyes.", target: "N", opposite: "S" },
    { text: "You like to discuss abstract theories and 'what if' scenarios.", target: "N", opposite: "S" },
    { text: "You follow your heart more often than your head.", target: "F", opposite: "T" },
    { text: "It is more important to be kind than to be right.", target: "F", opposite: "T" },
    { text: "You are deeply affected by other people's emotions.", target: "F", opposite: "T" },
    { text: "You make decisions based on your personal values.", target: "F", opposite: "T" },
    { text: "You naturally offer emotional support rather than practical solutions.", target: "F", opposite: "T" },
    { text: "You prefer to have a detailed schedule and stick to it.", target: "J", opposite: "P" },
    { text: "You get your work done well before the deadline.", target: "J", opposite: "P" },
    { text: "You like your physical surroundings to be organized and tidy.", target: "J", opposite: "P" },
    { text: "You feel uncomfortable when things are up in the air.", target: "J", opposite: "P" },
    { text: "You like to have a plan for everything.", target: "J", opposite: "P" }
];

// --- DATA: RESULTS ---
const personalityTypes = {
    "ISTJ": { title: "The Logistician", desc: "You are practical, fact-minded, and reliable. You value order and tradition, often taking a steady, logical approach to life. You are the rock that others rely on, ensuring that everything is done correctly and efficiently.", careers: "Accountant, Military Officer, Manager, Judge, Data Analyst" },
    "ISFJ": { title: "The Defender", desc: "You are a warm protector, always ready to defend your loved ones. You are dedicated and steady, noticing the small details that make others feel special. You combine a strong work ethic with a deep sensitivity to others' feelings.", careers: "Nurse, Teacher, Social Worker, Human Resources, Librarian" },
    "INFJ": { title: "The Advocate", desc: "You are quiet and mystical, yet very inspiring and tireless idealist. You see the world not as it is, but as it could be. Driven by deep values, you strive to make a positive impact on the world, often focusing on helping others grow.", careers: "Counselor, Psychologist, Writer, Non-profit Organizer, Artist" },
    "INTJ": { title: "The Architect", desc: "You are an imaginative and strategic thinker with a plan for everything. You value intellect and competence, often seeing patterns others miss. You are independent and determined to see your visions come to life.", careers: "Scientist, Engineer, Strategic Planner, Professor, Software Architect" },
    "ISTP": { title: "The Virtuoso", desc: "You are a bold and practical experimenter, master of all kinds of tools. You are calm in a crisis and learn by getting your hands dirty. You enjoy taking things apart and putting them back together better than before.", careers: "Mechanic, Pilot, Engineer, Paramedic, Forensic Analyst" },
    "ISFP": { title: "The Adventurer", desc: "You are a flexible and charming artist, always ready to explore and experience something new. You live in the moment and value aesthetic beauty. You are gentle, caring, and often express yourself through actions rather than words.", careers: "Artist, Fashion Designer, Chef, Veterinarian, Physical Therapist" },
    "INFP": { title: "The Mediator", desc: "You are a poetic, kind, and altruistic person, always eager to help a good cause. You are guided by your principles and seek harmony and authenticity. You have a rich inner world and a talent for self-expression.", careers: "Writer, Editor, Psychologist, Social Worker, Graphic Designer" },
    "INTP": { title: "The Logician", desc: "You are an innovative inventor with an unquenchable thirst for knowledge. You love analyzing systems and finding logical explanations for everything. You are theoretical and abstract, more interested in ideas than social interaction.", careers: "Computer Programmer, Mathematician, Scientist, Financial Analyst, Academic" },
    "ESTP": { title: "The Entrepreneur", desc: "You are smart, energetic, and very perceptive, who truly enjoys living on the edge. You take action quickly and adapt to new situations with ease. You are pragmatic and focused on immediate results.", careers: "Sales Manager, Stockbroker, Police Officer, Athlete, Entrepreneur" },
    "ESFP": { title: "The Entertainer", desc: "You are spontaneous, energetic, and enthusiastic—life is never boring around you. You love the spotlight and bringing joy to others. You are observant and sensitive to others' needs, making you a natural people person.", careers: "Actor, Event Planner, Sales Representative, Tour Guide, Public Relations" },
    "ENFP": { title: "The Campaigner", desc: "You are an enthusiastic, creative, and sociable free spirit who can always find a reason to smile. You connect dots quickly and inspire others. You are fiercely independent and crave creativity and freedom.", careers: "Journalist, Campaign Manager, Actor, Entrepreneur, Diplomat" },
    "ENTP": { title: "The Debater", desc: "You are a smart and curious thinker who cannot resist an intellectual challenge. You love to poke holes in arguments to find the absolute truth. You are quick-witted and knowledgeable, enjoying the mental exercise of debate.", careers: "Lawyer, Entrepreneur, Consultant, Inventor, Creative Director" },
    "ESTJ": { title: "The Executive", desc: "You are an excellent administrator, unsurpassed at managing things or people. You value clear rules, hard work, and efficiency. You are practical and realistic, focusing on getting the job done right.", careers: "CEO, Project Manager, Police Officer, Judge, School Administrator" },
    "ESFJ": { title: "The Consul", desc: "You are an extraordinarily caring, social, and popular person, always eager to help. You are the glue that holds communities and families together. You are conscientious and cooperative, valuing harmony above all.", careers: "Teacher, Healthcare Administrator, Event Planner, Counselor, Office Manager" },
    "ENFJ": { title: "The Protagonist", desc: "You are a charismatic and inspiring leader, able to mesmerize your listeners. You see potential in everyone and want to help them grow. You are empathetic and responsive, often putting others' needs before your own.", careers: "Teacher, HR Manager, PR Specialist, Sales Manager, Corporate Trainer" },
    "ENTJ": { title: "The Commander", desc: "You are a bold, imaginative, and strong-willed leader, always finding a way—or making one. You are driven by success and logical efficiency. You are decisive and confident, enjoying long-term planning and goal setting.", careers: "CEO, Lawyer, Management Consultant, University Professor, Judge" }
};

// --- APP STATE ---
let currentQuestionIndex = 0;
let scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
let userName = "";

// --- DOM ELEMENTS ---
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const statementText = document.getElementById("statement-text");
const progressBar = document.getElementById("progress-bar");
const questionCount = document.getElementById("question-count");
const circlesContainer = document.getElementById("circles-container");
const themeToggle = document.getElementById("theme-toggle");
const usernameInput = document.getElementById("username-input");
const displayName = document.getElementById("display-name");

// --- INITIALIZE THEME ---
themeToggle.addEventListener("click", () => {
    const body = document.body;
    const currentTheme = body.getAttribute("data-theme");
    body.setAttribute("data-theme", currentTheme === "dark" ? "light" : "dark");
});

// --- QUIZ LOGIC ---

function startQuiz() {
    // 1. Validate Name
    if (usernameInput.value.trim() === "") {
        alert("Please enter your name to start!");
        return;
    }
    userName = usernameInput.value;

    startScreen.classList.remove("active");
    quizScreen.classList.add("active");
    quizScreen.classList.remove("hidden");
    showQuestion();
}

function showQuestion() {
    const q = statements[currentQuestionIndex];
    statementText.innerText = q.text;
    questionCount.innerText = `Statement ${currentQuestionIndex + 1} / ${statements.length}`;
    
    // Progress Bar
    const progress = ((currentQuestionIndex) / statements.length) * 100;
    progressBar.style.width = `${progress}%`;

    // Render Circles
    circlesContainer.innerHTML = "";
    
    for (let i = 1; i <= 7; i++) {
        const wrapper = document.createElement("div");
        wrapper.classList.add("circle-option");

        const input = document.createElement("input");
        input.type = "radio";
        input.name = "answer"; 
        input.value = i;
        input.id = `q${currentQuestionIndex}-opt-${i}`; // Unique ID

        const label = document.createElement("label");
        label.setAttribute("for", `q${currentQuestionIndex}-opt-${i}`);

        wrapper.appendChild(input);
        wrapper.appendChild(label);
        circlesContainer.appendChild(wrapper);
    }
}

function nextQuestion() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    
    if (!selectedOption) {
        alert("Please select a circle to continue.");
        return;
    }

    const val = parseInt(selectedOption.value);
    const q = statements[currentQuestionIndex];

    if (val < 4) {
        scores[q.opposite] += (4 - val);
    } else if (val > 4) {
        scores[q.target] += (val - 4);
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < statements.length) {
        showQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    let type = "";
    type += (scores.E >= scores.I) ? "E" : "I";
    type += (scores.N >= scores.S) ? "N" : "S";
    type += (scores.F >= scores.T) ? "F" : "T";
    type += (scores.J >= scores.P) ? "J" : "P";

    const calcPct = (a, b) => {
        let total = a + b;
        if (total === 0) return 50;
        return Math.round((a / total) * 100);
    };

    const pctE = calcPct(scores.E, scores.I);
    const pctN = calcPct(scores.N, scores.S);
    const pctT = calcPct(scores.T, scores.F);
    const pctJ = calcPct(scores.J, scores.P);

    const data = personalityTypes[type];
    
    displayName.innerText = userName;

    document.getElementById("type-code").innerText = type;
    document.getElementById("type-title").innerText = data.title;
    document.getElementById("type-description").innerText = data.desc;
    document.getElementById("career-list").innerText = data.careers;

    document.getElementById("bar-e").style.width = `${pctE}%`;
    document.getElementById("bar-n").style.width = `${pctN}%`;
    document.getElementById("bar-t").style.width = `${pctT}%`;
    document.getElementById("bar-j").style.width = `${pctJ}%`;

    quizScreen.classList.remove("active");
    quizScreen.classList.add("hidden");
    resultScreen.classList.add("active");
    resultScreen.classList.remove("hidden");
}

function restartQuiz() {
    currentQuestionIndex = 0;
    scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
    resultScreen.classList.remove("active");
    resultScreen.classList.add("hidden");
    startScreen.classList.add("active");
}