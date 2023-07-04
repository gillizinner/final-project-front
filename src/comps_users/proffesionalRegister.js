import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm, useWatch } from "react-hook-form"
import { API_URL, doApiMethod } from '../services/apiService';
// import CheckAdmin from '..//checkAdmin';

export default function AddProffesionalForm(props) {

    const { control, register, handleSubmit, formState: { errors } } = useForm();
    const nav = useNavigate();
    const watchPassword = useWatch({ control, name: "password", defaultValue: "" });
    const watchEventTypes = useWatch({
        control,
        name: 'event_type',
        defaultValue: [],
    });

    const onSubForm = (bodyFormData) => {
        // data -> מכיל את כל המאפיינים שלה השמות של האינפוטים עם הערך שלהם
        const nameObj = {
            firstName: bodyFormData.firstName,
            lastName: bodyFormData.lastName
        };

        // Assign the name object to the bodyFormData
        bodyFormData.name = nameObj;

        // Remove the firstName and lastName properties from bodyFormData
        delete bodyFormData.firstName;
        delete bodyFormData.lastName;

        bodyFormData.event_type = Array.isArray(watchEventTypes) ? watchEventTypes : [watchEventTypes];
        delete bodyFormData.confirmPassword;
        console.log(bodyFormData);
        props.doApi(bodyFormData);
    }

    // const doApi = async (bodyFormData) => {
    //     let url = API_URL + "/proffesionals/signUp";
    //     try {

    //         let resp = await doApiMethod(url, "POST", bodyFormData)
    //         if (resp.data._id) {
    //             alert("proffesional added succefuly");
    //             nav("/admin/proffesionals")
    //         }
    //         else {
    //             alert("There problem , try again later")
    //         }
    //     }
    //     catch (err) {
    //         console.log(err);
    //         alert("There problem , or category url already in system")
    //     }
    // }


    return (

        <div className='container'>
           
            {/* <h2>Add new proffesional</h2> */}
            <form onSubmit={handleSubmit(onSubForm)} className='col-md-6 p-3 shadow' style={{background:"white"}}>
                <label>First name:</label>
                <input {...register("firstName", { required: true, minLength: 2 })} type="text" className='form-control' />
                {errors.firstName && <div className='text-danger'>Enter valid name (min 2 chars) </div>}
                <label>Last name:</label>
                <input {...register("lastName", { required: true, minLength: 2 })} type="text" className='form-control' />
                {errors.lastName && <div className='text-danger'>Enter valid name (min 2 chars) </div>}
                <label>Email:</label>
                <input {...register("email", { required: true, minLength: 2 })} type="email" className='form-control' />
                {errors.lastName && <div className='text-danger'>Enter valid email (min 2 chars) </div>}
                <label>Phone:</label>
                <input {...register("phone", { required: true, minLength: 2 })} type="tel" className='form-control' />
                {errors.phone && <div className='text-danger'>Enter valid phone (min 2 chars) </div>}
                <label>Password:</label>
                <input  {...register("password", { required: true, minLength: 5 })} type="password" className='form-control' />
                {errors.password && <div className='text-danger'>Password is required and should have a minimum length of 5 characters.</div>}
                <label>Confirm Password:</label>
                <input {...register("confirmPassword", {
                    required: true,
                    validate: (value) => value === watchPassword
                })} type="password" className='form-control' />
                {errors.confirmPassword && <div className='text-danger'>Please confirm your password.</div>}
                <label>Category:</label>
                <select {...register("category", { required: true })} className='form-control' >
                    {['Photographer','Makeup Artist','Hair Stylist','Singer','Band','Event Designer'].map(category => <option key={category} value={category}>{category}</option>)}
                </select>
                {errors.category && <div className='text-danger'>Choose area </div>}
                
                <label>Cost:</label>
                <input {...register("cost", { required: true, minLength: 2 })} type="number" className='form-control' />
                {errors.cost && <div className='text-danger'>Enter valid cost (min 0) </div>}
                <label>Event type:</label>
                {['Wedding','Bar-Miztva','Bat-Mitzva','Brit','Engagement'].map((eType) => (
                    <span key={eType}>
                        <div>
                            <input
                                type="checkbox"
                                {...register('event_type', { required: true })}
                                value={eType}
                            />
                            {eType}
                        </div>
                    </span>
                ))}
                {errors.event_type && <div className='text-danger'>At least one checkbox must be selected</div>}
                <label>Area:</label>
                <select {...register("area", { required: true })} className='form-control' >
                    {['center', 'jerusalem', 'north', 'south'].map(area => <option key={area} value={area}>{area}</option>)}
                </select>
                {errors.area && <div className='text-danger'>Choose area </div>}
                <label>Img url:</label>
                <input {...register("img_url", {})} type="text" className='form-control' />
                {errors.img_url && <div className='text-danger'>Enter valid url   (min 2 chars) </div>}
                <label hidden>Role:</label>
                <input hidden value="proffesional" {...register("role", {})} type="text" className='form-control' />
                <label>Instegram Link:</label>
                <input {...register("ig_url", { required: false, minLength: 2 })} type="text" className='form-control' />
                {errors.ig_url && <div className='text-danger'>Enter valid link (min 2) </div>}

                <div className='mt-3'>
                    <button className='btn btn-warning me-5'>Add</button>
                    
                </div>
            </form>
        </div>

    )
}
