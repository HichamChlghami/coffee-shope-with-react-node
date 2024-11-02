import React from "react";
import { connect } from "react-redux";
import { addToCart, removeFromCart } from "../redux/ActionCreater";

function RenderCart({ cart, addToCart, removeFromCart }) {
  const subTotal = cart.reduce((a, c) => a + c.price * c.qty, 0);
  const taxPrice = subTotal * 0.14;
  const totalPrice = subTotal + taxPrice;

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 mt-4">
          <h1 className="title mt-2">
            <img src="\assets\img\shopping-cart.png" alt="icon" width="03%" />{" "}
            Cart
          </h1>
          <div>
            {cart.length === 0 && (
              <div>
                <h5>Cart Is Empty</h5>
              </div>
            )}
          </div>
          {cart.map((thing) => (
            <>
              <div className="container">
                <div key={thing.product} className="row">
                  <div className="col-8">
                    <img
                      src={thing.image}
                      id="menuImage"
                      alt="item"
                      width="10%"
                    />{" "}
                    <strong>{thing.name}</strong>
                  </div>
                  <div className="col-2">
                    <button
                      onClick={() => addToCart(thing.product)}
                      style={{
                        borderRadius: "15px",
                        height: "30px",
                        width: "30px",
                      }}
                    >
                      <strong>+</strong>
                    </button>{" "}
                    {thing.qty}{" "}
                    <button
                      onClick={() => removeFromCart(thing.product, thing.qty)}
                      style={{
                        borderRadius: "15px",
                        height: "30px",
                        width: "30px",
                      }}
                    >
                      <strong>-</strong>
                    </button>
                  </div>
                  <div className="col-1 text-right">
                    ${thing.price.toFixed(2)}/each
                  </div>
                </div>
                <hr />
              </div>
            </>
          ))}
        </div>
      </div>
      {cart.length !== 0 && (
        <>
          <hr></hr>
          <div className="row">
            <div className="col-2">Subtotal</div>
            <div className="col-1 text-right">${subTotal.toFixed(2)}</div>
          </div>
          <div className="row">
            <div className="col-2">Tax Price</div>
            <div className="col-1 text-right">${taxPrice.toFixed(2)}</div>
          </div>
          <div className="row">
            <div className="col-2">Total Price</div>
            <div className="col-1 text-right">
              <strong>${totalPrice.toFixed(2)}</strong>
            </div>
          </div>
          <button className="mt-2 btn-primary" outline type="submit">
            Order
          </button>
        </>
      )}
    </div>
  );
}

function Cart(props) {
  return (
    <RenderCart
      cart={props.cart}
      addToCart={props.addToCart}
      removeFromCart={props.removeFromCart}
    />
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (product) => dispatch(addToCart(product)),
    removeFromCart: (product, qty) => dispatch(removeFromCart(product, qty)),
  };
};

export default connect(null, mapDispatchToProps)(Cart);
