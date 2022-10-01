// const acLogo = require('../components/images/lorenzoHVAC/services/acLogo.JPG')
const serviceLogo = require('../components/images/lorenzoHVAC/services/serviceLogo.JPG')
const douglasLogo = require('../components/images/lorenzoHVAC/services/douglasLogo.JPG')
// const furnaceLogo = require('../components/images/lorenzoHVAC/services/furnaceLogo.JPG')
// const heatPumpLogo = require('../components/images/lorenzoHVAC/services/heatPumpLogo.JPG')
// const heatLogo = require('../components/images/lorenzoHVAC/services/heatLogo.JPG')
const thermostatLogo = require('../components/images/lorenzoHVAC/services/thermostatLogo.JPG')
const centralAirLogo = require('../components/images/lorenzoHVAC/services/centralAirLogo.JPG')
const acIcon = require('../components/images/lorenzoHVAC/icons/ac.png')
const heatIcon = require('../components/images/lorenzoHVAC/icons/heat.png')
const ductlessIcon = require('../components/images/lorenzoHVAC/icons/ductless.png')
const furnaceIcon = require('../components/images/lorenzoHVAC/icons/furnace.png')
const pumpIcon = require('../components/images/lorenzoHVAC/icons/pump.png')
const repairIcon = require('../components/images/lorenzoHVAC/icons/repair.png')

