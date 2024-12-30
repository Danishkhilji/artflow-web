import { useState } from "react";
// Assuming the CSS is in this file
import classes from "./Hamburger.module.css";
import clsx from "clsx";
const Hamburger = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <button
      className={clsx(classes.effect1, {
        [classes.active]: active,
      })}
      onClick={handleClick}
    >
      <span className={clsx({ [classes.active]: active })}></span>
    </button>
  );
};

export default Hamburger;
