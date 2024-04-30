// import React from 'react';
// import './style.css';
// import { difficon } from '../components/Chore';

// const AnswerTemplate = ({ autocheck, outcome, difficulty, answers }) => {
//     return (
//         <>
//             <div className={`card__difficulty ${autocheck ? `card__difficulty--${outcome}` : ''}`}>
//                 <p>Difficulty:</p>
//                 <p>{difficon(difficulty)}</p>
//             </div>
//             <p className="card__text">
//                 {answers.map((answer, index) => (
//                     <React.Fragment key={index}>
//                         {answer}<br />
//                     </React.Fragment>
//                 ))}
//             </p>
//             {autocheck && (
//                 <div className={`card__success ${outcome ? 'card__success--correct' : 'card__success--incorrect'}`}></div>
//             )}
//         </>
//     );
// };

// export default AnswerTemplate;
