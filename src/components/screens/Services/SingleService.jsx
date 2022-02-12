import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import { ProductConsumer } from '../../../context'
import SingleServiceTop from './SingleServiceTop';
// import SingleServiceBottom from './SingleServiceBottom';


export default class SingleService extends Component {
    render() {
        return (
            <>
                <ProductConsumer>
                    {value => {
                        const { 
                            title,
                            subtitle,
                            info, 
                            img,
                            // devicesAvailable
                        } =  value.singleService;
                        return (
                            <>
                                <SingleServiceTop
                                    title={title}
                                    subtitle={subtitle}
                                    info={info}
                                    img={img}
                                />
                                {/* <SingleServiceBottom
                                    devicesAvailable={devicesAvailable}
                                /> */}
                            </>
                        )
                    }}
                </ProductConsumer>
            </>
        )
    }
}
