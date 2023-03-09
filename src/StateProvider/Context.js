import React, { createContext, useContext, useEffect, useReducer } from "react";
import { faker } from "@faker-js/faker";
import CartReducer from "./CartReducer";
import axios from "axios";

const Cart = createContext();

const products = [...Array(500)].map(() => ({
  id: faker.datatype.uuid(),
  name: faker.commerce.productName(),
  description: faker.commerce.productDescription(),
  price: faker.commerce.price(100, 20000, 2),
  image: faker.image.imageUrl(320, 320, "product", "yes"),
  inStock: faker.datatype.number({ min: 0, max: 10, precision: 1 }),
  freeDelivery: faker.datatype.boolean(),
  offer: faker.datatype.number({ min: 0, max: 75, precision: 1 }),
  ratings: faker.datatype.number({ min: 0, max: 5, precision: 0.1 }),
}));

faker.seed(99);

const inititalState = {
  products: products,
  basket: [],
  filteredData: [],
};

function Context({ children }) {
  const [state, dispatch] = useReducer(CartReducer, inititalState);

  //API - Not used
  const API = "https://api.pujakaitem.com/api/products";

  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      const productList = await res.data;
      console.log(res);
      dispatch({ type: "GET_DATA", payload: productList });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  useEffect(() => {
    getProducts(API);
  }, []);

  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
}

export default Context;

export const CartState = () => {
  return useContext(Cart);
};
