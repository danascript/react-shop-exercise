import React, { Component } from "react";
import Products from "./Products";
import Cart from "./Cart";

class App extends Component {
  // default state
  state = {
    productItems: {
      "1": {
        uuid: "1",
        productName: "Cat",
        productDescription: `Friends are not food claw drapes. Sleep nap purr when being pet so
        cough hairball on conveniently placed pants sit and stare. My left
        donut is missing, as is my right cat is love, cat is life. Poop in
        litter box, scratch the walls scratch me there, elevator butt paw at
        your fat belly, yet show belly but chill on the couch table.`,
        inCart: false,
        amount: 0
      },
      "2": {
        uuid: "2",
        productName: "Kitty",
        productDescription: `Then cats take over the world. Chew the plant who's the baby woops poop hanging from butt must get rid run run around house drag poop on floor maybe it comes off woops left brown marks on floor human slave clean lick butt now for disappear for four days and return home with an expensive injury; bite the vet.`,
        inCart: false,
        amount: 0
      },
      "3": {
        uuid: "3",
        productName: "Liiiiiittle Cat",
        productDescription: `Meow to be let out stare at wall turn and meow stare at wall some more meow again continue staring yet i'm bored inside, let me out i'm lonely outside, let me in i can't make up my mind whether to go in or out, guess i'll just stand partway in and partway out, contemplating the universe for half an hour how dare you nudge me with your foot?!?!`,
        inCart: false,
        amount: 0
      }
    },
    cartItems: {}
  };

  addToCart = (e, uuid) => {
    e.preventDefault();
    const added = this.state.productItems[uuid];
    this.setState(state => {
      state.cartItems[uuid] = added;
      state.cartItems[uuid].amount++;
      return state;
    });
  };

  increaseItems = (e, uuid) => {
    e.preventDefault();
    this.setState(state => {
      state.cartItems[uuid].amount++;
      return state;
    });
  };

  decreaseItems = (e, uuid) => {
    e.preventDefault();

    if (this.state.cartItems[uuid].amount === 1) {
      return;
    }

    this.setState(state => {
      state.cartItems[uuid].amount--;
      return state;
    });
  };

  removeFromCart = (e, uuid) => {
    e.preventDefault();
    this.setState(state => {
      state.cartItems[uuid].amount = 0;
      delete state.cartItems[uuid];
      return state;
    });
  };

  render() {
    return (
      <div className="container">
        <h2 className="main-heading">Shop</h2>
        <div className="container d-flex ">
          <div className="row justify-content-around">
            <div className="col-5 parent-component">
              <h3 className="sub-heading">Products</h3>

              <Products
                productItems={this.state.productItems}
                addToCart={this.addToCart}
              />
            </div>
            <div className="col-5 parent-component">
              <h3 className="sub-heading">Cart</h3>
              <Cart
                cartItems={this.state.cartItems}
                removeFromCart={this.removeFromCart}
                increaseItems={this.increaseItems}
                decreaseItems={this.decreaseItems}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
