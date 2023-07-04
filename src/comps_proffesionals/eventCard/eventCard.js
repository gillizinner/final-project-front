import * as React from 'react';
import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { API_URL, doApiMethod } from '../../services/apiService';
import './eventCard.css'
import EventDetailes from '../eventDetails';

export default function ImgMediaCard(props) {
    // const [toggleStates, setToggleStates] = useState([]);
    let img_src;
    // useEffect(() => {
    //     doApiInit();
    // }, []);

    // const doApiInit = async () => {
    //     let url = API_URL + '/clients/myInfo';
    //     try {
    //         let resp = await doApiMethod(url, 'GET');
    //         console.log(resp.data);
    //         //   setInfo(resp.data);
    //         setToggleStates(new Array(resp.data.events.length).fill(false));
    //     } catch (err) {
    //         console.log(err);
    //         alert('There is a problem. Please try again later.');
    //     }
    // };
    const image = (eventType)=>{
        if (eventType== "Wedding") {
            return "https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&w=600";
        }
        if (eventType == "Bar-Miztva") {
            return "https://images.pexels.com/photos/5986493/pexels-photo-5986493.jpeg?auto=compress&cs=tinysrgb&w=600"
        }
        if (eventType == "Bat-Mitzva") {
            return "https://images.pexels.com/photos/302552/pexels-photo-302552.jpeg?auto=compress&cs=tinysrgb&w=600"
        }
        if (eventType == "Brit") {
            return "https://images.pexels.com/photos/2731820/pexels-photo-2731820.jpeg?auto=compress&cs=tinysrgb&w=600"
        }
        if (eventType == "Engagement") {
            return "https://images.pexels.com/photos/265856/pexels-photo-265856.jpeg?auto=compress&cs=tinysrgb&w=600"
        }
    }
    // const handleToggle = (index) => {
    //     setToggleStates((prevToggleStates) => {
    //         const newToggleStates = [...prevToggleStates];
    //         newToggleStates[index] = !newToggleStates[index];
    //         return newToggleStates;
    //     });
    // };
    return (
        <Card sx={{ maxWidth: 345, height: '100%' }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={image(props?.item.type)}
            />
            <CardContent sx={{ height: '100%' }}>
                <Typography className='title' gutterBottom variant="h5" component="div">
                    Your {props?.item.type} is in {props?.item.location}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Your event date is {new Date(props?.item.date).toLocaleDateString()}.
                </Typography>
                <EventDetailes item={props?.item} />
            </CardContent>
            {/* <CardActions>
                <Button size="small" onClick={() => handleToggle(props?.index)}>For more details</Button>
            </CardActions>
            {toggleStates[props?.index] && (
                <div>
                    <h4>The professionals of your event are:</h4>
                    <ul>
                        {props?.item.proffesionals.map((proffesional) => (
                            <li key={proffesional._id}> {proffesional.category} - {proffesional.name?.firstName} {proffesional.name?.lastName}</li>
                        ))}
                    </ul>
                </div>
            )} */}
        </Card>
    );
}




