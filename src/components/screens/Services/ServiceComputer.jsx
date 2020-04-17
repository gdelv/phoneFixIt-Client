import React from 'react'
import { Link } from 'react-router-dom'

export default function ServiceComputer(props) {
    return (
        <div className="column is-one-quarter">
            <div className="card">
                <div className="card-image">
                    <figure className="image is-5by3">
                        <Link to='/computer'>
                            <img src={props.img} alt="service"/>
                        </Link>
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-content">
                            <p className="title is-2 has-text-centered">{props.title}</p>
                            <Link to='/computer'>
                                <button className="button">Learn more</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
