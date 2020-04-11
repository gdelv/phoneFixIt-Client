import React, { Component } from 'react'

export default class HomeServiceDropdown extends Component {
    render() {
        return (
            <>
            <h1 className="title" style={{display:"inline"}}>Fix my </h1>
            <div className="dropdown is-hoverable">
                <div className="dropdown-trigger">
                    <button className="button" aria-haspopup="true" aria-controls="dropdown-menu">
                    <span>Phone</span>
                    <span className="icon is-small">
                        <i className="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                    </button>
                </div>
                <div className="dropdown-menu" id="dropdown-menu" role="menu">
                    <div className="dropdown-content">
                        <a href="/" className="dropdown-item">
                            Tablet
                        </a>
                        <a  href="/" className="dropdown-item">
                            Computer
                        </a>
                        <a href="/" className="dropdown-item">
                            Game Console
                        </a>
                    </div>
                </div>
            </div>
            <h1 className="title" style={{display:"inline"}}> please!</h1>
            </>
        )
    }
}
