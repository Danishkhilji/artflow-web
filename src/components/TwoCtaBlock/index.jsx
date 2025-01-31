import React from "react";
import Button from "../Button";
import clsx from "clsx";

const TwoCtaBlock = ({ cards, services }) => {
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
          <div className="absolute w-full z-10  !bg-transparent h-full flex items-end px-2.5 transition-global">
            <div className="flex flex-col items-center w-full mb-8 text-center">
              <div className="mb-2.5">
                {title?.map((node) => (
                  <h4
                    className={clsx(
                      "text-22 font-primary text-white font-semibold uppercase ",
                      services && index === 0 ? "lg:inline" : ""
                    )}
                  >
                    {node}
                  </h4>
                ))}
              </div>
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
