import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBInput,
    MDBIcon,
    MDBBtn,
} from 'mdb-react-ui-kit';

const EventPicker = () => {
    const navigate = useNavigate();
    const [selectedEvent, setSelectedEvent] = useState('');
    const [location, setLocation] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleEventChange = (event) => {
        setSelectedEvent(event.target.value);
    };

    const handleLocationChange = (event) => {
        setLocation(event.target.value);
    };

    const handleProfessionalsClick = () => {
        if (selectedEvent === '' || location === '') {
            setErrorMessage('Please select an event type and enter the event location.');
        } else {
            // Navigate to the new route with the query parameters
            navigate(`/client/datepicker/${selectedEvent}/${location}`);
        }
    };

    return (
        <MDBContainer >
            <MDBContainer className='mt-5'>
                <MDBRow className="justify-content-center">
                    <MDBCol md="6">
                        <div className="text-center mb-4">
                            <h4>Pick an Event Type</h4>
                        </div>
                        <div className="d-grid gap-3">
                            <MDBBtn
                                color={selectedEvent === 'wedding' ? 'primary' : 'light'}
                                onClick={handleEventChange}
                                value="wedding"
                            >
                                <MDBIcon icon="glass-cheers" className="me-2" />
                                Wedding
                            </MDBBtn>
                            <MDBBtn
                                color={selectedEvent === 'Bar-Miztva' ? 'primary' : 'light'}
                                onClick={handleEventChange}
                                value="Bar-Miztva"
                            >
                                <MDBIcon icon="book" className="me-2" />
                                Bar Mitzvah
                            </MDBBtn>
                            <MDBBtn
                                color={selectedEvent === 'Bat-Mitzva' ? 'primary' : 'light'}
                                onClick={handleEventChange}
                                value="Bat-Mitzva"
                            >
                                <MDBIcon icon="book" className="me-2" />
                                Bat Mitzvah
                            </MDBBtn>
                            <MDBBtn
                                color={selectedEvent === 'Brit' ? 'primary' : 'light'}
                                onClick={handleEventChange}
                                value="Brit"
                            >
                                <MDBIcon icon="child" className="me-2" />
                                Britt
                            </MDBBtn>
                            <MDBBtn
                                color={selectedEvent === 'Engagement' ? 'primary' : 'light'}
                                onClick={handleEventChange}
                                value="Engagement"
                            >
                                <MDBIcon icon="heart" className="me-2" />
                                Engagement
                            </MDBBtn>
                        </div>
                        <MDBInput
                            type="text"
                            id="location"
                            label="Event Location"
                            value={location}
                            onChange={handleLocationChange}
                        />
                        {errorMessage && (
                            <div className="text-center mt-2 text-danger">{errorMessage}</div>
                        )}
                        <div className="text-center mt-4">
                            <MDBBtn onClick={handleProfessionalsClick}>Choose Your Professionals</MDBBtn>
                        </div>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </MDBContainer>
    );
};

export default EventPicker;
