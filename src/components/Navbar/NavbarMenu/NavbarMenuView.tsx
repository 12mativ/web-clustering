import {Box, IconButton} from "@mui/material";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import * as React from "react";
import {NavbarMenuProps} from "./types";

const NavbarMenuView = ({handleClose, handleClick, open, anchorEl}: NavbarMenuProps) => {
  return (
    <Box component={"span"}>
      <IconButton
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{backgroundColor: 'primary.main',
          color: 'common.white',
          width: '64px',
          height: '64px',
          borderRadius: 0,
          transition: 'all linear .1s',
          '&:hover': {
            backgroundColor: 'common.white',
            color: 'primary.main'
          }
        }}
      >
        <FolderOutlinedIcon />
        <KeyboardArrowDownIcon />
      </IconButton>

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleClose}>Импортировать</MenuItem>
        <MenuItem onClick={handleClose}>Скачать</MenuItem>
      </Menu>
    </Box>
  );
}

export default NavbarMenuView
