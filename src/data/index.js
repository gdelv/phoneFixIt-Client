export const linksInfo = [
    {
        title: "Phone Repair",
        description: "Phonefixit is committed to your happiness, which is why our expert repair technicians are fully trained in Apple iPhone Repair, Samsung Galaxy Repair and all other models. With our Repair Services, you’ll be thrilled you came to us for your repair. Bring us whatever you need us to fix, and experience the Phonefixit difference. Get your iPhone screen replaces by us in under 20 minutes.",
        img: "https://i.imgur.com/7DTNqsI.jpg"
    },
    {
        title: "Tablet Repair",
        description: "Our technicians aren't limited to just phones, Technicians are also trained to repair all current and past Apple iPad & Samsung tablets models. Our team members are more than happy to answer any of your questions before, during, and after the repair process. Not satisfied? We’ll be sure to do everything in our power to get the job done right. Get in touch with us today to find out more about this service.",
        img: "https://i.imgur.com/7EZXpnc.jpg"
    },{
        title: "Computer Repair",
        description: "Since 2014, we’ve provided customers with convenient and comprehensive services for all their repair needs. phonefixit.com is committed to helping make your life easier. Computer Repairs are also available to all of our clients. Combined with phone and tablet services we'll be your one stop shop for all repair services. Contact us today for more information.",
        img:"https://i.imgur.com/KOlc4Nr.jpg"
    }

]

export const featuresHome = [
    {
        title: "Live phone support",
        subtitle: "What we do for our customers",
        description: "Need technical advice or assistance but can't make it to our location? give us a call, and speak with one of our expert technicians. We're happy to provide free support whenever needed. We’ve been at it long enough to know how important it is to provide top notch work and real customer service.",
        img:"https://images.unsplash.com/photo-1580795479225-c50ab8c3348d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
    },
    {
        title: "In-depth market knowledge",
        subtitle: "You're our priority",
        description: "Having been in the mobile device industry for 15+ years our technicians are well versed in all aspects of the market and can assist in all phone, tablet and computer inqueries.",
        img:"https://images.unsplash.com/photo-1512439408685-2e399291a4e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1885&q=80"
    },
    {
        title: "Enviromentally friendly",
        subtitle: "For your convenience",
        description: "We strive to use the most environmentally friendly methods as possible including recycling used and old products. proper disposal, and refurbishing of phones and tablets.",
        img:"https://images.unsplash.com/photo-1576613109753-27804de2cba8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
    }
]


export const questionsAnswers = [
    {
        question: "Which payment methods do you accept?",
        answer: "Store locations accept all major credit and debit cards as well as cash, Online and mail in services accept only Paypal"
    },
    {
        question: "How long will it take you to repair my items",
        answer: "Most repairs can be done same day, however some devices will require parts, which need to be ordered from our warehouse in this circumstance repairs for some devices can take as long as 3-4 business days to complete. Return shipping of mail in devices will be sent same day of repair completion. Please call for more information"
    },
    {
        question: "Do you use original manufacturer replacement parts?",
        answer: "Original or OEM parts as they're reffered to, can be used if a customer prefers (prices may vary), Our parts are high quality third party materials which are identical to the originals in both appearance functionality"
    },
    {
        question: "Do you offer a warranty on repairs?",
        answer: "Yes all repairs come with a 60 day limited warranty on parts and labor, as long as physical damage or liquid damage is not found on the device"
    },
    {
        question: "What happens if I can't make my appointment",
        answer: "Give us a call at (516)-513-0800 for our Hicksville location, or (516)-801-6320 for our Glen Cove location and let us know"
    }
]

