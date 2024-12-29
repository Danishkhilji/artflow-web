import { useRef, useEffect, useState } from "react";
import { reviewsData } from "../../data";
import ReviewCard from "../ReviewCard";
import classes from "./ReviewSecton.module.css";

const ReviewSection = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [scrollSpeed, setScrollSpeed] = useState(1); // Default speed
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let animationFrame;

    const scroll = () => {
      if (scrollContainer && !isPaused) {
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
        // Increase scrollLeft based on scrollSpeed
        scrollContainer.scrollLeft += scrollSpeed;
      }
      animationFrame = requestAnimationFrame(scroll);
    };

    scroll();
    return () => cancelAnimationFrame(animationFrame);
  }, [isPaused, scrollSpeed]);

  const handlePause = () => {
    // setIsPaused(true);
    setScrollSpeed(1); // Slow down when hovering (adjust this value as needed)
  };

  const handleResume = () => {
    setIsPaused(false);
    setScrollSpeed(2); // Default speed
  };

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
