import React from 'react'
import './Styles/ContactForm.scss'


const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}
class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            message: ""
        };
    }

    handleSubmit = (e) => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...this.state })
        })
            .then(() => alert('Thanks for sending a message! We will respond as soon as we can.'))
            .catch(error => alert(error));
        console.log(this.state)
        e.preventDefault();
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        const { name, email, message } = this.state;
        return (
            <>
                <h1 className="title is-uppercase">Contact us</h1>
                <p className="subtitle">Located in Verma Plaza our location has ample parking</p>
                
                <div className='form-container'>
                    <form name='contact' method="POST" class="contact__form" netlify-honeypot="bot-field" data-netlify="true" onSubmit={this.handleSubmit}>
                        <input className="input is-info" type="hidden" name="form-name" value="contact" />
                        <p>
                        <input className="input is-info" type="text" name="name" value={name} onChange={this.handleChange} />
                            <label>
                                Your Name: 
                            </label>
                        </p>
                        <p>
                        <input className="input is-info" type="email" name="email" value={email} onChange={this.handleChange} />
                            <label id='id-label'>
                                Your Email: 
                            </label>
                        </p>
                        <p>
                        <textarea className="input is-info messageContainer" name="message" value={message} onChange={this.handleChange} />
                            <label id='text-label'>
                                Your Message: 
                            </label>
                        </p>
                        <p>
                            <button type="submit" className='send-button'>Send</button>
                        </p>
                    </form>
                </div>
            </>
        )
    }
}

export default ContactForm
