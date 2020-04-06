import React from "react";
import "../screens/Home/Styles/HomeHeroContainer.scss";

const HeroContainer = props => {
  return (
    <section className="hero is-large" style={props.styles}>
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title is-1 is-primary" style={props.color}>
            {props.screen}
          </h1>
          <h2 className="subtitle is-1">{props.subtitle}</h2>
          {props.button ? (
            <button className="button is-primary">{props.button}</button>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default HeroContainer;
