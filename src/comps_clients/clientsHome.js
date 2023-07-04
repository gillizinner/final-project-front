
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { TOKEN_NAME } from '../services/apiService';
import { useEffect, useState } from 'react';
import { API_URL, doApiMethod } from '../services/apiService';
import NavbarGeneralClient from '../comps_general/navbarGeneralClient';
import { useNavigate } from 'react-router-dom'
import '../comps_general/general.css'

function ClientsHome() {
  const [info, setInfo] = useState({});
  const nav = useNavigate();

  useEffect(() => {
    doApiInit();
  }, [])


  const doApiInit = async () => {
    let url = API_URL + "/clients/myInfo";
    try {
      let resp = await doApiMethod(url, "GET")
      console.log(resp.data);
      setInfo(resp.data);
    }
    catch (err) {
      console.log(err);
      alert("There problem try come back later");
    }
  }


  // return (
  //   <div className='container-fluid p-0 client-home' style={{ minHeight: "450px" }}>
  //     <div className='text-center'>
  //       <NavbarGeneralClient />
  //       <div className="main mt-5">
  //         <h1 className='info-txt p-4 mt-5'>Wellcome {info.name?.firstName}</h1>
  //         <p className='info-txt'>At our platform, we believe in making event planning a breeze. We understand the importance of finding and booking the right professionals for your special occasion. That's why we offer a unique feature that sets us apart - the ability to book all available professionals on your desired date, saving you the hassle of individually matching each professional to the same specific date.</p>
  //         <button className='m-6' onClick={() => nav(`/client/eventpicker`)}>Lets start Creating your Event!</button>
  //       </div>
  //     </div>
  //   </div>
  // );

  return (
    <div className='container-fluid p-0 client-home'>
      <NavbarGeneralClient />
      <div className="main">
        <video className="background-video" autoPlay loop muted>
          <source src="../../public/images/background-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <h1 className='info-txt p-4 mt-5'>Welcome {info.name?.firstName}</h1>
        <p className='info-txt'>At our platform, we believe in making event planning a breeze. We understand the importance of finding and booking the right professionals for your special occasion. That's why we offer a unique feature that sets us apart - the ability to book all available professionals on your desired date, saving you the hassle of individually matching each professional to the same specific date.</p>
        <button className='m-6 btn btn-info' onClick={() => nav(`/client/eventpicker`)}>Let's start creating your event!</button>
      </div>
    </div>
  );
  
  
}

export default ClientsHome;