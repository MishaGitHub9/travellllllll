// Функціональність практикування
class PracticeManager {
    constructor() {
        this.currentCategory = null;
        this.currentWords = [];
        this.currentWordIndex = 0;
        this.score = 0;
        this.totalQuestions = 10;
        this.practiceContainer = null;
    }

    // Ініціалізація практики для категорії
    initPractice(category) {
        this.currentCategory = category;
        this.currentWords = this.getWordsForCategory(category);
        this.currentWordIndex = 0;
        this.score = 0;
        
        this.showPracticeInterface();
        this.showNextQuestion();
    }

    // Отримання слів для категорії
    getWordsForCategory(category) {
        const wordElements = document.querySelectorAll(`[data-category="${category}"] .word-item`);
        const words = [];
        
        wordElements.forEach(element => {
            const word = element.querySelector('.word').textContent;
            const translation = element.querySelector('.translation').textContent;
            words.push({ word, translation });
        });
        
        return words;
    }

    // Показ інтерфейсу практики
    showPracticeInterface() {
        // Створюємо модальне вікно для практики
        const modal = document.createElement('div');
        modal.className = 'practice-modal';
        modal.innerHTML = `
            <div class="practice-container">
                <div class="practice-header">
                    <h2>Практика: ${this.getCategoryName(this.currentCategory)}</h2>
                    <div class="practice-progress">
                        <span class="current-question">1</span> / <span class="total-questions">${this.totalQuestions}</span>
                    </div>
                    <div class="practice-score">
                        Бали: <span class="score">0</span>
                    </div>
                </div>
                
                <div class="practice-content">
                    <div class="question-container">
                        <h3>Вставте пропущене слово:</h3>
                        <div class="sentence-container">
                            <span class="sentence-prefix"></span>
                            <input type="text" class="word-input" placeholder="Введіть слово">
                            <span class="sentence-suffix"></span>
                        </div>
                        <div class="hint-container">
                            <span class="hint">Підказка: </span>
                            <span class="hint-text"></span>
                        </div>
                    </div>
                    
                    <div class="practice-actions">
                        <button class="btn btn-primary check-answer-btn">Перевірити</button>
                        <button class="btn btn-secondary skip-btn">Пропустити</button>
                    </div>
                </div>
                
                <div class="practice-results hidden">
                    <h3>Результати практики</h3>
                    <div class="results-summary">
                        <p>Правильних відповідей: <span class="correct-answers">0</span> з <span class="total-answers">${this.totalQuestions}</span></p>
                        <p>Ваш результат: <span class="percentage">0%</span></p>
                    </div>
                    <div class="results-actions">
                        <button class="btn btn-primary restart-btn">Спробувати ще раз</button>
                        <button class="btn btn-secondary close-btn">Закрити</button>
                    </div>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        this.practiceContainer = modal;
        
        // Додаємо обробники подій
        this.addEventListeners();
    }

    // Додавання обробників подій
    addEventListeners() {
        const checkBtn = this.practiceContainer.querySelector('.check-answer-btn');
        const skipBtn = this.practiceContainer.querySelector('.skip-btn');
        const restartBtn = this.practiceContainer.querySelector('.restart-btn');
        const closeBtn = this.practiceContainer.querySelector('.close-btn');
        const wordInput = this.practiceContainer.querySelector('.word-input');

        checkBtn.addEventListener('click', () => this.checkAnswer());
        skipBtn.addEventListener('click', () => this.skipQuestion());
        restartBtn.addEventListener('click', () => this.restartPractice());
        closeBtn.addEventListener('click', () => this.closePractice());
        
        wordInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.checkAnswer();
            }
        });
    }

    // Показ наступного питання
    showNextQuestion() {
        if (this.currentWordIndex >= this.totalQuestions) {
            this.showResults();
            return;
        }

        const currentWord = this.currentWords[this.currentWordIndex];
        const sentence = this.generateSentence(currentWord);
        
        // Оновлюємо інтерфейс
        this.practiceContainer.querySelector('.current-question').textContent = this.currentWordIndex + 1;
        this.practiceContainer.querySelector('.sentence-prefix').textContent = sentence.prefix;
        this.practiceContainer.querySelector('.sentence-suffix').textContent = sentence.suffix;
        this.practiceContainer.querySelector('.hint-text').textContent = currentWord.translation;
        this.practiceContainer.querySelector('.word-input').value = '';
        this.practiceContainer.querySelector('.word-input').focus();
        
        // Показуємо контент питання
        this.practiceContainer.querySelector('.question-container').classList.remove('hidden');
        this.practiceContainer.querySelector('.practice-results').classList.add('hidden');
    }

    // Генерація речення з пропущеним словом
    generateSentence(word) {
        const sentences = {
            planning: [
                { prefix: "I need to make a ", suffix: " for my trip." },
                { prefix: "What's your travel ", suffix: "?" },
                { prefix: "The ", suffix: " is very important for planning." },
                { prefix: "I want to visit this ", suffix: "." },
                { prefix: "The ", suffix: " is at 3 PM." }
            ],
            airport: [
                { prefix: "Welcome to the ", suffix: "." },
                { prefix: "Your ", suffix: " is ready for boarding." },
                { prefix: "Please show your ", suffix: "." },
                { prefix: "The ", suffix: " is delayed." },
                { prefix: "Where is the ", suffix: "?" }
            ],
            hotel: [
                { prefix: "I have a ", suffix: " at this hotel." },
                { prefix: "The ", suffix: " is very comfortable." },
                { prefix: "I need the ", suffix: " to my room." },
                { prefix: "The ", suffix: " is on the first floor." },
                { prefix: "I want to check ", suffix: " early." }
            ],
            restaurant: [
                { prefix: "This ", suffix: " is very popular." },
                { prefix: "The ", suffix: " is very friendly." },
                { prefix: "Can I see the ", suffix: "?" },
                { prefix: "This ", suffix: " is delicious." },
                { prefix: "I'd like to make a ", suffix: "." }
            ],
            excursions: [
                { prefix: "This ", suffix: " is very interesting." },
                { prefix: "The ", suffix: " is beautiful." },
                { prefix: "I want to visit the ", suffix: "." },
                { prefix: "The ", suffix: " is very old." },
                { prefix: "This ", suffix: " is famous." }
            ],
            leisure: [
                { prefix: "I love ", suffix: " in the pool." },
                { prefix: "The ", suffix: " is very relaxing." },
                { prefix: "I want to try ", suffix: "." },
                { prefix: "The ", suffix: " is very good." },
                { prefix: "I enjoy ", suffix: " in the mountains." }
            ],
            emergency: [
                { prefix: "This is an ", suffix: "!" },
                { prefix: "I need ", suffix: "!" },
                { prefix: "Call the ", suffix: "!" },
                { prefix: "I'm ", suffix: "." },
                { prefix: "This is ", suffix: "." }
            ]
        };

        const categorySentences = sentences[this.currentCategory] || sentences.planning;
        return categorySentences[this.currentWordIndex % categorySentences.length];
    }

    // Перевірка відповіді
    checkAnswer() {
        const userAnswer = this.practiceContainer.querySelector('.word-input').value.trim().toLowerCase();
        const correctWord = this.currentWords[this.currentWordIndex].word.toLowerCase();
        
        if (userAnswer === correctWord) {
            this.score++;
            this.showFeedback(true);
        } else {
            this.showFeedback(false, correctWord);
        }
        
        setTimeout(() => {
            this.currentWordIndex++;
            this.updateScore();
            this.showNextQuestion();
        }, 2000);
    }

    // Пропуск питання
    skipQuestion() {
        this.showFeedback(false, this.currentWords[this.currentWordIndex].word);
        
        setTimeout(() => {
            this.currentWordIndex++;
            this.updateScore();
            this.showNextQuestion();
        }, 2000);
    }

    // Показ зворотного зв'язку
    showFeedback(isCorrect, correctAnswer = '') {
        const input = this.practiceContainer.querySelector('.word-input');
        const checkBtn = this.practiceContainer.querySelector('.check-answer-btn');
        const skipBtn = this.practiceContainer.querySelector('.skip-btn');
        
        if (isCorrect) {
            input.style.borderColor = '#28a745';
            input.style.backgroundColor = '#d4edda';
            checkBtn.textContent = '✅ Правильно!';
        } else {
            input.style.borderColor = '#dc3545';
            input.style.backgroundColor = '#f8d7da';
            input.value = correctAnswer;
            checkBtn.textContent = `❌ Правильна відповідь: ${correctAnswer}`;
        }
        
        input.disabled = true;
        checkBtn.disabled = true;
        skipBtn.disabled = true;
    }

    // Оновлення рахунку
    updateScore() {
        this.practiceContainer.querySelector('.score').textContent = this.score;
    }

    // Показ результатів
    showResults() {
        const percentage = Math.round((this.score / this.totalQuestions) * 100);
        
        this.practiceContainer.querySelector('.correct-answers').textContent = this.score;
        this.practiceContainer.querySelector('.total-answers').textContent = this.totalQuestions;
        this.practiceContainer.querySelector('.percentage').textContent = percentage + '%';
        
        this.practiceContainer.querySelector('.question-container').classList.add('hidden');
        this.practiceContainer.querySelector('.practice-results').classList.remove('hidden');
    }

    // Перезапуск практики
    restartPractice() {
        this.currentWordIndex = 0;
        this.score = 0;
        this.updateScore();
        this.showNextQuestion();
    }

    // Закриття практики
    closePractice() {
        if (this.practiceContainer) {
            document.body.removeChild(this.practiceContainer);
            this.practiceContainer = null;
        }
    }

    // Отримання назви категорії
    getCategoryName(category) {
        const names = {
            planning: 'Планування',
            airport: 'Аеропорт',
            hotel: 'Готель',
            restaurant: 'Ресторани',
            excursions: 'Екскурсії',
            leisure: 'Відпочинок',
            emergency: 'Надзвичайні ситуації'
        };
        return names[category] || category;
    }
}

// Ініціалізація при завантаженні сторінки
document.addEventListener('DOMContentLoaded', () => {
    const practiceManager = new PracticeManager();
    
    // Додаємо обробники для кнопок практики
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('practice-btn')) {
            const category = e.target.dataset.category;
            practiceManager.initPractice(category);
        }
    });
}); 