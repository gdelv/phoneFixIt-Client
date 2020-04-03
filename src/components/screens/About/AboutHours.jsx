import React, { Component } from 'react'

export default class AboutHours extends Component {
    render() {
        return (
            <div>
                <div class="columns has-text-centered">
                    <div class="column">
                        <p className="subtitle is-4 has-text-weight-bold is-uppercase">opening hours</p>
                        <p className="subtitle is-6">Monday: 10AM - 8PM</p>
                        <p className="subtitle is-6">Tuesday: 10AM - 8PM</p>
                        <p className="subtitle is-6">Wednesday: 10AM - 8PM</p>
                        <p className="subtitle is-6">Thursday: 10AM - 8PM</p>
                        <p className="subtitle is-6">Friday: 10AM - 8PM</p>
                        <p className="subtitle is-6">Saturday: 9AM - 7PM</p>
                        <p className="subtitle is-6">Sunday: 11AM - 4PM</p>

                    </div>
                </div>
            </div>
        )
    }
}
