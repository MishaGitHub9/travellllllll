// Tenses page functionality
let currentTense = 'present-simple';
let currentExercise = 0;
let correctAnswers = 0;
let totalExercises = 20;
let exercises = [];
let userAnswers = [];

// Present Simple exercises
const presentSimpleExercises = [
    {
        question: "The train _____ (leave) at 9 AM.",
        correct: "leaves",
        options: ["leaves", "leave", "leaving", "left"],
        explanation: "Present Simple для розкладу"
    },
    {
        question: "The museum _____ (open) at 10 AM.",
        correct: "opens",
        options: ["opens", "open", "opening", "opened"],
        explanation: "Present Simple для регулярних дій"
    },
    {
        question: "Excuse me, _____ (be) there a pharmacy near here?",
        correct: "is",
        options: ["is", "are", "am", "be"],
        explanation: "Present Simple для поточних станів"
    },
    {
        question: "The hotel _____ (have) a swimming pool.",
        correct: "has",
        options: ["has", "have", "having", "had"],
        explanation: "Present Simple для опису властивостей"
    },
    {
        question: "The restaurant _____ (serve) local cuisine.",
        correct: "serves",
        options: ["serves", "serve", "serving", "served"],
        explanation: "Present Simple для регулярних дій"
    },
    {
        question: "The bus _____ (arrive) every 15 minutes.",
        correct: "arrives",
        options: ["arrives", "arrive", "arriving", "arrived"],
        explanation: "Present Simple для розкладу"
    },
    {
        question: "The ticket _____ (cost) 20 euros.",
        correct: "costs",
        options: ["costs", "cost", "costing", "costed"],
        explanation: "Present Simple для фактів"
    },
    {
        question: "The weather _____ (be) sunny today.",
        correct: "is",
        options: ["is", "are", "am", "be"],
        explanation: "Present Simple для поточних станів"
    },
    {
        question: "The library _____ (close) at 6 PM.",
        correct: "closes",
        options: ["closes", "close", "closing", "closed"],
        explanation: "Present Simple для розкладу"
    },
    {
        question: "The apartment _____ (have) two bedrooms.",
        correct: "has",
        options: ["has", "have", "having", "had"],
        explanation: "Present Simple для опису властивостей"
    },
    {
        question: "The shop _____ (sell) souvenirs.",
        correct: "sells",
        options: ["sells", "sell", "selling", "sold"],
        explanation: "Present Simple для регулярних дій"
    },
    {
        question: "The flight _____ (depart) at 3 PM.",
        correct: "departs",
        options: ["departs", "depart", "departing", "departed"],
        explanation: "Present Simple для розкладу"
    },
    {
        question: "The room _____ (be) very comfortable.",
        correct: "is",
        options: ["is", "are", "am", "be"],
        explanation: "Present Simple для опису станів"
    },
    {
        question: "The tour _____ (start) at 2 PM.",
        correct: "starts",
        options: ["starts", "start", "starting", "started"],
        explanation: "Present Simple для розкладу"
    },
    {
        question: "The guide _____ (speak) English.",
        correct: "speaks",
        options: ["speaks", "speak", "speaking", "spoke"],
        explanation: "Present Simple для фактів"
    },
    {
        question: "The museum _____ (be) free on Sundays.",
        correct: "is",
        options: ["is", "are", "am", "be"],
        explanation: "Present Simple для фактів"
    },
    {
        question: "The train _____ (stop) at every station.",
        correct: "stops",
        options: ["stops", "stop", "stopping", "stopped"],
        explanation: "Present Simple для регулярних дій"
    },
    {
        question: "The hotel _____ (offer) free breakfast.",
        correct: "offers",
        options: ["offers", "offer", "offering", "offered"],
        explanation: "Present Simple для опису послуг"
    },
    {
        question: "The city _____ (have) many attractions.",
        correct: "has",
        options: ["has", "have", "having", "had"],
        explanation: "Present Simple для опису властивостей"
    },
    {
        question: "The weather _____ (be) usually warm here.",
        correct: "is",
        options: ["is", "are", "am", "be"],
        explanation: "Present Simple для загальних фактів"
    }
];

