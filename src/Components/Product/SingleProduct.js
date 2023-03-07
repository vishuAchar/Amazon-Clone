import React from "react";
import "./SingleProduct.css";

import StarRateIcon from "@mui/icons-material/StarRate";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarOutlineIcon from "@mui/icons-material/StarOutline";

function SingleProduct({ prod }) {
  const {
    name,
    id,
    description,
    image,
    inStock,
    price,
    ratings,
    fastDelivery,
  } = prod;
  //   console.log(name);
  return (
    <div className="product">
      <div className="product_info">
        <p className="product_name">{name}</p>
        <p className="product_description">{description}</p>
        <p className="product_price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating"></div>
      </div>
      <img src={image} alt="" />
      <button>Add to basket</button>
    </div>
  );
}

export default SingleProduct;
