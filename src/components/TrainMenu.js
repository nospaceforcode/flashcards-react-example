import React, { useState } from 'react';
import { FaTimes, FaCheck } from "react-icons/fa";
import styled from 'styled-components';
import QuestionCard from './QuestionCard';
import AnswerCard from './AnswerCard';
// import './style.css';

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

const RetryButton = styled(ButtonBase)`
    display: block;
    width: 250px;
    margin: 40px auto 0;
    ${props => props.hidden && `display: none;`}
`;

const ShuffleButton = styled(ButtonBase)`
    display: block;
    width: 250px;
    margin: 30px auto 0;
    border: 1px solid #8DA7BE;
    box-shadow: none;
    color: #8DA7BE;
    background-color: #FDFFFC;
    &:hover {
        background-color: #56728b;
        color: #FDFFFC;
    }
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

const SelfCheckButton = styled.button`
  position: relative;
  box-sizing: border-box;
  width: 48%;
  margin: 30px 0 0;
  padding-left: 10px;
  padding-right: 10px;
  text-align: left;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 33px;
    height: 36px;
    border-left: 1px dashed #FDFFFC;
  }
`;

const SelfCheckIcon = styled.i`
  margin-right: 16px;
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
                    <CardSide $cardtype={"question"} >
                        <QuestionCard difficulty="1" question="What is the capital of France?" />
                    </CardSide>
                    <CardSide $cardtype={"question"} >
                        <AnswerCard autocheck={isAutoCheck} outcome="correct" difficulty="1" answers={["Paris"]} />
                    </CardSide>
                </div>
            </Card>
            <Score hidden={true}></Score>
            <Answer >
                <AnswerInput type="text"/>
                <SubmitButton id="checkAnswer">
                    Go &gt;
                </SubmitButton>
                <AnswerNext id="nextButtons" hidden={true}>
                    {isAutoCheck ? (
                        <SubmitButton id="nextCard" >
                            Next
                        </SubmitButton>
                    ) : (
                        <>
                            <SelfCheckButton id="wrongAnswer" >
                                <SelfCheckIcon aria-hidden="true">
                                    <FaTimes />
                                </SelfCheckIcon>
                                I was wrong
                            </SelfCheckButton>
                            <SelfCheckButton id="correctAnswer" >
                                <SelfCheckIcon aria-hidden="true">
                                    <FaCheck />
                                </SelfCheckIcon>
                                I was right
                            </SelfCheckButton>
                        </>
                    )}
                </AnswerNext>
            </Answer>
            <RetryButton id="retry" hidden={false}>
                Retry Wrong Answers
            </RetryButton>
            <ShuffleButton id="shuffle" >
                Shuffle and Start Again
            </ShuffleButton>
        </>
    );
};

export default TrainPage;