// Present Continuous exercises
const presentContinuousExercises = [
    {
        question: "I _____ (wait) for the bus right now.",
        correct: "am waiting",
        options: ["am waiting", "wait", "waits", "waited"],
        explanation: "Present Continuous для поточних дій"
    },
    {
        question: "She _____ (look) for her passport.",
        correct: "is looking",
        options: ["is looking", "looks", "look", "looked"],
        explanation: "Present Continuous для поточних дій"
    },
    {
        question: "They _____ (check) into the hotel.",
        correct: "are checking",
        options: ["are checking", "check", "checks", "checked"],
        explanation: "Present Continuous для поточних дій"
    },
    {
        question: "The train _____ (arrive) at platform 3.",
        correct: "is arriving",
        options: ["is arriving", "arrives", "arrive", "arrived"],
        explanation: "Present Continuous для дій що відбуваються"
    },
    {
        question: "We _____ (book) our tickets online.",
        correct: "are booking",
        options: ["are booking", "book", "books", "booked"],
        explanation: "Present Continuous для поточних дій"
    },
    {
        question: "The guide _____ (explain) the history.",
        correct: "is explaining",
        options: ["is explaining", "explains", "explain", "explained"],
        explanation: "Present Continuous для поточних дій"
    },
    {
        question: "He _____ (pack) his suitcase.",
        correct: "is packing",
        options: ["is packing", "packs", "pack", "packed"],
        explanation: "Present Continuous для поточних дій"
    },
    {
        question: "The children _____ (play) in the pool.",
        correct: "are playing",
        options: ["are playing", "play", "plays", "played"],
        explanation: "Present Continuous для поточних дій"
    },
    {
        question: "The receptionist _____ (help) another guest.",
        correct: "is helping",
        options: ["is helping", "helps", "help", "helped"],
        explanation: "Present Continuous для поточних дій"
    },
    {
        question: "We _____ (enjoy) our vacation.",
        correct: "are enjoying",
        options: ["are enjoying", "enjoy", "enjoys", "enjoyed"],
        explanation: "Present Continuous для поточних дій"
    },
    {
        question: "The waiter _____ (serve) our food.",
        correct: "is serving",
        options: ["is serving", "serves", "serve", "served"],
        explanation: "Present Continuous для поточних дій"
    },
    {
        question: "She _____ (take) photos of the monument.",
        correct: "is taking",
        options: ["is taking", "takes", "take", "took"],
        explanation: "Present Continuous для поточних дій"
    },
    {
        question: "The tourists _____ (visit) the museum.",
        correct: "are visiting",
        options: ["are visiting", "visit", "visits", "visited"],
        explanation: "Present Continuous для поточних дій"
    },
    {
        question: "The bus _____ (come) around the corner.",
        correct: "is coming",
        options: ["is coming", "comes", "come", "came"],
        explanation: "Present Continuous для дій що відбуваються"
    },
    {
        question: "I _____ (try) to find the hotel.",
        correct: "am trying",
        options: ["am trying", "try", "tries", "tried"],
        explanation: "Present Continuous для поточних дій"
    },
    {
        question: "The weather _____ (get) worse.",
        correct: "is getting",
        options: ["is getting", "gets", "get", "got"],
        explanation: "Present Continuous для змін що відбуваються"
    },
    {
        question: "They _____ (plan) their next trip.",
        correct: "are planning",
        options: ["are planning", "plan", "plans", "planned"],
        explanation: "Present Continuous для поточних дій"
    },
    {
        question: "The flight _____ (delay) due to weather.",
        correct: "is being delayed",
        options: ["is being delayed", "delays", "delay", "delayed"],
        explanation: "Present Continuous passive для поточних подій"
    },
    {
        question: "She _____ (learn) Spanish for her trip.",
        correct: "is learning",
        options: ["is learning", "learns", "learn", "learned"],
        explanation: "Present Continuous для тимчасових дій"
    },
    {
        question: "The hotel _____ (renovate) the lobby.",
        correct: "is renovating",
        options: ["is renovating", "renovates", "renovate", "renovated"],
        explanation: "Present Continuous для поточних дій"
    },
    {
        question: "We _____ (stay) at this hotel for a week.",
        correct: "are staying",
        options: ["are staying", "stay", "stays", "stayed"],
        explanation: "Present Continuous для тимчасових дій"
    }
];

