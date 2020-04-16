import React from 'react'

export default function DetailInfoTile(props) {    
    return (
        <div className="tile is-parent">
            <article className="tile is-child notification is-danger">
                <p className="subtitle">{props.detailTitle}</p>
                <p className="subtitle">Available in the following colors:</p>
                <ul>
                    {props.colorOptions.map(color => {
                        return (
                            <li>{color.label}</li>
                            )
                        })}
                </ul>
                <p className="subtitle">{props.info}</p>
            </article>
        </div>
)
}
