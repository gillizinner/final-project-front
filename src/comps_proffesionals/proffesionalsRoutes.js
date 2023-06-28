import React from 'react'
import { Route } from "react-router-dom"
import ProffesionalProfile from './proffesionalProfile'

export const ProffesionalsRoutes = () => {
    return (
        <>
            <Route path="/proffesionals/proffesionalProfile/:id" element={<ProffesionalProfile/>} />
        </>
    )
}
