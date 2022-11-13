import React from "react";
import {StandardLayout} from "../components/StandardLayout";
import Navbar from "../components/Navbar/Navbar";
import {Box, Grid} from "@mui/material";
import {DragNDropContainer} from "../components/DragNDrop/DragNDropContainer";

export const CalculatePage = () => {
    return (
        <StandardLayout>
            <Grid item xl={12} lg={12} md={12} xs={12}>
                <Navbar />
            </Grid>
            <Grid item xl={12} lg={12} md={12} xs={12}>
              <Box sx={(theme) => (
                {
                  display: 'flex',
                  justifyContent: 'center',
                  marginTop: theme.spacing(4),
                  mx: theme.spacing(1),
                  textAlign: 'center'
                }
              )}>
                <DragNDropContainer />
              </Box>
            </Grid>
        </StandardLayout>
    )
}