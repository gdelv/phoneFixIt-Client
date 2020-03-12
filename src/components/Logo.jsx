import React from 'react'
import { NavLink } from "react-router-dom";
import './styles/Logo.css'

class Logo extends React.Component {
    constructor() {
        super()
        this.state = {
            modal: false,
            buttonClassName: 'circle icon',
            leftPosition: '-320 px'
        }
    }
    changeClassName = () => {
        if (this.state.buttonClassName === 'circle icon') {
            this.setState({ buttonClassName: 'circle icon close' })
        } else if (this.state.buttonClassName === 'circle icon close') {
            this.setState({ buttonClassName: 'circle icon' })
        }
    }
    changePosition = () => {
        if (this.state.leftPosition === '-320px') {
            this.setState({ leftPosition: '0px' })
        } else if (this.state.leftPosition === '0px') {
            this.setState({ leftPosition: '-320px' })
        }
    }
    handleModal() {
        this.changePosition()
        this.changeClassName()
        this.setState({
            modal: !this.state.modal,
        })
    }
    renderNavModal = () => {
        if (this.state.modal) {
            return (
                <div className='modal' style={{left: this.state.leftPosition}}>
                    <NavLink exact to='/' onClick={() => this.handleModal()}>
                        HOME
                    </NavLink>
                    <NavLink exact to='/#store-locator' onClick={() => this.handleModal()}>
                        STORE LOCATOR                   </NavLink>
                    <NavLink exact to='/careers' onClick={() => this.handleModal()}>
                        CAREERS
                    </NavLink>
                    <NavLink exact to='/corporate-sales' onClick={() => this.handleModal()}>
                        CORPORATE SALES
                    </NavLink>
                    <NavLink exact to='/#contact-us' onClick={() => this.handleModal()}>
                        CONTACT US
                    </NavLink>
                </div>
            )
        }
    }
    renderMainLinks() {
        return (
            <div className='logo-container'>
                <div className="left-section">
                    {/* <div className="logo-images">
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
                </div> */}
                    <div id='wrapper' onClick={() => this.handleModal()}>
                        <div className={this.state.buttonClassName}>
                            <span className='line top'></span>
                            <span className='line middle'></span>
                            <span className='line bottom'></span>
                        </div>
                    </div>
                    <div className="logo-brand">
                        <h1 className="title">Phonefixit.com</h1>
                        <h3 className="description">The phone & tablet repair experts</h3>
                        <h3 className="brand-statement">Long island #1 phone repair shop</h3>
                    </div>
                </div>
                <div className="right-section">

                </div>
            </div>
        )
    }
    render() {
        return (
            <>
                {this.renderMainLinks()}
                {this.renderNavModal()}
            </>
        )
    }
}

export default Logo