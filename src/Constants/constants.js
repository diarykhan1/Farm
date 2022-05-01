export const KEY_BASKET = "basket";
export const KEY_PRODUCTS = "products";
export const API_URL = "https://dev.farm2me.in/api";

export const AddToCart = (product) => {
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

export const INCREASE_QUANTITY = (product) => {
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
    quantity: product.quantityIncrement,
  };
  if (currentCartItemIndex >= 0) {
    currentCartItem = basket[currentCartItemIndex];
    currentCartItem.quantity =
      currentCartItem.quantity + product.quantityIncrement;
    basket.splice(currentCartItemIndex, 1);
  }

  basket = [...basket, currentCartItem];
  localStorage.setItem(KEY_BASKET, JSON.stringify(basket));
};

export const DECREASE_QUANTITY = (product) => {
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
    quantity: product.quantityIncrement,
  };
  if (currentCartItemIndex >= 0) {
    currentCartItem = basket[currentCartItemIndex];
    currentCartItem.quantity =
      currentCartItem.quantity - product.quantityIncrement;
    basket.splice(currentCartItemIndex, 1);
  }

  basket = [...basket, currentCartItem];
  localStorage.setItem(KEY_BASKET, JSON.stringify(basket));
};
