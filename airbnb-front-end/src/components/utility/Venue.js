import React from 'react';
import BaseCard from './BaseCard';
import {Link} from 'react-router-dom';
import Slick from './Slick';

function Venues(props){
    //someone is sending me an array called cities,
    //map throught and make a base card for each one.
    const baseCards = props.cities.map((city,i)=>{
        return (
            <div key={i} className = "col s3">
                <Link tp={`/city/${city.cityName}`}>
                <BaseCard city ={city}/>
                </Link>
            </div>
        )
    })
    return(
        <div>
            <Slick elements = {baseCards}/>
        </div>
    )
}
export default Venues;