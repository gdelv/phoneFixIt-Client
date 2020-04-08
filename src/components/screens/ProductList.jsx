import React, { Component } from 'react'
import { ProductConsumer} from '../../context'
import Product from '../Product';
export default class ProductList extends Component {

    render() {
        // console.log(this.state.products)
        return (
            <>
                {/* Phone Card Container */}
                <div className="columns is-mobile is-centered is-multiline">
                    <ProductConsumer>
                        {value => {
                            return value.products.map(product => {
                                return <Product key={product.id} product={product} />;
                            })
                        }}
                    </ProductConsumer>
                </div>           
            </>
        )
    }
}




// return (
//     <>
//         {/* Phone Card Container */}
//         <div className="columns is-mobile is-centered is-multiline">
//             {/* Phone Card to map */}
//             <div className="column is-one-quarter"  style={{border: "1px solid red"}}>
//                 <div class="card">
//                     <div class="card-image">
//                         <figure class="image is-5by3">
//                             <img src='https://cdn.vox-cdn.com/thumbor/2bzgf1UMghKL5-wSMaNlvQDBA9g=/0x0:1500x1000/1200x800/filters:focal(630x380:870x620)/cdn.vox-cdn.com/uploads/chorus_image/image/55986267/akrales_160725_1155_A_0019.0.jpg' alt="Placeholder image"/>
//                         </figure>
//                     </div>
//                     <div class="card-content">
//                         <div class="media">
                        
//                         <div class="media-content">
//                             <p class="title is-3">Apple iPhone</p>
//                             <p class="subtitle is-5">$30</p>
//                         </div>
//                         </div>
//                         {/* <div class="content">
//                             <button className="button">Add to cart</button>
//                         </div> */}
//                     </div>
//                 </div>
//                 <ProductConsumer>
//                     {value => {
//                         return value.products.map(product => {
//                             return <Product key={product.id} product={product} />;
//                         })
//                     }}
//                 </ProductConsumer>
//             </div>
//         </div>           
//     </>
// )