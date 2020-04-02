import React, { Component } from "react";
import './Styles/HomeFeatures.scss'
import { featuresHome } from "../../../data";

export default class HomeRepairKnowledge extends Component {
render() {
    return (
            <div class="tile is-ancestor">
                {featuresHome.map(feature => {
                    return (
                        <div class="tile is-parent">
                <article class="tile is-child box">
                    <p class="title is-uppercase is-3">{feature.title}</p>
                    <p class="subtitle is-capitalized is-5">{feature.subtitle}</p>
                    <div class="content">
                    <p>
                    {feature.description}
                    </p>
                    <button className="button is-capitalized is-dark is-rounded">Get in touch</button>
                    </div>
                    <div className="card">
                    <div className="card-image">
                        <figure className="image">
                            <img src={feature.img} alt="features card"/>
                        </figure>
                    </div>
                </div>
                </article>
                </div>
                    )
                })
                }
            </div>
        );
    }
}
