import React from "react";
import "./Styles/HomeHeroContainer.scss";
import HomeServiceDropdown from "./HomeServiceDropdown";

const HomeHeroContainer = props => {
    return (
    <section className="hero is-small is-info home-hero-image">
        <div className="hero-body">
        <div className="container has-text-centered">
            <h1 className="title is-size-1-fullhd is-size-2-tablet is-primary has-text-white">{props.title}</h1>
            <h2 className="subtitle is-size-2-fullhd is-size-3-tablet has-text-info has-text-weight-bold	">{props.description}</h2>
            <HomeServiceDropdown/>
            {/* <button className="button is-link">Start Here</button> */}
        </div>
        </div>
    </section>
    );
};


export default HomeHeroContainer;
