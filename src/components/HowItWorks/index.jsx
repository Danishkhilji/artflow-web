import React from "react";

const HowItWorks = ({ heading, title, description, cards }) => {
  return (
    <div className="my-10">
      <h1 className="text-3xl text-text-color font-semibold leading-10 uppercase font-primary">
        {heading}
      </h1>
      <div className="border border-text-color/30 md:!border-transparent md:shadow-how-it-work-box-shadow rounded-2xl !py-5 px-2.5 md:!px-5 !mt-5">
        <div className="md:pl-3">
          <h3 className="text-22 font-primary font-medium text-text-color uppercase">
            {title}
          </h3>
          <p className="mt-1 text-text-color text-lg font-normal font-primary">
            {description}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 !mt-5">
          {cards?.map(({ icon, description }, index) => (
            <div
              key={index}
              className="flex md:flex-row flex-col md:text-left text-center items-center !gap-5 md:gap-6 border border-text-color/30 !py-5 px-6 rounded-2xl"
            >
              <img src={icon} alt={index} className="max-w-12 max-h-12" />
              <p className="text-sm font-normal font-primary text-text-color">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
