import React, {SetStateAction, useState} from "react";
import DragNDrop from "./DragNDrop";

export const DragNDropContainer = () => {
    const [file, setFile] = useState<null | File>(null);
    const handleChange = (file: SetStateAction<null | File>) => {
        setFile(file)
    };
    return (
        <DragNDrop file={file} handleChange={handleChange} setFile={setFile}/>
    )
}