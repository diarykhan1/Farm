import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { useState } from "react";
import { AddToCart } from "../Constants/constants";
import { CartContext } from "../context/CartContext";
// import { ProductContext } from "../context/ProductContext";

const ProductListCard = ({ product }) => {
  const [cartButton, setCartButton] = useState(false);
  const { cartItems } = useContext(CartContext);
  // const basket = JSON.parse(localStorage.getItem("basket"));
  // console.log(product.id);
  // console.log(cartItems);
  // console.log(basket);
  console.log(product);
  return (
    <Container spacing={1}>
      <Card
        className="products"
        elevation={5}
        sx={{
          height: "240px",
          margin: "10px 10px 2px",
          marginLeft: "10px",
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
                mt: "0px",
                objectFit: "contain",
                maxHeight: "150px",
                width: "200px",
                paddingTop: "10px",
              }}
              component="img"
              //   height="110px"
              image={"https://dev.farm2me.in" + product.category.imagePath}
              // image={"https://rukminim1.flixcart.com/image/612/612/k7usyvk0/edible-oil/v/b/5/1-kachi-ghani-plastic-bottle-mustard-oil-fortune-original-imafpzwhbk5vhjzp.jpeg?q=70"}
              alt=""
            />
            <Typography
              sx={{ mt: "5px", ml: "5px" }}
              // sx={{ marginTop: "-60px", marginLeft: "160px" }}
              variant="subtitl2"
              component="span"
            >
              <b>{product.name}</b>
              <br />
              {/* <Button
                color="secondary"
                style={{ height: "24px" }}
                size="small"
                variant="contained"
              >
                {product.client.name}
              </Button> */}
            </Typography>
            <Typography
              style={{ color: "red" }}
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

              {cartItems.includes(product) ? (
                <Button size="small" variant="contained" type="button">
                  Remove
                </Button>
              ) : (
                <Button
                  id="cart-btn"
                  className="add-cart-btn"
                  onClick={() => {
                    AddToCart(product);
                    // AddToCart1(product);
                    // dispatch({ type: "ADD", id: product.id });
                    alert("Item Added to Cart");

                    // window.location.reload(true);
                  }}
                  size="small"
                  variant="contained"
                  type="button"
                  disabled={cartButton}
                >
                  Add to Cart
                </Button>
              )}

              {/* </Link> */}
            </Typography>
          </CardContent>
        </Card>
        <div className="product-list-name"></div>
      </Card>
    </Container>
  );
};

export default ProductListCard;
