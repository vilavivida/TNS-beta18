import React from "react";
import Image from "react-bootstrap/Image";

// // use search icon
// import IconButton from "@material-ui/core/IconButton";
// import InputAdornment from "@material-ui/core/InputAdornment";
// import SearchIcon from "@material-ui/icons/Search";

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
              placeholder="City, State"
            ></input>
            <button type="button" class="btn btn-default">
              <span
                class="glyphicon glyphicon-search"
                aria-hidden="true"
              ></span>
            </button>
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
