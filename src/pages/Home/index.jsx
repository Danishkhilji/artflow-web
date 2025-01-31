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
  starFaceEmoji,
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
            className="pt-10 flex flex-col md:flex-row items-center md:gap-0 gap-10  md:!mb-16"
          >
            <div className="w-full md:w-2/4 relative z-10 md:pr-10">
              <h1 className="uppercase mb-1 font-medium text-[28px] md:text-[34px] custom-md:text-[44px] custom-md:leading-[49px] text-text-color font-primary">
                We are ÖYE!
              </h1>
              <h2 className="text-[50px] md:text-[48px] custom-md:text-[65px] lg:text-[80px] font-primary  custom-xl:text-[100px] custom-xl:leading-[99px] font-semibold uppercase text-text-color">
                packaging
              </h2>
              <p className={clsx("text-[22px] font-primary font-normal text-text-color !pt-5")}>
                We support the growth of coffee roasting companies by providing
                <b className="font-semibold"> fully customized</b> packaging solutions and{" "}
                <b className="font-semibold">unique filling services.</b>
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
                className="px-4 xl:!pl-8 xl:!pr-20 py-4 xl:py-6 border border-white rounded-3xl bg-primary-color  absolute right-10 xl:right-20 top-4 w-[290px] xl:w-[403px]"
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
                  className="text-[22px] xl:text-[28px] font-primary text-white leading-[34px] font-medium h-[68px] pr-6 xl:pr-0"
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
                className="px-4 xl:!px-10 py-4 xl:py-6 border border-white rounded-3xl bg-primary-color text-2xl text-white absolute  right-0 xl:right-8 top-[46%] xl:top-2/4 -translate-y-[20%] rotate-[6deg] w-[290px] xl:w-[403px]"
              >
                <div className="h-[68px] ">
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
                  className="text-[22px] xl:text-[28px] font-primary text-white leading-[34px] font-medium  inline"
                >
                  {useTypingAnimation(["Create your dream\ncoffee bag"], 3)}
                  {/* <TypingText  text={"Create your dream\ncoffee bag"} delay={3} /> */}
                </motion.p>{" "}
                <motion.img
                  src={starFaceEmoji}
                  alt="emoji-icon"
                  className="w-7 h-7 inline"
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  transition={{
                    duration: 0,
                    delay: 4.5,
                    ease: "easeInOut",
                  }}
                />
                </div>
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
                className="px-4 xl:!px-8 py-4 xl:py-6 border border-white rounded-3xl bg-primary-color absolute right-20 xl:right-[120px] -bottom-11 w-[290px] xl:w-[403px]"
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
                  className="text-[22px] xl:text-[28px] font-primary text-white leading-[34px] font-medium h-[68px]"
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
                  delay: 4.5,
                  ease: "easeInOut",
                }}
                src={cupImage3DIcon}
                alt="cup-image"
                className="w-40 h-40 xl:w-[204px] xl:h-[204px] absolute !-top-2 xl:!-top-10 -right-6 xl:-right-0"
              />
              <motion.img
                initial={{
                  opacity: 0,
                  rotate:-25,
                  scale: 0.1,
                }}
                animate={{
                  opacity: 1,
                  rotate:-25,
                  scale: 1,
                }}
                transition={{
                  duration: 1,
                  delay: 5,
                  ease: "easeInOut",
                }}
                src={packetImage}
                alt="packet-image"
                className="w-[200px] h-[200px] xl:w-[247px] xl:h-[247px] absolute top-7 xl:-top-0 right-[255px] xl:right-[390px] "
              />
            </div>
          </CommonContainer>
          <CommonContainer className={classes.quickCardsWrapper}>
            <Row className="mt-0">
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
