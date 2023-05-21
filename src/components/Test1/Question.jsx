import React from 'react';
import "./Quiz.css"
const Question = ({ question, handleOptionSelect }) => {
    const { id, question: text, options, selected } = question;

    const handleOptionClick = (option) => {
        handleOptionSelect(id, option);
    };

    return (
        <div className="question">
            <p>{text}</p>
            <div className="options">
                {options.map(option => (
                    <button
                        key={option}
                        className={`option ${selected === option ? 'selected' : ''}`}
                        onClick={() => handleOptionClick(option)}
                    >
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Question;
