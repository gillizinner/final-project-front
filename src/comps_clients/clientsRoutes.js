import React from 'react'
import { Route } from "react-router-dom"
// import LoginUser from './loginUser'
import ClientProfile from './clientProfile'
import ClientsHome from './clientsHome'
import EditClient from './editClient'

export const clientsRoutes = () => {
    return (
        <>
            {/* <Route path="/users/login" element={<LoginUser/>} /> */}
            <Route path="/clients/clientProfile/:id" element={<ClientProfile/>} />
            <Route path="/clients/home" element={<ClientsHome/>} />
            <Route path="/clients/editClient/:id" element={<EditClient/>} />
            {/* <Route path="/users/userProfile/:id" element={<UserProfile/>} /> */}
        </>
    )
}
