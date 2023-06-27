import React from 'react'
import { Route } from "react-router-dom"
import ClientsHome from './clientsHome'

export const clientsRoutes = () => {
    return (
        <>
            <Route path="/clients/home" element={<ClientsHome/>} />
            {/* <Route path="/users/userProfile/:id" element={<UserProfile/>} /> */}
        </>
    )
}
