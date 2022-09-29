import { Button, Grid, TextField } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";

const Form = ({ newLocation }) => {

    const [city, setCity] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        newLocation(city)
    }

    return (
        <form onSubmit={onSubmit}>
            <Container>
                <Grid container justifyContent="center" pt="2rem" mb="2rem">
                    <Grid item xs={4}>
                        <TextField   InputProps={{ style: { fontSize: 15  } }} sx={{ input: { color: 'black', backgroundColor: 'white' } }} placeholder="Ingrese Cuidad" variant="outlined" fullWidth required onChange={(e) => { setCity(e.target.value) }} />
                    </Grid>

                    <Grid item xs={2} alignSelf="center" ml="1.5rem"  >
                        <Button type="submit" variant="outlined" size="large" sx={{ color: "black" , backgroundColor: 'white' }} fullWidth>Buscar</Button>
                    </Grid>

                </Grid>
            </Container>
        </form>
    )
}

export default Form;