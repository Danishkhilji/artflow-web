import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CommonContainer from "../../components/CommonContainer";
import clsx from "clsx";
import {
  packetIcon,
  packetActiveIcon,
  cartonBoxIcon,
  cartonBoxActiveIcon,
  customizeComputer,
  sideGussetBagsActiveIcon,
  standupBagsIcon,
  standupBagsActiveIcon,
  sideGussetBagsIcon,
} from "../../constant";
import { productPageMocks } from "./mocks";
import ProductPresentationBlock from "../../components/ProductPresentationBlock";
import MaterialsBlock from "../../components/MaterialBlock";
import ChooseABagSizeBlock from "../../components/ChooseABagSizeBlock";
import TouchAndFeelCustomization from "../../components/TouchAndFeelCustomizationBlock";

const TABS = [
  {
    icon: packetIcon,
    activeIcon: packetActiveIcon,
    label: "Flat Bottom Bags",
  },
  {
    icon: cartonBoxIcon,
    activeIcon: cartonBoxActiveIcon,
    label: "Carton Boxes",
  },
  {
    icon: sideGussetBagsIcon,
    activeIcon: sideGussetBagsActiveIcon,
    label: "Side GusSet Bags",
  },
  {
    icon: standupBagsIcon,
    activeIcon: standupBagsActiveIcon,
    label: "Standup Bags",
  },
];

const ProductPage = () => {
  const [toggleTab, setToggleTab] = useState(TABS[0]?.label);
  return (
    <main>
      <Header />
      <CommonContainer className="flex items-start !gap-5 pt-20 md:pt-14 font-primary ">
        <div className="hidden flex-col gap-2.5 min-w-[294px] w-[294px] h-fit sticky top-20 lg:flex">
          {TABS?.map(({ icon, activeIcon, label }, index) => (
            <button
              onClick={() => setToggleTab(label)}
              key={index}
              className={clsx(
                "flex items-center !gap-4 !py-4 px-6 w-full text-lg transition-global rounded-xl uppercase",
                toggleTab === label
                  ? "shadow-tabs-active-shadow text-primary-color font-semibold"
                  : "text-text-color/40 font-medium"
              )}
            >
              <div className="w-7 h-7 ">
                <img
                  src={toggleTab === label ? activeIcon : icon}
                  alt={label}
                  className=""
                />
              </div>{" "}
              {label}
            </button>
          ))}
        </div>
        <div className="w-full">
          <ProductPresentationBlock {...productPageMocks?.hero} />
          <div className="mt-12 md:mt-10">
            <h2 className="text-3xl text-text-color font-semibold leading-10 uppercase !mb-5 md:mb-1 font-primary">
              {productPageMocks?.customizationOptions?.heading}
            </h2>
            <MaterialsBlock
              {...productPageMocks?.customizationOptions?.materials}
            />
            <ChooseABagSizeBlock
              {...productPageMocks?.customizationOptions?.chooseABagSizeBlock}
            />
            {/* <TouchAndFeelCustomization
              {...productPageMocks?.customizationOptions
                ?.touchAndFeelCustomization}
            /> */}
          </div>
        </div>
      </CommonContainer>
      <div className="mb-16"></div>
      <Footer />
    </main>
  );
};

export default ProductPage;
