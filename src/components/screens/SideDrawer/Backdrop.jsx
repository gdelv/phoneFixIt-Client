import React from 'react'
import './Styles/Backdrop.scss'



const Backdrop = (props) => {
    return (
        <div className='backdrop' onClick={props.onClick}/>
    )
}

export default Backdrop