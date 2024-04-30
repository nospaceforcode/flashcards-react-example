import React from "react"

export const difficon = (difficulty, name) => {
    const diff = parseInt(difficulty)
    let i = 0,
        stars = []
    for (i; i < 5; i++) {
        if (diff >= i * 2 + 2) {
            stars.push(<i className="fa fa-star" aria-hidden="true" key={name + i}></i>)
        } else if (diff >= i * 2 + 1) {
            stars.push(<i className="fa fa-star-half-o" aria-hidden="true" key={name + i}></i>)
        } else {
            stars.push(<i className="fa fa-star-o" aria-hidden="true" key={name + i}></i>)
        }
    }
    return stars
}

export const progressicon = (status, name) => {
    const icons = {
        correct: "fa fa-check",
        incorrect: "fa fa-times",
        incomplete: "fa fa-minus",
    }
    return <i className={icons[status]} aria-hidden="true" key={name + status}></i>
}

export const diffselect = (difficulty, options) => {
    let repl = `value=${difficulty}`
    return options.fn(this).replace(repl, `${repl} selected="selected"`)
}
