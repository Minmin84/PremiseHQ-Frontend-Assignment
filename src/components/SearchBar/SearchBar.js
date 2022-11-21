import React from "react";
import "./SearchBar.css";

// SearchBar enables search card name
// Note: searching ignores case sensitivity
const SearchBar = ({ className, placeholder, onChangeHandler }) => (
  <input
    className="search-bar"
    type="search"
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);

export default SearchBar;
