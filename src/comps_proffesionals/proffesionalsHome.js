
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { TOKEN_NAME } from '../services/apiService';
import { useEffect, useState } from 'react';
import { API_URL, doApiMethod } from '../services/apiService';
import NavbarGeneralProffesionel from '../comps_general/navbarGeneralProffesionel';


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
    <div className='text-center m-3'>
      <NavbarGeneralProffesionel/>
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
      <h2 className='text-dark p-4'>hi {info.name?.firstName}</h2>
    </div>
  );
}

export default ProffesionalsHome;