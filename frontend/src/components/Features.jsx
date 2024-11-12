import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
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
      width: "37%",
      height: "1px",
      backgroundColor: "black",
    },
    "&::before": { left: 40 },
    "&::after": { right: 40},
  },
});
const Features = () => {
    const classes = useStyles();
  return (
    <>
      <Box>
        {" "}
        <Typography variant="h4" className={classes.heading}>
          {" "}
          What we offer{" "}
        </Typography>{" "}
      </Box>
      <Box sx={{ p: 4, textAlign: "center", backgroundColor: "#ffffff" }}>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={4} md={4}>
            <Box>
              <SwapHorizIcon fontSize="large" />
              <Typography
                variant="h6"
                component="div"
                sx={{ fontWeight: "bold", mt: 2 }}
              >
                Easy Exchange Policy
              </Typography>
              <Typography variant="body2" color="textSecondary">
                We offer hassle free exchange policy
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={4} md={4}>
            <Box>
              <CheckCircleIcon fontSize="large" />
              <Typography
                variant="h6"
                component="div"
                sx={{ fontWeight: "bold", mt: 2 }}
              >
                7 Days Return Policy
              </Typography>
              <Typography variant="body2" color="textSecondary">
                We provide 7 days free return policy
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={4} md={4}>
            <Box>
              <HeadsetMicIcon fontSize="large" />
              <Typography
                variant="h6"
                component="div"
                sx={{ fontWeight: "bold", mt: 2 }}
              >
                Best Customer Support
              </Typography>
              <Typography variant="body2" color="textSecondary">
                We provide 24/7 customer support
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Features;
