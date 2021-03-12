import React from "react";
import "./style.css";
import { InputText, FormBtn } from "../Form";

function SearchBar() {
  return (
    <div>
      <InputText />
      <FormBtn>Search</FormBtn>
    </div>
  );
}

export default SearchBar;
