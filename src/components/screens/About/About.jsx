import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import jobImage1 from '../../images/lorenzoHVAC/pastJobs/lorenzoJob1.jpg'
import jobImage2 from '../../images/lorenzoHVAC/pastJobs/lorenzoJob2.jpg'
import jobImage3 from '../../images/lorenzoHVAC/pastJobs/lorenzoJob3.jpg'
import jobImage4 from '../../images/lorenzoHVAC/pastJobs/lorenzoJob4.jpg'
import jobImage5 from '../../images/lorenzoHVAC/pastJobs/lorenzoJob5.jpg'
import jobImage6 from '../../images/lorenzoHVAC/pastJobs/lorenzoJob6.jpg'
import jobImage7 from '../../images/lorenzoHVAC/pastJobs/lorenzoJob7.jpg'
import jobImage8 from '../../images/lorenzoHVAC/pastJobs/lorenzoJob8.jpg'
import jobImage9 from '../../images/lorenzoHVAC/pastJobs/lorenzoJob9.jpg'
import jobImage10 from '../../images/lorenzoHVAC/pastJobs/lorenzoJob10.jpg'
import jobImage11 from '../../images/lorenzoHVAC/pastJobs/lorenzoJob11.jpg'
import jobImage12 from '../../images/lorenzoHVAC/pastJobs/lorenzoJob12.jpg'

// import AboutLocations from './AboutLocations'
// import AboutHours from './AboutHours'
// import AboutStatement from './AboutStatement'

export const About = (props) => {
    return (
        <div>
            <Carousel autoPlay infiniteLoop showArrows dynamicHeight>
                                    <div>
                                        <img src={jobImage1} alt="hvac job1"/>
                                        <p className="legend">Legend 1</p>
                                    </div>
                                    <div>
                                        <img src={jobImage2} alt="hvac job1"/>
                                        <p className="legend">Legend 1</p>
                                    </div>
                                    <div>
                                        <img src={jobImage3} alt="hvac job1"/>
                                        <p className="legend">Legend 1</p>
                                    </div>
                                    <div>
                                        <img src={jobImage4} alt="hvac job1"/>
                                        <p className="legend">Legend 1</p>
                                    </div>
                                    <div>
                                        <img src={jobImage5} alt="hvac job1"/>
                                        <p className="legend">Legend 1</p>
                                    </div>
                                    <div>
                                        <img src={jobImage6} alt="hvac job1"/>
                                        <p className="legend">Legend 1</p>
                                    </div>
                                    <div>
                                        <img src={jobImage7} alt="hvac job1"/>
                                        <p className="legend">Legend 1</p>
                                    </div>
                                    <div>
                                        <img src={jobImage8} alt="hvac job1"/>
                                        <p className="legend">Legend 1</p>
                                    </div>
                                    <div>
                                        <img src={jobImage9} alt="hvac job1"/>
                                        <p className="legend">Legend 1</p>
                                    </div>
                                    <div>
                                        <img src={jobImage10} alt="hvac job1"/>
                                        <p className="legend">Legend 1</p>
                                    </div>
                                    <div>
                                        <img src={jobImage11} alt="hvac job1"/>
                                        <p className="legend">Legend 1</p>
                                    </div>
                                    <div>
                                        <img src={jobImage12} alt="hvac job1"/>
                                        <p className="legend">Legend 1</p>
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
