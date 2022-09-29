import React from "react";
import AppBar from '@mui/material/AppBar';
import { Typography } from "@mui/material";

const NavBar = () => {
    return (
        
        <AppBar position="sticky"  sx={{  color: "darkBlue", backgroundColor : "white"  }}>
            <Typography  textAlign="center" variant="h1" fontSize="3rem"> Simple Weather-App </Typography>
        </AppBar>

    )
}

export default NavBar;