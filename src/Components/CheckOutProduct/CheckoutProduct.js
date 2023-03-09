import React from "react";
import StarRateIcon from "@mui/icons-material/StarRate";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import "./CheckoutProduct.css";
import { Button, Card, Checkbox, Rating } from "@mui/material";
import { CartState } from "../../StateProvider/Context";

function CheckoutProduct({ item }) {
  const {
    state: { basket },
    dispatch,
  } = CartState();
  const {
    name,
    id,
    description,
    image,
    inStock,
    price,
    ratings,
    fastDelivery,
  } = item;
  return (
    <div className="checkoutProduct">
      <div className="checkoutProduct_list">
        <img src={image} alt="" className="checkoutImage" />
        <div className="checkoutProduct_details">
          <div className="checkoutProduct_info">
            {/* <p className="product_name">{name}</p> */}
            <p className="checkoutProduct_description">{description}</p>
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
                <span className="checkoutProduct_ratingStar" key={index}>
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

              {/* <br />
            <p>
              <small>
                <Checkbox size="small" />
                This order contains a gift
              </small>
            </p> */}
            </div>
            <p>
              <input type="checkbox" className="checkbox" />
              <small>This is a gift Learn more</small>
            </p>

            {/* <small>delivery in 4days</small> */}
            <Button
              variant="outlined"
              size="small"
              color="error"
              onClick={() => {
                console.log("del clicked");
                dispatch({
                  type: "REMOVE_FROM_BASKET",
                  payload: item,
                });
              }}
            >
              Remove from Cart
            </Button>
          </div>
          <div className="CheckoutproductSummary_price">
            <span className="checkoutProduct_price">
              <small>₹</small>
              <strong>{price}</strong>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutProduct;
