import React from "react"
import Header from "../components/Header"
import DeckMenu from "../components/DeckMenu"

function LandingPage() {
    const deckMenu = {
        deck: [
            { title: "Deck One", name: "Deck1", shortname: "D1", averageDifficulty: 3, cardLength: 20 },
            { title: "Deck Two", name: "Deck2", shortname: "D2", averageDifficulty: 2, cardLength: 15 },
        ],
    }
    let context = {
        backlink: false,
        editing: false,
        title: "Flashcard App",
        name: "LandingPage",
        shorttitle: "Landing Page",
    }
    return (
        <div className="App">
            <Header {...context} />
            <DeckMenu {...deckMenu} />
        </div>
    )
}

export default LandingPage
