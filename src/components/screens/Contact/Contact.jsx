import React, { Component } from 'react'
import ContactForm from './ContactForm'

export default class Contact extends Component {
    componentDidMount() {
        window.scroll(0,0);
    }
    render() {
        return (
            <div className='columns' style={{justifyContent: 'center', margin: '0 auto'}}>
                <div className="column is-one-quarter">
                    <ContactForm/>
                </div>
                <div className="column is-half">
                    <figure className="image is-5by4">
                        <img 
                            src="https://static.vecteezy.com/system/resources/previews/001/263/872/large_2x/contact-us-customer-support-concept-vector.jpg" 
                            alt="contact"
                        />
                    </figure>
                </div>
            </div>
        )
    }
}
