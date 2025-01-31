import classes from "./Footer.module.css";
import { Logo } from "../../constant";
import clsx from "clsx";
import { socialMediaIcon } from "../../data";
import CommonContainer from "../CommonContainer";
import moment from "moment-timezone";
import { Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
const Footer = () => {
  const currentYear = moment().tz("Etc/GMT-1").format("YYYY");
  const [activeProduct, setActiveProduct] = useState(
    localStorage.getItem("activeProduct")
  );
  const pathname = useLocation()?.pathname;
  const navigate = useNavigate();

  const handleProductClick = (selectedProduct) => {
    setActiveProduct(selectedProduct);
    localStorage.setItem("activeProduct", selectedProduct);
    window.dispatchEvent(new Event("localProductChange"));
  };
  useEffect(() => {
    const handleLocalChange = () => {
      setActiveProduct(localStorage.getItem("activeProduct"));
    };
    window.addEventListener("localProductChange", handleLocalChange);
    return () =>
      window.removeEventListener("localProductChange", handleLocalChange);
  }, []);
  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === "activeProduct") {
        setActiveProduct(event.newValue);
      }
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <CommonContainer>
      <footer>
        <div className={classes.row}>
          <div lg={4} xs={12} sm={12}>
            <div className={clsx(classes.logoWrapper, classes.pe30)}>
              <Link to="/">
                <Logo className={"img-fluid"} />
              </Link>
              <p className={classes.content}>
                Say farewell to ordinary packaging and delays - we&apos;ve got
                your back. Explore our diverse services and join us on an
                exciting journey!{" "}
              </p>
            </div>
          </div>

          <div lg={2} sm={3} xs={6}>
            <div className={clsx(classes.contentWrapper, classes.pl50)}>
              <h2>PACKAGING</h2>

              <div className="flex flex-col">
                <Link
                  to="/products"
                  onClick={() => handleProductClick("Flat Bottom Bags")}
                  className={clsx(
                    "text-sm font-primary font-normal leading-6 hover:text-primary-color whitespace-nowrap text-left disabled:cursor-not-allowed disabled:hover:text-text-color",
                    pathname === "/products" &&
                      activeProduct === "Flat Bottom Bags"
                      ? "text-primary-color"
                      : ""
                  )}
                >
                  Flat Bottom Bags
                </Link>
                <button
                  disabled
                  onClick={() => {
                    handleProductClick("Carton Boxes");
                    navigate("/products");
                  }}
                  className={clsx(
                    "text-sm font-primary font-normal leading-6 hover:text-primary-color whitespace-nowrap text-left disabled:cursor-not-allowed disabled:hover:text-text-color disabled",
                    pathname === "/products" && activeProduct === "Carton Boxes"
                      ? "text-primary-color"
                      : ""
                  )}
                >
                  Carton Boxes
                </button>
                <button
                  disabled
                  onClick={() => {
                    handleProductClick("Side GusSet Bags");
                    navigate("/products");
                  }}
                  className={clsx(
                    "text-sm font-primary font-normal leading-6 hover:text-primary-color whitespace-nowrap text-left disabled:cursor-not-allowed disabled:hover:text-text-color disabled",
                    pathname === "/products" &&
                      activeProduct === "Side GusSet Bags"
                      ? "text-primary-color"
                      : ""
                  )}
                >
                  Side Gusset Bags
                </button>
                <button
                  disabled
                  onClick={() => {
                    handleProductClick("Standup Bags");
                    navigate("/products");
                  }}
                  className={clsx(
                    "text-sm font-primary font-normal leading-6 hover:text-primary-color whitespace-nowrap text-left disabled:cursor-not-allowed disabled:hover:text-text-color disabled",
                    pathname === "/products" && activeProduct === "Standup Bags"
                      ? "text-primary-color"
                      : ""
                  )}
                >
                  Standup Bags
                </button>
              </div>
            </div>
          </div>

          <div
            lg={2}
            sm={3}
            xs={6}
            className={clsx(classes.fixInMob, "pr-8 custom-sm:pr-0")}
          >
            <div className={classes.contentWrapper}>
              <h2>SERVICES</h2>

              <div>
                <Link
                  className={clsx(
                    "text-sm font-primary font-normal leading-6 hover:text-primary-color",
                    pathname === "/services" ? "text-primary-color" : ""
                  )}
                  to="/services"
                >
                  Drip Bags
                </Link>
                <p className={clsx(classes.dull, "disabled")}>Brew Bags</p>
                <p className={clsx(classes.dull, "disabled")}>Capsules</p>
              </div>
            </div>
          </div>

          <div sm={3} lg={2} xs={6}>
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
          </div>
          <div
            lg={2}
            sm={3}
            xs={6}
            className={clsx(classes.mlAuto, "pr-8 custom-sm:pr-0")}
          >
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
          </div>
        </div>
        <div className={classes.bottomDetails}>
          <p className={clsx("pb-0 mb-0", classes.copyRight)}>
            Copyright © {currentYear} ÖYE PACKAGING
          </p>
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
