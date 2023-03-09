import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
// import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { CartState } from "../../StateProvider/Context";
import SearchBar from "./SearchBar";
import { Autocomplete, TextField } from "@mui/material";

function Header() {
  const {
    state: { products, basket, filteredData },
    dispatch,
  } = CartState();
  const [input, setInput] = useState("");
  const [cond, setCond] = useState(true);

  const onChangeHandler = (e) => {
    const searchWord = e.target.value;
    setInput(e.target.value);
    setCond(true);

    // console.log("search word", searchWord);

    const newFilter = products.filter((item) => {
      return item.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    searchWord === ""
      ? dispatch({ type: "CLEAR_FILTERED_DATA", payload: filteredData })
      : dispatch({ type: "ADD_FILTERED_DATA", payload: newFilter });
  };

  const clickHandler = (item) => {
    // console.log("item", item);

    setInput(item.name);
  };
  // console.log("input", input);
  // const onChangeHandler = (e) => {
  //   const searchItem = e.target.value;
  //   setInput(e.target.value);}

  //   // console.log("search word", setInput);
  //   const newFilter = products.filter((item) => {
  //     return item.name.toLowerCase().includes(searchItem.toLowerCase());
  //   });
  //   console.log(newFilter);

  //   input === ""
  //     ? dispatch({ type: "CLEAR_FILTERED_DATA", payload: filteredData })
  //     : dispatch({ type: "ADD_FILTERED_DATA", payload: newFilter });
  // };
  return (
    <>
      <div className="header">
        <div className="header-top">
          {/*logo on the left*/}
          <Link
            to="/"
            onClick={() => {
              setInput("");
              filteredData = [];
            }}
            className="header_logoDiv"
          >
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
            <div className="search_input">
              <input
                type="text"
                value={input}
                placeholder="Search Amazon.in"
                className="header_searchInput"
                onChange={onChangeHandler}
              />
              <SearchIcon className="header_searchIcon" />
            </div>
            {filteredData.length !== 0 && cond && (
              <div className="dropdown">
                <div className="dropdown-content">
                  {filteredData?.map((item) => {
                    return (
                      <SearchBar
                        item={item}
                        key={item.id}
                        dispatch={dispatch}
                        onClick={clickHandler}
                        setCond={setCond}
                      />
                    );
                  })}
                </div>
              </div>
            )}
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
                  {basket?.length}
                </span>
              </div>
            </Link>
          </div>
        </div>
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
      </div>
    </>
  );
}

export default Header;
