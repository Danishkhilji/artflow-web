import React from "react";

const BestCoffeeBarrier = ({
  heading,
  details,
  keyFeatures,
  certifications,
}) => {
  return (
    <div className="px-2.5 !py-5 lg:!p-5 rounded-3xl bg-bg-card !mt-5 md:mt-2.5">
      <h3 className="text-22 font-primary text-text-color uppercase font-medium">{heading}</h3>
      <div className="flex flex-col md:flex-row gap-2.5 md:!gap-5 !mt-5 md:mt-2.5">
        <div className="w-full md:w-[45%] flex flex-col gap-2.5">
          {details?.map(({ icon, title, description }, index) => (
            <div
              key={index}
              className="flex !gap-4 items-start bg-white p-2.5 rounded-2xl"
            >
              <div className="flex items-center justify-center px-2.5 rounded-2xl bg-bg-card min-w-16 min-h-16 w-16 h-16">
                <img src={icon} alt={title} className="object-contain w-fit" />
              </div>
              <div className="w-full mt-2.5">
                <h4 className="text-text-color font-primary uppercase text-lg font-medium">
                  {title}
                </h4>
                <p className="text-sm font-primary text-text-color font-normal pr-1">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full md:w-[55%] flex flex-col gap-2.5 md:!gap-5">
          <div className="w-full rounded-2xl bg-white border !border-text-color/30 !p-5">
            <h4 className="text-text-color font-primary uppercase text-lg font-medium">
              {certifications?.heading}
            </h4>
            <div className="flex flex-wrap !gap-2.5 mt-2.5">
              {certifications?.list?.map((node, index) => (
                <p
                  key={index}
                  className="text-sm leading-8 font-normal italic font-primary text-text-color !px-5 rounded-full border !border-[!B7B7B9]/30 py-1 "
                >
                  {node}
                </p>
              ))}
            </div>
          </div>
          <div className="!p-5 rounded-xl bg-blue-color/[0.26] !pb-9">
            <h4 className="text-text-color font-primary uppercase text-lg font-medium">
              {keyFeatures?.heading}
            </h4>
            <ul className="list-disc list-inside flex flex-col gap-2 mt-1">
              {keyFeatures?.list?.map((node, index) => (
                <li key={index} className="text-sm font-normal font-primary text-text-color ">{node}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestCoffeeBarrier;
