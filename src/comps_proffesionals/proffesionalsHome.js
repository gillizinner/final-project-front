
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { TOKEN_NAME } from '../services/apiService';
import { useEffect, useState } from 'react';
import { API_URL, doApiMethod } from '../services/apiService';
import NavbarGeneralProffesionel from '../comps_general/navbarGeneralProffesionel';
import './proffesionalHome.css'

function ProffesionalsHome() {
  const [info, setInfo] = useState({});

  useEffect(() => {
    doApiInit();
  }, [])


  const doApiInit = async () => {
    let url = API_URL + "/Proffesionals/myInfo";
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


  return (
    <div className='container-fluid p-0' style={{ minHeight: "450px" }}>
      <div className='text-center'>
        <NavbarGeneralProffesionel />
        {/* <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/proffesionals/home">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/proffesionals/proffesionalProfile/:id">My profile</Nav.Link> */}
        {/* לבדוק איפה ההודעות של האיש מקצוע */}
        {/* <Nav.Link href="/client/datepicker">My messages</Nav.Link> */}
        {/* <Nav.Link href="/proffesionals/eventsProffesional">My events</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}
        {/* <h2 className='text-dark p-4'>hi {info.name?.firstName}</h2> */}
        <div id="bg-video-container" className="container-fluid faq p-0 m-0">
          <video id="bg-video" autoPlay loop muted>
            <source src="https://player.vimeo.com/external/371836716.sd.mp4?s=bb542a8fc6c0312280afb23f10b8823c3f50e6e2&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className='container'>
            <div className='row justify-content-center align-items-center'>
              <div className='col-8 align-items-center text-light text-center' style={{ fontFamily: 'Stint Ultra Condensed', alignItems: 'center' }}>
                <h2 className='p-4' style={{ fontSize: "xxx-large" }}>Welcome {info.name?.firstName}</h2>
                <p className='text-center' style={{ fontSize: "xx-large" }}>
                  At our platform, we believe in making event planning a breeze. We understand the importance of finding and booking the right professionals for your special occasion. That's why we offer a unique feature that sets us apart - the ability to book all available professionals on your desired date, saving you the hassle of individually matching each professional to the same specific date.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ProffesionalsHome;