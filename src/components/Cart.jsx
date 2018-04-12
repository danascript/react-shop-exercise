import React, { Component } from "react";
import CartItem from "./CartItem";

class Cart extends Component {
  render() {
    return (
      <div className="product-wrapper">
        {Object.keys(this.props.cartItems).length === 0 ? (
          <CartItem message={"The cart is empty!"} />
        ) : (
          Object.keys(this.props.cartItems).map(uuid => (
            <CartItem
              key={`cat-${uuid}`}
              data={this.props.cartItems[uuid]}
              removeFromCart={this.props.removeFromCart}
              increaseItems={this.props.increaseItems}
              decreaseItems={this.props.decreaseItems}
            />
          ))
        )}
      </div>
    );
  }
}

export default Cart;
