import clsx from "clsx";
import { Dialog } from "primereact/dialog";
import PropTypes from "prop-types";
import { useEffect } from "react";
import classes from "./ModalSkeleton.module.css";
export default function ModalSkeleton({ children, show, setShow, className }) {
  useEffect(() => {
    if (show) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }

    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [show]);
  return (
    <>
      <style>
        {`
        .p-dialog .p-dialog-header {
        border-top-right-radius: 20px;
        border-top-left-radius: 20px;
        }
        `}
      </style>

      <Dialog
        className={clsx(className, classes.modalSkeleton)}
        header=""
        visible={show}
        onHide={() => {
          if (!show) return;
          setShow(false);
        }}
      >
        {children}
      </Dialog>
    </>
  );
}

ModalSkeleton.propTypes = {
  children: PropTypes.node,
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func.isRequired,
  className: PropTypes.string,
};

ModalSkeleton.defaultProps = {
  children: null,
  className: "",
};
