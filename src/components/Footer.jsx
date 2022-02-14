import React from 'react'
import './styles/Footer.scss'
import logo from './images/hvacLogo.jpg'


export const Footer = () => {
    return (
        <footer className="footer is-flex">
            <div className="columns">

                <div className="column is-one-quarter">
                    <img
                        alt='logo'
                        src={logo}
                        width="112"
                        height="28"
                    />
                    <h6 className="subtitle is-6 is-size-7-mobile">© 2022 1stCallHVACSolutions.com, Inc. All Rights Reserved</h6>
                </div>
                <div className="column is-half">
                    {/* <h4 className="title is-4 is-size-5-mobile">Address</h4>

                    <h6 className="subtitle is-6 is-size-6-mobile is-spaced">94 South Broadway Hicksville NY, 11801 USA</h6>

                    <h6 className="subtitle is-6 is-size-6-mobile is-spaced ">208 Glen St. Glen Cove, NY, 11542 USA</h6> */}
                </div>
                <div className="column is-half">
                    <h4 className="title is-4 is-size-5-mobile" style={{paddingBottom: '1em'}}>Contact</h4>
                    <h6 className="subtitle is-6 is-size-6-mobile is-spaced"><a href="tel:+18578883999">857-888-3999</a></h6>
                    <h6 className="subtitle is-6 is-size-6-mobile is-spaced"><a href="tel:+18572587608">857-258-7608</a></h6>
                </div>
            </div>
        </footer>
    )
}