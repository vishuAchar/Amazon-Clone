import React from "react";
import "./Header.css";

function SearchBar({ item, onClick, dispatch, setCond }) {
  return (
    <>
      <a
        href="#"
        onClick={() => {
          onClick(item);
          setCond(false);
          dispatch({ type: "ADD_FILTERED_DATA", payload: [item] });
        }}
      >
        {item.name}
      </a>
    </>
  );
}

export default SearchBar;
