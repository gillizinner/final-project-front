import React, { useContext, useState } from 'react'
import { AppContext } from '../appContext';
import { useNavigate } from 'react-router';

export default function CreateEvent() {
    const { selectedProffs } = useContext(AppContext);
    const [message,setMessage]=useState("");
    const nav = useNavigate();
    const checkDates = () => {
        let valid = true;
        let prevDate = selectedProffs[0]?.date;
        let i = 1
        while (i < selectedProffs.length) {
            if (!((prevDate.getFullYear() == selectedProffs[i].date.getFullYear()) && (prevDate.getMonth() == selectedProffs[i].date.getMonth()) && (prevDate.getDate() == selectedProffs[i].date.getDate()))) {
                valid = false;
                break;
            }
            prevDate = selectedProffs[i].date;
            i++;
        }
        if (!valid) {
            setMessage("Choose same dates for all proffesionals")
        } else {
            setMessage("Greate!")
        }
    }
    return (
        <>
            <button onClick={() => checkDates()} className='bg-success btn'>Create Event</button>
            <br/>
            <br />
            <div>{message}</div>
        </>
    )
}
