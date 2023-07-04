import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';
import "./general.css"

export default function Footer() {
  return (
    <MDBFooter className='foot text-center text-white'>
      <MDBContainer className='f p-4 pb-0'>
        <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1' href='https://he-il.facebook.com/' target="_blank" role='button'>
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://twitter.com/' target="_blank" role='button'>
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://www.google.co.il/' target="_blank" role='button'>
            <MDBIcon fab icon='google' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://www.instagram.com/' target="_blank" role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://www.linkedin.com/' target="_blank" role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://github.com/' target="_blank" role='button'>
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className='foo text-center p-3'>
        © 2023 Copyright: <t/>
        <a className='text-white' href='https://mdbootstrap.com/'>
          Gilli Rabinowitz, Liel Lugasi, Tzipi Morgenstern
        </a>
      </div>
    </MDBFooter>
  );
}