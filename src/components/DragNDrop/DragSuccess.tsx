import {Box, IconButton, Typography} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import React from "react";
import {DragSuccessProps} from "./types";

export const DragSuccess = ({setFile}: DragSuccessProps) => {
  return (
    <Box>
      <Typography sx={{color: 'success.main'}}>Ваш файл успешно загружен</Typography>
      <IconButton onClick={() => {debugger; setFile(null)}} sx={{borderRadius: 0}}>
        <Typography sx={{color: 'error.main'}}>Удалить файл</Typography>
        <ClearIcon />
      </IconButton>
    </Box>
  )
}