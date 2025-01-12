import PropTypes from "prop-types";
import ModalSkeleton from "../../components/ModalSkeleton";
import { Cross } from "../../constant";
import classes from "./FeatureModal.module.css";
const FeatureModal = ({ show, setShow, data }) => {
  return (
    <ModalSkeleton show={show} setShow={setShow} width="1032px">
      <header className={classes.header}>
        <Cross className={classes.closeCta} onClick={() => {
            setShow(false);
          }} />
       
      </header>
      <div className={classes.wrapper}>
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
