
import React, { useEffect, useState } from 'react'
import './userProfile.css';
import { useNavigate, useParams } from 'react-router';
import { API_URL, doApiMethod } from '../services/apiService';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';

export default function UserProfile() {
    const [info, setInfo] = useState({});
    // const nav = useNavigate();
    const params = useParams();

    useEffect(() => {
        doApiInit();
    }, [])


    const doApiInit = async () => {
        let url = API_URL + "/users/single/" + params["id"];
        try {
            let resp = await doApiMethod(url, "GET");
            console.log(resp.data);
            setInfo(resp.data);
        }
        catch (err) {
            console.log(err);
            alert("There problem try come back later");
        }
    }

    return (
        <section className="vh-100" style={{ backgroundColor: '#f4f5f7' }}>
            <MDBContainer className="py-5 h-100">
                <MDBRow className="justify-content-center align-items-center h-100">
                    <MDBCol lg="6" className="mb-4 mb-lg-0">
                        <MDBCard className="mb-3" style={{ borderRadius: '.5rem' }}>
                            <MDBRow className="g-0">
                                <MDBCol md="4" className="gradient-custom text-center text-white"
                                    style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                                    <MDBCardImage src="https://stock.adobe.com/search/images?k=default+profile+picture.png"
                                        alt="name" className="my-5" style={{ width: '80px' }} fluid />
                                    <MDBTypography tag="h5">{info.name?.firstName} {info.name?.lastName}</MDBTypography>
                                    <MDBCardText>{info.role}</MDBCardText>
                                    <MDBIcon far icon="edit mb-5" />
                                </MDBCol>
                                <MDBCol md="8">
                                    <MDBCardBody className="p-4">
                                        <MDBTypography tag="h6">My profile</MDBTypography>
                                        <hr className="mt-0 mb-4" />
                                        <MDBRow className="pt-1">
                                            <MDBCol size="6" className="mb-3">
                                                <MDBTypography tag="h6">Email</MDBTypography>
                                                <MDBCardText className="text-muted">{info.email}</MDBCardText>
                                            </MDBCol>
                                            <MDBCol size="6" className="mb-3">
                                                <MDBTypography tag="h6">Phone</MDBTypography>
                                                <MDBCardText className="text-muted">{info.phone}</MDBCardText>
                                            </MDBCol>
                                        </MDBRow>

                                        {/* <div className="d-flex justify-content-start">
                                            <a href="#!"><MDBIcon fab icon="facebook me-3" size="lg" /></a>
                                            <a href="#!"><MDBIcon fab icon="twitter me-3" size="lg" /></a>
                                            <a href="#!"><MDBIcon fab icon="instagram me-3" size="lg" /></a>
                                        </div> */}
                                    </MDBCardBody>
                                </MDBCol>
                            </MDBRow>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
    );
}

