// import clsx from "clsx";
// import { motion, useScroll, useSpring, useTransform } from "framer-motion";
// import Button from "../Button";
// import PropTypes from "prop-types";
// import React, { useRef, useEffect, useState } from "react";
// import CommonContainer from "../CommonContainer";
// import classes from "./Banner.module.css";

// const Banner = React.forwardRef(
//   ({ className, bg, title, ctaTitle, onClick, uniqueKey, isMobile }, ref) => {
//     const container = useRef(null);
//     const { scrollYProgress } = useScroll({
//       target: container,
//       offset: ["start end", "end start"],
//     });
//     const [maxScale, setMaxScale] = useState(1); // Default scale is 1
//     useEffect(() => {
//       // Calculate maxScale dynamically
//       const containerWidth = ref.current.offsetWidth; // Get container width
//       const image = new Image();
//       image.src = bg;
//       image.onload = () => {
//         const imgWidth = image.width; // Actual image width
//         console.log("imgWidth", imgWidth)
//         const scale = containerWidth / 1360; // Calculate max scale
//         setMaxScale(scale);
//       };
//     }, [bg, ref]);

//     const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, maxScale, 1]);

//     // State to store max padding
//     const [maxPadding, setMaxPadding] = useState(100);

//     // Update maxPadding dynamically based on screen size
//     useEffect(() => {
//       const updateMaxPadding = () => {
//         if (window.innerWidth < 776) {
//           setMaxPadding(16); // For widths less than 776px
//         } else if (window.innerWidth < 1100) {
//           setMaxPadding(50); // For widths between 776px and 1100px
//         } else {
//           setMaxPadding(100); // For widths greater than 1100px
//         }
//       };
//       updateMaxPadding(); // Initial check
//       window.addEventListener("resize", updateMaxPadding);

//       return () => {
//         window.removeEventListener("resize", updateMaxPadding);
//       };
//     }, []);

//     // Dynamic padding calculation
//     const rawPadding = useTransform(scrollYProgress, [0, 0.5, 1], [16, 0, 16]);
//     const dynamicMaxPadding = useTransform(
//       scrollYProgress,
//       [0, 0.5, 1],
//       [maxPadding, 0, maxPadding]
//     );
//     const padding = useSpring(isMobile ? rawPadding : dynamicMaxPadding, {
//       stiffness: 100,
//       damping: 20,
//       mass: 1,
//     });

//     // Set div width to 100% (edge-to-edge) without any padding
//     const width = "100%";

//     return (
//       <section
//         className={clsx(classes.wrapper, className)}
//         key={uniqueKey}
//         ref={ref}
//       >
//         <CommonContainer className={clsx(classes.content, classes.sticky)}>
//           <div ref={container} className={classes.el}>
//             <motion.div
//               style={{
//                 width: width,
//                 height: "100%", // Always 100% width (edge-to-edge)
//                 scale: scale,
//                 borderRadius: "30px",
//               }}
//               transition={{
//                 type: "spring",
//                 stiffness: 80,
//                 damping: 15,
//                 mass: 1,
//                 restDelta: 0.001,
//                 delay: 0.8,
//               }}
//             >
//               {/* Image with dynamic padding */}
//               <motion.img
//                 src={bg}
//                 alt="Banner background"
//                 style={{
//                   width: "100%", // Make image take 100% width of the container
//                   paddingLeft: padding, // Dynamic left padding based on scroll
//                   paddingRight: padding, // Dynamic right padding based on scroll
//                   overflow: "hidden",
//                   objectFit: "cover", // Make sure the image covers the area
//                   borderRadius: "20px", // Border radius for the image
//                 }}
//               />
//             </motion.div>

//             {/* Content stays fixed */}
//             <div className={classes.mainContent}>
//               <h2 className={clsx("semiBold-heading", classes.title)}>
//                 {title}
//               </h2>
//               <Button
//                 variant={"secondary"}
//                 className={clsx("transparent-btn", classes.cta)}
//                 onClick={onClick}
//                 label={ctaTitle}
//               />
//             </div>
//           </div>
//         </CommonContainer>
//       </section>
//     );
//   }
// );

// export default Banner;

// Banner.displayName = "Banner";

// Banner.propTypes = {
//   className: PropTypes.string,
//   bg: PropTypes.string.isRequired, // Ensure bg is a required string
//   title: PropTypes.string.isRequired,
//   ctaTitle: PropTypes.string.isRequired,
//   onClick: PropTypes.func.isRequired,
//   uniqueKey: PropTypes.string.isRequired,
//   isMobile: PropTypes.bool.isRequired, // Updated to boolean
// };

