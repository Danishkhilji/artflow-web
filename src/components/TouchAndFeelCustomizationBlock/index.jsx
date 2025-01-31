import React from "react";

const TouchAndFeelCustomization = ({ heading, description, tabs }) => {
  return (
    <div className="px-2.5 pb-2.5 !pt-5 lg:!p-5 rounded-3xl border !border-text-color/30 !mt-5 md:mt-2.5">
      <h3 className="text-22 font-primary text-text-color uppercase font-medium">{heading}</h3>
      <p className="mt-1 text-text-color text-sm font-normal font-primary max-w-658">
        {description}
      </p>

      <div className="flex flex-wrap items-center gap-2.5 md:gap-8 justify-start md:justify-center !mt-5">
        {tabs?.map(({ icon, label }, index) => (
          <div
            key={index}
            className="border !border-text-color rounded-full px-3 md:!px-5 py-1.5 flex items-center gap-2.5 w-fit"
          >
            <img src={icon} alt={label} className="max-w-6 max-h-6" />
            <p className="text-text-color font-primary text-sm font-medium ">
              {label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TouchAndFeelCustomization;
