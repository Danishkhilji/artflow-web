import clsx from "clsx";
import PropTypes from "prop-types";
import { useState } from "react";
import {
  CoffeeBag,
  CoffeeBag2,
  designCard1,
  designCard2,
} from "../../constant";
import Button from "../Button";
import classes from "./QuickCard.module.css";
import { DesignCard2 } from "../../constant";
const QuickCard = ({ title, category, blockLink }) => {
  let buttonVariant = "primary";
  const [hover, setHover] = useState(false);
  let content = null;
  if (category === "packaging") {
    buttonVariant = "secondary";
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
          isHover={false}
          variant={buttonVariant}
          className={clsx(classes.btn)}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onClick={() => {
            window.open(blockLink, "_blank", "noopener,noreferrer");
          }}
          label="LEARN MORE"
        />
      </div>
      <div className={classes.wrapper}>{content}</div>
    </div>
  );
};
QuickCard.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.oneOf(["packaging", "services"]).isRequired,
  blockLink: PropTypes.string,
};

export default QuickCard;
