const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      console.log("add");
      return {
        ...state,
        basket: [...state.basket, { ...action.payload, qty: 1 }],
      };

    case "REMOVE_FROM_BASKET":
      return {
        ...state,
        basket: [...state.basket.filter((c) => c.id !== action.payload.id)],
      };
    case "ADD_FILTERED_DATA":
      // console.log("add filter");
      // console.log("state", state);
      return {
        ...state,
        filteredData: action.payload,
      };
    case "CLEAR_FILTERED_DATA":
      return {
        ...state,
        filteredData: [],
      };
    default:
      return state;
  }
};

export default CartReducer;
