import React from 'react'
import { Route } from "react-router-dom"
import UserProfile from './userProfile'
// import LoginUser from '../general_comps.js/homePage'
import EditClient from '../comps_clients/editClient'
import EditUser from './editUser'
import LoginUser from './logIn.js'

export const usersRoutes = () => {
    return (
        <>
            <Route path="/users/login" element={<LoginUser/>} />
            <Route path="/users/userProfile/:id" element={<UserProfile/>} />
            <Route path="/users/editUser/:id" element={<EditUser/>} />
        </>
    )
}
