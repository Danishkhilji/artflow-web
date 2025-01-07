import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import { Button } from "primereact/button";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Accordion } from "react-bootstrap";
import { shortAboutUs } from "../../../data";
import { redirectTo } from "../../../helpers";
import { useMobileViewHook } from "../../../hooks/useMobileViewHook";
import classes from "./AboutItem.module.css";

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

const AboutItem = ({ activeTab, setActiveTab }) => {
  const [isMobile, setIsMobile] = useState(false);

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
  useMobileViewHook(setIsMobile, 767);
  return (
    <div className={classes.aboutContainer}>
      <Accordion
        activeKey={activeTab.toString()}
        alwaysOpen={true}
        onSelect={(eventKey) => {
          if (eventKey !== null) {
            setActiveTab(parseInt(eventKey));
          }
        }}
      >
        {shortAboutUs?.map((element, index) => (
          <div key={element.id}>
            <Accordion.Item
              eventKey={index.toString()}
              className={classes.accordionItem}
            >
              <Accordion.Header
                onClick={(e) => {
                  if (activeTab === index) {
                    e.preventDefault();
                    e.stopPropagation();
                  }
                }}
              >
                {element?.title}
              </Accordion.Header>
              <Accordion.Body>
                <div className={classes.bg}>
                  <p className={clsx(classes.description)}>
                    {element.description}
                  </p>
                  <Button
                    onClick={() => {
                      element?.link && redirectTo(element?.link);
                    }}
                    label={element.cta}
                    className={clsx("transparent-btn primary-btn", classes.cta)}
                  />
                  {/* {isMobile && (
                    <div className={classes.imageWrapper}>
                      {shortAboutUs[activeTab] && (
                        <img
                          className="img-fluid"
                          src={shortAboutUs[activeTab].img}
                          alt={shortAboutUs[activeTab].title}
                        />
                      )}
                    </div>
                  )} */}
                  {isMobile && (
                    <div className={classes.imgWrapper}>
                      <div className={clsx(classes.imgContainer, {})}>
                        <AnimatePresence mode="wait">
                          {activeTab === index && (
                            <motion.div
                              className={classes.imageSection}
                              initial={{ opacity: 1, scale: 0.5 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.5 }}
                              transition={{
                                duration: 0.5,
                                ease: "easeInOut",
                              }}
                              style={{
                                zIndex: 2,
                                position: "relative",
                                overflow: "visible",
                              }}
                              key={element.img}
                            >
                              <img
                                className={clsx(
                                  "image-transition img-fluid",
                                  classes.img,
                                  {
                                    [classes.coffee_bag]: [0].includes(index),
                                    [classes.preview3D]: 2 == index,
                                  }
                                )}
                                src={element.img}
                                alt={element.title}
                              />
                            </motion.div>
                          )}
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
                              src={element.icon}
                              alt={element.title}
                            />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )}
                </div>
              </Accordion.Body>
            </Accordion.Item>

            {index < shortAboutUs.length - 1 && (
              <div className={classes.divider}></div>
            )}
          </div>
        ))}
      </Accordion>
    </div>
  );
};

AboutItem.propTypes = {
  activeTab: PropTypes.number.isRequired,
  setActiveTab: PropTypes.func.isRequired,
};
const circleStyle = {
  position: "absolute",
  backgroundColor: "white",
  border: "2px solid black",
  borderRadius: "50%",
};

export default AboutItem;
