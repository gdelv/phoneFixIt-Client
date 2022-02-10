import React from "react";
import "./styles/Navbar.scss";
import { Link } from "react-router-dom";
import Facebook from './images/facebook.png'
import Instagram from './images/instagram.png'
import Youtube from './images/youtube.png'
import SideDrawer from './screens/SideDrawer/SideDrawer'
import Backdrop from './screens/SideDrawer/Backdrop'
import logo  from './images/hvacLogo.jpg'


class Navbar extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      open: false
    }
  }


  renderBackdrop = () => {
    if (this.state.open) {
      return (
        <>
          <Backdrop onClick={this.toggleHamburger}/>
        </>
      )
    }
  }

  renderSideDrawer = () => {
    return (
      <>
        <SideDrawer 
          show={this.state.open} 
          toggleHamburger={this.toggleHamburger} 
        />
        {this.renderBackdrop()}
      </>
    )
  }


  toggleHamburger = () => {
    this.setState({
      open: !this.state.open
    })
  }

  render() {
    return (
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          {/* Insert phoneFixIt logo here */}
          <a class="navbar-item" href="/">
            <img
              src={logo}
              className='logo'
              alt="logo"
            />
          </a>
          {/* <a
            onClick={this.toggleHamburger}
            role="button"
            class="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarNavigation"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a> */}
        </div>
        <div id="navbarNavigation" class="navbar-menu">
          <div class="navbar-start">
            <Link to="/" class="navbar-item is-size-4-fullhd is-size-6-desktop">
              Home
          </Link>
            {/* <Link to="/services" class="navbar-item is-size-4-fullhd is-size-6-desktop">
                Services
            </Link>
            <Link to="/mail-in-repair" class="navbar-item is-size-4-fullhd is-size-6-desktop">
              Mail-in Repair
          </Link>
          <Link to="/FAQ" className="navbar-item is-size-4-fullhd is-size-6-desktop">
            FAQ
          </Link>
          <Link to='/book-online' className='navbar-item is-size-4-fullhd is-size-6-desktop'>
            Book Online
          </Link>
          <Link to="/contact" className="navbar-item is-size-4-fullhd is-size-6-desktop">
            Contact
          </Link>
          <Link to="/about" className="navbar-item is-size-4-fullhd is-size-6-desktop">
            About Us
          </Link>
          <Link to="/store" className="navbar-item is-size-4-fullhd is-size-6-desktop">
            Store
          </Link>
          <Link to="/cart" className="navbar-item is-size-4-fullhd is-size-6-desktop">
            My Cart
          </Link> */}
            <div class="navbar-item has-dropdown is-hoverable">
              {/* <a class="navbar-link is-size-4-fullhd is-size-6-desktop">Social</a> */}
              <div class="navbar-dropdown">
                <a class="navbar-item" href="https://www.facebook.com/phonefixitNY" target="_blank" rel="noopener noreferrer">
                  <img alt="facebook" class="socialMedia" src={Facebook} />
                  <p>Facebook</p>
                </a>
                <a class="navbar-item" href="https://www.instagram.com/phonefixit/" target="_blank" rel="noopener noreferrer" >
                  <img alt="instagram" class="socialMedia" src={Instagram} />
                  <p>Instagram</p>
                </a>
                <a class="navbar-item" href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                  <img alt="youtube" class="socialMedia" src={Youtube} />
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


export default Navbar
