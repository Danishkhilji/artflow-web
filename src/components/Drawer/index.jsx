import clsx from "clsx";
import PropTypes from "prop-types";
import Drawer from "react-modern-drawer";
import classes from "./Drawer.module.css";

const DrawerSkeleton = ({
  show,
  setShow,
  direction,
  size,
  children,
  parentClass,
  className,
}) => {
  return (
    <Drawer
      open={show}
      onClose={setShow}
      direction={direction}
      size={size}
      style={{ height: "100vh" }}
      className={clsx(classes.mainDrawer, parentClass)}
    >
      <div className={clsx(classes.wrapper, className)}>{children}</div>
    </Drawer>
  );
};

// PropTypes validation
DrawerSkeleton.propTypes = {
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func.isRequired,
  direction: PropTypes.oneOf(["left", "right", "top", "bottom"]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.node,
  parentClass: PropTypes.string,
  className: PropTypes.string,
};

// Default props
DrawerSkeleton.defaultProps = {
  direction: "right",
  size: "516px",
  children: null,
  parentClass: "",
  className: "",
};

export default DrawerSkeleton;
