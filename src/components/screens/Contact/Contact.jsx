import React, { Component } from 'react'
import ContactForm from './ContactForm'

export default class Contact extends Component {
    render() {
        return (
            <div className='columns' style={{justifyContent: 'center', margin: '0 auto'}}>
                <div className="column is-one-quarter">
                    <ContactForm/>
                </div>
                <div className="column is-half">
                    <figure className="image is-5by4">
                        <img 
                            src="https://www.clearswift.com/sites/default/files/2021-09/hs-contact-us-figure.png" 
                            alt="contact"
                        />
                    </figure>
                </div>
            </div>
        )
    }
}
