import React from 'react';
import { Box, Grid, Typography, TextField, Button, Divider } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

const ContactSection = () => {
    return (
      <Box sx={{ backgroundColor: '#ffffff', py: 8, px: { xs: 2, md: 8 } }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold'}}>
            Get In Touch With Us
          </Typography>
          <Typography variant="body1" color="textSecondary" sx={{ maxWidth: 600, mx: 'auto', mt: 1 }}>
          Have questions or need assistance? Get in touch with our friendly and responsive customer support team.
          </Typography>
        </Box>
  
        <Grid container spacing={6} justifyContent="center">
          <Grid item xs={12} md={5}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
              Address
            </Typography>
            <Typography variant="body2" color="textSecondary" sx={{ mb: 3}}>
              2972 Westheimer Rd. Santa Ana, Illinois 85486
            </Typography>
  
            <Divider sx={{ mb: 3 }} />
  
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2}}>
              Phone
            </Typography>
            <Typography variant="body2" color="textSecondary" sx={{ mb: 3 }}>
              (+91) 987 654 321
            </Typography>
  
            <Divider sx={{ mb: 3 }} />
  
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
              Email
            </Typography>
            <Typography variant="body2" color="textSecondary" sx={{ mb: 3 }}>
              trendtroveinfo@contact.com
            </Typography>
  
            <Divider sx={{ mb: 3 }} />
  
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
              Social Media
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <FacebookIcon />
              <InstagramIcon />
              <TwitterIcon />
              <YouTubeIcon />
            </Box>
          </Grid>

          <Grid item xs={12} md={7}>
            <Grid container spacing={2} component="form" noValidate autoComplete="off">
              <Grid item xs={6}>
                <TextField fullWidth label="Name" required variant="outlined" />
              </Grid>
              <Grid item xs={6}>
                <TextField fullWidth label="Last Name" required variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Email" required variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Comment or Message"
                  multiline
                  rows={4}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sx={{ textAlign: 'left' }}>
                <Button variant="contained" color="secondary" sx={{ backgroundColor: 'darkslategrey', fontWeight: 'bold' }}>
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    );
  };
  
  export default ContactSection;
  