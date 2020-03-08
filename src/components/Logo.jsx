import React from 'react'
import { Image } from '../components/shared/Image'
import './styles/Logo.css'

export const Logo = () => {
    return (
        <div className='logo-container'>
            <div className="left-section">
                <Image
                    src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthumbs.dreamstime.com%2Fb%2Frobot-screwdriver-16834516.jpg&f=1&nofb=1'
                    className='robot-logo'
                    alt='robot'
                    height='90'
                    width='60'
                />
                <Image
                    src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.quickanddirtytips.com%2Fsites%2Fdefault%2Ffiles%2Fimages%2F5957%2FBroken_Smartphone.jpg&f=1&nofb=1'
                    className='iphone-logo'
                    alt='iphone'
                    height='90'
                    width='60'
                />
            </div>
            <div className="right-section">
                <h1 className="title">Phonefixit.com</h1>
                <h3 className="description">The phone & tablet repair experts</h3>
                <h3 className="brand-statement">Long island #1 phone repair shop</h3>
            </div>
        </div>
    )
}