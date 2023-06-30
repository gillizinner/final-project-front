import React from 'react'
import { Route } from "react-router-dom"
// import LoginUser from './loginUser'
import ClientProfile from './clientProfile'
import ClientsHome from './clientsHome'
import EditClient from './editClient'
import EventPicker from './eventPicker'
import DatePicker from './datePicker'
import EndMessage from './confirmMessage'
import DisplayAvailableProffs from './displayAvailableProffs/displayAvailableProffs'
export const clientsRoutes = () => {
    return (
        <>
            {/* <Route path="/users/login" element={<LoginUser/>} /> */}
            <Route path="/clients/clientProfile/:id" element={<ClientProfile/>} />
            <Route path="/clients/home" element={<ClientsHome/>} />
            <Route path="/clients/editClient/:id" element={<EditClient/>} />
            <Route path="/client/eventpicker" element={<EventPicker />}></Route>
            <Route path="/client/datepicker/:event/:location" element={<DatePicker/>}/>
            <Route path="/client/eventComfirmation" element={<EndMessage />}></Route>
            <Route path="/client/showAvailableProffesionals" element={<DisplayAvailableProffs />} />
            {/* <Route path="/client/showAvailableProffesionalDates/:id" element={<DisplayAvailableDatesOfProff />} /> */}
            {/* <Route path="/users/userProfile/:id" element={<UserProfile/>} /> */}
        </>
    )
}
