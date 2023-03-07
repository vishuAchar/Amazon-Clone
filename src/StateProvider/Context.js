import React, { createContext, useContext, useReducer } from "react";
import { faker } from "@faker-js/faker";
import CartReducer from "./CartReducer";

const Cart = createContext();

function Context({ children }) {
  const products = [...Array(4)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.product(),
    description: faker.commerce.productDescription(),
    price: faker.commerce.price(),
    image: faker.image.imageUrl(1234, 2345, "product"),
    inStock: faker.datatype.number({ min: 0, max: 10, precision: 1 }),
    fastDeliveryt: faker.datatype.boolean(),
    ratings: faker.datatype.number({ min: 0, max: 5, precision: 0.1 }),
  }));
  //   console.log(products);
  //   products.seed(99);

  const [state, dispatch] = useReducer(CartReducer, {
    products: products,
    basket: ["1", "2", "3", "4"],
  });

  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
}

export default Context;

export const CartState = () => {
  return useContext(Cart);
};
