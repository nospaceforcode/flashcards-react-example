import React, {useState} from 'react';
import { FaPlus } from "react-icons/fa";
import { BsPencilSquare } from "react-icons/bs";
import './style.css';
import { difficon } from './Chore';


const DeckMenu = ({ deck }) => {
    const [deckList] = useState(deck);
    return (
        <nav className="deckmenu">
            {deckList && deckList.map((item, index) => (
                <div className="deckmenu__container" key={index}>
                    <div className="deckmenu__padding"></div>
                    <a href={`#/edit/${item.name}`} className="deckmenu__editlink" title="Edit Deck">
                        <BsPencilSquare className="fa-lg"/>
                    </a>
                    <a href={`#/train/${item.name}`} className="deckmenu__deck">
                        <h2 className="deckmenu__title">{item.shortname}</h2>
                        <p className="deckmenu__difficulty" title="difficulty">{difficon(item.averageDifficulty, item.name)}</p>
                        <p className="deckmenu__length">{item.cardLength} cards</p>
                    </a>
                </div>
            ))}
            <div className="deckmenu__container">
                <div className="deckmenu__padding"></div>
                <a href="#/editnew" className="deckmenu__deck deckmenu__deck--new">
                    <i className="deckmenu__title" aria-hidden="true" title="New Deck">
                        <FaPlus className="fa-2x"/>
                    </i>
                </a>
            </div>
        </nav>
    );
};

export default DeckMenu;
