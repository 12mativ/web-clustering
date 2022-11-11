import { Grid } from "@mui/material";
import React from "react";

interface StandardLayoutProps {
  children: React.ReactNode;
}

function StandardLayout({ children }: StandardLayoutProps) {
  return <Grid container>{children}</Grid>;
}

export default StandardLayout;
