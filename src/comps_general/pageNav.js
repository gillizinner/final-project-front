import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { doApiMethod } from '../services/apiService';


export default function PageNav(props) {
    const [pages, setPages] = useState(0);

    useEffect(() => {
       doApi();
    }, [])

    const doApi = async() => {
        let url = props.urlPageApi;
        let resp = await doApiMethod(url, "GET");
        let totalPages = Math.ceil(resp.data.count/props.perPage);
        console.log(resp.data.count)
        console.log(props.perPage)
        setPages(totalPages);
        console.log(totalPages)
        // console.log(resp.data);
    }


  return (
    <div>
        <span>Page:</span>
        {[...Array(pages)].map((item, i) => {
            return(
                <Link to = {props.navToDir + (i+1)} className={props.cssClass} key={i} item={item}>{i+1}</Link>
            )
        })}
    </div>
  )
}
