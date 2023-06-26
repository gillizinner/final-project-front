import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useForm, useWatch } from "react-hook-form"
import { API_URL, doApiMethod } from '../../services/apiService';
import CheckAdmin from '../checkAdmin';


export default function EditProffesional() {
    const [info, setInfo] = useState({})
    const { control, register, handleSubmit, formState: { errors } } = useForm();
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
        let url = API_URL + "/proffesionals/single/" + params["id"];
        try {
            let resp = await doApiMethod(url, "GET");
            console.log(resp.data);
            console.log(resp.data.name);
            console.log(resp.data.name.firstName);
            // info.event_type.map(eType=>console.log(eType));
            setInfo(resp.data)
            console.log("our info: ");
            // console.log(info);
            // console.log(info.name);
            // console.log(info.name.firstName);
            info.event_type.map(eType => console.log(eType));
        }
        catch (err) {
            console.log(err.response);
            alert("There problem try come back later")
        }
    }

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
        // Create an array to store the selected event types
        const selectedEventTypes = [];

        // Iterate over each event_type in info
        info.event_type.forEach((eType) => {
            // Check if the checkbox for the current event_type is checked
            if (bodyFormData.event_type.includes(eType)) {
                // Add the checked event_type to the selectedEventTypes array
                selectedEventTypes.push(eType);
            }
            // Delete the property from bodyFormData
            delete bodyFormData[eType];
        });

        // Assign the selected event types array to event_type property in bodyFormData
        bodyFormData.event_type = selectedEventTypes;

        // Remove individual event_type properties from bodyFormData
        info.event_type.forEach((eType) => {
            delete bodyFormData[eType];
        });

        delete bodyFormData.confirmPassword;

        console.log(bodyFormData)
        doApiForm(bodyFormData);
    }

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

        <div className='container'>
            <CheckAdmin />
            <h2>Edit proffesional</h2>
            {info.name ? <form onSubmit={handleSubmit(onSubForm)} className='col-md-6 p-3 shadow'>
                <label>First name:</label>
                <input defaultValue={info.name.firstName} {...register("firstName", { required: true, minLength: 2 })} type="text" className='form-control' />
                {errors.firstName && <div className='text-danger'>Enter valid name (min 2 chars) </div>}
                <label>Last name:</label>
                <input defaultValue={info.name.lastName} {...register("lastName", { required: true, minLength: 2 })} type="text" className='form-control' />
                {errors.lastName && <div className='text-danger'>Enter valid name (min 2 chars) </div>}
                <label>Email:</label>
                <input defaultValue={info.email} {...register("email", { required: true, minLength: 2 })} type="email" className='form-control' />
                {errors.lastName && <div className='text-danger'>Enter valid email (min 2 chars) </div>}
                <label>Phone:</label>
                <input defaultValue={info.phone} {...register("phone", { required: true, minLength: 2 })} type="tel" className='form-control' />
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
                <input defaultValue={info.category} {...register("category", { required: true, minLength: 2 })} type="text" className='form-control' />
                {errors.category && <div className='text-danger'>Enter valid category </div>}
                <label>Cost:</label>
                <input defaultValue={info.cost} {...register("cost", { required: true, minLength: 2 })} type="number" className='form-control' />
                {errors.cost && <div className='text-danger'>Enter valid cost (min 0) </div>}
                <label>Event type:</label>
                {['wedding'].map((eType) => (
                    <span key={eType}>
                        <div>
                            <input
                                type="checkbox"
                                {...register('event_type', { required: true })}
                                value={eType}
                                defaultChecked={info.event_type.includes(eType)}
                            />
                            {eType}
                        </div>
                    </span>
                ))}
                {errors.event_type && <div className='text-danger'>At least one checkbox must be selected</div>}
                <label>Area:</label>
                <select defaultValue={info.area} {...register("area", { required: true })} className='form-control' >
                    {['center', 'jerusalem', 'north', 'south'].map(area => <option key={area} value={area}>{area}</option>)}
                </select>
                {errors.area && <div className='text-danger'>Choose area </div>}
                <label>Img url:</label>
                <input defaultValue={info.img_url} {...register("img_url", {})} type="text" className='form-control' />
                {errors.img_url && <div className='text-danger'>Enter valid url   (min 2 chars) </div>}
                <label hidden>Role:</label>
                <input hidden value={info.role} {...register("role", {})} type="text" className='form-control' />
                <img src={info.img_url} alt="img" height="100" />
                <div className='mt-3'>
                    <button className='btn btn-success me-5'>Update</button>
                    <Link className='btn btn-danger' to="/admin/proffesionals/">Back</Link>
                </div>
            </form> : <h2>Loading...</h2>}
        </div>
    )
}