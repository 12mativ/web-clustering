import {SetStateAction} from "react";

export interface DragNDropProps {
  file: File | null,
  handleChange: (file: SetStateAction<File | null>) => void
}

export interface DragSuccessProps {
  setFile: (file: SetStateAction<File | null>) => void
}