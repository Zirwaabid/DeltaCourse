import { useState } from "react";
import InfoBox from "./InfoBox";
import SearcBox from "./SearchBox";

export default function WeatherApp() {
    const [weatherInfo, setWeatherinfo] = useState({
        city: "Jahanian",
        feelsLike: 42.05,
        humidity: 8,
        temp: 45.77,
        tempMax: 45.77,
        tempMin: 45.77,
        weather: "clear sky"
    });

    const UpdateWeather = (newInfo) => {
        setWeatherinfo(newInfo);
    };

    return <div style={{ textAlign: "center" }}>
        <h2>Weather App by Delta</h2>
        <SearcBox UpdateWeather={UpdateWeather} />
        <InfoBox info={weatherInfo} />
    </div>
}