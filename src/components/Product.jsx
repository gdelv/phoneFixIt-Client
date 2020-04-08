import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ProductConsumer } from '../context'
export default class Product extends Component {
    render() {
        const { id, title, img, price, inCart } = this.props.product;
        return (
            <>
                {/* Phone Card to map */}
            <div className="column is-one-quarter"  style={{border: "1px solid red"}}>
                <div class="card">
                    <div class="card-image" onClick={()=> console.log("you clicked for details")}>
                        <figure class="image is-5by3">
                            <Link to="/details">
                                <img src={img} alt="Placeholder image"/>
                            </Link>
                        </figure>
                    </div>
                    <div class="card-content">
                        <div class="media">
                            <div class="media-content">
                                <p class="title is-3">{title}</p>
                                <p class="subtitle is-5">{price}</p>
                            </div>
                        </div>
                        <div class="content">
                            <button className="button">Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}


