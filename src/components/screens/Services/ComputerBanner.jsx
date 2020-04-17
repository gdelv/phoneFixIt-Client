import React from 'react'

export default function ComputerBanner(props) {
    return (
        <section className="hero is-info is-medium">
            <div className="hero-body">
                <div className="container">
                    <span className="icon is-large computer-icon">
                        <i class="fas fa-4x fa-trophy" aria-hidden="true"></i>
                    </span>
                    <p className="title is-spaced is-uppercase has-text-white is-1 has-text-centered">{props.title}</p>
                    <p className="subtitle has-text-white has-text-centered is-4">{props.info}</p>
                </div>
            </div>
        </section>
    )
}