export const storeInfo = [
    {
        title: "Warranty",
        content: "60-Day Limited Warranty. If you happen to have any issue with your device, Phonefixit will attempt to repair the device or replace if needed. Please note that any sign of liquid damage or physical damage will void this warranty."
    },
    {
        title: "Grading Scale",
        content: "Our Devices Are Graded Based on The Following Grading Scale:A Stock  'very small scratches very noticeable, no dents.' B Stock  'some scratches and/or small dents' C Stock  'scratches and dents on most of the Device' Details on our grading scale can be found here."
    },
    {
        title: "Return Policy",
        content: "We want you to be completely satisfied with Our products. We accept  return requests for 30 days from the day of purchase. To  return an item, simply contact us at 516-801-6320 or email us through the contact us form. We will provide a prepaid  return label through either FedEx or USPS Ground services and we will issue a refund to the original payment source within 5-7 days of receiving the item back. A $15 restocking fee may apply."
    }
]

export const storeProducts = [
    {
        id: 1,
        title: "iPhone 7",
        // condition: "Certified Pre Own",
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
        color: "null",
        carrier: "null",
        condition: "null"
    },
    {
        id: 2,
        title: "iPhone 5",
        // condition: "Brand New",
        capacity: "16GB",
        colorOptions: [
            { value: 'silver', label: 'Silver', color: '#666666' },
            { value: 'black', label: 'Black', color: '#000000' },
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
        price: 50,
        company: "Apple",
        info: "Add customized information about each product in this paragraph.",
        inCart: false,
        count: 0,
        total: 0,
        color: "null",
        carrier: "null",
        condition : "null"
    },
    {
        id: 3,
        title: "iPhone 7",
        // condition: "Certified Pre Own",
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
        color: "null",
        carrier: "null",
        condition: "null"
    },
    {
        id: 4,
        title: "iPhone 7",
        // condition: "Certified Pre Own",
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
        color: "null",
        carrier: "null",
        condition: "null"
    },
    {
        id: 5,
        title: "iPhone 7",
        // condition: "Certified Pre Own",
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
        color: "null",
        carrier: "null",
        condition: "null"
    },
    {
        id: 6,
        title: "iPhone 7",
        // condition: "Certified Pre Own",
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
        color: "null",
        carrier: "null",
        condition: "null"
    },
    {
        id: 7,
        title: "iPhone 7",
        // condition: "Certified Pre Own",
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
        color: "null",
        carrier: "null",
        condition: "null"
    }
]

export const detailProduct = {
    id: 1,
    title: "iPhone 7",
    // condition: "Certified Pre Own",
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

export const servicesInfo = [
    {
        id: 1,
        title: "Phone Repair",
        subtitle: "Do you have a broken phone?",
        info: "Don't worry Phonefixit.com is here to help. Most screen replacements are done in under 20 minutes. Broken screen, bad charging port, water damage, are some of the many issues we can help you get fix!",
        img: "https://cdn.vox-cdn.com/thumbor/2bzgf1UMghKL5-wSMaNlvQDBA9g=/0x0:1500x1000/1200x800/filters:focal(630x380:870x620)/cdn.vox-cdn.com/uploads/chorus_image/image/55986267/akrales_160725_1155_A_0019.0.jpg",
        devicesAvailable: [
            {   
                id: 1,
                deviceName: "Apple iPhones",
                logo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.HKoDLEf2PVCQK500SS4TAwHaHa%26pid%3DApi&f=1" 
            },
            {
                id: 2,
                deviceName: "Samsung Phones",
                logo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.HKoDLEf2PVCQK500SS4TAwHaHa%26pid%3DApi&f=1" 
            },
            {
                id: 3,
                deviceName: "LG Phones",
                logo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.HKoDLEf2PVCQK500SS4TAwHaHa%26pid%3DApi&f=1" 
            },
            {
                id: 4,
                deviceName: "HTC Phones",
                logo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.HKoDLEf2PVCQK500SS4TAwHaHa%26pid%3DApi&f=1" 
            },
            {
                id: 5,
                deviceName: "Motorola Phones",
                logo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.HKoDLEf2PVCQK500SS4TAwHaHa%26pid%3DApi&f=1" 
            },
            {
                id: 6,
                deviceName: "Other Phone Brands",
                logo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.HKoDLEf2PVCQK500SS4TAwHaHa%26pid%3DApi&f=1" 
            }
        ]
    },
    {
        id: 2,
        title: "Tablet Repair",
        subtitle: "Do you have a broken tablet?",
        info: "Don't worry Phonefixit.com is here to help. Broken screen, bad charging port, water damage some of the many issues we can help you get fix! ",
        img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F2.bp.blogspot.com%2F-VwlwklDlL0I%2FUe1UeVEe3zI%2FAAAAAAAARGk%2Fszc18RWij6o%2Fs1600%2Fipad%2B3%2B-%2Btechnews24h.jpg&f=1&nofb=1",
        devicesAvailable: [
            {
                id: 1,
                deviceName: "Apple iPads",
                logo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.HKoDLEf2PVCQK500SS4TAwHaHa%26pid%3DApi&f=1" 
            },
            {
                id: 2,
                deviceName: "Samsung Tablets",
                logo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.HKoDLEf2PVCQK500SS4TAwHaHa%26pid%3DApi&f=1" 
            },
            {
                id: 3,
                deviceName: "Other Phone Brands",
                logo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.HKoDLEf2PVCQK500SS4TAwHaHa%26pid%3DApi&f=1" 
            }
        ]
    }
]

export const singleService = [
    {
        id: 1,
        title: "Phone Repair",
        subtitle: "Do you have a broken phone?",
        info: "Don't worry Phonefixit.com is here to help. Most screen replacements are done in under 20 minutes. Broken screen, bad charging port, water damage, are some of the many issues we can help you get fix!",
        img: "https://cdn.vox-cdn.com/thumbor/2bzgf1UMghKL5-wSMaNlvQDBA9g=/0x0:1500x1000/1200x800/filters:focal(630x380:870x620)/cdn.vox-cdn.com/uploads/chorus_image/image/55986267/akrales_160725_1155_A_0019.0.jpg",
        devicesAvailable: [
            {
                id: 1,
                deviceName: "Apple iPhones",
                logo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.HKoDLEf2PVCQK500SS4TAwHaHa%26pid%3DApi&f=1" 
            },
            {
                id: 2,
                deviceName: "Samsung Phones",
                logo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.HKoDLEf2PVCQK500SS4TAwHaHa%26pid%3DApi&f=1" 
            },
            {
                id: 3,
                deviceName: "LG Phones",
                logo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.HKoDLEf2PVCQK500SS4TAwHaHa%26pid%3DApi&f=1" 
            },
            {
                id: 4,
                deviceName: "HTC Phones",
                logo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.HKoDLEf2PVCQK500SS4TAwHaHa%26pid%3DApi&f=1" 
            },
            {
                id: 5,
                deviceName: "Motorola Phones",
                logo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.HKoDLEf2PVCQK500SS4TAwHaHa%26pid%3DApi&f=1" 
            },
            {
                id: 6,
                deviceName: "Other Phone Brands",
                logo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.HKoDLEf2PVCQK500SS4TAwHaHa%26pid%3DApi&f=1" 
            }
        ]
    }
]

export const computerInfo = [
    {
        id: 1,
        title: "Screen repair",
        subtitle: "Broken Screen? leave it to us to make it look like new.",
        logo: "fas fa-4x fa-desktop",
        color: "#D5F4FF",
        textColor: "black"
    },
    {
        id: 2,
        title: "Data Recovery",
        subtitle: "Missing Files? Our experts will go and find them for you.",
        logo: "fas fa-4x fa-database",
        color: "#0065A5",
        textColor: "white"
    },
    {
        id: 3,
        title: "Virus Removal",
        subtitle: "Got a Virus? We clean them out and give you the tools to protect your PC.",
        logo: "fas fa-4x fa-wrench",
        color: "#D5F4FF",
        textColor: "black"
    },
    {
        id: 4,
        title: "PC Upgrades",
        subtitle: "Runing Slow? Lets Get some RAM, Or Video cards upgrades",
        logo: "fas fa-4x fa-arrow-up",
        color: "#0065A5",
        textColor: "white"
    }

]