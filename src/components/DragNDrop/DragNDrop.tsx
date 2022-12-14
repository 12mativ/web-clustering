import React, {useState} from "react";
import {FileUploader} from "react-drag-drop-files";
import {Box, Button, Typography} from "@mui/material";
import {clusterAPI} from "../../services/ClusterService";

const fileTypes = ["CSV"];

const DragDrop = () => {
  const [file, setFile] = useState<File | null>(null);
  const [count, setCount] = useState<number>(5);
  const handleChange = (file: File) => {
    setFile(file)
  };
  const [loadImage, {data}] = clusterAPI.useLoadImageMutation()
  let myImage = document.querySelector('img');
  return (
    <Box>
      <Box component='form' sx={{'& label': {height: '10rem'}}} onSubmit={(e) => {
        e.preventDefault()
        const formData = new FormData()
        // @ts-ignore
        formData.append('file', file)
        // @ts-ignore
        formData.append('clusters_num', count)
        loadImage(formData)
        // axios.post('http://localhost:3000/cluster/createClusters', formData)
        //   .then(res => res.data.blob())
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
        <input value={count} onChange={(e) => { // @ts-ignore
          setCount(e.target.value)}}/>
        {file && <Typography sx={{color: 'success.main'}}>Файл успешно загружен</Typography>}
          <Button type='submit' variant='contained' sx={(theme) => ({
            mt: theme.spacing(2),
            p: theme.spacing(1.5)
          })}>
            Импортировать
          </Button>
      </Box>
      {<img src={`data:image/jpeg;base64,${data}`} alt=""/>}
    </Box>

  );
}

export default DragDrop;