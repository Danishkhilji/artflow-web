import { useState } from "react";
import { ShowCaseBag } from "../../constant";
import { shortAboutUs } from "../../data";
import { useMobileViewHook } from "../../hooks/useMobileViewHook";
import AboutItem from "./AboutItem";
import classes from "./ShortAboutUs.module.css";
export default function ShortAboutUs() {
  const [activeTab, setActiveTab] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  console.log("short About us", shortAboutUs);

  useMobileViewHook(setIsMobile, 576);
  return (
    <div className={classes.wrapper}>
      <div className="grid">
        <div className="sm:col-7 col-12">
          <div className={classes.accordionsTab}>
            <AboutItem activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>
        </div>
        {!isMobile && (
          <div className="col-5">
            <div className={classes.imgWrapper}>
              {shortAboutUs[activeTab] &&
                typeof activeTab ===
                  "number"?(
                    <img
                      className={"img-fluid"}
                      src={shortAboutUs[activeTab].img}
                      alt={shortAboutUs[activeTab].title}
                    />
                  ):null}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
