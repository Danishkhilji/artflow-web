import { useState, useEffect } from "react";
import { shortAboutUs } from "../../data";
import { useMobileViewHook } from "../../hooks/useMobileViewHook";
import AboutItem from "./AboutItem";
import { Row, Col } from "react-bootstrap";
import classes from "./ShortAboutUs.module.css";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
const positions = {
  smallCircle: {
    x: 130,
    y: 140,
    size: { width: 20, height: 20 },
    zIndex: 11,
  },
  middleCircle: {
    x: 85,
    y: 95,
    size: { width: 55, height: 52 },
    zIndex: 22, // Middle circle
  },
  largeCircle: {
    x: 20,
    y: 30,
    size: { width: 122, height: 120 },
    zIndex: 33,
  },
};
function ShortAboutUs() {
  const [activeTab, setActiveTab] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [currentImage, setCurrentImage] = useState(shortAboutUs[0]);

  useMobileViewHook(setIsMobile, 768);

  useEffect(() => {
    if (activeTab !== shortAboutUs.indexOf(currentImage)) {
      const timer = setTimeout(() => {
        setCurrentImage(shortAboutUs[activeTab]);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [activeTab]);

  console.log(isMobile);
  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);
  const [showThird, setShowThird] = useState(false);

  useEffect(() => {
    const resetAnimations = () => {
      // Reset the circles' visibility
      setShowFirst(false);
      setShowSecond(false);
      setShowThird(false);

      // Start by animating the image first
      setTimeout(() => {
        setShowFirst(true);
        setTimeout(() => setShowSecond(true), 150);
        setTimeout(() => setShowThird(true), 300);
      }, 300); // Delay for the image animation to complete
    };

    resetAnimations();

    return () => {
      clearTimeout();
    };
  }, [activeTab]);

  return (
    <div className={classes.wrapper}>
      <div className={clsx(classes.row,{
        [classes.gap]:currentImage.img.includes("coffee_bag")
      })}>
        <div className="pe-md-0">
          <div className={classes.accordionsTab}>
            <AboutItem activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>
        </div>
        {!isMobile && (
          <div className={clsx(classes.imgWrapper)}>
            <div className={clsx(classes.imgContainer, {})}>
              <AnimatePresence>
                <motion.div
                  className={classes.imageSection}
                  initial={{ opacity: 1, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                  style={{
                    zIndex: 2,
                    position: "relative",
                    overflow: "visible",
                  }}
                  key={currentImage.img}
                >
                  <img
                    className={clsx(
                      currentImage.img.includes("coffee_bag")
                        ? classes.coffee_bag
                        : currentImage.img.includes("3d-preview")
                        ? classes.preview3D
                        : classes.commonImage,
                      "image-transition img-fluid"
                    )}
                    src={currentImage.img}
                    alt={currentImage.title}
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            <AnimatePresence>
              {showFirst && (
                <motion.div
                  className={classes.smallCircle}
                  key="smallCircle"
                  style={{
                    ...circleStyle,
                    width: `${positions.smallCircle.size.width}px`,
                    height: `${positions.smallCircle.size.height}px`,
                    left: `${positions.smallCircle.x}px`,
                    top: `${positions.smallCircle.y}px`,
                    zIndex: positions.smallCircle.zIndex,
                  }}
                  initial={{ opacity: 1, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                  }}
                />
              )}

              {showSecond && (
                <motion.div
                  key="mediumCircle"
                  className={classes.mediumCircle}
                  style={{
                    ...circleStyle,
                    width: `${positions.middleCircle.size.width}px`,
                    height: `${positions.middleCircle.size.height}px`,
                    left: `${positions.middleCircle.x}px`,
                    top: `${positions.middleCircle.y}px`,
                    zIndex: positions.middleCircle.zIndex,
                  }}
                  initial={{ opacity: 1, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                  }}
                />
              )}

              {showThird && (
                <motion.div
                  key="largeCircle"
                  style={{
                    ...circleStyle,
                    width: `${positions.largeCircle.size.width}px`,
                    height: `${positions.largeCircle.size.height}px`,
                    left: `${positions.largeCircle.x}px`,
                    top: `${positions.largeCircle.y}px`,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: positions.largeCircle.zIndex,
                  }}
                  className={classes.bigCircle}
                  initial={{ opacity: 1, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                  }}
                >
                  <img
                    className={classes.icon}
                    src={currentImage.icon}
                    alt={currentImage.title}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  );
}

const circleStyle = {
  position: "absolute",
  backgroundColor: "white",
  border: "1px solid var(--text-color)",
  borderRadius: "50%",
};

export default ShortAboutUs;
