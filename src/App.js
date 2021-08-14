import React from 'react';
import axios from "axios";
import WeatherCard from "./conpornents/WeatherCard";

const App = () => {
    const [weatherData, setWeatherData] = React.useState(null)

    React.useEffect(() => {
        const fetchWeatherData = async function () {
            // You can await here
            const response = await axios.get("https://weather.tsukumijima.net/api/forecast?city=360010");
            setWeatherData(response.data)
            // ...
        }
        fetchWeatherData()
        console.log("Get")
    }, [])

    if (!weatherData) return null

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
