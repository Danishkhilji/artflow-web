import { useState } from "react";
import clsx from "clsx";
import classes from "./MobileHeader.module.css";
import { Logo } from "../../../constant";
import CommonContainer from "../../CommonContainer";
import { Button } from "primereact/button";
const MobileHeader = () => {
  const [active, setActive] = useState(false);

  return (
    <>
      <style>{`
        .mobile-drawer > div {
          padding-inline: 20px;
        }
        @media (max-width: 515px) {
          .mobile-drawer {
            width: 300px !important;
          }
        }
      `}</style>

      <header
        className={clsx(classes.header, {
          [classes.menu]: active,
        })}
      >
        <CommonContainer className={classes.p0}>
          <nav className={classes.navContainer}>
            <span
              className={classes.logo}
              onClick={() => {
                window.open(
                  "https://oyepackaging.com",
                  "_blank",
                  "noopener,noreferrer"
                );
              }}
            >
              <Logo />
            </span>
            <span
              className={classes.cta}
              onClick={() => {
                setActive((prev) => !prev);
              }}
            >
              <span
                className={clsx(classes.mobileMenu, {
                  [classes.active]: active,
                })}
              >
                <span
                  className={clsx(classes.line, classes["line-top"])}
                ></span>
                <span
                  className={clsx(classes.line, classes["line-bottom"], {
                    [classes.active]: active,
                  })}
                ></span>
              </span>
            </span>
          </nav>
        </CommonContainer>
        <div className={clsx(classes.nav)}>
          <span>Product</span>
          <span>Services</span>
       

          <span
            id={classes.config}
            className={clsx("transparent-btn primary-btn", classes.config)}
          >
            Configure Packaging
          </span>
          <span
            id={classes.signIn}
            className={clsx("transparent-btn primary-btn", classes.signIn)}
          >
            SIGN IN
          </span>
        </div>
      </header>
    </>
  );
};

export default MobileHeader;
