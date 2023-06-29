import React from 'react'
import { Route } from "react-router-dom"
import UserProfile from './userProfile'
import LoginUser from './loginUser'
import EditClient from '../comps_clients/editClient'

export const usersRoutes = () => {
    return (
        <>
            <Route path="/users/login" element={<LoginUser/>} />
            <Route path="/users/userProfile/:id" element={<UserProfile/>} />
           
        </>
    )
}
