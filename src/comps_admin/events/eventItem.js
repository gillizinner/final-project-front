import React from 'react'
import { API_URL, doApiMethod } from '../../services/apiService';
export default function EventItem(props) {
    let item = props.item;

    // משנה תפקיד של משתמש
    const onRoleClick = async () => {
        let bodyData;
        if (item.role == "user") {
            bodyData = { role: "admin" }
        }
        else {
            bodyData = { role: "user" }
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

    return (
        <tr>
            <td>{props.index + 1}</td>
            <td>{item.type}</td>
            <td>{item.location}</td>
            <td>{new Date(item.date).toLocaleDateString() }</td>
            <td>{item.client_id.name.firstName}</td>
            <td>{item.client_id.name.lastName}</td>

            {/* <td>
                <button className='badge bg-danger'>Del</button>
            </td> */}
        </tr>
    )
}
