
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { TOKEN_NAME } from '../services/apiService';
import { useEffect, useState } from 'react';
import { API_URL, doApiMethod } from '../services/apiService';
import NavbarGeneralClient from '../comps_general/navbarGeneralClient';


function ClientsHome() {
  const [info, setInfo] = useState({});

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


  return (
    <div className='text-center m-3'>
      <NavbarGeneralClient/>
      {/* <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/clients/home">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/clients/clientProfile/:id">My profile</Nav.Link>
              <Nav.Link href="/client/datepicker">Create event</Nav.Link>
              <Nav.Link href="/clients/eventsClient">My events</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}
      <h2 className='text-dark p-4'>hi {info.name?.firstName}</h2>
      <button className='btn btn-primary m-4'>Lets start Creating your Event!</button>
    </div>
  );
}

export default ClientsHome;