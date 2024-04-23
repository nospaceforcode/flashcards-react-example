import React from 'react';
import './style.css';
import { difficon } from '../components/Chore';

const QuestionTemplate = ({ difficulty, question }) => {
    return (
        <>
            <div className="card__difficulty">
                <p>Difficulty:</p>
                <p>{difficon(difficulty)}</p>
            </div>
            <p className="card__text">{question}</p>
            <div className="card__success card__success--hidden"></div>
        </>
    );
};

export default QuestionTemplate;