import PropTypes from "prop-types";

import { Modal } from "react-bootstrap";
import classes from "./ModalSkeleton.module.css";

const ModalSkeleton = ({
  children,
  show,
  title,

  setShow,

  gapBetweenHeadAndBody = "20px",
  borderRadius = "20px",
  width = "100%",
  padding,
  position = "centered",
}) => {
  const isCentered = position === "centered";

  return (
    <>
      <style>{`
        .modal-content {
          overflow: visible !important;
          width: 100%;
          max-width: ${width};
          margin: auto;
          border-radius: ${borderRadius};
          overflow: hidden;
          padding: ${padding};
          gap: ${gapBetweenHeadAndBody};
        }
        .modal-header {
          flex-direction: row;
          border-bottom: none;
          padding: 0px;
        }
        .modal-body {
          width: 100%;
          padding: 0px;
        }
      `}</style>
      <Modal show={show} onHide={setShow} centered={isCentered}>
        <Modal.Header>
          <div className={[classes.headerDiv].join(" ")}>
            <h2 className={[classes.headingText].join(" ")}>{title}</h2>
          </div>
        </Modal.Header>
        <Modal.Body>
          <div className={classes.content}>{children}</div>
        </Modal.Body>
      </Modal>
    </>
  );
};

ModalSkeleton.propTypes = {
  // Required props
  children: PropTypes.node.isRequired,
  show: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  setShow: PropTypes.func.isRequired,

  // Optional props with default values
  subTitle: PropTypes.string,
  onConfirm: PropTypes.func,
  isApiCall: PropTypes.bool,
  confirmText: PropTypes.string,
  gapBetweenHeadAndBody: PropTypes.string,
  borderRadius: PropTypes.string,
  width: PropTypes.string,
  padding: PropTypes.string,
  position: PropTypes.oneOf(["centered", "top"]), // Assuming these are the only valid positions
  isCancel: PropTypes.bool,
};

ModalSkeleton.defaultProps = {
  subTitle: "",
  gapBetweenHeadAndBody: "20px",
  borderRadius: "20px",
  width: "100%",
  position: "centered",
  isCancel: true,
};

export default ModalSkeleton;
