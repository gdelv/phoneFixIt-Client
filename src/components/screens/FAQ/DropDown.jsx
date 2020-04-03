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
                        <figure class="image is-24x24">
                            <img src={this.state.clicked ? Minus : Plus}></img>
                        </figure>
                        <h2 class="is-size-2 is-size-7-mobile">{this.props.question}</h2>
                    <div class={this.state.clicked ? "message-body" : "is-hidden"}>
                        {this.props.answer}
                    </div>
                </div>
            </article>
        )
    }
}

export default DropDown 