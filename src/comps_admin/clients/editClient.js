import React from 'react'
import EditClient from '../../comps_users/clientEdit';
import CheckAdmin from '../checkAdmin';
import { API_URL, doApiMethod } from '../../services/apiService';
import { useNavigate,useParams } from 'react-router-dom';

function AdminEditClient() {
    const nav = useNavigate();
    const params = useParams();
    const doApiForm = async (bodyFormData) => {
        let url = API_URL + "/clients/" + params["id"]
        try {
            let resp = await doApiMethod(url, "PUT", bodyFormData);
            if (resp.data) {
                console.log(resp.data)
                alert("client update succefuly");
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
            <EditClient doApi={doApiForm} />
        </React.Fragment>
    )
}

export default AdminEditClient