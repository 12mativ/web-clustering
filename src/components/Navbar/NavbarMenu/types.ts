import * as React from "react";

export interface NavbarMenuProps {
  open: boolean
  anchorEl: null | HTMLElement
  handleClick: (event: React.MouseEvent<HTMLElement>) => void
  handleClose: () => void
}