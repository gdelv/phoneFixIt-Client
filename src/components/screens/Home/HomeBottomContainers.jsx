import React from 'react'
import './Styles/HomeBottomContainers.scss'



const HomeBottomContainers = (props) => {
    return (
        <div className='bottomParentContainer'>
            <div className='greenContainer'>
                <div className='greenTitle'>
                    <h3>WE DO IT RIGHT</h3>
                </div>
                <div className='greenParagraph'>
                    <p>When you decide to work with us, you get so much more than your average repair shop.</p>
                </div>
                <div className='greenParagraph'>
                    <p>Everything we do at phonefixit.com is geared towards providing our customers with a unique and one of a kind repair experience</p>
                </div>
            </div>
            <div className='whiteContainer'>
                    <h4>LIVE PHONE SUPPORT</h4>
                    <img src='https://i.imgur.com/1A7dLyV.jpg'/>
                    <div>
                        <p>Need technical advice or assistance but cant make it to our location? Give us a call, and speak with one of our expert technicians.</p>
                    </div>
                    <div>
                        <p>We're happy to provide free advice and support whenever needed. We've been at it long enough to know how important it is to provide top notch work and real customer service</p>
                    </div>
                    <div>
                        <p>When you require help or guidance with your device, trust the real pros. Contact us today.</p>
                    </div>
                    <a>Get in Touch</a>
            </div>
        </div>
    )
}

export default HomeBottomContainers