import React from "react";
import {StandardLayout} from "../components/StandardLayout";
import Navbar from "../components/Navbar/Navbar";
import { Grid } from "@mui/material";

export const IndexPage = () => {
    return (
        <StandardLayout>
            <Grid item xl={12} lg={12} md={12} xs={12}>
                <Navbar />
            </Grid>

            <Grid item xl={4} lg={4} md={4} xs={12} >

            </Grid>
        </StandardLayout>
    )
}