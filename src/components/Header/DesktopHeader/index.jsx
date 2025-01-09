import clsx from "clsx";
import { Logo } from "../../../constant";
import classes from "./DesktopHeader.module.css";
import CommonContainer from "../../CommonContainer";
import Button from "../../Button";
const DesktopHeader = () => {
  // const navigate = useNavigate();
  return (
    <CommonContainer>
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
          <Logo className={clsx("img-fluid")} />
        </span>
        <nav className={classes.navbar}>
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
        </nav>
        <div className={classes.ctaWrapper}>
          <Button
            label="configure packagING"
            variant={"primary"}
            onClick={() => {
              window.open(
                "https://oyepackaging.com/configurator",
                "_blank",
                "noopener,noreferrer"
              );
            }}
          />
          <Button label="SIGN IN" variant={"primary"} />
        </div>
      </header>
    </CommonContainer>
  );
};

export default DesktopHeader;
