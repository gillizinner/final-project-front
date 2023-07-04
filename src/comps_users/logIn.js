import React from 'react'
import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom';
import { doApiMethod, API_URL, TOKEN_NAME, MY_INFO,MY_PROINFO } from '../services/apiService';


export default function LoginUser() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const nav = useNavigate();

  const onSubForm = (bodyData) => {
    // data -> מכיל את כל המאפיינים שלה השמות של האינפוטים עם הערך שלהם
    // console.log(bodyData)
    doApiForm(bodyData);
  }

  const doClientsMyInfoApi = async () => {
    let url = API_URL + "/clients/myInfo"
    try {
      let resp = await doApiMethod(url, "GET");
      // console.log(resp.data);
      // לשמור את המידע על המשתמש
      localStorage.setItem(MY_INFO, JSON.stringify(resp.data));
    }
    catch (err) {
      console.log(err.response);
      alert("User or password worng, or service down");
    }
  }
  const doProffsMyInfoApi = async () => {
    let url = API_URL + "/proffesionals/myInfo"
    try {
      let resp = await doApiMethod(url, "GET");
      // console.log(resp.data);
      // לשמור את המידע על המשתמש
      localStorage.setItem(MY_PROINFO, JSON.stringify(resp.data));
    }
    catch (err) {
      console.log(err.response);
      alert("User or password worng, or service down");
    }
  }
  const doApiForm = async (bodyData) => {
    let url = API_URL + "/users/login"
    try {
      let resp = await doApiMethod(url, "POST", bodyData);
      // console.log(resp.data.user.role);
      // לשמור את הטוקן
      localStorage.setItem(TOKEN_NAME, resp.data.token);
       // לשגר לעמוד של רשימת המשתמשים
      if (resp.data.user.role == "admin") {
        nav("/admin/clients")
      }
      else if (resp.data.user.role == "client") {
        doClientsMyInfoApi();
        nav("/clients/home")
      }
      else if(resp.data.user.role == "proffesional") {
        doProffsMyInfoApi();
        nav("/proffesionals/home")
      }
     
      
    }
    catch (err) {
      console.log(err.response);
      alert("User or password worng, or service down");
    }
  }

  let emailRef = register("email", {
    required: true,
    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
  })

  let passwordRef = register("password", { required: true, minLength: 3 });
  return (
    <div className='container'>
      <form onSubmit={handleSubmit(onSubForm)} className='col-md-6 p-3 shadow mx-auto' style={{background:"white"}}>
        <label>Email:</label>
        <input {...emailRef} type="text" className='form-control' />
        {errors.email && <div className="text-danger">Enter valid email</div>}

        <label>Password:</label>
        <input {...passwordRef} type="password" className='form-control' />
        {errors.password && <div className="text-danger">Enter min 3 charts password</div>}
        <button className='btn btn-warning mt-3'>Log in to system</button>
      </form>
    </div>
  )
}
