import React, { Component } from 'react'
import './styles/AboutStatement.scss'

export default class AboutStatement extends Component {
    render() {
        return (
            // change into hero container with picture as background and brand statement on top of picture
            <div className="columns">
                <div className="column has-text-centered about-column">
                    <p className="title is-uppercase">Learn more about our repairs</p>
                    <p className="subtitle is-capitalized">Who we are & what we do</p>
                    <p className="subttitle">We started Phonefixit in 2014 and have been providing high quality repair services for local residents in the Long Island area ever since. When possible, we use original parts in our repair. With years of experience on our back, we'll happily fix whatever you bring into our shop, We're driven by our dedication to be the best screen repair service in the area. We can't help but smile with pride everytime our customers pick up their newly repaired item - it means we've done our job right. Please get in touch with us to learn more bout our shop or stop by today!</p>
                </div>
                <div className="column">
                    <div className="tile is-ancestor">
                        <div className="tile">
                        <div className="tile is-parent">
                            <article className="tile is-child box">
                                <figure class="image is-2by1">
                                    <img src="https://i.imgur.com/KOlc4Nr.jpg"/>
                                </figure>
                            </article>
                        </div>
                        </div>
                    </div>
                </div>
                </div>
            )
    }
}
