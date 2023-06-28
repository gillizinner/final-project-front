import React from 'react'
import { Route } from "react-router-dom"
// import LoginUser from './loginUser'
import ClientProfile from './clientProfile'

export const clientsRoutes = () => {
    return (
        <>
            {/* <Route path="/users/login" element={<LoginUser/>} /> */}
            <Route path="/clients/clientProfile/:id" element={<ClientProfile/>} />
        </>
    )
}
