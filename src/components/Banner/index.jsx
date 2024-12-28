import classes from "./Banner.module.css";
import CommonContainer from "../CommonContainer";
import clsx from "clsx";
import { Button } from "primereact/button";
import PropTypes from "prop-types";
const Banner = ({ bg, className, title, ctaTitle, onClick }) => {
  return (
    <CommonContainer>
      <section
        className={clsx(classes.wrapper, className)} // Apply external className
        style={{ background: `url(${bg})` }}
      >
        <div className={classes.content}>
          <h2 className={clsx("semiBold-heading", classes.title)}>{title}</h2>
          <Button
            className={clsx("transparent-btn", classes.cta)}
            onClick={() => {
              onClick();
            }}
            label={ctaTitle}
          />
        </div>
      </section>
    </CommonContainer>
  );
};
Banner.propTypes = {
  bg: PropTypes.string.isRequired, // Background image URL (required)
  className: PropTypes.string, // Additional className (optional)
  title: PropTypes.string.isRequired, // Title text (required)
  ctaTitle: PropTypes.string.isRequired, // CTA button label (required)
  onClick: PropTypes.func.isRequired, // Function for button click (required)
};

Banner.defaultProps = {
  bg: "",
  className: "", // Empty by default if no className is passed
};

export default Banner;
