import React from 'react'
import { useState } from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';

export default function UserProfileInfo(props) {
    // const [info, setInfo] = useState({});
    return (
        <div>
            <MDBRow className="pt-1">
                <MDBCol size="6" className="mb-3">
                    <MDBTypography tag="h6">Email</MDBTypography>
                    <MDBCardText className="text-muted">{props.info.email}</MDBCardText>
                </MDBCol>
                <MDBCol size="6" className="mb-3">
                    <MDBTypography tag="h6">phone</MDBTypography>
                    <MDBCardText className="text-muted">{props.info.phone}</MDBCardText>
                </MDBCol>
            </MDBRow>
        </div>
    )
}
