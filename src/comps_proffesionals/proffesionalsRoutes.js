import React from 'react'
import { Route } from "react-router-dom"
import ProffesionalsHome from './proffesionalsHome'

export const ProffesionalsRoutes = () => {
    return (
        <>
            <Route path="/proffesionals/home" element={<ProffesionalsHome/>} />
            {/* <Route path="/users/userProfile/:id" element={<UserProfile/>} /> */}
        </>
    )
}
