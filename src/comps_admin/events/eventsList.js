import React, { useState, useEffect } from 'react'
import { API_URL, doApiMethod } from '../../services/apiService';
import EventItem from './eventItem';
import CheckAdmin from '../checkAdmin';
import { useSearchParams } from 'react-router-dom';
import PageNav from '../../comps_general/pageNav';

export default function EventsList() {
    const [ar, setAr] = useState([]);
    const [querys] = useSearchParams();
    let perPage = querys.get("perPage") || 10;

    useEffect(() => {
        doApi();
    }, [querys.get("page")])

    const doApi = async () => {
        let page = querys.get("page") || 1;
        let url = API_URL + "/events/?page=" + page;
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
            <PageNav urlPageApi = {API_URL + "/events/count"} perPage={perPage} navToDir="/admin/events?page=" cssClass="btn btn-warning ms-2"></PageNav>
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
