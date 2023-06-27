import React from 'react'
import { Route } from "react-router-dom"
import DisplayAvailableProffs from './displayAvailableProffs/displayAvailableProffs'
import DatePicker from './datePicker'
import DisplayAvailableDatesOfProff from './displayAvailableDatesOfProff'
export const clientRoutes = () => {
    return (
        <>
            <Route path="/client/datepicker" element={<DatePicker />}></Route>
            <Route path="/client/showAvailableProffesionals" element={<DisplayAvailableProffs />} />
            <Route path="/client/showAvailableProffesionalDates/:id" element={<DisplayAvailableDatesOfProff />} />
            {/* <Route path="/client/showAvailableProffesionalsOfCategory/:category" element={<DisplayAvailableProffsOfCategory />} /> */}
        </>)
}