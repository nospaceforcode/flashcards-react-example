import React, { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import Header from "../components/Header"
import TrainMenu from "../components/TrainMenu"

function TrainingPage() {
    const location = useLocation()
    const trainingMenu = { autocheck: true }
    const [deckInfo, setDeckInfo] = useState({
        title: "",
        name: "",
        shorttitle: "",
        editing: false,
        backlink: true,
    })

    useEffect(() => {
        console.log("1", location.state)
        if (location.state) {
            setDeckInfo(location.state)
        }
    }, [location.state])

    console.log("2", deckInfo)
    console.log("3", location.state)

    return (
        <div className="App">
            <Header {...deckInfo} />
            <TrainMenu {...trainingMenu} />
        </div>
    )
}

export default TrainingPage
