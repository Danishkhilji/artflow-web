import { useRef, useEffect, useState } from "react";
import { reviewsData } from "../../data";
import ReviewCard from "../ReviewCard";
import classes from "./ReviewSecton.module.css";

const ReviewSection = () => {
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let animationFrame;

    const scroll = () => {
      if (scrollContainer && !isPaused) {
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
        scrollContainer.scrollLeft += 1;
      }
      animationFrame = requestAnimationFrame(scroll);
    };

    scroll();
    return () => cancelAnimationFrame(animationFrame);
  }, [isPaused]);

  const handlePause = () => setIsPaused(true);
  const handleResume = () => setIsPaused(false);

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
