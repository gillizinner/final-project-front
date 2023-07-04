import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import DisplayAvailableProffs from './displayAvailableProffs/displayAvailableProffs';
import DisplayChosenProffs from './displayChosenProffs';
import { AppContext } from '../appContext';
import { useParams } from 'react-router-dom';
import BasicDatePicker from './datePickerNew';
import Divider from '@mui/material/Divider';



const DateRangeForm = () => {
    const { event, location } = useParams();
    const [selectedDates, setSelectedDates] = useState([]);
    const [startDate, setstartDate] = useState(null);
    const [endDate, setendDate] = useState(null);
    const [selectedProffs, setSelectedProffs] = useState([]);
    const nav = useNavigate();

    useEffect(() => showSelectedProffs(), [selectedProffs])
    const showSelectedProffs = () => {
        console.log("selected proffs");
        console.log(selectedProffs);
    }

    const handleDateChange = (date) => {
        setSelectedDates(date);
    };
    const handleStartDateChange = (date) => {
        setstartDate(date);
    };
    const handleEndDateChange = (date) => {
        setendDate(date);
    };

    const clearSelectedDates = () => {
        setSelectedDates([]);
    };

    const showProffesionals = () => {
        nav(`/client/showAvailableProffesionals?startDate=${selectedDates[0]}&endDate=${selectedDates[1]}`);
    }

    const addToSelectedProffs = (newValue) => {
        let selectedProffsList = selectedProffs.map(item => item.proff);
        if (!selectedProffsList.includes(newValue.proff)) {
            setSelectedProffs([...selectedProffs, newValue]);
        }
    };
    const removeOfSelectedProffs = (newValue) => {
        let selectedProffsList = selectedProffs.filter(item => item.proff._id != newValue._id);
        setSelectedProffs(selectedProffsList);
        console.log("hi from removeOfSelectedProffs")
    };

    return (
        <AppContext.Provider value={{
            selectedProffs, addToSelectedProffs, removeOfSelectedProffs, event, location
        }}>
            <div className='container' style={{minHeight:"65vh"}}>
                <div className='row justify-content-between my-5'>
                    <div className='col-6'>
                        {/* <h2>Selected Event: {event}</h2>
                        <h2>Location: {location}</h2> */}
                        <h3 className='text-center' style={{ fontSize:"xxx-large",fontFamily:  'Stint Ultra Condensed',color:"rgb(235 188 127)"}}>Select Date or Date Range</h3>
                    {/* <Calendar
                            selectRange={selectedDates.length === 0}
                            value={selectedDates}
                            onChange={handleDateChange}
                        />

                        {selectedDates.length > 0 && (
                            <div>
                                <h5>Selected Dates:</h5>
                                <ul>
                                    <li>Start Date: {selectedDates[0].toLocaleDateString()}</li>
                                    <li>End Date: {selectedDates[1].toLocaleDateString()}</li>
                                </ul>
                                <button onClick={clearSelectedDates} className='btn bg-dark text-white'>Clear Selection</button>

                            </div>
                        )} */}
                    <BasicDatePicker handleStartDateChange={handleStartDateChange} handleEndDateChange={handleEndDateChange} />

                </div>
                <div className='col-5'>
                   <DisplayChosenProffs />
                </div>
            </div>
            {startDate && endDate > 0 &&<Divider />}
            {/* {selectedDates.length > 0 && (<DisplayAvailableProffs startDate={selectedDates[0]} endDate={selectedDates[1]} />)} */}
            {startDate && endDate > 0 && (<DisplayAvailableProffs startDate={startDate} endDate={endDate} />)}
        </div>
        </AppContext.Provider >
    );
};

export default DateRangeForm;




