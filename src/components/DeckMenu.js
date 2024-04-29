import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { FaPlus } from "react-icons/fa";
import { BsPencilSquare } from "react-icons/bs";
import { difficon } from './Chore';
import styled from 'styled-components';


const DeckNavigator = styled.nav`
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 20px;
    margin-top: 50px;
    padding: 0 20px;
`

const DeckContainer = styled.div`
    position: relative;
	width: 100%;
	max-width: 280px;
`

const DeckContainerPadding = styled.div`
    margin-top: 150%;
`

const DeckEditLink = styled(Link)`
    position: absolute;
    top: 8px;
    right: 5px;
    z-index: 10;
    color: #8DA7BE;
    padding: 5px;
    text-decoration: none;
`

const DeckLink = styled(Link)`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: -webkit-box;
    display: -moz-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    flex-direction: column;
    -ms-flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    border-radius: 10px;
    box-shadow: 1px 1px 10px #DADDDD;
    border: 2px solid #8DA7BE;
    overflow: hidden;
    background-color: #FDFFFC;
    text-decoration: none;
    color: #50514F;
    transition: all 0.5s;
    &:hover {
        box-shadow: 2px 2px 20px 3px #DADDDD;
    }
`

const DeckTitle = styled.h2`
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    text-decoration: none;
    text-align: center;
    margin: 0;
`

const DeckDifficulty = styled.p`
    margin: 15px 0 0;
    color: #F6993F;
    text-align: center;
`

const DeckNumofCards = styled.p`
    margin: 10px 0 0;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    text-align: center;
`

const CreateNewDeckLink = styled(Link)`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: -webkit-box;
    display: -moz-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    flex-direction: column;
    -ms-flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    border-radius: 10px;
    // box-shadow: 1px 1px 10px #DADDDD;
    // border: 2px solid #8DA7BE;
    overflow: hidden;
    background-color: #FDFFFC;
    text-decoration: none;
    // color: #50514F;
    transition: all 0.5s;
    border: 1px dashed #DADDDD;
    box-shadow: inset 0 0 2px #DADDDD;
    color: #8DA7BE;
    &:hover {
        // box-shadow: 2px 2px 20px 3px #DADDDD;
        box-shadow: inset 0 0 8px 1px #DADDDD;
        color: #50514F;
    }
`

const DeckMenu = ({ deck }) => {
    const [deckList] = useState(deck);

    return (
        <DeckNavigator className="deckmenu">
            {deckList && deckList.map((item, index) => (
                <DeckContainer key={index}>
                    <DeckContainerPadding />
                    <DeckEditLink to={{
                            pathname: `/edit/${item.name}`
                            }}
                            state={{
                                title: item.title,
                                name: item.name,
                                shorttitle: item.shortname,
                                editing: true,
                                backlink: true
                        }} title="Edit Deck">
                        <BsPencilSquare className="fa-lg"/>
                    </DeckEditLink>
                    <DeckLink to={
                            {pathname: `/train/${item.name}`}
                        }
                        state={{
                            title: item.title,
                            name: item.name,
                            shorttitle: item.shortname,
                            editing: false,
                            backlink: true
                        }}
                    >
                        <DeckTitle>{item.shortname}</DeckTitle>
                        <DeckDifficulty title="difficulty">{difficon(item.averageDifficulty, item.name)}</DeckDifficulty>
                        <DeckNumofCards>{item.cardLength} cards</DeckNumofCards>
                    </DeckLink>
                </DeckContainer>
            ))}
            <DeckContainer>
                <DeckContainerPadding />
                <CreateNewDeckLink to="/editnew">
                    <DeckTitle aria-hidden="true" title="New Deck">
                        <FaPlus className="fa-2x"/>
                    </DeckTitle>
                </CreateNewDeckLink>
            </DeckContainer>
        </DeckNavigator>
    );
};

export default DeckMenu;
