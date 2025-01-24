import { useRef, useEffect, useState } from "react";
import { reviewsData } from "../../data";
import ReviewCard from "../ReviewCard";
import classes from "./ReviewSecton.module.css";

const ReviewSection = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [scrollSpeed, setScrollSpeed] = useState(
    window.innerWidth < 600 ? 0.5 : 1
  );
  const scrollRef = useRef(null);
  const scrollPosition = useRef(0);
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let animationFrame;
    const scroll = () => {
      if (scrollContainer && !isPaused) {
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 3;
          scrollPosition.current = 3;
        }
        scrollPosition.current += scrollSpeed;
        scrollContainer.scrollLeft = Math.floor(scrollPosition.current);
      }
      animationFrame = requestAnimationFrame(scroll);
    };

    scroll();
    return () => cancelAnimationFrame(animationFrame);
  }, [isPaused, scrollSpeed]);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    const handleScroll = () => {
      if (scrollContainer) {
        scrollPosition.current = scrollContainer.scrollLeft;
      }
    };
    scrollContainer.addEventListener("scroll", handleScroll);
    return () => scrollContainer.removeEventListener("scroll", handleScroll);
  }, []);

  const handlePause = () => {
    setIsPaused(true);
    setScrollSpeed(window.innerWidth < 600 ? 0.5 : 1);
  };

  const handleResume = () => {
    setIsPaused(false);
    setScrollSpeed(window.innerWidth < 600 ? 0.5 : 2);
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
