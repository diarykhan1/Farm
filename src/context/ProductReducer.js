export const ProductReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return state.filter((product) => product.id === action.id);
    default:
      return state;
  }
};
