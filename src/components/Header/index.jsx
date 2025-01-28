import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";
const Header = () => {
  return (
    <>
      <DesktopHeader otherClasses="md:block hidden" />
      <MobileHeader otherClasses="md:!hidden" />
    </>
  );
};

export default Header;
