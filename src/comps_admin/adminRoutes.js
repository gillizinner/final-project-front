import React from 'react'
import LoginAdmin from '../comps_users/logIn.js'
import { Route } from "react-router-dom"
import ClientsList from './clients/clientsList'
import ProffesionalsList from './proffesionals/proffesionalsList'
import EventsList from './events/eventsList'
import UsersList from './users/usersList'

import AddClientForm from './clients/addClientForm'
import EditClient from './clients/adminEditClient'

import EditProffesional from './proffesionals/adminEditProffesional'
// import AddProffesionalForm from './proffesionals/createProffesional'
import EditUser from './users/editUser'
// import EditProffesional from './proffesionals/editProffesional'
import AddUserForm from './users/addNewUser'
import AddProffesionalAdmin from './proffesionals/createProffesional'
import UserProfile from '../comps_users/userProfile'
import AdminEditClient from './clients/adminEditClient'

export const adminRoutes = () => {
    return (
        <>
            <Route path="/admin" element={<LoginAdmin />} />
            {/* <Route path="/admin/:id" element={<UserProfile/>} /> */}
            <Route path="/admin/users" element={<UsersList />} />
            <Route path="/admin/editUsers/:id" element={<EditUser />} />
            <Route path="/admin/addUser" element={<AddUserForm />} />
            <Route path="/admin/clients" element={<ClientsList />} />
            <Route path="/admin/addClient" element={<AddClientForm />} />
            <Route path="/admin/editClient/:id" element={<AdminEditClient />} />
            <Route path="/admin/proffesionals" element={< ProffesionalsList/>} />
            <Route path="/admin/addProffesional" element={< AddProffesionalAdmin/>} />
            <Route path="/admin/editProffesional/:id" element={< EditProffesional/>} />
            <Route path="/admin/events" element={< EventsList/>} />
            <Route path="/admin/proffesionals" element={<ProffesionalsList/>} />
            <Route path="/admin/events" element={<EventsList/>} />

        </>
    )
}
