import React, { Component } from "react";
import ProductItem from "./ProductItem";

class Products extends Component {
  render() {
    return (
      <div className="product-wrapper">
        {Object.keys(this.props.productItems).map(uuid => (
          <ProductItem
            key={`cat-${uuid}`}
            data={this.props.productItems[uuid]}
            addToCart={this.props.addToCart}
          />
        ))}
      </div>
    );
  }
}
export default Products;
