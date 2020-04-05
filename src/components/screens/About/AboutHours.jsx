import React, { Component } from 'react'

export default class AboutHours extends Component {
    constructor() {
        super()
        this.state = {
            textColor: "danger"
        }
    }
    componentDidMount() {
        this.changeColor()
    }
    changeColor = () => {
        var currentDate = new Date()
        var currentHour = currentDate.getHours()
        if(currentHour >= 10 && currentHour <= 18) {
            this.setState({ textColor: "success" })
        } else this.setState({ textColor: "danger" })
        console.log(this.state.textColor)
    }
    render() {
        return (
            <div>
                <div class="columns has-text-centered">
                    <div class="column">
                        <p className={`title is-2 has-text-centered is-spaced is-capitalized has-text-${this.state.textColor}`}>opening hours</p>
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
