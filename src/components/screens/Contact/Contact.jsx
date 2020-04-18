import React, { Component } from 'react'
import ContactForm from './ContactForm'

export default class Contact extends Component {
    render() {
        return (
            <div className='columns'>
                <div className="column">
                    <figure className="image is-4by5">
                        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.freepik.com%2Ffree-photo%2Fhand-holding-a-smartphone-with-blank-screen_1232-1091.jpg&f=1&nofb=1" alt="contact"/>
                    </figure>
                </div>
                <div className="column">
                    <ContactForm/>
                </div>
            </div>
        )
    }
}
