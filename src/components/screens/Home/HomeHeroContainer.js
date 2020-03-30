import React from 'react'
import './Styles/HomeHeroContainer.scss'



const HomeHeroContainer = (props) => {
    return (
        <div className='homeWrapper'>
            <div className='text-container'>
                <div className='innerTextContainer'>
                <div>
                    <h3>
                        {props.title}
                    </h3>
                </div>
                <div>
                    <p>{props.description}</p>
                </div>
                </div>
            </div>
            <div className='startContainer'>
                <a>Start Here</a>
            </div>
        </div>
    )
}

export default HomeHeroContainer