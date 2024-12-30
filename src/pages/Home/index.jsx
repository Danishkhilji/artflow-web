import clsx from "clsx";
import { useState, useEffect } from "react";
import AppleSlider from "../../components/AppleSlider";
import Banner from "../../components/Banner";
import CommonContainer from "../../components/CommonContainer";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import QuickCard from "../../components/QuickCard";
import ReviewSection from "../../components/ReviewSection";
import ShortAboutUs from "../../components/ShortAboutUs";
import { bg1, heroBg, banner1_mobile } from "../../constant";
import classes from "./Home.module.css";
import { useMobileViewHook } from "../../hooks/useMobileViewHook";
import { redirectTo } from "../../helpers";
import { motion } from "framer-motion";
const Home = () => {
  const [expanded, setExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  useMobileViewHook(setIsMobile, 500);
  console.log("isMobile", isMobile);
  useEffect(() => {
    setTimeout(() => setExpanded(true), 200); // Delay for smoother effect
  }, []);
  return (
    <main className={classes.wrapper}>
      <>
        <Header />
        <div className={classes.innerWrapper}>
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: expanded ? [0, 0.5, 0.5, 1] : 0,
              opacity: expanded ? [0, 1, 1, 1] : 0,
            }}
            transition={{
              duration: 1.5,
              times: [0, 0.3, 0.45, 1],
              ease: "easeInOut",
            }}
            className={classes.expandWrapper}
            style={{
              originX: 0.5,
              originY: 0.5,
            }}
          >
            <CommonContainer>
              <div className={classes.gridWrapper}>
                {/* Text Section */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: expanded ? [0, 0.3, 0.5, 0.5, 1] : 0,
                    opacity: expanded ? [0, 0, 0, 0.5, 1] : 0,
                  }}
                  transition={{
                    duration: 1.5,
                    times: [0, 0.3, 0.45, 0.5, 1], // Jerk-like pause at 50% scale
                    ease: "easeInOut",
                  }}
                  className={classes.expandWrapper}
                  style={{
                    originX: 0.5,
                    originY: 0.5,
                  }}
                >
                  <CommonContainer>
                    <div className={classes.gridWrapper}>
                      {/* Text Section - Moves Left */}
                      <motion.div
                        className={clsx(classes.contentWrapper)}
                        initial={{ x: 0, opacity: 0 }}
                        animate={{ x: -100, opacity: 1 }}
                        transition={{
                          duration: 1.5,
                          delay: 0.5,
                          ease: "easeInOut",
                        }}
                      >
                        <h1 className={classes["medium-heading"]}>
                          We are ÖYE!
                        </h1>
                        <h2
                          className={clsx("large-heading", classes.mainHeading)}
                        >
                          packaging
                        </h2>
                        <p className={classes.text}>
                          We support the growth of coffee roasting companies by
                          providing fully customized packaging solutions and
                          unique filling services.
                        </p>
                      </motion.div>

                      {/* Image Section - Moves Right */}
                      <motion.div
                        className={classes.heroImgWrapper}
                        initial={{ x: 0, opacity: 0 }}
                        animate={{ x: 100, opacity: 1 }}
                        transition={{
                          duration: 1.2,
                          delay: 0.5,
                          ease: "easeInOut",
                        }}
                      >
                        <img
                          src={heroBg}
                          alt="hero img"
                          className={clsx("img-fluid", classes.img)}
                        />
                      </motion.div>
                    </div>
                  </CommonContainer>
                </motion.div>

                {/* Image Section */}
                <motion.div
                  className={classes.heroImgWrapper}
                  initial={{ x: -200, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    duration: 2, // Slower transition for the image
                    delay: 0.3,
                    ease: "easeInOut",
                  }}
                >
                  <img
                    src={heroBg}
                    alt="hero img"
                    className={clsx("img-fluid")}
                  />
                </motion.div>
              </div>
            </CommonContainer>
          </motion.div>

          <CommonContainer className={classes.quickCardsWrapper}>
            <div className="grid">
              <div className="md:col-6 col-12">
                <QuickCard category="packaging" title="Coffee packaging" />
              </div>

              <div className="md:col-6 col-12">
                <QuickCard category="services" title="coffee Services" />
              </div>
            </div>
          </CommonContainer>

          <Banner
            title="Try it out!"
            ctaTitle="Order Sample kit"
            className={classes.banner1}
            bg={isMobile ? banner1_mobile : bg1}
            onClick={() =>
              window.open(
                "https://oyepackaging.com/order",
                "_blank",
                "noopener,noreferrer"
              )
            }
          />

          {/* <CommonContainer> */}
          <AppleSlider />
          {/* </CommonContainer> */}
          <div>
            <CommonContainer className={classes.aboutWrapper}>
              <h2 className={classes.aboutTitle}>ÖYE Innovations</h2>
              <ShortAboutUs />
            </CommonContainer>
          </div>

          <ReviewSection />
          <Banner
            onClick={() => {
              redirectTo("https://oyepackaging.com/call");
            }}
            title="Any questions left?"
            ctaTitle="Book a call"
            className={classes.banner1}
            bg={isMobile ? banner1_mobile : bg1}
          />
          <Footer />
        </div>
      </>
    </main>
  );
};

export default Home;