export const linksInfo = [
    {
        title: "Central Air",
        description: "",
        img: centralAirLogo
    },
    {
        title: "Ductless Heating & Cooling",
        description: "",
        img: douglasLogo
    },
    {
        title: "Service & Repair",
        description: "",
        img: serviceLogo
    },
    {
        title: "Smart Thermostats",
        description: "",
        img: thermostatLogo
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
        title: "iPad (1st Gen)",
        capacity: "64GB",
        colorOptions: [
            { value: 'silver', label: 'Silver', color: '#666666' },
            { value: 'black', label: 'Black', color: '#000000' }
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
        img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ebayimg.com%2Fimages%2Fg%2FN9cAAOSw5xhcUxTX%2Fs-l640.png&f=1&nofb=1",
        price: 50,
        company: "Apple",
        info: "The first-generation iPad is a tablet computer designed and marketed by Apple Inc. as the first in the iPad lineup. The device features an Apple A4 SoC, a 9.7' touchscreen display, and, on certain variants, the capability of accessing cellular networks. Using the iOS operating system, the iPad can play music, send and receive email and browse the web. Other functions, which include the ability to play games and access references, GPS navigation software and social network services can be enabled by downloading apps.",
        inCart: false,
        count: 0,
        total: 0,
        color: "null",
        carrier: "null",
        condition: "null"
    },
    {
        id: 2,
        title: "iPhone 4",
        capacity: "32GB",
        colorOptions: [
            { value: 'silver', label: 'Silver', color: '#666666' },
            { value: 'black', label: 'Black', color: '#000000' },
            { value: 'white', label: 'White', color: '#ffffff' }
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
        img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd2um6umu4gwssp.cloudfront.net%2Fapple%2Fwp-content%2Fuploads%2F2016%2F06%2Fiphone-1.jpg&f=1&nofb=1",
        price: 50,
        company: "Apple",
        info: "The iPhone 4 is a smartphone that was designed and marketed by Apple Inc. It is the fourth generation iPhone, succeeding the 3GS and preceding the 4S. Following a number of notable leaks, the iPhone 4 was first unveiled on June 7, 2010, at Apple's Worldwide Developers Conference in San Francisco,[8] and was released on June 24, 2010, in the United States, United Kingdom, France, Germany, and Japan. The iPhone 4 introduced a new hardware design to the iPhone family, which Apple's CEO Steve Jobs touted as the thinnest smartphone in the world at the time; it consisted of a stainless steel frame which doubles as an antenna, with internal components situated between aluminosilicate glass.",
        inCart: false,
        count: 0,
        total: 0,
        color: "null",
        carrier: "null",
        condition : "null"
    },
    {
        id: 3,
        title: "iPad 2",
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
        img: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwondrouspics.com%2Fwp-content%2Fuploads%2F2011%2F07%2Fipad_2.jpg&f=1&nofb=1",
        price: 100,
        company: "Apple",
        info: "The iPad 2 is a tablet designed, developed and marketed by Apple Inc. Compared to the first iPad, as the second model in the iPad line, it gained a faster dual core A5 processor, a lighter build structure, and was the first iPad to feature VGA front-facing and 720p rear-facing cameras designed for FaceTime video calling.",
        inCart: false,
        count: 0,
        total: 0,
        color: "null",
        carrier: "null",
        condition: "null"
    },
    {
        id: 4,
        title: "iPhone 4S",
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
        img: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F4.bp.blogspot.com%2F-15Zqijz3gus%2FT9_sVY_m-TI%2FAAAAAAAAEzY%2FnNZZ33CQnGI%2Fs1600%2FApple_iPhone_4.jpg&f=1&nofb=1",
        price: 100,
        company: "Apple",
        info: "The iPhone 4S (retroactively stylized with a lowercase 's' as iPhone 4s as of September 2013) is a smartphone that was designed and marketed by Apple Inc. It is the fifth generation of the iPhone,[10] succeeding the iPhone 4 and preceding the iPhone 5. It was announced on October 4, 2011 at Apple's Cupertino campus, and was the final Apple product announced in the lifetime of former Apple CEO and co-founder Steve Jobs, who died the following day.",
        inCart: false,
        count: 0,
        total: 0,
        color: "null",
        carrier: "null",
        condition: "null"
    },
    {
        id: 5,
        title: "iPhone 5",
        capacity: "32GB",
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
        img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd3nevzfk7ii3be.cloudfront.net%2Figi%2FMAScaCSihja252wZ&f=1&nofb=1",
        price: 100,
        company: "Apple",
        info: "The iPhone 4S (retroactively stylized with a lowercase 's' as iPhone 4s as of September 2013) is a smartphone that was designed and marketed by Apple Inc. It is the fifth generation of the iPhone,[10] succeeding the iPhone 4 and preceding the iPhone 5. It was announced on October 4, 2011 at Apple's Cupertino campus, and was the final Apple product announced in the lifetime of former Apple CEO and co-founder Steve Jobs, who died the following day.",
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
        title: "Heat",
        subtitle: "Make the right choice and contact us today to get a quote on central heating system installation!",
        info: "Just like ACs, other than purchasing the correct heating system, the most important choice when it comes to heating installation is who installs it. No matter how good of a brand you choose for your heating system, if it’s installed improperly, you may as well have chosen the cheapest brand on the market, or none at all. Make the right choice and choose SoCal HVAC Specialist Heating & Air Conditioning to install your heating system today. We will make sure that your heating system is working at the highest level of efficiency possible, so you can have even temperature zones, lower electric bills, and a long-lasting heating system!",
        img: heatIcon,
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
        title: "Air Conditioner",
        subtitle: "Make the right choice and contact us today to get a quote on AC installation!",
        info: "Other than purchasing the correct air conditioning system, the most important choice when it comes to AC installation is who installs it. Many homeowners are under the impression that the brand of the AC is what makes the difference, but that’s only half of the equation. Choosing the right company for your install ensures that your cooling system is working at the highest level of efficiency possible, so you can have even temperature zones, lower electric bills, and a long-lasting cooling system!",
        img: acIcon,
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
    },
    {
        id: 3,
        title: "Gas Furnace",
        subtitle: "Do you need to upgrade your furnace?",
        info: "A gas furnace is a home heating appliance that runs off of natural gas. The natural gas is ignited in the furnace, warming up the air, which is then delivered throughout the home. A fully functioning gas furnace requires all of its components to be working in sync.",
        img: furnaceIcon,
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
    },
    {
        id: 4,
        title: "Heat Pumps",
        subtitle: "When considering which type of system is best for your home, several important factors should be considered, including the size of the home and the local climate.",
        info: "One very important point to understand when answering the question “how do heat pumps work?” is that heat pumps do not generate heat – they move heat from one place to another. A furnace creates heat that is distributed throughout a home, but a heat pump absorbs heat energy from the outside air (even in cold temperatures) and transfers it to the indoor air. When in cooling mode a heat pump and an air conditioner are functionally identical, absorbing heat from the indoor air and releasing it through the outdoor unit. Click here for more information about heat pumps vs air conditioners.",
        img: pumpIcon,
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
    },
    {
        id: 5,
        title: "Ductless Heating & Cooling",
        subtitle: "What Is a Ductless Mini-Split? ",
        info: "A ductless mini-split system does not need air ducts to operate. A traditional air conditioner will distribute air throughout the home from a single unit. A mini-split indoor unit will service a single room or area, with each unit using a separate fan and evaporator coil.",
        img: ductlessIcon,
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
    },
    {
        id: 6,
        title: "Service & Repair",
        subtitle: "Need a hand?",
        info: "HVAC maintenance is the process of maintaining the heater or air conditioner by inspecting, cleaning, testing, or even repairing and replacing components in the system. By investing in maintenance for your HVAC system, you can fix issues before they become bigger problems.",
        img: repairIcon,
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