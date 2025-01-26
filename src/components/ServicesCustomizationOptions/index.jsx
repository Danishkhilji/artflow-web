import React from "react";
import { threeSixtyIcon } from "../../constant";

const ServicesCustomizationOptions = ({
  heading,
  title,
  description,
  mainImage,
  cards,
}) => {
  return (
    <div className="my-10">
      <h1 className="text-3xl text-text-color font-semibold leading-10 uppercase font-primary">
        {heading}
      </h1>
      <div className="mt-2.5 border !border-text-color/30 !p-5 rounded-2xl grid grid-cols-1 md:grid-cols-12 gap-2.5 items-center">
        <div className="md:hidden">
          <h4 className="text-22 font-primary font-medium text-text-color uppercase">
            {title}
          </h4>
          <p className="mt-1 text-text-color text-sm font-normal font-primary">
            {description}
          </p>
        </div>
        <div className="aspect-square rounded-2xl bg-bg-card  flex items-center justify-center relative md:col-span-5">
          <p className="text-lg !px-3 py-0.5 rounded-full bg-white border border-[#EEEEEA] absolute top-3 right-3 flex items-center gap-1">
            <img
              src={threeSixtyIcon}
              alt="360-icon"
              className="max-w-5 max-h-5"
            />
            360°
          </p>
          <img
            src={mainImage}
            alt="main-image"
            className="w-auto object-scale-down"
          />
        </div>
        <div className="w-full md:col-span-7">
          <div className="md:block hidden">
            <h4 className="text-22 font-primary font-medium text-text-color uppercase">
              {title}
            </h4>
            <p className="mt-1 text-text-color text-sm font-normal font-primary">
              {description}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 !gap-5 md:gap-2.5 !mt-5">
            {cards?.map(({ image, title }, index) => (
              <div key={index}>
                <div className="aspect-square bg-bg-card rounded-xl mb-2.5">
                  <img src={image} alt={title} className="object-scale-down" />
                </div>
                <p className="text-sm uppercase font-medium text-text-color font-primary text-center">
                  {title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCustomizationOptions;
