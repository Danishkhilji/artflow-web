import React from "react";

const MaterialsBlock = ({ heading, cards }) => {
  return (
    <div className="px-2.5 !py-5 md:!p-5 rounded-3xl border border-text-color/30 mt-2.5">
      <h3 className="text-2xl font-primary text-text-color">{heading}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-2.5 md:!mt-5 !gap-5">
        {cards?.map(({ heading, image, list }, index) => (
          <div
            key={index}
            className="bg-bg-card rounded-2xl px-2.5 !py-5 md:!p-5 "
          >
            <div className="overflow-hidden rounded-3xl mb-2.5">
              <img
                src={image}
                alt={heading}
                className="w-full hover:scale-110 transition-global"
              />
            </div>
            <h4 className="text-text-color font-primary font-medium text-lg">
              {heading}
            </h4>
            <ul className="mt-1 list-disc list-inside">
              {list?.map((node, index) => (
                <li
                  className="text-text-color font-primary text-sm"
                  key={index}
                >
                  {node}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MaterialsBlock;
