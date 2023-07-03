import {
    MDBBtn,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBModal,
    MDBModalBody,
    MDBModalContent,
    MDBModalDialog,
    MDBModalFooter,
    MDBModalHeader,
    MDBRow,
    MDBTypography,
} from "mdb-react-ui-kit";
import React, { useState } from "react";
import { useLocation } from 'react-router-dom';
import { MY_INFO } from "../services/apiService";
// import Payment from "./payment/payment";


export default function EndMessage() {
    const location = useLocation();
    const eventDetailes = location.state?.eventDetailes;
    const [basicModal, setBasicModal] = useState(false);

    const toggleShow = () => setBasicModal(!basicModal);

    return (
        <>
            <section className="vh-100">
                <MDBContainer className="py-5 h-100">
                    <MDBRow className="justify-content-center align-items-center h-100 text-center">
                        <MDBCol>
                            <MDBTypography
                                tag="h4"
                                className="mb-5"
                                style={{ color: "#35558a" }}
                            >
                                Your Event Was Created Successfully, MAZAL TOV!
                            </MDBTypography>
                            <MDBBtn className="mb-5" color="light" size="lg" onClick={toggleShow}>
                                Show Event Detailes
                            </MDBBtn>
                            {/* <Payment/> */}
                            <MDBModal show={basicModal} setShow={setBasicModal} tabIndex="-1">
                                <MDBModalDialog>
                                    <MDBModalContent>
                                        <MDBModalHeader className="border-bottom-0">
                                            <MDBBtn
                                                className="btn-close"
                                                color="none"
                                                onClick={toggleShow}
                                            ></MDBBtn>
                                        </MDBModalHeader>
                                        <MDBModalBody className="text-start text-black p-4">
                                            <MDBTypography
                                                tag="h5"
                                                className="modal-title text-uppercase mb-5"
                                                id="exampleModalLabel"
                                            >
                                               {JSON.parse(localStorage[MY_INFO]).name.firstName}  {JSON.parse(localStorage[MY_INFO]).name.lastName}
                                            </MDBTypography>
                                            <MDBTypography
                                                tag="h4"
                                                className="mb-5"
                                                style={{ color: "#35558a" }}
                                            >
                                                Thanks for your time
                                            </MDBTypography>
                                            <p className="mb-0" style={{ color: "#35558a" }}>
                                                Event Detailes:
                                            </p>
                                            {/* <hr
                                                className="mt-2 mb-4"
                                                style={{
                                                    height: "0",
                                                    backgroundColor: "transparent",
                                                    opacity: ".75",
                                                    borderTop: "2px dashed #9e9e9e",
                                                }}
                                            /> */}

                                            <div className="d-flex justify-content-between">
                                                <p className="fw-bold mb-0">Type of Event:</p>
                                                <p className="text-muted mb-0">{eventDetailes.type}</p>
                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <p className="fw-bold mb-0">Date:</p>
                                                <p className="text-muted mb-0">{new Date(eventDetailes.date).toLocaleDateString()}</p>
                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <p className="fw-bold mb-0">Location:</p>
                                                <p className="text-muted mb-0">{eventDetailes.location}</p>
                                            </div>
                                            {console.log(eventDetailes.proffesionals)}
                                            <ul>
                                                {eventDetailes.proffesionals.length > 0 && <p className="fw-bold mb-0">Proffesional List:</p>}
                                                {eventDetailes?.proffesionals.map(item =>
                                                    <li key={item._id}>
                                                        <div className="d-flex justify-content-between">
                                                            <p className="fw-bold mb-0">{item.name?.firstName} {item.name?.lastName}</p>
                                                            <p className="text-muted mb-0">{item.category}</p>
                                                        </div>
                                                    </li>)}
                                            </ul>
                                            {/* <div className="d-flex justify-content-between">
                                                <p className="small mb-0">Shipping</p>
                                                <p className="small mb-0">$175.00</p>
                                            </div> */}


                                        </MDBModalBody>
                                    </MDBModalContent>
                                </MDBModalDialog>
                            </MDBModal>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>
        </>
    );
}