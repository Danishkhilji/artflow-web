import { useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

const redirectTo = (href) => {
  window.open(href, "_blank", "noopener,noreferrer");
};

function useTypingAnimation(texts, delay) {
  const textIndex = useMotionValue(0);
  const count = useMotionValue(0);
  const updatedThisRound = useMotionValue(true);

  const baseText = useTransform(textIndex, (latest) => texts[latest] || "");
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.get().slice(0, latest)
  );

  useEffect(() => {
    animate(count, 60, {
      type: "tween",
      delay: delay,
      duration: 3, 
      ease: "easeInOut",
      onUpdate(latest) {
        if (updatedThisRound.get() === true && latest > 0) {
          updatedThisRound.set(false);
        } else if (updatedThisRound.get() === false && latest === 0) {
          updatedThisRound.set(true);
        }
      },
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [delay]);
  console.log(displayText?.get());
  
  return displayText;
}

export { redirectTo, useTypingAnimation };
