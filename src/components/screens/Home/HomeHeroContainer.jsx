import React from "react";
import "./Styles/HomeHeroContainer.scss";
import HomeServiceDropdown from "./HomeServiceDropdown";

const HomeHeroContainer = props => {
    return (
    <section className="hero is-large has-bg-img home-hero-image">
        <div className="hero-body">
        <div className="container has-text-centered">
            <h1 className="title is-1 is-primary has-text-white">{props.title}</h1>
            <h2 className="subtitle is-3 has-text-info has-text-weight-bold	">{props.description}</h2>
            <HomeServiceDropdown/>
            {/* <button className="button is-link">Start Here</button> */}
        </div>
        </div>
    </section>
    );
};


export default HomeHeroContainer;
