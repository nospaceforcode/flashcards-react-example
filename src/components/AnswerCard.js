import React from "react"
import styled from "styled-components"
import "./style.css"
import { difficon } from "../components/Chore"
import PropTypes from "prop-types"

const DifficultyLevel = styled.div`
    position: absolute;
    box-sizing: border-box;
    display: -webkit-box;
    display: -moz-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 30px;
    border-bottom: 1px solid #97afc3;
    padding: 0 0.75em;
    border-radius: 9px 9px 0 0;
    font-size: 11px;
    text-transform: uppercase;
    font-weight: 300;
    font-style: italic;
    line-height: 0;
`

const DifficultyText = styled.p`
    margin: 3px 7px 0 0;
`

const DifficultyIcon = styled.i`
    color: #f6993f;
    font-size: 14px;
`

const CardText = styled.p`
    align-self: center;
    margin: auto 0;
    font-size: 30px;
    text-align: center;
`

const AnswerCard = ({ difficulty, answers }) => {
    return (
        <>
            <DifficultyLevel>
                <DifficultyText>Difficulty:</DifficultyText>
                <DifficultyIcon>{difficon(difficulty, answers)}</DifficultyIcon>
            </DifficultyLevel>
            <CardText>
                {answers.map((answer, index) => (
                    <React.Fragment key={index}>
                        {answer}
                        <br />
                    </React.Fragment>
                ))}
            </CardText>
        </>
    )
}
AnswerCard.propTypes = {
    difficulty: PropTypes.number,
    answers: PropTypes.array,
}

export default AnswerCard
