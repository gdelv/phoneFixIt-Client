import React from "react";
import "./styles/Navbar.scss";
import { Link } from "react-router-dom";
import Facebook from './images/facebook.png'
import Instagram from './images/instagram.png'
import Youtube from './images/youtube.png'

const Navbar = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        {/* Insert phoneFixIt logo here */}
        <a className="navbar-item" href="/">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            width="112"
            height="28"
            alt='logo'
          />
        </a>

        <a
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
        <div className="navbar-start">
          {/* <a className="navbar-item">Home</a> */}
          <Link to="/" className="navbar-item">
            Home
          </Link>
          <Link to="/services" className="navbar-item">
            <div className="navbar-item has-dropdown is-hoverable">
              {/* <a className="navbar-link">Services</a> */}
              Services
              <div className="navbar-dropdown">
                <Link to="/services/phonerepair" className="navbar-item">
                  Phone Repair
                </Link>
                <Link to="/services/tabletrepair" className="navbar-item">
                  Tablet Repair
                </Link>
                <Link to="/services/computerrepair" className="navbar-item">
                  Computer & Laptop Repair
                </Link>
                <Link to="/services/iphonerepair" className="navbar-item">
                  Apple iPhone Repair
                </Link>
                <Link to="/services/samsungrepair" className="navbar-item">
                  Samsung Repair
                </Link>
                <Link to="/services/ipadrepair" className="navbar-item">
                  Apple iPad Repair
                </Link>
              </div>
            </div>
          </Link>
          <Link to="/mail-in-repair" className="navbar-item">
            Mail-in Repair
          </Link>
          <Link to="/FAQ" className="navbar-item">
            FAQ
          </Link>
          <Link to="/about" className="navbar-item">
            About Us
          </Link>
          <Link to="/store" className="navbar-item">
            Store
          </Link>
          <Link to="/cart" className="navbar-item">
            My Cart
          </Link>
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">Social</a>
              <div class="navbar-dropdown">
              <a class="navbar-item" href="https://www.facebook.com/phonefixitNY" target="_blank" rel="noopener noreferrer">
                    <img class="socialMedia" src={Facebook}/>
                    <p>Facebook</p>
                </a>
                <a class="navbar-item" href="https://www.instagram.com/phonefixit/" target="_blank" rel="noopener noreferrer" >
                  <img class="socialMedia" src={Instagram}/>
                  <p>Instagram</p>
                    
                </a>
                <a class="navbar-item" href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                  <img class="socialMedia" src={Youtube}/>
                  <p>Youtube</p>   
                </a>
              </div>
            </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
