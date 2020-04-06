import React, { Component } from "react";
import './Styles/HomeSubscribe.scss'

export default class HomeSubscribe extends Component {
render() {
    return (
        <div className="container">
            <div className="notification">
                <p className="title is-4 has-text-centered">Subscribe</p>
                <div className="control has-icons-left has-icons-right">
                    <input className="input is-medium sub-input" type="email" placeholder="Name"/>
                    <span className="icon is-medium is-left">
                        <i className="fas fa-user"></i>
                    </span>
                    <span className="icon is-medium is-right">
                        <i className="fas fa-check"></i>
                    </span>
                </div>
                <div className="control has-icons-left has-icons-right">
                    <input className="input is-medium sub-input" type="email" placeholder="Email"/>
                    <span className="icon is-medium is-left">
                        <i className="fas fa-envelope"></i>
                    </span>
                    <span className="icon is-medium is-right">
                        <i className="fas fa-check"></i>
                    </span>
                </div>
                <button className="button is-dark sub-button">Submit</button>
            </div>
        </div>
            );
        }
}
