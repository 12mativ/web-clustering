import React from "react";
import {FileUploader} from "react-drag-drop-files";
import {Box, Button, Typography} from "@mui/material";
import {DragNDropProps} from "./types";
import {clusterAPI} from "../../services/ClusterService";

const fileTypes = ["CSV"];

const DragDrop = ({file, handleChange}: DragNDropProps) => {
  const [loadImage, {data}] = clusterAPI.useLoadImageMutation(file)
  return (
    <Box component='form' sx={{'& label': {height: '10rem'}}} onSubmit={() => loadImage(file)}
    >
      <FileUploader
        handleChange={handleChange}
        name="file"
        types={fileTypes}
        label={file ? '' : 'Перетащите ваш файл'}
        hoverTitle=''
        disabled={!!file}
      />
      {/*<img src={data ? data : ''}/>*/}
      {file && <Typography sx={{color: 'success.main'}}>Файл успешно загружен</Typography>}
      <Button type='submit' variant='contained' disabled={!file} sx={(theme) => ({
        mt: theme.spacing(2),
        p: theme.spacing(1.5)
      })}>
        Импортировать
      </Button>
    </Box>

  );
}

export default DragDrop;