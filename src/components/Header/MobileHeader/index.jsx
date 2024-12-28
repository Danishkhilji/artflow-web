import clsx from "clsx";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Logo } from "../../../constant";
import DrawerSkeleton from "../../Drawer";
import classes from "./MobileHeader.module.css";
const MobileHeader = () => {
 
  const [showDrawer, setShowDrawer] = useState(false);

  const toggleDrawer = () => {
    setShowDrawer((current) => !current);
  };

  return (
    <>
      <style>{`
        .mobile-drawer > div {
          padding-inline: 20px;
        }
        @media (max-width: 515px) {
          .mobile-drawer {
            width: 300px !important;
          }
        }
      `}</style>

      <header className={classes.header}>
        <span
          className={classes.logo}
          onClick={() => {
            window.open(
              "https://oyepackaging.com",
              "_blank",
              "noopener,noreferrer"
            );
          }}
        >
          <Logo />
        </span>
        <span
          className={classes.cta}
          onClick={() => {
            toggleDrawer();
          }}
        >
          <RxHamburgerMenu size={23} color="var(--primary-color)" />
        </span>
      </header>
      <div className={[].join(" ")} id={"navMobileHeader"}>
        <DrawerSkeleton
          size={390}
          show={showDrawer}
          setShow={toggleDrawer}
          direction="left"
          parentClass={"mobile-drawer"}
          className={classes.innerWrapper}
        >
          <div className={clsx(classes.drawerContainer, "scrollbar1")}>
            <div className={classes.drawerUserSection}>
              <>
                <div className={classes.drawerImg}>
                  {/* <img src={avatar} alt="user avatar" title="user" /> */}
                </div>
                <div>
                  <div className={classes.content}>
                    <h3>Gama</h3>
                    <p>alpha</p>
                  </div>
                </div>
              </>
            </div>
            <div className={classes.drawerList}>
              {/* <>
                <RenderListItem
                  icon={<HomeIcon />}
                  text={"Home"}
                  customClass={currentPage == "/" && classes.activeItem}
                  path={"/"}
                />
                <RenderListItem
                  icon={<QueueIcon size={20} color="var(--white-color)" />}
                  text={"Queue"}
                  customClass={currentPage == "/about" && classes.activeItem}
                  path={"/dashboard"}
                />
                <RenderListItem
                  icon={<CalendarIcon size={20} color="var(--white-color)" />}
                  text={"Schedule"}
                  customClass={currentPage == "/about" && classes.activeItem}
                  path={"/dashboard"}
                />
                <RenderListItem
                  icon={<PiUserListBold size={20} color="var(--white-color)" />}
                  text={"Patients"}
                  customClass={
                    currentPage == "/patient-list" && classes.activeItem
                  }
                  path={"/patient-list"}
                />
                <RenderListItem
                  icon={
                    <MdOutlineLeaderboard
                      size={20}
                      color="var(--white-color)"
                    />
                  }
                  text={"Statistics"}
                  customClass={currentPage == "/faq" && classes.activeItem}
                  path={"/faq"}
                />
                <RenderListItem
                  icon={<ShieldIcon />}
                  text={"Subscription"}
                  customClass={currentPage == "/contact" && classes.activeItem}
                  path={"/contact"}
                />

                {isLogin && (
                  <>
                    <RenderListItem
                      icon={<FaHome />}
                      text={"Settings"}
                      customClass={
                        currentPage == "/dashboard" && classes.activeItem
                      }
                      path={"/dashboard"}
                    />
                  </>
                )}

                {isLogin ? (
                  <>
                    <RenderListItem
                      icon={<TbLogout size={20} color="var(--white-color)" />}
                      text={"logout"}
                      path={"logout"}
                    />
                  </>
                ) : (
                  <>
                    <RenderListItem
                      icon={<IoLogIn />}
                      text={"Help"}
                      onClick={() => setIsModalOpen("login")}
                    />
                    <RenderListItem
                      icon={<IoLogIn />}
                      text={"Sign Up"}
                      onClick={() => setIsModalOpen("signup")}
                    />
                  </>
                )}
              </> */}
            </div>
          </div>
        </DrawerSkeleton>
      </div>
    </>
  );
};

export default MobileHeader;
