import React from 'react'
import Plus from './images/plus.png'
import Minus from './images/minus.png'
import './styles/DropDown.scss'




class DropDown extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            clicked: false
        }
    }



    onClick = () => {
        this.setState({
            clicked: !this.state.clicked
        })
    }



    render() {
        return (

            <article class="message is-large is-white" onClick={this.onClick}>
                <div class="messageContainer is-flex">
                    <div class="is-flex">
                        <div class="is-flex">
                        <figure class="plusMinus is-48x48">
                            <img src={this.state.clicked ? Minus : Plus}></img>
                        </figure>
                        </div>
                        <h2 class="is-size-3 is-size-6-mobile">{this.props.question}</h2>
                    </div>
                    <div class={this.state.clicked ? "message-body is-size-7-mobile" : "is-hidden"}>
                        <p>{this.props.answer}</p>
                    </div>
                </div>
            </article>
        )
    }
}

export default DropDown 