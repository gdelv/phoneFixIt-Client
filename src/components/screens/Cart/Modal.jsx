import React, { Component } from 'react'
import { ProductConsumer } from "../../../context";
import { Link } from "react-router-dom";

export default class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const { modalOpen, closeModal } = value;
                    const { img, title, price } = value.modalProduct;
                    if(!modalOpen) {
                        return null
                    } else {
                        return (
                            <div class="modal is-active">
                                <div class="modal-background"></div>
                                    <div class="modal-content">
                                        <div class="card">
                                        <div class="card-content">
                                                <div class="media">
                                                    <div class="media-content">
                                                        <p class="title is-2 has-text-centered">Item Added to Cart</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="card-image">
                                                <figure class="image is-4by3">
                                                    <img src={img} alt="card"/>
                                                </figure>
                                            </div>
                                            <div class="card-content">
                                                <div class="media">
                                                    <div class="media-content">
                                                        <p class="title is-4">{title}</p>
                                                        <p class="subtitle is-6">Price: ${price}</p>
                                                        <Link to='/store'>
                                                            <button className="button" onClick={() => closeModal()}>Store</button>
                                                        </Link>
                                                        <Link to='/cart'>
                                                            <button className="button" onClick={() => closeModal()}>Go To Cart</button>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <button class="modal-close is-large" aria-label="close" onClick={() => closeModal()}></button>
                                    </div>
                            </div>
                        )
                    }
                }}
            </ProductConsumer>
        )
    }
}
