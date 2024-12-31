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


    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start start", "end end"],
    });

    // Apply a delay to the scale transformation
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.233]);

    return (
      <section
        className={clsx(classes.wrapper, className)}
        key={uniqueKey} // Ensure each Banner has a unique key for remounting
        ref={ref} // Forwarding the ref to the section element
      >
        <CommonContainer className={clsx(classes.content, classes.sticky)}>
          <div ref={ref} className={classes.el}>
            <motion.div
              style={{ scale }}
              className={classes.imageContainer}
              transition={{
                duration: 0.5, // Adjusts the animation duration
                delay: 0.2, // Adds delay to the animation (in seconds)
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

// Set displayName to improve debugging in DevTools
Banner.displayName = "Banner";

Banner.propTypes = {
  className: PropTypes.string, // Additional className (optional)
  title: PropTypes.string.isRequired, // Title text (required)
  ctaTitle: PropTypes.string.isRequired, // CTA button label (required)
  onClick: PropTypes.func.isRequired, // Function for button click (required)
  uniqueKey: PropTypes.string.isRequired, // Unique key to force remount
};

Banner.defaultProps = {
  className: "", // Empty by default if no className is passed
};

export default Banner;
