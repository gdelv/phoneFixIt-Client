import React from 'react'

export default function DetailInfoTile(props) {
    return (
        <div className="tile is-parent">
            <article className="tile is-child notification is-danger">
                <p className="subtitle">{props.detailTitle}</p>
                <p className="subtitle">Available in the following colors:</p>
                {/* make color an array in the data file and map li for available colors */}
                <ul>
                    <li>{props.color}</li>
                </ul>
                <p className="subtitle">The device is also available with more memory in our shop</p>
            </article>
        </div>
)
}
