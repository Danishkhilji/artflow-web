import { useEffect } from "react";

export function useMobileViewHook(setIsMobile, width) {
  useEffect(() => {
    const updateScreenSize = () => {
      getWidthAndDecideScreen(setIsMobile, width);
    };

    // Initial check
    updateScreenSize();

    window.addEventListener("resize", updateScreenSize);
    window.addEventListener("load", updateScreenSize);

    return () => {
      window.removeEventListener("resize", updateScreenSize);
      window.removeEventListener("load", updateScreenSize);
    };
  }, [setIsMobile, width]);
}

function getWidthAndDecideScreen(setIsMobile, width = 992) {
  if (window.innerWidth < width) {
    setIsMobile(true);
  } else {
    setIsMobile(false);
  }
}
