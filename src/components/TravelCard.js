import React from "react"

export default function TravelCard(props) {
    return (
        <div className="travel-card">
            <div>
                <img className="card-img" src={props.imageUrl} alt="" />
            </div>
            <div className="card-content">
                <div>
                    <span><i class="fa fa-map-marker" aria-hidden="true"></i></span>
                    <span className="card-location">{props.location}</span>
                    <span className="card-map-location"><a href={props.googleMapsUrl}>View On Google maps</a></span>
                </div >
                <h2 className="card-title">{props.title}</h2>
                <h5 className="card-date">
                    <span className="card-startdate">{props.startDate}</span>
                    -
                    <span className="card-enddate">{props.endDate}</span>
                </h5>
                <p className="card-description">{props.description}</p>
            </div>
        </div>
    )
}