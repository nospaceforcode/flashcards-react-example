import React, { useState } from 'react';
import './style.css';

const HeaderTemplate = (backlink, editing, title, name, shorttitle) => {
    const [editedTitle, setEditedTitle] = useState(title || '');

    const handleTitleChange = (event) => {
        setEditedTitle(event.target.value);
    };

    console.log(backlink, editing, title, name, shorttitle)

    return (
        <>
            {backlink && (
                <a href="/#" className="header__link header__link--left1 fa fa-home"> </a>
            )}
            {editing ? (
                <>
                    <input
                        className="header__title header__title--edit"
                        value={editedTitle}
                        onChange={handleTitleChange}
                    />
                    <a
                        className="header__link header__link--right1 fa fa-caret-square-o-right"
                        href={`#/train/${name}`}
                    > </a>
                    <i
                        id="deckSettings"
                        className="header__link header__link--right2 fa fa-cog"
                        data-name={name}
                    ></i>
                </>
            ) : (
                <>
                    <h1 className={`header__title${!backlink ? ' header__title--main' : ''}`}>
                        {shorttitle}
                    </h1>
                    {backlink && (
                        <>
                            <i
                                id="flip"
                                className="fa fa-exchange header__link header__link--right2"
                                aria-label="flip deck"
                                title="flip deck"
                            ></i>
                            <a
                                href={`#/edit/${name}`}
                                className="fa fa-pencil-square-o header__link header__link--right1"
                                title="edit deck"
                            ></a>
                        </>
                    )}
                </>
            )}
        </>
    );
};

export default HeaderTemplate;