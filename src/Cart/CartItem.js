import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import DeleteIcon from "@material-ui/icons/Delete";
import { useContext, useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import {
  DECREASE_QUANTITY,
  DELETE_CART_ITEM,
  INCREASE_QUANTITY,
} from "../Constants/constants";
import { LOCAL_CART } from "../Constants/LocalStorage";
import { CartContext } from "../context/CartContext";

const CartCard = ({ cartItem, deleteCartItem }) => {
  const [currentvalue, setCurrentValue] = useState(
    cartItem.product.quantityIncrement
  );
  const { dispatch, cartItems } = useContext(CartContext);
  // const { removeCartItems } = useContext(CartContext);
  const [minusButton, setMinusButton] = useState(false);
  // const minusToggle = () => {
  //   if (currentvalue === cartItem.product.minimumQuantity) {
  //     setMinusButton(!minusButton);
  //   } else if (currentvalue > cartItem.product.minimumQuantity) {
  //     setMinusButton(minusButton);
  //   }
  // };

  console.log(cartItems);
  useEffect(() => {
    setCurrentValue(cartItem.quantity);
  }, []);
  useEffect(() => {
    if (currentvalue === cartItem.product.minimumQuantity) {
      setMinusButton(!minusButton);
    } else {
      setMinusButton(false);
    }
  }, [currentvalue]);

  const newPrice = cartItem.product.price * currentvalue;
  // const totalPrice = data.reduce((acc, curr) => acc + curr.newPrice, 0);
  // const { cartItems, dispatch } = useContext(CartContext);
  // console.log(cartItem);
  // console.log(newPrice);
  // const { removeCartItems } = useContext(CartContext);
  return (
    <div>
      <Card
        elevation={1}
        sx={{
          width: "780px",
          height: "200px",
          marginTop: "5px",
          marginBottom: "10px",
        }}
      >
        <CardContent sx={{ padding: "1px 1px 1px 1px" }}>
          <div className="product-name">
            <Card elevation={0} sx={{ width: "140px", marginLeft: "20px" }}>
              {/* {cartItem.id} */}

              <CardMedia
                sx={{
                  alignItems: "center",
                  objectFit: "contain",
                  marginBottom: "2px",
                }}
                component="img"
                height="125px"
                image={
                  "https://dev.farm2me.in" + cartItem.product.category.imagePath
                }
                alt=""
              />
            </Card>
            <Typography
              sx={{ marginLeft: "19px" }}
              variant="subtitl2"
              component="span"
              align="left"
            >
              <b>{cartItem.product.name}</b>
            </Typography>
            <p
              style={{
                marginBottom: "170px",
                marginLeft: "570px",
                position: "absolute",
              }}
            >
              <b>Price-</b> ₹{newPrice}
            </p>
            <Button
              style={{
                marginLeft: "270px",
                // marginTop: "-80px",
                position: "absolute",
              }}
              variant="contained"
              color="inherit"
              size="small"
              startIcon={<DeleteIcon />}
              onClick={() => {
                // deleteCartItem(cartItem.id);
                dispatch({ type: "REMOVE_CART_ITEM", id: cartItem.id });

                // removeCartItems(cartItem.id);
              }}
              // color="error"
            >
              Remove Item
            </Button>
            <button
              disabled={minusButton}
              className="button-minus"
              onClick={() => {
                if (currentvalue === cartItem.product.minimumQuantity) {
                  return;
                } else
                  setCurrentValue(
                    currentvalue - cartItem.product.quantityIncrement
                  );
                DECREASE_QUANTITY(cartItem.product);
                // minusToggle();
              }}
            >
              -
            </button>
            <input
              className="input-cart"
              // value={cartItem.quantity}
              value={currentvalue}
              style={{ width: "40px" }}
            ></input>
            <button
              style={{ marginRight: "4px" }}
              className="button-plus"
              onClick={() => {
                setCurrentValue(
                  currentvalue + cartItem.product.quantityIncrement
                );
                INCREASE_QUANTITY(cartItem.product);
              }}
              align="left"
            >
              +
            </button>
            <b>{cartItem.product.unitOfMeasurement}</b>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CartCard;
