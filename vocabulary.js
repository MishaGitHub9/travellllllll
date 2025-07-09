// Vocabulary page functionality

// Immediate function exports for mobile compatibility
(function() {
    'use strict';
    
    // Define functions first, export later
    let functionsToExport = {};
    
    // Store reference for later export
    window.VOCABULARY_EXPORTS = functionsToExport;
    
    console.log('🚀 Vocabulary.js starting to load...');
})();

// Vocabulary data for each situation
const vocabularyData = {
    planning: {
        title: "Планування подорожі",
        icon: "📋",
        words: [
            { word: "booking", transcription: "[букінг]", translation: "бронювання" },
            { word: "reservation", transcription: "[резервейшн]", translation: "резервація" },
            { word: "itinerary", transcription: "[айтінері]", translation: "маршрут" },
            { word: "schedule", transcription: "[шедьюл]", translation: "розклад" },
            { word: "destination", transcription: "[дестінейшн]", translation: "пункт призначення" },
            { word: "departure", transcription: "[діпарчер]", translation: "відправлення" },
            { word: "arrival", transcription: "[ерайвл]", translation: "прибуття" },
            { word: "duration", transcription: "[дьюрейшн]", translation: "тривалість" },
            { word: "route", transcription: "[рут]", translation: "маршрут" },
            { word: "trip", transcription: "[тріп]", translation: "подорож" },
            { word: "journey", transcription: "[джорні]", translation: "мандрівка" },
            { word: "vacation", transcription: "[векейшн]", translation: "відпустка" },
            { word: "holiday", transcription: "[холідей]", translation: "свято, відпочинок" },
            { word: "tour", transcription: "[тур]", translation: "тур" },
            { word: "excursion", transcription: "[екскершн]", translation: "екскурсія" },
            { word: "guide", transcription: "[гайд]", translation: "гід" },
            { word: "passport", transcription: "[паспорт]", translation: "паспорт" },
            { word: "visa", transcription: "[віза]", translation: "віза" },
            { word: "insurance", transcription: "[іншуренс]", translation: "страхування" },
            { word: "currency", transcription: "[керенсі]", translation: "валюта" },
            { word: "budget", transcription: "[баджет]", translation: "бюджет" },
            { word: "hotel", transcription: "[хотел]", translation: "готель" },
            { word: "hostel", transcription: "[хостел]", translation: "хостел" },
            { word: "luggage", transcription: "[лагідж]", translation: "багаж" },
            { word: "suitcase", transcription: "[суткейс]", translation: "валіза" }
        ],
        phrases: [
            { phrase: "I'd like to book a room", translation: "Я хотів би забронювати кімнату" },
            { phrase: "What's the best time to visit?", translation: "Коли найкраще відвідати?" },
            { phrase: "How much does it cost?", translation: "Скільки це коштує?" },
            { phrase: "Do I need a visa?", translation: "Чи потрібна мені віза?" },
            { phrase: "What's included in the price?", translation: "Що включено в ціну?" },
            { phrase: "Can you recommend a good hotel?", translation: "Чи можете порекомендувати хороший готель?" },
            { phrase: "Where can I exchange money?", translation: "Де я можу обміняти гроші?" },
            { phrase: "What's the weather like?", translation: "Яка там погода?" },
            { phrase: "How long is the flight?", translation: "Скільки триває політ?" },
            { phrase: "I need travel insurance", translation: "Мені потрібна туристична страховка" },
            { phrase: "Can I cancel my booking?", translation: "Чи можу я скасувати бронювання?" },
            { phrase: "What documents do I need?", translation: "Які документи мені потрібні?" },
            { phrase: "Is there a direct flight?", translation: "Чи є прямий рейс?" },
            { phrase: "What's the departure time?", translation: "О котрій час відправлення?" },
            { phrase: "How far is it from the airport?", translation: "Як далеко це від аеропорту?" }
        ]
    },
    airport: {
        title: "В аеропорту",
        icon: "✈️",
        words: [
            { word: "airport", transcription: "[еапорт]", translation: "аеропорт" },
            { word: "flight", transcription: "[флайт]", translation: "рейс" },
            { word: "boarding pass", transcription: "[бордінг пас]", translation: "посадочний квиток" },
            { word: "gate", transcription: "[гейт]", translation: "вихід на посадку" },
            { word: "check-in", transcription: "[чек ін]", translation: "реєстрація" },
            { word: "baggage", transcription: "[бегідж]", translation: "багаж" },
            { word: "luggage", transcription: "[лагідж]", translation: "багаж" },
            { word: "suitcase", transcription: "[суткейс]", translation: "валіза" },
            { word: "carry-on", transcription: "[кері он]", translation: "ручна поклажа" },
            { word: "security", transcription: "[сікьюріті]", translation: "безпека" },
            { word: "customs", transcription: "[кастмз]", translation: "митниця" },
            { word: "passport control", transcription: "[паспорт контрол]", translation: "паспортний контроль" },
            { word: "delay", transcription: "[ділей]", translation: "затримка" },
            { word: "cancelled", transcription: "[кенселд]", translation: "скасований" },
            { word: "departure board", transcription: "[діпарче борд]", translation: "табло відправлень" },
            { word: "arrival board", transcription: "[ерайвл борд]", translation: "табло прибуттів" },
            { word: "terminal", transcription: "[термінал]", translation: "термінал" },
            { word: "runway", transcription: "[ранвей]", translation: "злітна смуга" },
            { word: "pilot", transcription: "[пайлет]", translation: "пілот" },
            { word: "flight attendant", transcription: "[флайт етендент]", translation: "бортпровідник" },
            { word: "seat", transcription: "[сіт]", translation: "місце" },
            { word: "window seat", transcription: "[віндоу сіт]", translation: "місце біля вікна" }
        ],
        phrases: [
            { phrase: "Where is check-in?", translation: "Де реєстрація?" },
            { phrase: "I'd like a window seat", translation: "Я хотів би місце біля вікна" },
            { phrase: "Is my flight on time?", translation: "Мій рейс вчасно?" },
            { phrase: "Where is gate 5?", translation: "Де вихід 5?" },
            { phrase: "How much can I carry on?", translation: "Скільки я можу взяти в ручну поклажу?" },
            { phrase: "My luggage is missing", translation: "Мій багаж зник" },
            { phrase: "I need to declare this", translation: "Мені потрібно задекларувати це" },
            { phrase: "Is this the line for security?", translation: "Це черга на контроль безпеки?" },
            { phrase: "When do we board?", translation: "Коли ми садимося?" },
            { phrase: "My flight is delayed", translation: "Мій рейс затримується" },
            { phrase: "Can I upgrade my seat?", translation: "Чи можу я покращити своє місце?" },
            { phrase: "Where can I find a taxi?", translation: "Де я можу знайти таксі?" },
            { phrase: "Is there free wifi?", translation: "Чи є безкоштовний wifi?" },
            { phrase: "Where is the baggage claim?", translation: "Де отримання багажу?" },
            { phrase: "I lost my boarding pass", translation: "Я загубив свій посадочний талон" },
            { phrase: "What terminal is my flight?", translation: "В якому терміналі мій рейс?" },
            { phrase: "The flight is boarding now", translation: "Зараз відбувається посадка на рейс" },
            { phrase: "Please fasten your seatbelt", translation: "Будь ласка, пристебніть ремінь безпеки" }
        ]
    },
    hotel: {
        title: "В готелі",
        icon: "🏨",
        words: [
            { word: "hotel", transcription: "[готел]", translation: "готель" },
            { word: "reservation", transcription: "[резервейшн]", translation: "бронювання" },
            { word: "reception", transcription: "[рісепшн]", translation: "реєстрація" },
            { word: "room", transcription: "[рум]", translation: "кімната" },
            { word: "key card", transcription: "[кі кард]", translation: "ключ-карта" },
            { word: "check-in", transcription: "[чек ін]", translation: "заселення" },
            { word: "check-out", transcription: "[чек аут]", translation: "виселення" },
            { word: "single room", transcription: "[сінгл рум]", translation: "одномісний номер" },
            { word: "double room", transcription: "[дабл рум]", translation: "двомісний номер" },
            { word: "suite", transcription: "[світ]", translation: "люкс" },
            { word: "breakfast", transcription: "[брекфаст]", translation: "сніданок" },
            { word: "elevator", transcription: "[елівейтор]", translation: "ліфт" },
            { word: "floor", transcription: "[флор]", translation: "поверх" },
            { word: "towel", transcription: "[тауел]", translation: "рушник" },
            { word: "blanket", transcription: "[бленкет]", translation: "ковдра" },
            { word: "pillow", transcription: "[пілоу]", translation: "подушка" },
            { word: "bathroom", transcription: "[басрум]", translation: "ванна кімната" },
            { word: "shower", transcription: "[шауер]", translation: "душ" },
            { word: "air conditioning", transcription: "[еа кондишнінг]", translation: "кондиціонер" },
            { word: "wifi", transcription: "[вайфай]", translation: "вайфай" },
            { word: "cleaning", transcription: "[клінинг]", translation: "прибирання" },
            { word: "receptionist", transcription: "[рісепшніст]", translation: "адміністратор" },
            { word: "lobby", transcription: "[лобі]", translation: "вестибюль" },
            { word: "service", transcription: "[сервіс]", translation: "сервіс" },
            { word: "laundry", transcription: "[лондрі]", translation: "пральня" },
            { word: "safe", transcription: "[сейф]", translation: "сейф" },
            { word: "view", transcription: "[в'ю]", translation: "вид" }
        ],
        phrases: [
            { phrase: "I have a reservation", translation: "У мене є бронювання" },
            { phrase: "Can I check in?", translation: "Можна заселитися?" },
            { phrase: "What time is breakfast?", translation: "О котрій сніданок?" },
            { phrase: "Can I have the wifi password?", translation: "Можна пароль від вайфаю?" },
            { phrase: "Is breakfast included?", translation: "Сніданок включено?" },
            { phrase: "I need more towels", translation: "Мені потрібно більше рушників" },
            { phrase: "Can I have a wake-up call?", translation: "Можна замовити дзвінок для пробудження?" },
            { phrase: "Where is the elevator?", translation: "Де знаходиться ліфт?" },
            { phrase: "Can I get a late check-out?", translation: "Можна пізніше виселення?" },
            { phrase: "My room is not clean", translation: "Моя кімната не прибрана" },
            { phrase: "The air conditioning isn't working", translation: "Кондиціонер не працює" },
            { phrase: "Can I change my room?", translation: "Можна змінити кімнату?" },
            { phrase: "Is there a laundry service?", translation: "Є послуга прання?" },
            { phrase: "Where is the reception?", translation: "Де знаходиться рецепція?" },
            { phrase: "Can I leave my luggage here?", translation: "Можна залишити багаж тут?" },
            { phrase: "How do I get to my room?", translation: "Як пройти до моєї кімнати?" },
            { phrase: "Is there a safe in the room?", translation: "У номері є сейф?" },
            { phrase: "Can I have an extra pillow?", translation: "Можна додаткову подушку?" },
            { phrase: "What is the view from the room?", translation: "Який вигляд з кімнати?" },
            { phrase: "Where can I park my car?", translation: "Де можна припаркувати машину?" }
        ]
    },
    restaurant: {
        title: "В ресторані",
        icon: "🍽️",
        words: [
            { word: "restaurant", transcription: "[рестарант]", translation: "ресторан" },
            { word: "menu", transcription: "[меню]", translation: "меню" },
            { word: "waiter", transcription: "[вейтр]", translation: "офіціант" },
            { word: "waitress", transcription: "[вейтрес]", translation: "офіціантка" },
            { word: "table", transcription: "[тейбл]", translation: "стіл" },
            { word: "reservation", transcription: "[резервейшн]", translation: "бронювання" },
            { word: "order", transcription: "[ордер]", translation: "замовлення" },
            { word: "bill", transcription: "[біл]", translation: "рахунок" },
            { word: "tip", transcription: "[тіп]", translation: "чайові" },
            { word: "dish", transcription: "[діш]", translation: "страва" },
            { word: "appetizer", transcription: "[епетайзер]", translation: "закуска" },
            { word: "main course", transcription: "[мейн коурс]", translation: "основна страва" },
            { word: "dessert", transcription: "[дезерт]", translation: "десерт" },
            { word: "drink", transcription: "[дрінк]", translation: "напій" },
            { word: "water", transcription: "[вотер]", translation: "вода" },
            { word: "juice", transcription: "[джус]", translation: "сік" },
            { word: "wine", transcription: "[вайн]", translation: "вино" },
            { word: "beer", transcription: "[бір]", translation: "пиво" },
            { word: "fork", transcription: "[форк]", translation: "виделка" },
            { word: "knife", transcription: "[найф]", translation: "ніж" },
            { word: "spoon", transcription: "[спун]", translation: "ложка" },
            { word: "napkin", transcription: "[непкін]", translation: "серветка" },
            { word: "salt", transcription: "[солт]", translation: "сіль" },
            { word: "pepper", transcription: "[пепер]", translation: "перець" },
            { word: "bread", transcription: "[бред]", translation: "хліб" },
            { word: "soup", transcription: "[суп]", translation: "суп" },
            { word: "salad", transcription: "[салад]", translation: "салат" },
            { word: "meat", transcription: "[міт]", translation: "м'ясо" },
            { word: "fish", transcription: "[фіш]", translation: "риба" },
            { word: "vegetarian", transcription: "[веджетеріан]", translation: "вегетаріанець" }
        ],
        phrases: [
            { phrase: "A table for two, please", translation: "Стіл на двох, будь ласка" },
            { phrase: "Can I see the menu?", translation: "Можна меню?" },
            { phrase: "I would like to order", translation: "Я хотів би зробити замовлення" },
            { phrase: "What do you recommend?", translation: "Що ви порекомендуєте?" },
            { phrase: "Is this dish vegetarian?", translation: "Ця страва вегетаріанська?" },
            { phrase: "Can I have the bill, please?", translation: "Можна рахунок, будь ласка?" },
            { phrase: "Is service included?", translation: "Чайові включені?" },
            { phrase: "Can I have some water?", translation: "Можна трохи води?" },
            { phrase: "I am allergic to nuts", translation: "У мене алергія на горіхи" },
            { phrase: "No onions, please", translation: "Без цибулі, будь ласка" },
            { phrase: "Can I have this to go?", translation: "Можна це з собою?" },
            { phrase: "The food is delicious", translation: "Їжа смачна" },
            { phrase: "Could we have some bread?", translation: "Можна трохи хліба?" },
            { phrase: "Do you have a kids menu?", translation: "У вас є дитяче меню?" },
            { phrase: "Can I pay by card?", translation: "Можна оплатити карткою?" },
            { phrase: "Is there a table available?", translation: "Є вільний стіл?" },
            { phrase: "I would like a glass of wine", translation: "Я хотів би келих вина" },
            { phrase: "Can I get the wifi password?", translation: "Можна пароль від вайфаю?" },
            { phrase: "Could you bring the dessert menu?", translation: "Можна меню десертів?" },
            { phrase: "Can I have a receipt?", translation: "Можна чек?" },
            { phrase: "Excuse me, we are ready to order", translation: "Вибачте, ми готові замовити" },
            { phrase: "Could you pack this for me?", translation: "Можете це запакувати для мене?" },
            { phrase: "Is there a vegetarian option?", translation: "Є вегетаріанський варіант?" },
            { phrase: "Can I have a coffee?", translation: "Можна каву?" }
        ]
    },
    transport: {
        title: "Транспорт",
        icon: "🚌",
        words: [
            { word: "bus", transcription: "[бас]", translation: "автобус" },
            { word: "train", transcription: "[трейн]", translation: "потяг" },
            { word: "tram", transcription: "[трем]", translation: "трамвай" },
            { word: "metro", transcription: "[метро]", translation: "метро" },
            { word: "taxi", transcription: "[таксі]", translation: "таксі" },
            { word: "ticket", transcription: "[тікет]", translation: "квиток" },
            { word: "station", transcription: "[стейшн]", translation: "станція" },
            { word: "platform", transcription: "[платформ]", translation: "платформа" },
            { word: "stop", transcription: "[стоп]", translation: "зупинка" },
            { word: "route", transcription: "[рут]", translation: "маршрут" },
            { word: "driver", transcription: "[драйвер]", translation: "водій" },
            { word: "passenger", transcription: "[пасенджер]", translation: "пасажир" },
            { word: "departure", transcription: "[діпарче]", translation: "відправлення" },
            { word: "arrival", transcription: "[ерайвал]", translation: "прибуття" },
            { word: "schedule", transcription: "[скеджул]", translation: "розклад" },
            { word: "fare", transcription: "[фер]", translation: "вартість проїзду" },
            { word: "change", transcription: "[чейндж]", translation: "пересадка" },
            { word: "seat", transcription: "[сіт]", translation: "місце" },
            { word: "car", transcription: "[кар]", translation: "автомобіль" },
            { word: "bicycle", transcription: "[байсикл]", translation: "велосипед" },
            { word: "motorcycle", transcription: "[мотоцикл]", translation: "мотоцикл" },
            { word: "parking", transcription: "[паркінг]", translation: "паркінг" },
            { word: "ticket machine", transcription: "[тікет машін]", translation: "квитковий автомат" },
            { word: "conductor", transcription: "[кондактор]", translation: "кондуктор" }
        ],
        phrases: [
            { phrase: "Where is the bus stop?", translation: "Де зупинка автобуса?" },
            { phrase: "How much is a ticket?", translation: "Скільки коштує квиток?" },
            { phrase: "Which platform for train to Kyiv?", translation: "Яка платформа на потяг до Києва?" },
            { phrase: "When does the next tram leave?", translation: "Коли відправляється наступний трамвай?" },
            { phrase: "Is this seat taken?", translation: "Це місце зайняте?" },
            { phrase: "Can I buy a ticket here?", translation: "Можна купити квиток тут?" },
            { phrase: "Where do I change trains?", translation: "Де пересадка на інший потяг?" },
            { phrase: "How long is the journey?", translation: "Скільки триває поїздка?" },
            { phrase: "Does this bus go to the center?", translation: "Цей автобус їде в центр?" },
            { phrase: "Can you call a taxi for me?", translation: "Можете викликати таксі для мене?" },
            { phrase: "Is there a night bus?", translation: "Є нічний автобус?" },
            { phrase: "Where is the ticket office?", translation: "Де каса?" },
            { phrase: "What time is the last train?", translation: "О котрій останній потяг?" },
            { phrase: "Do I need to validate my ticket?", translation: "Потрібно компостувати квиток?" },
            { phrase: "Is this the right direction?", translation: "Це правильний напрямок?" },
            { phrase: "How do I get to the airport?", translation: "Як дістатися до аеропорту?" }
        ]
    },
    shopping: {
        title: "Покупки",
        icon: "🛍️",
        words: [
            { word: "shop", transcription: "[шоп]", translation: "магазин" },
            { word: "store", transcription: "[стор]", translation: "крамниця" },
            { word: "mall", transcription: "[мол]", translation: "торговий центр" },
            { word: "market", transcription: "[маркет]", translation: "ринок" },
            { word: "cashier", transcription: "[кешір]", translation: "касира" },
            { word: "price", transcription: "[прайс]", translation: "ціна" },
            { word: "discount", transcription: "[діскаунт]", translation: "знижка" },
            { word: "sale", transcription: "[сейл]", translation: "розпродаж" },
            { word: "receipt", transcription: "[рісіт]", translation: "чек" },
            { word: "bag", transcription: "[бег]", translation: "пакет" },
            { word: "gift", transcription: "[гіфт]", translation: "подарунок" },
            { word: "souvenir", transcription: "[сувенір]", translation: "сувенір" },
            { word: "credit card", transcription: "[кредит кард]", translation: "кредитна картка" },
            { word: "cash", transcription: "[кеш]", translation: "готівка" },
            { word: "change", transcription: "[чейндж]", translation: "решта" },
            { word: "fitting room", transcription: "[фітінг рум]", translation: "примірочна" },
            { word: "size", transcription: "[сайз]", translation: "розмір" },
            { word: "brand", transcription: "[бренд]", translation: "бренд" },
            { word: "product", transcription: "[продакт]", translation: "товар" },
            { word: "customer", transcription: "[кастомер]", translation: "покупець" },
            { word: "queue", transcription: "[к'ю]", translation: "черга" },
            { word: "open", transcription: "[оупен]", translation: "відкрито" },
            { word: "closed", transcription: "[клоузд]", translation: "зачинено" },
            { word: "warranty", transcription: "[воранті]", translation: "гарантія" },
            { word: "exchange", transcription: "[іксчейндж]", translation: "обмін" }
        ],
        phrases: [
            { phrase: "How much does this cost?", translation: "Скільки це коштує?" },
            { phrase: "Do you have this in another size?", translation: "У вас є це в іншому розмірі?" },
            { phrase: "Can I try this on?", translation: "Можна приміряти це?" },
            { phrase: "Is there a discount?", translation: "Є знижка?" },
            { phrase: "Can I pay by card?", translation: "Можна оплатити карткою?" },
            { phrase: "Where is the fitting room?", translation: "Де примірочна?" },
            { phrase: "Can I have a bag?", translation: "Можна пакет?" },
            { phrase: "Do you have a gift wrap?", translation: "Є подарункова упаковка?" },
            { phrase: "Can I return this?", translation: "Можна повернути це?" },
            { phrase: "Is this on sale?", translation: "Це зі знижкою?" },
            { phrase: "Where is the cashier?", translation: "Де каса?" },
            { phrase: "Can I get a receipt?", translation: "Можна чек?" },
            { phrase: "What are your opening hours?", translation: "Який у вас графік роботи?" },
            { phrase: "Do you have this in another color?", translation: "Є це в іншому кольорі?" },
            { phrase: "Can I exchange this?", translation: "Можна обміняти це?" },
            { phrase: "Is there a warranty?", translation: "Є гарантія?" },
            { phrase: "Where can I find souvenirs?", translation: "Де можна знайти сувеніри?" },
            { phrase: "Can I pay in cash?", translation: "Можна оплатити готівкою?" },
            { phrase: "Is there a queue?", translation: "Є черга?" },
            { phrase: "Is this shop open?", translation: "Цей магазин відкритий?" },
            { phrase: "Do you have a loyalty card?", translation: "У вас є картка лояльності?" },
            { phrase: "Can I get a refund?", translation: "Можна повернути гроші?" }
        ]
    },
    directions: {
        title: "Орієнтування",
        icon: "🗺️",
        words: [
            { word: "map", transcription: "[меп]", translation: "карта" },
            { word: "street", transcription: "[стріт]", translation: "вулиця" },
            { word: "avenue", transcription: "[евеню]", translation: "проспект" },
            { word: "square", transcription: "[сквер]", translation: "площа" },
            { word: "corner", transcription: "[корнер]", translation: "кут" },
            { word: "intersection", transcription: "[інтерсекшн]", translation: "перехрестя" },
            { word: "crosswalk", transcription: "[кросвок]", translation: "пішохідний перехід" },
            { word: "traffic light", transcription: "[трафік лайт]", translation: "світлофор" },
            { word: "sign", transcription: "[сайн]", translation: "знак" },
            { word: "direction", transcription: "[дайрекшн]", translation: "напрямок" },
            { word: "left", transcription: "[лефт]", translation: "ліворуч" },
            { word: "right", transcription: "[райт]", translation: "праворуч" },
            { word: "straight", transcription: "[стрейт]", translation: "прямо" },
            { word: "behind", transcription: "[біхайнд]", translation: "позаду" },
            { word: "in front of", transcription: "[ін фронт ов]", translation: "попереду" },
            { word: "near", transcription: "[ніа]", translation: "поруч" },
            { word: "far", transcription: "[фар]", translation: "далеко" },
            { word: "opposite", transcription: "[опозит]", translation: "навпроти" },
            { word: "next to", transcription: "[некст ту]", translation: "поруч з" },
            { word: "between", transcription: "[бітвін]", translation: "між" }
        ],
        phrases: [
            { phrase: "How do I get to the city center?", translation: "Як дістатися до центру міста?" },
            { phrase: "Where is the nearest metro station?", translation: "Де найближча станція метро?" },
            { phrase: "Is it far from here?", translation: "Це далеко звідси?" },
            { phrase: "Can you show me on the map?", translation: "Можете показати на карті?" },
            { phrase: "Go straight ahead", translation: "Ідіть прямо" },
            { phrase: "Turn left at the corner", translation: "Поверніть ліворуч на розі" },
            { phrase: "Turn right at the traffic light", translation: "Поверніть праворуч на світлофорі" },
            { phrase: "It's next to the bank", translation: "Це поруч з банком" },
            { phrase: "It's opposite the park", translation: "Це навпроти парку" },
            { phrase: "Is this the right way?", translation: "Це правильний шлях?" },
            { phrase: "How long does it take to walk there?", translation: "Скільки йти пішки?" },
            { phrase: "Where is the crosswalk?", translation: "Де пішохідний перехід?" },
            { phrase: "Is it near here?", translation: "Це поруч?" },
            { phrase: "Which bus goes to the station?", translation: "Який автобус їде до станції?" },
            { phrase: "Can you write down the address?", translation: "Можете записати адресу?" },
            { phrase: "Is there a shortcut?", translation: "Є коротший шлях?" },
            { phrase: "Where am I on this map?", translation: "Де я на цій карті?" },
            { phrase: "How do I get to the museum?", translation: "Як дістатися до музею?" }
        ]
    },
    medical: {
        title: "Медична допомога",
        icon: "🏥",
        words: [
            { word: "doctor", transcription: "[доктор]", translation: "лікар" },
            { word: "pharmacy", transcription: "[фармасі]", translation: "аптека" },
            { word: "medicine", transcription: "[медісін]", translation: "ліки" },
            { word: "prescription", transcription: "[пріскріпшн]", translation: "рецепт" },
            { word: "pain", transcription: "[пейн]", translation: "біль" },
            { word: "headache", transcription: "[хедейк]", translation: "головний біль" },
            { word: "fever", transcription: "[фівер]", translation: "жар" },
            { word: "cough", transcription: "[коф]", translation: "кашель" },
            { word: "cold", transcription: "[колд]", translation: "застуда" },
            { word: "allergy", transcription: "[алерджі]", translation: "алергія" },
            { word: "injury", transcription: "[інджері]", translation: "травма" },
            { word: "ambulance", transcription: "[ембюленс]", translation: "швидка допомога" },
            { word: "hospital", transcription: "[хоспітал]", translation: "лікарня" },
            { word: "clinic", transcription: "[клінік]", translation: "клініка" },
            { word: "insurance", transcription: "[іншуренс]", translation: "страхування" },
            { word: "appointment", transcription: "[епойнтмент]", translation: "запис на прийом" },
            { word: "emergency", transcription: "[емердженсі]", translation: "надзвичайна ситуація" },
            { word: "bandage", transcription: "[бендідж]", translation: "бинт" }
        ],
        phrases: [
            { phrase: "I need a doctor", translation: "Мені потрібен лікар" },
            { phrase: "Where is the nearest pharmacy?", translation: "Де найближча аптека?" },
            { phrase: "I have a headache", translation: "У мене болить голова" },
            { phrase: "Do you have something for a cold?", translation: "У вас є щось від застуди?" },
            { phrase: "I am allergic to penicillin", translation: "У мене алергія на пеніцилін" },
            { phrase: "Can I get this medicine without a prescription?", translation: "Можна ці ліки без рецепта?" },
            { phrase: "I need an ambulance", translation: "Мені потрібна швидка допомога" },
            { phrase: "Where is the hospital?", translation: "Де лікарня?" },
            { phrase: "I have travel insurance", translation: "У мене є туристична страховка" },
            { phrase: "I have an appointment", translation: "У мене запис на прийом" },
            { phrase: "Is there a clinic nearby?", translation: "Є клініка поруч?" },
            { phrase: "Can you help me?", translation: "Ви можете мені допомогти?" }
        ]
    },
    entertainment: {
        title: "Розваги",
        icon: "🎭",
        words: [
            { word: "entertainment", transcription: "[ентертейнмент]", translation: "розваги" },
            { word: "excursion", transcription: "[екскьоршн]", translation: "екскурсія" },
            { word: "tour", transcription: "[тур]", translation: "тур" },
            { word: "museum", transcription: "[м'юзіум]", translation: "музей" },
            { word: "theater", transcription: "[сіетер]", translation: "театр" },
            { word: "cinema", transcription: "[сінема]", translation: "кінотеатр" },
            { word: "concert", transcription: "[консерт]", translation: "концерт" },
            { word: "festival", transcription: "[фестивал]", translation: "фестиваль" },
            { word: "event", transcription: "[івент]", translation: "подія" },
            { word: "ticket", transcription: "[тікет]", translation: "квиток" },
            { word: "performance", transcription: "[перформенс]", translation: "вистава" },
            { word: "gallery", transcription: "[гелері]", translation: "галерея" },
            { word: "exhibition", transcription: "[екзибішн]", translation: "виставка" },
            { word: "guide", transcription: "[гайд]", translation: "гід" },
            { word: "souvenir", transcription: "[сувенір]", translation: "сувенір" },
            { word: "photo", transcription: "[фото]", translation: "фото" },
            { word: "show", transcription: "[шоу]", translation: "шоу" },
            { word: "amusement park", transcription: "[ам'юзмент парк]", translation: "парк розваг" },
            { word: "zoo", transcription: "[зу]", translation: "зоопарк" },
            { word: "aquarium", transcription: "[акваріум]", translation: "акваріум" },
            { word: "boat trip", transcription: "[боут тріп]", translation: "прогулянка на човні" },
            { word: "sightseeing", transcription: "[сайтсіїнг]", translation: "огляд визначних місць" }
        ],
        phrases: [
            { phrase: "What events are happening today?", translation: "Які події сьогодні відбуваються?" },
            { phrase: "Where can I buy tickets?", translation: "Де можна купити квитки?" },
            { phrase: "Is there a guided tour?", translation: "Є екскурсія з гідом?" },
            { phrase: "What time does the show start?", translation: "О котрій починається шоу?" },
            { phrase: "How much is the entrance fee?", translation: "Скільки коштує вхід?" },
            { phrase: "Are photos allowed?", translation: "Можна фотографувати?" },
            { phrase: "Where is the museum?", translation: "Де музей?" },
            { phrase: "Is there a festival this week?", translation: "Є фестиваль цього тижня?" },
            { phrase: "Can I get a program?", translation: "Можна програму?" },
            { phrase: "How long is the performance?", translation: "Скільки триває вистава?" },
            { phrase: "Where is the nearest cinema?", translation: "Де найближчий кінотеатр?" },
            { phrase: "Is there a discount for students?", translation: "Є знижка для студентів?" },
            { phrase: "What is the best sightseeing tour?", translation: "Який найкращий тур по місту?" },
            { phrase: "Where can I buy souvenirs?", translation: "Де можна купити сувеніри?" },
            { phrase: "Is the amusement park open?", translation: "Парк розваг відкритий?" },
            { phrase: "Can I join the excursion?", translation: "Можна приєднатися до екскурсії?" },
            { phrase: "Where is the entrance?", translation: "Де вхід?" },
            { phrase: "What time does it close?", translation: "О котрій зачиняється?" },
            { phrase: "Is there a boat trip available?", translation: "Є прогулянка на човні?" }
        ]
    },
    money: {
        title: "Банк та гроші",
        icon: "💳",
        words: [
            { word: "bank", transcription: "[банк]", translation: "банк" },
            { word: "money", transcription: "[мані]", translation: "гроші" },
            { word: "cash", transcription: "[кеш]", translation: "готівка" },
            { word: "credit card", transcription: "[кредит кард]", translation: "кредитна картка" },
            { word: "debit card", transcription: "[дебіт кард]", translation: "дебетова картка" },
            { word: "ATM", transcription: "[ей ті ем]", translation: "банкомат" },
            { word: "exchange", transcription: "[іксчейндж]", translation: "обмін" },
            { word: "currency", transcription: "[каренсі]", translation: "валюта" },
            { word: "rate", transcription: "[рейт]", translation: "курс" },
            { word: "account", transcription: "[екаунт]", translation: "рахунок" },
            { word: "transfer", transcription: "[трансфер]", translation: "переказ" },
            { word: "deposit", transcription: "[депозит]", translation: "депозит" },
            { word: "withdraw", transcription: "[віздроу]", translation: "зняти гроші" },
            { word: "balance", transcription: "[беленс]", translation: "баланс" },
            { word: "fee", transcription: "[фі]", translation: "комісія" },
            { word: "safe", transcription: "[сейф]", translation: "сейф" }
        ],
        phrases: [
            { phrase: "Where is the nearest ATM?", translation: "Де найближчий банкомат?" },
            { phrase: "Can I exchange money here?", translation: "Можна обміняти гроші тут?" },
            { phrase: "What is the exchange rate?", translation: "Який курс обміну?" },
            { phrase: "Can I pay by card?", translation: "Можна оплатити карткою?" },
            { phrase: "I would like to withdraw cash", translation: "Я хотів би зняти готівку" },
            { phrase: "Is there a fee for this transaction?", translation: "Є комісія за цю операцію?" },
            { phrase: "Can I open a bank account?", translation: "Можна відкрити банківський рахунок?" },
            { phrase: "Where can I transfer money?", translation: "Де можна переказати гроші?" },
            { phrase: "Is my card accepted here?", translation: "Моя картка приймається тут?" },
            { phrase: "Can I check my balance?", translation: "Можна перевірити баланс?" },
            { phrase: "Where is the bank?", translation: "Де банк?" },
            { phrase: "Can I get a receipt?", translation: "Можна чек?" },
            { phrase: "Is there a safe in the room?", translation: "У номері є сейф?" },
            { phrase: "Can I deposit money?", translation: "Можна покласти гроші на рахунок?" }
        ]
    },
    communication: {
        title: "Комунікація",
        icon: "📱",
        words: [
            { word: "phone", transcription: "[фон]", translation: "телефон" },
            { word: "call", transcription: "[кол]", translation: "дзвінок" },
            { word: "message", transcription: "[месідж]", translation: "повідомлення" },
            { word: "internet", transcription: "[інтернет]", translation: "інтернет" },
            { word: "wifi", transcription: "[вайфай]", translation: "вайфай" },
            { word: "SIM card", transcription: "[сім кард]", translation: "SIM-картка" },
            { word: "number", transcription: "[намбер]", translation: "номер" },
            { word: "contact", transcription: "[контакт]", translation: "контакт" },
            { word: "email", transcription: "[імейл]", translation: "електронна пошта" },
            { word: "app", transcription: "[еп]", translation: "додаток" },
            { word: "chat", transcription: "[чат]", translation: "чат" },
            { word: "video call", transcription: "[відео кол]", translation: "відеодзвінок" },
            { word: "roaming", transcription: "[роумінг]", translation: "роумінг" },
            { word: "signal", transcription: "[сигнал]", translation: "сигнал" },
            { word: "charger", transcription: "[чарджер]", translation: "зарядний пристрій" },
            { word: "battery", transcription: "[бетері]", translation: "батарея" },
            { word: "data", transcription: "[дата]", translation: "дані" },
            { word: "password", transcription: "[пасворд]", translation: "пароль" },
            { word: "screen", transcription: "[скрін]", translation: "екран" }
        ],
        phrases: [
            { phrase: "Can I use your phone?", translation: "Можна скористатися вашим телефоном?" },
            { phrase: "What is your phone number?", translation: "Який у вас номер телефону?" },
            { phrase: "Is there free wifi here?", translation: "Тут є безкоштовний вайфай?" },
            { phrase: "Can I buy a SIM card?", translation: "Можна купити SIM-картку?" },
            { phrase: "Do you have internet access?", translation: "У вас є доступ до інтернету?" },
            { phrase: "Can I charge my phone here?", translation: "Можна зарядити телефон тут?" },
            { phrase: "What is the wifi password?", translation: "Який пароль від вайфаю?" },
            { phrase: "I have no signal", translation: "У мене немає сигналу" },
            { phrase: "Can I send a message?", translation: "Можна надіслати повідомлення?" },
            { phrase: "Is there a public phone?", translation: "Є громадський телефон?" },
            { phrase: "Can I make a call?", translation: "Можна зателефонувати?" },
            { phrase: "Do you use WhatsApp?", translation: "Ви користуєтесь WhatsApp?" },
            { phrase: "Can I connect to the internet?", translation: "Можна підключитися до інтернету?" },
            { phrase: "Is roaming available?", translation: "Роумінг доступний?" },
            { phrase: "Can I get your contact?", translation: "Можна ваш контакт?" }
        ]
    },
    emergency: {
        title: "Надзвичайні ситуації",
        icon: "🚨",
        words: [
            { word: "emergency", transcription: "[емердженсі]", translation: "надзвичайна ситуація" },
            { word: "help", transcription: "[хелп]", translation: "допомога" },
            { word: "police", transcription: "[поліс]", translation: "поліція" },
            { word: "fire", transcription: "[фаєр]", translation: "пожежа" },
            { word: "ambulance", transcription: "[ембюленс]", translation: "швидка допомога" },
            { word: "accident", transcription: "[ексідент]", translation: "аварія" },
            { word: "theft", transcription: "[тефт]", translation: "крадіжка" },
            { word: "lost", transcription: "[лост]", translation: "загублений" },
            { word: "danger", transcription: "[дейнджер]", translation: "небезпека" },
            { word: "safe", transcription: "[сейф]", translation: "безпечний" },
            { word: "injury", transcription: "[інджері]", translation: "травма" },
            { word: "firefighter", transcription: "[фаєрфайтер]", translation: "пожежник" },
            { word: "emergency exit", transcription: "[емердженсі егзит]", translation: "аварійний вихід" },
            { word: "first aid", transcription: "[ферст ейд]", translation: "перша допомога" },
            { word: "insurance", transcription: "[іншуренс]", translation: "страхування" }
        ],
        phrases: [
            { phrase: "Help! Call the police!", translation: "Допоможіть! Викличте поліцію!" },
            { phrase: "I need an ambulance", translation: "Мені потрібна швидка допомога" },
            { phrase: "There is a fire", translation: "Тут пожежа" },
            { phrase: "I have lost my passport", translation: "Я загубив паспорт" },
            { phrase: "My bag was stolen", translation: "Мій рюкзак вкрали" },
            { phrase: "Is everyone safe?", translation: "Всі в безпеці?" },
            { phrase: "Where is the emergency exit?", translation: "Де аварійний вихід?" },
            { phrase: "I had an accident", translation: "Я потрапив у аварію" },
            { phrase: "Can you help me?", translation: "Ви можете мені допомогти?" },
            { phrase: "What is the emergency number?", translation: "Який номер екстреної служби?" }
        ]
    },
    weather: {
        title: "Погода та час",
        icon: "🌤️",
        words: [
            { word: "weather", transcription: "[везер]", translation: "погода" },
            { word: "sun", transcription: "[сан]", translation: "сонце" },
            { word: "rain", transcription: "[рейн]", translation: "дощ" },
            { word: "cloud", transcription: "[клауд]", translation: "хмара" },
            { word: "wind", transcription: "[вінд]", translation: "вітер" },
            { word: "snow", transcription: "[сноу]", translation: "сніг" },
            { word: "storm", transcription: "[сторм]", translation: "буря" },
            { word: "fog", transcription: "[фог]", translation: "туман" },
            { word: "temperature", transcription: "[темпераче]", translation: "температура" },
            { word: "degree", transcription: "[дігрі]", translation: "градус" },
            { word: "hot", transcription: "[хот]", translation: "спекотно" },
            { word: "cold", transcription: "[колд]", translation: "холодно" },
            { word: "warm", transcription: "[ворм]", translation: "тепло" },
            { word: "cool", transcription: "[кул]", translation: "прохолодно" },
            { word: "forecast", transcription: "[форкаст]", translation: "прогноз" },
            { word: "season", transcription: "[сізон]", translation: "сезон" },
            { word: "spring", transcription: "[спрінг]", translation: "весна" },
            { word: "summer", transcription: "[самер]", translation: "літо" },
            { word: "autumn", transcription: "[отумн]", translation: "осінь" },
            { word: "winter", transcription: "[вінтер]", translation: "зима" },
            { word: "time", transcription: "[тайм]", translation: "час" }
        ],
        phrases: [
            { phrase: "What is the weather like today?", translation: "Яка сьогодні погода?" },
            { phrase: "Is it going to rain?", translation: "Буде дощ?" },
            { phrase: "How hot is it?", translation: "Наскільки спекотно?" },
            { phrase: "What is the temperature?", translation: "Яка температура?" },
            { phrase: "Is it cold outside?", translation: "На вулиці холодно?" },
            { phrase: "Do I need an umbrella?", translation: "Потрібна парасоля?" },
            { phrase: "What time is it?", translation: "Котра година?" },
            { phrase: "When does the sun set?", translation: "Коли заходить сонце?" },
            { phrase: "Is it windy today?", translation: "Сьогодні вітряно?" },
            { phrase: "What is the forecast for tomorrow?", translation: "Який прогноз на завтра?" },
            { phrase: "How long does it take?", translation: "Скільки це займає часу?" },
            { phrase: "What season is it now?", translation: "Яка зараз пора року?" },
            { phrase: "Is it snowing?", translation: "Йде сніг?" },
            { phrase: "How many degrees is it?", translation: "Скільки градусів?" },
            { phrase: "Is it foggy?", translation: "Туманно?" },
            { phrase: "What day is it today?", translation: "Який сьогодні день?" }
        ]
    },
    departure: {
        title: "Повернення",
        icon: "🎒",
        words: [
            { word: "departure", transcription: "[діпарче]", translation: "від'їзд" },
            { word: "return", transcription: "[рітьорн]", translation: "повернення" },
            { word: "customs", transcription: "[кастмз]", translation: "митниця" },
            { word: "passport", transcription: "[паспорт]", translation: "паспорт" },
            { word: "ticket", transcription: "[тікет]", translation: "квиток" },
            { word: "luggage", transcription: "[лагідж]", translation: "багаж" },
            { word: "souvenir", transcription: "[сувенір]", translation: "сувенір" },
            { word: "gate", transcription: "[гейт]", translation: "вихід" },
            { word: "flight", transcription: "[флайт]", translation: "рейс" },
            { word: "delay", transcription: "[ділей]", translation: "затримка" },
            { word: "security", transcription: "[сікьюріті]", translation: "безпека" },
            { word: "check-in", transcription: "[чек ін]", translation: "реєстрація" },
            { word: "boarding", transcription: "[бордінг]", translation: "посадка" },
            { word: "terminal", transcription: "[термінал]", translation: "термінал" },
            { word: "arrival", transcription: "[ерайвал]", translation: "прибуття" },
            { word: "farewell", transcription: "[фервел]", translation: "прощання" }
        ],
        phrases: [
            { phrase: "What time is my departure?", translation: "О котрій мій від'їзд?" },
            { phrase: "Where is the check-in desk?", translation: "Де стійка реєстрації?" },
            { phrase: "Do I need to go through customs?", translation: "Мені потрібно проходити митницю?" },
            { phrase: "Is my flight on time?", translation: "Мій рейс вчасно?" },
            { phrase: "Where can I buy souvenirs?", translation: "Де можна купити сувеніри?" },
            { phrase: "Can I get a tax refund?", translation: "Можна повернути податок?" },
            { phrase: "Where is the boarding gate?", translation: "Де вихід на посадку?" },
            { phrase: "How long is the flight?", translation: "Скільки триває політ?" },
            { phrase: "Is there a delay?", translation: "Є затримка?" },
            { phrase: "Can I have a window seat?", translation: "Можна місце біля вікна?" },
            { phrase: "Where is passport control?", translation: "Де паспортний контроль?" },
            { phrase: "Is there a direct flight?", translation: "Є прямий рейс?" },
            { phrase: "Can I check my luggage?", translation: "Можна здати багаж?" }
        ]
    }
};

