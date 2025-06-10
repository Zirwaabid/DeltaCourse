import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css'
import { useState } from 'react';

export default function SearcBox({ UpdateWeather }) {
    const [city, setCity] = useState("");
    const [error, setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "4d8cd3669886c31f7d5949a3917f591b"
    const getWeather = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();

            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            };
            console.log(result)
            return result;
        } catch (error) {
            setError(true);
        }
    }


    const handleChange = (evt) => {
        setCity(evt.target.value);
    };
    let handleSubmit = async (evt) => {
        try {
            evt.preventDefault();
            console.log(city)
            setCity("");
            let newInfo = await getWeather();
            return UpdateWeather(newInfo);
        }
        catch (error) {
            setError(true)
        }
    }


    return <>
        <div className='SearchBox'>

            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange} />
                <br /><br />
                <Button variant="contained" type='submit'>
                    Search
                </Button>
                {error && <p style={{ color: "red" }}>No such place exist in our Api.</p>}
            </form>
            <br />
        </div>
    </>
}