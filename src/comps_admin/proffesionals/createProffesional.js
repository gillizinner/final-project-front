import React from 'react'
import AddProffesionalForm from '../../comps_users/proffesionalRegister'
import CheckAdmin from '../checkAdmin'
import { Link, useNavigate} from 'react-router-dom'
import { API_URL, doApiMethod } from '../../services/apiService'

function AddProffesionalAdmin() {
    const nav = useNavigate();
    const doApi = async (bodyFormData) => {
        let url = API_URL + "/proffesionals/signUp";
        try {

            let resp = await doApiMethod(url, "POST", bodyFormData)
            if (resp.data._id) {
                alert("proffesional added succefuly");
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
            <CheckAdmin/>
            <AddProffesionalForm doApi={doApi}/>
            <Link className='btn btn-danger' to="/admin/proffesionals/">Back</Link>
        </React.Fragment>

    )
}

export default AddProffesionalAdmin