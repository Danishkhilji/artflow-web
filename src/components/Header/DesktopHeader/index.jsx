import clsx from "clsx";
import { Logo } from "../../../constant";
import classes from "./DesktopHeader.module.css";
import CommonContainer from "../../CommonContainer";
import Button from "../../Button";
import { Link } from "react-router-dom";
const DesktopHeader = () => {
  // const navigate = useNavigate();
  return (
    <CommonContainer>
      <header className={classes.header}>
        <Link className={classes.logo} to="/">
          <Logo className={clsx("img-fluid")} />
        </Link>
        <nav className={classes.navbar}>
          <Link
            to="/products"
            className="text-lg font-medium font-primary text-text-color"
          >
            PRODUCTS
          </Link>
          <Link
            to="/services"
            className="text-lg font-medium font-primary text-text-color"
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
