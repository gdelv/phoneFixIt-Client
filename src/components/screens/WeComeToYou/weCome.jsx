import React from 'react'
import Demo from './scheduler'
import './Styles/weCome.scss'





class weCome extends React.Component {
    constructor(props) { 
        super(props)



        this.state = {

        }
    }



    render () {
        return (
            <div class='appointmentsContainer'>
                <Demo/>
            </div>
        )
    }
}


export default weCome