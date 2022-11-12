import React, {SetStateAction, useState} from "react";
import DragNDrop from "./DragNDrop";

export const DragNDropContainer = () => {
    const [file, setFile] = useState<any>(null);
    const handleChange = (file: any) => {
        setFile(file)
    };
    return (
        <DragNDrop file={file} handleChange={handleChange} />
    )
}