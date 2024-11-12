import React from "react";
import { Grid, Typography, Box, Container } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    heading: {
      textAlign: "center",
      fontFamily: "cursive !important",
      fontSize: "40px !important",
      margin: "20px 0",
      position: "relative",
      "&::before, &::after": {
        content: '""',
        position: "absolute",
        top: "50%",
        width: "42%",
        height: "1px",
        backgroundColor: "black",
      },
      "&::before": { left: 40 },
      "&::after": { right: 40},
    },
  })

const SubSection = () => {
    const classes = useStyles();
  return (
    <>
     <Box>
        {" "}
        <Typography variant="h4" className={classes.heading}>
          {" "}
          Explore{" "}
        </Typography>{" "}
      </Box>
    <Container maxWidth="lg">
      <Grid container spacing={2} mt={2} mb={2}>
        <Grid item xs={12} md={4}>
          <Box
            component="img"
            sx={{
              objectFit: "cover",
              borderRadius: "10px",
              height: " 280px",
              width: "200px",
            }}
            src="https://th.bing.com/th/id/OIP.nj6D5Q63iPlR_CIni0KptgAAAA?rs=1&pid=ImgDetMain"
            alt="Woman wearing yellow shirt"
          />
          <Typography variant="h6" mt={1} textAlign="center">
            WOMEN'S
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            component="img"
            sx={{
              height: " 280px",
              width: "200px",
              objectFit: "cover",
              borderRadius: "10px",
            }}
            src="https://i.pinimg.com/originals/0c/f4/68/0cf4682dd0ed5f0d3e797bfe01a28e7b.jpg"
            alt="Purses"
          />
          <Typography variant="h6" mt={1} textAlign="center">
            ACCESSORIES'S
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            component="img"
            sx={{
              height: " 280px",
              width: "200px",
              objectFit: "cover",
              borderRadius: "10px",
            }}
            src="https://cdn.shopify.com/s/files/1/0162/2116/files/Winter_street_style_looks_for_men_9.jpg?v=1548138063"
            alt="Man wearing brown shirt"
          />
          <Typography variant="h6" mt={1} textAlign="center">
            MEN'S
          </Typography>
        </Grid>
      </Grid>
    </Container>
    </>
  );
};

export default SubSection;
