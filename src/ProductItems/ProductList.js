import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import BasicBreadcrumbs from "../Components/BreadCrumb";
import Navbar from "../Components/Navbar";

const ProductList = ({ products }) => {
  const { id } = useParams();
  // const [products, setProducts]  = useState([])
  // useEffect(()=>{
  //     axios.get ("https://dev.farm2me.in/api/Product")
  //  .then(res=>{
  //     setProducts(res.data.result)

  // })
  // },[]);
  // console.log(products)

  return products.length ? (
    <div style={{ marginTop: "150px", paddingBottom: "30px" }}>
      <Navbar />
      <BasicBreadcrumbs />
      <div
        style={{
          marginLeft: "140px",
          position: "absolute",
          fontSize: "20px",
          marginTop: "-40px",
        }}
      >
        <b>
          <u>All Products</u> :
        </b>
      </div>
      {products
        .filter((productList) => productList.categoryID == id)
        .map((product) => {
          return (
            <div>
              <Container>
                <Card
                  elevation={5}
                  sx={{
                    height: "150px",
                    margin: "10px 10px 2px",
                    marginLeft: "80px",
                    width: "80%",
                  }}
                >
                  <Card
                    elevation={0}
                    sx={{
                      width: "120px",
                      height: "130px",
                      marginLeft: "20px",
                      marginBottom: "10px",
                    }}
                  >
                    <CardContent sx={{ padding: "1px 1px 1px 1px" }}>
                      <CardMedia
                        sx={{
                          alignItems: "center",
                          objectFit: "contain",
                          mt: "12px",
                        }}
                        component="img"
                        height="110px"
                        image={
                          "https://dev.farm2me.in" + product.category.imagePath
                        }
                        // image={"https://rukminim1.flixcart.com/image/612/612/k7usyvk0/edible-oil/v/b/5/1-kachi-ghani-plastic-bottle-mustard-oil-fortune-original-imafpzwhbk5vhjzp.jpeg?q=70"}
                        alt=""
                      />
                    </CardContent>
                  </Card>
                  <div className="product-list-name">
                    <Typography
                      sx={{ marginTop: "-90px", marginLeft: "160px" }}
                      variant="subtitl2"
                      component="span"
                    >
                      <b>{product.name}</b>
                    </Typography>
                  </div>
                  <Typography
                    sx={{ marginTop: "-40px", marginLeft: "780px" }}
                    variant="subtitl2"
                    component="span"
                  >
                    <b>Price </b>
                    <br /> ₹ {product.price}
                  </Typography>
                  <Typography
                    sx={{ marginRight: "70px", marginTop: "10px" }}
                    align="right"
                  >
                    <Link
                      style={{ textDecoration: "none" }}
                      to={"/cart/" + product.id}
                    >
                      <Button
                        onClick={(e) => {
                          e.preventDefault();
                          // localStorage.setItem("products",  JSON.stringify([{
                          //     product: product.name,
                          //     id: product.id
                          // }])
                          // )
                          var newData = product;
                          if (localStorage.getItem("product") == null) {
                            localStorage.setItem("product", "[]");
                          }
                          var oldData = JSON.parse(
                            localStorage.getItem("product")
                          );
                          oldData.push(newData);

                          localStorage.setItem(
                            "product",
                            JSON.stringify(oldData)
                          );
                        }}
                        size="small"
                        variant="contained"
                      >
                        Add to Cart
                      </Button>
                    </Link>
                  </Typography>
                </Card>
              </Container>
            </div>
          );
        })}
    </div>
  ) : (
    <div style={{ marginTop: "120px", textAlign: "center" }}>
      <Navbar />
      Please wait....
    </div>
  );
};

export default ProductList;
