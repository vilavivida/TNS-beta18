import React from "react";
import Image from "react-bootstrap/Image";

function SearchCard() {
  return (
    <div class="container">
      <div class="row height d-flex justify-content-center align-items-center">
        <div class="col-md-8">
          <div class="search">
            <i class="fa fa-search"></i>
            <input
              type="text"
              class="form-control"
              placeholder="Have a question? Ask Now"
            ></input>
            <button class="btn btn-primary">Search</button>
            <p class="text-right text-muted">
              Unsure about your search? Take a free quiz with us!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchCard;
