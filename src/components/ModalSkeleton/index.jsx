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
      .modal{
      z-index:9999 !important;
      backdrop-filter: blur(10px) !important;
      }
      .modal-backdrop{
      z-index:1500 !important;
      }
        .modal-content {
          overflow: visible !important;
          width: 100%;
        
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
          .modal-dialog{
          z-index:9999!important  ;
            max-width: ${width};
            width:90%;
            
          }
        .modal-body {
          width: 100%;
          padding: 0px;
        }

        @media(max-width:576px){
         .modal-dialog{
           width:95% !important;
margin:auto;
           }
      
        }
      `}</style>
      <Modal show={show} onHide={setShow} centered={isCentered}>
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
  padding: "",
  isCancel: true,
  isCentered: true,
};

export default ModalSkeleton;