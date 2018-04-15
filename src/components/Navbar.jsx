import React, { Component } from "react";

class Navbar extends Component {
  render() {
    // eslint-disable-next-line
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <a className="navbar-brand" href="#">
          Shoppie
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navigation"
          aria-controls="navigation"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navigation">
          <ul className="navbar-nav ml-auto mr-1">
            <li className="nav-item dropdown">
              {!this.props.userLoggedIn ? (
                <a className="nav-link" href="#">
                  Log in
                </a>
              ) : (
                // eslint-disable-next-line
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  My Account
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <a className="dropdown-item" href="/profile">
                      Profile
                    </a>
                    <a className="dropdown-item" href="/">
                      Logout
                    </a>
                  </div>
                </a>
              )}
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
