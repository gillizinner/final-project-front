import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useForm, useWatch } from "react-hook-form"
import { API_URL, doApiGet, doApiMethod } from '../../services/apiService';


// import CheckAdminComp from '../checkAdminComp';


export default function EditUser() {
    const [info, setInfo] = useState({})
    const {control, register, handleSubmit, formState: { errors } } = useForm();
    const nav = useNavigate();
    const params = useParams();
    const watchPassword = useWatch({ control, name: "password", defaultValue: "" });

    // בקשה בהתחלה שתשלוף את כל המידע של הטופס
    useEffect(() => {
        doApiInit();
    }, [])

    const doApiInit = async () => {
        // עושים בקשה לשרת בשביל למלא את הטופס עם המידע 
        // שנרצה לערוך עוד רגע לפריט
        let url = API_URL + "/users/single/" + params["id"];
        try {
            let resp = await doApiGet(url);
            console.log(resp.data);
            setInfo(resp.data)
        }
        catch (err) {
            console.log(err.response);
            alert("There problem try come back later")
        }
    }

    const onSubForm = (bodyFormData) => {
        // data -> מכיל את כל המאפיינים שלה השמות של האינפוטים עם הערך שלהם
        console.log(bodyFormData)
        delete bodyFormData.confirmPassword
        doApiForm(bodyFormData);
    }

    const doApiForm = async (bodyFormData) => {
        let url = API_URL + "/users/" + params["id"];
        try {

            let resp = await doApiMethod(url, "PUT", bodyFormData)
            console.log(resp.data);
            if (resp.data) {
                alert("User update succefuly");
                nav("/admin/users")
            }
            else {
                alert("There problem , try again later")
            }
        }
        catch (err) {
            console.log(err);
            alert("There problem , or user url already in system")
        }
    }


    return (

        <div className='container'>
            {/* <CheckAdminComp /> */}
            <h2>Edit user</h2>
            {info.name ? <form onSubmit={handleSubmit(onSubForm)} className='col-md-6 p-3 shadow'>
                <label>First Name:</label>
                <input defaultValue={info.name.firstName} {...register("name.firstName", { required: true, minLength: 2 })} type="text" className='form-control' />
                {errors.name?.firstName && <div className='text-danger'>Enter a valid name (min 2 characters)</div>}

                <label>Last Name:</label>
                <input defaultValue={info.name.lastName} {...register("name.lastName", { required: true, minLength: 2 })} type="text" className='form-control' />
                {errors.name?.lastName && <div className='text-danger'>Enter a valid name (min 2 characters)</div>}

                <label>Phone:</label>
                <input defaultValue={info.phone} {...register("phone", { required: true, minLength: 2 })} type="tel" className='form-control' />
                {errors.email && <div className='text-danger'>Enter valid phone number (min 2 chars) </div>}

                <label>Email:</label>
                <input defaultValue={info.email} {...register("email", { required: true, minLength: 2 })} type="email" className='form-control' />
                {errors.email && <div className='text-danger'>Enter valid mail (min 2 chars) </div>}

                <label>Password:</label>
                <input  {...register("password", { required: true, minLength: 5 })} type="password" className='form-control' />
                {errors.password && <div className='text-danger'>Password is required and should have a minimum length of 5 characters.</div>}

                <label>Confirm Password:</label>
                <input {...register("confirmPassword", {
                    required: true,
                    validate: (value) => value === watchPassword
                })} type="password" className='form-control' />
                {errors.confirmPassword && <div className='text-danger'>Please confirm your password.</div>}

                {/* <label>Url name:</label> */}
                {/* disabled - לא מאפשר לגעת באינפוט */}
                {/* <input defaultValue={info.url_name} {...register("url_name", { required: true, minLength: 2 })} type="hidden"   className='form-control' /> */}
                {/* {errors.url_name && <div className='text-danger'>Enter valid url name (min 2 chars) </div>} */}
                {/* <label>Info:</label> */}
                {/* <textarea defaultValue={info.info} {...register("info", { required: true, minLength: 2 })} className='form-control' rows="5"></textarea> */}
                {/* {errors.url_name && <div className='text-danger'>Enter valid info  (min 2 chars) </div>} */}
                <label>Img url:</label>
                <input defaultValue={info.img_url} {...register("img_url", { required: false, minLength: 2 })} type="text" className='form-control' />
                {errors.img_url && <div className='text-danger'>Enter valid url   (min 2 chars) </div>}
                <img src={info.img_url} alt="img" height="100" />
                <div className='mt-3'>
                    <button className='btn btn-success me-5'>Update</button>
                    <Link className='btn btn-danger' to="/admin/users">Back</Link>
                </div>
            </form> : <h2>Loading...</h2>}
        </div>
    )
}
