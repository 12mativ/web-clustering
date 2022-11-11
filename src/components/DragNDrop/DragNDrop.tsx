import React from "react";
import {FileUploader} from "react-drag-drop-files";
import {Box, Button} from "@mui/material";
import {DragSuccess} from "./DragSuccess";
import {DragNDropProps} from "./types";

const fileTypes = ["CSV"];

const DragDrop = ({file, handleChange, setFile}: DragNDropProps) => {
  return (
    <Box component='form' sx={{'& label': {height: '10rem'}}} onSubmit={(e) => {
      e.preventDefault()
      if (file) {
        console.log(file)
      }
    }}
    >
      <FileUploader
        handleChange={handleChange}
        name="file" types={fileTypes}
        label={file ? '' : 'Перетащите ваш файл'}
        hoverTitle=''
        disabled={!!file}
        onDrop={(file: File) => {
          console.log(file)
        }}
      />
      {file && <DragSuccess setFile={setFile}/>}
      <Button type='submit' variant='contained' sx={(theme) => ({
        mt: theme.spacing(2),
        p: theme.spacing(1.5)
      })}>
        Импортировать
      </Button>
    </Box>

  );
}

export default DragDrop;