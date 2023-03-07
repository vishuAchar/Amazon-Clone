import React from "react";
import { CartState } from "../../StateProvider/Context";
// import Product from "../Product/Product";
import "./Home.css";
import SingleProduct from "../Product/SingleProduct";

function Home() {
  const {
    state: { products },
  } = CartState();

  console.log(products);

  return (
    <div className="home">
      <img
        className="home_image"
        src="https://m.media-amazon.com/images/I/61p8fxhYxPL._QL85_V1_.jpg"
        alt="banner"
      />
      {/* Product */}
      <div className="home_row">
        {products.map((prod) => {
          return <SingleProduct prod={prod} key={prod.id} />;
        })}
      </div>
    </div>
  );
}

export default Home;
