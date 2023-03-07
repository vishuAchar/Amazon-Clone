const CartReducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      {
        return state;
      }
      //Logic to add to basket
      break;
    case "REMOVE_FROM_BASKET":
      //Logic to remove item
      break;
    default:
      return state;
  }
};

export default CartReducer;
