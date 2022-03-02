export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { 
          ...state, 
          cartItems: [...state.cartItems, action.payload] };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cartItems.filter((c) => c.id !== action.payload.id),
      };
    default:
      return state;
  }
};
