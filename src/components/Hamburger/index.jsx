
import PropTypes from "prop-types";
import classes from "./Hamburger.module.css";
import clsx from "clsx";

const Hamburger = ({ value, setter }) => {
  const handleClick = () => {
    setter(!value);
  };

  return (
    <button
      className={clsx(classes.button, classes.effect1, {
        [classes.active]: value,
      })}
      onClick={handleClick}
    >
      <span className={clsx({ [classes.active]: value })}></span>
    </button>
  );
};

Hamburger.propTypes = {
  value: PropTypes.bool.isRequired,
  setter: PropTypes.func.isRequired,
};

export default Hamburger;
