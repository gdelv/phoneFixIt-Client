import React from 'react'
import './styles/Footer.scss'


export const Footer = () => {
    return (
        <footer class="footer is-flex">
            <div class="columns">
                <div class="column">
                    <img
                        src="https://bulma.io/images/bulma-logo.png"
                        width="112"
                        height="28"
                    />
                    <h6 class="subtitle is-6 is-size-7-mobile">© 2019 Phonefixit.com, Inc. All Rights Reserved</h6>
                </div>
                <div class="column">
                    <h4 class="title is-4 is-size-7-mobile">Address</h4>

                    <h6 class="subtitle is-6 is-size-7-mobile is-spaced">94 South Broadway</h6>
                    <h6 class="subtitle is-6 is-size-7-mobile is-spaced">Hicksville NY, 11801 USA</h6>

                    <h6 class="subtitle is-6 is-size-7-mobile is-spaced ">208 Glen St.</h6>
                    <h6 class="subtitle is-6 is-size-7-mobile is-spaced">Glen Cove, NY, 11542 USA</h6>
                </div>
                <div class="column">
                    <h4 class="title is-4 is-size-7-mobile ">Contact</h4>
                    <h6 class="subtitle is-6 is-size-7-mobile is-spaced">Hicksville, NY</h6>
                    <h6 class="subtitle is-6 is-size-7-mobile is-spaced">(516)-513-0800</h6>
                    <h6 class="subtitle is-6 is-size-7-mobile is-spaced">Glen Cove, NY</h6>
                    <h6 class="subtitle is-6 is-size-7-mobile is-spaced">(516)-801-6320</h6>
                </div>
                {/* <div class="column">
                <h4 class="title is-4 is-size-7-mobile">Social</h4>
                <a class='subtitle' href="https://www.facebook.com/phonefixitNY">
                    <img src={Facebook}/>
                </a>
                <a href="https://www.instagram.com/phonefixit/">
                    <img src={Instagram}/>
                </a>
                <a href="https://www.youtube.com">
                    <img src={Youtube}/>
                </a> */}
                {/* </div> */}
            </div>
        </footer>
    )
}