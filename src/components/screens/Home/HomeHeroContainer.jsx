import React from "react";
import "./Styles/HomeHeroContainer.scss";

const HomeHeroContainer = props => {
  return (
    // <div className='homeWrapper'>
    //     <div className='text-container'>
    //         <div className='innerTextContainer'>
    //         <div>
    //             <h3>
    //                 {props.title}
    //             </h3>
    //         </div>
    //         <div>
    //             <p>{props.description}</p>
    //         </div>
    //         </div>
    //     </div>
    //     <div className='startContainer'>
    //         <a>Start Here</a>
    //     </div>
    // </div>
    <section className="hero is-large has-bg-img">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title is-1 is-primary" style={{ color: "gray" }}>
            Welcome to PHONEFIXIT
          </h1>
          <h2 className="subtitle is-1">
            We fix your devices at our stores, your place or by mail.
          </h2>
          <button className="button is-primary">Start Here</button>
        </div>
      </div>
    </section>
  );
};


const HomeHeroContainer = (props) => {
    return (
        // <div className='homeWrapper'>
        //     <div className='text-container'>
        //         <div className='innerTextContainer'>
        //         <div>
        //             <h3>
        //                 {props.title}
        //             </h3>
        //         </div>
        //         <div>
        //             <p>{props.description}</p>
        //         </div>
        //         </div>
        //     </div>
        //     <div className='startContainer'>
        //         <a>Start Here</a>
        //     </div>
        // </div>
        <section className="hero is-large has-bg-img">
            <div className="hero-body">
                <div className="container has-text-centered">
                    <h1 className="title is-1 has-text-white">Welcome to PHONEFIXIT</h1>
                    <h2 className="subtitle is-1">We fix your devices at our stores, your place or by mail.</h2>
                    <button className="button is-primary">Start Here</button>
                </div>
            </div>
        </section>
    )
}

export default HomeHeroContainer
