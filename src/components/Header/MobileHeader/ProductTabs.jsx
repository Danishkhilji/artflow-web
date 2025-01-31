import React from "react";
import {
  cartonBoxActiveIcon,
  cartonBoxIcon,
  packetActiveIcon,
  packetIcon,
  sideGussetBagsActiveIcon,
  sideGussetBagsIcon,
  standupBagsActiveIcon,
  standupBagsIcon,
} from "../../../constant";
import { Link, useLocation, useNavigate } from "react-router-dom";
import clsx from "clsx";

const PRODUCT_LINKS = [
  {
    icon: packetIcon,
    activeIcon: packetActiveIcon,
    label: "Flat Bottom Bags",
    href: "/products",
  },
  {
    icon: cartonBoxIcon,
    activeIcon: cartonBoxActiveIcon,
    label: "Carton Boxes",
    href: "/products",
  },
  {
    icon: sideGussetBagsIcon,
    activeIcon: sideGussetBagsActiveIcon,
    label: "Side GusSet Bags",
    href: "/products",
  },
  {
    icon: standupBagsIcon,
    activeIcon: standupBagsActiveIcon,
    label: "Standup Bags",
    href: "/products",
  },
];

const ProductTabs = ({ onClick, activeLink }) => {
  const pathname = useLocation()?.pathname;
  const navigate = useNavigate();

  return (
    <div className="flex-col gap-2.5  h-fit flex flex-1">
      {PRODUCT_LINKS?.map(({ icon, href, activeIcon, label }, index) => (
        <button
          onClick={() => {onClick(label)
            navigate("/products")

          }}
          key={index}
          disabled={index !== 0}
          className={clsx(
            " px-6 text-left rounded-xl !py-4 flex uppercase disabled:cursor-not-allowed disabled:hover:text-text-color/60 disabled:hover:shadow-none disabled:text-text-color/60 disabled:hover:font-normal !gap-4 items-center hover:text-primary-color text-lg font-primary hover:font-semibold hover:shadow-tabs-active-shadow transition-global group",
            pathname === "/products" && activeLink === label
              ? "!text-primary-color shadow-tabs-active-shadow font-semibold"
              : "text-text-color font-medium"
          )}
        >
          <div className="max-w-10 min-w-7 flex justify-center">
            {pathname === "/products" && activeLink === label ? (
              <img
                src={activeIcon}
                alt={label}
                className="object-contain w-auto block"
              />
            ) : (
              <>
                <img
                  src={icon}
                  alt={label}
                  className={clsx("object-contain w-auto ",
                    index !== 0 ? "" : "group-hover:hidden"
                    
                  )}
                  />
                <img
                  src={activeIcon}
                  alt={label}
                  className={clsx(
                    "object-contain w-auto  hidden",
                    index !== 0 ? "" : "group-hover:block"
                    
                  )}
                />
              </>
            )}
          </div>{" "}
          {label}
        </button>
      ))}
    </div>
  );
};

export default ProductTabs;
