import React, {useState} from "react";
import {Box, Typography} from "@mui/material";

export const NewDragNDrop = () => {
  const [drag, setDrag] = useState(false)

  const dragStartHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setDrag(true)
  }

  const dragLeaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setDrag(false)
  }

  const onDropHandler = (e: any) => {
    e.preventDefault()
    let files = [...e.dataTransfer.files]
    console.log(files)
  }

  return (
    <Box>
      {drag
        ? <Box sx={{border: '3px dashed red'}}
          onDragStart={e => dragStartHandler(e)} onDragLeave={e => dragLeaveHandler(e)}
          onDragOver={e => dragStartHandler(e)}
          onDrop={e => onDropHandler(e)}>
          <Typography>Отпустите файлы, чтобы загрузить их</Typography>
        </Box>
        : <Box onDragStart={e => dragStartHandler(e)} onDragLeave={e => dragLeaveHandler(e)}
               onDragOver={e => dragStartHandler(e)}>
          <Typography>Перетащите файлы, чтобы загрузить их</Typography>
        </Box>
      }
    </Box>
  )
}

