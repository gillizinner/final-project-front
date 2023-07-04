import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBInput,
    MDBIcon,
    MDBBtn,
} from 'mdb-react-ui-kit';
import './eventPicker.css'

const EventPicker = () => {
    const navigate = useNavigate();
    const [selectedEvent, setSelectedEvent] = useState('');
    const [location, setLocation] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [cities, setCities] = useState([]);
    useEffect(() => {
        const fetchCitiesData = async () => {
            const fetchedCities = await fetchCities();
            setCities(fetchedCities);
        };

        fetchCitiesData();
    }, []);
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
    const fetchCities = async () => {
        try {
            const response = await axios.get('http://api.geonames.org/searchJSON', {
                params: {
                    country: 'IL', // Specify the country code for Israel
                    maxRows: 1000, // Adjust the number of rows as needed
                    username: 'lielugasi', // Replace with your GeoNames API username
                },
            });

            // Extract the cities from the response
            const cities = response.data.geonames.map((city) => city.name);

            return cities;
        } catch (error) {
            console.error('Error:', error);
            return [];
        }
    };

    return (
<div className='container-fluid pt-5' style={{background:"RGB(235 250 255)",minHeight:"100vh"}}>
        <MDBContainer >
            <MDBContainer>
                <MDBRow className="justify-content-center">
                    <MDBCol md="6">
                        <div className="title text-center mb-4">
                            <h1>Pick an Event Type</h1>
                        </div>
                        <div className="d-grid gap-3">
                            <MDBBtn
                                color={selectedEvent === 'Wedding' ? 'info' : 'light'}
                                onClick={handleEventChange}
                                value="Wedding" className='event-btn'
                            >
                                <MDBIcon icon="glass-cheers" className="me-2" />
                                Wedding
                            </MDBBtn>
                            <MDBBtn
                                color={selectedEvent === 'Bar-Miztva' ? 'info' : 'light'}
                                onClick={handleEventChange}
                                value="Bar-Miztva" className='event-btn'
                            >
                                <MDBIcon icon="book" className="me-2" />
                                Bar Mitzvah
                            </MDBBtn>
                            <MDBBtn
                                color={selectedEvent === 'Bat-Mitzva' ? 'info' : 'light'}
                                onClick={handleEventChange}
                                value="Bat-Mitzva" className='event-btn'
                            >
                                <MDBIcon icon="book" className="me-2" />
                                Bat Mitzvah
                            </MDBBtn>
                            <MDBBtn
                                color={selectedEvent === 'Brit' ? 'info' : 'light'}
                                onClick={handleEventChange}
                                value="Brit"className='event-btn'
                            >
                                <MDBIcon icon="child" className="me-2" />
                                Britt
                            </MDBBtn>
                            <MDBBtn
                                color={selectedEvent === 'Engagement' ? 'info' : 'light'}
                                onClick={handleEventChange}
                                value="Engagement" className='event-btn'
                            >
                                <MDBIcon icon="heart" className="me-2" />
                                Engagement
                            </MDBBtn>
                        </div>
                        <select
                            id="location"
                            label="Event Location"
                            className='form-control mt-4'
                            onChange={handleLocationChange}>
                            <option>Choose a location</option>
                            {cities.map((city) => (
                                <option key={city} value={city}>
                                    {city}
                                </option>
                            ))}
                        </select>
                        {errorMessage && (
                            <div className="text-center mt-2 text-danger">{errorMessage}</div>
                        )}
                        <div className="text-center mt-4">
                            <MDBBtn onClick={handleProfessionalsClick} style={{background:"RGB(90 206 236)"}}>Choose Your Professionals</MDBBtn>
                        </div>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </MDBContainer >
        </div>
    );
};

export default EventPicker;