// Show words modal (mobile optimized)
function viewWords(situation) {
    console.log('🔍 viewWords called with situation:', situation);
    console.log('📚 vocabularyData available:', Object.keys(vocabularyData));
    
    // Mobile detection
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
                     window.innerWidth <= 768;
    
    if (!vocabularyData[situation]) {
        console.error('❌ Situation not found:', situation);
        console.log('✅ Available situations:', Object.keys(vocabularyData));
        
        // Mobile-friendly error message
        if (isMobile) {
            alert(`Ситуація "${situation}" недоступна.\nСпробуйте перезавантажити сторінку.`);
        } else {
            alert(`Ситуація "${situation}" не знайдена. Доступні: ${Object.keys(vocabularyData).join(', ')}`);
        }
        return;
    }
    
    const data = vocabularyData[situation];
    console.log('Data loaded for situation:', situation, data);
    
    // Create modal HTML
    const modalHTML = `
        <div class="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/50 backdrop-blur-sm" onclick="closeModal(event)">
            <div class="bg-black/90 rounded-2xl sm:rounded-3xl p-4 sm:p-8 max-w-4xl w-full max-h-[95vh] sm:max-h-[80vh] overflow-y-auto glass border border-white/20" onclick="event.stopPropagation()" style="touch-action: pan-y;">
                <!-- Header -->
                <div class="flex items-center justify-between mb-4 sm:mb-6">
                    <div class="flex items-center gap-2 sm:gap-4">
                        <div class="text-2xl sm:text-4xl">${data.icon}</div>
                        <h2 class="text-lg sm:text-3xl font-bold text-white">${data.title}</h2>
                    </div>
                    <button class="text-white/60 hover:text-white text-xl sm:text-2xl p-2 min-w-[44px] min-h-[44px] flex items-center justify-center" onclick="closeModal()">×</button>
                </div>
                
                <!-- Tabs -->
                <div class="flex gap-2 sm:gap-4 mb-4 sm:mb-6">
                    <button class="tab-btn active px-3 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl text-sm sm:text-base font-semibold transition-all" data-tab="words">
                        📚 Слова (${data.words.length})
                    </button>
                    <button class="tab-btn px-3 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl text-sm sm:text-base font-semibold transition-all" data-tab="phrases">
                        💬 Фрази (${data.phrases.length})
                    </button>
                </div>
                
                <!-- Words Content -->
                <div class="tab-content" id="words-content">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                        ${data.words.map(item => `
                            <div class="word-card glass rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-white/10 hover:border-white/20 transition-all">
                                <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0">
                                    <div>
                                        <div class="text-white font-semibold text-base sm:text-lg">${item.word}</div>
                                        <div class="text-purple-400 text-xs sm:text-sm">${item.transcription}</div>
                                    </div>
                                    <div class="text-white/70 text-sm sm:text-base sm:text-right">${item.translation}</div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <!-- Phrases Content -->
                <div class="tab-content hidden" id="phrases-content">
                    <div class="space-y-3 sm:space-y-4">
                        ${data.phrases.map(item => `
                            <div class="phrase-card glass rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-white/10 hover:border-white/20 transition-all">
                                <div class="text-white font-semibold mb-2 text-sm sm:text-base">"${item.phrase}"</div>
                                <div class="text-white/70 text-sm sm:text-base">"${item.translation}"</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <!-- Actions -->
                <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8">
                    <button class="btn-practice flex-1 px-4 sm:px-6 py-3 rounded-xl sm:rounded-2xl text-sm sm:text-base font-semibold" onclick="practiceWords('${situation}')">
                        🎯 Практикувати
                    </button>
                    <button class="btn-view px-4 sm:px-6 py-3 rounded-xl sm:rounded-2xl text-sm sm:text-base font-semibold" onclick="closeModal()">
                        ✓ Готово
                    </button>
                </div>
            </div>
        </div>
    `;
    
    // Add modal to page
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Mobile optimization: prevent body scroll when modal is open
    if (isMobile) {
        document.body.style.overflow = 'hidden';
        document.body.style.position = 'fixed';
        document.body.style.width = '100%';
    }
    
    // Add tab functionality with mobile optimizations
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => {
        // Mobile-friendly tab switching
        const handleTabClick = (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            const tab = btn.dataset.tab;
            
            // Visual feedback for mobile
            if (isMobile) {
                btn.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    btn.style.transform = '';
                }, 100);
            }
            
            // Update active tab
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Update content with smooth transition
            tabContents.forEach(content => {
                content.classList.add('hidden');
            });
            
            setTimeout(() => {
                document.getElementById(`${tab}-content`).classList.remove('hidden');
            }, 50);
        };
        
        btn.addEventListener('click', handleTabClick);
        
        // Touch events for mobile
        if (isMobile) {
            btn.addEventListener('touchend', function(e) {
                e.preventDefault();
                handleTabClick(e);
            }, { passive: false });
        }
    });
}

