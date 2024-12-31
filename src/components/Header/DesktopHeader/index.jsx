import clsx from "clsx";
import { Button } from "primereact/button";
import { Logo } from "../../../constant";
import classes from "./DesktopHeader.module.css";
import CommonContainer from "../../CommonContainer";
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
          <span>PRODUCTS</span>
          <span>SERVICES</span>
        </nav>
        <div className={classes.ctaWrapper}>
          <Button
            label="configure packagING"
            className="transparent-btn primary-btn"
          />
          {/* <Button label="SIGN IN" className="transparent-btn bg-primary" /> */}
        </div>
      </header>
    </CommonContainer>
  );
};

export default DesktopHeader;
