import PropTypes from "prop-types";
import classes from "./CommonContainer.module.css";
import clsx from "clsx";

const CommonContainer = ({ children, className, ...rest }) => {
  return (
    <div className={clsx(classes.container, className)} {...rest}>
      {children}
    </div>
  );
};

CommonContainer.propTypes = {
  children: PropTypes.node.isRequired, // Validate children as React nodes (JSX, string, element, etc.)
  className: PropTypes.string.isRequired,
};

export default CommonContainer;