// Close modal (mobile optimized)
function closeModal(event) {
    console.log('closeModal called');
    if (event && event.target !== event.currentTarget) return;
    
    // Mobile detection
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
                     window.innerWidth <= 768;
    
    const modals = document.querySelectorAll('.fixed[class*="z-50"]');
    console.log('Found modals:', modals.length);
    
    if (modals.length > 0) {
        // Restore body scroll on mobile
        if (isMobile) {
            document.body.style.overflow = '';
            document.body.style.position = '';
            document.body.style.width = '';
        }
        
        // Smooth close animation
        modals.forEach(modal => {
            if (isMobile) {
                modal.style.opacity = '0';
                modal.style.transform = 'scale(0.95)';
                setTimeout(() => modal.remove(), 200);
            } else {
                modal.remove();
            }
        });
    }
}

// Practice words
function practiceWords(situation) {
    console.log('practiceWords called with situation:', situation);
    console.log('vocabularyData available:', Object.keys(vocabularyData));
    
    if (!vocabularyData[situation]) {
        console.error('Situation not found:', situation);
        console.log('Available situations:', Object.keys(vocabularyData));
        return;
    }
    
    // Close current modal if open
    closeModal();
    
    const data = vocabularyData[situation];
    
    // Create practice selection modal
    const practiceModalHTML = `
        <div class="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/50 backdrop-blur-sm" onclick="closePracticeModal(event)">
            <div class="bg-black/90 rounded-2xl sm:rounded-3xl p-4 sm:p-8 max-w-2xl w-full glass border border-white/20" onclick="event.stopPropagation()" style="touch-action: pan-y;">
                <!-- Header -->
                <div class="flex items-center justify-between mb-6">
                    <div class="flex items-center gap-3 sm:gap-4">
                        <div class="text-3xl sm:text-4xl">${data.icon}</div>
                        <h2 class="text-xl sm:text-3xl font-bold text-white">Практика: ${data.title}</h2>
                    </div>
                    <button class="text-white/60 hover:text-white text-2xl p-2 min-w-[44px] min-h-[44px] flex items-center justify-center" onclick="closePracticeModal()">×</button>
                </div>
                
                <!-- Practice Types -->
                <div class="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                    <div class="text-white/80 text-base sm:text-lg mb-4 sm:mb-6">Оберіть тип практики:</div>
                    
                    <!-- Flashcards -->
                    <div class="practice-option glass rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/10 hover:border-purple-400/50 transition-all cursor-pointer" onclick="startPractice('${situation}', 'flashcards')">
                        <div class="flex items-center gap-3 sm:gap-4">
                            <div class="text-2xl sm:text-4xl">🃏</div>
                            <div class="flex-1">
                                <h3 class="text-lg sm:text-xl font-bold text-white">Картки</h3>
                                <p class="text-white/70 text-sm sm:text-base">Переглядайте слова та їх переклади у форматі карток</p>
                                <p class="text-purple-400 text-xs sm:text-sm mt-1 sm:mt-2">📚 ${data.words.length} слів • ⭐ Легкий рівень</p>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Multiple Choice -->
                    <div class="practice-option glass rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/10 hover:border-purple-400/50 transition-all cursor-pointer" onclick="startPractice('${situation}', 'quiz')">
                        <div class="flex items-center gap-3 sm:gap-4">
                            <div class="text-2xl sm:text-4xl">❓</div>
                            <div class="flex-1">
                                <h3 class="text-lg sm:text-xl font-bold text-white">Тест з варіантами</h3>
                                <p class="text-white/70 text-sm sm:text-base">Оберіть правильний переклад з декількох варіантів</p>
                                <p class="text-purple-400 text-xs sm:text-sm mt-1 sm:mt-2">🎯 ${data.words.length} питань • ⭐⭐ Середній рівень</p>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Drag and Drop -->
                    <div class="practice-option glass rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/10 hover:border-purple-400/50 transition-all cursor-pointer" onclick="startPractice('${situation}', 'dragdrop')">
                        <div class="flex items-center gap-3 sm:gap-4">
                            <div class="text-2xl sm:text-4xl">🎯</div>
                            <div class="flex-1">
                                <h3 class="text-lg sm:text-xl font-bold text-white">Драг енд дроп</h3>
                                <p class="text-white/70 text-sm sm:text-base">Перетягніть слова до правильних перекладів</p>
                                <p class="text-purple-400 text-xs sm:text-sm mt-1 sm:mt-2">🎮 ${data.words.length} пар • ⭐⭐⭐ Складний рівень</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Footer -->
                <div class="flex gap-4">
                    <button class="btn-view flex-1 px-6 py-3 rounded-2xl font-semibold" onclick="closePracticeModal()">
                        ← Назад
                    </button>
                </div>
            </div>
        </div>
    `;
    
    // Add modal to page
    document.body.insertAdjacentHTML('beforeend', practiceModalHTML);
}