// Future Simple exercises
const futureSimpleExercises = [
    {
        question: "I _____ (book) the hotel tomorrow.",
        correct: "will book",
        options: ["will book", "book", "books", "booked"],
        explanation: "Future Simple для планів"
    },
    {
        question: "The train _____ (arrive) at 3 PM.",
        correct: "will arrive",
        options: ["will arrive", "arrives", "arrive", "arrived"],
        explanation: "Future Simple для запланованих подій"
    },
    {
        question: "We _____ (visit) the museum next week.",
        correct: "will visit",
        options: ["will visit", "visit", "visits", "visited"],
        explanation: "Future Simple для планів"
    },
    {
        question: "The weather _____ (be) sunny tomorrow.",
        correct: "will be",
        options: ["will be", "is", "are", "was"],
        explanation: "Future Simple для прогнозів"
    },
    {
        question: "She _____ (call) you when she arrives.",
        correct: "will call",
        options: ["will call", "calls", "call", "called"],
        explanation: "Future Simple для обіцянок"
    },
    {
        question: "The tour _____ (start) at 9 AM.",
        correct: "will start",
        options: ["will start", "starts", "start", "started"],
        explanation: "Future Simple для запланованих подій"
    },
    {
        question: "I _____ (help) you with your luggage.",
        correct: "will help",
        options: ["will help", "help", "helps", "helped"],
        explanation: "Future Simple для пропозицій"
    },
    {
        question: "The flight _____ (land) in 30 minutes.",
        correct: "will land",
        options: ["will land", "lands", "land", "landed"],
        explanation: "Future Simple для запланованих подій"
    },
    {
        question: "They _____ (meet) us at the airport.",
        correct: "will meet",
        options: ["will meet", "meet", "meets", "met"],
        explanation: "Future Simple для планів"
    },
    {
        question: "The restaurant _____ (open) at 6 PM.",
        correct: "will open",
        options: ["will open", "opens", "open", "opened"],
        explanation: "Future Simple для запланованих подій"
    },
    {
        question: "We _____ (have) dinner at 8 PM.",
        correct: "will have",
        options: ["will have", "have", "has", "had"],
        explanation: "Future Simple для планів"
    },
    {
        question: "The bus _____ (come) in 5 minutes.",
        correct: "will come",
        options: ["will come", "comes", "come", "came"],
        explanation: "Future Simple для запланованих подій"
    },
    {
        question: "I _____ (send) you the details later.",
        correct: "will send",
        options: ["will send", "send", "sends", "sent"],
        explanation: "Future Simple для обіцянок"
    },
    {
        question: "The hotel _____ (provide) free breakfast.",
        correct: "will provide",
        options: ["will provide", "provides", "provide", "provided"],
        explanation: "Future Simple для запланованих послуг"
    },
    {
        question: "She _____ (pack) her bags tonight.",
        correct: "will pack",
        options: ["will pack", "packs", "pack", "packed"],
        explanation: "Future Simple для планів"
    },
    {
        question: "The weather _____ (improve) tomorrow.",
        correct: "will improve",
        options: ["will improve", "improves", "improve", "improved"],
        explanation: "Future Simple для прогнозів"
    },
    {
        question: "We _____ (take) a taxi to the airport.",
        correct: "will take",
        options: ["will take", "take", "takes", "took"],
        explanation: "Future Simple для планів"
    },
    {
        question: "The guide _____ (show) us around the city.",
        correct: "will show",
        options: ["will show", "shows", "show", "showed"],
        explanation: "Future Simple для запланованих дій"
    },
    {
        question: "The museum _____ (close) at 6 PM.",
        correct: "will close",
        options: ["will close", "closes", "close", "closed"],
        explanation: "Future Simple для запланованих подій"
    },
    {
        question: "I _____ (remember) to bring my passport.",
        correct: "will remember",
        options: ["will remember", "remember", "remembers", "remembered"],
        explanation: "Future Simple для обіцянок"
    },
    {
        question: "The train _____ (depart) on time.",
        correct: "will depart",
        options: ["will depart", "departs", "depart", "departed"],
        explanation: "Future Simple для запланованих подій"
    }
];

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    initializeTenses();
    loadExercises();
    showExercise();
    updateProgress();
    setupTenseNavigation();
});

