import classes from "./QuickCard.module.css";
import { Button } from "primereact/button";
import { useState } from "react";
import PropTypes from "prop-types";
// import { ReactComponent as CoffeeBags } from "../../assets/images/coffee_bag.svg";
import {
  CoffeeBag,
  CoffeeBag2,
  // DesignCard,
  // DesignCard2,
  designCard1,
  designCard2,
  // designPattern2,
} from "../../constant";
import clsx from "clsx";
// CoffeeBag, CoffeeBag2,
//DesignCard, DesignCard2
const QuickCard = ({ title, category }) => {
  const [hover, setHover] = useState(false);
  let content = null;
  console.log("Hover", hover);
  if (category === "packaging") {
    content = (
      <>
        {" "}
        <CoffeeBag
          className={clsx("img-fluid", classes.firstSvg, {
            [classes.scaleCoffeeBag1]: hover,
          })}
        />
        <CoffeeBag2
          className={clsx("img-fluid", classes.secondSvg, {
            [classes.scaleCoffeeBag2]: hover,
          })}
        />
      </>
    );
  } else {
    content = (
      <>
        {/* <DesignCard className={clsx("img-fluid", classes.designPattern1)} />
        <DesignCard2
          className={clsx("img-fluid", classes.designPattern2)}
        /> */}

        <img
          src={designCard1}
          alt="design card1"
          className={clsx("img-fluid", classes.designPattern1, {
            [classes.scaleCoffeeBag1]: hover,
          })}
        />
        <img
          src={designCard2}
          alt="design card2"
          className={clsx("img-fluid", classes.designPattern2, {
            [classes.scaleCoffeeBag2]: hover,
          })}
        />
        {/* <img
          src={designPattern2}
          alt="design pattern"
          className={clsx("img-fluid", classes.designPattern2)}
        /> */}
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
        {title}
      </h1>
      <div className={classes.ctaWrapper}>
        <Button
          className={clsx(
            "transparent-btn",
            {
              [classes.servicesBtn]: category === "services",
            },
            classes.btn
          )}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
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
  title: PropTypes.string.isRequired,
  category: PropTypes.oneOf(["packaging", "services"]).isRequired,
};

export default QuickCard;