// Close practice selection modal
function closePracticeModal(event) {
    console.log('closePracticeModal called');
    if (event && event.target !== event.currentTarget) return;
    
    const modals = document.querySelectorAll('.fixed[class*="z-50"]');
    console.log('Found practice modals:', modals.length);
    
    if (modals.length > 0) {
        modals.forEach(modal => modal.remove());
    }
}

// Start specific practice type
function startPractice(situation, practiceType) {
    if (!vocabularyData[situation]) {
        console.error('Situation not found:', situation);
        return;
    }
    
    closePracticeModal();
    
    const data = vocabularyData[situation];
    let practiceData = [];
    
    // Prepare data based on practice type
    switch(practiceType) {
        case 'flashcards':
            startFlashcardsPractice(situation, data);
            break;
        case 'quiz':
            startQuizPractice(situation, data);
            break;
        case 'dragdrop':
            startDragDropPractice(situation, data);
            break;
        default:
            console.error('Unknown practice type:', practiceType);
    }
}

// Flashcards Practice (mobile optimized)
function startFlashcardsPractice(situation, data) {
    let currentIndex = 0;
    let showTranslation = false;
    
    // Mobile detection
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
                     window.innerWidth <= 768;
    
    const flashcardsHTML = `
        <div class="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/50 backdrop-blur-sm">
            <div class="bg-black/90 rounded-2xl sm:rounded-3xl p-4 sm:p-8 max-w-2xl w-full glass border border-white/20">
                <!-- Header -->
                <div class="flex items-center justify-between mb-6">
                    <div class="flex items-center gap-4">
                        <div class="text-4xl">${data.icon}</div>
                        <h2 class="text-2xl font-bold text-white">Картки: ${data.title}</h2>
                    </div>
                    <button class="text-white/60 hover:text-white text-2xl" onclick="endPractice()">×</button>
                </div>
                
                <!-- Progress -->
                <div class="mb-6">
                    <div class="flex justify-between text-white/70 text-sm mb-2">
                        <span>Прогрес</span>
                        <span id="progress-text">1 / ${data.words.length}</span>
                    </div>
                    <div class="w-full bg-white/10 rounded-full h-2">
                        <div id="progress-bar" class="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all" style="width: ${(1/data.words.length)*100}%"></div>
                    </div>
                </div>
                
                                 <!-- Flashcard -->
                 <div class="flashcard glass rounded-2xl sm:rounded-3xl p-6 sm:p-8 mb-4 sm:mb-6 min-h-[250px] sm:min-h-[300px] flex flex-col justify-center items-center text-center border border-white/10 transition-all">
                     <div id="card-front" class="card-side">
                         <div class="text-2xl sm:text-4xl font-bold text-white mb-3 sm:mb-4" id="word-text">${data.words[0].word}</div>
                         <div class="text-purple-400 text-base sm:text-lg" id="transcription-text">${data.words[0].transcription}</div>
                     </div>
                     <div id="card-back" class="card-side hidden">
                         <div class="text-2xl sm:text-4xl font-bold text-white mb-3 sm:mb-4" id="translation-text">${data.words[0].translation}</div>
                         <div class="text-white/70 text-base sm:text-lg" id="word-back">${data.words[0].word}</div>
                     </div>
                 </div>
                
                                 <!-- Controls -->
                 <div class="flex flex-col sm:flex-row gap-3 sm:gap-4">
                     <button id="prev-btn" class="px-4 sm:px-6 py-3 rounded-xl sm:rounded-2xl text-sm sm:text-base font-semibold bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-all ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}" onclick="previousCard()" ${currentIndex === 0 ? 'disabled' : ''}>
                         ← Попередня
                     </button>
                     <button class="flex-1 px-4 sm:px-6 py-3 rounded-xl sm:rounded-2xl text-sm sm:text-base font-semibold bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600 transition-all" onclick="flipCard()">
                         🔄 Перевернути
                     </button>
                     <button id="next-btn" class="px-4 sm:px-6 py-3 rounded-xl sm:rounded-2xl text-sm sm:text-base font-semibold bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-all" onclick="nextCard()">
                         Наступна →
                     </button>
                 </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', flashcardsHTML);
    
    // Store practice session data
    window.currentFlashcardSession = {
        situation: situation,
        data: data,
        currentIndex: 0,
        showTranslation: false,
        isMobile: isMobile
    };
    
    // Mobile optimizations
    if (isMobile) {
        document.body.style.overflow = 'hidden';
        
        // Add swipe gestures for mobile
        const flashcard = document.querySelector('.flashcard');
        let startX = 0;
        let startY = 0;
        
        flashcard.addEventListener('touchstart', function(e) {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
        }, { passive: true });
        
        flashcard.addEventListener('touchend', function(e) {
            if (!startX || !startY) return;
            
            const endX = e.changedTouches[0].clientX;
            const endY = e.changedTouches[0].clientY;
            
            const diffX = startX - endX;
            const diffY = startY - endY;
            
            // Horizontal swipe (next/previous card)
            if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
                if (diffX > 0) {
                    // Swipe left - next card
                    nextCard();
                } else {
                    // Swipe right - previous card
                    previousCard();
                }
            } 
            // Vertical swipe or tap (flip card)
            else if (Math.abs(diffY) < 30 && Math.abs(diffX) < 30) {
                flipCard();
            }
            
            startX = 0;
            startY = 0;
        }, { passive: true });
        
        // Double-tap to flip (additional mobile gesture)
        let lastTap = 0;
        flashcard.addEventListener('touchend', function(e) {
            const currentTime = new Date().getTime();
            const tapLength = currentTime - lastTap;
            if (tapLength < 500 && tapLength > 0) {
                flipCard();
            }
            lastTap = currentTime;
        });
    }
}

// Flashcard navigation functions
function flipCard() {
    const session = window.currentFlashcardSession;
    if (!session) return;
    
    const frontSide = document.getElementById('card-front');
    const backSide = document.getElementById('card-back');
    
    session.showTranslation = !session.showTranslation;
    
    if (session.showTranslation) {
        frontSide.classList.add('hidden');
        backSide.classList.remove('hidden');
    } else {
        backSide.classList.add('hidden');
        frontSide.classList.remove('hidden');
    }
}

function nextCard() {
    const session = window.currentFlashcardSession;
    if (!session) return;
    
    if (session.currentIndex < session.data.words.length - 1) {
        session.currentIndex++;
        session.showTranslation = false;
        updateFlashcard();
    } else {
        // Practice completed
        completePractice();
    }
}

function previousCard() {
    const session = window.currentFlashcardSession;
    if (!session) return;
    
    if (session.currentIndex > 0) {
        session.currentIndex--;
        session.showTranslation = false;
        updateFlashcard();
    }
}

function updateFlashcard() {
    const session = window.currentFlashcardSession;
    if (!session) return;
    
    const currentWord = session.data.words[session.currentIndex];
    
    // Update content
    document.getElementById('word-text').textContent = currentWord.word;
    document.getElementById('transcription-text').textContent = currentWord.transcription;
    document.getElementById('translation-text').textContent = currentWord.translation;
    document.getElementById('word-back').textContent = currentWord.word;
    
    // Update progress
    const progressText = `${session.currentIndex + 1} / ${session.data.words.length}`;
    document.getElementById('progress-text').textContent = progressText;
    document.getElementById('progress-bar').style.width = `${((session.currentIndex + 1) / session.data.words.length) * 100}%`;
    
    // Update navigation buttons
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    
    if (session.currentIndex === 0) {
        prevBtn.disabled = true;
        prevBtn.classList.add('opacity-50', 'cursor-not-allowed');
    } else {
        prevBtn.disabled = false;
        prevBtn.classList.remove('opacity-50', 'cursor-not-allowed');
    }
    
    if (session.currentIndex === session.data.words.length - 1) {
        nextBtn.textContent = 'Завершити ✓';
    } else {
        nextBtn.textContent = 'Наступна →';
    }
    
    // Reset card to front side
    document.getElementById('card-front').classList.remove('hidden');
    document.getElementById('card-back').classList.add('hidden');
}

// Quiz Practice
function startQuizPractice(situation, data) {
    let currentQuestionIndex = 0;
    let correctAnswers = 0;
    let totalQuestions = data.words.length;
    let userAnswers = [];
    
    // Shuffle words for random quiz order
    const shuffledWords = [...data.words].sort(() => Math.random() - 0.5);
    
    const quizHTML = `
        <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div class="bg-black/90 rounded-3xl p-8 max-w-2xl w-full glass border border-white/20">
                <!-- Header -->
                <div class="flex items-center justify-between mb-6">
                    <div class="flex items-center gap-4">
                        <div class="text-4xl">${data.icon}</div>
                        <h2 class="text-2xl font-bold text-white">Тест: ${data.title}</h2>
                    </div>
                    <button class="text-white/60 hover:text-white text-2xl" onclick="endPractice()">×</button>
                </div>
                
                <!-- Progress -->
                <div class="mb-6">
                    <div class="flex justify-between text-white/70 text-sm mb-2">
                        <span>Прогрес</span>
                        <span id="quiz-progress-text">1 / ${totalQuestions}</span>
                    </div>
                    <div class="w-full bg-white/10 rounded-full h-2">
                        <div id="quiz-progress-bar" class="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full transition-all" style="width: ${(1/totalQuestions)*100}%"></div>
                    </div>
                </div>
                
                <!-- Score -->
                <div class="mb-6">
                    <div class="flex justify-between items-center">
                        <span class="text-white/70">Правильні відповіді:</span>
                        <span id="quiz-score" class="text-green-400 font-bold">0 / ${totalQuestions}</span>
                    </div>
                </div>
                
                <!-- Question -->
                <div class="question-container glass rounded-2xl p-6 mb-6 border border-white/10">
                    <div class="text-white/70 text-sm mb-2">Оберіть правильний переклад:</div>
                    <div class="text-3xl font-bold text-white mb-2" id="quiz-word">${shuffledWords[0].word}</div>
                    <div class="text-purple-400 text-lg" id="quiz-transcription">${shuffledWords[0].transcription}</div>
                </div>
                
                <!-- Answer Options -->
                <div class="answer-options space-y-3 mb-6" id="answer-options">
                    <!-- Options will be generated here -->
                </div>
                
                <!-- Next Button -->
                <div class="flex gap-4">
                    <button id="quiz-next-btn" class="flex-1 px-6 py-3 rounded-2xl font-semibold bg-white/10 text-white/50 border border-white/20 cursor-not-allowed transition-all" disabled>
                        Наступне питання →
                    </button>
                </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', quizHTML);
    
    // Store quiz session data
    window.currentQuizSession = {
        situation: situation,
        data: data,
        shuffledWords: shuffledWords,
        currentQuestionIndex: 0,
        correctAnswers: 0,
        totalQuestions: totalQuestions,
        userAnswers: [],
        selectedAnswer: null
    };
    
    // Generate first question
    generateQuizQuestion();
}

