import clsx from "clsx";
import { Dialog } from "primereact/dialog";
import PropTypes from "prop-types";
import { useEffect } from "react";
import classes from "./ModalSkeleton.module.css";

export default function ModalSkeleton({ children, show, setShow, className }) {
  useEffect(() => {
    // Disable body scroll when modal is open
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Cleanup on component unmount or when modal is closed
    return () => {
      document.body.style.overflow = "";
    };
  }, [show]);

  return (
    <>
      <style>
        {`
       


.p-dialog-content::-webkit-scrollbar {
  display: none; /* Hides scrollbar in Webkit browsers */
}

/* For Firefox (since Firefox has its own scrollbar styling) */
.p-dialog-content{
  scrollbar-width: none; /* Hides the scrollbar in Firefox */
}
.p-dialog-content:last-of-type {
border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
}
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
