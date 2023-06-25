import React from 'react'
import { useForm, useWatch } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom';
import { API_URL, doApiMethod } from '../../services/apiService';

export default function AddClientForm() {
    const { register, handleSubmit, control, formState: { errors } } = useForm();
    const nav = useNavigate();
    const watchPassword = useWatch({ control, name: "password", defaultValue: "" });

    const onSubForm = (bodyFormData) => {
        console.log(bodyFormData);
        delete bodyFormData.confirmPassword;
        doApi(bodyFormData)
    }

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
        <div className='container'>
            {/* <CheckAdminComp /> */}
            <h2>Add a new client</h2>
            <form onSubmit={handleSubmit(onSubForm)} className='col-md-6 p-3 shadow'>
                <label>First name:</label>
                <input {...register("name.firstName", { required: true, minLength: 2 })} type="text" className='form-control' />
                {errors.name?.firstName && <div className='text-danger'>Enter valid name (min 2 chars) </div>}
                
                <label>Last name:</label>
                <input {...register("name.lastName", { required: true, minLength: 2 })} type="text" className='form-control' />
                {errors.name?.lastName && <div className='text-danger'>Enter valid name (min 2 chars) </div>}
                
                <label>Email:</label>
                <input {...register("email", { required: true, minLength: 2 })} type="email" className='form-control' />
                {errors.email && <div className='text-danger'>Enter valid email (expected @) </div>}
                
                <label>Password:</label>
                <input {...register("password", { required: true, minLength: 2 })} className='form-control'></input>
                {errors.password && <div className='text-danger'>Enter valid password  (min 2 chars) </div>}

                <label>Confirm Password:</label>
                <input {...register("confirmPassword", {
                    required: true,
                    validate: (value) => value === watchPassword
                })} type="password" className='form-control' />
                {errors.confirmPassword && <div className='text-danger'>Please confirm your password.</div>}
                
                <label>Phone:</label>
                <input {...register("phone", { required: true, minLength: 2 })}type="tel" className='form-control'></input>
                {errors.phone && <div className='text-danger'>Enter valid Phone </div>}
                
                <label>Img url:</label>
                <input {...register("img_url", { required: false, minLength: 2 })} type="text" className='form-control' />
                {errors.img_url && <div className='text-danger'>Enter valid url (min 2 chars) </div>}
                
                {/* <label>Role:</label>
                <input defaultValue="client" {...register("role", { required: true, minLength: 2 })} type="text" className='form-control' />
                {errors.role && <div className='text-danger'>Enter valid role </div>}
                
                <label>Active:</label>
                <input defaultValue="true" {...register("active", { required: true, minLength: 2 })} type="text" className='form-control' />
                {errors.active && <div className='text-danger'>you must choose </div>} */}
                
                <label>City address:</label>
                <input {...register("address.city", { required: true, minLength: 2 })} type="text" className='form-control' />
                {errors.address?.city && <div className='text-danger'>Enter valid address (min 2 chars) </div>}
                
                <label>Street address:</label>
                <input {...register("address.street", { required: true, minLength: 2 })} type="text" className='form-control' />
                {errors.address?.street && <div className='text-danger'>Enter valid address (min 2 chars) </div>}
                
                <label>Building address:</label>
                <input {...register("address.building", { required: true, minLength: 2 })} type="number" className='form-control' />
                {errors.address?.building && <div className='text-danger'>Enter valid address (min 2 chars) </div>}
               
                <div className='mt-3'>
                    <button className='btn btn-success me-5'>Add new</button>
                    <Link className='btn btn-danger' to="/admin/clients">Back</Link>
                </div>
            </form>
        </div>
    )
}
