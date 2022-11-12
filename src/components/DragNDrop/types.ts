import {SetStateAction} from "react";

export interface DragNDropProps {
  file: any,
  handleChange: (file: SetStateAction<any>) => void
}

export interface DragSuccessProps {
  setFile: (file: SetStateAction<any>) => void
}