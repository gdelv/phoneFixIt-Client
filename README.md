# Phone Fix It React Website 



Deployed at: https://phonefixit.netlify.app/

## Global State
```
 state = {
        products: [],
        detailProduct: detailProduct,
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
```    

## Phone JSON Info
```
const detailProduct = {
    id: 1,
    title: "iPhone 7",
    capacity: "16GB",
    colorOptions: [
        { value: 'silver', label: 'Silver', color: '#666666' },
        { value: 'gold', label: 'Gold', color: '#FFD700' },
        { value: 'black', label: 'Black', color: '#000000' },
        { value: 'pink', label: 'Pink', color:'#FFC0CB' }
    ],
    conditionOptions: [
        { value: 'A Stock', label: 'A Stock' },
        { value: 'B Stock', label: 'B Stock' },
        { value: 'C Stock', label: 'C Stock' },
    ],
    carrierOptions: [
        { value: 'sprint', label: 'Sprint' },
        { value: 'T-Mobile', label: 'T-Mobile' },
        { value: 'at&t', label: 'AT&T' },
        { value: 'verizon', label: 'Verizon' },
        { value: 'unlocked', label: 'Unlocked' },
    ],
    img: "https://cdn.vox-cdn.com/thumbor/2bzgf1UMghKL5-wSMaNlvQDBA9g=/0x0:1500x1000/1200x800/filters:focal(630x380:870x620)/cdn.vox-cdn.com/uploads/chorus_image/image/55986267/akrales_160725_1155_A_0019.0.jpg",
    price: 100,
    company: "Apple",
    info: "Add customized information about each product in this paragraph.",
    inCart: false,
    count: 0,
    total: 0,
    color: null,
    carrier: null,
    condition : null
}
```


## App Architecture

-App (Contains Global State)
```
    <header>
        --NavBar (Stateless Functional Component)
    </header>
    <main>
        --Routes (Stateless Functional Component)
    </main>
    <footer>
        --Footer (Stateless Functional Component)
    </footer>
```

## Bugs To Fix

-Making color/condition/carrier required to be selected in order to be added into the cart
