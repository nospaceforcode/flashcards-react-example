import React, { useState } from 'react';
import { FaHome, FaCaretSquareRight, FaCog, FaExchangeAlt } from 'react-icons/fa';
import { BsPencilSquare } from "react-icons/bs";
import './style.css';

const Header = ({ backlink, editing, title, name }) => {
    const [isBacklink] = useState(backlink);
    const [cardName] = useState(name);
    // const [headerShortTitle] = useState(shorttitle);
    const [isEditing, setEditing] = useState(editing);
    const [headerTitle, setTitle] = useState(title);

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleTitleClick = () => {
        setEditing(true);
    };

    const handleTitleBlur = () => {
        setEditing(false);
    };

    const handleTitleKeyDown = (e) => {
        if (e.key === 'Enter') {
            setEditing(false);
        }
    };

    return (
        <header className="header" id="header">
            {isBacklink && (
                <a href="/#" className="header__link header__link--left1">
                    <FaHome />
                </a>
            )}
            {isEditing ? (
                <>
                    <input
                        className="header__title header__title--edit"
                        type="text"
                        value={headerTitle}
                        onChange={handleTitleChange}
                        onKeyDown={handleTitleKeyDown}
                        onBlur={handleTitleBlur}
                        autoFocus
                    />
                    <a href={`#/train/${cardName}`} className="header__link header__link--right1">
                        <FaCaretSquareRight />
                    </a>
                    <i id="deckSettings" className="header__link header__link--right2" data-name={cardName}>
                        <FaCog />
                    </i>
                </>
            ) : (
                <>
                    {isBacklink ? (
                        <>
                            <h1 className="header__title" onClick={handleTitleClick}>
                                {headerTitle}
                            </h1>
                            <i id="flip" className="header__link header__link--right2" aria-label="flip deck" title="flip deck">
                                <FaExchangeAlt />
                            </i>
                            <a href={`#/edit/${cardName}`} className="header__link header__link--right1" title="edit deck">
                                <BsPencilSquare />
                            </a>
                        </>
                    ) : (
                        <h1 className="header__title header__title--main" onClick={handleTitleClick}>
                            {headerTitle}
                        </h1>
                    )}
                </>
            )}
        </header>
    );
};

export default Header;
