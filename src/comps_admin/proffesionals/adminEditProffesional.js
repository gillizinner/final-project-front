import React from 'react'
import { useNavigate, useParams } from 'react-router';
import EditProffesional from '../../comps_proffesionals/editProffesional';
import { API_URL, doApiMethod } from '../../services/apiService';
import CheckAdmin from '../checkAdmin';
import { Link } from 'react-router-dom';

function AdminEditProffesional() {
    const nav = useNavigate();
    const params = useParams();
    const doApiForm = async (bodyFormData) => {
        let url = API_URL + "/proffesionals/" + params["id"];
        try {

            let resp = await doApiMethod(url, "PUT", bodyFormData)
            if (resp.data) {
                alert("Proffesional update succefuly");
                nav("/admin/proffesionals")
            }
            else {
                alert("There problem , try again later")
            }
        }
        catch (err) {
            console.log(err);
            alert("There problem , or category url already in system")
        }
    }

    return (
        <React.Fragment>
            <CheckAdmin />
            <EditProffesional doApi={doApiForm} />
            {/* <Link className='btn btn-danger' to="/admin/proffesionals/">Back</Link> */}
        </React.Fragment>
    )
}

export default AdminEditProffesional