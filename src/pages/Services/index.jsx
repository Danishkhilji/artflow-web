import React, { useState } from "react";
import Header from "../../components/Header";
import CommonContainer from "../../components/CommonContainer";
import Footer from "../../components/Footer";
import clsx from "clsx";
import { servicesMocks } from "./mocks";
import ServicesHero from "../../components/ServicesHero";
import { brewBagActiveIcon, brewBagIcon, capsulesActiveIcon, capsulesIcon, dripBagsActiveIcon, dripBagsIcon } from "../../constant";
import TwoCtaBlock from "../../components/TwoCtaBlock";
import DripBagOfferCard from "../../components/DripBagOfferCard";
import HowItWorks from "../../components/HowItWorks";
import ServicesCustomizationOptions from "../../components/ServicesCustomizationOptions";

const TABS = [
  {
    icon: dripBagsIcon,
    activeIcon: dripBagsActiveIcon,
    label: "Drip Bags",
    metaTitle: "",
  },
  {
    icon: brewBagIcon,
    activeIcon: brewBagActiveIcon,
    label: "BREW BAG",
    metaTitle: "COMING IN 2025",
  },
  {
    icon: capsulesIcon,
    activeIcon: capsulesActiveIcon,
    label: "CAPSULES",
    metaTitle: "COMING IN 2025",
  },
];

const Services = () => {
  const [toggleTab, setToggleTab] = useState(TABS[0]?.label);

  return (
    <main>
      <Header />
      <CommonContainer className="flex items-start !gap-5 pt-20 md:pt-14 font-primary !mb-12 md:!mb-16">
        <div className="hidden flex-col gap-2.5 min-w-[294px] w-[294px] h-fit sticky top-20 lg:flex">
          {TABS?.map(({ icon, activeIcon, label, metaTitle }, index) => (
            <button
              onClick={() => setToggleTab(label)}
              key={index}
              className={clsx(
                "flex items-center !gap-4 !py-4 px-6 w-full transition-global rounded-xl ",
                toggleTab === label && "shadow-tabs-active-shadow"
              )}
            >
              <div className="w-7 h-7 ">
                <img
                  src={toggleTab === label ? activeIcon : icon}
                  alt={label}
                  className="object-contain"
                />
              </div>{" "}
              <p
                className={clsx(
                  "flex flex-col text-left uppercase font-primary  text-lg transition-global",
                  toggleTab === label
                    ? " text-primary-color font-semibold"
                    : "text-text-color/40 font-medium"
                )}
              >
                {label}{" "}
                {metaTitle && (
                  <span
                    className={clsx(
                      "text-[10px] font-medium font-primary transition-global leading-[12px]",
                      toggleTab === label
                        ? " text-primary-color"
                        : "text-text-color/40"
                    )}
                  >
                    {metaTitle}
                  </span>
                )}
              </p>
            </button>
          ))}
        </div>
        <div className="w-full">
          <ServicesHero {...servicesMocks?.hero} />
          <ServicesCustomizationOptions {...servicesMocks?.customizationOptions} />
          <HowItWorks {...servicesMocks?.howItWorks} />
          <DripBagOfferCard {...servicesMocks?.dripBagOfferCard} />
          <TwoCtaBlock {...servicesMocks?.twoCta} />

        </div>
      </CommonContainer>
      <Footer />
    </main>
  );
};

export default Services;
