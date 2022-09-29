import React from "react";
import { Box, CircularProgress, createTheme, Grid, Typography, ThemeProvider } from "@mui/material";
import { Container } from "@mui/system";
import "../assets-css/card.css"

const Cardw = ({ loadingData, showData, weather, forecast }) => {

    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();

    let date = day + "/" + month + "/" + year;
    let iconUrl = "";
    let forecastDate3 = "";
    let forecastDate6 = "";
    let forecastDate9 = "";
    let iconUrl3 = "";
    let iconUrl6 = "";
    let iconUrl9 = "";

    const theme = createTheme({

        typography: {
            h3: {
                fontSize: "calc(2em + 2vw)"
            },
            h4: {
                fontSize: "calc(0.8em + 0.8vw)"
            },
            h5:{
                fontSize: "calc(0.5em + 0.8vw)"
            }
        }

    })

    if (showData) {
        let url = "http://openweathermap.org/img/w/";
        iconUrl = url + weather.weather[0].icon + ".png";

        iconUrl3 = url + forecast.list[1].weather[0].icon + ".png";
        iconUrl6 = url + forecast.list[2].weather[0].icon + ".png";
        iconUrl9 = url + forecast.list[3].weather[0].icon + ".png";

        forecastDate3 = forecast.list[1].dt_txt.substring(8, 10) + "/" + forecast.list[1].dt_txt.substring(5, 7) + "/" + forecast.list[1].dt_txt.substring(0, 4) + " " + forecast.list[1].dt_txt.substring(11, 13)+"hs";

        forecastDate6 = forecast.list[2].dt_txt.substring(8, 10) + "/" + forecast.list[2].dt_txt.substring(5, 7) + "/" + forecast.list[2].dt_txt.substring(0, 4) + " " + forecast.list[2].dt_txt.substring(11, 13)+"hs";

        forecastDate9 = forecast.list[3].dt_txt.substring(8, 10) + "/" + forecast.list[3].dt_txt.substring(5, 7) + "/" + forecast.list[3].dt_txt.substring(0, 4) + " " + forecast.list[3].dt_txt.substring(11, 13)+"hs";
    }

    if (loadingData) {
        return <CircularProgress />
    }

    return (
        <ThemeProvider theme={theme}>
            <Box pb="5vh">
                {showData ? <Container> <Grid container justifyContent="center">


                    <Grid item xs={12} sm={12} md={8} lg={8} className="card-data" color="darkBlue" >
                        <Grid item xs={12} pt="1rem" pl="1rem" >
                            <Grid item xs={12} display="flex" justifyContent="center" alignItems="center" >
                                <Typography variant="h3">{weather.name}</Typography>
                                <Typography variant="p" ml="3vw" fontSize="calc(1.5em + 1.5vw)">{(weather.main.temp - 273.15).toFixed(1)}°C</Typography>
                            </Grid>

                            <Grid item xs={12} textAlign="center" display="flex" alignItems="center" justifyContent="space-evenly">

                                <Grid item xs={6} display="flex" alignItems="center">
                                    <img src={iconUrl} alt="icon" />
                                    <Typography ml="1.5vw" sx={{ textTransform: "capitalize" }} variant="h4">{weather.weather[0].description}</Typography>
                                </Grid>

                                <Grid item xs={3}>
                                    <Typography variant="h4">{date}</Typography>
                                </Grid>

                            </Grid>



                        </Grid>

                        <Grid ml="2rem" item xs={10} mr="1rem" textAlign="start" pt="1rem">
                            <Typography variant="h4">Temperatura máxima: {(weather.main.temp_max - 273.15).toFixed(1)}°C</Typography>
                        </Grid>
                        <Grid ml="2rem" item xs={10} mr="1rem" textAlign="start" pt="1rem">
                            <Typography variant="h4">Temperatura mínima: {(weather.main.temp_min - 273.15).toFixed(1)}°C</Typography>
                        </Grid>
                        <Grid ml="2rem" item xs={10} mr="1rem" textAlign="start" pt="1rem">
                            <Typography variant="h4">Sensación térmica: {(weather.main.feels_like - 273.15).toFixed(1)}°C</Typography>
                        </Grid>
                        <Grid ml="2rem" item xs={10} mr="1rem" textAlign="start" pt="1rem">
                            <Typography variant="h4">Humedad: {(weather.main.humidity)}%</Typography>
                        </Grid>
                        <Grid ml="2rem" item xs={10} mr="1rem" textAlign="start" pt="1rem" pb="2rem">
                            <Typography variant="h4">Velocidad del viento: {(weather.wind.speed)} m/s</Typography>
                        </Grid>

                        <Grid item xs={12} display="flex" className="borderBox" mb="2rem">

                            <Grid item xs={4} mt="2rem" textAlign="center">
                                <Grid item xs={12} >
                                    <Typography variant="h4">{forecastDate3}</Typography>
                                </Grid>
                                <Grid item xs={12} display="flex" alignItems="center" justifyContent="center">
                                    <img src={iconUrl3} alt="icon" width="35vw" />
                                    <Typography variant="h5" sx={{ textTransform: "capitalize" }} >{forecast.list[1].weather[0].description}</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="h5">{(forecast.list[1].main.temp - 273.15).toFixed(1)}°C</Typography>
                                </Grid>
                            </Grid>

                            <Grid item xs={4} mt="2rem" textAlign="center" >
                                <Grid item xs={12} >
                                    <Typography variant="h4">{forecastDate6}</Typography>
                                </Grid>
                                <Grid item xs={12} display="flex" alignItems="center" justifyContent="center">
                                    <img src={iconUrl6} alt="icon" width="35vw" />
                                    <Typography variant="h5" sx={{ textTransform: "capitalize" }} >{forecast.list[2].weather[0].description}</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="h5">{(forecast.list[2].main.temp - 273.15).toFixed(1)}°C</Typography>
                                </Grid>
                            </Grid>

                            <Grid item xs={4} mt="2rem" textAlign="center" >
                                <Grid item xs={12} >
                                    <Typography variant="h4">{forecastDate9}</Typography>
                                </Grid>
                                <Grid item xs={12} display="flex" alignItems="center" justifyContent="center">
                                    <img src={iconUrl9} alt="icon" width="35vw" />
                                    <Typography variant="h5" sx={{ textTransform: "capitalize" }} >{forecast.list[3].weather[0].description}</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="h5">{(forecast.list[3].main.temp - 273.15).toFixed(1)}°C</Typography>
                                </Grid>
                            </Grid>

                        </Grid>
                    </Grid>

                </Grid>
                </Container>
                    : <Grid container justifyContent="center">
                        <Grid item xs={4} className="noData">
                            <Typography variant="p" fontSize="1rem" > No hay información disponible.</Typography>
                        </Grid>
                    </Grid>}

            </Box >
        </ThemeProvider>

    )
}

export default Cardw;