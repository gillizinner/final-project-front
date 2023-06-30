import React from 'react'
import { Route } from "react-router-dom"
import ProffesionalProfile from './proffesionalProfile'
import ProffesionalsHome from './proffesionalsHome'
import EventsProffesional from './eventsProffesional'

export const ProffesionalsRoutes = () => {
    return (
        <>
            <Route path="/proffesionals/proffesionalProfile/:id" element={<ProffesionalProfile/>} />
            <Route path="/proffesionals/home" element={<ProffesionalsHome/>} />
            <Route path="/proffesionals/eventsProffesional" element={<EventsProffesional/>} />
            {/* <Route path="/users/userProfile/:id" element={<UserProfile/>} /> */}
        </>
    )
}
