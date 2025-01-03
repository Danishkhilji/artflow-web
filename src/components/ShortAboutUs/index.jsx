import { useState, useEffect } from "react";
import { shortAboutUs } from "../../data";
import { useMobileViewHook } from "../../hooks/useMobileViewHook";
import AboutItem from "./AboutItem";
import { Row, Col } from "react-bootstrap";
import classes from "./ShortAboutUs.module.css";
import clsx from "clsx";

export default function ShortAboutUs() {
  const [activeTab, setActiveTab] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [currentImage, setCurrentImage] = useState(shortAboutUs[0]);
  const [nextImage, setNextImage] = useState(null);
  const [isSliding, setIsSliding] = useState(false);

  useMobileViewHook(setIsMobile, 767);

  useEffect(() => {
    if (activeTab !== shortAboutUs.indexOf(currentImage)) {
      setNextImage(shortAboutUs[activeTab]);
      setIsSliding(true);

      // After animation ends, switch images and reset sliding
      const timer = setTimeout(() => {
        setCurrentImage(shortAboutUs[activeTab]);
        setNextImage(null); // Remove next image to avoid overlap
        setIsSliding(false);
      }, 500); // Match the CSS duration

      return () => clearTimeout(timer);
    }
  }, [activeTab]);

  return (
    <div className={classes.wrapper}>
      <Row>
        <Col md={7} sm={12}>
          <div className={classes.accordionsTab}>
            <AboutItem activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>
        </Col>
        {!isMobile && (
          <Col sm={5} className={classes.imgWrapper}>
            {nextImage && (
              <div
                className={clsx(classes.imgContainer, {
                  [classes.slideInNext]: isSliding,
                })}
              >
                <img
                  className="img-fluid"
                  src={nextImage.img}
                  alt={nextImage.title}
                />
              </div>
            )}
            <div
              className={clsx(classes.imgContainer, {
                [classes.slideOut]: isSliding,
                [classes.slideInCurrent]: !isSliding,
              })}
            >
              <img
                className="img-fluid"
                src={currentImage.img}
                alt={currentImage.title}
              />
            </div>
          </Col>
        )}
      </Row>
    </div>
  );
}
