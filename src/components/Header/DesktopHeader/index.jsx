import classes from "./DesktopHeader.module.css";
import { Button } from "primereact/button";
import { Logo } from "../../../constant";
import clsx from "clsx";

const DesktopHeader = () => {
  return (
    <header className={classes.header}>
      <span className={classes.logo}>
        <Logo className={clsx("img-fluid", classes.logo)} />
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
        <Button label="SIGN IN" className="transparent-btn bg-primary" />
      </div>
    </header>
  );
};

export default DesktopHeader;
