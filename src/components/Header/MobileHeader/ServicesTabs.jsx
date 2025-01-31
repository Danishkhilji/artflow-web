import React from "react";
import {
  brewBagActiveIcon,
  brewBagIcon,
  capsulesActiveIcon,
  capsulesIcon,
  dripBagsActiveIcon,
  dripBagsIcon,
} from "../../../constant";
import { Link, useLocation, useNavigate } from "react-router-dom";
import clsx from "clsx";

const SERVICES_LINKS = [
  {
    icon: dripBagsIcon,
    activeIcon: dripBagsActiveIcon,
    label: "Drip Bags",
    metaTitle: "",
    href: "/services",
  },
  {
    icon: brewBagIcon,
    activeIcon: brewBagActiveIcon,
    label: "BREW BAG",
    metaTitle: "COMING IN 2025",
    href: "/services",
  },
  {
    icon: capsulesIcon,
    activeIcon: capsulesActiveIcon,
    label: "CAPSULES",
    metaTitle: "COMING IN 2025",
    href: "/services",
  },
];

const ServicesTabs = ({ onClick }) => {
  const pathname = useLocation()?.pathname;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/services");
  };
  return (
    <div className="flex-col gap-2.5  h-fit flex flex-1">
      {SERVICES_LINKS?.map(
        ({ icon, href, activeIcon, metaTitle, label }, index) => (
          <button
            to={href}
            onClick={(e) => {
              onClick(e);
              handleClick();
            }}
            disabled={index !== 0}
            key={index}
            className={clsx(
              "px-6 text-left rounded-xl !py-4 flex uppercase !gap-4 items-center text-lg font-primary  font-medium transition-global ",
              index !== 0
                ? "cursor-not-allowed "
                : " group hover:font-semibold hover:shadow-tabs-active-shadow hover:text-primary-color",
              pathname === "/services" &&
                index === 0 &&
                "!text-primary-color !shadow-tabs-active-shadow"
            )}
          >
            <div className="max-w-10 min-w-7 flex justify-center">
              {pathname === "/services" && index === 0 ? (
                <img
                  src={activeIcon}
                  alt={label}
                  className="object-contain w-auto"
                />
              ) : (
                <>
                  <img
                    src={icon}
                    alt={label}
                    className="object-contain w-auto group-hover:hidden"
                  />
                  <img
                    src={activeIcon}
                    alt={label}
                    className="object-contain w-auto group-hover:block hidden"
                  />
                </>
              )}
            </div>{" "}
            <p
              className={clsx(
                "flex flex-col text-left uppercase font-primary text-lg transition-global group-hover:text-primary-color group-hover:font-semibold",
                index !== 0 ? "text-text-color/60" : "text-text-color",
                pathname === "/services" &&
                index === 0 &&
                "!text-primary-color !font-semibold"
              )}
            >
              {label}{" "}
              {metaTitle && (
                <h6
                  className={clsx(
                    "text-[10px] font-medium font-primary transition-global text-text-color/40 leading-[12px]"
                  )}
                >
                  {metaTitle}
                </h6>
              )}
            </p>
          </button>
        )
      )}
    </div>
  );
};

export default ServicesTabs;