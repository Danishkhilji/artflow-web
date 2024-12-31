import React, { useRef } from "react";
import classes from "./Banner.module.css";
import clsx from "clsx";
import { Button } from "primereact/button";
import PropTypes from "prop-types";
import { useTransform, useScroll, motion } from "framer-motion";
import { bg1 } from "../../constant";
import CommonContainer from "../CommonContainer";

const Banner = React.forwardRef(
  ({ className, title, ctaTitle, onClick, uniqueKey }, ref) => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
      target: container,
      offset: ["start end", "end start"],
    });

    const scale = useTransform(
      scrollYProgress,
      [0, 0.5, 1], // Scroll progress
      [1, 1.4, 1] // Start default, grow slightly, return to default
    );

    return (
      <section
        className={clsx(classes.wrapper, className)}
        key={uniqueKey}
        ref={ref}
      >
        <CommonContainer className={clsx(classes.content, classes.sticky)}>
          <div ref={container} className={classes.el}>
            <motion.div
              style={{ scale }}
              className={classes.imageContainer}
              transition={{
                type: "spring",
                stiffness: 80, // Lower stiffness for smoother spring
                damping: 15, // Higher damping to reduce bounce
                mass: 1, // Normal mass for natural movement
                restDelta: 0.001, // Ensures animation comes to a smooth stop
                delay: 0.4, // Subtle entrance delay
              }}
            >
              <img src={bg1} alt="Banner background" />
              <div className={classes.mainContent}>
                <h2 className={clsx("semiBold-heading", classes.title)}>
                  {title}
                </h2>
                <Button
                  className={clsx("transparent-btn", classes.cta)}
                  onClick={onClick}
                  label={ctaTitle}
                />
              </div>
            </motion.div>
          </div>
        </CommonContainer>
      </section>
    );
  }
);

Banner.displayName = "Banner";

Banner.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  ctaTitle: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  uniqueKey: PropTypes.string.isRequired,
};

Banner.defaultProps = {
  className: "",
};

export default Banner;
