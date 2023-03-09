import React from "react";
import "./Product.css";
import StarRateIcon from "@mui/icons-material/StarRate";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import { CartState } from "../../StateProvider/Context";

function Product({ id, title, image, price, rating }) {
  // const [state, dispatch] = CartState();
  // console.log(products);
  // const addToBasket = () => {
  //   dispatch({
  //     type: "ADD_TO_BASKET",
  //     items: {
  //       id,
  //       title,
  //       image,
  //       price,
  //       rating,
  //     },
  //   });
  // };
  return (
    <div className="product">
      <div className="product_info">
        <p className="product_title">{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(5)
            .fill()
            .map((_, index) => {
              return rating - index >= 1 ? (
                <StarRateIcon className="product_ratingStar" />
              ) : rating - index >= 0.5 && rating - index < 1 ? (
                <StarHalfIcon className="product_ratingStar" />
              ) : (
                <StarOutlineIcon className="product_ratingStar" />
              );
            })}
        </div>
      </div>
      <img src={image} alt="" />
      <button>Add to basket</button>
    </div>
  );
}

export default Product;
