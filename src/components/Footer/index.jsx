import classes from "./Footer.module.css";
import { Logo } from "../../constant";
import clsx from "clsx";
import { socialMediaIcon } from "../../data";
import CommonContainer from "../CommonContainer";
import moment from "moment-timezone";
import { Row, Col } from "react-bootstrap";
const Footer = () => {
  const currentYear = moment().tz("Etc/GMT-1").format("YYYY");
  return (
    <CommonContainer>
      <footer>
        <Row>
          <Col lg={4} xs={12} sm={12} >
            <div className={clsx(classes.logoWrapper, classes.pe30)}>
              <span
                onClick={() => {
                  window.open(
                    "https://oyepackaging.com",
                    "_blank",
                    "noopener,noreferrer"
                  );
                }}
              >
                <Logo className={"img-fluid"} />
              </span>
              <p className={classes.content}>
                Say farewell to ordinary packaging and delays - we&apos;ve got
                your back. Explore our diverse services and join us on an
                exciting journey!{" "}
              </p>
            </div>
          </Col>

          <Col lg={2} sm={3} xs={6}>
            <div className={clsx(classes.contentWrapper, classes.pl50)}>
              <h2>PACKAGING</h2>

              <div>
                <p className={"disabled"}>Flat Bottom Bags</p>
                <p className={"disabled"}>Carton Boxes</p>
                <p className={"disabled"}>Side Gusset Bags</p>
                <p className={"disabled"}>Standup Bags</p>
              </div>
            </div>
          </Col>

          <Col lg={2} sm={3} xs={6} className={clsx(classes.fixInMob)}>
            <div className={classes.contentWrapper}>
              <h2>SERVICES</h2>

              <div>
                <p
                  onClick={() => {
                    window.open(
                      "https://oyepackaging.com/dripBag",
                      "_blank",
                      "noopener,noreferrer"
                    );
                  }}
                >
                  Drip Bags
                </p>
                <p className={clsx(classes.dull, "disabled")}>Brew Bags</p>
                <p className={clsx(classes.dull, "disabled")}>Capsules</p>
              </div>
            </div>
          </Col>

          <Col sm={3} lg={2} xs={6}>
            <div className={classes.contentWrapper}>
              <h2>WIKI</h2>

              <div>
                <p
                  onClick={() => {
                    window.open(
                      "https://thespace.oyepackaging.com/wiki/orders",
                      "_blank",
                      "noopener,noreferrer"
                    );
                  }}
                >
                  Orders
                </p>
                <p
                  onClick={() => {
                    window.open(
                      "https://thespace.oyepackaging.com/wiki/payment-and-pricing",
                      "_blank",
                      "noopener,noreferrer"
                    );
                  }}
                >
                  Payments and Pricing
                </p>
                <p
                  onClick={() => {
                    window.open(
                      "https://thespace.oyepackaging.com/wiki/delivery",
                      "_blank",
                      "noopener,noreferrer"
                    );
                  }}
                >
                  Delivery
                </p>
                <p
                  onClick={() => {
                    window.open(
                      "https://thespace.oyepackaging.com/wiki/return-refund-policy",
                      "_blank",
                      "noopener,noreferrer"
                    );
                  }}
                >
                  Return & refund policy
                </p>
              </div>
            </div>
          </Col>
          <Col lg={2} sm={3} xs={6} className={clsx(classes.mlAuto)}>
            <div className={classes.contentWrapper}>
              <h2>ABOUT US</h2>

              <div>
                <p
                  onClick={() => {
                    window.open(
                      "https://oyepackaging.com/about",
                      "_blank",
                      "noopener,noreferrer"
                    );
                  }}
                >
                  Who we are
                </p>
                <p
                  onClick={() => {
                    window.open(
                      "https://oyepackaging.com/contact",
                      "_blank",
                      "noopener,noreferrer"
                    );
                  }}
                >
                  Contact us
                </p>
                <p
                  onClick={() => {
                    window.open(
                      "https://thespace.oyepackaging.com/sustainability",
                      "_blank",
                      "noopener,noreferrer"
                    );
                  }}
                >
                  Sustainability
                </p>
              </div>
            </div>
          </Col>
        </Row>
        <div className={classes.bottomDetails}>
          <p className="pb-0 mb-0">Copyright © {currentYear} ÖYE PACKAGING</p>
          <nav className={classes.navbar}>
            <span
              onClick={() => {
                window.open(
                  "https://thespace.oyepackaging.com/wiki/privacy-policy",
                  "_blank",
                  "noopener,noreferrer"
                );
              }}
            >
              PRIVACY POLICY
            </span>
            <span
              onClick={() => {
                window.open(
                  "https://thespace.oyepackaging.com/cookie-policy",
                  "_blank",
                  "noopener,noreferrer"
                );
              }}
            >
              COOKIES
            </span>
            <span
              onClick={() => {
                window.open(
                  "https://thespace.oyepackaging.com/wiki/terms-and-conditions",
                  "_blank",
                  "noopener,noreferrer"
                );
              }}
            >
              TERMS & CONDITION
            </span>
          </nav>
          <ul className={classes.socialIconWrapper}>
            {socialMediaIcon?.map((element) => (
              <li
                key={element?.id}
                className={classes.iconBox}
                onClick={() => {
                  window.open(element?.href, "_blank", "noopener,noreferrer");
                }}
              >
                {element?.icon}
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </CommonContainer>
  );
};

export default Footer;
