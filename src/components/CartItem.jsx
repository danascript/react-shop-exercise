import React, { Component, Fragment } from "react";

class CartItem extends Component {
  render() {
    const productInCart = this.props.data;

    return (
      <div className="col-12 product-item">
        {this.props.message || !this.props.data.productDescription ? (
          <p className="product-description text-justify empty-cart">
            {this.props.message}
          </p>
        ) : (
          <Fragment>
            <h4 className="product-name">{productInCart.productName}</h4>
            <p className="product-description text-justify">
              {productInCart.productDescription}...
            </p>
            <p className="amount">
              <button
                className="btn btn-outline-light btn-left"
                onClick={e => this.props.decreaseItems(e, productInCart.uuid)}
              >
                -
              </button>
              Amount: &nbsp; {productInCart.amount}
              <button
                className="btn btn-outline-light btn-right"
                onClick={e => this.props.increaseItems(e, productInCart.uuid)}
              >
                +
              </button>
              <button
                className="btn btn-outline-light float-right"
                onClick={e => this.props.removeFromCart(e, productInCart.uuid)}
              >
                <i className="fa fa-times" /> &nbsp; REMOVE
              </button>
            </p>
          </Fragment>
        )}
      </div>
    );
  }
}

export default CartItem;