// Generate quiz question with multiple choice options
function generateQuizQuestion() {
    const session = window.currentQuizSession;
    if (!session) return;
    
    const currentWord = session.shuffledWords[session.currentQuestionIndex];
    const correctAnswer = currentWord.translation;
    
    // Get 3 random wrong answers from other words
    const otherWords = session.data.words.filter(w => w.translation !== correctAnswer);
    const wrongAnswers = otherWords
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)
        .map(w => w.translation);
    
    // Combine correct and wrong answers, then shuffle
    const allAnswers = [correctAnswer, ...wrongAnswers].sort(() => Math.random() - 0.5);
    
    // Update question display
    document.getElementById('quiz-word').textContent = currentWord.word;
    document.getElementById('quiz-transcription').textContent = currentWord.transcription;
    
    // Generate answer options
    const optionsContainer = document.getElementById('answer-options');
    optionsContainer.innerHTML = allAnswers.map((answer, index) => `
        <div class="answer-option glass rounded-2xl p-4 border border-white/10 hover:border-white/20 transition-all cursor-pointer" 
             data-answer="${answer}" onclick="selectAnswer('${answer}', '${correctAnswer}', this)">
            <div class="text-white font-semibold">${answer}</div>
        </div>
    `).join('');
    
    // Reset selection state
    session.selectedAnswer = null;
    const nextBtn = document.getElementById('quiz-next-btn');
    nextBtn.disabled = true;
    nextBtn.classList.add('bg-white/10', 'text-white/50', 'cursor-not-allowed');
    nextBtn.classList.remove('bg-gradient-to-r', 'from-green-500', 'to-blue-500', 'text-white');
}

