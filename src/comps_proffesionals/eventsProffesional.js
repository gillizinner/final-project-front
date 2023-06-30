
// import React, { useEffect, useState } from 'react'
// import { API_URL, doApiMethod } from '../services/apiService';
// import { Nav } from 'react-bootstrap';
// import {
//   MDBCard,
//   MDBCardImage,
//   MDBCardBody,
//   MDBCardTitle,
//   MDBCardText,
//   MDBRow,
//   MDBCol
// } from 'mdb-react-ui-kit';

// export default function EventsProffesional() {

//   const [info, setInfo] = useState({});
// //   const options = { year: 'numeric', month: 'long', day: 'numeric' };

//   useEffect(() => {
//     doApiInit();
//   }, [])

//   const doApiInit = async () => {
//     let url = API_URL + "/proffesionals/myInfo";
//     try {
//       let resp = await doApiMethod(url, "GET")
//       console.log(resp.data);
//       setInfo(resp.data);
//       console.log(info.events)
//     }
//     catch (err) {
//       console.log(err);
//       alert("There problem try come back later");
//     }
//   }

//   return (
//     <div>
//       <h2 className='text-center m-4'>My events</h2>
//       <MDBRow className='container align-items-center justify-contect-center row-cols-1 row-cols-md-2 g-4'>
//         {info.events?.length > 0? info.events?.map(item => {
//           return (<MDBCol>
//             <MDBCard className='h-100'>
//               <MDBCardImage
//                 src='https://mdbootstrap.com/img/new/standard/city/042.webp'
//                 alt='...'
//                 position='top'
//               />
//               <MDBCardBody>
//                 <MDBCardTitle>A {item.type} in {item.location}</MDBCardTitle>
//                 <MDBCardText>
//                   The date event is {new Date(item.date).toLocaleDateString()}.
//                   <br/>
//                   {/* לשלוח לראות מי הלקוח של הארוע */}
//                   <Nav.Link href="/proffesionals/myInfo">For more details</Nav.Link>
//                 </MDBCardText>
//               </MDBCardBody>
//             </MDBCard>
//           </MDBCol> )
//         }) : <h3> You donwt have any events </h3>}
//       </MDBRow>
//     </div>
//   );
// }

import React, { useEffect, useState } from 'react';
import { API_URL, doApiMethod } from '../services/apiService';
import NavbarGeneral from '../comps_general/navbarGeneralClient';
import { Nav } from 'react-bootstrap';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import NavbarGeneralProffesionel from '../comps_general/navbarGeneralProffesionel';

export default function EventsProffesional() {
  const [info, setInfo] = useState({});
  const [toggleStates, setToggleStates] = useState([]);

  useEffect(() => {
    doApiInit();
  }, []);

  const doApiInit = async () => {
    let url = API_URL + '/proffesionals/myInfo';
    try {
      let resp = await doApiMethod(url, 'GET');
      console.log(resp.data);
      setInfo(resp.data);
      setToggleStates(new Array(resp.data.events.length).fill(false));
    } catch (err) {
      console.log(err);
      alert('There is a problem. Please try again later.');
    }
  };

  const handleToggle = (index) => {
    setToggleStates((prevToggleStates) => {
      const newToggleStates = [...prevToggleStates];
      newToggleStates[index] = !newToggleStates[index];
      return newToggleStates;
    });
  };

  return (
    <div>
      <NavbarGeneralProffesionel/>
      <h2 className="text-center m-4">My events</h2>
      <MDBRow className="container align-items-center justify-contect-center row-cols-1 row-cols-md-2 g-4">
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
                    {/* Status: {item.status}.
                    <br /> */}
                    <div>
                      <button className="btn mt-4 mb-3 btn-success" onClick={() => handleToggle(index)}>
                        For more details
                      </button>

                      {toggleStates[index] && (
                        <div>
                          <h4>The clients of the event are:</h4>
                          <ul>
                            <li>{item.client_id.name?.firstName} {item.client_id.name?.lastName} - <br/> contect client by: {item.client_id.email}, or by calling: {item.client_id.phone}</li>
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
            <h3> You don't have any events </h3>
          </div>
        )}
      </MDBRow>
    </div>
  );
}


