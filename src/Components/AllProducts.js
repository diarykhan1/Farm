import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useContext } from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AddToCart } from "../Constants/constants";
import { ProductContext } from "../context/ProductContext";
import BasicBreadcrumbs from "./BreadCrumb";
import Navbar from "./Navbar";

const AllProduct = () => {
  const { products } = useContext(ProductContext);
  console.log(products);
  const { value } = useParams();
  return (
    <div>
      <div style={{ marginTop: "150px", paddingBottom: "30px" }}>
        <Navbar />
        <BasicBreadcrumbs />
        <Grid container spacing={1} paddingBottom="20px">
          {products
            .filter((productList) => productList.family.includes(value))
            // .filter((productList) => if(productList.name.includes(value)))
            .map((product) => (
              <Grid key={product.id} item xs={6} md={6} lg={3}>
                <Card
                  className="products"
                  elevation={5}
                  sx={{
                    height: "240px",
                    margin: "10px 10px 2px",
                    marginLeft: "40px",
                    width: "250px",
                  }}
                >
                  <Card
                    elevation={0}
                    sx={{
                      width: "250px",
                      height: "380px",
                      marginLeft: "20px",
                      marginBottom: "10px",
                    }}
                  >
                    <CardContent sx={{ padding: "1px 1px 1px 1px" }}>
                      <CardMedia
                        sx={{
                          alignItems: "center",
                          mt: "6px",
                          objectFit: "contain",
                          maxHeight: "150px",
                          width: "200px",
                          paddingTop: "10px",
                        }}
                        component="img"
                        //   height="110px"
                        image={
                          "https://dev.farm2me.in" + product.category.imagePath
                        }
                        alt=""
                      />
                      <Typography
                        sx={{ mt: "5px" }}
                        // sx={{ marginTop: "-60px", marginLeft: "160px" }}
                        variant="subtitl2"
                        component="span"
                      >
                        <b>{product.name}</b>
                      </Typography>
                      <Typography
                        style={{ color: "#24a3b5" }}
                        variant="h6"
                        component="span"
                        sx={{ marginTop: "10px" }}
                      >
                        ₹ {product.price}
                      </Typography>
                      <Typography
                        sx={{ marginRight: "60px", marginTop: "-30px" }}
                        align="right"
                      >
                        {/* <Link
                      style={{ textDecoration: "none" }}
                      to={"/cart/" + product.id}
                    > */}
                        <Button
                          onClick={() => {
                            AddToCart(product);
                          }}
                          size="small"
                          variant="contained"
                          type="button"
                        >
                          Add To Cart
                        </Button>
                        {/* </Link> */}
                      </Typography>
                    </CardContent>
                  </Card>
                  <div className="product-list-name"></div>
                </Card>
                {/* <Card>
                <CardContent>{product.name}</CardContent>
              </Card> */}
              </Grid>
            ))}
        </Grid>
      </div>
    </div>
  );
};

export default AllProduct;
