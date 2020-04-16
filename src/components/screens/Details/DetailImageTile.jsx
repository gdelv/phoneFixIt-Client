import React from 'react'

export default function DetailImageTile(props) {
    return (
        <div className="tile is-parent">
            <article className="tile is-child notification is-info">
                <figure className="image is-4by3">
                    <img src={props.img} alt="phone"/>
                </figure>
            </article>
        </div>
    )
}
