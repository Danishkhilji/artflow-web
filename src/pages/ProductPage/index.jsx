import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CommonContainer from "../../components/CommonContainer";
import clsx from "clsx";
import {
  packetIcon,
  packetActiveIcon,
  cartonBoxIcon,
  cartonBoxActiveIcon,
  sideGussetBagsActiveIcon,
  standupBagsIcon,
  standupBagsActiveIcon,
  sideGussetBagsIcon,
} from "../../constant";
import { flatBottomBagsMocks } from "./flat-bottom-bags-mocks";
import ProductPresentationBlock from "../../components/ProductPresentationBlock";
import MaterialsBlock from "../../components/MaterialBlock";
import ChooseABagSizeBlock from "../../components/ChooseABagSizeBlock";
import TouchAndFeelCustomization from "../../components/TouchAndFeelCustomizationBlock";
import FeaturesBlock from "../../components/FeaturesBlock";
import BestCoffeeBarrier from "../../components/BestCoffeeBarrierBlock";
import TwoCtaBlock from "../../components/TwoCtaBlock";
import PrintCustomizationBlock from "../../components/PrintCustomizationBlock";
import { cartonBoxesMocks } from "./carton-boxes-mocks";
import { sideGussetBagMocks } from "./side-gusset-bag-mocks";
import { standupBagsMocks } from "./standup-bags-mocks";
import { useLocation } from "react-router-dom";

const TABS = [
  {
    icon: packetIcon,
    activeIcon: packetActiveIcon,
    label: "Flat Bottom Bags",
    mocksData: flatBottomBagsMocks,
  },
  {
    icon: cartonBoxIcon,
    activeIcon: cartonBoxActiveIcon,
    label: "Carton Boxes",
    mocksData: cartonBoxesMocks,
  },
  {
    icon: sideGussetBagsIcon,
    activeIcon: sideGussetBagsActiveIcon,
    label: "Side GusSet Bags",
    mocksData: sideGussetBagMocks,
  },
  {
    icon: standupBagsIcon,
    activeIcon: standupBagsActiveIcon,
    label: "Standup Bags",
    mocksData: standupBagsMocks,
  },
];

const ProductPage = () => {
  const [activeProduct, setActiveProduct] = useState(
    localStorage.getItem("activeProduct") || TABS[0]?.label
  );
  const activeTabData = TABS.find(
    (tab) => tab.label === activeProduct
  )?.mocksData;
  const pathname = useLocation()?.pathname;

  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === "activeProduct") {
        setActiveProduct(event.newValue);
      }
    };
    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  useEffect(() => {
    const handleLocalChange = () => {
      setActiveProduct(localStorage.getItem("activeProduct"));
    };
    window.addEventListener("localProductChange", handleLocalChange);
    return () => {
      window.removeEventListener("localProductChange", handleLocalChange);
    };
  }, []);
  const updateActiveProduct = (newProduct) => {
    localStorage.setItem("activeProduct", newProduct);
    window.dispatchEvent(new Event("localProductChange"));
  };


  return (
    <main>
      <Header />
      <CommonContainer className="flex items-start !gap-[21px] pt-20 md:pt-14 font-primary !mb-12 md:!mb-16">
        <div className="hidden flex-col gap-2.5 min-w-[294px] w-[294px] h-fit sticky top-20 lg:flex">
          {TABS?.map(({ icon, activeIcon, label }, index) => (
            <button
              onClick={() => updateActiveProduct(label)}
              key={index}
              className={clsx(
                "flex items-center !gap-4 !py-[18.5px] px-6 w-full text-lg transition-global rounded-xl uppercase disabled:cursor-not-allowed",
                activeProduct === label
                  ? "shadow-tabs-active-shadow text-primary-color font-semibold"
                  : "text-text-color/40 font-medium"
              )}
            >
              <div className="w-7 h-7">
                <img
                  src={activeProduct === label ? activeIcon : icon}
                  alt={label}
                  className="object-contain"
                />
              </div>{" "}
              {label}
            </button>
          ))}
        </div>
        <div className="w-full">
          <ProductPresentationBlock {...activeTabData?.hero} />
          <div className="mt-12 md:mt-10">
            <h2 className="text-3xl text-text-color font-semibold leading-10 uppercase !mb-5 md:mb-1 font-primary">
              {activeTabData?.customizationOptions?.heading}
            </h2>
            <MaterialsBlock
              {...activeTabData?.customizationOptions?.materials}
            />
            <ChooseABagSizeBlock
              {...activeTabData?.customizationOptions?.chooseABagSizeBlock}
            />
            <PrintCustomizationBlock
              {...activeTabData?.customizationOptions?.printCustomization}
            />
            <TouchAndFeelCustomization
              {...activeTabData?.customizationOptions
                ?.touchAndFeelCustomization}
            />
            <FeaturesBlock {...activeTabData?.customizationOptions?.features} />
            <BestCoffeeBarrier
              {...activeTabData?.customizationOptions?.bestCoffeeBarrier}
            />
            <TwoCtaBlock {...activeTabData?.customizationOptions?.twoCta} />
          </div>
        </div>
      </CommonContainer>
      <Footer />
    </main>
  );
};

export default ProductPage;
