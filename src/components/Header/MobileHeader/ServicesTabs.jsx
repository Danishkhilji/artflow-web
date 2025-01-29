import React from "react";
import {
  brewBagActiveIcon,
  brewBagIcon,
  capsulesActiveIcon,
  capsulesIcon,
  dripBagsActiveIcon,
  dripBagsIcon,
} from "../../../constant";
import { Link } from "react-router-dom";
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
  return (
    <div className="flex-col gap-2.5  h-fit flex flex-1">
      {SERVICES_LINKS?.map(
        ({ icon, href, activeIcon, metaTitle, label }, index) => (
          <Link
            to={href}
            onClick={onClick}
            
            key={index}
            className={clsx(
              "px-6 text-left rounded-xl !py-4 flex uppercase !gap-4 items-center hover:text-primary-color text-lg font-primary hover:font-semibold text-text-color font-medium hover:shadow-tabs-active-shadow transition-global group",
              index === 0 ? "" : "cursor-not-allowed"
            )}
          >
            <div className="max-w-10 min-w-7 flex justify-center">
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
            </div>{" "}
            <p
              className={clsx(
                "flex flex-col text-left uppercase font-primary  text-lg transition-global group-hover:text-primary-color group-hover:font-semibold"
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
          </Link>
        )
      )}
    </div>
  );
};

export default ServicesTabs;
