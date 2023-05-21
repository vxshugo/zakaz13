import React, { useState } from 'react';
import Question from './Question';

const Quiz2 = () => {
    const [questions, setQuestions] = useState([
        {
            id: 1,
            question: 'Үтіктеу орны қалай жұмыс істейді?',
            options: [
                'Жұмысшылар арасында өзара қатынас',
                'Жұмыс тобының жеткілікті аймақтары бар',
                'Жұмыс кезінде алдын-ала көру мамандары',
                'Жұмыс орнының артықшылықтары мен тез сатулары'
            ],
            answer: 'Жұмыс тобының жеткілікті аймақтары бар',
            selected: '',
            isCorrect: null
        },
        {
            id: 2,
            question: 'Жұмыс кезінде қауіпсіздік ережелері қандай темір?',
            options: [
                'Жарықсыз темір',
                'Қоңырау темірі',
                'Сызылдап жататын темір',
                'Түзетулік темір'
            ],
            answer: 'Қоңырау темірі',
            selected: '',
            isCorrect: null
        },
        {
            id: 3,
            question: 'Үтіктеу престері хсилшо бойынша қалай жіктеледі престеу және жетек?',
            options: [
                'Көрнекті болып қалады',
                'Тікелей жұмыстық өзара байланыстар арқылы жүзеге асырылады',
                'Жұмыс орнындағы мамандарға көрсетіледі',
                'Жұмыс кезіндеғі дайындық талабын жеткізеді'
            ],
            answer: 'Жұмыс орнындағы мамандарға көрсетіледі',
            selected: '',
            isCorrect: null
        },{
            id: 5,
            question: 'Жұмыс орнындағы қауіпсіздік аспектілерін білу үшін негізгі кімге байланыстырылады?',
            options: [
                'Жұмысшының артықшылықтарына',
                'Жұмыс тобына',
                'Жұмыс орнына',
                'Жұмыс орнының басшысына'
            ],
            answer: 'Жұмыс орнының басшысына',
            selected: '',
            isCorrect: null
        },
        {
            id: 6,
            question: 'Қауіпсіздік мамандарын ойлау үшін қандай негіздерді пайдаланамыз?',
            options: [
                'Тапсырмалар мен ережелер',
                'Жетекшілердің арнайы көрсеткіштері',
                'Серіктестердің бағалары',
                'Компьютерлік бағалау жүйесінің бағалары'
            ],
            answer: 'Тапсырмалар мен ережелер',
            selected: '',
            isCorrect: null
        },
        {
            id: 7,
            question: 'Кезекшілер қандай тіркелген жұмысшылар болып табылады?',
            options: [
                'Жауаптарды тексерушілер',
                'Бағалаушылар',
                'Есепшілер',
                'Кезекшілер'
            ],
            answer: 'Кезекшілер',
            selected: '',
            isCorrect: null
        },
        {
            id: 8,
            question: 'Мұндай жұмыс орнында қалай амалдастыруға болады?',
            options: [
                'Техникалық тәжірибелерді жіберу',
                'Тапсырмаларды орындау',
                'Компьютерлік курстарға қатысу',
                'Кеңес берушінің мақсатты көрсетулерін орындау'
            ],
            answer: 'Тапсырмаларды орындау',
            selected: '',
            isCorrect: null
        },
        {
            id: 9,
            question: 'Жұмыс тобындағы азаматтар қандай негізделеді?',
            options: [
                'Білім мен тәжірибе',
                'Өзара көмек',
                'Өзара көмек және көмекшілік',
                'Арнайы міндет'
            ],
            answer: 'Өзара көмек және көмекшілік',
            selected: '',
            isCorrect: null
        },
        {
            id: 10,
            question: 'Жұмыс орнындағы жеке деректерді қалай сақтауға болады?',
            options: [
                'Қалыпты мекенжайларға жасау',
                'Ескерту тақтасынан көшіру',
                'Ескерту тақтасынан көшіру және жүйеге сақтау',
                'Жүйеге сақтау'
            ],
            answer: 'Жүйеге сақтау',
            selected: '',
            isCorrect: null
        },
        {
            id: 11,
            question: 'Мысалды анықтаңыз: Жауаптарды тексеру қорытындысына нен деп атаймыз?',
            options: [
                'Клиенттік көрсеткіштер',
                'Бағалаушылар',
                'Клиенттік талаптар',
                'Өткізушілер'
            ],
            answer: 'Бағалаушылар',
            selected: '',
            isCorrect: null
        },
        {
            id: 12,
            question: 'Аталымды сызба орнына шығару үшін қандай форматты қолдану керек?',
            options: [
                'Ережелерге сәйкестендіру',
                'Типтегілерге сәйкестендіру',
                'Матрицаларды сәйкестендіру',
                'Функцияларды сәйкестендіру'
            ],
            answer: 'Типтегілерге сәйкестендіру',
            selected: '',
            isCorrect: null
        },
        {
            id: 13,
            question: 'Ағымдағы күнге дейін қанша күн бар?',
            options: [
                '31',
                '30',
                '28',
                '29'
            ],
            answer: '31',
            selected: '',
            isCorrect: null
        },
        {
            id: 14,
            question: 'JavaScript несігінде функцтр деп аталатын нен деп атаймыз?',
            options: [
                'Бөлек функция',
                'Массив',
                'Объект',
                'Қатынастырушы'
            ],
            answer: 'Бөлек функция',
            selected: '',
            isCorrect: null
        },
        {
            id: 15,
            question: "Дайындық цехында қандай технологиялық операциялар жасалады?",
            options: [
                "а) Механикалық операциялар",
                "б) Жартылай операциялар",
                "в) Өндіру және жабу операциялары",
                "г) Сыртқы операциялар"
            ],
            answer: "в) Өндіру және жабу операциялары",
            selected: "",
            isCorrect: null
        },
        {
            id: 16,
            question: "Қоймаларда немесе дайындық цехтарында материалдарды сақтаудың қандай әдістері бар?",
            options: [
                "а) Қолданушы арбалары",
                "б) Буферлер",
                "в) Стеллаждар",
                "г) Сортамалар"
            ],
            answer: "в) Стеллаждар",
            selected: "",
            isCorrect: null
        },
        {
            id: 17,
            question: "Тігін кәсіпорнына түсетін материалдар қалай түсіріледі?",
            options: [
                "а) Паллеттер арқылы",
                "б) Бөлшектер арқылы",
                "в) Баға арқылы",
                "г) Автомобильдер арқылы"
            ],
            answer: "а) Паллеттер арқылы",
            selected: "",
            isCorrect: null
        },
        {
            id: 18,
            question: "ТШП қатары не үшін қолданылады?",
            options: [
                "а) Материалдарды бөлшектеу үшін",
                "б) Жарнамалық түрде сақтау үшін",
                "в) Конвейерлердің жұмысын бақылау үшін",
                "г) Автоматтандыру үшін"
            ],
            answer: "в) Конвейерлердің жұмысын бақылау үшін",
            selected: "",
            isCorrect: null
        },
        {
            id: 19,
            question: "Ақауларды өлшеу машинасының құрылғысы туралы сөйлесіңіз.",
            options: [
                "а) Ақауларды өлшеу машинасы құрастырылған жабдықтарды анықтау үшін",
                "б) Ақауларды жаттығуларына байланысты өлшеу үшін",
                "в) Ақауларды анықтау және қабыжатын мәндерін табу үшін",
                "г) Ақауларды жаттығуларына байланысты контролдау үшін"
            ],
            answer: "а) Ақауларды өлшеу машинасы құрастырылған жабдықтарды анықтау үшін",
            selected: "",
            isCorrect: null
        },
        {
            id: 20,
            question: "Ил-2 машинасында өрнектердің ауданы қалай өлшенеді?",
            options: [
                "а) Метрлер мен миллиметрлермен",
                "б) Метрлер мен килограммдармен",
                "в) Килограммдар мен миллиметрлермен",
                "г) Метрлер мен литрлермен"
            ],
            answer: "а) Метрлер мен миллиметрлермен",
            selected: "",
            isCorrect: null
        },
        // Add more questions here
    ]);

    const handleOptionSelect = (questionId, selectedOption) => {
        const updatedQuestions = questions.map(question => {
            if (question.id === questionId) {
                const isCorrect = selectedOption === question.answer;
                return { ...question, selected: selectedOption, isCorrect };
            }
            return question;
        });
        setQuestions(updatedQuestions);
    };

    const handleSubmit = () => {
        const updatedQuestions = questions.map(question => {
            const isCorrect = question.selected === question.answer;
            return { ...question, isCorrect };
        });
        setQuestions(updatedQuestions);
    };

    const score = questions.filter(question => question.isCorrect).length;
    const totalQuestions = questions.length;

    return (
        <div className="quiz">
            {questions.map(question => (
                <Question
                    key={question.id}
                    question={question}
                    handleOptionSelect={handleOptionSelect}
                />
            ))}
            <button onClick={handleSubmit}>Жіберу</button>

            {questions.every(question => question.isCorrect !== null) && (
                <div className="results">
                    <h2>Нәтиже</h2>
                    <p>Бал: {score}/{totalQuestions}</p>
                </div>
            )}
        </div>
    );
};

export default Quiz2;
