import React, { Component } from 'react'
import chroma from 'chroma-js';
// import Select from 'react-select';
import { ProductConsumer } from "../../../context";
import { Link } from "react-router-dom";
import DetailBanner from './DetailBanner';
import DetailBreadCrumb from './DetailBreadCrumb';
import './styles/Details.scss'
import DetailImageTile from './DetailImageTile';
import DetailInfoTile from './DetailInfoTile';
import DetailColorDropdown from './DetailColorDropdown';
import DetailCarrierDropdown from './DetailCarrierDropdown';
import DetailConditionDropdown from './DetailConditionDropdown';
import DetailWarrantyInfo from './DetailWarrantyInfo';

export default class Details extends Component {

    render() {        
        return (
            <>
                <ProductConsumer>
                    {(value) => {
                        const { id, 
                            company,
                            img, 
                            info, 
                            price, 
                            title, 
                            inCart,
                            capacity,
                            colorOptions,
                            conditionOptions,
                            carrierOptions,
                        } = value.detailProduct;
                        let detailTitle = company + ' ' + title + ' ' + capacity;   
                        return (
                            <div className="container">
                                <DetailBreadCrumb 
                                    title={detailTitle}
                                />
                                <div className="tile is-ancestor">
                                    <div className="tile is-vertical is-5">
                                        <div className="tile">
                                            <DetailImageTile 
                                                img={img} 
                                            />
                                        </div>
                                            <DetailInfoTile 
                                                colorOptions={colorOptions} 
                                                detailTitle={detailTitle} 
                                                info={info}
                                            />
                                    </div>
                                            <div className="tile is-parent">
                                                <article className="tile is-child notification is-success">
                                                    <div className="content">
                                                        <p className="title is-3">{detailTitle}</p>
                                                        <p className="subtitle is-4">$ {price}</p>
                                                            <div className="content">
                                                                {/* ENTER DROPDOWNS HERE */}
                                                                <DetailColorDropdown 
                                                                    colorOptions={colorOptions} 
                                                                    onChange={value.handleColor}
                                                                />
                                                                <DetailCarrierDropdown
                                                                    carrierOptions={carrierOptions}
                                                                    onChange={value.handleCarrier}
                                                                />
                                                                <DetailConditionDropdown
                                                                    conditionOptions={conditionOptions}
                                                                    onChange={value.handleCondition}
                                                                />
                                                                <div className="btn-container">
                                                                    <Link to="/store">
                                                                        <button className="button">Back to Store</button>
                                                                    </Link>
                                                                        <button 
                                                                            className="button" 
                                                                            disabled={inCart ? true:false}
                                                                            onClick={() => {
                                                                                value.addToCart(id);
                                                                                value.openModal(id);
                                                                            }}
                                                                        >
                                                                            {inCart ? "In Cart" : "Add to Cart"}
                                                                        </button>
                                                                </div>
                                                                <DetailWarrantyInfo/> 
                                                            </div>
                                                    </div>
                                                </article>
                                            </div>
                                    </div>                                
                            </div>
                        )
                    }}
                </ProductConsumer>
                <DetailBanner 
                    title='we do it right'
                    subtitle='learn about our offerings'
                    description='Driven by quality, we’ve been at it long enough to know how important it is to provide top notch work and real customer service. We’re there for customers whenever they need us. When you require help or guidance on which type of repair you need, trust the real pros. Come by our Screen Repair Service today.'
                />
            </>
        )
    }
}


const dot = (color = '#ccc') => ({
    alignItems: 'center',
    display: 'flex',
    ':before': {
        backgroundColor: color,
        borderRadius: 10,
        content: '" "',
        display: 'block',
        marginRight: 8,
        height: 10,
        width: 10,
    },
});

const colourStyles = {
    control: styles => ({ ...styles, backgroundColor: 'white' }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = chroma(data.color);
    return {
        ...styles,
        backgroundColor: isDisabled
            ? null
            : isSelected
            ? data.color
            : isFocused
            ? color.alpha(0.1).css()
            : null,
        color: isDisabled
            ? '#ccc'
            : isSelected
            ? chroma.contrast(color, 'white') > 2
            ? 'white'
            : 'black'
        : data.color,
        cursor: isDisabled ? 'not-allowed' : 'default',

        ':active': {
            ...styles[':active'],
            backgroundColor: !isDisabled && (isSelected ? data.color : color.alpha(0.3).css()),
        },
        };
    },
    input: styles => ({ ...styles, ...dot() }),
    placeholder: styles => ({ ...styles, ...dot() }),
    singleValue: (styles, { data }) => ({ ...styles, ...dot(data.color) }),
};

