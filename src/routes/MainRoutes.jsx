import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { ItemDetailsContainer } from '../pages/ItemDetailsContainer'

export const MainRoutes = () => {
    return (
    <Router>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/item/:id" element={<ItemDetailsContainer/>} />
        </Routes>
    </Router>
    )
}
