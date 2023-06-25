import React from 'react'
import LoginAdmin from './loginAdmin/loginAdmin'
import { Route } from "react-router-dom"
import ClientsList from './clients/clientsList'
import ProffesionalsList from './proffesionals/proffesionalsList'
import EventsList from './events/eventsList'
import UsersList from './users/usersList'
import AddClientForm from './clients/addClientForm'
import EditClient from './clients/editClient'
export const adminRoutes = () => {
    return (
        <>
            <Route path="/admin" element={<LoginAdmin />} />
            <Route path="/admin/users" element={<UsersList />} />
            <Route path="/admin/clients" element={<ClientsList />} />
            <Route path="/admin/addClient" element={<AddClientForm />} />
            <Route path="/admin/editClient/:idEdit" element={<EditClient />} />
            <Route path="/admin/proffesionals" element={< ProffesionalsList/>} />
            <Route path="/admin/events" element={< EventsList/>} />
        </>
    )
}
