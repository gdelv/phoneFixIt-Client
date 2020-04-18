import React from 'react'
import './styles/Footer.scss'
import logo from './images/logo.jpg'


export const Footer = () => {
    return (
        <footer class="footer is-flex">
            <div class="columns">

                <div class="column is-one-quarter">
                    <img
                        src={logo}
                        width="112"
                        height="28"
                    />
                    <h6 class="subtitle is-6 is-size-7-mobile">© 2019 Phonefixit.com, Inc. All Rights Reserved</h6>
                </div>
                <div class="column is-half">
                    <h4 class="title is-4 is-size-5-mobile">Address</h4>

                    <h6 class="subtitle is-6 is-size-6-mobile is-spaced">94 South Broadway Hicksville NY, 11801 USA</h6>

                    <h6 class="subtitle is-6 is-size-6-mobile is-spaced ">208 Glen St. Glen Cove, NY, 11542 USA</h6>
                </div>
                <div class="column is-one-third">
                    <h4 class="title is-4 is-size-5-mobile ">Contact</h4>
                    <h6 class="subtitle is-6 is-size-6-mobile is-spaced">Hicksville, NY (516)-513-0800</h6>
                    <h6 class="subtitle is-6 is-size-6-mobile is-spaced">Glen Cove, NY (516)-801-6320</h6>
                </div>
            </div>
        </footer>
    )
}