function initializeTenses() {
    // Load progress from localStorage
    const savedProgress = localStorage.getItem('travelingoProgress');
    if (savedProgress) {
        progress = parseInt(savedProgress);
    }
    
    // Show current tense section
    showTenseSection(currentTense);
}

function loadExercises() {
    switch(currentTense) {
        case 'present-simple':
            exercises = [...presentSimpleExercises];
            break;
        case 'present-continuous':
            exercises = [...presentContinuousExercises];
            break;
        case 'future-simple':
            exercises = [...futureSimpleExercises];
            break;
    }
    
    // Shuffle exercises
    exercises = shuffleArray(exercises);
}

function setupTenseNavigation() {
    // Add click handlers to tense cards on homepage
    const tenseCards = document.querySelectorAll('.tense-card');
    tenseCards.forEach(card => {
        card.addEventListener('click', function() {
            const tenseType = this.dataset.tense;
            if (tenseType) {
                goToTense(tenseType);
            }
        });
    });
}

function goToTense(tenseId) {
    currentTense = tenseId;
    currentExercise = 0;
    correctAnswers = 0;
    userAnswers = [];
    
    // Update global variables
    window.currentTense = currentTense;
    window.currentExercise = currentExercise;
    window.correctAnswers = correctAnswers;
    
    // Show the correct tense section
    showTenseSection(tenseId);
    loadExercises();
    showExercise();
    updateProgress();
    updateNavigationButtons();
    
    // Update active state in navigation
    updateActiveNavigation(tenseId);
}

function updateActiveNavigation(tenseId) {
    // Update navigation menu active state
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    const tensesLink = document.querySelector('a[href="tenses.html"]');
    if (tensesLink) {
        tensesLink.classList.add('active');
    }
}

function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function showExercise() {
    if (currentExercise >= totalExercises) {
        showResults();
        return;
    }

    const exercise = exercises[currentExercise];
    let container;
    
    switch(currentTense) {
        case 'present-simple':
            container = document.getElementById('presentSimpleExercises');
            break;
        case 'present-continuous':
            container = document.getElementById('presentContinuousExercises');
            break;
        case 'future-simple':
            container = document.getElementById('futureSimpleExercises');
            break;
    }
    
    if (!container) return;
    
    container.innerHTML = `
        <div class="exercise-card">
            <div class="exercise-header">
                <h4>Питання ${currentExercise + 1} з ${totalExercises}</h4>
                <div class="exercise-progress">
                    <div class="progress-dots">
                        ${generateProgressDots()}
                    </div>
                </div>
            </div>
            <div class="exercise-content">
                <p class="exercise-question">"${exercise.question}"</p>
                <div class="answer-options">
                    ${shuffleArray(exercise.options).map(option => `
                        <button class="answer-btn" data-correct="${exercise.correct}">${option}</button>
                    `).join('')}
                </div>
                <div class="feedback" id="feedback${currentExercise}"></div>
            </div>
        </div>
    `;

    setupExerciseHandlers();
}

function generateProgressDots() {
    let dots = '';
    for (let i = 0; i < totalExercises; i++) {
        const isCompleted = i < currentExercise;
        const isCurrent = i === currentExercise;
        const isCorrect = i < currentExercise && userAnswers[i] === exercises[i].correct;
        
        let className = 'progress-dot';
        if (isCompleted) {
            className += isCorrect ? ' correct' : ' incorrect';
        }
        if (isCurrent) {
            className += ' current';
        }
        
        dots += `<span class="${className}"></span>`;
    }
    return dots;
}

function setupExerciseHandlers() {
    const answerButtons = document.querySelectorAll('.answer-btn');
    
    answerButtons.forEach(button => {
        button.addEventListener('click', function() {
            const exerciseCard = this.closest('.exercise-card');
            const feedback = exerciseCard.querySelector('.feedback');
            const allButtons = exerciseCard.querySelectorAll('.answer-btn');
            
            // Disable all buttons
            allButtons.forEach(btn => {
                btn.classList.add('disabled');
            });
            
            // Check if answer is correct
            const isCorrect = this.textContent === this.dataset.correct;
            
            if (isCorrect) {
                this.classList.add('correct');
                feedback.textContent = `✅ Правильно! ${exercises[currentExercise].explanation}`;
                feedback.className = 'feedback correct';
                correctAnswers++;
            } else {
                this.classList.add('incorrect');
                feedback.textContent = `❌ Неправильно. Правильна відповідь: "${this.dataset.correct}". ${exercises[currentExercise].explanation}`;
                feedback.className = 'feedback incorrect';
                
                // Show correct answer
                allButtons.forEach(btn => {
                    if (btn.textContent === btn.dataset.correct) {
                        btn.classList.add('correct');
                    }
                });
            }
            
            // Store user answer
            userAnswers[currentExercise] = this.textContent;
            
            // Move to next exercise after delay
            setTimeout(() => {
                currentExercise++;
                showExercise();
                updateProgress();
            }, 2000);
        });
    });
}

