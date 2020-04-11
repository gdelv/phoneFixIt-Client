import React, { Component } from 'react'
import { ProductConsumer } from "../../../context";
import { Link } from "react-router-dom";
import './styles/Modal.scss'
export default class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const { modalOpen, closeModal } = value;
                    const { img, title, price, condition, capacity } = value.modalProduct;
                    if(!modalOpen) {
                        return null
                    } else {
                        return (
                            <div className="modal is-active shop-modal">
                                <div className="modal-background"></div>
                                    <div className="modal-content">
                                        <div className="card">
                                            <div className="card-content">
                                                <div className="media">
                                                    <div className="media-content">
                                                        <p className="title is-1 has-text-centered modal-title-top">Item Added to Cart</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-image">
                                                <figure className="image is-4by3">
                                                    <img src={img} alt="card"/>
                                                </figure>
                                            </div>
                                            <div className="card-content">
                                                <div className="media">
                                                    <div className="media-content">
                                                        <p className="title is-2 has-text-centered modal-title-bottom">{title} {condition} {capacity}</p>
                                                        <p className="subtitle is-3 has-text-centered  modal-title-bottom">Price: ${price}</p>
                                                        <div className="modal-button-container">
                                                            <Link to='/store'>
                                                                <button className="button is-medium is-link" onClick={() => closeModal()}>Store</button>
                                                            </Link>
                                                            <Link to='/cart'>
                                                                <button className="button is-medium is-link" onClick={() => closeModal()}>Go To Cart</button>
                                                            </Link>
                                                        </div>
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
