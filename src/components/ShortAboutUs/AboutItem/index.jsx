import clsx from "clsx";
import { Accordion, AccordionTab } from "primereact/accordion";
import { Button } from "primereact/button";
import PropTypes from "prop-types";
import { useState } from "react";
import { shortAboutUs } from "../../../data";
import { useMobileViewHook } from "../../../hooks/useMobileViewHook";
import classes from "./AboutItem.module.css";
import { redirectTo } from "../../../helpers";
const AboutItem = ({ activeTab, setActiveTab }) => {
  const [isMobile, setIsMobile] = useState(false);
  // Track active tab
  useMobileViewHook(setIsMobile, 576);

  const handleTabChange = (e) => {
    console.log("eee", e);
    // if (!e.index) return;
    setActiveTab((current) => {
      if (typeof e?.index == "number") return e?.index;
      return current;
    }); // Update state on tab click
  };

  return (
    <div className={classes.aboutContainer}>
      <Accordion
        multiple={false}
        activeIndex={activeTab}
        onTabChange={handleTabChange}
      >
        {shortAboutUs?.map((element) => (
          <AccordionTab
            key={element.id}
            header={element.title}
            className={classes.accordionItem}
          >
            <div className={classes.bg}>
              <p className={clsx(classes.description)}>{element.description}</p>
              <Button
                onClick={() => {
                  element?.link && redirectTo(element?.link);
                }}
                label={element.cta}
                className={clsx("transparent-btn primary-btn", classes.cta)}
              />
              {isMobile && (
                <div className={classes.imageWrapper}>
                  {shortAboutUs[activeTab] && (
                    <img
                      className={"img-fluid"}
                      src={shortAboutUs[activeTab].img}
                      alt={shortAboutUs[activeTab].title}
                    />
                  )}
                </div>
              )}
            </div>
          </AccordionTab>
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
