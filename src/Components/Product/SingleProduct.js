import React from "react";
import "./SingleProduct.css";
import { Button, Card, Rating } from "@mui/material";

import StarRateIcon from "@mui/icons-material/StarRate";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import { CartState } from "../../StateProvider/Context";

function SingleProduct({ prod }) {
  const {
    name,
    id,
    description,
    image,
    inStock,
    price,
    ratings,
    offer,
    freeDelivery,
  } = prod;
  // console.log(prod);

  const {
    state: { basket },
    dispatch,
  } = CartState();

  const starRating = () => {};
  return (
    <div className="product">
      <img src={image} alt="" />
      <div className="product_info">
        {/* <p className="product_name">{name}</p> */}
        <p className="product_name">
          {name},{description}
        </p>
        {/* <p className="product_description">{description}</p> */}
        <div className="product_rating">
          {
            <Rating
              name="half-rating-read"
              defaultValue={ratings}
              precision={0.5}
              size="small"
              readOnly
            />
          }
          {/* {[...Array(5)].map((_, index) => {
            return (
              <span className="product_ratingStar" key={index}>
                {ratings - index >= 1 ? (
                  <StarRateIcon fontSize="small" />
                ) : ratings - index >= 0.5 && ratings - index < 1 ? (
                  <StarHalfIcon fontSize="small" />
                ) : (
                  <StarOutlineIcon fontSize="small" />
                )}
              </span>
            );
          })} */}
          <span>{ratings}</span>
        </div>
        <div className="product_deal">
          <p>
            <small>{offer}%off</small>
          </p>
          <small>
            <strong>Deal of the Day</strong>
          </small>
        </div>
        <div className="product_price">
          <p className="product_priceActual">
            {" "}
            <sup style={{ fontSize: "small" }}>₹</sup>
            {parseFloat(price * (100 - offer) * 0.01).toFixed(2)}
          </p>
          <p className="product_priceOffer">M.R.P: ₹{price}</p>
        </div>
        {/* <small>delivery in 4days</small> */}
      </div>
      {basket.some((p) => p.id === prod.id) ? (
        // <Button
        //   variant="outlined"
        //   color="error"
        //   onClick={() => {
        //     console.log("del clicked");
        //     dispatch({
        //       type: "REMOVE_FROM_BASKET",
        //       payload: prod,
        //     });
        //   }}
        // >
        //   Remove from basket
        // </Button>
        <button
          className="checkout_button"
          onClick={() => {
            console.log("del clicked");
            dispatch({
              type: "REMOVE_FROM_BASKET",
              payload: prod,
            });
          }}
        >
          Remove from basket
        </button>
      ) : (
        // <Button
        //   variant="contained"
        //   disabled={!inStock}
        //   onClick={() => {
        //     dispatch({
        //       type: "ADD_TO_BASKET",
        //       payload: prod,
        //     });
        //   }}
        // >
        //   {!inStock ? "Out of stock" : "Add to cart"}
        // </Button>
        <button
          className="checkout_button"
          disabled={!inStock}
          onClick={() => {
            dispatch({
              type: "ADD_TO_BASKET",
              payload: prod,
            });
          }}
        >
          {!inStock ? "Out of stock" : "Add to cart"}
        </button>
      )}
    </div>
  );
}

export default SingleProduct;
