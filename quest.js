const questSteps = [
    // 1. Аеропорт
    {
        text: 'You arrive at the airport. Your flight ___ (leave) at 10:00.',
        options: ['leaves', 'is leaving', 'will leave'],
        correct: 'leaves',
        explanation: 'Розклад — Present Simple.'
    },
    // 2. Літак
    {
        text: 'You ___ (wait) for boarding at the gate.',
        options: ['wait', 'are waiting', 'will wait'],
        correct: 'are waiting',
        explanation: 'Дія відбувається зараз — Present Continuous.'
    },
    // 3. Літак у повітрі
    {
        text: 'The plane ___ (fly) over France now.',
        options: ['flies', 'is flying', 'will fly'],
        correct: 'is flying',
        explanation: 'Дія відбувається зараз — Present Continuous.'
    },
    // 4. Таксі
    {
        text: 'After landing, you ___ (take) a taxi to the hotel.',
        options: ['take', 'are taking', 'will take'],
        correct: 'will take',
        explanation: 'План на майбутнє — Future Simple.'
    },
    // 5. Готель
    {
        text: 'You ___ (check in) at the hotel right now.',
        options: ['check in', 'are checking in', 'will check in'],
        correct: 'are checking in',
        explanation: 'Дія відбувається зараз — Present Continuous.'
    },
    // 6. Вечеря
    {
        text: 'Tonight, you ___ (have) dinner at a local restaurant.',
        options: ['have', 'are having', 'will have'],
        correct: 'will have',
        explanation: 'План на майбутнє — Future Simple.'
    },
    // 7. Ресторан
    {
        text: 'The waiter ___ (bring) your order now.',
        options: ['brings', 'is bringing', 'will bring'],
        correct: 'is bringing',
        explanation: 'Дія відбувається зараз — Present Continuous.'
    },
    // 8. Музей
    {
        text: 'Tomorrow, you ___ (visit) the British Museum.',
        options: ['visit', 'are visiting', 'will visit'],
        correct: 'will visit',
        explanation: 'План на майбутнє — Future Simple.'
    },
    // 9. Музей зараз
    {
        text: 'You ___ (look) at ancient artifacts.',
        options: ['look', 'are looking', 'will look'],
        correct: 'are looking',
        explanation: 'Дія відбувається зараз — Present Continuous.'
    },
    // 10. Парк
    {
        text: 'Every morning, you ___ (walk) in Hyde Park.',
        options: ['walk', 'are walking', 'will walk'],
        correct: 'walk',
        explanation: 'Регулярна дія — Present Simple.'
    },
    // 11. Покупки
    {
        text: 'You ___ (buy) souvenirs for your friends now.',
        options: ['buy', 'are buying', 'will buy'],
        correct: 'are buying',
        explanation: 'Дія відбувається зараз — Present Continuous.'
    },
    // 12. Знайомство
    {
        text: 'You ___ (meet) a new friend at the café.',
        options: ['meet', 'are meeting', 'will meet'],
        correct: 'meet',
        explanation: 'Факт, що відбувається — Present Simple.'
    },
    // 13. Втрачена річ
    {
        text: 'Oh no! You ___ (can not find) your passport.',
        options: ['can not find', 'are not finding', 'will not find'],
        correct: 'can not find',
        explanation: 'Стан — Present Simple.'
    },
    // 14. Питання про дорогу
    {
        text: 'You ask: "Excuse me, how ___ I ___ (get) to the station?"',
        options: ['do / get', 'am / getting', 'will / get'],
        correct: 'do / get',
        explanation: 'Загальне питання — Present Simple.'
    },
    // 15. Плани на завтра
    {
        text: 'Tomorrow, you ___ (go) to the Tower of London.',
        options: ['go', 'are going', 'will go'],
        correct: 'will go',
        explanation: 'План на майбутнє — Future Simple.'
    },
    // 16. Несподівана подія
    {
        text: 'Suddenly, it ___ (start) to rain.',
        options: ['starts', 'is starting', 'will start'],
        correct: 'starts',
        explanation: 'Факт, що відбувається — Present Simple.'
    },
    // 17. Повернення додому
    {
        text: 'Your train ___ (depart) at 6 PM.',
        options: ['departs', 'is departing', 'will depart'],
        correct: 'departs',
        explanation: 'Розклад — Present Simple.'
    },
    // 18. Враження
    {
        text: 'You ___ (enjoy) your trip a lot.',
        options: ['enjoy', 'are enjoying', 'will enjoy'],
        correct: 'enjoy',
        explanation: 'Стан, загальна правда — Present Simple.'
    },
    // 19. Друзі
    {
        text: 'Your friends ___ (wait) for you at the station now.',
        options: ['wait', 'are waiting', 'will wait'],
        correct: 'are waiting',
        explanation: 'Дія відбувається зараз — Present Continuous.'
    },
    // 20. Фінал
    {
        text: 'You ___ (promise) to come back to London one day.',
        options: ['promise', 'are promising', 'will promise'],
        correct: 'promise',
        explanation: 'Обіцянка, загальна дія — Present Simple.'
    }
];

let questStep = 0;
let questScore = 0;

function renderQuestStep() {
    const container = document.getElementById('quest-container');
    if (questStep >= questSteps.length) {
        renderQuestResult();
        return;
    }
    const step = questSteps[questStep];
    container.innerHTML = `
        <div class="quest-progress">Крок ${questStep + 1} з ${questSteps.length}</div>
        <div class="quest-question">${step.text}</div>
        <div class="quest-options">
            ${step.options.map(opt => `<button class="quest-option-btn" data-opt="${opt}">${opt}</button>`).join('')}
        </div>
        <div class="quest-feedback" id="quest-feedback"></div>
    `;
    document.querySelectorAll('.quest-option-btn').forEach(btn => {
        btn.onclick = function() {
            handleQuestAnswer(this.dataset.opt);
        };
    });
}

function handleQuestAnswer(selected) {
    const step = questSteps[questStep];
    const feedback = document.getElementById('quest-feedback');
    if (selected === step.correct) {
        feedback.innerHTML = `<span class='quest-correct'>✅ Вірно!</span> <span>${step.explanation}</span>`;
        questScore++;
    } else {
        feedback.innerHTML = `<span class='quest-wrong'>❌ Ні!</span> <span>Правильна відповідь: <b>${step.correct}</b>. ${step.explanation}</span>`;
    }
    document.querySelectorAll('.quest-option-btn').forEach(btn => btn.disabled = true);
    setTimeout(() => {
        questStep++;
        renderQuestStep();
    }, 1400);
}

function renderQuestResult() {
    const container = document.getElementById('quest-container');
    let msg = '';
    if (questScore === questSteps.length) {
        msg = '🎉 Відмінно! Ви впоралися з усіма ситуаціями!';
    } else if (questScore >= Math.floor(questSteps.length * 0.7)) {
        msg = '👍 Добре! Ви впоралися з більшістю ситуацій.';
    } else {
        msg = '📚 Спробуйте ще раз, щоб краще закріпити часи!';
    }
    container.innerHTML = `
        <div class="quest-result">
            <div class="quest-score">Ваш результат: <b>${questScore} / ${questSteps.length}</b></div>
            <div class="quest-msg">${msg}</div>
            <button class="btn btn-primary" id="restart-quest-btn">Спробувати ще раз</button>
        </div>
    `;
    document.getElementById('restart-quest-btn').onclick = startQuest;
}

function startQuest() {
    questStep = 0;
    questScore = 0;
    renderQuestStep();
}

document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('start-quest-btn');
    if (btn) btn.onclick = startQuest;
}); 