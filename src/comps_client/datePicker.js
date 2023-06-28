import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import DisplayAvailableProffs from './displayAvailableProffs/displayAvailableProffs';
import DisplayChosenProffs from './displayChosenProffs';
import { AppContext } from '../appContext';

const DateRangeForm = () => {
    const [selectedDates, setSelectedDates] = useState([]);
    const [selectedProffs, setSelectedProffs] = useState([]);
    const nav = useNavigate();

    const handleDateChange = (date) => {
        setSelectedDates(date);
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
            selectedProffs, addToSelectedProffs, removeOfSelectedProffs
        }}>
            <div className='container'>
                <div className='row justify-content-between my-5'>
                    <div className='col-5'>
                        <h3>Select Date or Date Range</h3>
                        <Calendar
                            selectRange={selectedDates.length === 0}
                            value={selectedDates}
                            onChange={handleDateChange}
                        />

                        {selectedDates.length > 0 && (
                            <div>
                                <h5>Selected Dates:</h5>
                                <ul>
                                    {/* {selectedDates.map((date, index) => (
                                        <li key={index}>{date.toLocaleDateString()}</li>
                                    ))} */}
                                    <li>Start Date: {selectedDates[0].toLocaleDateString()}</li>
                                    <li>End Date: {selectedDates[1].toLocaleDateString()}</li>
                                </ul>
                                <button onClick={clearSelectedDates} className='btn bg-dark text-white'>Clear Selection</button>

                            </div>
                        )}
                    </div>
                    <div className='col-6'>
                        {selectedDates.length > 0 && (<DisplayChosenProffs />)}
                    </div>
                </div>
                {selectedDates.length > 0 && (<DisplayAvailableProffs startDate={selectedDates[0]} endDate={selectedDates[1]} />)}
            </div>
        </AppContext.Provider>
    );
};

export default DateRangeForm;




