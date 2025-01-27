import { useRef, useEffect, useState } from "react";

const useAutoScroll = (initialSpeed = 1, pauseSpeed = 0.5, touchSpeed = 2) => {
  const [isPaused, setIsPaused] = useState(false);
  const [scrollSpeed, setScrollSpeed] = useState(initialSpeed);
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
    setScrollSpeed(pauseSpeed);
  };

  const handleResume = () => {
    setIsPaused(false);
    setScrollSpeed(touchSpeed);
  };

  return { scrollRef, handlePause, handleResume };
};

export default useAutoScroll;
