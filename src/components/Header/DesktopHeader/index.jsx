import clsx from "clsx";
import { Logo } from "../../../constant";
import classes from "./DesktopHeader.module.css";
import CommonContainer from "../../CommonContainer";
import Button from "../../Button";
import { Link, useLocation } from "react-router-dom";
const DesktopHeader = () => {
  // const navigate = useNavigate();
  const pathname = useLocation().pathname
  return (
    <CommonContainer>
      <header className={classes.header}>
        <Link className={classes.logo} to="/">
          <Logo className={clsx("img-fluid")} />
        </Link>
        <nav className={classes.navbar}>
          <Link
            to="/products"
            className={clsx(
              "text-lg font-medium font-primary hover:text-primary-color transition-global",
                pathname === "/products" ? "text-primary-color" : "text-text-color"
            )}
          >
            PRODUCTS
          </Link>
          <Link
            to="/services"
            className={clsx(
              "text-lg font-medium font-primary hover:text-primary-color transition-global",
              pathname === "/services" ? "text-primary-color" : "text-text-color"
            )}
          >
            SERVICES
          </Link>
        </nav>
        <div className={classes.ctaWrapper}>
          <Button
            label="configure packagING"
            variant={"primary"}
            // onClick={() => navigate("/")}
          />
          <Button
            variant={"bgPrimary"}
            label="SIGN IN"
            // onClick={() => navigate("/")}
          />
        </div>
      </header>
    </CommonContainer>
  );
};

export default DesktopHeader;
