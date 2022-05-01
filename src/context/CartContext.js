import { useEffect } from "react";
import { useReducer } from "react";
import { createContext } from "react";
import { KEY_BASKET } from "../Constants/constants";
import { CartReducer } from "./CartReducer";

export const CartContext = createContext();

const CartContextProvider = (props) => {
  const [cartItems, dispatch] = useReducer(CartReducer, [], () => {
    const localData = localStorage.getItem(KEY_BASKET);
    return localData ? JSON.parse(localData) : [];
  });
  const cartCount = cartItems.length;

  useEffect(() => {
    localStorage.setItem(KEY_BASKET, JSON.stringify(cartItems));
  }, [cartItems]);
  // console.log(cartItems);
  console.log(cartCount);

  return (
    <CartContext.Provider value={{ cartItems, dispatch }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
