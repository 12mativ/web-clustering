import {SetStateAction} from "react";

export interface DragNDropProps {
  file: File | null,
  handleChange: (file: SetStateAction<null | File>) => void
  setFile: (file: SetStateAction<null | File>) => void
}