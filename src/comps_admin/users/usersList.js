import React, { useState, useEffect } from 'react'
import { API_URL, doApiMethod } from '../../services/apiService';
import UserItem from './userItem';
import CheckAdmin from '../checkAdmin';
import { Link, useSearchParams } from 'react-router-dom';
import PageNav from '../../comps_general/pageNav';

export default function UsersList() {
    const [ar, setAr] = useState([]);
    const [querys] = useSearchParams();
    let perPage = querys.get("perPage") || 10;

    useEffect(() => {
        doApi();
    }, [querys.get("page")])

    const doApi = async () => {

        let page = querys.get("page") || 1;
        let url = API_URL + "/users/usersList/?page=" + page;
        try {
            let resp = await doApiMethod(url, "GET");
            console.log("our users: ")
            console.log(resp.data);
            setAr(resp.data);
        }
        catch (err) {
            console.log(err);
            alert("there problem ,try again later")
        }
    }

    return (
        <div className='container mt-4'>
            <CheckAdmin />

            <Link to="/admin/addUser" className='btn btn-success float-end'>Add new User</Link>
            <h2>Users in system</h2>
            <table className='table table-striped table-hover'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Role</th>
                        <th>Active</th>
                    </tr>
                </thead>
                <tbody>
                    {ar.map((item, i) => {
                        return (
                            <UserItem key={item._id} doApi={doApi} index={i} item={item} />
                        )
                    })}
                </tbody>
            </table>
            <div className='mb-4'>
            <PageNav urlPageApi={API_URL + "/users/count"} perPage={perPage} navToDir="/admin/users?page=" cssClass="btn btn-outline-dark ms-2"></PageNav>
            </div>
        </div>
    )
}
