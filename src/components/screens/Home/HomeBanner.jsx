import React from "react";
import "./Styles/HomeBanner.scss";

const HomeBottomContainers = props => {
return (
        <section className="hero is-link is-medium">
            <div className="hero-body">
                <div className="container">
                    <p className="title is-spaced is-uppercase has-text-black is-1">We do it right</p>
                    <p className="subtitle has-text-black is-4">When you decide to work with us, you get so much more than your average repair shop.</p> 
                    <p className="subtitle has-text-black is-4">Everything we do at Phonefixit is geared towards providing our customers with a unique and one of a kind repair experience. </p>
                    <p class="subtitle has-text-black is-4">From Live Phone Support to In Depth Market Knowledge, we provide extra features for our customers to provide the best service</p>
                </div>
            </div>
        </section>
    );
};

export default HomeBottomContainers;
