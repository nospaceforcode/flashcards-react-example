import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaCaretSquareRight, FaCog, FaExchangeAlt } from 'react-icons/fa';
import { BsPencilSquare } from "react-icons/bs";
import styled from 'styled-components';


const HeaderBase = styled.header`
    display: -webkit-box;
    display: -moz-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 60px;
    width: 100%;
    background-color: #8DA7BE;
    box-shadow: 0 1px 4px 0 rgba(0,0,0,.14);
    font-size: 28px;
    font-family: 'Roboto', sans-serif;
    color: #FDFFFC;
`

const HeaderLink = styled(Link)`
    position: absolute;
    margin: 0;
    text-decoration: none;
    color: #FDFFFC;
    cursor: pointer;
    ${props => props.left && `left: ${props.left};`}
    ${props => props.right && `right: ${props.right};`}
`

const HeaderInputTitle = styled.input`
    display: inline-block;
    margin: 0;
    padding: 5px;
    border: 1px solid #FDFFFC;
    font-weight: 300;
    text-align: center;
    line-height: 1em;
    width: 50%;
    text-transform: none;
    color: #8DA7BE;
    font-size: 24px;
`

const HeaderEditableTitle = styled.h1`
    display: inline-block;
    margin: 0;
    padding: 5px;
    border: 1px solid #FDFFFC;
    font-size: 20px;
    font-weight: 300;
    text-align: center;
    text-transform: uppercase;
    line-height: 1em;
    &:focus {
        color: #50514F;
    }
`

const HeaderTitle = styled.h1`
    display: inline-block;
    margin: 0;
    padding: 5px;
    border: 1px solid #FDFFFC;
    text-align: center;
    text-transform: uppercase;
    line-height: 1em;
    font-size: 24px;
    font-weight: 600;
`

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
        <HeaderBase id="header">
            {isBacklink && (
                <HeaderLink to="/" left="10px">
                    <FaHome />
                </HeaderLink>
            )}
            {isEditing ? (
                <>
                    <HeaderInputTitle 
                        type="text"
                        value={headerTitle}
                        onChange={handleTitleChange}
                        onKeyDown={handleTitleKeyDown}
                        onBlur={handleTitleBlur}
                        autoFocus
                    />
                    <HeaderLink to={`/edit/${cardName}`} right="10px">
                        <FaCaretSquareRight />
                    </HeaderLink>
                    <HeaderLink id="deckSettings" right="60px">
                        <FaCog />
                    </HeaderLink>
                </>
            ) : (
                <>
                    {isBacklink ? (
                        <>
                            <HeaderEditableTitle onClick={handleTitleClick}>
                                {headerTitle}
                            </HeaderEditableTitle>
                            <HeaderLink right="60px" id="flip" aria-label="flip deck" title="Flip Deck">
                                <FaExchangeAlt />
                            </HeaderLink>
                            <HeaderLink to={`/edit/${cardName}`} right="10px" title="Edit Deck">
                                <BsPencilSquare />
                            </HeaderLink>
                        </>
                    ) : (
                        <HeaderTitle onClick={handleTitleClick}>
                            {headerTitle}
                        </HeaderTitle>
                    )}
                </>
            )}
        </HeaderBase>
    );
};

export default Header;
