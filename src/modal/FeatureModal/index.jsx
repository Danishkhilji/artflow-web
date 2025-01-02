import PropTypes from "prop-types";
import ModalSkeleton from "../../components/ModalSkeleton";
import classes from "./FeatureModal.module.css";
const FeatureModal = ({ show, setShow, data }) => {
  return (
    <ModalSkeleton show={show} setShow={setShow}>
      <div className={classes.wrapper}>
        {/* <header className={classes.header}>
          <span className={classes.closeCta}>
            <RxCross2 color="#fff" size={14} />
          </span>
        </header> */}

        <h3 className={classes.title}>{data?.mainTitle}</h3>

        <div className={classes.content}>
          <div className={classes.iconWrapper}>{data?.icon}</div>
          <h2 className={classes.subTitle}>{data?.fullTitle}</h2>
          <p className={classes.text}>{data?.fullDescription}</p>
        </div>
      </div>
    </ModalSkeleton>
  );
};

FeatureModal.propTypes = {
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func.isRequired,
  data: PropTypes.shape({}),
};

FeatureModal.defaultProps = {
  data: null,
};

export default FeatureModal;
