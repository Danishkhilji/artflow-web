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
const Hero = () => {
  return (
    <>
      <Header />
      <main className={classes.wrapper}>
        <CommonContainer>
          <div className={clsx(classes.contentWrapper)}>
            <h1 className={classes["medium-heading"]}>We are ÖYE!</h1>
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
          <div className="grid">
            <div className="md:col-6 col-12">
              <QuickCard category="packaging" />
            </div>

            <div className="md:col-6 col-12">
              <QuickCard category="services" />
            </div>
          </div>
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
