import React from 'react'
import './Styles/SideDrawer.scss'
import { Link } from 'react-router-dom'
import Instagram from '../../images/instagram.png'
import Youtube from '../../images/youtube.png'
import Facebook from '../../images/facebook.png'
// import SideDrawer from './screens/SideDrawer/SideDrawer'





class SideDrawer extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
        }
    }



    render() {
        let drawerClasses = 'side-drawer'
        if (this.props.show) {
            drawerClasses = 'side-drawer open'
        }
        return (
            <div className={drawerClasses}>
                <nav class="navbar" role="navigation" aria-label="main navigation">
                    <div class="navbar-brand is-column">
                        <div class="navbar-item">
                            <Link to="/">Home</Link>
                        </div>
                        <div class="navbar-item">
                            <Link to='/services'>Services</Link>
                        </div>
                        <div class="navbar-item">
                            <Link to="/mail-in-repair">Mail-in Repair</Link>
                        </div>
                        <div class="navbar-item">
                            <Link to="/FAQ">FAQ</Link>
                        </div>
                        <div class="navbar-item">
                            <Link to="/about">About Us</Link>
                        </div>
                        <div class="navbar-item">
                            <Link to="/Shop">Shop</Link>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}


export default SideDrawer