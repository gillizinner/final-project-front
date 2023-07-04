import React from 'react'
import { API_URL, doApiMethod } from '../../services/apiService';
import { Link } from 'react-router-dom';
import { MDBIcon } from 'mdb-react-ui-kit';
export default function UserItem(props) {
    let item = props.item;

    // משנה תפקיד של משתמש
    const onRoleClick = async () => {
        let bodyData;
        if (item.role == "client") {
            bodyData = { role: "admin" }
        }
        else if (item.role == "admin") {
            bodyData = { role: "client" }
        }

        let url = API_URL + "/users/changeRole/" + item._id;
        try {
            let resp = await doApiMethod(url, "PATCH", bodyData)
            console.log(resp.data)
            if (resp.data) {
                props.doApi()
            }
        }
        catch (err) {
            console.log(err.response);
            alert("There problem, or you try to change superAdmin to user");
        }
    }
    const onActiveClick = async () => {
        let bodyData;
        if (item.active == true) {
            bodyData = { active: false }
        }
        else {
            bodyData = { active: true }
        }

        let url = API_URL + "/users/changeActive/" + item._id;
        try {
            let resp = await doApiMethod(url, "PATCH", bodyData)
            console.log(resp.data)
            if (resp.data) {
                props.doApi()
            }
        }
        catch (err) {
            console.log(err.response);
            alert("There problem, or you try to anactive the superAdmin");
        }
    }

    return (
        <tr>
            <td>{props.index + 1}</td>
            <td>{item.name.firstName}</td>
            <td>{item.name.lastName}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
            <td>
                <button className='btn role-btn' onClick={onRoleClick} >
                    {item.role}
                </button>
            </td>
            <td>
                {item.active ? <button className='btn active-btn btn-outline-primary' onClick={onActiveClick}>
                    {String(item.active)}
                </button> : <button className='btn active-btn btn-outline-danger' onClick={onActiveClick}>
                    {String(item.active)}
                </button>}

            </td>



            <td>
            <Link to={"/admin/editClient/"+item._id} ><MDBIcon far icon="edit" style={{ color: "black" }} /></Link>

            </td>
        </tr>
    )
}
