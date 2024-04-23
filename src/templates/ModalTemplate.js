import React from 'react';

const ModalTemplate = (isSide2, firstanswer, autocheck) => {

    return (
        <div className="modal__content" data-name="{{name}}">
            <i className="modal__close fa fa-window-close fa-lg"></i>
            <p className="modal__row">
                Show this side first:
                <select id="sideselect" className="modal__select" type="text">
                    <option value="side1">Side 1</option>
                    <option value="side2" {...isSide2 ? 'selected' : ''}>Side 2</option>
                </select>
            </p>
            <p className="modal__row">
                Only display first possible answer
                <label className="modal__switch">
                    <input id="firstanswer" className="modal__checkbox" type="checkbox" {...firstanswer ? 'checked' : ''} />
                    <span className="modal__slider"></span>
                </label>
            </p>
            <p className="modal__row">
                Automatically mark answers
                <label className="modal__switch">
                    <input id="autocheck" className="modal__checkbox" type="checkbox" {...autocheck ? 'checked' : ''} />
                    <span className="modal__slider"></span>
                </label>
            </p>
            <p className="modal__row">
                Permanently delete:
                <button id="deleteDeck" className="button modal__button" data-name="{{name}}">
                    <i className="fa fa-exclamation-triangle" aria-hidden="true"></i>
                    Delete Deck
                </button>
            </p>
        </div>
    );
};

export default ModalTemplate;