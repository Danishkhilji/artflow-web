import React from "react";
import Button from "../Button";

const ServicesHero = ({
  title,
  desktopFrame,
  mobileFrame,
  description,
  details,
  statistics,
}) => {
  return (
    <div>
      <div className="flex-col flex items-start !gap-5">
        <div className="w-full">
          <h1 className="md:hidden text-3xl text-text-color font-semibold leading-10 uppercase !mb-5 font-primary">
            {title}
          </h1>
          <img
            src={desktopFrame}
            alt={title}
            className="w-full  rounded-xl md:block hidden"
          />
          <img
            src={mobileFrame}
            alt={title}
            className="w-full  rounded-xl md:hidden"
          />
        </div>
        <div className="w-full">
          <h1 className="md:block hidden text-3xl text-text-color font-semibold leading-10 uppercase mb-1 font-primary">
            {title}
          </h1>
          <p className="text-lg text-text-color font-primary">{description}</p>
          <div className="!mt-5 mb-8 md:mb-10 flex flex-col sm:flex-row sm:flex-wrap justify-start !gap-5 md:!gap-y-2 md:gap-x-8 max-w-720">
            {details?.map(({ label, icon }, index) => (
              <p
                key={index}
                className="text-lg font-medium text-text-color gap-2.5 flex items-center font-primary "
              >
                <img src={icon} alt={label} className="w-5 h-5" />
                {label}
              </p>
            ))}
          </div>
          <div className="flex md:flex-row flex-col flex-wrap md:items-stretch !gap-5 md:!gap-2.5">
            <Button variant="bgPrimary" className="uppercase">
              configure packagING
            </Button>
            <Button variant="primary" className="uppercase">
              order sample kit
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 !p-5 md:!py-2.5 rounded-3xl border border-text-color/30 mt-12 md:mt-7">
        {statistics?.map(({ icon, title, stats }, index) => (
          <div
            key={index}
            className="flex justify-center first:pb-8 last:pt-8 first:border-b md:first:border-b-transparent md:last:pt-0 md:first:pb-0 first:border-b-text-color/30 md:first:border-r md:first:border-r-text-color/30"
          >
            <div className="w-full justify-center flex items-center !gap-5 md:gap-6 flex-col  md:flex-row lg:flex-col xl:flex-row">
              <img
                src={icon}
                alt={title}
                className="max-w-10 max-h-10 object-contain"
              />
              <div className="text-center text-text-color">
                <p className="text-lg font-medium font-primary uppercase">
                  {title}
                </p>
                <h5 className="font-medium text-3xl font-primary">{stats}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesHero;
