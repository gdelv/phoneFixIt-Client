import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import AboutLocations from './AboutLocations'
// import AboutHours from './AboutHours'
// import AboutStatement from './AboutStatement'

export const About = (props) => {
    return (
        <div>
            <Carousel autoPlay infiniteLoop showArrows={true}>
                                    <div>
                                        <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" />
                                        <p className="legend">Legend 1</p>
                                    </div>
                                    <div>
                                        <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" />
                                        <p className="legend">Legend 2</p>
                                    </div>
                                    <div>
                                        <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" />
                                        <p className="legend">Legend 3</p>
                                    </div>
                                    <div>
                                        <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" />
                                        <p className="legend">Legend 4</p>
                                    </div>
                                    <div>
                                        <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" />
                                        <p className="legend">Legend 5</p>
                                    </div>
                                </Carousel>
            {/* <AboutStatement
                title='Learn more about our repairs'
                subtitle="Who we are & what we do"
                description="We started Phonefixit in 2014 and have been providing high quality repair services for local residents in the Long Island area ever since. When possible, we use original parts in our repair. With years of experience on our back, we'll happily fix whatever you bring into our shop, We're driven by our dedication to be the best screen repair service in the area. We can't help but smile with pride everytime our customers pick up their newly repaired item - it means we've done our job right. Please get in touch with us to learn more bout our shop or stop by today!"
            />
            <AboutLocations/>
            <AboutHours/> */}
        </div>

    )
}
