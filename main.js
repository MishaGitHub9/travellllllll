// Main JavaScript functionality
document.addEventListener('DOMContentLoaded', function() {
    setupTenseCards();
    setupMobileMenu();
    setupQuickDemo();
});

function setupTenseCards() {
    const tenseCards = document.querySelectorAll('.tense-card');
    
    tenseCards.forEach(card => {
        card.addEventListener('click', function() {
            const tenseType = this.dataset.tense;
            if (tenseType) {
                // Store the selected tense in localStorage
                localStorage.setItem('selectedTense', tenseType);
                
                // Navigate to tenses page
                window.location.href = 'tenses.html';
            }
        });
    });
}

function setupMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
}

// Quick Demo - Interactive Examples
function setupQuickDemo() {
    const demoContainer = document.getElementById('quick-demo');
    if (!demoContainer) return;

    const demoData = [
        {
            question: "Як сказати 'Я їду в Лондон' англійською?",
            options: [
                { text: "I am going to London", correct: true, explanation: "Present Continuous - для планованих дій" },
                { text: "I go to London", correct: false, explanation: "Present Simple - для регулярних дій" },
                { text: "I will go to London", correct: false, explanation: "Future Simple - для майбутніх планів" }
            ]
        },
        {
            question: "Як запитати 'Де знаходиться вокзал?'",
            options: [
                { text: "Where is the station?", correct: true, explanation: "Пряме питання з Where" },
                { text: "What is the station?", correct: false, explanation: "What використовується для речей" },
                { text: "How is the station?", correct: false, explanation: "How використовується для способу" }
            ]
        },
        {
            question: "Як сказати 'Мені потрібен квиток'?",
            options: [
                { text: "I need a ticket", correct: true, explanation: "Простий спосіб висловити потребу" },
                { text: "I want a ticket", correct: false, explanation: "Want - бажання, need - потреба" },
                { text: "I have a ticket", correct: false, explanation: "Have - володіння, need - потреба" }
            ]
        }
    ];

    let currentExample = 0;
    let demoTimer;

    function showExample() {
        const example = demoData[currentExample];
        
        const exampleHTML = `
            <div class="text-center">
                <div class="flex items-center justify-center gap-2 mb-6">
                    <span class="text-sm text-white/60">Приклад ${currentExample + 1}/3</span>
                    <div class="flex gap-1">
                        ${demoData.map((_, index) => 
                            `<div class="w-2 h-2 ${index <= currentExample ? 'bg-green-400' : 'bg-white/20'} rounded-full"></div>`
                        ).join('')}
                    </div>
                </div>
                
                <p class="text-white text-lg font-medium mb-8">${example.question}</p>
                
                <div class="space-y-4 max-w-md mx-auto">
                    ${example.options.map((option, index) => {
                        const isCorrect = option.correct;
                        return `
                            <div class="text-center ${!isCorrect ? 'opacity-50' : ''}">
                                <p class="${isCorrect ? 'text-green-400 text-xl font-semibold mb-2' : 'text-white/60 text-lg'}">${isCorrect ? '✓ ' : ''}${option.text}</p>
                                <p class="text-white/60 text-sm">${option.explanation}</p>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
            
            <div class="w-full bg-white/10 rounded-full h-2">
                <div class="bg-gradient-to-r from-green-500 to-emerald-600 h-2 rounded-full transition-all duration-500" style="width: ${((currentExample + 1) / demoData.length) * 100}%"></div>
            </div>
        `;
        
        demoContainer.innerHTML = exampleHTML;
        
        // Auto-advance to next example after 6 seconds
        demoTimer = setTimeout(() => {
            currentExample++;
            if (currentExample < demoData.length) {
                showExample();
            } else {
                showDemoResults();
            }
        }, 6000);
    }

    function showDemoResults() {
        demoContainer.innerHTML = `
            <div class="text-center">
                <div class="text-6xl mb-4">🌟</div>
                <h3 class="text-2xl font-semibold text-white mb-2">Готово!</h3>
                <p class="text-white/60 mb-6">Тепер ви знаєте основи!</p>
                <button onclick="location.reload()" class="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-medium rounded-2xl transition-all duration-300">
                    Подивитися ще раз
                </button>
            </div>
        `;
    }

    // Start demo after a short delay
    setTimeout(() => {
        currentExample = 0;
        showExample();
    }, 1000);
}

// Check if we need to show a specific tense on page load
document.addEventListener('DOMContentLoaded', function() {
    const selectedTense = localStorage.getItem('selectedTense');
    if (selectedTense && window.location.pathname.includes('tenses.html')) {
        // Clear the stored tense
        localStorage.removeItem('selectedTense');
        
        // Show the selected tense after a short delay
        setTimeout(() => {
            if (window.goToTense) {
                window.goToTense(selectedTense);
            }
        }, 500);
    }
}); 