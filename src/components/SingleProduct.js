import React from "react";
import { Card, Button } from "react-bootstrap";
import { CartState } from "../context/Context";
import Rating from "./Rating";

const SingleProduct = (props) => {
  const { id, name, price, image, fastDelivery, inStock, ratings } = props.prod;
  const {
    state: { cart },
    dispatch,
  } = CartState();
  console.log("cart length",cart);
  return (
    <div className="products">
      <Card>
        <Card.Img variant="top" src={image} alt={name} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <span>$ {price.split(".")[0]}</span>
            {fastDelivery ? (
              <div>Fast Delivery</div>
            ) : (
              <div>4 days Delivery</div>
            )}
            <Rating rating={ratings} />
          </Card.Subtitle>
          {cart.some((p) => p.id === id) ? (
            <Button
              onClick={() => {
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: props.prod,
                });
              }}
              variant="danger"
            >
              Remove from Cart
            </Button>
          ) : (
            <Button
              onClick={() => {
                dispatch({
                  type: "ADD_TO_CART",
                  payload: props.prod,
                });
              }}
              disabled={!inStock}
            >
              {!inStock ? "Out of Stock" : "Add to Cart"}
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleProduct;
