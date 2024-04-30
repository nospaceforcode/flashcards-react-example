import React from "react"
import "./style.css"
import { progressicon } from "./Chore"
import PropTypes from "prop-types"
import styled from "styled-components"

const ProgressBarBase = styled.div`
    flex-grow: 1;
    font-size: 13px;
    text-align: center;
    color: #fff;
    ${(props) =>
        props.result === "correct"
            ? `
            background-color: #70C1B3;
	        color: #C9E8E2;
        `
            : props.result === "incorrect"
              ? `
            background-color: #F25F5C;
            color: #FAC3C2;
        `
              : `
              border-right: 1px solid lightgrey;
        `}
`

const ProgressContent = ({ bars }) => {
    return (
        <>
            {bars.map((bar, index) => (
                // <div key={index} className={`progress__step progress__step--${bar}`}>
                //     {progressicon(bar, index)}
                // </div>
                <ProgressBarBase key={index} result={bar}>
                    {progressicon(bar, index)}
                </ProgressBarBase>
            ))}
        </>
    )
}
ProgressContent.propTypes = {
    bars: PropTypes.array,
}

export default ProgressContent
