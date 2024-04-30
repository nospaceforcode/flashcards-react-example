import React from "react"
import styled from "styled-components"
import "./style.css"
import PropTypes from "prop-types"

const ScoreText = styled.p`
    position: absolute;
    top: 170px;
    align-self: center;
    margin: auto 0;
    font-size: 28px;
    text-align: center;
`

const ScoreContent = ({ correct, total }) => {
    return (
        <>
            <p>All done!</p>
            <canvas id="scoreChart" width="300" height="300"></canvas>
            <ScoreText>
                {correct} / {total}
            </ScoreText>
        </>
    )
}
ScoreContent.propTypes = {
    correct: PropTypes.string.isRequired,
    total: PropTypes.string.isRequired,
}

export default ScoreContent
