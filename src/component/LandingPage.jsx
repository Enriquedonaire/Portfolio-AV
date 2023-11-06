import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import Card from './Card';
import { Grid } from '@mui/material';
import "../App.css"

const LandingPage = () => {
  return (
    <div>
      <div className="title">
        <h1>Enrique Donaire DOP</h1>
      </div>
      <NavBar />
      <Grid container spacing={2} justifyContent="center">
        {[...Array(12)].map((_, index) => (
          <Grid item key={index} xs={6} sm={3}>
            <Link to="/video">
              <Card />
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default LandingPage;
