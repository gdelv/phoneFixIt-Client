import React from 'react'
import './Styles/SideDrawer.scss'
import { Link } from 'react-router-dom'
import Instagram from '../../images/instagram.png'
import Youtube from '../../images/youtube.png'
import Facebook from '../../images/facebook.png'
import FAQ from '../../images/FAQ.png'
import Shop from '../../images/shop.png'
import Social from '../../images/social.png'
import Home from '../../images/home.png'
import aboutUs from '../../images/aboutUs.png'
import Services from '../../images/services.png'
import Repair from '../../images/hammer.png'





class SideDrawer extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            socialOpen: false
        }
    }


    toggleSocial = () => {
        this.setState({
            socialOpen: !this.state.socialOpen
        })
    }

    renderSocial = () => {
        if (this.state.socialOpen) {
            return (
                <div class="container is-flex is-column">
                    <a href="https://www.instagram.com/phonefixit/"><img src={Instagram} /></a>
                    <a href="href=https://www.youtube.com"><img src={Youtube} href="https://www.youtube.com" /></a>
                    <a href='https://www.facebook.com/phonefixitNY'><img src={Facebook} /></a>
                </div>
            )
        }
    }
    render() {
        let drawerClasses = 'side-drawer'
        if (this.props.show) {
            drawerClasses = 'side-drawer open'
        }
        return (
            <div className={drawerClasses}>
                <div>
                    <div class="container is-flex is-column">
                        <Link to="/">
                            <div class='has-margin'>
                                <div class='is-flex has-space-between'>
                                    <img src={Home} />
                                    <a class='is-size-7'>Home</a>
                                </div>
                            </div>
                        </Link>
                        <Link to="/services">
                            <div class='has-margin'>
                                <div class='is-flex has-space-between'>
                                    <img src={Services} />
                                    <a class='is-size-7'>Services</a>
                                </div>
                            </div>
                        </Link>
                        <Link to="/mail-in-repair">
                            <div class='has-margin'>
                                <div class='is-flex has-space-between'>
                                    <img src={Repair} />
                                    <a class='is-size-7'>Mail In-Repair</a>
                                </div>
                            </div>
                        </Link>
                        <Link to="/FAQ">
                            <div class='has-margin'>
                                <div class='is-flex has-space-between'>
                                    <img src={FAQ} />
                                    <a class='is-size-7'>FAQ</a>
                                </div>
                            </div>
                        </Link>
                        <Link to="/about">
                            <div class='has-margin'>
                                <div class='is-flex has-space-between'>
                                    <img src={aboutUs} />
                                    <a class='is-size-7'>About Us</a>
                                </div>
                            </div>
                        </Link>
                        <Link to="/shop">
                            <div class='has-margin'>
                                <div class='is-flex has-space-between'>
                                    <img src={Shop} />
                                    <a class='is-size-7'>Shop</a>
                                </div>
                            </div>
                        </Link>
                        <div class='has-margin' onClick={this.toggleSocial}>
                            <div class='is-flex has-space-between'>
                                <img src={Social} />
                                <a class="has-margin is-size-7">Social</a>
                            </div>
                        </div>
                        {this.renderSocial()}
                    </div>
                </div>
            </div>
        )
    }
}


export default SideDrawer