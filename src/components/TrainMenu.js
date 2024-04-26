import React, { useState } from 'react';
import styled from 'styled-components';
import './style.css';

const ProgressBar = styled.div`
    display: -webkit-box;
    display: -moz-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-content: stretch;
    width: 100%;
    height: 15px;
    margin: 2px 0 50px;
    background-color: #FDFFFC;
    box-shadow: 0 1px 4px 0 rgba(0,0,0,.14);
`;

const CardBase = styled.div`
    width: 230px;
    height: 320px;
    border-radius: 10px;
    box-shadow: 1px 1px 10px #DADDDD;
    border: 1px solid #8DA7BE;
    background-color: #FDFFFC;
    backface-visibility: hidden;
    display: flex;
    flex-direction: column;
    font-family: 'Roboto', sans-serif;
    color: #50514F;
`;

const Card = styled(CardBase)`
    display: flex;
    flex-direction: column;
    perspective: 1000px;
    margin: 20px auto 50px;
`;

const CardStack = styled(CardBase)`
    position: absolute;
    ${props => props.$num && `
        z-index: ${-1 * props.$num};
        top: ${-4 * props.$num}px;
        left: ${4 * props.$num}px;
    `}
`;

const CardSide = styled(CardBase)`
    position: absolute;
    top: 0;
    left: 0;
    ${props => props.$cardtype && props.$cardtype === "question" ? `
        z-index: 2;
        transform: rotateY(0deg);
    ` : `transform: rotateY(180deg);`}
`;


const Score = styled.div`
    position: relative;
    display: -webkit-box;
    display: -moz-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 230px;
    height: 320px;
    margin: 0 auto;
    text-align: center;
    font-family: 'Roboto', sans-serif;
    ${props => props.hidden && `display: none;`}
`;

const Answer= styled.div`
    display: -webkit-box;
    display: -moz-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90%;
    margin: 0 auto;
`;

const AnswerInput = styled.input`
    height: 1.5em;
    width: 300px;
    margin: 0 20px;
    padding: 0 0.2em;
    border: none;
    border-bottom: 1px solid #9e9e9e;
    font-size: 26px;
    font-family: 'Roboto', sans-serif;
    color: #6A6B68;
    line-height: normal;
    background-color: transparent;
    outline: none;
`;

const ButtonBase = styled.button`
    height: 36px;
    min-width: 88px;
    padding: 0 16px;
    border-radius: 2px;
    border: none;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 14px;
    text-transform: uppercase;
    background-color: #8DA7BE;
    color: #FDFFFC;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
    cursor: pointer;
    &:hover {
        background-color: #A3B7C9;
    }
`;

const SubmitButton = styled(ButtonBase)`
    width: 250px;
    margin: 30px auto 0;
`;

const AnswerNext = styled.div`
    display: -webkit-box;
    display: -moz-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 300px;
    ${props => props.hidden && `display: none;`}
`;

const TrainPage = (autocheck) => {
    const [isAutoCheck] = useState(autocheck);
    return (
        <>
            <ProgressBar />
            <Card id="card">
                <CardStack $num={1} />
                <CardStack $num={2} />
                <div id="maincard">
                    <CardSide $cardtype={"question"} ></CardSide>
                    <CardSide $cardtype={"answer"} ></CardSide>
                </div>
            </Card>
            <Score hidden={true}></Score>
            <Answer >
                <AnswerInput type="text" />
                <SubmitButton id="checkAnswer">
                    Go &gt;
                </SubmitButton>
                <AnswerNext id="nextButtons" hidden={false}>
                    {isAutoCheck ? (
                        <SubmitButton id="nextCard" >
                            Next
                        </SubmitButton>
                    ) : (
                        <>
                            <button id="wrongAnswer" className="button button--selfcheck" type="button">
                                <i className="fa fa-times" aria-hidden="true"></i>
                                I was wrong
                            </button>
                            <button id="correctAnswer" className="button button--selfcheck" type="button">
                                <i className="fa fa-check" aria-hidden="true"></i>
                                I was right
                            </button>
                        </>
                    )}
                </AnswerNext>
            </Answer>
            <button id="retry" className="button button--retry js-hidden">
                Retry Wrong Answers
            </button>
            <button id="shuffle" className="button button--shuffle">
                Shuffle and Start Again
            </button>
        </>
    );
};

export default TrainPage;
