// import clsx from "clsx";
// import { motion, useScroll, useSpring, useTransform } from "framer-motion";
// import Button from "../Button";
// import PropTypes from "prop-types";
// import React, { useRef } from "react";
// import CommonContainer from "../CommonContainer";
// import classes from "./Banner.module.css";

// const Banner = React.forwardRef(
//   ({ className, bg, title, ctaTitle, onClick, uniqueKey, isMobile }, ref) => {
//     const container = useRef(null);
//     const { scrollYProgress } = useScroll({
//       target: container,
//       offset: ["start end", "end start"],
//     });

//     // Scale effect for the background image
//     const rawScale = useTransform(
//       scrollYProgress,
//       [0, 0.35, 1],
//       [isMobile ? 1.4 : 1.2, isMobile ? 1.5 : 1.25, 1.2]
//     );
//     const scale = useSpring(rawScale, {
//       stiffness: 100,
//       damping: 20,
//       mass: 1,
//     });

//     // Clamp the scale to a minimum of 1
//     scale.onChange((value) => {
//       if (value < 1) {
//         scale.set(1); // Reset the scale to 1 if it goes below
//       }
//     });

//     return (
//       <section
//         className={clsx(classes.wrapper, className)}
//         key={uniqueKey}
//         ref={ref}
//       >
//         <CommonContainer className={clsx(classes.content, classes.sticky)}>
//           <div ref={container} className={classes.el}>
//             <motion.div
//               // style={{ scale }}
//               className={classes.imageContainer}
//               transition={{
//                 type: "spring",
//                 stiffness: 80,
//                 damping: 15,
//                 mass: 1,
//                 restDelta: 0.001,
//                 delay: 0.4,
//               }}
//             >
//               <img src={bg} alt="Banner background" />
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
//   isMobile: PropTypes.string.isRequired,
// };

// Banner.defaultProps = {
//   className: "",
//   ctaTitle: "Learn More", // Default CTA text
// };



import clsx from "clsx";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Button from "../Button";
import PropTypes from "prop-types";
import React, { useRef } from "react";
import CommonContainer from "../CommonContainer";
import classes from "./Banner.module.css";

const Banner = React.forwardRef(
  ({ className, bg, title, ctaTitle, onClick, uniqueKey, isMobile }, ref) => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
      target: container,
      offset: ["start end", "end start"],
    });

    // Dynamic padding for the image (16px on each side initially)
    const rawPadding = useTransform(scrollYProgress, [0, 0.5, 1], [16, 0, 16]);
    const desktopRawPadding = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, 100]);
    const padding = useSpring(isMobile ? rawPadding : desktopRawPadding, {
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
                width: width,
                height: "100%",// Always 100% width (edge-to-edge)

                borderRadius: "2px",
              }}
              transition={{
                type: "spring",
                stiffness: 80,
                damping: 15,
                mass: 1,
                restDelta: 0.001,
                delay: 0.4,
              }}
            >
              {/* Image with dynamic padding */}
              <motion.img
                src={bg}
                alt="Banner background"
                style={{
                  width: "100%", // Make image take 100% width of the container
                  paddingLeft: padding, // Dynamic left padding based on scroll
                  paddingRight: padding, // Dynamic right padding based on scroll
                  overflow: "hidden",
                  objectFit: "cover", // Make sure the image covers the area
                  borderRadius: "2px", // Border radius for the image
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
      </section >
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
