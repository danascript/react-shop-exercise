import React, { Component } from "react";

class ProductItem extends Component {
  render() {
    const product = this.props.data;

    return (
      <div className="col-12 product-item">
        <h4 className="product-name">{product.productName}</h4>
        <p className="product-description text-justify">
          {product.productDescription}
        </p>
        <div className="container">
          <div className="row d-flex">
            <button
              className="btn btn-outline-light ml-auto"
              onClick={e => this.props.addToCart(e, product.uuid)}
            >
              <i className="fa fa-plus" /> &nbsp; ADD ME
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductItem;
