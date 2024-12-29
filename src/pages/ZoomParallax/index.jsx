import classes from "./ZoomParallax.module.css";
import { bg1 } from "../../constant";
const ZoomParallax = () => {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.sticky}>
          <div className={classes.el}>
            <div className={classes.imageContainer}>
              <img src={bg1} alt="bg1" />
            </div>
          </div>
        </div>
      </div>
      <div style={{ height: "100vh ", background: "black" }}></div>
    </>
  );
};

export default ZoomParallax;
