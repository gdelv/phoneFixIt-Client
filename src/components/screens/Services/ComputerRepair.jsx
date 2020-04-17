import React from 'react'
import { computerInfo } from '../../../data'
import { Link } from 'react-router-dom'
import './styles/ComputerRepair.scss'
import ComputerBanner from './ComputerBanner'

export default function ComputerRepair() {
    return (
        <>
            <div className='columns is-centered'>
                {computerInfo.map(info => {
                    return (
                        <div className="column"key={info.id} style={{background:info.color}}> 
                            <span className="icon is-large computer-icon">
                                <i className={`${info.logo} is-large has-text-${info.textColor}`} aria-hidden="true"></i>
                            </span>
                            <p className={`title has-text-centered has-text-${info.textColor}`}>{info.title}</p>
                            <p className={`subtitle has-text-centered has-text-${info.textColor}`}>{info.subtitle}</p>
                            <Link to='/contact'>
                                <button className="button computer-button">Contact Us</button>
                            </Link>
                            
                        </div>
                    )
                })}
            </div>
            <ComputerBanner
                title="About our screen repair"
                info="PhoneFixit has locations throughout Long Island and Queens and offers all kinds of repairs for Phones, Tablets, and Computers. If you have a cracked screen or any other issue with your device, give us a call today for a free quote. Most repairs are done while you wait, and we can also go to you and repair your device at your desire location. Mail it repairs are welcome too."
            />
        </>
    )
}
