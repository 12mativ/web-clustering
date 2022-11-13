import React from "react";
import {AppBar, IconButton, Toolbar} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {NavLink} from "react-router-dom";

function NavbarView() {
    return (
        <AppBar position="static">
            <Toolbar>
                <NavLink to={'/index'}>
                  <IconButton sx={{color: 'common.white'}}>
                    <ArrowBackIcon />
                  </IconButton>
                </NavLink>
            </Toolbar>
        </AppBar>
    );
}
export default NavbarView