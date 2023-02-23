import React from "react"

export default function Card(props) {
    return (
        <div className="card">
            <img src={`../images/${props.image}`} className="card-image" alt="" />   
            <p className="card-title">{props.title}</p>
            <p className="card-location">{props.location}</p>
            <a className="card-link" href={props.googleMapsUrl}>View on Google Maps</a>
            <p className="card-date">{props.startDate} - {props.endDate}</p>
            <p className="card-description">{props.description}</p>
        </div>
    )
}   