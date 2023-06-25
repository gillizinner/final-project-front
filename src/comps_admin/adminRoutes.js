import React from 'react'
import LoginAdmin from './loginAdmin/loginAdmin'
import { Route } from "react-router-dom"
import ClientsList from './clients/clientsList'
import ProffesionalsList from './proffesionals/proffesionalsList'
import EventsList from './events/eventsList'
import UsersList from './users/usersList'
export const adminRoutes = () => {
    return (
        <>
            <Route path="/admin" element={<LoginAdmin />} />
            <Route path="/admin/users" element={<UsersList />} />
            <Route path="/admin/clients" element={<ClientsList />} />
            <Route path="/admin/proffesionals" element={< ProffesionalsList/>} />
            <Route path="/admin/events" element={< EventsList/>} />
        </>
    )
}
