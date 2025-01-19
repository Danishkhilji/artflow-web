import React from "react";
import Button from "../Button";

const TwoCtaBlock = ({ cards }) => {
  return (
    <div className="!mt-5 md:mt-2.5 grid grid-cols-1 md:grid-cols-2 !gap-5">
      {cards?.map(({ backgroundImage, title, buttonLabel }, index) => (
        <div
          key={index}
          className="aspect-video relative rounded-2xl overflow-hidden group"
        >
          <img
            src={backgroundImage}
            alt={title}
            className="absolute w-full h-full "
          />
          <div className="absolute w-full z-10 group-hover:!bg-black/25 !bg-transparent h-full flex items-end px-2.5 transition-global">
            <div className="flex flex-col items-center w-full mb-8 text-center">
              <h4 className="text-22 font-primary text-white font-semibold uppercase">
                {title}
              </h4>
              <Button variant="secondary" className="uppercase">
                {buttonLabel}
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TwoCtaBlock;
