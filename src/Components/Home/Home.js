import React from "react";
import { CartState } from "../../StateProvider/Context";
// import Product from "../Product/Product";
import "./Home.css";
import SingleProduct from "../Product/SingleProduct";

function Home() {
  const {
    state: { products, filteredData },
  } = CartState();

  // console.log(products);

  return (
    <div className="home">
      <img
        className="home_image"
        src="https://m.media-amazon.com/images/I/61LuyQe5OaL._SX3000_.jpg"
        alt="banner"
      />
      {/* Product */}
      <div className="home_row">
        {filteredData.length === 0
          ? products.slice(0, 20).map((prod) => {
              return <SingleProduct prod={prod} key={prod.id} />;
            })
          : filteredData.map((prod) => {
              return <SingleProduct prod={prod} key={prod.id} />;
            })}
        {/* {products.slice(0, 20).map((prod) => {
          return <SingleProduct prod={prod} key={prod.id} />;
        })} */}
      </div>
    </div>
  );
}

export default Home;
