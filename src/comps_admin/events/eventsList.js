import React, { useState, useEffect } from 'react'
import { API_URL, doApiMethod } from '../../services/apiService';
import EventItem from './eventItem';
import CheckAdmin from '../checkAdmin';
export default function EventsList() {
    const [ar, setAr] = useState([]);

    useEffect(() => {
        doApi();
    }, [])

    const doApi = async () => {
        let url = API_URL + "/events/";
        try {
            let resp = await doApiMethod(url, "GET");
            console.log("our events: ")
            console.log(resp.data);
            setAr(resp.data);
        }
        catch (err) {
            console.log(err);
            alert("there problem ,try again later")
        }

    }


    return (
        <div className='container'>
            <CheckAdmin />
            <h1>List of events in systems</h1>
            <table className='table table-striped table-hover'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Type</th>
                        <th>Location</th>
                        <th>Date</th>
                        <th>Client first name</th>
                        <th>Client Last name</th>
                    </tr>
                </thead>
                <tbody>
                    {ar.map((item, i) => {
                        return (
                            <EventItem key={item._id} doApi={doApi} index={i} item={item} />
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
