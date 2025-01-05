import { useState, useEffect } from "react";
import { shortAboutUs } from "../../data";
import { useMobileViewHook } from "../../hooks/useMobileViewHook";
import AboutItem from "./AboutItem";
import { Row, Col } from "react-bootstrap";
import classes from "./ShortAboutUs.module.css";
import clsx from "clsx";

const animationEffects = ["scaleEffect", "slideEffect", "rotateEffect"];

export default function ShortAboutUs() {
  const [activeTab, setActiveTab] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [currentImage, setCurrentImage] = useState(shortAboutUs[0]);
  const [animationKey, setAnimationKey] = useState(0);

  useMobileViewHook(setIsMobile, 767);

  useEffect(() => {
    if (activeTab !== shortAboutUs.indexOf(currentImage)) {
      setAnimationKey((prevKey) => prevKey + 1);

      const imageTimer = setTimeout(() => {
        setCurrentImage(shortAboutUs[activeTab]);
      }, 300);

      return () => clearTimeout(imageTimer);
    }
  }, [activeTab]);

  return (
    <div className={classes.wrapper}>
      <Row>
        <Col md={7} sm={12} className="pe-md-0">
          <div className={classes.accordionsTab}>
            <AboutItem activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>
        </Col>
        {!isMobile && (
          <Col sm={5}>
            <div className={classes.imgWrapper}>
              <div
                key={animationKey} // Force re-render for animation
                className={clsx(
                  classes.sequentialCircleFrame,
                  classes.animate,
                  classes[animationEffects[activeTab % animationEffects.length]]
                )}
              >
                <span className={classes.firstCircle}>
                  <img
                    src={currentImage?.circle}
                    alt="circle"
                    className="img-fluid"
                  />
                </span>
                <span className={classes.secondCircle}></span>
                <span className={classes.thirdCircle}></span>
              </div>
              <div className={classes.imgContainer}>
                <img
                  className="img-fluid"
                  src={currentImage.img}
                  alt={currentImage.title}
                />
              </div>
            </div>
          </Col>
        )}
      </Row>
    </div>
  );
}