function updateProgress() {
    const progressPercentage = (currentExercise / totalExercises) * 100;
    
    // Update progress bar based on current tense
    let progressFill;
    let completedCount;
    
    switch(currentTense) {
        case 'present-simple':
            progressFill = document.getElementById('practiceProgress');
            completedCount = document.querySelector('#present-simple .completed-count');
            break;
        case 'present-continuous':
            progressFill = document.getElementById('practiceProgressContinuous');
            completedCount = document.querySelector('#present-continuous .completed-count');
            break;
        case 'future-simple':
            progressFill = document.getElementById('practiceProgressFuture');
            completedCount = document.querySelector('#future-simple .completed-count');
            break;
    }
    
    if (progressFill) {
        progressFill.style.width = progressPercentage + '%';
    }
    
    if (completedCount) {
        completedCount.textContent = currentExercise;
    }
    
    // Update main progress
    const mainProgress = (correctAnswers / totalExercises) * 100;
    localStorage.setItem('travelingoProgress', mainProgress.toString());
}

function showResults() {
    let exercisesContainer, resultsContainer, correctAnswersEl, totalQuestionsEl, percentageEl, resultsMessageEl;
    
    switch(currentTense) {
        case 'present-simple':
            exercisesContainer = document.getElementById('presentSimpleExercises');
            resultsContainer = document.getElementById('practiceResults');
            correctAnswersEl = document.getElementById('correctAnswers');
            totalQuestionsEl = document.getElementById('totalQuestions');
            percentageEl = document.getElementById('percentage');
            resultsMessageEl = document.getElementById('resultsMessage');
            break;
        case 'present-continuous':
            exercisesContainer = document.getElementById('presentContinuousExercises');
            resultsContainer = document.getElementById('practiceResultsContinuous');
            correctAnswersEl = document.getElementById('correctAnswersContinuous');
            totalQuestionsEl = document.getElementById('totalQuestionsContinuous');
            percentageEl = document.getElementById('percentageContinuous');
            resultsMessageEl = document.getElementById('resultsMessageContinuous');
            break;
        case 'future-simple':
            exercisesContainer = document.getElementById('futureSimpleExercises');
            resultsContainer = document.getElementById('practiceResultsFuture');
            correctAnswersEl = document.getElementById('correctAnswersFuture');
            totalQuestionsEl = document.getElementById('totalQuestionsFuture');
            percentageEl = document.getElementById('percentageFuture');
            resultsMessageEl = document.getElementById('resultsMessageFuture');
            break;
    }
    
    if (!exercisesContainer || !resultsContainer) return;
    
    exercisesContainer.classList.add('hidden');
    resultsContainer.classList.remove('hidden');
    
    const percentage = Math.round((correctAnswers / totalExercises) * 100);
    
    correctAnswersEl.textContent = correctAnswers;
    totalQuestionsEl.textContent = totalExercises;
    percentageEl.textContent = percentage + '%';
    
    let message;
    if (percentage >= 90) {
        message = `<p class="excellent">🎉 Відмінно! Ви майстер ${getTenseName()}!</p>`;
    } else if (percentage >= 70) {
        message = `<p class="good">👍 Добре! Трохи більше практики і буде ідеально!</p>`;
    } else if (percentage >= 50) {
        message = `<p class="average">📚 Непогано! Продовжуйте практикуватися!</p>`;
    } else {
        message = `<p class="needs-work">📖 Потрібно більше практики. Спробуйте ще раз!</p>`;
    }
    
    resultsMessageEl.innerHTML = message;
}

