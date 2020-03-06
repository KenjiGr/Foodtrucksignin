import {useState, useEffect} from 'react';
import axios from 'axios';
import React from 'react';
import TruckCard from './TruckCard'

export default function FavoriteTrucks(){
    const [data, setData] = useState([]);

    useEffect(() =>{
        axios.get("http://68.183.138.134/trucks")
        .then(res =>{
            setData(res);
            console.log(res);
        })
        .catch(error =>{
            console.log("data not found", error);
        })
    }, [])

    return(
        <div className="truck">
            {data.map(truck =>{
                return(
                    <TruckCard
                    name={truck.cuisine}
                    img={truck.img_url}
                    rating={truck.customer_ratings}
                    address={truck.current_location}
                    />
                )
            })}
        </div>
    )
}