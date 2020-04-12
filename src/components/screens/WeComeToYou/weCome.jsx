import React from 'react'
import Demo from './scheduler'
import './Styles/weCome.scss'
import WeComeHero from './weComeHero'





class weCome extends React.Component {
    constructor(props) { 
        super(props)



        this.state = {

        }
    }



    render () {
        return (
            <>
            <WeComeHero
            title='We Come To You'
            description='To Expand our reach and assist customers in need across Long Island, PhoneFixIt offers all kinds of repairs for iPhones, tablets, and galaxy phoens on the go. If you have a cracked screen, give us a call today for a free quote. Most repairs are done under 30 minutes. We also accept mail in repairs.'
            book='Book an appointment below'
            />
            <div class='appointmentsContainer'>
                <Demo/>
            </div>
            </>
        )
    }
}


export default weCome