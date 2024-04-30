import React from "react"
import "./style.css"
import styled from "styled-components"
import PropTypes from "prop-types"

const CardLine = styled.div`
    width: 90%;
    margin: 10px auto;
    padding: 10px;
    border-radius: 5px;
    font-family: "Roboto", sans-serif;
    font-size: 20px;
    font-style: italic;
    color: #6a6b68;
    display: -ms-grid;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 4fr 4fr 1fr 0.5fr;
    -ms-grid-columns: 4fr 4fr 1fr 0.5fr;
    grid-template-rows: 1fr;
    border-radius: 5px;
    box-shadow: 0px 0px 5px 1px #dadddd;
`

const EditCardMenu = ({ index, side1, side2, difficulty }) => {
    return (
        // <div id={`card-${index}`} data-index={index} className="cardline cardline--edit">
        <CardLine id={`card-${index}`} data-index={index}>
            <input className="side1 cardline__input" type="text" placeholder="Side 1" value={side1} />
            <input className="side2 cardline__input" type="text" placeholder="Side 2" value={side2} />
            <select className="diff cardline__select" type="number" value={difficulty}>
                <option value="" disabled>
                    Difficulty
                </option>
                {[...Array(11)].map((_, i) => (
                    <option key={i} value={i}>
                        {i}
                    </option>
                ))}
            </select>
            <div className="cardline__delete">
                <i className="deleteCard fa fa-trash-o cardline__delete fa-lg"></i>
            </div>
        </CardLine>
        // </div>
    )
}
EditCardMenu.propTypes = {
    index: PropTypes.string,
    side1: PropTypes.string,
    side2: PropTypes.string,
    difficulty: PropTypes.string,
}

export default EditCardMenu
