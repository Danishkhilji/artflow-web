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
import { bg1, banner_bg2, heroBg, banner1_mobile, banner2_mobile } from "../../constant";
import classes from "./Home.module.css";
import { useMobileViewHook } from "../../hooks/useMobileViewHook";
import { redirectTo } from "../../helpers";
import { motion } from "framer-motion";

import { Container, Row, Col } from "react-bootstrap";
const Home = () => {
  const [expanded, setExpanded] = useState(false);
  const [mobileHeroSection, setIsMobileHeroSection] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const banner1 = useRef();
  const banner2 = useRef();

  // useMobileViewHook(setIsMobile, 600);
  useMobileViewHook(setIsMobileHeroSection, 767);

  useEffect(() => {
    setTimeout(() => setExpanded(true), 200); // Delay for smoother effect
  }, []);
  return (
    <main className={classes.wrapper}>
      <>
        <Header />
        <div className={classes.innerWrapper}>
          {!mobileHeroSection ? (
            <>
              <CommonContainer>
                <motion.div
                  className={classes.mainContainer}
                  // initial={{ opacity: 0 }}
                  // animate={{ opacity: 1 }}
                  // transition={{
                  //   duration: 1,
                  //   ease: "easeInOut",
                  // }}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "relative",
                  }}
                >
                  {/* Text Section */}
                  <motion.div
                    className={clsx(classes.textSection, {
                      [classes.expanded]: expanded,
                    })}
                    // initial={{ opacity: 0, x: "50%" }} // Start off-screen to the right
                    // animate={{
                    //   opacity: 1,
                    //   x: "0%", // Move to its position on the left
                    // }}
                    // transition={{
                    //   delay: 1.3, // Start after the image animation
                    //   duration: 0.75,
                    //   ease: "easeOut",
                    // }}
                    style={{
                      zIndex: 3,
                      position: "relative",
                    }}
                  >
                    <h1 className={classes.mediumHeading}>WE ARE ÖYE!</h1>
                    <h2 className={clsx("large-heading", classes.mainHeading)}>
                      packaging
                    </h2>
                    <p className={classes.text}>
                      We support the growth of coffee roasting companies <br />{" "}
                      by providing<b> fully customized</b> packaging solutions
                      and <b>unique filling services.</b>
                    </p>
                  </motion.div>

                  {/* Image Section */}
                  <motion.div
                    className={classes.imageSection}
                    // initial={{ opacity: 1, scale: 0.1, x: "0%" }} // Tiny image at the center
                    // animate={{
                    //   opacity: 1,
                    //   scale: [0.1, 0.4, 1], // Grow from tiny -> medium -> full
                    //   x: ["-35%", "-35%", "0%"], // Center -> pause -> move right
                    // }}
                    // transition={{
                    //   duration: 2, // Total animation time
                    //   times: [0, 0.5, 1], // Define keyframes: grow, pause, move
                    //   ease: "easeInOut",
                    // }}
                    style={{
                      zIndex: 2,
                      position: "relative",
                      overflow: "visible", // Ensure image is always visible
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
            </>
          ) : (
            <CommonContainer>
              <div className={classes.innerWrapper}>
                <h1 className={classes.mediumHeading}>WE ARE ÖYE!</h1>
                <h2 className={clsx("large-heading", classes.mainHeading)}>
                  Packaging
                </h2>
                <p className={classes.text}>
                  We support the growth of coffee roasting companies by
                  providing
                  <span className={classes.textSemiBold}>
                    {" "}
                    fully customized
                  </span>{" "}
                  packaging solutions and{" "}
                  <span className={classes.textSemiBold}>
                    unique filling services.
                  </span>
                </p>
              </div>
            </CommonContainer>
          )}
          <CommonContainer className={classes.quickCardsWrapper}>
            <Row>
              {/* Side-by-side on medium (md) and larger, stacked on smaller screens */}
              <Col md={6} xs={12}>
                <QuickCard
                  category="packaging"
                  title="Coffee Packaging"
                  blockLink="https://oyepackaging.com/products"
                />
              </Col>
              <Col md={6} xs={12} className={classes.mt20}>
                <QuickCard
                  category="services"
                  title="Coffee Services"
                  blockLink="https://oyepackaging.com/services"
                />
              </Col>
            </Row>
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
            isMobile={isMobile}
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
            bg={isMobile ? banner2_mobile : banner_bg2}
            isMobile={isMobile}
          />
          <Footer />
        </div>
      </>
    </main>
  );
};

export default Home;
