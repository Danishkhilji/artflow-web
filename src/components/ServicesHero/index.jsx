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
            <Button
              variant="bgPrimary"
              className="uppercase group !flex justify-center items-center gap-2.5"
            >
              configure packagING
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="13"
                viewBox="0 0 8 13"
                fill="none"
              >
                <path
                  d="M7.78279 7.00726L1.72295 12.7923C1.5828 12.9262 1.3957 13 1.1962 13C0.996706 13 0.809609 12.9262 0.669453 12.7923L0.223188 12.3664C-0.0671996 12.0888 -0.0671995 11.6378 0.223188 11.3606L5.31178 6.5027L0.217544 1.63936C0.0773871 1.50545 2.04098e-06 1.32694 2.07426e-06 1.13659C2.10758e-06 0.946033 0.0773872 0.767521 0.217544 0.633506L0.663809 0.20768C0.804076 0.0737707 0.991062 -7.80392e-07 1.19056 -7.45511e-07C1.39005 -7.1063e-07 1.57715 0.0737708 1.71731 0.20768L7.78279 5.99803C7.92328 6.13236 8.00044 6.31171 8 6.50238C8.00044 6.69378 7.92328 6.87303 7.78279 7.00726Z"
                  fill="none"
                  className="fill-white group-hover:fill-primary-color transition-global"
                />
              </svg>
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
                className="max-w-14 max-h-14 h-auto w-auto object-contain"
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
