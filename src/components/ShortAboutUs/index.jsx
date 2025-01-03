import { useState } from "react";
import { ShowCaseBag } from "../../constant";
import { shortAboutUs } from "../../data";
import { useMobileViewHook } from "../../hooks/useMobileViewHook";
import AboutItem from "./AboutItem";
import { Row, Col } from "react-bootstrap";
import classes from "./ShortAboutUs.module.css";
export default function ShortAboutUs() {
  const [activeTab, setActiveTab] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useMobileViewHook(setIsMobile, 767);
  return (
    <div className={classes.wrapper}>
      <Row>
        <Col md={7} sm={12}>
          <div className={classes.accordionsTab}>
            <AboutItem activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>
        </Col>
        {!isMobile && (
          <Col sm={5} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div className={classes.imgWrapper}>
              {shortAboutUs[activeTab] && typeof activeTab === "number" ? (
                <img
                  className={"img-fluid"}
                  src={shortAboutUs[activeTab].img}
                  alt={shortAboutUs[activeTab].title}
                  style={{
                    width: "100%", // Increase width
                    height: "auto", // Maintain aspect ratio
                    maxWidth: "451px", // Prevent overflow
                  }}
                />
              ) : null}
            </div>
          </Col>
        )}
      </Row>
    </div>
  );
}
