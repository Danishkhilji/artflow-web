import { useState } from "react";
import clsx from "clsx";
import classes from "./MobileHeader.module.css";
import { Logo } from "../../../constant";
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
              <span className={clsx(classes.line, classes["line-top"])}></span>
              <span
                className={clsx(classes.line, classes["line-bottom"], {
                  [classes.active]: active,
                })}
              ></span>
            </span>
          </span>
        </nav>
        <div className={clsx(classes.nav)}>
          <h2>Product</h2>
          <h2>Services</h2>
          <h2>About</h2>
        </div>
      </header>
    </>
  );
};

export default MobileHeader;
