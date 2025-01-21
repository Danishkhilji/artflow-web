import Slider from "react-slick";
import { reviewsData } from "../../data";
import ReviewCard from "../ReviewCard";
import classes from "./ReviewSecton.module.css";

const ReviewSection = () => {
  var settings = {
    dots: false,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 8000,
    autoplaySpeed: 0,
    cssEase: "linear",
    swipeToSlide:true,
    draggable:true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "300px",
    pauseOnHover:true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          centerMode: true,
          centerPadding: "200px",
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          centerMode: true,
          centerPadding: "80px",
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerMode: true,
          centerPadding: "150px",
          slidesToShow: 1,
          speed: 7000,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 670,
        settings: {
          centerMode: true,
          centerPadding: "100px",
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 550,
        settings: {
          centerMode: true,
          centerPadding: "20px",
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className={classes.wrapper}>
      <h2 className={classes.title}>Reviews About ÖYE</h2>
      <Slider {...settings} className="reviews-slider">
        {reviewsData.concat(reviewsData).map((element, index) => (
          <div className="!pr-5 !w-fit">
            <ReviewCard key={index} data={element} />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default ReviewSection;
