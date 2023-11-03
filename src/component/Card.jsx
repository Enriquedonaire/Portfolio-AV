import React from 'react';
import { Card as UICard, CardActionArea, CardMedia } from '@mui/material';
import "./Card.css"

const Card = () => {
  return (
    <UICard className='card'>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Sample Image"
          height="140"
          image="./logo192.png" 
          title="Sample Image"
        />
      </CardActionArea>
    </UICard>
  );
};

export default Card;