import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm, useWatch } from "react-hook-form"
import { API_URL, doApiMethod } from '../../services/apiService';
// import CheckAdminComp from '../checkAdminComp';

export default function AddUserForm() {

    const { control, register, handleSubmit, formState: { errors } } = useForm();
    const nav = useNavigate();
    const watchPassword = useWatch({ control, name: "password", defaultValue: "" });
    const onSubForm = (bodyFormData) => {
        // data -> מכיל את כל המאפיינים שלה השמות של האינפוטים עם הערך שלהם
        console.log(bodyFormData)
        delete bodyFormData.confirmPassword
        doApi(bodyFormData);
    }

    const doApi = async (bodyFormData) => {
        let url = API_URL + "/users/newAdmin";
        try {

            let resp = await doApiMethod(url, "POST", bodyFormData)
            console.log(resp.data)
            if (resp.data._id) {
                alert("Admin added succefuly");
                nav("/admin/users")
            }
            else {
                alert("There problem , try again later")
            }
        }
        catch (err) {
            console.log(err);
            alert("There problem , or admin already in system")
        }
    }


    return (

        <div className='container'>
            {/* <CheckAdminComp /> */}
            <h2>Add new admin</h2>
            <form onSubmit={handleSubmit(onSubForm)} className='col-md-6 p-3 shadow'>
                <label>First Name:</label>
                <input  {...register("name.firstName", { required: true, minLength: 2 })} type="text" className='form-control' />
                {errors.name?.firstName && <div className='text-danger'>Enter a valid name (min 2 characters)</div>}

                <label>Last Name:</label>
                <input  {...register("name.lastName", { required: true, minLength: 2 })} type="text" className='form-control' />
                {errors.name?.lastName && <div className='text-danger'>Enter a valid name (min 2 characters)</div>}

                <label>Phone:</label>
                <input  {...register("phone", { required: true, minLength: 2 })} type="tel" className='form-control' />
                {errors.email && <div className='text-danger'>Enter valid phone number (min 2 chars) </div>}

                <label>Email:</label>
                <input  {...register("email", { required: true, minLength: 2 })} type="email" className='form-control' />
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

                {/* <label>Role:</label>
                <input defaultValue={"admin"}  {...register("role", { required: true, minLength: 5 })} type="text" className='form-control' /> */}
                {/* {errors.role && <div className='text-danger'>Password is required and should have a minimum length of 5 characters.</div>} */}

                {/* <label>Active:</label>
                <input defaultValue={"true"}  {...register("active", { required: true, minLength: 5 })} type="text" className='form-control' /> */}
                <label>Img url:</label>
                <input {...register("img_url", { required: false, minLength: 2 })} type="text" className='form-control' />
                {errors.img_url && <div className='text-danger'>Enter valid url   (min 2 chars) </div>}
                <div className='mt-3'>
                    <button className='btn btn-success me-5'>Add new</button>
                    <Link className='btn btn-danger' to="/admin/users">Back</Link>
                </div>
            </form>
        </div>
    )
}
