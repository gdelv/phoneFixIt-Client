import React from 'react'

export default function SingleServiceTop(props) {
    return (
        <div className="tile is-ancestor">
            <div className="tile is-parent">
                <article className="tile is-child">
                    <p className="title has-text-centered">{props.title}</p>
                    <p className="subtitle has-text-centered">{props.subtitle}</p>
                    <p className="subtitle">{props.info}</p>
                <button>
                    <a href="/contact">Contact Us</a>
                </button>
                </article>
            </div>
            <div className="tile is-parent">
                <article className="tile is-child">
                    <figure className="image is-4by3">
                        <img src={props.img} alt='service' />
                    </figure>
                </article>
            </div>
        </div>
)
}
