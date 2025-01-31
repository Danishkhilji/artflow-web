import PropTypes from "prop-types";
import classes from "./ReviewCard.module.css";
import clsx from "clsx";

const ReviewCard = ({ data }) => {                
  return (
    <div className={classes.wrapper}>
      <div className={classes.imgWrapper}>
        <img
          src={data?.img}
          alt={data?.name || "Review Image"}
          className={clsx(classes.img)}
        />
      </div>
      <div className={classes.content}>
        <div>
          <p>
            &quot;Öye is a perfect fit for us: high quality products,
            sustainable and uncomplicated, and excellent customer service 👌
            &quot;
          </p>
          <div className={classes.detailWrapper}>
            <span
              className={clsx(classes.circle, {
                [classes.bgWhite]: !data?.name?.toLowerCase()?.includes("zero"),
              })}
            >
              <img src={data?.logo} alt="logo" className={clsx("img-fluid")} />
            </span>
            <div className={classes.generalInfo}>
              <h2>{data?.name || "Anonymous"}</h2>
              <p>{data?.short || "Customer"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// PropTypes Validation
ReviewCard.propTypes = {
  data: PropTypes.shape({
    img: PropTypes.string.isRequired, // Ensure img is required and a string
    name: PropTypes.string, // Optional string for name
    short: PropTypes.string, // Optional string for role
    logo: PropTypes.string,
  }).isRequired, // data object itself is required
};

export default ReviewCard;
