import React from 'react'

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
            .then(() => alert('Thanks for sending a message! I will respond as soon as I can.'))
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
            <div className='form-container'>
                <form name='contact' method="POST" class="contact__form" netlify-honeypot="bot-field" data-netlify="true" onSubmit={this.handleSubmit}>
                    <input type="hidden" name="form-name" value="contact" />
                    <p>
                    <input type="text" name="name" value={name} onChange={this.handleChange} />
                        <label>
                            Your Name: 
                        </label>
                    </p>
                    <p>
                    <input type="email" name="email" value={email} onChange={this.handleChange} />
                        <label id='id-label'>
                            Your Email: 
                        </label>
                    </p>
                    <p>
                    <textarea name="message" value={message} onChange={this.handleChange} />
                        <label id='text-label'>
                            Message: 
                        </label>
                    </p>
                    <p>
                        <button type="submit" className='send-button'>Send</button>
                    </p>
                </form>
            </div>
        )
    }
}

export default ContactForm
