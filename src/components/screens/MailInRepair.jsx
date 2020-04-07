import React from "react";
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
    container: {
      width: "80vw",
      margin: "0 auto"
    },
    imgFiller: {
      width: "298px",
      height: "198px",
      objectFit: "cover"
    },
    flexCentered: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    },
    center: {
      justifyContent: "center",
      alignItems: "center"
    },
    pdf: {
      width: "74px",
      height: "88px",
      objectFit: "contain"
    }
  };

  return (
    <div>
      <HeroContainer
        screen="Mail In Repair"
        styles={styles.section}
        color={styles.font}
      />
      <div class="columns is-centered" style={styles.container}>
        <div class="column is-half">
          <h2 className="title is-3 is-primary" style={styles.color}>
            Mail-in Service
          </h2>
          <h2 className="title is-5 is-primary">
            Just a few easy steps to get your device fix
          </h2>
          <ol>
            <li>
              <b>Print our repair form.</b> Make sure to complete the entire
              form, if you have a question on what to put in any of the boxes,
              give us a call.
            </li>
            <li>
              <b>Pack your device.</b> Make sure to add cushion in order to
              avoid any damage while in transit. We also recommend to add
              insurance to your package, as we are not responsible for lost or
              damaged mail.
            </li>
            <li>
              Mail your device to: &nbsp;
              <b>Phonefixit.com 94 A Broadway, Hicksville, NY, 11801</b> make
              sure to keep a copy of the tracking information for your records.
            </li>
            <li>
              Once we get your package we will contact you to confirm that we
              received it and also to give you a <b>free estimate</b> before
              doing any work on it.
            </li>
            <li>
              <a
                href="https://www.paypal.com/webapps/shoppingcart?flowlogging_id=38aec7e7c8bb&amp;mfid=1495587166733_38aec7e7c8bb#/checkout/openButton"
                target="_blank"
                data-content="https://www.paypal.com/webapps/shoppingcart?flowlogging_id=38aec7e7c8bb&amp;mfid=1495587166733_38aec7e7c8bb#/checkout/openButton"
                data-type="external"
                rel="noopener noreferrer"
              >
                <span style={{ color: "#000000" }}>
                  <span style={{ fontWeight: "bold" }}>
                    Pay for the services &nbsp;
                  </span>
                </span>
              </a>
              needed to fix your device using our <b>Paypal Secure link</b>. and
              you are all set. we will mail it back to you the same day the
              repair is completed.
            </li>
          </ol>
        </div>
        <div class="column" style={styles.flexCentered}>
          <img
            alt="Mobile Phone"
            src="https://static.wixstatic.com/media/a2f61e98656042c891462792a182518f.jpg/v1/fill/w_596,h_396,al_c,q_80,usm_0.66_1.00_0.01/a2f61e98656042c891462792a182518f.webp"
            style={styles.imgFiller}
          />
          <span>Need Help?</span>
          <span>Call Us: 516-513-0800</span>
          <span>
            Email:{" "}
            <a
              class="auto-generated-link"
              data-auto-recognition="true"
              data-content="repair@phonefixit.com"
              href="mailto:repair@phonefixit.com"
              data-type="mail"
            >
              repair@phonefixit.com
            </a>
          </span>

          <div class="columns">
            <div class="column">
              <img
                id="comp-jvprdqpbimgimage"
                alt="online repair form PDF.pdf"
                data-type="image"
                itemprop="image"
                src="https://static.wixstatic.com/media/40d80b8089c8418a961cb75d96d491f7.png/v1/fill/w_131,h_176,al_c,lg_1,q_85/40d80b8089c8418a961cb75d96d491f7.webp"
                style={styles.pdf}
              />
            </div>
            <div class="column">
              <form
                action="https://www.paypal.com/cgi-bin/webscr"
                method="post"
                target="_top"
              >
                <input type="hidden" name="cmd" value="_s-xclick"></input>
                <input
                  type="hidden"
                  name="hosted_button_id"
                  value="BFQCBHBCRLXB4"
                ></input>
                <input
                  type="image"
                  src="https://www.paypalobjects.com/en_US/i/btn/btn_paynowCC_LG.gif"
                  border="0"
                  name="submit"
                  alt="PayPal - The safer, easier way to pay online!"
                ></input>
                <img
                  alt=""
                  border="0"
                  src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
                  width="1"
                  height="1"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
