import React, { useEffect, useState } from 'react';
import { API_URL, doApiMethod } from '../services/apiService';
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
import NavbarGeneralClient from '../comps_general/navbarGeneralClient';
import ImgMediaCard from './eventCard/eventCard';

export default function EventsClient() {
  const [info, setInfo] = useState({});

  useEffect(() => {
    doApiInit();
  }, []);

  const doApiInit = async () => {
    let url = API_URL + '/clients/myInfo';
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
    <div className='container-fluid'>
      <NavbarGeneralClient />
      <div className='container'>
        <div className='row justify-content-center align-items-stretch g-4 my-3'>
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




