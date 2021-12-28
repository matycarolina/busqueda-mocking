import React, { useState } from "react";
import PropTypes from "prop-types";

export const Search = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <form>
      <h2>Search Emojis</h2>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </form>
  );
};

Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
