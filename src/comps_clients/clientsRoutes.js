import React from 'react'
import { Route, Routes } from "react-router-dom"
// import LoginUser from './loginUser'
import ClientProfile from './clientProfile'
import ClientsHome from './clientsHome'
import EventsClient from './eventsClient'
import EditClient from './editClient'
import EventPicker from './eventPicker'
import DatePicker from './datePicker'
import EndMessage from './confirmMessage'
import DisplayAvailableProffs from './displayAvailableProffs/displayAvailableProffs'
import NavbarGeneralClient from '../comps_general/navbarGeneralClient'

export const clientsRoutes = () => {
    return (
        <>
            {/* <NavbarGeneralClient /> */}
            {/* <Route path="/clients/*" element={<NavbarGeneralClient />} /> */}
            <Route path="/client/*" element={<NavbarGeneralClient />} />
            {/* <Route path="/users/login" element={<LoginUser/>} /> */}
            <Route path="/clients/clientProfile/:id" element={<ClientProfile />} />
            <Route path="/clients/home" element={<ClientsHome />} />
            <Route path="/clients/eventsClient" element={<EventsClient />} />
            <Route path="/clients/editClient/:id" element={<EditClient />} />
            <Route path="/client/eventpicker" element={<><NavbarGeneralClient /><EventPicker /></>}></Route>
            <Route path="/client/datepicker/:event/:location" element={<><NavbarGeneralClient /><DatePicker /></>} />
            <Route path="/client/eventComfirmation" element={<><NavbarGeneralClient /><EndMessage /></>}></Route>
            <Route path="/client/showAvailableProffesionals" element={<DisplayAvailableProffs />} />
            {/* <Route path="/client/showAvailableProffesionalDates/:id" element={<DisplayAvailableDatesOfProff />} /> */}
            {/* <Route path="/users/userProfile/:id" element={<UserProfile/>} /> */}

        </>
    )
}
