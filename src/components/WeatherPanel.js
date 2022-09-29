import React, { useState } from "react";
import Form from "./Form";
import Cardw from "./Card";

const WeatherPanel = () => {

    let urlWeather = "https://api.openweathermap.org/data/2.5/weather?appid=ef138513e08a3002bdb71319ec42e2b2&lang=es";
    let cityUrl = "&q=";

    let urlForecast = "https://api.openweathermap.org/data/2.5/forecast?appid=ef138513e08a3002bdb71319ec42e2b2&lang=es"

    const [weather, setWeather] = useState("");
    const [forecast, setForecast] = useState("");
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);


    const getLocation = async (loc) => {
        setLoading(true)

        urlWeather = urlWeather + cityUrl + loc;

        await fetch(urlWeather).then((response) => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Something went wrong');

        }).then((weatherData) => {
            setWeather(weatherData)
        }).catch(error => {
            console.log(error)
            setLoading(false)
            setShow(false)
        })


        urlForecast = urlForecast + cityUrl + loc;


        await fetch(urlForecast).then((response) => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Something went wrong');

        }).then((forecastData) => {
            setForecast(forecastData)
            setLoading(false)
            setShow(true)
        }).catch(error => {
            console.log(error)
            setLoading(false)
            setShow(false)
        })


    }

    return (
        <React.Fragment >
            <Form newLocation={getLocation} />
            <Cardw showData={show}
                loadingData={loading}
                weather={weather}
                forecast={forecast} />
        </React.Fragment>
    )
}

export default WeatherPanel;