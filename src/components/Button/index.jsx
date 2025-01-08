import clsx from "clsx";
import PropTypes from "prop-types";
import { Button as BootstrapButton } from "react-bootstrap";
import classes from "./Button.module.css";
const Button = ({ label, className, variant, ...rest }) => {
  return (
    <BootstrapButton
      {...rest}
      className={clsx(className, classes.btn, {
        [classes.primary]: variant === "primary",
        [classes.secondary]: variant === "secondary",
      })}
    >
      {label}
    </BootstrapButton>
  );
};

// Prop Types Validation
Button.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  variant: PropTypes.string,
};

// Default Props
Button.defaultProps = {
  className: "",
  variant: "primary",
};

export default Button;
