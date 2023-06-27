// import React, { useState } from 'react';
// import {
//   MDBContainer,
//   MDBTabs,
//   MDBTabsItem,
//   MDBTabsLink,
//   MDBTabsContent,
//   MDBTabsPane,
//   MDBBtn,
//   MDBIcon,
//   MDBInput,
//   MDBCheckbox
// } from 'mdb-react-ui-kit';

// export default function LoginUser() {
//   const [activeTab, setActiveTab] = useState('login');
//   const [registrationTab, setRegistrationTab] = useState('client');

//   const handleTabClick = (tab) => {
//     if (tab === activeTab) {
//       return;
//     }

//     setActiveTab(tab);
//   };

//   const handleRegistrationTabClick = (tab) => {
//     if (tab === registrationTab) {
//       return;
//     }

//     setRegistrationTab(tab);
//   };

//   return (
//     <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
//       <MDBTabs pills justify className="mb-3 d-flex flex-row justify-content-between">
//         <MDBTabsItem>
//           <MDBTabsLink onClick={() => handleTabClick('login')} active={activeTab === 'login'}>
//             Login
//           </MDBTabsLink>
//         </MDBTabsItem>
//         <MDBTabsItem>
//           <MDBTabsLink onClick={() => handleTabClick('register')} active={activeTab === 'register'}>
//             Register
//           </MDBTabsLink>
//         </MDBTabsItem>
//       </MDBTabs>

//       <MDBTabsContent>
//         <MDBTabsPane show={activeTab === 'login'}>
//           <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email' />
//           <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' />

//           <div className="d-flex justify-content-between mx-4 mb-4">
//             <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
//             <a href="!#">Forgot password?</a>
//           </div>

//           <MDBBtn className="mb-4 w-100">Sign in</MDBBtn>
//           <p className="text-center">Not a member? <a href="#!">Register</a></p>
//           {/* ... */}
//         </MDBTabsPane>

//         <MDBTabsPane show={activeTab === 'register'}>
//           <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
//             <MDBTabs pills justify className="mb-3 d-flex flex-row justify-content-between">
//               <MDBTabsItem>
//                 <MDBTabsLink onClick={() => handleRegistrationTabClick('client')} active={registrationTab === 'client'}>
//                   Client
//                 </MDBTabsLink>
//               </MDBTabsItem>
//               <MDBTabsItem>
//                 <MDBTabsLink onClick={() => handleRegistrationTabClick('professional')} active={registrationTab === 'professional'}>
//                   Professional
//                 </MDBTabsLink>
//               </MDBTabsItem>
//             </MDBTabs>

//             <MDBTabsContent>
//               <MDBTabsPane show={registrationTab === 'client'}>
//                 <MDBInput wrapperClass='mb-4' label='Name' id='form1' type='text' />
//                 <MDBInput wrapperClass='mb-4' label='Username' id='form1' type='text' />
//                 <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email' />
//                 <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password' />

//                 <div className='d-flex justify-content-center mb-4'>
//                   <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I have read and agree to the terms' />
//                 </div>

//                 <MDBBtn className="mb-4 w-100">Sign up</MDBBtn>
//                 {/* ... */}
//               </MDBTabsPane>

//               <MDBTabsPane show={registrationTab === 'professional'}>
//                 <MDBInput wrapperClass='mb-4' label='Name' id='form1' type='text' />
//                 <MDBInput wrapperClass='mb-4' label='Username' id='form1' type='text' />
//                 <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email' />
//                 <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password' />

//                 <div className='d-flex justify-content-center mb-4'>
//                   <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I have read and agree to the terms' />
//                 </div>

//                 <MDBBtn className="mb-4 w-100">Sign up</MDBBtn>
//                 {/* ... */}
//               </MDBTabsPane>
//             </MDBTabsContent>
//           </MDBContainer>
//         </MDBTabsPane>
//       </MDBTabsContent>
//     </MDBContainer>
//   );
// }


