import React from 'react';

const WeatherCard = (props) => {
    return (
        <div>
            <img src={props.imageURL} alt={props.imageAlt}/>
            <ul>
                <li>{props.dateLabel} ({props.date})</li>
                <li>{props.weather}</li>
            </ul>
        </div>
    )
}

export default WeatherCard