// Banner.defaultProps = {
//   className: "",
//   ctaTitle: "Learn More", // Default CTA text
// };

import clsx from "clsx";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Button from "../Button";
import PropTypes from "prop-types";
import React, { useRef, useEffect, useState } from "react";
import CommonContainer from "../CommonContainer";
import classes from "./Banner.module.css";

const Banner = React.forwardRef(
  ({ className, bg, title, ctaTitle, onClick, uniqueKey, isMobile }, ref) => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
      target: container,
      offset: ["start end", "end start"],
    });
    const [maxScale, setMaxScale] = useState(1); // Default scale is 1
    useEffect(() => {
      // Get container width
      const containerWidth = ref.current.offsetWidth;

      // Create a new image and load it
      const image = new Image();
      image.src = bg;
      image.onload = () => {
        const maxWidth = 1440; 
        const scale =
          window.innerWidth > 1440
            ? containerWidth > maxWidth + 100
              ? (maxWidth + 100) / maxWidth
              : containerWidth / maxWidth
            : containerWidth /
              document.getElementById("hero-section-container").offsetWidth;

        // Set the scale based on the device (mobile or not)
        isMobile ? setMaxScale(1) : setMaxScale(scale);
      };
    }, [bg, ref]);

    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, maxScale, 1]);

    // State to store max padding
    const [maxPadding, setMaxPadding] = useState(100);

    // Update maxPadding dynamically based on screen size
    useEffect(() => {
      const updateMaxPadding = () => {
        if (window.innerWidth < 776) {
          setMaxPadding(16); // For widths less than 776px
        } else if (window.innerWidth < 1100) {
          setMaxPadding(50); // For widths between 776px and 1100px
        } else {
          setMaxPadding(100); // For widths greater than 1100px
        }
      };
      updateMaxPadding(); // Initial check
      window.addEventListener("resize", updateMaxPadding);

      return () => {
        window.removeEventListener("resize", updateMaxPadding);
      };
    }, []);

    // Dynamic padding calculation
    const rawPadding = useTransform(scrollYProgress, [0, 0.5, 1], [16, 0, 16]);
    const dynamicMaxPadding = useTransform(
      scrollYProgress,
      [0, 0.5, 1],
      [maxPadding, 0, maxPadding]
    );
    const padding = useSpring(isMobile ? rawPadding : dynamicMaxPadding, {
      stiffness: 100,
      damping: 20,
      mass: 1,
    });

    // Set div width to 100% (edge-to-edge) without any padding
    const width = "100%";

    return (
      <section
        className={clsx(classes.wrapper, className)}
        key={uniqueKey}
        ref={ref}
      >
        <CommonContainer className={clsx(classes.content, classes.sticky)}>
          <div ref={container} className={classes.el}>
            <motion.div
              style={{
                width: "100%", // Width of the container
                height: "100%", // Always 100% height of the parent div // Always 100% height of the parent div
                transformOrigin: "top center",
                scaleX: scale, // Dynamic scale value
                borderRadius: "20px", // Rounded corners for the motion div
                overflow: "hidden", // Prevent image overflow
                display: "inline-block", // Ensure the motion div scales based on content width
              }}
            >
              <motion.img
                src={bg}
                alt="Banner background"
                style={{
                  width: "100%", // Make image take 100% width of the container
                  height: "100%", // Make the image height fill the container
                  objectFit: "cover", // Ensure the image covers the container
                  borderRadius: "12px", // Maintain rounded corners on the image
                  paddingLeft: padding, // Dynamic left padding based on scroll
                  paddingRight: padding, // Dynamic right padding based on scroll
                }}
              />
            </motion.div>
            {/* Content stays fixed */}
            <div className={classes.mainContent}>
              <h2 className={clsx("semiBold-heading", classes.title)}>
                {title}
              </h2>
              <Button
                variant={"secondary"}
                className={clsx("transparent-btn", classes.cta)}
                onClick={onClick}
                label={ctaTitle}
              />
            </div>
          </div>
        </CommonContainer>
      </section>
    );
  }
);

export default Banner;

Banner.displayName = "Banner";

Banner.propTypes = {
  className: PropTypes.string,
  bg: PropTypes.string.isRequired, // Ensure bg is a required string
  title: PropTypes.string.isRequired,
  ctaTitle: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  uniqueKey: PropTypes.string.isRequired,
  isMobile: PropTypes.bool.isRequired, // Updated to boolean
};

Banner.defaultProps = {
  className: "",
  ctaTitle: "Learn More", // Default CTA text
};