import React, { useEffect, useState } from 'react';
import { API_URL, MY_INFO, doApiMethod } from '../services/apiService';
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
    // if (localStorage[MY_INFO]) {
    //   setInfo(JSON.parse(localStorage[MY_INFO]));
    // } else {
      let url = API_URL + '/clients/myInfo';
      try {
        let resp = await doApiMethod(url, 'GET');
        console.log(resp.data);
        setInfo(resp.data);
      } catch (err) {
        console.log(err);
        alert('There is a problem. Please try again later.');
      }
    // }
  };

  return (

    <div className='container-fluid' style={{ background: "RGB(235 250 255)" }}>
      <NavbarGeneralClient />
      <div className='container' style={{ minHeight: "65vh" }}>
        <h1 className='text-center pt-5'>My Events</h1>
        <div className='row justify-content-center align-items-stretch g-4 mt-1 pb-5'>
          {info.events?.length > 0 ?
            info.events?.map((item, index) => (
              <div key={index} className='col-md-4 d-flex'>
                <div className='card-container'>
                  <ImgMediaCard item={item} index={index} />
                </div>
              </div>
            )):<h2 className='text-center' style={{fontSize:"xx-large",fontFamily:  'Stint Ultra Condensed',color:"rgb(235 188 127)"}}>You don't have any events</h2>}
        </div>
      </div>


      {/* <div style={{minHeight:"450px"}}>
       <NavbarGeneralClient/>
       <h2 className="text-center m-4">My events</h2>
       <MDBRow className="container align-items-center justify-contect-center row-cols-1 row-cols-md-3 g-4">
         {info.events?.length > 0 ? (
          info.events?.map((item, index) => (
            <MDBCol key={item._id}>
              <MDBCard className="h-100">
                <MDBCardImage
                  src="https://mdbootstrap.com/img/new/standard/city/042.webp"
                  alt="..."
                  position="top"
                />
                <MDBCardBody>
                  <MDBCardTitle>
                    Your {item.type} is in {item.location}
                  </MDBCardTitle>
                  <MDBCardText>
                    Your event date is {new Date(item.date).toLocaleDateString()}.
                    <br />
                    Status: {item.status}.
                    <br />
                    <div>
                      <button className="btn mt-4 mb-3 btn-success" onClick={() => handleToggle(index)}>
                        For more details
                      </button>

                      {toggleStates[index] && (
                        <div>
                          <h4>The professionals of your event are:</h4>
                          <ul>
                            {item.proffesionals.map((proffesional) => (
                              <li key={proffesional._id}> {proffesional.category} - {proffesional.name?.firstName} {proffesional.name?.lastName}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          ))
        ) : (
          <div>
            <h3>There are no events - create an event</h3>
            <button className="btn btn-primary m-4">Let's start creating your Event!</button>
          </div>
        )}
      </MDBRow> */}

      {/* //     <div style={{minHeight:"450px"}}>
//       <NavbarGeneralClient/>
//       <h2 className="text-center m-4">My events</h2>
//       <MDBRow className="container align-items-center justify-contect-center row-cols-1 row-cols-md-3 g-4">
//         {info.events?.length > 0 ? ( */}
      {/* //           info.events?.map((item, index) => (
//             <MDBCol key={item._id}>
//               <MDBCard className="h-100">
//                 <MDBCardImage */}
      {/* //                   src="https://mdbootstrap.com/img/new/standard/city/042.webp"
//                   alt="..."
//                   position="top"
//                 /> */}
      {/* //                 <MDBCardBody>
//                   <MDBCardTitle>
//                     Your {item.type} is in {item.location}
//                   </MDBCardTitle>
//                   <MDBCardText>
//                     Your event date is {new Date(item.date).toLocaleDateString()}.
//                     <br />
//                     Status: {item.status}.
//                     <br />
//                     <div>
//                       <button className="btn mt-4 mb-3 btn-success" onClick={() => handleToggle(index)}>
//                         For more details
//                       </button>

//                       {toggleStates[index] && ( */}
      {/* //                         <div>
//                           <h4>The professionals of your event are:</h4>
//                           <ul>
//                             {item.proffesionals.map((proffesional) => ( */}
      {/* //                               <li key={proffesional._id}> {proffesional.category} - {proffesional.name?.firstName} {proffesional.name?.lastName}</li>
//                             ))}
//                           </ul> */}
      {/* //                         </div> */}
      {/* //                       )}
//                     </div> */}
      {/* //                   </MDBCardText>
//                 </MDBCardBody>
//               </MDBCard>
//             </MDBCol> */}
      {/* //           ))
//         ) : (
//           <div>
//             <h3>There are no events - create an event</h3>
//             <button className="btn btn-primary m-4">Let's start creating your Event!</button>
//           </div>
//         )}
//       </MDBRow> */}


    </div>
  );
}




