import React from 'react';
import axios from "axios";
import WeatherCard from "./components/WeatherCard";

const App = () => {
    const [weatherData, setWeatherData] = React.useState({})

    React.useEffect( () => {
        const getWeatherData = async () =>{
            const response = await axios.get("https://weather.tsukumijima.net/api/forecast?city=360010");
            setWeatherData(response.data)
        }
        getWeatherData()
        console.log("Get")
    }, [])

    return (
        <div>
            <div>{weatherData.title}</div>
            {weatherData.forecasts.map((data, index) => {
                return (
                    <WeatherCard
                        key={index}
                        imageURL={data.image.url}
                        imageAlt={data.telop}
                        date={data.date}
                        dateLabel={data.dateLabel}
                        weather={data.detail.weather}
                    />
                )
            })}
        </div>
    );
}

export default App;
