
import React, { useEffect, useState } from 'react';
import { API_URL, doApiMethod } from '../../services/apiService';
import { Container, Nav } from 'react-bootstrap';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import NavbarGeneralProffesionel from '../../comps_general/navbarGeneralProffesionel';
import ImgMediaCard from '../eventCard/eventCard';
import './eventProffesional.css'

export default function EventsProffesional() {
  const [info, setInfo] = useState({});

  useEffect(() => {
    doApiInit();
  }, []);

  const doApiInit = async () => {
    let url = API_URL + '/proffesionals/myInfo';
    try {
      let resp = await doApiMethod(url, 'GET');
      console.log(resp.data);
      setInfo(resp.data);
    } catch (err) {
      console.log(err);
      alert('There is a problem. Please try again later.');
    }
  };

  return (
    <div className='container-fluid p-0' style={{background:"RGB(235 250 255)"}}>
      <NavbarGeneralProffesionel/>
      <div className='container'>
        <h1 className='text-center mt-4'>My Events</h1>
        <div className='row justify-content-center align-items-stretch g-4 py-3'>
          {info.events?.length > 0 &&
            info.events?.map((item, index) => (
              <div key={index} className='col-md-4 d-flex'>
                <div className='card-container'>
                  <ImgMediaCard item={item} index={index} />
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}







