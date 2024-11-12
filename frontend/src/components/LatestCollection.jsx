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
      width: "33%",
      height: "1px",
      backgroundColor: "black",
    },
    "&::before": { left: 70 },
    "&::after": { right: 70 },
  },
});

const LatestCollection = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const classes = useStyles();
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://fakestoreapi.com/products/category/jewelery"
        );
        setProducts(response.data);
      } catch (err) {
        setError("Failed to fetch products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

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
      <Box>
        {" "}
        <Typography variant="h4" className={classes.heading}>
          {" "}
          Latest Collections{" "}
        </Typography>{" "}
      </Box>
      <Box sx={{ p: 4, textAlign: "center", backgroundColor: "#ffffff" }}>
        <Typography variant="body1" color="textSecondary" sx={{ mb: 4 }}>
          Explore our latest collection, a stunning array of fresh designs and
          innovative products that embody the spirit of contemporary style and
          sophistication. Each piece in this collection is crafted with care,
          showcasing the latest trends and timeless classics that cater to every
          taste and occasion.
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
                  // border: "1px solid darkslategrey",
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

export default LatestCollection;
