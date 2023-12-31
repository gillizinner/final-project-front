import React, { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom';
import { API_URL, doApiMethod } from '../../services/apiService';
import ProffesionalItem from '../proffesionals/proffesionalItem';
import CheckAdmin from '../checkAdmin';
import PageNav from '../../comps_general/pageNav';

export default function ProffesionalsList() {
    const [ar, setAr] = useState([]);
    const [querys] = useSearchParams(); 
    let perPage = querys.get("perPage") || 10; 

    useEffect(() => {
        doApi();
    }, [querys.get("page")])

    const doApi = async () => {
        let page = querys.get("page") || 1;
        let url = API_URL + "/proffesionals/proffesionalsList/?page=" + page;
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
        <div className='adminContainer-fluid pt-4'>
            <div className='container'>
                 <CheckAdmin />
            <Link to="/admin/addProffesional" className='btn btn-info float-end'>Add new proffesional</Link>
            <h2>Proffesionals in system</h2>
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
            <div className='pb-4'>
            <PageNav urlPageApi = {API_URL + "/proffesionals/count"} perPage={perPage} navToDir="/admin/proffesionals?page=" cssClass="btn btn-outline-dark ms-2"></PageNav>
            </div>
            </div>
           
        </div>
    )
}
