import React from 'react'

export default function DetailImageTile(props) {
    return (
        <div className="tile is-parent">
            <article className="tile is-child notification is-primary">
                <figure className="image is-3by5 detail-image">
                    <img src={props.img} alt="phone"/>
                </figure>
            </article>
        </div>
    )
}
