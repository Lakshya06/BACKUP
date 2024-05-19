import React from "react";
// import CardImage from "../images/katie-zaferes.png"
import StarImage from "../images/star.png"

function Card(props){
    return (
        <div className="card">
            {/* <h1>Hi {props.name}</h1> */}
            <img src={require(`../images/${props.coverImg}`)} alt="Card-Phot" className="card-image"></img>
            <div className="card-stats">

                <img src={StarImage} alt="Star-Phot"></img>
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount}) •</span>
                <span className="gray">{props.location}</span>

            </div>
            <p>{props.title}</p>
            <p><b>From ${props.price} </b> / person</p>
        </div>
    )
}

export default Card