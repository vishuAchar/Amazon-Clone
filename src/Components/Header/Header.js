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
      <nav className="header-top">
        {/*logo on the left*/}
        <Link to="/" className="header_logoDiv">
          <img
            className="header_logo"
            src="https://zeevector.com/wp-content/uploads/LOGO/Amazon-India-Logo-PNG-White2.png"
            alt="logo"
          />
        </Link>

        {/*Address box*/}
        <Link to="/login" className="header_link">
          {/* <LocationOnOutlinedIcon /> */}
          <div className="header_option">
            <span className="header_optionLineOne">Hello, </span>
            <span className="header_optionLineTwo">Select your address</span>
          </div>
        </Link>

        {/*Search box*/}
        <div className="header_search">
          <input type="text" className="header_searchInput" />
          <SearchIcon className="header_searchIcon" />
        </div>

        {/*3 links*/}
        <div className="headerNav">
          {/* 1st link */}
          <Link to="/login" className="header_link">
            <div className="header_option">
              <span className="header_optionLineOne">Hello </span>
              <span className="header_optionLineTwo">Sign In</span>
            </div>
          </Link>

          {/* 2nd link */}
          <Link to="/" className="header_link">
            <div className="header_option">
              <span className="header_optionLineOne">Returns</span>
              <span className="header_optionLineTwo">& Orders</span>
            </div>
          </Link>

          {/* 3rd link */}
          <Link to="/" className="header_link">
            <div className="header_option">
              <span className="header_optionLineOne">Your</span>
              <span className="header_optionLineTwo">Prime</span>
            </div>
          </Link>

          {/*Basket icon with number*/}

          <Link to="/CheckOut" className="header_link">
            <div className="header_optionBasket">
              {/* shopping basket icon  */}
              <ShoppingBasketIcon />
              {/* Number of items in the basket  */}
              <span className="header_optionLineTwo header_basketCount">
                {state?.basket?.length}
              </span>
            </div>
          </Link>
        </div>
      </nav>
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
