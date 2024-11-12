import React, { useState } from "react";
import { Box, Typography, Checkbox, FormControlLabel, Button } from "@mui/material";

const FilterComponent = ({ setSelectedCategory }) => {
    const [checkedCategory, setCheckedCategory] = useState("");

    const handleCheckboxChange = (category) =>{
        const newCategory = checkedCategory === category ? "" : category;
        setCheckedCategory(newCategory);
        setSelectedCategory(newCategory);
    }

    const handleClearAll = () => {
        setCheckedCategory("");
        setSelectedCategory("all");
    }

  return (
    <Box
      borderRight="1px solid #ccc"
      p={2}
      sx={{
        top: "70px",
        height: "calc(100vh - 66px)",
        backgroundColor: "white",
      }}
    >
      <Typography variant="h6" gutterBottom>
        Filters
      </Typography>

      <FormControlLabel
        control={<Checkbox checked={checkedCategory ==="men's clothing"} />}
        label="Men's Clothing"
        onClick={() => handleCheckboxChange("men's clothing")}
      />
      <FormControlLabel
        control={<Checkbox checked={checkedCategory ==="women's clothing"}/>}
        label="Women's Clothing"
        onClick={() => handleCheckboxChange("women's clothing")}
      />
      <FormControlLabel
        control={<Checkbox checked={checkedCategory ==="jewelery"}/>}
        label="Accessories"
        onClick={() => handleCheckboxChange("jewelery")}
      />
      <FormControlLabel
        control={<Checkbox checked={checkedCategory ==="electronics"}/>}
        label="Electronics"
        onClick={() => handleCheckboxChange("electronics")}
      />
      <Button
        variant="outlined"
        onClick={handleClearAll}
        sx={{ mt: 2 , backgroundColor: "darkslategray", color: "white"}}
      >
        Clear All
      </Button>
    </Box>
  );
};

export default FilterComponent;
