import React, { Component } from 'react'

export default class HomeServiceDropdown extends Component {
    render() {
        return (
            <>
            <h1 className="title" style={{display:"inline"}}>Fix my </h1>
            <div className="dropdown is-hoverable">
                <div className="dropdown-trigger">
                    <button className="button" aria-haspopup="true" aria-controls="dropdown-menu">
                    <span>Heater</span>
                    <span className="icon is-small">
                        <i className="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                    </button>
                </div>
                <div className="dropdown-menu" id="dropdown-menu" role="menu">
                    <div className="dropdown-content">
                        <a href="/" className="dropdown-item">
                            A/C
                        </a>
                        <a  href="/" className="dropdown-item">
                            Ventilation
                        </a>
                        <a href="/" className="dropdown-item">
                            Boiler
                        </a>
                    </div>
                </div>
            </div>
            <h1 className="title" style={{display:"inline"}}> please!</h1>
            </>
        )
    }
}
