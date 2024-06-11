import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { ItemDetailsContainer } from '../pages/ItemDetailsContainer'
import { ItemsCategory } from '../pages/ItemsCategory'

export const MainRoutes = () => {
    return (
    <Router>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/item/:id" element={<ItemDetailsContainer/>} />
            <Route path="/category/:category" element={<ItemsCategory/>} />
        </Routes>
    </Router>
    )
}
