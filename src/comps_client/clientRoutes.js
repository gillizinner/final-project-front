import React from 'react'
import { Route } from "react-router-dom"
import DisplayAvailableProffs from './displayAvailableProffs/displayAvailableProffs'
import DatePicker from './datePicker'
import EventPicker from './eventPicker'
import DisplayAvailableDatesOfProff from './displayAvailableDatesOfProff'
import EndMessage from './confirmMessage'
export const clientRoutes = () => {
    return (
        <>
            <Route path="/client/eventpicker" element={<EventPicker />}></Route>
            <Route path="/client/datepicker/:event/:location" element={<DatePicker />}></Route>
            <Route path="/client/eventComfirmation" element={<EndMessage />}></Route>
            <Route path="/client/showAvailableProffesionals" element={<DisplayAvailableProffs />} />
            <Route path="/client/showAvailableProffesionalDates/:id" element={<DisplayAvailableDatesOfProff />} />
            {/* <Route path="/client/showAvailableProffesionalsOfCategory/:category" element={<DisplayAvailableProffsOfCategory />} /> */}
        </>)
}