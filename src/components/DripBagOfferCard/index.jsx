import clsx from "clsx";
import React, { useState } from "react";

const DripBagOfferCard = ({ heading, cards }) => {
  const [state, setState] = useState(cards[0]?.title);
  return (
    <div className="my-10 mb-12">
      <h1 className="text-3xl text-text-color font-semibold leading-10 uppercase font-primary">
        {heading}
      </h1>
      <div className="!mt-5 md:mt-2.5 flex flex-col md:flex-row items-stretch gap-2.5">
        {cards?.map(
          ({ icon, activeIcon, image, title, description }, index) => (
            <button
              className={clsx(
                "rounded-2xl transition-global !duration-700 border text-left group h-fit md:min-h-[385px] flex",
                state === title
                  ? "w-full p-2.5  !border-text-color/30"
                  : "w-full !py-5 md:py-0 md:w-[16.56%] !border-transparent shadow-cards-shadow items-center"
              )}
              key={index}
              onClick={() => setState(title)}
            >
              <div className={clsx("", state === title ? "block" : "hidden")}>
                <img src={image} alt={title} className={clsx("w-full rounded-xl")} />
                <div className="md:pl-3 mt-2 mb-1">
                  <h4 className="uppercase text-lg font-primary font-medium text-text-color flex items-center gap-2.5 mb-1.5">
                    <img
                      src={icon}
                      alt={title}
                      className="max-w-6 max-h-6 rotate-90"
                    />{" "}
                    {title}
                  </h4>
                  <p className="text-sm font-normal font-primary text-text-color">
                    {description}
                  </p>
                </div>
              </div>
              <div
                className={clsx(
                  "flex flex-col items-center justify-center w-full",
                  state === title ? "hidden" : "block"
                )}
              >
                <h4 className=" flex items-center md:flex-col-reverse gap-2.5">
                  <img
                    src={icon}
                    alt={title}
                    className="max-w-6 max-h-6 group-hover:hidden rotate-90 md:rotate-0"
                  />
                  <img
                    src={activeIcon}
                    alt={title}
                    className="max-w-6 max-h-6 group-hover:block hidden rotate-90 md:rotate-0"
                  />
                  <span className="uppercase text-lg font-primary font-medium group-hover:text-primary-color transition-global text-text-color whitespace-nowrap drig-bag-offer-title">{title}</span>
                </h4>
              </div>
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default DripBagOfferCard;
