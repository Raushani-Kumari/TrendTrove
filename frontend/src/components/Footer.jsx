// import React from 'react';
// import { Box, Typography, Link, Grid } from '@mui/material';

// const Footer = () => {
//   return (
//     <Box sx={{ backgroundColor: '#ffffff', p: 4 }}>
//       <Grid container spacing={3} justifyContent="center">

//         {/* Logo and Description Section */}
//         <Grid item xs={12} md={4}>
//           <Typography variant="h4" sx={{ fontWeight: 'bold', fontFamily: 'sans-serif', mb: 2 }}>
//             FOREVER <span style={{ color: '#d81b60' }}>•</span>
//           </Typography>
//           <Typography variant="body2" color="textSecondary" sx={{ lineHeight: 1.6 }}>
//             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
//           </Typography>
//         </Grid>

//         {/* Company Links Section */}
//         <Grid item xs={12} md={4}>
//           <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
//             COMPANY
//           </Typography>
//           <Box>
//             <Link href="#" color="textSecondary" underline="none" sx={{ display: 'block', mb: 1 }}>
//               Home
//             </Link>
//             <Link href="#" color="textSecondary" underline="none" sx={{ display: 'block', mb: 1 }}>
//               About us
//             </Link>
//             <Link href="#" color="textSecondary" underline="none" sx={{ display: 'block', mb: 1 }}>
//               Delivery
//             </Link>
//             <Link href="#" color="textSecondary" underline="none" sx={{ display: 'block' }}>
//               Privacy policy
//             </Link>
//           </Box>
//         </Grid>

//         {/* Get In Touch Section */}
//         <Grid item xs={12} md={4}>
//           <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
//             GET IN TOUCH
//           </Typography>
//           <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>
//             +1-000-000-0000
//           </Typography>
//           <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>
//             greatstackdev@gmail.com
//           </Typography>
//           <Typography variant="body2" color="textSecondary">
//             Instagram
//           </Typography>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default Footer;

import React from "react";
import { Box, Typography, Link, Grid } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "darkslategrey", p: 4, color: "#ffffff" }}>
      <Grid container spacing={3} justifyContent="center">
        {/* Logo and Description Section */}
        <Grid item xs={12} md={4}>
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", fontFamily: "sans-serif", mb: 2 }}
          >
            TRENDTROVE<span style={{ color: "rgb(205 205 205)" }}>•</span>
          </Typography>
          <Typography variant="body2" color="inherit" sx={{ lineHeight: 1.6 }}>
            Elevate your wardrobe with our unique selection.Designed with
            elegance and the latest trends in mind.Please visit to TrendTrove to
            be a discovery, a journey where you can find something that feels
            like it was made just for you.
          </Typography>
        </Grid>

        {/* Company Links Section */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
            COMPANY
          </Typography>
          <Box>
            <Link
              href="#"
              color="inherit"
              underline="none"
              sx={{ display: "block", mb: 1 }}
            >
              Home
            </Link>
            <Link
              href="#"
              color="inherit"
              underline="none"
              sx={{ display: "block", mb: 1 }}
            >
              About us
            </Link>
            <Link
              href="#"
              color="inherit"
              underline="none"
              sx={{ display: "block", mb: 1 }}
            >
              Contact Us
            </Link>
            <Link
              href="#"
              color="inherit"
              underline="none"
              sx={{ display: "block" }}
            >
              Privacy policy
            </Link>
          </Box>
        </Grid>

        {/* Get In Touch Section */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
            GET IN TOUCH
          </Typography>
          <Typography variant="body2" color="inherit" sx={{ mb: 1 }}>
            +1-000-000-0000
          </Typography>
          <Typography variant="body2" color="inherit" sx={{ mb: 1 }}>
            trendtrove@gmail.com
          </Typography>
          <Typography variant="body2" color="inherit">
            Instagram
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
