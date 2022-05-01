export const CartReducer = (state, action) => {
  switch (action.type) {
    case "REMOVE_CART_ITEM":
      return state.filter((cartItem) => cartItem.id !== action.id);
    case "CLEAR_CART":
      return (state = []);
    default:
      return state;
  }
};
