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
import {
  bg1,
  banner_bg2,
  heroBg,
  banner1_mobile,
  banner2_mobile,
  cupImage3DIcon,
  packetImage,
  commentIcon,
} from "../../constant";
import classes from "./Home.module.css";
import { useMobileViewHook } from "../../hooks/useMobileViewHook";
import { redirectTo, useTypingAnimation } from "../../helpers";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

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
          <CommonContainer
            id="hero-section-container"
            className="pt-10 flex flex-col md:flex-row items-center md:gap-0 gap-10 !mb-10 md:!mb-16"
          >
            <div className="w-full md:w-2/4 relative z-10 pr-10">
              <h1 className="uppercase mb-1 font-semibold text-[28px] md:text-[44px] text-text-color">
                We are ÖYE!
              </h1>
              <h2 className="text-[50px] md:text-[65px] lg:text-[80px] xl:text-[100px] font-bold uppercase text-text-color">
                packaging
              </h2>
              <p className={clsx("text-[22px] text-text-color !pt-5")}>
                We support the growth of coffee roasting companies by providing
                <b> fully customized</b> packaging solutions and{" "}
                <b>unique filling services.</b>
              </p>
            </div>
            <div className="w-full md:w-3/5 -ml-[9%] relative hidden md:block">
              <div className="h-[314px] rounded-[20px] w-full max-w-[513px] bg-primary-gradient"></div>
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.1,
                  rotate: -6,
                  transformOrigin: "bottom left",
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  rotate: -6,
                  transformOrigin: "bottom left",
                }}
                transition={{
                  duration: 2,
                  delay: 3,
                  ease: "easeInOut",
                }}
                className="px-4 xl:pl-10 xl:!pr-20 py-4 xl:py-6 border border-white rounded-3xl bg-primary-color  absolute right-10 top-4 w-[290px] xl:w-[403px]"
              >
                <motion.p
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  transition={{
                    duration: 1,
                    delay: 4,
                    ease: "easeInOut",
                  }}
                  className="text-[22px] xl:text-[28px] text-white leading-[34px] font-medium h-[68px] pr-6 xl:pr-0"
                >
                  {useTypingAnimation(["We produce\npackaging in Europe"], 4)}
                </motion.p>
                <img
                  src={commentIcon}
                  alt="comment"
                  className="absolute -left-3 w-6 h-[34px] -bottom-2"
                />
              </motion.div>
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.1,
                  rotate: 6,
                  transformOrigin: "bottom right",
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  rotate: 6,
                  transformOrigin: "bottom right",
                }}
                transition={{
                  duration: 2,
                  delay: 2,
                  ease: "easeInOut",
                }}
                className="px-4 xl:px-10 py-4 xl:py-6 border border-white rounded-3xl bg-primary-color text-2xl text-white absolute right-0 top-2/4 -translate-y-[20%] rotate-[6deg] w-[290px] xl:w-[403px]"
              >
                <motion.p
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  transition={{
                    duration: 1,
                    delay: 3,
                    ease: "easeInOut",
                  }}
                  className="text-[22px] xl:text-[28px] text-white leading-[34px] font-medium h-[68px] pr-10"
                >
                  {useTypingAnimation(["Create your dream\ncoffee bag 🤩"], 3)}
                </motion.p>
                <img
                  src={commentIcon}
                  alt="comment"
                  className="absolute -right-3 w-6 h-[34px] -scale-x-100 -bottom-2"
                />
              </motion.div>
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.1,
                  transformOrigin: "bottom left",
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  transformOrigin: "bottom left",
                }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                }}
                className="px-4 xl:px-10 py-4 xl:py-6 border border-white rounded-3xl bg-primary-color absolute right-20 -bottom-11 w-[290px] xl:w-[403px]"
              >
                <motion.p
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  transition={{
                    duration: 1,
                    delay: 1,
                    ease: "easeInOut",
                  }}
                  className="text-[22px] xl:text-[28px] text-white leading-[34px] font-medium h-[68px]"
                >
                  {useTypingAnimation(
                    ["Launch a new coffee\nproduct with us"],
                    1
                  )}
                </motion.p>
                <img
                  src={commentIcon}
                  alt="comment"
                  className="absolute -left-3 w-6 h-[34px] -bottom-2"
                />
              </motion.div>
              <motion.img
                initial={{
                  opacity: 0,
                  scale: 0.1,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 1,
                  delay: 3,
                  ease: "easeInOut",
                }}
                src={cupImage3DIcon}
                alt="cup-image"
                className="w-40 h-40 xl:w-56 xl:h-w-56 absolute top-0 xl:-top-6 -right-6 xl:-right-11"
              />
              <motion.img
                initial={{
                  opacity: 0,
                  scale: 0.1,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 1,
                  delay: 4,
                  ease: "easeInOut",
                }}
                src={packetImage}
                alt="packet-image"
                className="w-60 h-60 xl:w-80 xl:h-80 absolute top-5 xl:-top-10 right-[220px] xl:right-[320px] "
              />
            </div>
          </CommonContainer>
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
