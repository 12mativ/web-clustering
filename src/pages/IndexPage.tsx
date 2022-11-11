import React from "react";
import {StandardLayout} from "../components/StandardLayout";
import {Box, Button, Container, Grid, Typography} from "@mui/material";
import { NavLink } from "react-router-dom";
import bgimg from '../assets/1.jpg'
import logo1 from '../assets/2.jpg'
import logo2 from '../assets/3.webp'
import logo3 from '../assets/4.svg'

export const IndexPage = () => {
  return (
    <StandardLayout>
     <Grid item xl={12} lg={12} md={12} xs={12} sx={{backgroundImage: `url(${bgimg})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover'}}>
        <Container>
          <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap'}}>
            <img src={logo1} alt="" style={{width: '100px', padding: '7px 10px 0 10px'}}/>
            <img src={logo2} alt="" style={{width: '300px', padding: '7px 10px 0 10px'}}/>
            <img src={logo3} alt="" style={{width: '150px', padding: '7px 10px 0 10px'}}/>
          </Box>

          <Box sx={{height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
          }}>
            <Typography component='h1' variant='h1' sx={(theme) => ({textAlign: 'center',
              color: 'common.white',
              fontSize: '4rem',
              fontWeight: 500,
              mb: theme.spacing(3)
            })}>
              SHA-256
            </Typography>
            <Typography sx={{textAlign: 'center', color: 'common.white'}}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Aliquid delectus dicta, dolorum excepturi fugiat, libero
              maiores mollitia neque obcaecati officiis omnis porro
              praesentium quaerat ratione saepe soluta ullam ut voluptatibus.
            </Typography>
            <NavLink to={'/clusters'} style={{textDecoration: 'none', width: '20%', marginTop: '1rem'}}>
              <Button variant='contained' sx={(theme) => (
                {width: '100%', padding: theme.spacing(1.5)}
              )}>
                Начать
              </Button>
            </NavLink>

          </Box>
        </Container>
      </Grid>
    </StandardLayout>
  )
}