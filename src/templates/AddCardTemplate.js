import React from 'react';
import './style.css';

const AddCardTemplate = () => {
    return (
        <div id="addCard" className="cardline cardline--new">
            New card<i className="fa fa-plus fa-lg" aria-hidden="true"></i>
        </div>
    );
};

export default AddCardTemplate;