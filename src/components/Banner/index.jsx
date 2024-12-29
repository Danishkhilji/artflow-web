import { useRef } from "react";
import classes from "./Banner.module.css";
import clsx from "clsx";
import { Button } from "primereact/button";
import PropTypes from "prop-types";
import { useTransform, useScroll, motion } from "framer-motion";
import { bg1 } from "../../constant";
import CommonContainer from "../CommonContainer";

const Banner = ({ className, title, ctaTitle, onClick, uniqueKey }) => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 2]);

  return (
    <section
      className={clsx(classes.wrapper, className)} // Apply external className
      key={uniqueKey} // Ensure that each instance gets a unique key to remount
    >
      <CommonContainer className={clsx(classes.content, classes.sticky)}>
        <div ref={container} className={classes.el}>
          <motion.div
            style={{ scale: scale }}
            className={classes.imageContainer}
          >
            <img src={bg1} alt="" />
            <div className={classes.mainContent}>
              <h2 className={clsx("semiBold-heading", classes.title)}>
                {title}
              </h2>
              <Button
                className={clsx("transparent-btn", classes.cta)}
                onClick={() => {
                  onClick();
                }}
                label={ctaTitle}
              />
            </div>
          </motion.div>
        </div>
      </CommonContainer>
    </section>
  );
};

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
