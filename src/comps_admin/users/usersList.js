import React, { useState, useEffect } from 'react'
import { API_URL, doApiMethod } from '../../services/apiService';
import UserItem from './userItem';
import CheckAdmin from '../checkAdmin';
import { Link } from 'react-router-dom';
export default function UsersList() {
    const [ar, setAr] = useState([]);

    useEffect(() => {
        doApi(); 
    }, [])

    const doApi = async () => {
        let url = API_URL + "/users/usersList";
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
        <div className='container'>
            <CheckAdmin />
            {/* <CheckAdminComp /> */}
            <Link to="/admin/addUser" className='btn btn-success'>Add new User</Link>
            <h1>List of users in systems</h1>
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
        </div>
    )
}
