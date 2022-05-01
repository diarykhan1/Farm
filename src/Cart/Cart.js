import Navbar from "../Components/Navbar";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import CartItem from "./CartItem";
import emptyCart from "../Images/empty_cart.jpg";
import { useContext } from "react";
import ShoppingCartCheckoutIcon from "@material-ui/icons/ShoppingCart";
import { CartContext } from "../context/CartContext";
const Cart = () => {
  const { cartItems, dispatch } = useContext(CartContext);
  // const deleteCartItem = (id) => {
  //   const newBasket = basket.filter((item) => item.id !== id);
  //   setBasket(newBasket);
  //   localStorage.setItem(KEY_BASKET, JSON.stringify(newBasket));
  // };
  // console.log(basket);
  console.log(cartItems);
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART", item: { cartItems } });
  };
  if (cartItems.length == []) {
    return (
      <>
        <Navbar />
        <Card
          elevation={3}
          sx={{
            width: "70%",
            alignItems: "center",
            maxHeight: "480px",
            marginTop: "90px",
            marginLeft: "180px",
          }}
        >
          <CardMedia
            sx={{
              alignItems: "center",
              objectFit: "contain",
              marginTop: "-100px",
            }}
            component="img"
            image={emptyCart}
            alt=""
          ></CardMedia>
        </Card>
      </>
    );
  }
  return cartItems ? (
    <div className="cart-main">
      <Navbar />
      <h2>
        <u>My Cart</u>
        <ShoppingCartCheckoutIcon style={{ marginLeft: "6px" }} /> (
        {cartItems.length})
      </h2>
      <div>
        <Card
          elevation={10}
          sx={{
            width: "40%",
            marginLeft: "840px",
            marginTop: "20px",
            height: "300px",
            textAlign: "center",
            position: "absolute",
          }}
        >
          <CardContent>
            <Typography
              borderBottom="2px solid #f0f0f0"
              variant="h5"
              component="div"
            >
              <b>Cart Total</b>
            </Typography>
            <span
              style={{
                textAlign: "right",
                fontWeight: "500",
                fontSize: "30px",
                marginTop: "40px",
                marginBottom: "90px",
              }}
            >
              <b>₹0</b>
            </span>
            <Stack spacing={2} direction="row">
              <Button variant="contained" color="primary">
                checkout
              </Button>
              <Button variant="contained" color="error" onClick={clearCart}>
                Clear Cart
              </Button>
            </Stack>
          </CardContent>
        </Card>
      </div>

      <Container>
        {cartItems
          ? cartItems.map((cartItem) => {
              return (
                <div key={cartItem.id}>
                  <CartItem
                    cartItem={cartItem}
                    // deleteCartItem={deleteCartItem}
                  />
                </div>
              );
            })
          : null}
      </Container>
    </div>
  ) : (
    <div>
      <Navbar />
      <Card
        elevation={3}
        sx={{
          width: "70%",
          alignItems: "center",
          maxHeight: "480px",
          marginTop: "90px",
          marginLeft: "180px",
        }}
      >
        <CardMedia
          sx={{
            alignItems: "center",
            objectFit: "contain",
            marginTop: "-100px",
          }}
          component="img"
          image={emptyCart}
          alt=""
        ></CardMedia>
      </Card>
    </div>
  );
};

export default Cart;
