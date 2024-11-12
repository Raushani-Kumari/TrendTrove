import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";

const SubscribeSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: 4,
        textAlign: "center",
        backgroundColor: "#ffffff",
      }}
    >
      <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
        Subscribe now & get 20% off
      </Typography>

      <Typography variant="body2" color="textSecondary" sx={{ mb: 3 }}>
        Your believe in us, makes us who we are!!
      </Typography>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          maxWidth: 500, 
        }}
      >
        <TextField
          variant="outlined"
          placeholder="Enter your email"
          fullWidth
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "0", 
              borderRight: "none", 
              height: 48, 
            },
            "& .MuiOutlinedInput-input": {
              height: "100%", 
              padding: "0 14px", 
              boxSizing: "border-box",
            },
          }}
        />
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#000000",
            color: "#ffffff",
            borderRadius: "0",
            height: 48,
            px: 3,
            "&:hover": {
              backgroundColor: "#333333",
            },
          }}
        >
          SUBSCRIBE
        </Button>
      </Box>
    </Box>
  );
};

export default SubscribeSection;
