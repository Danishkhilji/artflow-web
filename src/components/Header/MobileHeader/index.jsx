// import { useState } from "react";
// import clsx from "clsx";
// import classes from "./MobileHeader.module.css";
// import { Logo } from "../../../constant";
// import CommonContainer from "../../CommonContainer";
// import { Button } from "primereact/button";
// import { menuIcon, menuClose } from "../../../constant";

// const MobileHeader = () => {
//   const [active, setActive] = useState(false);

//   return (
//     <>
//       <style>{`
//         .mobile-drawer > div {
//           padding-inline: 20px;
//         }
//         @media (max-width: 515px) {
//           .mobile-drawer {
//             width: 300px !important;
//           }
//         }
//       `}</style>

//       <header
//         className={clsx(classes.header, {
//           [classes.menu]: active,
//         })}
//       >
//         <CommonContainer className={classes.p0}>
//           <nav className={classes.navContainer}>
//             <span
//               className={classes.logo}
//               onClick={() => {
//                 window.open(
//                   "https://oyepackaging.com",
//                   "_blank",
//                   "noopener,noreferrer"
//                 );
//               }}
//             >
//               <Logo />
//             </span>
//             <span
//               className={classes.cta}
//               onClick={() => {
//                 setActive((prev) => !prev);
//               }}
//             >
//               <span
//                 className={clsx(classes.mobileMenu, {
//                   [classes.active]: active,
//                 })}
//               >
//                 <img
//                   src={active ? menuClose : menuIcon} // Toggle between close and menu icons
//                   alt="menu"
//                   className={clsx(classes.icon, { [classes.closeIcon]: active, [classes.menuIcon]: !active })}
//                 />
//               </span>
//             </span>
//           </nav>
//         </CommonContainer>
//         <div className={clsx(classes.nav)} style={{ display: active ? "flex" : "none" }}>
//           <span>Product</span>
//           <span>Services</span>
//           <span
//             id={classes.config}
//             className={clsx("transparent-btn primary-btn", classes.config)}
//           >
//             Configure Packaging
//           </span>
//           <span
//             id={classes.signIn}
//             className={clsx("transparent-btn primary-btn", classes.signIn)}
//           >
//             SIGN IN
//           </span>
//         </div>
//       </header>
//     </>
//   );
// };

// export default MobileHeader;

import clsx from "clsx";
import { useState } from "react";
import { Logo, menuClose, menuIcon } from "../../../constant";
import Button from "../../Button";
import CommonContainer from "../../CommonContainer";
import classes from "./MobileHeader.module.css";

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
              role="button" /* Mark span as a button for accessibility */
              tabIndex="-1" /* Disable focus on the span */
            >
              <span
                className={clsx(classes.mobileMenu, {
                  [classes.active]: active,
                })}
                role="button" /* Ensure it's treated as a button */
                tabIndex="-1" /* Disable focus on the span */
              >
                <img
                  src={active ? menuClose : menuIcon}
                  alt="menu"
                  className={clsx(classes.icon, {
                    [classes.closeIcon]: active,
                    [classes.menuIcon]: !active,
                  })}
                  onContextMenu={(e) => e.preventDefault()} // Prevent right-click menu
                />
              </span>
            </span>
          </nav>
        </CommonContainer>

        <div className={clsx(classes.nav, { [classes.navActive]: active })}>
          <span
            onClick={() => {
              window.open(
                "https://oyepackaging.com/products",
                "_blank",
                "noopener,noreferrer"
              );
            }}
          >
            PRODUCTS
          </span>
          <span
            onClick={() => {
              window.open(
                "https://oyepackaging.com/services",
                "_blank",
                "noopener,noreferrer"
              );
            }}
          >
            SERVICES
          </span>
          <div className={classes.downActions}>
            <Button
              id={classes.config}
              variant={"primary"}
              className={clsx(classes.config)}
              onClick={() => {
                window.open(
                  "https://oyepackaging.com/configurator",
                  "_blank",
                  "noopener,noreferrer"
                );
              }}
            >
              Configure Packaging
            </Button>
            <Button id={classes.signIn} variant={"primary"}>
              SIGN IN
            </Button>
          </div>
        </div>
      </header>
    </>
  );
};

export default MobileHeader;
