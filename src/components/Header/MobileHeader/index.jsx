import clsx from "clsx";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Logo } from "../../../constant";
import DrawerSkeleton from "../../Drawer";
import classes from "./MobileHeader.module.css";
import Hamburger from "../../Hamburger";
const MobileHeader = () => {
  const [showDrawer, setShowDrawer] = useState(false);

  const toggleDrawer = () => {
    setShowDrawer((current) => !current);
  };

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

      <header className={classes.header}>
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
            toggleDrawer();
          }}
        >
          <Hamburger />
          {/* <RxHamburgerMenu size={23} color="var(--primary-color)" /> */}
        </span>
      </header>
      <div className={clsx(classes.mobileWrapper)} id={"navMobileHeader"}></div>
    </>
  );
};

export default MobileHeader;
