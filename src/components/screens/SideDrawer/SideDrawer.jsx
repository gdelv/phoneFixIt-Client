import React from 'react'
import './Styles/SideDrawer.scss'
import { Link } from 'react-router-dom'
import Instagram from '../../images/instagram.png'
import Youtube from '../../images/youtube.png'
import Facebook from '../../images/facebook.png'
import HomeIcon from '@material-ui/icons/Home'
// import PersonIcon from '@material-ui/icons/Person'
import RoomServiceIcon from '@material-ui/icons/RoomService'
import BuildIcon from '@material-ui/icons/Build'
// import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer'
import CollectionsIcon from '@mui/icons-material/Collections';
// import StoreIcon from '@material-ui/icons/Store'
// import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
// import EventIcon from '@material-ui/icons/Event'





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
                <div className="container is-flex is-column">
                    <a href="https://www.instagram.com/phonefixit/"><img alt='instagram' src={Instagram} /></a>
                    <a href="href=https://www.youtube.com"><img alt='youtube' src={Youtube} href="https://www.youtube.com" /></a>
                    <a href='https://www.facebook.com/phonefixitNY'><img alt='facebook' src={Facebook} /></a>
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
                <div className='columns'>
                    <div className='sideDrawerColumn column'>
                        <Link exact="true" to='/' onClick={this.props.toggleHamburger}>
                        <div className='is-flex has-margin'>
                            <HomeIcon />
                            <p>Home</p>
                        </div>
                        </Link>
                        <Link exact="true" to='/services' onClick={this.props.toggleHamburger}>
                        <div className='is-flex has-margin'>
                            <RoomServiceIcon/>
                            <p>Services</p>
                        </div>
                        </Link>
                        <Link exact="true" to='/contact' onClick={this.props.toggleHamburger}>
                        <div className='is-flex has-margin'>
                            <BuildIcon/>
                            <p>Contact</p>
                        </div>
                        <div style={{display: 'flex', width:'100%', alignItems:'center', flexDirection:'column'}}>
            <h6 className="subtitle is-6 is-size-6-mobile is-spaced"><a href="tel:+18578883999">857-888-3999</a></h6>
            <h6 className="subtitle is-6 is-size-6-mobile is-spaced"><a href="tel:+18572587608">857-258-7608</a></h6>
          </div>
                        </Link>
                        {/* <Link exact to='/mail-in-repair' onClick={this.props.toggleHamburger}>
                        <div className='is-flex has-margin'>
                            <BuildIcon/>
                            <p>Mail-In Repair</p>
                        </div>
                        </Link>
                        <Link exact to='/FAQ' onClick={this.props.toggleHamburger}>
                        <div className='is-flex has-margin'>
                            <QuestionAnswerIcon/>
                            <p>FAQ</p>
                        </div>
                        </Link>

                        <Link exact to='/book-online' onClick={this.props.toggleHamburger}>
                            <div className='is-flex has-margin'>
                                <EventIcon/>
                                <p>Book Online</p>
                            </div>
                        </Link> */}

                        <Link exact to='/gallery' onClick={this.props.toggleHamburger}>
                        <div className='is-flex has-margin'>
                            <CollectionsIcon/>
                            <p>Gallery</p>
                        </div>
                        </Link>
                        {/* <Link exact to='/store' onClick={this.props.toggleHamburger}>
                        <div className='is-flex has-margin'>
                            <StoreIcon/>
                            <p>Store</p>
                        </div>
                        </Link>
                        <Link exact to='/cart' onClick={this.props.toggleHamburger}>
                        <div className='is-flex has-margin'>
                            <ShoppingCartIcon/>
                            <p>My Cart</p>
                        </div>
                        </Link>
                        <a>
                        <div className='is-flex has-margin' onClick={this.toggleSocial}>
                            <PersonIcon/>
                            <p>Social</p>
                        </div>
                        </a> */}
                        {this.renderSocial()}
                    </div>
                </div>
            </div>
        )
    }
}


export default SideDrawer