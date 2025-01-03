// import clsx from "clsx";
// import { Button } from "primereact/button";
// import PropTypes from "prop-types";
// import { useState } from "react";
// import { Accordion } from "react-bootstrap";
// import { shortAboutUs } from "../../../data";
// import { redirectTo } from "../../../helpers";
// import { useMobileViewHook } from "../../../hooks/useMobileViewHook";
// import classes from "./AboutItem.module.css";

// const AboutItem = ({ activeTab, setActiveTab }) => {
//   const [isMobile, setIsMobile] = useState(false);

//   useMobileViewHook(setIsMobile, 767);

//   return (
//     <div className={classes.aboutContainer}>
//       <Accordion
//         activeKey={activeTab.toString()}
//         alwaysOpen={true}
//         onSelect={(eventKey) => {
//           if (eventKey !== null) {
//             setActiveTab(parseInt(eventKey));
//           }
//         }}
//       >
//         {shortAboutUs?.map((element, index) => (
//           <Accordion.Item
//             eventKey={index.toString()}
//             key={element.id}
//             className={classes.accordionItem}
//           >
//             <Accordion.Header
//               onClick={(e) => {
//                 // If clicking on the active tab, prevent default behavior
//                 if (activeTab === index) {
//                   e.preventDefault();
//                   e.stopPropagation();
//                 }
//               }}
//             >
//               {element?.title}
//             </Accordion.Header>
//             <Accordion.Body>
//               <div className={classes.bg}>
//                 <p className={clsx(classes.description)}>
//                   {element.description}
//                 </p>
//                 <Button
//                   onClick={() => {
//                     element?.link && redirectTo(element?.link);
//                   }}
//                   label={element.cta}
//                   className={clsx("transparent-btn primary-btn", classes.cta)}
//                 />
//                 {isMobile && (
//                   <div className={classes.imageWrapper}>
//                     {shortAboutUs[activeTab] && (
//                       <img
//                         className="img-fluid"
//                         src={shortAboutUs[activeTab].img}
//                         alt={shortAboutUs[activeTab].title}
//                       />
//                     )}
//                   </div>
//                 )}
//               </div>
//             </Accordion.Body>
//           </Accordion.Item>
//         ))}
//       </Accordion>
//     </div>
//   );
// };

// AboutItem.propTypes = {
//   activeTab: PropTypes.number.isRequired,
//   setActiveTab: PropTypes.func.isRequired,
// };

// export default AboutItem;


import clsx from "clsx";
import { Button } from "primereact/button";
import PropTypes from "prop-types";
import { useState } from "react";
import { Accordion } from "react-bootstrap";
import { shortAboutUs } from "../../../data";
import { redirectTo } from "../../../helpers";
import { useMobileViewHook } from "../../../hooks/useMobileViewHook";
import classes from "./AboutItem.module.css";

const AboutItem = ({ activeTab, setActiveTab }) => {
  const [isMobile, setIsMobile] = useState(false);

  useMobileViewHook(setIsMobile, 767);
  return (
    <div className={classes.aboutContainer}>
      <Accordion
        activeKey={activeTab.toString()}
        alwaysOpen={true}
        onSelect={(eventKey) => {
          if (eventKey !== null) {
            setActiveTab(parseInt(eventKey));
          }
        }}
      >
        {shortAboutUs?.map((element, index) => (
          <div key={element.id}>
            <Accordion.Item
              eventKey={index.toString()}
              className={classes.accordionItem}
            >
              <Accordion.Header
                onClick={(e) => {
                  if (activeTab === index) {
                    e.preventDefault();
                    e.stopPropagation();
                  }
                }}
              >
                {element?.title}
              </Accordion.Header>
              <Accordion.Body>
                <div className={classes.bg}>
                  <p className={clsx(classes.description)}>
                    {element.description}
                  </p>
                  <Button
                    onClick={() => {
                      element?.link && redirectTo(element?.link);
                    }}
                    label={element.cta}
                    className={clsx(
                      "transparent-btn primary-btn",
                      classes.cta
                    )}
                  />
                  {isMobile && (
                    <div className={classes.imageWrapper}>
                      {shortAboutUs[activeTab] && (
                        <img
                          className="img-fluid"
                          src={shortAboutUs[activeTab].img}
                          alt={shortAboutUs[activeTab].title}
                        />
                      )}
                    </div>
                  )}
                </div>
              </Accordion.Body>
            </Accordion.Item>

            {index < shortAboutUs.length - 1 && (
              <div className={classes.divider}></div>
            )}
          </div>
        ))}
      </Accordion>
    </div>
  );
};

AboutItem.propTypes = {
  activeTab: PropTypes.number.isRequired,
  setActiveTab: PropTypes.func.isRequired,
};

export default AboutItem;
