import React from "react";
// import HomeHeroContainer from "./Home/HomeHeroContainer";
import HeroContainer from "../shared/HeroContainer";

export const MailInRepair = props => {
  let styles = {
    section: {
      background: 'url("https://i.imgur.com/so9hBbk.jpg") center center',
      backgroundSize: "cover"
    },
    font: {
      color: "white",
      textShadow: "4px 4px black"
    },
    offset: {
      is: "is-half is-offset-one-quarter"
    }
  };

  return (
    <div>
      {window.innerWidth < 768 ? (styles.offset.is = null) : null}
      <HeroContainer
        screen="Mail In Repair"
        styles={styles.section}
        color={styles.font}
      />
      <div class="columns is-desktop">
        {console.log("fired", window.innerWidth)}
        <div class={styles.offset ? `column ${styles.offset.is}` : "column"}>
          1
        </div>
        <div class="column">2</div>
      </div>
    </div>
  );
};
