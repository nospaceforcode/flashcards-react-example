import React from "react"
import { DifficultyLevel, DifficultyText, DifficultyIcon, CardText } from "./style/Difficulty"
import { difficon } from "../components/Chore"
import PropTypes from "prop-types"

const QuestionCard = ({ difficulty, question }) => {
    return (
        <>
            <DifficultyLevel>
                <DifficultyText>Difficulty:</DifficultyText>
                <DifficultyIcon>{difficon(difficulty, question)}</DifficultyIcon>
            </DifficultyLevel>
            <CardText>{question}</CardText>
        </>
    )
}
QuestionCard.propTypes = {
    difficulty: PropTypes.number.isRequired,
    question: PropTypes.string.isRequired,
}

export default QuestionCard
