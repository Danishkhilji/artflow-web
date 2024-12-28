import clsx from "clsx";
import PropTypes from "prop-types";
import { useState } from "react";
import Slider from "react-slick";
import LeftArrow from "../../assets/images/left-arrow.svg?react";
import FeatureModal from "../../modal/FeatureModal";
import classes from "./AppleSlider.module.css";
import { ourFeatures } from "../../data";
const AppleSlider = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [showFeatureModal, setShowFeatureModal] = useState(false);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className={clsx(classes.sliderContainer, classes.wrapper)}>
      <h2 className={classes.aboutTitle}>why ÖYE is your packaging partner</h2>
      <Slider {...settings} className={classes.slider}>
        {ourFeatures.map((slide, index) => (
          <div key={index} className={classes.slide}>
            <div className={classes.slideContent}>
              <span className={classes.icon}>{slide.icon}</span>
              <div className={classes.contentArea}>
                <h3 className={classes.slideTitle}>{slide.title}</h3>
                <p className={classes.slideDescription}>{slide.description}</p>
              </div>
              <div
                className={clsx("flex justify-content-end", classes.ctaWrapper)}
              >
                <button
                  className={classes.plusButton}
                  onClick={() => {
                    setShowFeatureModal(true);
                    setSelectedItem(slide);
                  }}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      {showFeatureModal && (
        <FeatureModal
          show={showFeatureModal}
          setShow={setShowFeatureModal}
          data={selectedItem}
        />
      )}
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      className={`${classes.arrow} ${classes.prevArrow}`}
      onClick={onClick}
    >
      <LeftArrow />
    </button>
  );
};

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      className={`${classes.arrow} ${classes.nextArrow}`}
      onClick={onClick}
    >
      <LeftArrow />
    </button>
  );
};

PrevArrow.propTypes = {
  onClick: PropTypes.func,
};

NextArrow.propTypes = {
  onClick: PropTypes.func,
};

export default AppleSlider;
