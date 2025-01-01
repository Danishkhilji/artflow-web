
import React, { useRef } from "react";
import classes from "./Banner.module.css";
import clsx from "clsx";
import { Button } from "primereact/button";
import PropTypes from "prop-types";
import { useTransform, useScroll, useSpring, motion } from "framer-motion";
import { bg1 } from "../../constant";
import CommonContainer from "../CommonContainer";

const Banner = React.forwardRef(
  ({ className, title, ctaTitle, onClick, uniqueKey }, ref) => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
      target: container,
      offset: ["start end", "end start"],
    });

    // Scale effect for the background image
    const rawScale = useTransform(scrollYProgress, [0, 0.35, 1.25], [1, 1.25, 1]);
    const scale = useSpring(rawScale, {
      stiffness: 100,
      damping: 20,
      mass: 1,
    });

    // Clamp the scale to a minimum of 1
    scale.onChange((value) => {
      if (value < 1) {
        scale.set(1); // Reset the scale to 1 if it goes below
      }
    });

    return (
      <section
        className={clsx(classes.wrapper, className)}
        key={uniqueKey}
        ref={ref}
      >
        <CommonContainer className={clsx(classes.content, classes.sticky)}>
          <div ref={container} className={classes.el}>
            {/* Background Image with scale effect */}
            <motion.div
              style={{ scale }}
              className={classes.imageContainer}
              transition={{
                type: "spring",
                stiffness: 80,
                damping: 15,
                mass: 1,
                restDelta: 0.001,
                delay: 0.4,
              }}
            >
              <img src={bg1} alt="Banner background" />
            </motion.div>

            {/* Content stays fixed */}
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
