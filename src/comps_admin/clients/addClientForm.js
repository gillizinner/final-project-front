import React from 'react'
import CheckAdmin from '../checkAdmin'
import AddClientForm from '../../comps_users/clientRegister'
import { API_URL, doApiMethod } from '../../services/apiService';
import { useNavigate } from 'react-router-dom';

function AddClientAdmin() {
    const nav = useNavigate();
    const doApi = async (bodyFormData) => {
        let url = API_URL + "/clients/signUp";
        try {
            let resp = await doApiMethod(url, "POST", bodyFormData);
            console.log(resp.data)
            if (resp.data._id) {
                alert("client was added succefuly");
                nav("/admin/clients")
            }
            else {
                alert("There problem , try again later")
            }
        }
        catch (err) {
            console.log(err);
            alert("There problem , or client already in system")
        }
    }


    return (
        <React.Fragment>
            <CheckAdmin />
            <AddClientForm doApi={doApi} />
        </React.Fragment>

    )
}

export default AddClientAdmin