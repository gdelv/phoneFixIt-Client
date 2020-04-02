import React, { Component } from "react";
import './Styles/HomeSubscribe.scss'

export default class HomeSubscribe extends Component {
render() {
    return (
        <div class="container">
            <div class="notification">
                <p class="title is-4 has-text-centered">Subscribe</p>
                <div class="control has-icons-left has-icons-right">
                    <input class="input is-medium sub-input" type="email" placeholder="Name"/>
                    <span class="icon is-medium is-left">
                        <i class="fas fa-user"></i>
                    </span>
                    <span class="icon is-medium is-right">
                        <i class="fas fa-check"></i>
                    </span>
                </div>
                <div class="control has-icons-left has-icons-right">
                    <input class="input is-medium sub-input" type="email" placeholder="Email"/>
                    <span class="icon is-medium is-left">
                        <i class="fas fa-envelope"></i>
                    </span>
                    <span class="icon is-medium is-right">
                        <i class="fas fa-check"></i>
                    </span>
                </div>
                <button className="button is-dark sub-button">Submit</button>
            </div>
        </div>
            );
        }
}
