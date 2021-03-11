import React from "react";
import "./style.css";

function Header() {
  return (
    <div>
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">Google Books Search</h1>
          <p class="lead">
            Search and save your favorite books using Google Book API!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
