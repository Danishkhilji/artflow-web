import { useState } from "react";
import { useMobileViewHook } from "../../hooks/useMobileViewHook";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";
import CommonContainer from "../CommonContainer";
const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  useMobileViewHook(setIsMobile, 767);
  return (
    <CommonContainer>
      {isMobile ? <MobileHeader /> : <DesktopHeader />}
    </CommonContainer>
  );
};

export default Header;
