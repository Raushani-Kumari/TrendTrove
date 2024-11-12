import React from 'react';
import { Box, Typography, Container, Grid, Divider, Button } from '@mui/material';

const About = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: '#f9f9f9' }}>
      <Container maxWidth="lg">
        
        <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
          About Us
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" paragraph>
          Discover the latest and most unique trends with TrendTrove.
        </Typography>

        <Box sx={{ my: 6 }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
            Who We Are
          </Typography>
          <Typography variant="body1" color="textSecondary" paragraph>
            At TrendTrove, we believe that style is a personal journey, and we're here to make that journey both inspiring and effortless. Our team is passionate about sourcing quality, fashion-forward items from all over the world. From elegant apparel and chic accessories to casual wear and essentials, our collection is handpicked to ensure that every piece reflects the highest standards of style, comfort, and durability.
          </Typography>
        </Box>

        <Divider variant="middle" sx={{ my: 4 }} />
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
              Men’s Collection
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Discover a versatile range that includes everything from casual streetwear to formal attire. Our men’s collection blends comfort with style, allowing you to express yourself effortlessly.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
              Women’s Collection
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Elevate your wardrobe with our unique selection of dresses, tops, pants, and more. Designed with elegance and the latest trends in mind, our women’s collection caters to all occasions and preferences.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
              Accessories
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Complete your look with our exclusive accessories, from statement jewelry and bags to scarves and hats. We offer finishing touches that help you stand out and express your unique personality.
            </Typography>
          </Grid>
        </Grid>

        <Box sx={{ my: 6 }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
            Our Mission
          </Typography>
          <Typography variant="body1" color="textSecondary" paragraph>
            Our mission is simple: to inspire confidence and individuality through fashion. We want every visit to TrendTrove to be a discovery, a journey where you can find something that feels like it was made just for you.
          </Typography>
        </Box>

        <Box sx={{ my: 6 }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
            Why Shop With Us?
          </Typography>
          <Typography variant="body1" color="textSecondary" paragraph>
            <ul>
              <li><b>Diverse Range:</b> Our catalog is constantly updated to include the latest trends, ensuring that you never miss out on what’s in style.</li>
              <li><b>Quality Assurance:</b> We believe in quality above all else. Each product at TrendTrove is carefully inspected to ensure it meets our high standards.</li>
              <li><b>Customer Satisfaction:</b> Your experience matters to us. Our team is dedicated to providing exceptional customer service, from the moment you visit our site to the day your package arrives at your doorstep.</li>
            </ul>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
