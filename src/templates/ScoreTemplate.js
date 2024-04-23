import React from 'react';
import './style.css';

const ScoreTemplate = (correct, total) => {
    return (
        <>
            <p>All done!</p>
            <canvas id="scoreChart" width="300" height="300"></canvas>
            <p className="score__text">{correct} / {total}</p>
        </>
    );
};

export default ScoreTemplate;