import React from 'react'

export default function DetailInfoTile(props) {    
    return (
        <div className="tile is-parent">
            <article className="tile is-child notification is-link">
                <p className="subtitle is-2 has-text-centered">{props.detailTitle}</p>
                <p className="subtitle is-3">Available in the following colors:</p>
                <ul className='color-container'>
                    {props.colorOptions.map(color => {
                        return (
                            <li className='color is-size-4'>{color.label}</li>
                            )
                        })}
                </ul>
                <p className="subtitle is-4">{props.info}</p>
            </article>
        </div>
)
}
