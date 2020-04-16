import React from 'react'

export default function DetailBanner(props) {
    return (
        <section className="hero is-medium has-background-info about-hero-image">
        <div className="hero-body">
        <div className="container has-text-centered">
            <p className="title is-uppercase has-text-white is-size-1">{props.title}</p>
            <p className="title is-uppercase has-text-black is-size-3">{props.subtitle}</p>
            <p className="subtitle is-size-4 has-text-white">{props.description}</p>
        </div>
        </div>
    </section>
    )
}
