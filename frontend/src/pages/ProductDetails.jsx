import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Import useNavigate
import {
  Typography,
  Box,
  Button,
  Grid,
  Tab,
  Tabs,
  Divider,
  IconButton,
} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import axios from "axios";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [wishlist, setWishlist] = useState(false);
  const [tabIndex, setTabIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState(null);

  const sizeButtonStyles = {
    border: "1px solid darkslategray",
    color: "darkslategray",
    backgroundColor: "white",
    fontWeight: "bold",
    margin: "0 5px",
    "&.selected": {
      backgroundColor: "darkslategray",
      color: "white",
    },
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );
        setProduct(response.data);
      } catch (error) {
        console.error("Failed to fetch product details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const handleAddToCart = () => {
    console.log("Added to cart:", product);
  };

  const handleWishlistToggle = () => {
    setWishlist(!wishlist);
    console.log(wishlist ? "Removed from wishlist" : "Added to wishlist");
  };

  const handleTabChange = (event, newIndex) => {
    setTabIndex(newIndex);
  };


  const handleBack = () => {
    navigate(-1); 
  };

  if (loading) return <CircularProgress />;

  return product ? (
    <Box sx={{ p: 4 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <IconButton
              variant="outlined"
              onClick={handleBack}
              sx={{
                position: "absolute",
                top: "90px",
                left: "10px",
                color: "darkslategray",
                borderColor: " darkslategray",
              }}
            >
                <ArrowBackIcon fontSize="large" />
            </IconButton>

            <img
              src={product.image}
              alt={product.title}
              style={{ width: "100%", maxWidth: "300px", marginBottom: "20px" }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            {product.title}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <Typography variant="h5" color="error" sx={{ fontWeight: "bold" }}>
              ${product.price}
            </Typography>
            <Typography variant="body2" sx={{ ml: 2 }}>
              (122 reviews)
            </Typography>
          </Box>
          <Typography variant="body1" sx={{ mb: 2, color: "textSecondary" }}>
            {product.description}
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            Select Size:
          </Typography>
          <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
            {["S", "M", "L", "XL", "XXL"].map((size) => (
              <Button
                variant={size === size ? "contained" : "outlined"}
                onClick={() => handleSizeSelect(size)}
                key={size}
                sx={{
                  ...sizeButtonStyles,
                  ...(selectedSize === size && sizeButtonStyles["&.selected"]),
                }}
              >
                {size}
              </Button>
            ))}
          </Box>
          <Box sx={{ mt: 3 }}>
            <Button
              variant="contained"
              sx={{
                mr: 2,
                width: "200px",
                color: "white",
                backgroundColor: "darkslategray",
              }}
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              onClick={handleWishlistToggle}
              sx={{
                width: "240px",
                color: "white",
                backgroundColor: "darkslategray",
              }}
            >
              {wishlist ? "Remove from Wishlist" : "Add to Wishlist"}
            </Button>
          </Box>
          <Divider sx={{ my: 3 }} />
          <Typography variant="body2" color="textSecondary">
            <p>100% Original product.</p>
            <p>Cash on delivery available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </Typography>
        </Grid>
      </Grid>
      <Box sx={{ mt: 4 }}>
        <Tabs value={tabIndex} onChange={handleTabChange} centered>
          <Tab label="Description" />
          <Tab label={`Reviews (${122})`} />
        </Tabs>
        <Box sx={{ mt: 2 }}>
          {tabIndex === 0 ? (
            <Typography variant="body1" color="textSecondary">
              {product.description}
            </Typography>
          ) : (
            <Typography variant="body1" color="textSecondary">
              User reviews will go here (currently placeholder text).
            </Typography>
          )}
        </Box>
      </Box>
    </Box>
  ) : (
    <Typography>Product not found.</Typography>
  );
};

export default ProductDetail;

