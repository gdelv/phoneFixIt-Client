import React from 'react'
import './Styles/HomeLinks.scss'



const HomeLinks = (props) => {
    return (
    <div class="tile is-ancestor">
        <div class="tile repair-card">
            <div class="card">
                <div class="card-image">
                    <figure class="image is-4by3">
                        <img src="https://i.imgur.com/7DTNqsI.jpg" alt="repair card"/>
                    </figure>
                </div>
                <div class="card-content">
                <div class="media">
                    <div class="media-content">
                    <p class="title is-4 has-text-centered">Phone Repair</p>
                </div>
                </div>
                <div class="content">
                Phonefixit is committed to your happiness, which is why our expert repair technicians are fully trained in Apple iPhone Repair, Samsung Galaxy Repair and all other models. With our Repair Services, you’ll be thrilled you came to us for your repair. Bring us whatever you need us to fix, and experience the Phonefixit difference. Get your iPhone screen replaces by us in under 20 minutes.
                </div>
                </div>
            </div>
        </div>
        <div class="tile repair-card">
        <div class="card">
                <div class="card-image">
                    <figure class="image is-4by3">
                        <img src="https://i.imgur.com/7EZXpnc.jpg" alt="repair card"/>
                    </figure>
                </div>
                <div class="card-content">
                <div class="media">
                    <div class="media-content">
                    <p class="title is-4 has-text-centered">Tablet Repair</p>
                </div>
                </div>
                <div class="content">
                Our technicians aren't limited to just phones, Technicians are also trained to repair all current and past Apple iPad & Samsung tablets models. Our team members are more than happy to answer any of your questions before, during, and after the repair process. Not satisfied? We’ll be sure to do everything in our power to get the job done right. Get in touch with us today to find out more about this service.
                </div>
                </div>
            </div>  
        </div>
        <div class="tile repair-card">
        <div class="card">
                <div class="card-image">
                    <figure class="image is-4by3">
                        <img src="https://i.imgur.com/KOlc4Nr.jpg" alt="repair card"/>
                    </figure>
                </div>
                <div class="card-content">
                <div class="media">
                    <div class="media-content">
                    <p class="title is-4 has-text-centered">Computer Repair</p>
                </div>
                </div>
                <div class="content">
                Since 2014, we’ve provided customers with convenient and comprehensive services for all their repair needs. phonefixit.com is committed to helping make your life easier. Computer Repairs are also available to all of our clients. Combined with phone and tablet services we'll be your one stop shop for all repair services. Contact us today for more information.
                </div>
                </div>
            </div>  
        </div>
    </div>
    
    )
}

export default HomeLinks