import React from 'react'
import './Styles/HomeRepairServices.scss'
import { linksInfo } from "../../../data";


const HomeLinks = (props) => {
    return (
    <div className="tile is-ancestor">
        {linksInfo.map(link => {
            return (
                <div className="tile repair-card">
                    <div className="card">
                        <div className="card-image">
                            <figure className="image is-4by3">
                                <img src={link.img} alt="services card"/>
                            </figure>
                        </div>
                        <div className="card-content">
                        <div className="media">
                            <div className="media-content">
                            <p className="title is-4 has-text-centered">{link.title}</p>
                        </div>
                        </div>
                        <div className="content">{link.description}</div>
                        </div>
                    </div>
                </div>
            )
        })}
    </div>
    )
}

export default HomeLinks