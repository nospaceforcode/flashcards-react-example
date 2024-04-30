// import React from 'react';
// import './style.css';

// const TrainTemplate = (autocheck) => {
//     return (
//         <>
//             <div className="progress"></div>
//             <div className="card" id="card">
//                 <div className="card__stack card__stack--1"></div>
//                 <div className="card__stack card__stack--2"></div>
//                 <div id="maincard">
//                     <div className="card__side card__side--question"></div>
//                     <div className="card__side card__side--answer"></div>
//                 </div>
//             </div>
//             <div className="score js-hidden"></div>
//             <div className="answer">
//                 <input type="text" className="answer__input" />
//                 <button id="checkAnswer" className="button button--submit" type="button">
//                     Go &gt;
//                 </button>
//                 <div id="nextButtons" className="answer__next js-hidden">
//                     {autocheck ? (
//                         <button id="nextCard" className="button button--next" type="button">
//                             Next
//                         </button>
//                     ) : (
//                         <>
//                             <button id="wrongAnswer" className="button button--selfcheck" type="button">
//                                 <i className="fa fa-times" aria-hidden="true"></i>
//                                 I was wrong
//                             </button>
//                             <button id="correctAnswer" className="button button--selfcheck" type="button">
//                                 <i className="fa fa-check" aria-hidden="true"></i>
//                                 I was right
//                             </button>
//                         </>
//                     )}
//                 </div>
//             </div>
//             <button id="retry" className="button button--retry js-hidden">
//                 Retry Wrong Answers
//             </button>
//             <button id="shuffle" className="button button--shuffle">
//                 Shuffle and Start Again
//             </button>
//         </>
//     );
// };

// export default TrainTemplate;
