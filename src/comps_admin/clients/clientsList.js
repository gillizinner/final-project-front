import React, { useState, useEffect } from 'react'
import { API_URL, doApiMethod } from '../../services/apiService';
import ClientItem from './clientsItem';

import { Link } from 'react-router-dom';


import CheckAdmin from '../checkAdmin';

export default function ClientsList() {
    const [ar, setAr] = useState([]);

    useEffect(() => {
        doApi();
    }, [])

    const doApi = async () => {
        let url = API_URL + "/clients/clientsList";
        try {
            let resp = await doApiMethod(url, "GET");
            console.log("our clients: ")
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

            {/* <CheckAdminComp /> */}
            <Link to="/admin/addClient" className='btn btn-success'>Add new client</Link>

            <CheckAdmin />

            <h1>List of clients in systems</h1>
            <table className='table table-striped table-hover'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Active</th>
                        <th>City</th>
                        <th>Street</th>
                        <th>Building</th>
                    </tr>
                </thead>
                <tbody>
                    {ar.map((item, i) => {
                        return (
                            <ClientItem key={item._id} doApi={doApi} index={i} item={item} />
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
