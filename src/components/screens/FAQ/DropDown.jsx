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
            <article class="message is-white" onClick={this.onClick}>
                <div class="message-header">
                    <img src={this.state.clicked ? Minus : Plus}></img>
                    <p>{this.props.question}</p>
                </div>
                <div class={this.state.clicked ? "message-body" : "displayNone"}>
                    {this.props.answer}
                </div>
            </article>
        )
    }
}

export default DropDown 