// Handle answer selection (mobile optimized)
function selectAnswer(selectedAnswer, correctAnswer, element) {
    const session = window.currentQuizSession;
    if (!session) return;
    
    // Mobile detection
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
                     window.innerWidth <= 768;
    
    // Mobile haptic feedback (if available)
    if (isMobile && navigator.vibrate) {
        const isCorrect = selectedAnswer === correctAnswer;
        navigator.vibrate(isCorrect ? [50] : [100, 50, 100]);
    }
    
    // Remove previous selections
    document.querySelectorAll('.answer-option').forEach(option => {
        option.classList.remove('border-green-400', 'border-red-400', 'bg-green-500/20', 'bg-red-500/20');
        option.classList.add('border-white/10');
        option.style.transform = '';
    });
    
    // Mark selected answer with mobile-friendly animation
    const isCorrect = selectedAnswer === correctAnswer;
    if (isCorrect) {
        element.classList.add('border-green-400', 'bg-green-500/20');
        if (isMobile) {
            element.style.transform = 'scale(1.02)';
            setTimeout(() => element.style.transform = '', 300);
        }
        session.correctAnswers++;
    } else {
        element.classList.add('border-red-400', 'bg-red-500/20');
        if (isMobile) {
            // Shake animation for wrong answer
            element.style.animation = 'shake 0.5s ease-in-out';
            setTimeout(() => element.style.animation = '', 500);
        }
        
        // Also highlight the correct answer
        document.querySelectorAll('.answer-option').forEach(option => {
            if (option.dataset.answer === correctAnswer) {
                option.classList.add('border-green-400', 'bg-green-500/20');
                if (isMobile) {
                    option.style.transform = 'scale(1.02)';
                    setTimeout(() => option.style.transform = '', 300);
                }
            }
        });
    }
    
    // Store user answer
    session.userAnswers.push({
        word: session.shuffledWords[session.currentQuestionIndex].word,
        correctAnswer: correctAnswer,
        userAnswer: selectedAnswer,
        isCorrect: isCorrect
    });
    
    session.selectedAnswer = selectedAnswer;
    
    // Update score
    document.getElementById('quiz-score').textContent = `${session.correctAnswers} / ${session.totalQuestions}`;
    
    // Enable next button
    const nextBtn = document.getElementById('quiz-next-btn');
    nextBtn.disabled = false;
    nextBtn.classList.remove('bg-white/10', 'text-white/50', 'cursor-not-allowed');
    nextBtn.classList.add('bg-gradient-to-r', 'from-green-500', 'to-blue-500', 'text-white');
    
    // Update button text for last question
    if (session.currentQuestionIndex === session.totalQuestions - 1) {
        nextBtn.textContent = 'Завершити тест ✓';
        nextBtn.onclick = () => completeQuiz();
    } else {
        nextBtn.onclick = () => nextQuizQuestion();
    }
    
    // Disable all options to prevent multiple selections
    document.querySelectorAll('.answer-option').forEach(option => {
        option.style.pointerEvents = 'none';
    });
}

// Move to next quiz question
function nextQuizQuestion() {
    const session = window.currentQuizSession;
    if (!session) return;
    
    if (session.currentQuestionIndex < session.totalQuestions - 1) {
        session.currentQuestionIndex++;
        
        // Update progress
        const progressText = `${session.currentQuestionIndex + 1} / ${session.totalQuestions}`;
        document.getElementById('quiz-progress-text').textContent = progressText;
        document.getElementById('quiz-progress-bar').style.width = `${((session.currentQuestionIndex + 1) / session.totalQuestions) * 100}%`;
        
        // Generate next question
        generateQuizQuestion();
    }
}

