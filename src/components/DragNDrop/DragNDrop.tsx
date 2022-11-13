import React, {useState} from "react";
import {FileUploader} from "react-drag-drop-files";
import {Box, Button, Typography} from "@mui/material";
import {clusterAPI} from "../../services/ClusterService";
import axios from "axios";

const fileTypes = ["CSV"];

const DragDrop = () => {
  const [file, setFile] = useState<File | null>(null);
  const handleChange = (file: File) => {
    setFile(file)
  };
  const [loadImage, {data}] = clusterAPI.useLoadImageMutation()
  console.log(data)
  let myImage = document.querySelector('img');
  return (
    <Box>
      <Box component='form' sx={{'& label': {height: '10rem'}}} onSubmit={(e) => {
        e.preventDefault()
        const formData = new FormData()
        // @ts-ignore
        formData.append('file', file)
        axios.post('http://localhost:3000/cluster/createClusters', formData)
          .then(res => res.data.blob())
      }}
      >
        <FileUploader
          handleChange={handleChange}
          name="file"
          types={fileTypes}
          label={file ? '' : 'Перетащите ваш файл'}
          hoverTitle=''
          disabled={!!file}
        />
        {file && <Typography sx={{color: 'success.main'}}>Файл успешно загружен</Typography>}
          <Button type='submit' variant='contained' sx={(theme) => ({
            mt: theme.spacing(2),
            p: theme.spacing(1.5)
          })}>
            Импортировать
          </Button>


      </Box>
      <img src="" alt=""/>
    </Box>

  );
}

export default DragDrop;