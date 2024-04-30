// import React from 'react';
// import './style.css';
// import { difficon } from '../components/Chore';

// const SelectTemplate = ({ deck }) => {
//     return (
//         <nav className="deckmenu">
//             {deck && deck.map((item, index) => (
//                 <div className="deckmenu__container" key={index}>
//                     <div className="deckmenu__padding"></div>
//                     <a href={`#/edit/${item.name}`} className="deckmenu__editlink fa fa-pencil-square-o fa-lg" title="edit deck"></a>
//                     <a href={`#/train/${item.name}`} className="deckmenu__deck">
//                         <h2 className="deckmenu__title">{item.shortname}</h2>
//                         <p className="deckmenu__difficulty" title="difficulty">{difficon(item.averageDifficulty, item.name)}</p>
//                         <p className="deckmenu__length">{item.cardLength} cards</p>
//                     </a>
//                 </div>
//             ))}
//             <div className="deckmenu__container">
//                 <div className="deckmenu__padding"></div>
//                 <a href="#/editnew" className="deckmenu__deck deckmenu__deck--new">
//                     <i className="deckmenu__title fa fa-plus fa-2x" aria-hidden="true" title="new deck"></i>
//                 </a>
//             </div>
//         </nav>
//     );
// };

// export default SelectTemplate;
