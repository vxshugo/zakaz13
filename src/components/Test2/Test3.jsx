import React, { useState } from 'react';
import Question from './Question';

const Quiz3 = () => {
    const [questions, setQuestions] = useState([
        {
            id: 1,
            question: "Материалдың бүгілуінсіз әрлеу тігістерін орындайтын шағын жүннен жасалған құрылғыларға сипаттама беріңіз.",
            options: [
                "а) Рельсті арбалар",
                "б) Жылжымалы машиналар",
                "в) Конвейерлер",
                "г) Жылжымалы конвейерлер"
            ],
            answer: "г) Жылжымалы конвейерлер",
            selected: "",
            isCorrect: null
        },
        {
            id: 2,
            question: "Бөлімдерді бүгуге арналған шағын жүннен жасалған құрылғыларға сипаттама беріңіз.",
            options: [
                "а) Бөлікті алу жүйесі",
                "б) Бөліктерді бөлу жүйесі",
                "в) Бөліктерді тигу жүйесі",
                "г) Бөліктерді бекіту жүйесі"
            ],
            answer: "а) Бөлікті алу жүйесі",
            selected: "",
            isCorrect: null
        },
        {
            id: 3,
            question: "Әр түрлі шаттл тоқу машиналары қандай операциялар үшін қолданылады?",
            options: [
                "а) Материалдарды шаттлау",
                "б) Материалдарды өту",
                "в) Материалдарды қайта қойып алу",
                "г) Материалдарды тасымалдау"
            ],
            answer: "г) Материалдарды тасымалдау",
            selected: "",
            isCorrect: null
        },
        {
            id: 4,
            question: "Ине зигзаг сызығын алу үшін қандай қозғалыстар алады?",
            options: [
                "а) Жылжымалы машина",
                "б) Жылжымалы конвейер",
                "в) Рельсті арба",
                "г) Бөлікті алу жүйесі"
            ],
            answer: "а) Жылжымалы машина",
            selected: "",
            isCorrect: null
        },
        {
            id: 5,
            question: "26 класс, 1026 класс және 335 класс машиналары бір-бірінен қалай ерекшеленеді?",
            options: [
                "а) Жиіліктері бойынша",
                "б) Дизайны бойынша",
                "в) Техникалық мүмкіндіктері бойынша",
                "г) Көлемі бойынша"
            ],
            answer: "б) Дизайны бойынша",
            selected: "",
            isCorrect: null
        },{
            id: 6,
            question: "26 кл машинада низм жүнінің бөлшектерін қалай майлау керек?",
            options: [
                "а) Жылжымалы машина",
                "б) Рельсті арба",
                "в) Бөлікті алу жүйесі",
                "г) Конвейерлер"
            ],
            answer: "г) Конвейерлер",
            selected: "",
            isCorrect: null
        },
        {
            id: 7,
            question: "335 кл машинада төменгі жіпті толтыру ретін атаңыз.",
            options: [
                "а) Жылжымалы машина",
                "б) Рельсті арба",
                "в) Бөлікті алу жүйесі",
                "г) Конвейерлер"
            ],
            answer: "б) Рельсті арба",
            selected: "",
            isCorrect: null
        },
        {
            id: 8,
            question: "335 класс машинасының модификацияларын қолдану саласы қандай?",
            options: [
                "а) Металлургия",
                "б) Химия",
                "в) Механика",
                "г) Автоматика"
            ],
            answer: "а) Металлургия",
            selected: "",
            isCorrect: null
        },
        {
            id: 9,
            question: "Сіз олардың не үшін қолданылатынын білесіз бе?",
            options: [
                "а) Белгілі жиіліктерге сай",
                "б) Материалды өту үшін",
                "в) Шағымды шығару үшін",
                "г) Көлемді бекіту үшін"
            ],
            answer: "г) Көлемді бекіту үшін",
            selected: "",
            isCorrect: null
        },
        {
            id: 10,
            question: "Тегістеу және тегістеу машиналарының жіктелуі және оларды қолдану саласы туралы айтып беріңіз.",
            options: [
                "а) Металды бекіту",
                "б) Металлургия",
                "в) Материалды шатталау",
                "г) Материалды өту"
            ],
            answer: "а) Металды бекіту",
            selected: "",
            isCorrect: null
        },
        {
            id: 11,
            question: "Екі тізбекті тізбекті тоқуды қалыптастыру процесіне қандай жұмыс органдары қатысады?",
            options: [
                "а) Жаңарып шығару, өсу, түйпіндету, камтамасыз ету",
                "б) Тоқу, түсіру, және мұздату",
                "в) Кесу, жасыру, түсіру, формаларды орнату",
                "г) Тізбек шығару, кесу, түсіру, түйпіндету"
            ],
            answer: "г) Тізбек шығару, кесу, түсіру, түйпіндету",
            selected: "",
            isCorrect: null
        },
        {
            id: 12,
            question: "Үш тізбекті тізбекті тоқуды қалыптастыру процесінің ерекшеліктері қандай?",
            options: [
                "а) Металлды жылыту, бекіту және шығаруды азайту",
                "б) Металлды кесу, тоқу және шығару",
                "в) Металлды өсіру, формаларды орнату және түсіру",
                "г) Металлды жалғыздан жасыру, түйпіндету және таспалау"
            ],
            answer: "в) Металлды өсіру, формаларды орнату және түсіру",
            selected: "",
            isCorrect: null
        },
        {
            id: 13,
            question: "51 класс машинасы мен 51 класс машинасының айырмашылығы неде?",
            options: [
                "а) Сериялар арасында",
                "б) Конструкциялары",
                "в) Универсальды машиналар",
                "г) Машиналардың өлшемінде"
            ],
            answer: "б) Конструкциялары",
            selected: "",
            isCorrect: null
        },
        {
            id: 14,
            question: ". 51 кл. машинаның ма- ; Мо-816-ДД 4 кл. шиналарынан конструктивті айырмашылығы неде?",
            options: [
                "а) Модельде",
                "б) Жаңа өлшемінде",
                "- в) Жануарлардың қысқауында",
                "г) Шинада"
            ],
            answer: "а) Модельде",
            selected: "",
            isCorrect: null
        },
        {
            id: 15,
            question: "Бір тізбекті жасырын тоқу машиналарының қолдану аясын атаңыз",
            options: [
                "а) Арттыру, астыру, кесу, түйпіндету",
                "б) Шығару, тоқу, өсу, бекіту",
                "в) Жалғыздан жасыру, жаттан жасыру, кесу, формаларды орнату",
                "г) Жылыту, шығару, бекіту, формаларды орнату"
            ],
            answer: "б) Шығару, тоқу, өсу, бекіту",
            selected: "",
            isCorrect: null
        }
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

export default Quiz3;
