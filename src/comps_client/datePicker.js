import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import DisplayAvailableProffs from './displayAvailableProffs/displayAvailableProffs';

const DateRangeForm = () => {
    const [selectedDates, setSelectedDates] = useState([]);
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

    return (
        <div className='container'>
            <h1>Select Date or Date Range</h1>
            <Calendar
                selectRange={selectedDates.length === 0}
                value={selectedDates}
                onChange={handleDateChange}
            />

            {selectedDates.length > 0 && (
                <div>
                    <h2>Selected Dates:</h2>
                    <ul>
                        {selectedDates.map((date, index) => (
                            <li key={index}>{date.toLocaleDateString()}</li>
                        ))}
                    </ul>
                    <button onClick={clearSelectedDates}>Clear Selection</button>
                    {/* <button onClick={showProffesionals}>Show Available proffesionals</button> */}
                    <DisplayAvailableProffs startDate={selectedDates[0].toLocaleDateString()} endDate={selectedDates[1].toLocaleDateString()} />
                    
                </div>
            )}
        </div>
    );
};

export default DateRangeForm;




