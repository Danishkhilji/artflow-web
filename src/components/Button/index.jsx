import clsx from "clsx";
import PropTypes from "prop-types";
import { Button as BootstrapButton } from "react-bootstrap";
import classes from "./Button.module.css";
const Button = ({ label, className, variant, children, isHover, ...rest }) => {
  return (
    <BootstrapButton
      {...rest}
      className={clsx(className, classes.btn, {
        [classes.isHover]: isHover,
        [classes.primary]: variant === "primary",
        [classes.secondary]: variant === "secondary",
      })}
    >
      {label || children}
    </BootstrapButton>
  );
};

// Prop Types Validation
Button.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  variant: PropTypes.string,
  children: PropTypes.node.isRequired,
  isHover: PropTypes.bool,
};

// Default Props
Button.defaultProps = {
  className: "",
  variant: "primary",
  isHover: true,
};

export default Button;
