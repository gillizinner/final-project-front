import React, { useContext, useState } from 'react'
import { AppContext } from '../appContext';
import { useNavigate } from 'react-router';
import { API_URL, doApiMethod } from '../services/apiService';

export default function CreateEvent() {
    const { selectedProffs, location, event } = useContext(AppContext);
    const [message, setMessage] = useState("");
    const nav = useNavigate();
    const checkDates = async() => {
        let valid = true;
        let prevDate = selectedProffs[0]?.date;
        let i = 1
        while (i < selectedProffs.length) {
            if (!((prevDate.getFullYear() == selectedProffs[i].date.getFullYear()) && (prevDate.getMonth() == selectedProffs[i].date.getMonth()) && (prevDate.getDate() == selectedProffs[i].date.getDate()))) {
                valid = false;
                break;
            }
            prevDate = selectedProffs[i].date;
            console.log("prev date")
            console.log(prevDate)
            i++;
        }
        if (!valid) {
            setMessage("Choose same dates for all proffesionals")
        } else {
            let eventDetailes = await doCreateEventApi(prevDate);
            nav('/client/eventComfirmation', { state: { eventDetailes } }); // Navigate to the new route with eventData as state
        }
    }

    const doCreateEventApi = async (selectedDate) => {
        let url = API_URL + "/events/";
        let proffsArray = selectedProffs.map(item => item.proff);
        try {
            let body = {
                type: event,
                location: location,
                date: selectedDate,
                proffesionals: proffsArray
            }
            let resp = await doApiMethod(url, "POST", body);
            console.log("event of client creator of event info:");
            console.log(resp.data);
            return resp.data;
        }
        catch (err) {
            console.log(err);
            alert("There problem try come back later");
        }
    }
    return (
        <>
            <button onClick={() => checkDates()} className='bg-success btn'>Create Event</button>
            <br />
            <br />
            <div>{message}</div>
        </>
    )
}
