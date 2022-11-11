import React from "react";
import {AppBar, IconButton, Toolbar,} from "@mui/material";
import PercentOutlinedIcon from '@mui/icons-material/PercentOutlined';
import Box from "@mui/material/Box";
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import {NavbarMenu} from "./NavbarMenu/NavbarMenu";
import {useStyles} from "./styles";
import {NavbarProps} from "./types";
import {NavLink} from "react-router-dom";

function NavbarView({width, height}: NavbarProps) {
    const classes = useStyles({ width, height });
    return (

        <AppBar position="static" className={classes.navbarContainer}>
            <Toolbar className={classes.navbar}>
                <Box className={classes.iconsContainer}>
                    <NavbarMenu />
                    <NavLink to={'/index'} className={({ isActive }) =>
                      isActive ? classes.activeLink : undefined
                    }>
                        <IconButton className={classes.menuIcon}>
                            <PercentOutlinedIcon/>
                        </IconButton>
                    </NavLink>

                </Box>

                <Box className={classes.iconsContainer} sx={{textAlign: "right"}}>
                    <NavLink to={'/info'} className={({ isActive }) =>
                      isActive ? classes.activeLink : undefined
                    }>
                        <IconButton className={classes.menuIcon}>
                            <SettingsIcon/>
                        </IconButton>
                    </NavLink>

                    <NavLink to={'/login'} className={({ isActive }) =>
                      isActive ? classes.activeLink : undefined
                    }>
                        <IconButton className={classes.menuIcon}>
                            <PersonIcon/>
                        </IconButton>
                    </NavLink>
                </Box>

            </Toolbar>
        </AppBar>


    );
}
export default NavbarView