import React, { useState } from 'react';
import { Link,useNavigate} from 'react-router-dom'
import { useForm, useWatch } from 'react-hook-form';
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox
} from 'mdb-react-ui-kit';
import AddProffesionalForm from './proffesionalRegister';
import { API_URL, doApiMethod } from '../services/apiService';
import AddClientForm from './clientRegister';

export default function LoginUser() {
  const [activeTab, setActiveTab] = useState('login');
  const [registrationTab, setRegistrationTab] = useState('client');
  const { control } = useForm();
  const nav = useNavigate();
  const watchPassword = useWatch({ control, name: "password", defaultValue: "" });

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const handleTabClick = (tab) => {
    if (tab === activeTab) {
      return;
    }

    setActiveTab(tab);
  };

  const handleRegistrationTabClick = (tab) => {
    if (tab === registrationTab) {
      return;
    }

    setRegistrationTab(tab);
  };

  const handleLoginFormSubmit = (data) => {
    // Handle login form submission
    console.log(data);
  };

  // const handleRegistrationFormSubmit = (data) => {
  //   // Handle registration form submission
  //   console.log(data);
  // };

  //לשנות ראוטר שיוביל ליוזר
  const proffesionalDoApi = async (bodyFormData) => {
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

// לשנות ראוטר שיוביל ליוזר
const clienDoApi= async (bodyFormData) => {
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
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
      <MDBTabs pills justify className="mb-3 d-flex flex-row justify-content-between">
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleTabClick('login')} active={activeTab === 'login'}>
            Login
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleTabClick('register')} active={activeTab === 'register'}>
            Register
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>
        <MDBTabsPane show={activeTab === 'login'}>
          <form onSubmit={handleSubmit(handleLoginFormSubmit)}>
            <MDBInput
              wrapperClass="mb-4"
              label="Email address"
              id="email"
              type="email"
              {...register('email', { required: true })}
              error={errors.email && 'Email is required'}
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Password"
              id="password"
              type="password"
              {...register('password', { required: true })}
              error={errors.password && 'Password is required'}
            />

            <div className="d-flex justify-content-between mx-4 mb-4">
              <MDBCheckbox name="remember" id="remember" label="Remember me" {...register('remember')} />
              <a href="#!">Forgot password?</a>
            </div>

            <MDBBtn className="mb-4 w-100" type="submit">
              Sign in
            </MDBBtn>
            <p className="text-center">
              Not a member? <a href="#!">Register</a>
            </p>
          </form>
        </MDBTabsPane>

        <MDBTabsPane show={activeTab === 'register'}>
          <MDBContainer className="p-3 my-5 d-flex flex-column w-100">
            <MDBTabs pills justify className="mb-3 d-flex flex-row justify-content-between">
              <MDBTabsItem>
                <MDBTabsLink onClick={() => handleRegistrationTabClick('client')} active={registrationTab === 'client'}>
                  Client
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem>
                <MDBTabsLink
                  onClick={() => handleRegistrationTabClick('professional')}
                  active={registrationTab === 'professional'}
                >
                  Professional
                </MDBTabsLink>
              </MDBTabsItem>
            </MDBTabs>

            <MDBTabsContent>
              <MDBTabsPane show={registrationTab === 'client'}>
                {/* <form onSubmit={handleSubmit(handleRegistrationFormSubmit)}>
                  Client registration form fields

                   <MDBInput
                    wrapperClass="mb-4"
                    label="First Name"
                    id="firstName"
                    type="text"
                    {...register('name.firstName', { required: true })}
                    error={errors.name?.firstName && 'First Name is required'}
                  />
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Last Name"
                    id="lastName"
                    type="text"
                    {...register('name.lastName', { required: true })}
                    error={errors.name?.lastName && 'Last Name is required'}
                  />
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Email"
                    id="email"
                    type="email"
                    {...register('email', { required: true })}
                    error={errors.email && 'Email is required'}
                  />
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Password"
                    id="password"
                    type="password"
                    {...register('password', { required: true })}
                    error={errors.password && 'Password is required'}
                  />
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Phone"
                    id="phone"
                    type="tel"
                    {...register('phone', { required: true })}
                    error={errors.phone && 'Phone is required'}
                  />
                  <MDBInput
                    wrapperClass="mb-4"
                    label="City"
                    id="city"
                    type="text"
                    {...register('address.city', { required: true })}
                    error={errors.address?.city && 'City is required'}
                  />
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Street"
                    id="street"
                    type="text"
                    {...register('address.street', { required: true })}
                    error={errors.address?.street && 'Street is required'}
                  />
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Building"
                    id="building"
                    type="number"
                    {...register('address.building', { required: true })}
                    error={errors.address?.building && 'Building is required'}
                  />
                  <MDBBtn className="mb-4 w-100" type="submit">
                    Register as Client
                  </MDBBtn>
                </form> */}
                <AddClientForm doApi={clienDoApi}/>
              </MDBTabsPane>

              <MDBTabsPane show={registrationTab === 'professional'}>
                {/* <form onSubmit={handleSubmit(handleRegistrationFormSubmit)}>
                  Professional registration form fields
                  <MDBInput
                    wrapperClass="mb-4"
                    label="First Name"
                    id="firstName"
                    type="text"
                    {...register('name.firstName', { required: true })}
                    error={errors.name?.firstName && 'First Name is required'}
                  />
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Last Name"
                    id="lastName"
                    type="text"
                    {...register('name.lastName', { required: true })}
                    error={errors.name?.lastName && 'Last Name is required'}
                  />
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Email"
                    id="email"
                    type="email"
                    {...register('email', { required: true })}
                    error={errors.email && 'Email is required'}
                  />
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Password"
                    id="password"
                    type="password"
                    {...register('password', { required: true })}
                    error={errors.password && 'Password is required'}
                  />
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Phone"
                    id="phone"
                    type="tel"
                    {...register('phone', { required: true })}
                    error={errors.phone && 'Phone is required'}
                  />
                  <div className='mb-4'>
                     <select className='form-control'
                    wrapperClass="mb-4"
                    label="Area"
                    id="area"
                    type="select"
                    {...register('area', { required: true })}
                    error={errors.area && 'Area is required'}
                  >
                    <option value="">Select Country</option>
                    <option value="usa">USA</option>
                    <option value="canada">Canada</option>
                    <option value="uk">UK</option>
                    <option value="australia">Australia</option>
                  </select>
                  <label>Area</label>
                  </div>
                 
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Category"
                    id="phone"
                    type="tel"
                    {...register('phone', { required: true })}
                    error={errors.phone && 'Phone is required'}
                  />
                  <MDBBtn className="mb-4 w-100" type="submit">
                    Register as Professional
                  </MDBBtn>
                </form> */}
                {/* <form onSubmit={handleSubmit(handleRegistrationFormSubmit)} className='col-12 p-3 shadow'>
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
                <input {...register("category", { required: true, minLength: 2 })} type="text" className='form-control' />
                {errors.category && <div className='text-danger'>Enter valid category </div>}
                <label>Cost:</label>
                <input {...register("cost", { required: true, minLength: 2 })} type="number" className='form-control' />
                {errors.cost && <div className='text-danger'>Enter valid cost (min 0) </div>}
                <label>Event type:</label>
                {['wedding'].map((eType) => (
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
                <div className='mt-3'>
                    <button className='btn btn-success me-5'>Add</button>
                    <Link className='btn btn-danger' to="/admin/proffesionals/">Back</Link>
                </div>
            </form> */}
            <div className='container w-100'>
               <AddProffesionalForm doApi={proffesionalDoApi}/>
            </div>
           
              </MDBTabsPane>
            </MDBTabsContent>
          </MDBContainer>
        </MDBTabsPane>
      </MDBTabsContent>
    </MDBContainer>
  );
}
