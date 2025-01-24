import React from "react";

const FeaturesBlock = ({ heading, cards }) => {
  return (
    <div className="px-2.5 !py-5 lg:!p-5 rounded-3xl border border-text-color/30 !mt-5 md:mt-2.5">
      <h3 className="text-22 font-primary text-text-color uppercase">{heading}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 !gap-5 !mt-5">
        {cards?.map(({ image, label }, index) => (
          <div
            key={index}
            className="flex flex-col gap-2.5 w-full"
          >
            <div className="aspect-square bg-bg-card rounded-2xl" />
            <p className="text-text-color font-primary text-sm font-medium text-center uppercase ">
              {label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesBlock;
