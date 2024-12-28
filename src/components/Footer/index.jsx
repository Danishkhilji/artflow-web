import classes from "./Footer.module.css";
import { Logo } from "../../constant";
import clsx from "clsx";
import { socialMediaIcon } from "../../data";
import CommonContainer from "../CommonContainer";
const Footer = () => {
  return (
    <CommonContainer>
      <footer>
        <div className="grid">
          <div className="lg:col-4 col-12 xs:col-6">
            <div className={classes.logoWrapper}>
              <span>
                <Logo className={"img-fluid"} />
              </span>
              <p className={classes.content}>
                Say farewell to ordinary packaging and delays - we&apos;ve got
                your back. Explore our diverse services and join us on an
                exciting journey!{" "}
              </p>
            </div>
          </div>

          <div className="lg:col-2 sm:col-3 col-6 ">
            <div className={classes.contentWrapper}>
              <h2>PACKAGING</h2>

              <div>
                <p>Flat Bottom Bags</p>
                <p>Carton Boxes</p>
                <p>Side Gusset Bags</p>
                <p>Standup Bags</p>
              </div>
            </div>
          </div>

          <div className={clsx("lg:col-2 sm:col-3 col-6", classes.fixInMob)}>
            <div className={classes.contentWrapper}>
              <h2>SERVICES</h2>

              <div>
                <p>Drip Bags</p>
                <p className={classes.dull}>Brew Bags</p>
                <p className={classes.dull}>Capsules</p>
              </div>
            </div>
          </div>

          <div className="lg:col-2 sm:col-3 col-6">
            <div className={classes.contentWrapper}>
              <h2>WIKI</h2>

              <div>
                <p>Flat Bottom Bags</p>
                <p>Carton Boxes</p>
                <p>Side Gusset Bags</p>
                <p>Standup Bags</p>
              </div>
            </div>
          </div>
          <div className={clsx("lg:col-2 sm:col-3 col-6", classes.fixInMob)}>
            <div className={classes.contentWrapper}>
              <h2>ABOUT US</h2>

              <div>
                <p>Who we are</p>
                <p>Contact us</p>
                <p>Sustainability</p>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.bottomDetails}>
          <p>Copyright © 2024 ÖYE PACKAGING</p>
          <nav className={classes.navbar}>
            <span>PRIVACY POLICY</span>
            <span>COOKIES</span>
            <span>TERMS & CONDITION</span>
          </nav>
          <ul className={classes.socialIconWrapper}>
            {socialMediaIcon?.map((element) => (
              <li key={element?.id} className={classes.iconBox}>
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