function getTenseName() {
    switch(currentTense) {
        case 'present-simple':
            return 'Present Simple';
        case 'present-continuous':
            return 'Present Continuous';
        case 'future-simple':
            return 'Future Simple';
        default:
            return 'граматики';
    }
}



function restartPractice() {
    currentTense = 'present-simple';
    currentExercise = 0;
    correctAnswers = 0;
    userAnswers = [];
    
    loadExercises();
    showExercise();
    updateProgress();
    
    // Hide results and show exercises
    const resultsContainer = document.getElementById('practiceResults');
    const exercisesContainer = document.getElementById('presentSimpleExercises');
    
    if (resultsContainer) resultsContainer.classList.add('hidden');
    if (exercisesContainer) exercisesContainer.classList.remove('hidden');
}

function restartPracticeContinuous() {
    currentTense = 'present-continuous';
    currentExercise = 0;
    correctAnswers = 0;
    userAnswers = [];
    
    loadExercises();
    showExercise();
    updateProgress();
    
    // Hide results and show exercises
    const resultsContainer = document.getElementById('practiceResultsContinuous');
    const exercisesContainer = document.getElementById('presentContinuousExercises');
    
    if (resultsContainer) resultsContainer.classList.add('hidden');
    if (exercisesContainer) exercisesContainer.classList.remove('hidden');
}

function restartPracticeFuture() {
    currentTense = 'future-simple';
    currentExercise = 0;
    correctAnswers = 0;
    userAnswers = [];
    
    loadExercises();
    showExercise();
    updateProgress();
    
    // Hide results and show exercises
    const resultsContainer = document.getElementById('practiceResultsFuture');
    const exercisesContainer = document.getElementById('futureSimpleExercises');
    
    if (resultsContainer) resultsContainer.classList.add('hidden');
    if (exercisesContainer) exercisesContainer.classList.remove('hidden');
}

// Global functions and variables
window.currentTense = currentTense;
window.currentExercise = currentExercise;
window.correctAnswers = correctAnswers;
window.loadExercises = loadExercises;
window.showExercise = showExercise;
window.updateProgress = updateProgress;
window.restartPractice = restartPractice;
window.restartPracticeContinuous = restartPracticeContinuous;
window.restartPracticeFuture = restartPracticeFuture;
window.nextTense = nextTense;
window.previousTense = previousTense;
window.unlockTense = unlockTense;
window.goToTense = goToTense;

// Navigation functions
function nextTense() {
    const tenses = ['present-simple', 'present-continuous', 'future-simple'];
    const currentIndex = tenses.indexOf(currentTense);
    
    if (currentIndex < tenses.length - 1) {
        currentTense = tenses[currentIndex + 1];
        currentExercise = 0;
        correctAnswers = 0;
        userAnswers = [];
        showTenseSection(currentTense);
        loadExercises();
        showExercise();
        updateProgress();
        updateNavigationButtons();
    }
}

function previousTense() {
    const tenses = ['present-simple', 'present-continuous', 'future-simple'];
    const currentIndex = tenses.indexOf(currentTense);
    
    if (currentIndex > 0) {
        currentTense = tenses[currentIndex - 1];
        currentExercise = 0;
        correctAnswers = 0;
        userAnswers = [];
        showTenseSection(currentTense);
        loadExercises();
        showExercise();
        updateProgress();
        updateNavigationButtons();
    }
}

function showTenseSection(tenseId) {
    const allTenses = document.querySelectorAll('.tense-section');
    allTenses.forEach(tense => {
        tense.classList.add('hidden');
    });
    
    const currentTenseSection = document.getElementById(tenseId);
    if (currentTenseSection) {
        currentTenseSection.classList.remove('hidden');
    }
}

function updateNavigationButtons() {
    const tenses = ['present-simple', 'present-continuous', 'future-simple'];
    const currentIndex = tenses.indexOf(currentTense);
    
    const prevButton = document.querySelector('.navigation-buttons .btn-secondary');
    const nextButton = document.querySelector('.navigation-buttons .btn-primary');
    
    if (prevButton) {
        prevButton.disabled = currentIndex === 0;
    }
    
    if (nextButton) {
        nextButton.disabled = currentIndex === tenses.length - 1;
    }
}

function unlockTense() {
    alert('Цей час буде доступний після завершення попереднього!');
} 