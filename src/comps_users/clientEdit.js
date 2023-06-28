import React, { useEffect, useState } from 'react'
import { useForm , useWatch} from 'react-hook-form';
import { Link, useParams } from 'react-router-dom';
import { API_URL, doApiMethod } from '../services/apiService';

export default function EditClient(props) {
    const [info, setInfo] = useState({});
    const { register, handleSubmit, control, formState: { errors } } = useForm();
    
    const params = useParams();
    const watchPassword = useWatch({ control, name: "password", defaultValue: "" });

    useEffect(() => {
        doApiInit();
    }, [])

    const doApiInit = async () => {
        let url = API_URL + "/clients/single/" + params["id"];
        try {
            let resp = await doApiMethod(url, "GET");
            console.log(resp.data);
            setInfo(resp.data);
        }
        catch (err) {
            console.log(err);
            alert("There problem try come back later");
        }
    }

    const onSubForm = (bodyFormData) => {
        console.log(bodyFormData);
        delete bodyFormData.confirmPassword;
        props.doApi(bodyFormData)
    }

    // const doApiForm = async (bodyFormData) => {
    //     let url = API_URL + "/clients/" + params["id"]
    //     try {
    //         let resp = await doApiMethod(url, "PUT", bodyFormData);
    //         if (resp.data) {
    //             console.log(resp.data)
    //             alert("client update succefuly");
    //             nav("/admin/clients")
    //         }
    //         else {
    //             alert("There problem , try again later")
    //         }
    //     }
    //     catch (err) {
    //         console.log(err);
    //         alert("There problem , or client already in system")
    //     }
    // }

    return (
        <div className='container'>
            {/* <CheckAdminComp /> */}
            <h2>Edit client</h2>
            {info.name ? <form onSubmit={handleSubmit(onSubForm)} className='col-md-6 p-3 shadow'>
                <label>First name:</label>
                <input defaultValue={info.name.firstName} {...register("name.firstName", { required: true, minLength: 2 })} type="text" className='form-control' />
                {errors.name?.firstName && <div className='text-danger'>Enter valid name (min 2 chars) </div>}

                <label>Last name:</label>
                <input defaultValue={info.name.lastName} {...register("name.lastName", { required: true, minLength: 2 })} type="text" className='form-control' />
                {errors.name?.lastName && <div className='text-danger'>Enter valid name (min 2 chars) </div>}

                <label>Email:</label>
                <input defaultValue={info.email} {...register("email", { required: true, minLength: 2 })} type="email" className='form-control' />
                {errors.email && <div className='text-danger'>Enter valid email (expected @) </div>}

                <label>Password:</label>
                <input defaultValue={info.password} {...register("password", { required: true, minLength: 2 })} type="password" className='form-control'></input>
                {errors.password && <div className='text-danger'>Enter valid password  (min 2 chars) </div>}

                <label>Confirm Password:</label>
                <input {...register("confirmPassword", {
                    required: true,
                    validate: (value) => value === watchPassword
                })} type="password" className='form-control' />
                {errors.confirmPassword && <div className='text-danger'>Please confirm your password.</div>}

                <label>Phone:</label>
                <input defaultValue={info.phone} {...register("phone", { required: true, minLength: 2 })} type="tel" className='form-control'></input>
                {errors.phone && <div className='text-danger'>Enter valid Phone </div>}

                <label>Img url:</label>
                <input defaultValue={info.img_url} {...register("img_url", { required: false, minLength: 2 })} type="text" className='form-control' />
                {errors.img_url && <div className='text-danger'>Enter valid url (min 2 chars) </div>}
                <img src={info.img_url} alt='img' height="100" />

                {/* <label>Role:</label>
                <input defaultValue="client" {...register("role", { required: true, minLength: 2 })} type="text" className='form-control' />
                {errors.role && <div className='text-danger'>Enter valid role </div>}
                
                <label>Active:</label>
                <input defaultValue="true" {...register("active", { required: true, minLength: 2 })} type="text" className='form-control' />
                {errors.active && <div className='text-danger'>you must choose </div>} */}

                <label>City address:</label>
                <input defaultValue={info.address.city} {...register("address.city", { required: true, minLength: 2 })} type="text" className='form-control' />
                {errors.address?.city && <div className='text-danger'>Enter valid address (min 2 chars) </div>}

                <label>Street address:</label>
                <input defaultValue={info.address.street} {...register("address.street", { required: true, minLength: 2 })} type="text" className='form-control' />
                {errors.address?.street && <div className='text-danger'>Enter valid address (min 2 chars) </div>}

                <label>Building address:</label>
                <input defaultValue={info.address.building} {...register("address.building", { required: false, minLength: 2 })} type="number" className='form-control' />
                {errors.address?.building && <div className='text-danger'>Enter valid address (min 2 chars) </div>}

                <div className='mt-3'>
                    <button className='btn btn-success me-5'>Update</button>
                    <Link className='btn btn-danger' to="/admin/clients">Back</Link>
                </div>
            </form> : <h2>Loading...</h2>}

        </div>
    )
}
