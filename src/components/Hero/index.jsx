import clsx from "clsx";
import classes from "./Hero.module.css";
import QuickCard from "../QuickCard";
import ShortAboutUs from "../ShortAboutUs";
import Banner from "../Banner";
import { bg1 } from "../../constant";
import Footer from "../Footer";
import Header from "../Header";
import ReviewSection from "../ReviewSection";
import CommonContainer from "../CommonContainer";
import { Col, Row } from "react-bootstrap";
const Hero = () => {
  return (
    <>
      <Header />
      <main className={classes.wrapper}>
        <CommonContainer>
          <div className={clsx(classes.contentWrapper)}>
            <h1 className={classes["medium-heading"]}>WE ARE ÖYE!</h1>
            <h2 className={clsx("large-heading", classes.mainHeading)}>
              packaging
            </h2>
            <p className={classes.text}>
              We support the growth of coffee roasting companies by providing
              fully customized packaging solutions and unique filling services.
            </p>
          </div>
        </CommonContainer>
        <CommonContainer className={classes.quickCardsWrapper}>
          <Row>
            <Col md={6} sm={12}>
              <QuickCard category="packaging" />
            </Col>

            <Col md={6} xs={12}>
              <QuickCard category="services" />
            </Col>
          </Row>
        </CommonContainer>
        <div>
          <CommonContainer className={classes.aboutWrapper}>
            <h2 className={classes.aboutTitle}>ÖYE Innovations</h2>
            <ShortAboutUs />
          </CommonContainer>
        </div>

        <ReviewSection />
        <Banner bg={bg1} />
        <Footer />
      </main>
    </>
  );
};

export default Hero;