// Complete quiz and show results
function completeQuiz() {
    const session = window.currentQuizSession;
    if (!session) return;
    
    const percentage = Math.round((session.correctAnswers / session.totalQuestions) * 100);
    let resultMessage = '';
    let resultEmoji = '';
    
    if (percentage >= 90) {
        resultMessage = 'Відмінно! Ви чудово знаєте слова!';
        resultEmoji = '🏆';
    } else if (percentage >= 70) {
        resultMessage = 'Добре! Продовжуйте вивчати!';
        resultEmoji = '🎉';
    } else if (percentage >= 50) {
        resultMessage = 'Непогано! Є над чим працювати!';
        resultEmoji = '👍';
    } else {
        resultMessage = 'Потрібно більше практики!';
        resultEmoji = '💪';
    }
    
    const resultsHTML = `
        <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div class="bg-black/90 rounded-3xl p-8 max-w-lg w-full glass border border-white/20 text-center">
                <div class="text-6xl mb-4">${resultEmoji}</div>
                <h2 class="text-3xl font-bold text-white mb-4">Тест завершено!</h2>
                <p class="text-white/70 text-lg mb-6">${resultMessage}</p>
                
                <!-- Results Stats -->
                <div class="glass rounded-2xl p-6 mb-6 border border-white/10">
                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <div class="text-2xl font-bold text-green-400">${session.correctAnswers}</div>
                            <div class="text-white/70 text-sm">Правильно</div>
                        </div>
                        <div>
                            <div class="text-2xl font-bold text-red-400">${session.totalQuestions - session.correctAnswers}</div>
                            <div class="text-white/70 text-sm">Неправильно</div>
                        </div>
                    </div>
                    <div class="mt-4 pt-4 border-t border-white/10">
                        <div class="text-3xl font-bold text-white">${percentage}%</div>
                        <div class="text-white/70 text-sm">Загальний результат</div>
                    </div>
                </div>
                
                <div class="flex gap-4">
                    <button class="flex-1 px-6 py-3 rounded-2xl font-semibold bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-all" onclick="endPractice()">
                        ← Повернутися
                    </button>
                    <button class="flex-1 px-6 py-3 rounded-2xl font-semibold bg-gradient-to-r from-green-500 to-blue-500 text-white hover:from-green-600 hover:to-blue-600 transition-all" onclick="restartQuiz()">
                        🔄 Повторити
                    </button>
                </div>
            </div>
        </div>
    `;
    
    // Replace current modal
    const currentModal = document.querySelector('.fixed.inset-0.z-50');
    if (currentModal) {
        currentModal.remove();
    }
    
    document.body.insertAdjacentHTML('beforeend', resultsHTML);
}

// Restart quiz
function restartQuiz() {
    const session = window.currentQuizSession;
    if (!session) return;
    
    endPractice();
    startQuizPractice(session.situation, session.data);
}

