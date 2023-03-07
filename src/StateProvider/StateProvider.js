import { createContext, useReducer } from "react";

//SetUp data layer

//This is data layer
export const StateContent = createContext();

//build provider
export const StateProvider = ({ reducer, initialState, children }) => {
  <StateContent.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContent.Provider>;
};
