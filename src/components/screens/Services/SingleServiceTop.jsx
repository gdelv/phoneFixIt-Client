import React from 'react'
import { Link } from "react-router-dom";

export default function SingleServiceTop(props) {
    return (
        <div className="tile is-ancestor">
            <div className="tile is-parent">
                <article className="tile is-child" style={{padding: '1em 2em'}}>
                    <p className="title has-text-centered">{props.title}</p>
                    <p className="subtitle has-text-centered">{props.subtitle}</p>
                    <p className="subtitle">{props.info}</p>
                {/* <button>
                    <a href="/contact">Get a Quote</a>
                </button> */}
                <div style={{display: 'flex', width: '100%', justifyContent: "center"}}>
                    <button className="button is-danger is-rounded">
                        <Link to='/contact'>Get a Quote</Link>
                    </button>
                </div>
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
