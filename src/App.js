import React from "react"
import { Route, Routes } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import TrainingPage from "./pages/TrainingPage"

function App() {
    return (
        <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route path="/train/:deck" element={<TrainingPage />} />
            <Route path="/edit/:deck" element={<LandingPage />} />
            <Route path="/editnew" element={<LandingPage />} />
        </Routes>
    )
}

export default App
