import React from 'react'
import './Styles/HomeLinks.scss'



const HomeLinks = (props) => {
    return ( 
    <div className='linksContainer'>
        <div>
            <img src='https://i.imgur.com/7DTNqsI.jpg'/>
            <p>PHONE REPAIR</p>
        </div>
        <div>
            <img src='https://i.imgur.com/7EZXpnc.jpg'/>
            <p>TABLET REPAIR</p>
        </div>
        <div>
            <img src='https://i.imgur.com/KOlc4Nr.jpg'/>
            <p>COMPUTER REPAIR</p>
        </div>
    </div>
    )
}

export default HomeLinks