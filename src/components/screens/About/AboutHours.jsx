import React, { Component } from 'react'

export default class AboutHours extends Component {
    constructor() {
        super()
        this.state = {
            textColor: "success",
            storeStatus: "open"
        }
    }
    componentDidMount() {
        this.changeColor()
    }
    changeColor = () => {
        var currentDate = new Date()
        var currentDay = currentDate.getUTCDay()
        var currentHour = currentDate.getHours()
        console.log("current day",currentDay);
        if(currentDay === 1 || 2 || 3 || 4 || 5 ) {
            if(currentHour >= 10 && currentHour <= 20) {
                this.setState({ 
                    textColor: "success",
                    storeStatus: "open"
                })
            } else this.setState({ 
                textColor: "danger",
                storeStatus: "closed"
            })
        } else if (currentDay === 6) {
            if(currentHour >= 9 && currentHour <= 19) {
                this.setState({ 
                    textColor: "success",
                    storeStatus: "open"
                })
            } else this.setState({ 
                textColor: "danger",
                storeStatus: "closed"
            })
        } else if(currentDay === 7) {
            if(currentHour >= 11 && currentHour <= 16) {
                this.setState({ 
                    textColor: "success",
                    storeStatus: "open"
                })
            } else this.setState({ 
                textColor: "danger",
                storeStatus: "closed"
            })
        }
    }
    render() {
        return (
            <div>
                <div class="columns has-text-centered">
                    <div class="column">
        <p className={`title is-2 has-text-centered is-spaced is-capitalized has-text-${this.state.textColor}`}>Store is {this.state.storeStatus}</p>
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
