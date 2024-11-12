import React, { useEffect, useState } from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Button,
  CircularProgress,
} from "@mui/material";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import { Navigate, useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  fadeIn: {
    opacity: 0,
    transition: "opacity 0.3s ease-in-out",
  },
  fadeInVisible: {
    opacity: 1,
  },
  heading: {
    textAlign: "center",
    fontFamily: "cursive !important",
    fontSize: "40px !important",
    margin: "10px 0",
    position: "relative",
  },
});

const CollectionComponent = ({ selectedCategory }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const classes = useStyles();

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        const allProducts = response.data;

        const filteredProduct =
          selectedCategory === "all"
            ? allProducts
            : allProducts.filter(
                (product) => product.category === selectedCategory
              );

        setProducts(filteredProduct);
      } catch (err) {
        setError("Failed to fetch products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [selectedCategory]);

  if (loading) {
    return (
      <Typography>
        <CircularProgress size={15} />
      </Typography>
    );
  }

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  return (
    <>
      <Box
        sx={{ p: 4, textAlign: "center", backgroundColor: "#ffffff" }}
        className={`${classes.fadeIn} ${classes.fadeIn ? classes.fadeInVisible : ""}`}
      >
        <Typography variant="h4" className={classes.heading}>
          Collections{" "}
        </Typography>
        <Typography variant="body1" color="textSecondary" sx={{ mb: 4 }}>
          The collection you will always prefer!!
        </Typography>
        <Grid
          container
          spacing={1}
          justifyContent="center"
          sx={{ padding: "8px" }}
        >
          {products.map((product) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={2.4}
              key={product.id}
              sx={{ m: 0.5 }}
            >
              {" "}
              <Card
                sx={{
                  boxShadow: "none",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                <Box
                  sx={{
                    flex: "1 0 auto",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                  }}
                >
                  <CardMedia
                    component="img"
                    image={product.image}
                    alt={product.title}
                    sx={{
                      width: "100%",
                      height: "auto",
                      maxHeight: 200,
                      objectFit: "contain",
                      transition: "transform 0.3s ease-in-out",
                      "&:hover": {
                        transform: "scale(1.05)",
                      },
                    }}
                  />
                </Box>
                <CardContent
                  sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
                >
                  <Typography
                    variant="subtitle1"
                    component="div"
                    sx={{ fontWeight: "bold", flexGrow: 1 }}
                  >
                    {product.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    sx={{ fontWeight: "bold" }}
                  >
                    ${product.price}
                  </Typography>
                  <Button
                    onClick={() => navigate(`/collection/${product.id}`)}
                    variant="contained"
                    sx={{
                      mt: 1,
                      backgroundColor: "darkslategrey",
                      color: "#ffffff",
                      "&:hover": {
                        backgroundColor: "#2F4F4F",
                      },
                    }}
                  >
                    Explore
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default CollectionComponent;
