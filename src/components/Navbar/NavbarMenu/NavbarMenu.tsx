import * as React from 'react';
import NavbarMenuView from "./NavbarMenuView";

export const NavbarMenu = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return <NavbarMenuView
      open={open}
      handleClick={handleClick}
      handleClose={handleClose}
      anchorEl={anchorEl}
    />
}
