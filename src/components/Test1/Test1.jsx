import React, { useState } from 'react';
import Question from './Question';

const Quiz = () => {
    const [questions, setQuestions] = useState([
        {
            id: 1,
            question: 'Шығару агрегатымен қосушылар не істейді?',
            options: [
                'a) Желбірету, тазалау, жабу әрекеттерін жасау.',
                'b) Бейнелерді тазалау және кассетаны ауыстыру.',
                'c) Жабу әрекетін бағалау және аяқты орналау.',
                'd) Шығару агрегатын тазалау және бейнелерге кірістіру.'
            ],
            answer: 'b) Бейнелерді тазалау және кассетаны ауыстыру.',
            selected: '',
            isCorrect: null
        },
        {
            id: 2,
            question: 'Қазіргі шығару машиналарының негізгі артықшылықтары кімдерге қажетті?',
            options: [
                'a) Нитканы автоматты түрде ауру.',
                'b) Аяқты орналау және строчка растау.',
                'c) Нитканың тасындысын бақылау.',
                'd) Барлық нұсқалары дұрыс түрде орындау.'
            ],
            answer: 'd) Барлық нұсқалары дұрыс түрде орындау.',
            selected: '',
            isCorrect: null
        },
        {
            id: 3,
            question: 'Қашан жасалған швей машыналары қазақстанда қолданылуы басталды?',
            options: [
                'a) 1900 жылы.',
                'b) 1920 жылы.',
                'c) 1935 жылы.',
                'd) 1950 жылы.'
            ],
            answer: 'a) 1900 жылы.',
            selected: '',
            isCorrect: null
        },
        {
            id: 4,
            question: 'Швей машыналарының негізгі түрін кімдер дамытты?',
            options: [
                'a) А. Вильсон.',
                'b) И. Зингер.',
                'c) М. Шарлет.',
                'd) П. Мавров.'
            ],
            answer: 'b) И. Зингер.',
            selected: '',
            isCorrect: null
        },
        {
            id: 5,
            question: 'Швей машиналарының классификациясы кімнің құруымен байланысты?',
            options: [
                'a) Швей машиналарының классификациясы технические специалисты байланысты.',
                'b) Швей машиналарының классификациясы машиностроительными предприятиями байланысты.',
                'c) Швей машиналарының классификациясы дизайнерами байланысты.',
                'd) Швей машиналарының классификациясы швейными мастерскими байланысты.'
            ],
            answer: ' **Правильный ответ:** b) Швей машиналарының классификациясы машиностроительными предприятиями байланысты.',
            selected: '',
            isCorrect: null
        },
        {
            id: 6,
            question: 'Швей машиналарының классификациясына қандай критерийлер қатысты?',
            options: [
                'a) Швей машиналарының классификациясына критерийлерге қатысты байланысты.',
                'b) Швей машиналарының классификациясына өлшемдерге қатысты байланысты.',
                'c) Швей машиналарының классификациясына материалдарға қатысты байланысты.',
                'd) Швей машиналарының классификациясына технологияларға қатысты байланысты.'
            ],
            answer: ' **Правильный ответ:** a) Швей машиналарының классификациясына критерийлерге қатысты байланысты.',
            selected: '',
            isCorrect: null
        },
        {
            id: 7,
            question: 'Жабықтың әрекеттік мәндігіне байланысты швей машиналарының бөлінуін кімдер жасайды?',
            options: [
                'a) Жабықтың әрекеттік мәндігіне байланысты швей машиналарының бөлінуін машиностроители жасайды.',
                'b) Жабықтың әрекеттік мәндігіне байланысты швей машиналарының бөлінуін швейның қызметкерлері жасайды.',
                'c) Жабықтың әрекеттік мәндігіне байланысты швей машиналарының бөлінуін технические специалисты жасайды.',
                'd) Жабықтың әрекеттік мәндігіне байланысты швей машиналарының бөлінуін швейның дизайнерлері жасайды.'
            ],
            answer: ' **Правильный ответ:** c) Жабықтың әрекеттік мәндігіне байланысты швей машиналарының бөлінуін технические специалисты жасайды.',
            selected: '',
            isCorrect: null
        },
        {
            id: 8,
            question: 'Швей машиналарының типтерінің белгілігі қалай анықталады?',
            options: [
                'a) Швей машиналарының типтерінің белгілігі көлем бойынша анықталады.',
                'b) Швей машиналарының типтерінің белгілігі бойынша жылдамдықпен анықталады.',
                'c) Швей машиналарының типтерінің белгілігін анықтайтын букітпен анықталады.',
                'd) Швей машиналарының типтерінің белгілігі швей машиналарының цветпен анықталады.'
            ],
            answer: ' **Правильный ответ:** c) Швей машиналарының типтерінің белгілігін анықтайтын букітпен анықталады.',
            selected: '',
            isCorrect: null
        },
        {
            id: 9,
            question: 'Универсалды швей машиналары кімнің құрамына кірістеді?',
            options: [
                'a) Универсалды швей машиналары дизайнерлердің құрамына кірістеді.',
                'b) Универсалды швей машиналары текстил өнерушілерінің құрамына кірістеді.',
                'c) Универсалды швей машиналары текнологлардың құрамына кірістеді.',
                'd) Универсалды швей машиналары әдетте әлемге арналған машинолардың құрамына кірістеді.'
            ],
            answer: ' **Правильный ответ:** b) Универсалды швей машиналары текстил өнерушілерінің құрамына кірістеді.',
            selected: '',
            isCorrect: null
        },
        {
            "id": 10,
            "question": "Шеберлік машинасын түсіндіріңіз.",
            "options": [
                "a) Шеберлік машинасы, шеберлік мәшінелерінің толық құрылымы мен басқару құрылымын тұратын құрал.",
                "b) Шеберлік машинасы, тек промышлендік шеберлік машинасы.",
                "c) Шеберлік машинасы, тек басқару құрылымын тұратын құрал.",
                "d) Шеберлік машинасы, тек әрекет ететін жеке құрылыс элементтерінен тұратын құрал."
            ],
            "answer": "**Правильный ответ:** a) Шеберлік машинасы, шеберлік мәшінелерінің толық құрылымы мен басқару құрылымын тұратын құрал.",
            "selected": "",
            "isCorrect": null
        },
        {
            "id": 11,
            "question": "Шеберлік машинасының басқару құрылымын атауын айтыңыз.",
            "options": [
                "a) Головкалық құрылым",
                "b) Қабатты құрылым",
                "c) Жеке қабатты құрылым",
                "d) Промышлендік ұстар"
            ],
            "answer": "**Правильный ответ:** a) Головкалық құрылым",
            "selected": "",
            "isCorrect": null
        },
        {
            "id": 12,
            "question": "Шеберлік машинасының головкасының қандай бөліктері бар?",
            "options": [
                "a) Рукав, рукав қояндысы, платформа",
                "b) Головка, рукав, платформа",
                "c) Головка, рукав қояндысы, платформа",
                "d) Головка, рукав, рукав қояндысы"
            ],
            "answer": "**Правильный ответ:** c) Головка, рукав қояндысы, платформа",
            "selected": "",
            "isCorrect": null
        },
        {
            "id": 13,
            "question": "Шеберлік машинасының рукавының оң жақын бөлігіне не аталады?",
            "options": [
                "a) Фронталды қисым",
                "b) Аркадағы қисым",
                "c) Жалпы қисым",
                "d) Басқа қисым"
            ],
            "answer": "**Правильный ответ:** a) Фронталды қисым (дәске)",
            "selected": "",
            "isCorrect": null
        },
        {
            "id": 14,
            "question": "Шеберлік машинасының игінінің функциясын анықтаңыз.",
            "options": [
                "a) Өту және түсіру",
                "b) Жабу және қою",
                "c) Материалды жабу және үстіндегі істегі нысандарды өту",
                "d) Пайдалану үшін игінінің механизмін қызметі"
            ],
            "answer": "**Правильный ответ:** c) Материалды жабу және үстіндегі істегі нысандарды өту",
            "selected": "",
            "isCorrect": null
        },
        {
            "id": 1,
            "question": "Машинада қандай механизм қолданылады?",
            "options": [
                "a) Шарнирлі-бөтендікті тартыптырушы",
                "b) Колесообразный механизм",
                "c) Вал-гайка механизмі",
                "d) Педаль механизмі"
            ],
            "answer": "**Правильный ответ:** a) Шарнирлі-бөтендікті тартыптырушы",
            "selected": "",
            "isCorrect": null
        },
        {
            "id": 2,
            "question": "Палец 14-тің ішкі қолына 29-кривошиптың қиыстырылған орнын қойғанда не істеу кезінде рычаг 19-ты қолдануға болады?",
            "options": [
                "a) Машиналық жұмыстарды аяқтау",
                "b) Жолды өзгерту",
                "c) Жергілікті жылжыту",
                "d) Кемшілік күшін арттыру"
            ],
            "answer": "**Правильный ответ:** c) Жергілікті жылжыту",
            "selected": "",
            "isCorrect": null
        },
        {
            "id": 3,
            "question": "Рычаг 19-ның орталық отворына не қойылатын?",
            "options": [
                "a) 18-зеңдік палеці",
                "b) 17-дерек палеці",
                "c) 20-ауқымды палец",
                "d) 21-жетілік палец"
            ],
            "answer": "**Правильный ответ:** a) 18-зеңдік палеці",
            "selected": "",
            "isCorrect": null
        },
        {
            "id": 4,
            "question": "Машина корпусындағы 20-ауқымды шағылдауында не толтырылады?",
            "options": [
                "a) Жию қасындағы дерек",
                "b) Маса пішіндігінің жоғары жағындағы бұрыштары",
                "c) Жоғары қатынысты нығайтатын іпікті іздестір",
                "d) Шағылдауға арналған қуатын бекіту"
            ],
            "answer": "**Правильный ответ:** c) Жоғары қатынысты нығайтатын іпікті іздестір",
            "selected": "",
            "isCorrect": null
        },
        {
            "id": 5,
            "question": "20-ауқымды шағылдау үшін 20-ашу қазіргі орнына не жасалуы керек?",
            "options": [
                "a) Қаралатын жылжыту",
                "b) Палец қою",
                "c) Колесо қою",
                "d) Бутербродты кепілдету"
            ],
            "answer": "**Правильный ответ:** b) Палец қою",
            "selected": "",
            "isCorrect": null
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

export default Quiz;