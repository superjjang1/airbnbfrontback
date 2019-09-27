// import React, {Component} from 'react';


// class Abodes extends Component {

//     render() { 
//         return ( <h1>Abodes?</h1> );
//     }
// }
 
// export default Abodes;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Abode.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faStar);

class Abodes extends Component {
  render() {
    const rand = Math.round(Math.random()*10);
    return(
        <div className="col s12 waypoint">
            <Link to="/">
                <div className="large-pic">
                    <img src={"http://lorempixel.com/600/400/city/"+rand} alt="randocity"/>
                </div>
                <div className="info">
                    <div className="listing-details">PRIVATE ROOM · CANICATTÌ</div>
                    <div className="title">House in countryside (30 km dal mare)</div>
                    <div className="price">$61 per night</div>
                    <div className="reviews">
                        <span className="stars"><FontAwesomeIcon icon="star" size="1x"/></span>
                        <span className="review-total">309 · Superhost</span>
                    </div>
                </div>
        
            </Link>
        </div>
    )
  }
}
export default Abodes;