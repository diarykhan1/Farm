import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { createContext, useReducer } from "react";
import { KEY_BASKET } from "../Constants/constants";
import { ProductReducer } from "./ProductReducer";

export const ProductContext = createContext();

const ProductContextProvider = (props) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("https://dev.farm2me.in/api/Product").then((res) => {
      setProducts(res.data.result);
    });
  }, []);
  console.log(products);

  const AddToCart1 = (product) => {
    let basket = [];
    if (localStorage.getItem(KEY_BASKET) != null) {
      basket = JSON.parse(localStorage.getItem(KEY_BASKET));
    }

    let currentCartItemIndex = basket.findIndex(
      (cartItem) => cartItem.id === product.id
    );

    let currentCartItem = {
      product: product,
      id: product.id,
      quantity: product.minimumQuantity,
    };
    if (currentCartItemIndex >= 0) {
      currentCartItem = basket[currentCartItemIndex];
      currentCartItem.quantity++;
      basket.splice(currentCartItemIndex, 1);
    }

    basket = [...basket, currentCartItem];
    localStorage.setItem(KEY_BASKET, JSON.stringify(basket));
  };

  const [productCart, dispatch] = useReducer(ProductReducer, products);
  return (
    <>
      <ProductContext.Provider value={{ products, AddToCart1 }}>
        {props.children}
      </ProductContext.Provider>
    </>
  );
};

export default ProductContextProvider;
