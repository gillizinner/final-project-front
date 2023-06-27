import React, { useState } from 'react'
import { useEffect } from 'react';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';
import { API_URL, doApiMethod } from '../../services/apiService';
import ProfInfo from '../profinfo';
import './displayAvailableProffs.css';

export default function DisplayAvailableProffs(props) {
    const [query] = useSearchParams();
    // const [selectedCategory, setSelectedCategory] = useState(null);
    // const [startDate, setStartDate] = useState(null);
    // const [endDate, setEndDate] = useState(null);
    const [profList, setprofList] = useState([]);
    const [filteredProfList, setfilteredProfList] = useState([]);
    const [activeLink, setActiveLink] = useState('');
    useEffect(() => {
        doApi();
    }, [query]);
    const doApi = async () => {
        // setStartDate(query.get("startDate"));
        // setEndDate(query.get("endDate"));
        // setStartDate(props.startDate);
        // setEndDate(props.endDate);
        let url = API_URL + "/clients/professionals-available?startDate=" + props.startDate + "&endDate=" + props.endDate;
        try {
            let resp = await doApiMethod(url, "GET");
            console.log(resp.data);
            console.log("prof list:");
            setprofList(resp.data);
            console.log("filtered prof list:")
            setfilteredProfList(resp.data.filter((prof) => prof.category === "singer"));
            console.log(filteredProfList);
        }
        catch (err) {
            console.log(err);
            alert("There problem try come back later");
        }
    }

    const onCategoryClick = (category) => {
        // setSelectedCategory(category);
        setfilteredProfList(profList.filter((prof) => prof.category === category));
        setActiveLink(category);
    }
    return (
        <div className='row'>
            {/* {props.startDate && props.endDate && <>
                <h1>start date is: {props.startDate}</h1>
                <h1>end date is: {props.endDate}</h1>
            </>} */}
            <nav className="nav-links">

                <Link to="#" onClick={() => onCategoryClick('makeup')} className={activeLink === 'makeup' ? 'active' : ''}>MakeUp Artists</Link>

                <Link to="#" onClick={() => onCategoryClick('photographer')} className={activeLink === 'photographer' ? 'active' : ''}>Photographers</Link>

                <Link to="#" onClick={() => onCategoryClick('hair-stylist')} className={activeLink === 'hair' ? 'active' : ''}>Hair Stylists</Link>

                <Link to="#" onClick={() => onCategoryClick('band')} className={activeLink === 'band' ? 'active' : ''}>Bands</Link>

                <Link to="#" onClick={() => onCategoryClick('singer')} className={activeLink === 'singer' ? 'active' : ''}>Singers</Link>
                <div
          className="nav-underline"
          style={{
            width: `${100 / 5}%`,
            transform: `translateX(${activeLink === 'makeup' ? '0%' : activeLink === 'photographer' ? '100%' : activeLink === 'hair-stylist' ? '200%' : activeLink === 'band' ? '300%' : '400%'})`,
          }}
        />
            </nav>
            {filteredProfList.map((prof) => { return <ProfInfo key={prof._id} item={prof} /> })}
        </div>
    )
}
