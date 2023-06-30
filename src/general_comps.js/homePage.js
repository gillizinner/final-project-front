

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
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
import AddProffesionalForm from '../comps_users/proffesionalRegister';
import { API_URL, doApiMethod } from '../services/apiService';
import AddClientForm from '../comps_users/clientRegister';
import LoginAdmin from '../comps_users/logIn.js';
import LoginUserTemp from '../comps_users/logIn.js';
import LoginUser from '../comps_users/logIn.js';

export default function HomePage() {
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



  const proffesionalDoApi = async (bodyFormData) => {
    let url = API_URL + "/proffesionals/signUp";
    try {

      let resp = await doApiMethod(url, "POST", bodyFormData)
      if (resp.data._id) {
        alert("proffesional added succefuly");
        nav("/proffesionals/home")
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

 
  const clienDoApi = async (bodyFormData) => {
    let url = API_URL + "/clients/signUp";
    try {
      let resp = await doApiMethod(url, "POST", bodyFormData);
      console.log(resp.data)
      if (resp.data._id) {
        alert("client was added succefuly");
        nav("/clients/home")
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
    <MDBContainer className="p-3 my-5 d-flex flex-column w-85">
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

          <LoginUser />
        </MDBTabsPane>

        <MDBTabsPane show={activeTab === 'register'}>
          <MDBContainer className="p-3 my-5 d-flex flex-column w-50 justift-content-center">
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

            <MDBTabsContent className='w-100'>
              <MDBTabsPane show={registrationTab === 'client'}>

                <AddClientForm doApi={clienDoApi} />
              </MDBTabsPane>

              <MDBTabsPane show={registrationTab === 'professional'}>
                <AddProffesionalForm doApi={proffesionalDoApi} />
              </MDBTabsPane>
            </MDBTabsContent>
          </MDBContainer>
        </MDBTabsPane>
      </MDBTabsContent>
    </MDBContainer>
  );
}
