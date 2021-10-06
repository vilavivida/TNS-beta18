import React from "react";
import { Card } from "react-bootstrap";

function SearchCard() {
  return (
    <>
      <Card
        style={{ width: "80rem" }}
        class="col d-flex justify-content-center"
      >
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <Card.Img
          variant="bottom"
          src="https://images.unsplash.com/photo-1557335200-a65f7f032602?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2079&q=80"
        />
      </Card>
    </>
  );
}

export default SearchCard;
