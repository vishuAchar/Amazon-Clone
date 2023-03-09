import React, { useContext } from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
// import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { CartState } from "../../StateProvider/Context";

function Header() {
  const { state } = CartState();
  console.log(state?.basket?.length);
  return (
    <>
      {/* Navbar Bottom */}
      <nav className="header_bottom">
        <div className="menu">
          {/* Menu icon */}
          <Link className="menu_link">
            <MenuOutlinedIcon className="menu_optionIcon" />
            <span className="menu_option">All</span>
          </Link>

          <Link className="menu_link">
            <span className="menu_option">Amazon mini TV</span>
          </Link>
          <Link className="menu_link">
            <span className="menu_option">Sell</span>
          </Link>
          <Link className="menu_link">
            <span className="menu_option">Best Seller</span>
          </Link>
          <Link className="menu_link">
            <span className="menu_option">Mobiles</span>
          </Link>
          <Link className="menu_link">
            <span className="menu_option">Customer service</span>
          </Link>
          <Link className="menu_link">
            <span className="menu_option">Todays's Deals</span>
          </Link>
          <Link className="menu_link">
            <span className="menu_option">Electronics</span>
          </Link>
          <Link className="menu_link">
            <span className="menu_option">Prime</span>
          </Link>
          <Link className="menu_link">
            <span className="menu_option">Amazon Pay</span>
          </Link>
        </div>
        <div className="downloadApp_link">
          <Link className="menu_link">
            <ShoppingBagOutlinedIcon />
            <span className="downloadApp_linkText">
              Shopping made easy || Download the App
            </span>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Header;
