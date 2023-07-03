import React, { useState } from 'react'
import { useEffect } from 'react';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';
import { API_URL, doApiMethod } from '../../services/apiService';
import ProfInfo from '../profinfo';
import './displayAvailableProffs.css';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

import RangeSlider from './priceRange';
import { MDBBtn, MDBIcon, MDBInput, MDBInputGroup } from 'mdb-react-ui-kit';
import { width } from '@mui/system';

export default function DisplayAvailableProffs(props) {
    const [query] = useSearchParams();
    const [profList, setprofList] = useState([]);
    const [filteredProfList, setfilteredProfList] = useState([]);
    const [activeLink, setActiveLink] = useState('Singer');
    const [sortOrder, setSortOrder] = useState('asc');
    const [sortedProfessionals, setSortedProfessionals] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [priceRange, setPriceRange] = useState([0, 100000]);
    const [selectedLocation, setSelectedLocation] = useState('');


    useEffect(() => {
        doApi();
    }, [query]);


    const doApi = async () => {
        let url = API_URL + "/clients/professionals-available?startDate=" + props.startDate + "&endDate=" + props.endDate;

        try {
            let resp = await doApiMethod(url, "GET");
            setprofList(resp.data);

            // Apply location filter if a location is selected
            let filteredList = resp.data.filter((prof) => prof.category === activeLink);
            if (selectedLocation) {
                filteredList = filteredList.filter((prof) => prof.location === selectedLocation);
            }

            setfilteredProfList(filteredList);
            setSortedProfessionals(sortProfessionalsByPriceAsc(filteredList));
        }
        catch (err) {
            console.log(err);
            alert("There is a problem. Please try again later.");
        }
    };

    const onCategoryClick = (category) => {
        setActiveLink(category);
        setSortOrder('asc'); // Reset sort order to ascending when changing categories
        setSearchQuery('');
        setSelectedLocation('')
        // Filter professionals based on the selected category
        const filteredProfessionals = profList.filter((prof) => prof.category === category);

        // Sort the filtered professionals by price in ascending order
        const sortedProfessionals = sortProfessionalsByPriceAsc(filteredProfessionals);

        setfilteredProfList(filteredProfessionals);
        setSortedProfessionals(sortedProfessionals);
    };

    const sortProfessionalsByPriceAsc = (professionals) => {
        return [...professionals].sort((a, b) => a.cost - b.cost);
    };
    const sortProfessionalsByPriceDesc = (professionals) => {
        return [...professionals].sort((a, b) => b.cost - a.cost);
    };



    const filteredProfessionals = sortedProfessionals.filter((prof) =>
        prof.name.firstName.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (!selectedLocation || prof.area === selectedLocation)
    );


   
    const handlePriceRangeChange = (newValue) => {
        setPriceRange(newValue);
      
        const filteredProfessionals = filteredProfList.filter((prof) => {
          return prof.cost >= newValue[0] && prof.cost <= newValue[1];
        });
      
        setSortedProfessionals(sortProfessionalsByPriceAsc(filteredProfessionals));
      };
      

    const onSortChange = (event) => {
        const newSortOrder = event.target.value;
        setSortOrder(newSortOrder);
      
        let sortedProfessionals = [];
        if (newSortOrder === 'asc') {
          sortedProfessionals = sortProfessionalsByPriceAsc(filteredProfessionals);
        } else {
          sortedProfessionals = sortProfessionalsByPriceDesc(filteredProfessionals);
        }
      
        setSortedProfessionals(sortedProfessionals);
      };
      

    const availableDatesOfProffInRange = (prof_id) => {
        const prof = filteredProfList.filter(prof => prof._id == prof_id);

        let availableDates = [];
        if (prof[0].events) {
            const eventDates = prof[0].events.map(event => new Date(event.date));

            for (let date = new Date(props.startDate); date <= props.endDate; date.setDate(date.getDate() + 1)) {

                if (!eventDates.some(eventDate => (eventDate.getFullYear() === date.getFullYear()) && (eventDate.getMonth() === date.getMonth()) && (eventDate.getDate() === date.getDate()))) {
                    let newDate = new Date(date);
                    availableDates.push(newDate);

                }
            }
            console.log("available dates of: " + prof[0].name.firstName + " in range:")
            console.log(availableDates);
            return availableDates;
        }
        else {
            return [];
        }

    }

    return (
        <div className='row'>

            <nav className="nav-links">

                <Link to="#" onClick={() => onCategoryClick('Makeup Artist')} className={activeLink === 'Makeup Artist' ? 'active' : ''}>MakeUp Artists</Link>

                <Link to="#" onClick={() => onCategoryClick('Photographer')} className={activeLink === 'Photographer' ? 'active' : ''}>Photographers</Link>

                <Link to="#" onClick={() => onCategoryClick('Hair Stylist')} className={activeLink === 'Hair Stylist' ? 'active' : ''}>Hair Stylists</Link>

                <Link to="#" onClick={() => onCategoryClick('band')} className={activeLink === 'band' ? 'active' : ''}>Bands</Link>

                <Link to="#" onClick={() => onCategoryClick('Singer')} className={activeLink === 'Singer' ? 'active' : ''}>Singers</Link>
                <div
                    className="nav-underline"
                    style={{
                        width: `${100 / 5}%`,
                        transform: `translateX(${activeLink === 'Makeup Artist' ? '0%' : activeLink === 'Photographer' ? '100%' : activeLink === 'Hair Stylist' ? '200%' : activeLink === 'band' ? '300%' : '400%'})`,
                    }}
                />
            </nav>

            <MDBInputGroup className='mt-4'>
                <label>Search Proffesional</label>
                <MDBInput label='Search' value={searchQuery}
                    onInput={(e) => setSearchQuery(e.target.value)} />
                <MDBBtn rippleColor='dark'>
                    <MDBIcon icon='search' />
                </MDBBtn>
            </MDBInputGroup>

            {filteredProfessionals.length > 0 ? (
                filteredProfessionals.map((prof) => {
                    let availableDates = availableDatesOfProffInRange(prof._id);
                    console.log("pro info props availabledates:");
                    console.log(availableDates);
                    return <ProfInfo key={prof._id} item={prof} availableDatesList={availableDates} />;
                })

            ) : (
                <p>No professionals found in this category.</p>
            )}
            <div className='row justify-content-between my-4'>
                <div className='col-md-5 mb-5'>
                    <label htmlFor="sortOrder">Sort By Price:</label>
                    <select id="sortOrder" value={sortOrder} onChange={onSortChange} className='form-control'>
                        <option value="asc">Low to high</option>
                        <option value="desc">High to low </option>
                    </select>
                </div>
                <div className='col-md-5'>
                    <label>Filter by price:</label>
                    <RangeSlider minValue={0} maxValue={30000} onPriceRangeChange={handlePriceRangeChange} />

                </div>
                <div className='col-md-6'>
                <label htmlFor="locationFilter">Filter by location:</label>
                    <select id="locationFilter" value={selectedLocation} onChange={(e) => setSelectedLocation(e.target.value)} 
                    className='form-control'>
                        <option value="">All Locations</option>
                        <option value="center">center </option>
                        <option value="north">north </option>
                        <option value="south">south </option>
                        <option value="jerusalem">jerusalem </option>
                        {/* Add more location options as needed */}
                    </select>
                </div>
            </div>






        </div>
    )
}
