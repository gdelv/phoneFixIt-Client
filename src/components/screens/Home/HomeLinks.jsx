import React from 'react'
import './Styles/HomeLinks.scss'
import { linksInfo } from "../../../data";


const HomeLinks = (props) => {
    return (
    <div class="tile is-ancestor">
        {linksInfo.map(link => {
            return (
                <div class="tile repair-card">
                    <div class="card">
                        <div class="card-image">
                            <figure class="image is-4by3">
                                <img src={link.img} alt="repair card"/>
                            </figure>
                        </div>
                        <div class="card-content">
                        <div class="media">
                            <div class="media-content">
                            <p class="title is-4 has-text-centered">{link.title}</p>
                        </div>
                        </div>
                        <div class="content">{link.description}</div>
                        </div>
                    </div>
                </div>
            )
        })}
    </div>
    )
}

export default HomeLinks