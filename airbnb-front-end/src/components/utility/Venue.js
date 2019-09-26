import React from 'react';
import BaseCard from './BaseCard';

function Venues(props){
    const city = {image:"hi", cityName:"London", price:"1000$/mo"}
    return(
        <BaseCard city={city} />
    )
}
export default Venues;