import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import Carousel from 'react-material-ui-carousel';

const items = [
  {
    name: "Diamond Ring",
    description: "Exceptionally encarved diamond ring",
    image: "https://images.pexels.com/photos/1232931/pexels-photo-1232931.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    name: "Gold Pleated Ring",
    description: "Gold-pleated Ring along with Pink Diamond",
    image:"https://images.pexels.com/photos/2498853/pexels-photo-2498853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    name: "Rare Diamond",
    description: "The diamond that speaks",
    image: "https://images.pexels.com/photos/266621/pexels-photo-266621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

const HeroSection = () => {
  return (
    <Container maxWidth="xl" sx={{ display: 'flex', height: '100vh', alignItems: 'center' }}>
      <Box sx={{ flex: 1, padding: 2 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to TrendTrove
        </Typography>
        <Typography variant="h5" component="p">
          Discover the latest trends and treasures in fashion.
        </Typography>
      </Box>
      <Box sx={{ flex: 1, padding: 2 }}>
        <Carousel>
          {items.map((item, i) => (
            <Box key={i} sx={{ textAlign: 'center' }}>
              <img src={item.image} alt={item.name} style={{ width: '100%', height: 'auto' , objectFit: "contain",}} />
              <Typography variant="h6" component="h2">
                {item.name}
              </Typography>
              <Typography variant="body1" component="p">
                {item.description}
              </Typography>
            </Box>
          ))}
        </Carousel>
      </Box>
    </Container>
  );
};

export default HeroSection;
