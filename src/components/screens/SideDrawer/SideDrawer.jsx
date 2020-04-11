import React from 'react'
import './Styles/SideDrawer.scss'
import { Link } from 'react-router-dom'
import Instagram from '../../images/instagram.png'
import Youtube from '../../images/youtube.png'
import Facebook from '../../images/facebook.png'
import HomeIcon from '@material-ui/icons/Home'
import RoomServiceIcon from '@material-ui/icons/RoomService'
import BuildIcon from '@material-ui/icons/Build'
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer'
import InfoIcon from '@material-ui/icons/Info'
import StoreIcon from '@material-ui/icons/Store'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import PersonIcon from '@material-ui/icons/Person'





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
                <div class='columns'>
                    <div class='sideDrawerColumn column'>
                        <Link exact to='/' onClick={this.props.toggleHamburger}>
                        <div class='is-flex has-margin'>
                            <HomeIcon />
                            <p>Home</p>
                        </div>
                        </Link>
                        <Link exact to='/services' onClick={this.props.toggleHamburger}>
                        <div class='is-flex has-margin'>
                            <RoomServiceIcon/>
                            <p>Services</p>
                        </div>
                        </Link>
                        <Link exact to='/mail-in-repair' onClick={this.props.toggleHamburger}>
                        <div class='is-flex has-margin'>
                            <BuildIcon/>
                            <p>Mail-In Repair</p>
                        </div>
                        </Link>
                        <Link exact to='/FAQ' onClick={this.props.toggleHamburger}>
                        <div class='is-flex has-margin'>
                            <QuestionAnswerIcon/>
                            <p>FAQ</p>
                        </div>
                        </Link>
                        <Link exact to='/about' onClick={this.props.toggleHamburger}>
                        <div class='is-flex has-margin'>
                            <InfoIcon/>
                            <p>About Us</p>
                        </div>
                        </Link>
                        <Link exact to='/store' onClick={this.props.toggleHamburger}>
                        <div class='is-flex has-margin'>
                            <StoreIcon/>
                            <p>Store</p>
                        </div>
                        </Link>
                        <Link exact to='/cart' onClick={this.props.toggleHamburger}>
                        <div class='is-flex has-margin'>
                            <ShoppingCartIcon/>
                            <p>My Cart</p>
                        </div>
                        </Link>
                        <a>
                        <div class='is-flex has-margin' onClick={this.toggleSocial}>
                            <PersonIcon/>
                            <p>Social</p>
                        </div>
                        </a>
                        {this.renderSocial()}
                    </div>
                </div>
            </div>
        )
    }
}


export default SideDrawer