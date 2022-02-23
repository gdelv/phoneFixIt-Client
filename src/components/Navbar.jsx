import React from "react";
import "./styles/Navbar.scss";
import { Link } from "react-router-dom";
import Facebook from "./images/facebook.png";
import Instagram from "./images/instagram.png";
import Youtube from "./images/youtube.png";
import SideDrawer from "./screens/SideDrawer/SideDrawer";
import Backdrop from "./screens/SideDrawer/Backdrop";
import logo from "./images/hvacLogo.jpg";

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  renderBackdrop = () => {
    if (this.state.open) {
      return (
        <>
          <Backdrop onClick={this.toggleHamburger} />
        </>
      );
    }
  };

  renderSideDrawer = () => {
    return (
      <>
        <SideDrawer
          show={this.state.open}
          toggleHamburger={this.toggleHamburger}
        />
        {this.renderBackdrop()}
      </>
    );
  };

  toggleHamburger = () => {
    this.setState({
      open: !this.state.open,
    });
  };

  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          {/* Insert phoneFixIt logo here */}
          {/* <a className="navbar-item" href="/"> */}
          <Link to="/" className="navbar-item">
            <img src={logo} className="logo" alt="logo" />
          </Link>
          {/* </a> */}
          {/* <div style={{display: 'flex', width:'100%', border:'1px solid red', flexDirection:'column'}}>
            <h6 className="subtitle is-6 is-size-6-mobile is-spaced"><a href="tel:+18578883999">857-888-3999</a></h6>
            <h6 className="subtitle is-6 is-size-6-mobile is-spaced"><a href="tel:+18572587608">857-258-7608</a></h6>
          </div> */}
          <a
            onClick={this.toggleHamburger}
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarNavigation"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div id="navbarNavigation" className="navbar-menu">
          <div
            style={{
              display: "flex",
              width: "100%",
              flexDirection: "column",
              paddingRight: "1em",
            }}
          >
            <h6 className="subtitle is-6 is-size-6-mobile is-spaced">
              <a href="tel:+18578883999">857-888-3999</a>
            </h6>
            <h6 className="subtitle is-6 is-size-6-mobile is-spaced">
              <a href="tel:+18572587608">857-258-7608</a>
            </h6>
          </div>
          <div className="navbar-start">
            <Link
              to="/"
              className="navbar-item is-size-4-fullhd is-size-6-desktop"
            >
              Home
            </Link>
            <Link
              to="/services"
              className="navbar-item is-size-4-fullhd is-size-6-desktop"
            >
              Services
            </Link>
            {/* <Link to="/mail-in-repair" className="navbar-item is-size-4-fullhd is-size-6-desktop">
              Mail-in Repair
          </Link>
          <Link to="/FAQ" classNameName="navbar-item is-size-4-fullhd is-size-6-desktop">
            FAQ
          </Link>
          <Link to='/book-online' classNameName='navbar-item is-size-4-fullhd is-size-6-desktop'>
            Book Online
          </Link> */}
            <Link
              to="/contact"
              className="navbar-item is-size-4-fullhd is-size-6-desktop"
            >
              Contact
            </Link>
            <Link
              to="/gallery"
              className="navbar-item is-size-4-fullhd is-size-6-desktop"
            >
              Gallery
            </Link>
            {/* <Link to="/store" classNameName="navbar-item is-size-4-fullhd is-size-6-desktop">
            Store
          </Link>
          <Link to="/cart" classNameName="navbar-item is-size-4-fullhd is-size-6-desktop">
            My Cart
          </Link> */}
            <div className="navbar-item has-dropdown is-hoverable">
              {/* <a className="navbar-link is-size-4-fullhd is-size-6-desktop">Social</a> */}
              <div className="navbar-dropdown">
                <a
                  className="navbar-item"
                  href="https://www.facebook.com/phonefixitNY"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img alt="facebook" className="socialMedia" src={Facebook} />
                  <p>Facebook</p>
                </a>
                <a
                  className="navbar-item"
                  href="https://www.instagram.com/phonefixit/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    alt="instagram"
                    className="socialMedia"
                    src={Instagram}
                  />
                  <p>Instagram</p>
                </a>
                <a
                  className="navbar-item"
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img alt="youtube" className="socialMedia" src={Youtube} />
                  <p>Youtube</p>
                </a>
              </div>
            </div>
          </div>
        </div>
        {this.renderSideDrawer()}
      </nav>
    );
  }
}

export default Navbar;
