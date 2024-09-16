import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
import { Link, useNavigate, useLocation, Outlet } from 'react-router-dom';

// import React, { useState, useEffect } from 'react';
// import CityCard from './CityCard';

function City() {
    const cities = [
        { city: 'תל אביב', lat: 32.0853, lon: 34.7818 },
        { city: 'ירושלים', lat: 31.7683, lon: 35.2137 },
    ]
    // const [cities, setCities] = useState([]);
    const appid = '8ee633956bad6ae1965b557a94ecfcba';

    useEffect(() => {
        getWeatherData();
    }, []);

    // פונקציה לטעינת נתונים מ-API
    const getWeatherData = async () => {

        const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${city.lat}&lon=${city.lon}&appid=${appid}&units=metric`);
        const data = await response.json();
        console.log(data);
        const cityName = data.name;
        const description = data.weather[0].description;
        const icon = data.weather[0].icon;
        const temp = data.main.temp;
        const feelsLike = data.main.feels_like;
        const humidity = data.main.humidity;
        // setCities([...citiess]);
        const weatherData = ({ cityName: cityName, description: description, icon: icon, temp: temp, feelsLike: feelsLike, humidity: humidity });
        setCities([weatherData])

        // fetch(`https://api.openweathermap.org/data/2.5/weather?q=Tel%20Aviv&appid=${appid}&units=metric`)
        //     .then(response => response.json())
        //     .then(data => {
        //         const cityName = data.name;
        //         const description = data.weather[0].description;
        //         const icon = data.weather[0].icon;
        //         const temp = data.main.temp;
        //         const feelsLike = data.main.feels_like;
        //         const humidity = data.main.humidity;
        //     console.log(temp);


        // async function getWeatherData(lat, lon) {
        //     const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&exclude=hourly,daily`;
        //     const response = await fetch(apiUrl);
        //     const data = await response.json();
        //     return data;
        // }

        // const weatherPromises = cities.map(city => getWeatherData(city.lat, city.lon));
    };

    return (
        <div>
            <p>rrtrbrg</p>
            <div className='grid'> {cities.map(city => {
                return (
                    <div className='container' key={city.id} >
                        <p>{city.id} {city.cityName} {city.icon}</p>
                    </div>
                );
            })}</div>

            {/* {cities.map(city => (
            // <CityCard key={city.id} {...city} />
          ))} */}
        </div>
    );
}

export default City;