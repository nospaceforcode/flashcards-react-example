// import React from 'react';
// import './style.css';

// const EditCardTemplate = ({ index, side1, side2, difficulty }) => {
//     return (
//         <div id={`card-${index}`} data-index={index} className="cardline cardline--edit">
//             <input className="side1 cardline__input" type="text" placeholder="Side 1" value={side1} />
//             <input className="side2 cardline__input" type="text" placeholder="Side 2" value={side2} />
//             <select className="diff cardline__select" type="number" value={difficulty}>
//                 <option value='' disabled>Difficulty</option>
//                 {[...Array(11)].map((_, i) => (
//                     <option key={i} value={i}>{i}</option>
//                 ))}
//             </select>
//             <div className="cardline__delete">
//                 <i className="deleteCard fa fa-trash-o cardline__delete fa-lg"></i>
//             </div>
//         </div>
//     );
// };

// export default EditCardTemplate;
