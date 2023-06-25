import React, { useState, useEffect } from 'react'
import { API_URL, doApiMethod } from '../../services/apiService';
import ProffesionalItem from '../proffesionals/proffesionalItem';
export default function ProffesionalsList() {
    const [ar, setAr] = useState([]);

    useEffect(() => {
        doApi();
    }, [])

    const doApi = async () => {
        let url = API_URL + "/proffesionals/proffesionalsList";
        try {
            let resp = await doApiMethod(url, "GET");
            console.log("our proffesionals: ")
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
            <h1>List of proffesionals in systems</h1>
            <table className='table table-striped table-hover'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Active</th>
                    </tr>
                </thead>
                <tbody>
                    {ar.map((item, i) => {
                        return (
                            <ProffesionalItem key={item._id} doApi={doApi} index={i} item={item} />
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
