import React, { Component } from 'react'
import { storeProducts, detailProduct, servicesInfo, singleService } from "./data";

const ProductContext = React.createContext();
//Provider - provides info to whole website
//Consumer - when you need the info we will use the consumer

class ProductProvider extends Component {
    state = {
        products: [],
        detailProduct: detailProduct,
        services: [],
        singleService: singleService, 
        colorSelected: null,
        conditionSelected : null,
        carrierSelected: null,
        cart: [],
        modalOpen: false,
        modalProduct: detailProduct,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0
    }
    componentDidMount() {
        this.setProducts();
        this.setServices();
    }
    setProducts = () => {
        let tempProducts = [];
        storeProducts.forEach(item => {
            const singleItem = {...item};
            tempProducts = [...tempProducts, singleItem]
        })
        this.setState(() => {
            return { products: tempProducts }
        })
    }
    setServices = () => {
        let tempServices = [];
        servicesInfo.forEach(item => {
            const singleItem = {...item};
            tempServices = [...tempServices, singleItem]
        })
        this.setState(() => {
            return { services: tempServices }
        })
    }

    getService = (id) => {
        const service = this.state.services.find(service => service.id === id);
        return service;
    }

    getItem = (id) => {
        const product = this.state.products.find(item => item.id === id);
        return product;
    }
    
    handleService = (id) => {
        const service = this.getService(id);
        this.setState(() => {
            return { singleService: service }
        })
    }

    handleDetail = (id) => {
        const product = this.getItem(id);
        this.setState(() => {
            return {detailProduct: product}
        })
    }

    addToCart = (id) => {
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        product.color = this.state.colorSelected
        product.carrier = this.state.carrierSelected
        product.condition = this.state.conditionSelected
        const price = product.price;
        product.total = price;
        this.setState(
            () => {
            return { products: tempProducts, cart: [...this.state.cart, product] };
        }, 
        () => {
            this.addTotals();
            }
        );
    };
    openModal = (id) => {
        const product = this.getItem(id);
        this.setState(() => {
            return { 
                modalProduct: product, 
                modalOpen: true 
            }
        })
    }
    closeModal = () => {
        this.setState(() => {
            return { modalOpen: false }
        })
    }
    increment = (id) => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => item.id === id)
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        product.count = product.count + 1;
        product.total = product.count * product.price;
        this.setState(
            () => {return {cart: [...tempCart]}
                }, 
            () => {
                this.addTotals()
            }
        )
    }
    decrement = (id) => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => item.id === id)
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        product.count = product.count - 1;
        if(product.count === 0) {
            this.removeItem(id);
        } else {
            product.total = product.count * product.price;
            this.setState(
                () => {return {cart: [...tempCart]}
                    }, 
                () => {
                    this.addTotals()
                    }   
            )
        }
    }
    removeItem = (id) => {
        let tempProducts = [...this.state.products];
        let tempCart = [...this.state.cart];
        tempCart = tempCart.filter(item => item.id !== id)

        const index = tempProducts.indexOf(this.getItem(id));
        let removedProduct = tempProducts[index];
        removedProduct.inCart = false;
        removedProduct.count = 0;
        removedProduct.total = 0
        
        this.setState(() => {
            return {
                cart: [...tempCart],
                products: [...tempProducts]
            };
        }, 
        () => {
            this.addTotals();
        })
    }
    clearCart = () => {
        this.setState(() => {
            return { cart: [] };
        }, () => {
            this.setProducts();
            this.addTotals();
        })
    }
    addTotals = () => {
        let subTotal = 0;
        this.state.cart.map(item => (subTotal += item.total));
        const tempTax = subTotal * (0.08865);
        const tax = parseFloat(tempTax.toFixed(2));
        const total = subTotal + tax
        this.setState(() => {
            return {
                cartSubTotal: subTotal,
                cartTax: tax,
                cartTotal: total
            }
        })
    }

    handleColor = selectedOption => {
        const colorOption = selectedOption.label
        this.setState( 
            () => {
                return { colorSelected: colorOption  }

        })
    }

    handleCondition = selectedOption => {
        const conditionOption = selectedOption.label
        this.setState( 
            () => {
                return { conditionSelected: conditionOption  }

        })
    }
    handleCarrier = selectedOption => {
        const carrierOption = selectedOption.label
        this.setState( 
            () => {
                return { carrierSelected: carrierOption  }

        })
    }
    render() {
        return (
        <ProductContext.Provider 
            value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart,
                openModal: this.openModal,
                closeModal: this.closeModal,
                increment: this.increment,
                decrement: this.decrement,
                removeItem: this.removeItem,
                clearCart: this.clearCart,
                handleColor: this.handleColor,
                handleCondition: this.handleCondition,
                handleCarrier: this.handleCarrier,
                handleService: this.handleService
            }}
        >
            {this.props.children}
        </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
