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
import { arrowLeftImage, Logo, menuClose, menuIcon } from "../../../constant";
import Button from "../../Button";
import CommonContainer from "../../CommonContainer";
import classes from "./MobileHeader.module.css";
import { Link } from "react-router-dom";
import ProductTabs from "./ProductTabs";
import ServicesTabs from "./ServicesTabs";
import useMobileHeader from "../../../hooks/useMobileHeader";

const MobileHeader = ({ otherClasses }) => {
  const { toggleTab, setToggleTab, active, setActive, activeProduct, handleProductClick } = useMobileHeader();

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
        className={clsx(
          classes.header,
          { [classes.menu]: active },
          otherClasses
        )}
      >
        <CommonContainer className={classes.p0}>
          <nav className={classes.navContainer}>
            {toggleTab !== "" ? (
              <button
                onClick={() => setToggleTab("")}
                className="uppercase z-[1800] h-[57px] flex items-center gap-2.5 text-text-color font-primary font-medium text-sm "
              >
                <img
                  src={arrowLeftImage}
                  alt="arrow-left"
                  className="w-6 h-6"
                />
                Menu
              </button>
            ) : (
              <Link className={classes.logo} to="/">
                <Logo />
              </Link>
            )}
            <span
              className={classes.cta}
              onClick={() => {
                setActive((prev) => !prev);
                setToggleTab("");
              }}
              role="button"
              tabIndex="-1"
            >
              <span
                className={clsx(classes.mobileMenu, {
                  [classes.active]: active,
                })}
                role="button"
                tabIndex="-1"
              >
                <img
                  src={active ? menuClose : menuIcon}
                  alt="menu"
                  className={clsx(classes.icon, {
                    [classes.closeIcon]: active,
                    [classes.menuIcon]: !active,
                  })}
                  onContextMenu={(e) => e.preventDefault()}
                />
              </span>
            </span>
          </nav>
        </CommonContainer>

        <div className={clsx(classes.nav, { [classes.navActive]: active })}>
          <div
            className={clsx(
              "flex-col flex-1",
              toggleTab !== "" ? "hidden" : "flex"
            )}
          >
            <button
              onClick={() => setToggleTab("product")}
              className="px-6 text-left rounded-xl !py-5 hover:text-primary-color text-lg font-primary hover:font-semibold text-text-color font-medium hover:shadow-tabs-active-shadow transition-global"
            >
              PRODUCTS
            </button>
            <button
              onClick={() => setToggleTab("service")}
              className="mt-2.5 px-6 text-left rounded-xl !py-5 hover:text-primary-color text-lg font-primary hover:font-semibold text-text-color font-medium hover:shadow-tabs-active-shadow transition-global"
            >
              SERVICES
            </button>
            <div className={classes.downActions}>
              <Button variant={"primary"}>Configure Packaging</Button>
              <Button variant={"bgPrimary"}>SIGN IN</Button>
            </div>
          </div>

          {/* ✅ Ensure the clicked product is set correctly */}
          {toggleTab === "product" && (
            <ProductTabs
              onClick={handleProductClick}
              activeLink={activeProduct}
            />
          )}

          {toggleTab === "service" && (
            <ServicesTabs
              onClick={() => {
                setActive((prev) => !prev);
                setToggleTab("");
              }}
            />
          )}
        </div>
      </header>
    </>
  );
};

export default MobileHeader;
