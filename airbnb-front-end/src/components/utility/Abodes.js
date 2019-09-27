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
      console.log(this.props.abode);
    // const rand = Math.round(Math.random()*10);
    const abode = this.props.abode
    return(
        <div className="col s12 waypoint">
            <Link to={`/abode/${abode.id}`}>
                <div className="large-pic">
                    <img src={`${window.apiHost}${this.props.abode.imageUrl}`} alt="randocity"/>
                </div>
                <div className="info">
                    <div className="listing-details">{abode.location}</div>
                    <div className="title">{abode.title}</div>
                    <div className="price">${abode.price} per night!</div>
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