import { reviewsData } from "../../data";
import ReviewCard from "../ReviewCard";
import classes from "./ReviewSecton.module.css";
import useAutoScroll from "../../hooks/useAutoScroll";

const ReviewSection = () => {
  const { scrollRef, handlePause, handleResume } = useAutoScroll(
    window.innerWidth < 600 ? 0.5 : 1,
    window.innerWidth < 600 ? 0.5 : 1,
    window.innerWidth < 600 ? 0.5 : 2
  );

  return (
    <section className={classes.wrapper}>
      <h2 className={classes.title}>Reviews About ÖYE</h2>
      <div
        ref={scrollRef}
        className={classes.reviews}
        onMouseEnter={handlePause}
        onMouseLeave={handleResume}
        onTouchStart={handlePause}
        onTouchEnd={handleResume}
      >
        {reviewsData.concat(reviewsData).map((element, index) => (
          <ReviewCard key={index} data={element} />
        ))}
      </div>
    </section>
  );
};

export default ReviewSection;
