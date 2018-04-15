import React, { Component, Fragment } from "react";
import Products from "./Products";
import Cart from "./Cart";
import Navbar from "./Navbar";

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
    cartItems: {},
    user: {
      isLoggedIn: false
    }
  };

  addToCart = (e, uuid) => {
    e.preventDefault();

    // assigning a new value, not referencing, since then the description cuts the original too.
    if (!this.state.cartItems[uuid]) {
      this.added = Object.assign({}, this.state.productItems[uuid]);
    }

    // want to have a shorter description for the cart items
    const description = this.state.productItems[uuid].productDescription;
    const shortDescription = description
      .split(" ")
      .splice(0, 18)
      .join(" ");

    this.setState(state => {
      if (!state.cartItems[uuid]) {
        state.cartItems[uuid] = this.added;
      }
      state.cartItems[uuid].amount++;
      state.cartItems[uuid].productDescription = shortDescription;

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

    // blocking from having amount 0 in the cart
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
      // resetting the amount value, so when the user adds the item again, the amount will start from 1
      state.cartItems[uuid].amount = 0;
      delete state.cartItems[uuid];
      return state;
    });
  };

  render() {
    return (
      <Fragment>
        <Navbar userLoggedIn={this.state.user.isLoggedIn} />
        <div className="container">
          <h2 className="main-heading">Shoppie</h2>
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
      </Fragment>
    );
  }
}

export default App;
