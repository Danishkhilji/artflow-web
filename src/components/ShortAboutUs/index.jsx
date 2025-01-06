
import { useState, useEffect } from "react";
import { shortAboutUs } from "../../data";
import { useMobileViewHook } from "../../hooks/useMobileViewHook";
import AboutItem from "./AboutItem";
import { Row, Col } from "react-bootstrap";
import classes from "./ShortAboutUs.module.css";
import { FaHeart } from "react-icons/fa";
import clsx from "clsx";
import { AnimatePresence, motion } from 'framer-motion';


function ShortAboutUs() {
  const [activeTab, setActiveTab] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [currentImage, setCurrentImage] = useState(shortAboutUs[0]);

  useMobileViewHook(setIsMobile, 767);

  useEffect(() => {
    if (activeTab !== shortAboutUs.indexOf(currentImage)) {

      const timer = setTimeout(() => {
        setCurrentImage(shortAboutUs[activeTab]);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [activeTab]);

  console.log(currentImage)
  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);
  const [showThird, setShowThird] = useState(false);




  useEffect(() => {
    const resetAnimations = () => {
      setShowFirst(false);
      setShowSecond(false);
      setShowThird(false);

      setTimeout(() => {
        setShowFirst(true);
        setTimeout(() => setShowSecond(true), 100);
        setTimeout(() => setShowThird(true), 200);
      }, 100);
    };

    resetAnimations();

    return () => {
      clearTimeout();
    };
  }, [activeTab]);

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

  return (
    <div className={classes.wrapper}>
      <Row className="justify-content-between">
        <Col md={6} sm={12} className="pe-md-0">
          <div className={classes.accordionsTab}>
            <AboutItem activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>
        </Col>
        {!isMobile && (
          <Col sm={5} className={classes.imgWrapper}>

            <AnimatePresence>
              {showFirst && (
                <motion.div
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
                    delay: 0.2,
                  }}
                />
              )}

              {showSecond && (
                <motion.div
                  key="mediumCircle"
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
                    delay: 0.2,
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

                    display: showThird ? 'flex' : 'none',
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: positions.largeCircle.zIndex,
                  }}

                  initial={{ opacity: 1, scale: 0 }}
                  animate={showThird ? { opacity: 1, scale: 1 } : {}}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.2,
                  }}
                >
                  <img
                    src={currentImage.icon}
                    alt={currentImage.title}
                  // style={width}
                  />

                </motion.div>
              )}
            </AnimatePresence>


            <div
              className={clsx(classes.imgContainer, {
              })}
            >
              <div>

                <AnimatePresence>
                  <motion.div
                    className={classes.imageSection}
                    initial={{ opacity: 1, scale: 0.1, x: "0%" }}
                    animate={{
                      opacity: 1,
                      scale: [0.1, 1],
                    }}
                    transition={{
                      duration: 0.2,
                      times: [0, 1],
                      ease: "easeInOut",
                    }}
                    style={{
                      zIndex: 2,
                      position: "relative",
                      overflow: "visible",
                    }}
                    key={currentImage.img}
                  >
                    {currentImage.img.includes("coffee_bag") ? (
                      <img
                        className={clsx(classes.coffee_bag, "image-transition img-fluid")}
                        src={currentImage.img}
                        alt={currentImage.title}
                      />
                    ) : currentImage.img.includes("3d-preview") ? (
                      <img
                        className={clsx(classes.preview3D, "image-transition img-fluid")}
                        src={currentImage.img}
                        alt={currentImage.title}
                      />
                    ) : (
                      <img
                        className={clsx(classes.commonImage, "image-transition img-fluid")}
                        src={currentImage.img}
                        alt={currentImage.title}
                      />
                    )}

                  </motion.div>

                </AnimatePresence>
              </div>
            </div>
          </Col>
        )}
      </Row>
    </div >
  );
}

const circleStyle = {
  position: "absolute",
  backgroundColor: "white",
  border: "2px solid black",
  borderRadius: "50%",
};

export default ShortAboutUs;
