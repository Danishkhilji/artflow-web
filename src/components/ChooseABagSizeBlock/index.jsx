import clsx from "clsx";
import React from "react";
import { fireEmojiIcon } from "../../constant";

const ChooseABagSizeBlock = ({ heading, description, sizes }) => {
  return (
    <div className="px-2.5 pb-2.5 !pt-5 lg:!p-5 rounded-3xl border !border-text-color/30 !mt-5 md:mt-2.5">
      <h3 className="text-22 font-primary text-text-color uppercase font-medium">
        {heading}
      </h3>
      <p className="mt-1 text-text-color text-sm font-normal font-primary max-w-658">
        {description}
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 !mt-5 gap-2.5 md:!gap-5">
        {sizes?.map((node, index) => (
          <div
            key={index}
            className="h-[123px] p-2.5 border !border-text-color text-center group hover:!border-primary-color transition-global place-content-center rounded-2xl"
          >
            <p
              className={clsx(
                "text-[22px] group-hover:text-primary-color text-text-color font-primary font-medium transition-global cursor-default" ,
                index === sizes.length - 1 &&
                  "flex sm:gap-1  sm:flex-row flex-col items-center flex-wrap justify-center text-lg lg:text-[22px]"
              )}
            >
              {index === sizes.length - 1 && (
                <img src={fireEmojiIcon} alt="fire-emoji" className="-mb-1 sm:mb-0 w-auto"/>
              )}{" "}
              {node}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChooseABagSizeBlock;
