import React, { useEffect, useState } from "react";
import { CartState } from "../../StateProvider/Context";
import CheckoutProduct from "../CheckOutProduct/CheckoutProduct";
// import Check;
import "./CheckOut.css";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Checkbox,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function CheckOut() {
  const [total, setTotal] = useState(0);
  const {
    state: { basket },
  } = CartState();
  console.log(basket);
  useEffect(() => {
    setTotal(basket.reduce((acc, cur) => acc + Number(cur.price) * cur.qty, 0));
  }, [basket]);
  // const useEffect()
  return (
    <div className="checkout_container">
      <div className="checkout_productSummary">
        <div className="checkout_details">
          {basket?.length === 0 ? (
            <div className="checkout_detailsTitle">
              <h2>Your cart is empty</h2>
              <p>add items in cart</p>
            </div>
          ) : (
            <>
              <div className="checkout_detailsTitle">
                <h2>Shopping Cart {basket.length} items </h2>
                <p>Price </p>
              </div>
              {/* //list of all items */}
              {basket?.map((item) => (
                <CheckoutProduct item={item} key={item.id} />
              ))}
            </>
          )}
        </div>
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/OHL/January/Hom15/PC_Coupon_stripe.gif"
          alt=""
          className="checkout_ad"
        />
      </div>
      <div className="leftsideBar">
        <div className="checkoutSummary">
          <p>
            <CheckCircleIcon fontSize="small" color="success" />
            Your first order qualifies for FREE Delivery.Select this option at
            checkout. Details
          </p>
          <div className="checkout_total">
            <span>
              Cart Subtotal ({basket.length})<strong>: ₹ {total}</strong>
            </span>

            <p>
              <input type="checkbox" className="checkbox" />
              This order contains a gift
            </p>
          </div>
          <button className="checkout_button">Checkout</button>
          <br />
          {/* <Button variant="contained">Check Out</Button> */}
          <div>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography fontSize="small">EMI Available </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography fontSize="small">
                  Your order qualifies for EMI with valid credit cards (not
                  available on purchase of Gold, Jewelry, Gift cards and Amazon
                  pay balance top up). Learn more
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
        <div className="addBar">
          <p>
            <strong>
              Customers who bought DOCTOR EXTRA SOFT Doctor Ortho Slippers for
              Women. also bought these items from other categories:
            </strong>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CheckOut;
