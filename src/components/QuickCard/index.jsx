import classes from "./QuickCard.module.css";
import { Button } from "primereact/button";
import PropTypes from "prop-types";
// import { ReactComponent as CoffeeBags } from "../../assets/images/coffee_bag.svg";
import { CoffeeBag, CoffeeBag2, DesignCard, DesignCard2 } from "../../constant";
import clsx from "clsx";
// CoffeeBag, CoffeeBag2,
//DesignCard, DesignCard2
const QuickCard = ({ category }) => {
  let content = null;
  if (category === "packaging") {
    content = (
      <>
        {" "}
        <CoffeeBag className={clsx("img-fluid", classes.firstSvg)} />
        <CoffeeBag2 className={clsx("img-fluid", classes.secondSvg)} />
      </>
    );
  } else {
    content = (
      <>
        <DesignCard className={clsx("img-fluid", classes.designPattern1)} />
        <DesignCard2
          className={clsx("img-fluid", classes.designPattern2)}
        />{" "}
      </>
    );
  }
  return (
    <div
      className={clsx(classes.container, {
        [classes.packaging]: category === "packaging",
        [classes.services]: category === "services",
      })}
    >
      <h1
        className={clsx(
          "semiBold-heading",
          clsx(classes.heading, {
            [classes.services]: category === "services",
          })
        )}
      >
        Coffee Packaging
      </h1>
      <div className={classes.ctaWrapper}>
        <Button
          className={clsx("transparent-btn", {
            [classes.servicesBtn]: category === "services",
          })}
          label="LEARN MORE"
        />
      </div>
      <div className={classes.wrapper}>
        {/* <img
          src={coffeeBag3}
          alt="pouch image"
          className={clsx(classes.firstSvg, "img-fluid")}
        /> */}
        {/* <img src={coffeeBag4} alt="pouch image" /> */}
        {content}
        {/**/}
      </div>
    </div>
  );
};
QuickCard.propTypes = {
  category: PropTypes.oneOf(["packaging", "services"]).isRequired,
};
export default QuickCard;
