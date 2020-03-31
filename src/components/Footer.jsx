import React from 'react'
import './styles/Footer.scss'

export const Footer = () => {
    return (
        <footer class="footer is-flex">
            {/* <div class="content has-text-centered"> */}
            <div>
                <img
                    src="https://bulma.io/images/bulma-logo.png"
                    width="112"
                    height="28"
                />
                <h2 class="subtitle">© 2019 Phonefixit.com, Inc. All Rights Reserved</h2>
            </div>
            <div>
                <h3 class="title is-4">Address</h3>
                <h3 class="subtitle">94 South Broadway Hicksville NY, 11801 USA</h3>
                <h3 class="subtitle">208 Glen St. Glen Cove, NY, 11542 USA</h3>
            </div>
            <div>
                <h3 class="title is-4">Contact</h3>
                <h3 class="subtitle">Hicksville, NY (516)-513-0800</h3>
                <h3 class="subtitle">Glen Cove, NY (516)-801-6320</h3>
            </div>
            <div>
                <h3 class="title is-4">Social</h3>
                <div></div>
            </div>
            {/* </div> */}
        </footer>
    )
}