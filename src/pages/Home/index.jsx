import clsx from "clsx";
import { useState, useEffect, useRef } from "react";
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

  const [isTextVisible, setIsTextVisible] = useState(false);

  const banner1 = useRef();
  const banner2 = useRef();
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
          <CommonContainer>
            <motion.div
              className={classes.mainContainer}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 2,
                ease: "easeInOut",
              }}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                position: "relative",
              }}
            >
              {/* Text Section with Opacity Transition */}
              <motion.div
                className={clsx(classes.textSection, {
                  [classes.expanded]: expanded,
                })}
                initial={{ opacity: 0, x: "100%" }}
                animate={{
                  opacity: isTextVisible ? 1 : 0.3, // Opacity starts low and increases
                  x: expanded ? "0%" : "-100%",
                }}
                transition={{
                  delay: 1,
                  duration: 1.5, // Longer duration for opacity transition
                  ease: "easeOut", // Smooth easing for opacity transition
                }}
                style={{
                  zIndex: isTextVisible ? 3 : 1,
                  position: "relative",
                }}
                onAnimationComplete={() => setIsTextVisible(true)} // Set z-index after animation completes
              >
                <h1 className={classes.mediumHeading}>We are ÖYE!</h1>
                <h2 className={clsx("large-heading", classes.mainHeading)}>
                  Packaging
                </h2>
                <p className={classes.text}>
                  We support the growth of coffee roasting companies by
                  providing fully customized packaging solutions and unique
                  filling services.
                </p>
              </motion.div>

              {/* Image Section */}
              <motion.div
                className={classes.imageSection}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                style={{
                  zIndex: 2,
                  position: "relative",
                }}
              >
                <img
                  src={heroBg}
                  alt="hero img"
                  className={clsx("img-fluid", classes.img)}
                />
              </motion.div>
            </motion.div>
          </CommonContainer>
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
            ref={banner1}
            uniqueKey="banner-1"
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
            ref={banner2}
            uniqueKey="banner-2"
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
