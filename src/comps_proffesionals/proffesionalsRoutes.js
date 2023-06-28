import React from 'react'
import { Route } from "react-router-dom"
import ProffesionalProfile from './proffesionalProfile'
import ProffesionalsHome from './proffesionalsHome'

export const ProffesionalsRoutes = () => {
    return (
        <>
            <Route path="/proffesionals/proffesionalProfile/:id" element={<ProffesionalProfile/>} />
            <Route path="/proffesionals/home" element={<ProffesionalsHome/>} />
            {/* <Route path="/users/userProfile/:id" element={<UserProfile/>} /> */}
        </>
    )
}