// Drag and Drop Practice
function startDragDropPractice(situation, data) {
    let currentRound = 0;
    let correctMatches = 0;
    let totalRounds = Math.ceil(data.words.length / 6); // 6 pairs per round
    let wordsPerRound = 6;
    let currentMatches = 0;
    let draggedElement = null;
    
    const dragDropHTML = `
        <div class="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/50 backdrop-blur-sm">
            <div class="bg-black/90 rounded-2xl sm:rounded-3xl p-4 sm:p-8 max-w-5xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto glass border border-white/20">
                <!-- Header -->
                <div class="flex items-center justify-between mb-6">
                    <div class="flex items-center gap-4">
                        <div class="text-4xl">${data.icon}</div>
                        <h2 class="text-2xl font-bold text-white">Драг енд дроп: ${data.title}</h2>
                    </div>
                    <button class="text-white/60 hover:text-white text-2xl" onclick="endPractice()">×</button>
                </div>
                
                <!-- Progress -->
                <div class="mb-6">
                    <div class="flex justify-between text-white/70 text-sm mb-2">
                        <span>Раунд</span>
                        <span id="dd-progress-text">1 / ${totalRounds}</span>
                    </div>
                    <div class="w-full bg-white/10 rounded-full h-2">
                        <div id="dd-progress-bar" class="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all" style="width: ${(1/totalRounds)*100}%"></div>
                    </div>
                </div>
                
                <!-- Score -->
                <div class="mb-6">
                    <div class="flex justify-between items-center">
                        <span class="text-white/70">Правильних збігів:</span>
                        <span id="dd-score" class="text-purple-400 font-bold">0 / ${Math.min(wordsPerRound, data.words.length)}</span>
                    </div>
                </div>
                
                                 <!-- Instructions -->
                 <div class="mb-4 sm:mb-6 text-center">
                     <p class="text-white/70 text-sm sm:text-base">Перетягніть англійські слова до їх українських перекладів</p>
                 </div>
                 
                 <!-- Game Area -->
                 <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 mb-4 sm:mb-6">
                     <!-- English Words (Left Side) -->
                     <div class="space-y-2 sm:space-y-3">
                         <h3 class="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4 text-center">🇬🇧 Англійські слова</h3>
                         <div id="english-words" class="space-y-2 sm:space-y-3">
                             <!-- Words will be generated here -->
                         </div>
                     </div>
                     
                     <!-- Ukrainian Translations (Right Side) -->
                     <div class="space-y-2 sm:space-y-3">
                         <h3 class="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4 text-center">🇺🇦 Українські переклади</h3>
                         <div id="ukrainian-words" class="space-y-2 sm:space-y-3">
                             <!-- Translations will be generated here -->
                         </div>
                     </div>
                 </div>
                
                <!-- Controls -->
                <div class="flex gap-4">
                    <button id="dd-next-btn" class="flex-1 px-6 py-3 rounded-2xl font-semibold bg-white/10 text-white/50 border border-white/20 cursor-not-allowed transition-all" disabled>
                        Наступний раунд →
                    </button>
                </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', dragDropHTML);
    
    // Store drag drop session data
    window.currentDragDropSession = {
        situation: situation,
        data: data,
        currentRound: 0,
        correctMatches: 0,
        totalRounds: totalRounds,
        wordsPerRound: wordsPerRound,
        currentMatches: 0,
        draggedElement: null
    };
    
    // Generate first round
    generateDragDropRound();
}

// Generate words for current round
function generateDragDropRound() {
    const session = window.currentDragDropSession;
    if (!session) return;
    
    const startIndex = session.currentRound * session.wordsPerRound;
    const endIndex = Math.min(startIndex + session.wordsPerRound, session.data.words.length);
    const roundWords = session.data.words.slice(startIndex, endIndex);
    
    // Shuffle translations for difficulty
    const shuffledTranslations = [...roundWords.map(w => w.translation)].sort(() => Math.random() - 0.5);
    
    // Generate English words (draggable)
    const englishContainer = document.getElementById('english-words');
    englishContainer.innerHTML = roundWords.map((word, index) => `
        <div class="drag-word glass rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-white/10 hover:border-purple-400/50 transition-all cursor-grab active:cursor-grabbing" 
             draggable="true" 
             data-word="${word.word}" 
             data-translation="${word.translation}"
             ondragstart="startDrag(event, this)"
             ondragend="endDrag(event, this)">
            <div class="text-white font-semibold text-base sm:text-lg">${word.word}</div>
            <div class="text-purple-400 text-xs sm:text-sm">${word.transcription}</div>
        </div>
    `).join('');
    
    // Generate Ukrainian translations (drop zones)
    const ukrainianContainer = document.getElementById('ukrainian-words');
        ukrainianContainer.innerHTML = shuffledTranslations.map((translation, index) => `
        <div class="drop-zone glass rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-white/10 hover:border-pink-400/50 transition-all min-h-[60px] sm:min-h-[80px] flex items-center justify-center" 
             data-translation="${translation}"
             ondragover="allowDrop(event)"
             ondragleave="dragLeave(event)"
             ondrop="dropWord(event, this)">
            <div class="text-white font-semibold text-sm sm:text-lg text-center">${translation}</div>
        </div>
    `).join('');
    
    // Reset round stats
    session.currentMatches = 0;
    document.getElementById('dd-score').textContent = `0 / ${roundWords.length}`;
    
    // Update progress
    const progressText = `${session.currentRound + 1} / ${session.totalRounds}`;
    document.getElementById('dd-progress-text').textContent = progressText;
}

// Drag and drop handlers
function startDrag(event, element) {
    const session = window.currentDragDropSession;
    if (!session) return;
    
    session.draggedElement = element;
    element.style.opacity = '0.5';
    element.style.transform = 'scale(0.95)';
    
    // Store data for transfer
    event.dataTransfer.setData('text/plain', element.dataset.word);
    event.dataTransfer.setData('translation', element.dataset.translation);
}

function endDrag(event, element) {
    element.style.opacity = '1';
    element.style.transform = 'scale(1)';
}

function allowDrop(event) {
    event.preventDefault();
    
    // Add visual feedback
    const dropZone = event.currentTarget;
    dropZone.style.borderColor = '#a855f7';
    dropZone.style.backgroundColor = 'rgba(168, 85, 247, 0.1)';
}

// Handle drag leave
function dragLeave(event) {
    const dropZone = event.currentTarget;
    dropZone.style.borderColor = '';
    dropZone.style.backgroundColor = '';
}

function dropWord(event, dropZone) {
    event.preventDefault();
    const session = window.currentDragDropSession;
    if (!session) return;
    
    // Reset visual feedback
    dropZone.style.borderColor = '';
    dropZone.style.backgroundColor = '';
    
    const draggedWord = event.dataTransfer.getData('text/plain');
    const draggedTranslation = event.dataTransfer.getData('translation');
    const targetTranslation = dropZone.dataset.translation;
    
    // Check if it's a correct match
    if (draggedTranslation === targetTranslation) {
        // Correct match!
        session.currentMatches++;
        session.correctMatches++;
        
        // Visual feedback for correct match
        dropZone.style.borderColor = '#10b981';
        dropZone.style.backgroundColor = 'rgba(16, 185, 129, 0.2)';
        
        // Add checkmark
        dropZone.innerHTML = `
            <div class="text-center">
                <div class="text-2xl mb-2">✅</div>
                <div class="text-white font-semibold">${draggedWord}</div>
                <div class="text-green-400 text-sm">↓</div>
                <div class="text-white font-semibold">${targetTranslation}</div>
            </div>
        `;
        
        // Remove the dragged word
        if (session.draggedElement) {
            session.draggedElement.remove();
        }
        
        // Update score
        const currentRoundWords = Math.min(session.wordsPerRound, 
            session.data.words.length - (session.currentRound * session.wordsPerRound));
        document.getElementById('dd-score').textContent = `${session.currentMatches} / ${currentRoundWords}`;
        
        // Check if round is complete
        if (session.currentMatches === currentRoundWords) {
            setTimeout(() => {
                completeRound();
            }, 1000);
        }
    } else {
        // Wrong match - visual feedback
        dropZone.style.borderColor = '#ef4444';
        dropZone.style.backgroundColor = 'rgba(239, 68, 68, 0.2)';
        
        // Return dragged element to original position with animation
        if (session.draggedElement) {
            session.draggedElement.style.animation = 'shake 0.5s ease-in-out';
            setTimeout(() => {
                session.draggedElement.style.animation = '';
            }, 500);
        }
        
        // Reset drop zone after animation
        setTimeout(() => {
            dropZone.style.borderColor = '';
            dropZone.style.backgroundColor = '';
        }, 500);
    }
    
    session.draggedElement = null;
}

// Complete current round
function completeRound() {
    const session = window.currentDragDropSession;
    if (!session) return;
    
    if (session.currentRound < session.totalRounds - 1) {
        // More rounds to go
        session.currentRound++;
        session.currentMatches = 0;
        
        // Update progress bar
        document.getElementById('dd-progress-bar').style.width = 
            `${((session.currentRound + 1) / session.totalRounds) * 100}%`;
        
        // Enable next button
        const nextBtn = document.getElementById('dd-next-btn');
        nextBtn.disabled = false;
        nextBtn.classList.remove('bg-white/10', 'text-white/50', 'cursor-not-allowed');
        nextBtn.classList.add('bg-gradient-to-r', 'from-purple-500', 'to-pink-500', 'text-white');
        nextBtn.onclick = () => {
            nextBtn.disabled = true;
            nextBtn.classList.add('bg-white/10', 'text-white/50', 'cursor-not-allowed');
            nextBtn.classList.remove('bg-gradient-to-r', 'from-purple-500', 'to-pink-500', 'text-white');
            generateDragDropRound();
        };
    } else {
        // All rounds complete
        setTimeout(() => {
            completeDragDropPractice();
        }, 1500);
    }
}

// Complete drag and drop practice
function completeDragDropPractice() {
    const session = window.currentDragDropSession;
    if (!session) return;
    
    const totalWords = session.data.words.length;
    const percentage = Math.round((session.correctMatches / totalWords) * 100);
    let resultMessage = '';
    let resultEmoji = '';
    
    if (percentage >= 90) {
        resultMessage = 'Фантастично! Ви майстерно з\'єднали всі слова!';
        resultEmoji = '🏆';
    } else if (percentage >= 70) {
        resultMessage = 'Чудова робота! Продовжуйте практикувати!';
        resultEmoji = '🎉';
    } else if (percentage >= 50) {
        resultMessage = 'Добре! Є простір для покращення!';
        resultEmoji = '👍';
    } else {
        resultMessage = 'Не засмучуйтесь! Практика робить майстра!';
        resultEmoji = '💪';
    }
    
    const resultsHTML = `
        <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div class="bg-black/90 rounded-3xl p-8 max-w-lg w-full glass border border-white/20 text-center">
                <div class="text-6xl mb-4">${resultEmoji}</div>
                <h2 class="text-3xl font-bold text-white mb-4">Практику завершено!</h2>
                <p class="text-white/70 text-lg mb-6">${resultMessage}</p>
                
                <!-- Results Stats -->
                <div class="glass rounded-2xl p-6 mb-6 border border-white/10">
                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <div class="text-2xl font-bold text-purple-400">${session.correctMatches}</div>
                            <div class="text-white/70 text-sm">Правильних збігів</div>
                        </div>
                        <div>
                            <div class="text-2xl font-bold text-pink-400">${totalWords - session.correctMatches}</div>
                            <div class="text-white/70 text-sm">Помилок</div>
                        </div>
                    </div>
                    <div class="mt-4 pt-4 border-t border-white/10">
                        <div class="text-3xl font-bold text-white">${percentage}%</div>
                        <div class="text-white/70 text-sm">Загальний результат</div>
                    </div>
                </div>
                
                <div class="flex gap-4">
                    <button class="flex-1 px-6 py-3 rounded-2xl font-semibold bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-all" onclick="endPractice()">
                        ← Повернутися
                    </button>
                    <button class="flex-1 px-6 py-3 rounded-2xl font-semibold bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 transition-all" onclick="restartDragDrop()">
                        🔄 Повторити
                    </button>
                </div>
            </div>
        </div>
    `;
    
    // Replace current modal
    const currentModal = document.querySelector('.fixed.inset-0.z-50');
    if (currentModal) {
        currentModal.remove();
    }
    
    document.body.insertAdjacentHTML('beforeend', resultsHTML);
}

// Restart drag drop practice
function restartDragDrop() {
    const session = window.currentDragDropSession;
    if (!session) return;
    
    endPractice();
    startDragDropPractice(session.situation, session.data);
}

// Complete practice
function completePractice() {
    const session = window.currentFlashcardSession;
    if (!session) return;
    
    const completionHTML = `
        <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div class="bg-black/90 rounded-3xl p-8 max-w-lg w-full glass border border-white/20 text-center">
                <div class="text-6xl mb-4">🎉</div>
                <h2 class="text-3xl font-bold text-white mb-4">Вітаємо!</h2>
                <p class="text-white/70 text-lg mb-6">Ви успішно завершили практику з ${session.data.words.length} слів по темі "${session.data.title}"</p>
                
                <div class="flex gap-4">
                    <button class="flex-1 px-6 py-3 rounded-2xl font-semibold bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-all" onclick="endPractice()">
                        ← Повернутися
                    </button>
                    <button class="flex-1 px-6 py-3 rounded-2xl font-semibold bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600 transition-all" onclick="restartFlashcards()">
                        🔄 Повторити
                    </button>
                </div>
            </div>
        </div>
    `;
    
    // Replace current modal
    const currentModal = document.querySelector('.fixed.inset-0.z-50');
    if (currentModal) {
        currentModal.remove();
    }
    
    document.body.insertAdjacentHTML('beforeend', completionHTML);
}

// Restart flashcards
function restartFlashcards() {
    const session = window.currentFlashcardSession;
    if (!session) return;
    
    endPractice();
    startFlashcardsPractice(session.situation, session.data);
}

// End practice (mobile optimized)
function endPractice() {
    console.log('endPractice called');
    
    // Mobile detection
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
                     window.innerWidth <= 768;
    
    const modals = document.querySelectorAll('.fixed[class*="z-50"]');
    console.log('Removing practice modals:', modals.length);
    
    // Restore body scroll for mobile
    if (isMobile) {
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.width = '';
    }
    
    if (modals.length > 0) {
        modals.forEach(modal => {
            if (isMobile) {
                // Smooth close animation for mobile
                modal.style.opacity = '0';
                modal.style.transform = 'scale(0.95)';
                setTimeout(() => modal.remove(), 200);
            } else {
                modal.remove();
            }
        });
    }
    
    // Clear sessions
    if (window.currentFlashcardSession) {
        delete window.currentFlashcardSession;
    }
    if (window.currentQuizSession) {
        delete window.currentQuizSession;
    }
    if (window.currentDragDropSession) {
        delete window.currentDragDropSession;
    }
}

// Ensure functions are exported immediately and multiple times
function exportFunctions() {
    if (typeof window !== 'undefined') {
        // Force export with error handling
        try {
            window.viewWords = viewWords;
            window.practiceWords = practiceWords;
            window.closeModal = closeModal;
            window.closePracticeModal = closePracticeModal;
            window.startPractice = startPractice;
            window.flipCard = flipCard;
            window.nextCard = nextCard;
            window.previousCard = previousCard;
            window.endPractice = endPractice;
            
            // Additional check and re-export if needed
            if (typeof window.viewWords !== 'function') {
                window.viewWords = function(situation) {
                    console.log('Fallback viewWords called');
                    return viewWords(situation);
                };
            }
            
            if (typeof window.practiceWords !== 'function') {
                window.practiceWords = function(situation) {
                    console.log('Fallback practiceWords called');
                    return practiceWords(situation);
                };
            }
            
            console.log('✅ All functions exported to window scope');
            console.log('🔍 Function check:', {
                viewWords: typeof window.viewWords,
                practiceWords: typeof window.practiceWords,
                closeModal: typeof window.closeModal
            });
            
            return true;
        } catch (error) {
            console.error('❌ Error exporting functions:', error);
            return false;
        }
    }
    return false;
}

// Export immediately multiple times for reliability
exportFunctions();
setTimeout(exportFunctions, 10);
setTimeout(exportFunctions, 100);
setTimeout(exportFunctions, 500);

// Initialize vocabulary page
document.addEventListener('DOMContentLoaded', function() {
    console.log('📚 Vocabulary.js DOM loaded');
    console.log('📊 Vocabulary data contains:', Object.keys(vocabularyData).length, 'situations');
    
    // Export again to be sure
    exportFunctions();
    
    // Add styles for modal elements
    const style = document.createElement('style');
    style.textContent = `
        .tab-btn {
            background: rgba(255, 255, 255, 0.1);
            color: white;
            border: 1px solid rgba(255, 255, 255, 0.2);
        }
        .tab-btn.active {
            background: linear-gradient(135deg, #6366f1, #8b5cf6);
            border-color: transparent;
        }
        .tab-btn:hover {
            background: rgba(255, 255, 255, 0.2);
        }
        .tab-btn.active:hover {
            background: linear-gradient(135deg, #5b5bd6, #7c3aed);
        }
        .word-card:hover {
            transform: translateY(-2px);
        }
        .phrase-card:hover {
            transform: translateY(-2px);
        }
        .practice-option:hover {
            transform: translateY(-2px);
        }
        .card-side {
            transition: opacity 0.3s ease;
        }
        .drag-word:hover {
            transform: translateY(-2px);
        }
        .drop-zone {
            transition: all 0.3s ease;
        }
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            10%, 30%, 50%, 70%, 90% { transform: translateX(-3px); }
            20%, 40%, 60%, 80% { transform: translateX(3px); }
        }
        
        /* Mobile optimizations */
        @media (max-width: 768px) {
            .practice-option:active {
                transform: scale(0.96);
                background: rgba(139, 92, 246, 0.2) !important;
            }
            .btn-view:active, .btn-practice:active {
                transform: scale(0.93);
                background: rgba(99, 102, 241, 0.8) !important;
            }
            .flashcard {
                min-height: 220px !important;
                padding: 1.5rem !important;
            }
            .answer-option {
                min-height: 60px;
                padding: 1rem !important;
                font-size: 1.1rem;
            }
            .answer-option:active {
                transform: scale(0.96);
            }
            /* Larger close buttons on mobile */
            .fixed button[onclick*="close"] {
                min-width: 48px !important;
                min-height: 48px !important;
                font-size: 1.5rem !important;
            }
            /* Better spacing in modals */
            .fixed .p-4 {
                padding: 1rem !important;
            }
            .fixed .p-8 {
                padding: 1.5rem !important;
            }
        }
        
        /* Extra small screens */
        @media (max-width: 480px) {
            .flashcard {
                min-height: 180px !important;
                padding: 1rem !important;
            }
            .answer-option {
                min-height: 56px;
                font-size: 1rem;
            }
            .fixed .max-w-4xl, .fixed .max-w-2xl {
                max-width: 95vw !important;
            }
            .fixed .p-4 {
                padding: 0.75rem !important;
            }
            .fixed .p-8 {
                padding: 1rem !important;
            }
        }
        
        /* Touch-friendly elements */
        .btn-view, .btn-practice, .practice-option, .answer-option, .flashcard button {
            min-height: 48px;
            touch-action: manipulation;
            -webkit-tap-highlight-color: transparent;
            user-select: none;
            -webkit-user-select: none;
            position: relative;
            overflow: hidden;
        }
        
        /* Touch feedback animation */
        .practice-option::after, .answer-option::after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 0;
            height: 0;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: translate(-50%, -50%);
            transition: width 0.2s ease, height 0.2s ease;
            pointer-events: none;
            z-index: 1;
        }
        
        .practice-option:active::after, .answer-option:active::after {
            width: 100px;
            height: 100px;
        }
        
        /* Prevent zoom on double tap */
        .flashcard, .practice-option, .answer-option, .tab-btn {
            touch-action: manipulation;
        }
        
        /* Better modal positioning on mobile */
        @media (max-width: 768px) and (orientation: landscape) {
            .fixed.inset-0 {
                padding: 0.5rem;
            }
            .flashcard {
                min-height: 160px !important;
            }
        }
    `;
    document.head.appendChild(style);
});

// Global functions
// Debug logging
console.log('Vocabulary.js loaded successfully');
console.log('Available vocabulary data:', Object.keys(vocabularyData));

// Final export of all functions
console.log('📋 Available vocabulary data:', Object.keys(vocabularyData));

// Last chance export
setTimeout(() => {
    exportFunctions();
    
    // Additional functions for practice modes
    if (typeof window !== 'undefined') {
        window.restartFlashcards = restartFlashcards;
        window.generateQuizQuestion = generateQuizQuestion;
        window.selectAnswer = selectAnswer;
        window.nextQuizQuestion = nextQuizQuestion;
        window.completeQuiz = completeQuiz;
        window.restartQuiz = restartQuiz;
        window.generateDragDropRound = generateDragDropRound;
        window.startDrag = startDrag;
        window.endDrag = endDrag;
        window.allowDrop = allowDrop;
        window.dragLeave = dragLeave;
        window.dropWord = dropWord;
        window.completeRound = completeRound;
        window.completeDragDropPractice = completeDragDropPractice;
        window.restartDragDrop = restartDragDrop;
        
        console.log('🚀 All vocabulary functions ready!');
    }
}, 10); 