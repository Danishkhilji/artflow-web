import React, { useState } from "react";

const PrintCustomizationBlock = ({ heading, description, cards }) => {
  const [color, setColor] = useState("#FFFFFF");
  console.log(color);

  return (
    <div className="px-2.5 !py-5 lg:!p-5 rounded-3xl border !border-text-color/30 !mt-5 md:mt-2.5">
      <h3 className="text-22 font-primary text-text-color uppercase font-medium">
        {heading}
      </h3>
      <p className="mt-1 text-text-color text-sm font-normal font-primary max-w-658">
        {description}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 !mt-5 !gap-5">
        {cards?.map(({ title, metaTitle, image }, index) => (
          <div key={index} className="flex flex-col items-center gap-2.5">
            <div className="bg-tertiary-color rounded-2xl h-[269px] w-full relative">
              {index === 0 && (
                <div className="absolute left-3 top-4 flex items-center gap-1 z-10">
                  <button
                    onClick={() => setColor("#FFFFFF")}
                    className="w-fit h-fit rounded-full p-0.5 border border-text-color/30"
                  >
                    <span className="w-2 h-2 block rounded-full bg-white"></span>
                  </button>
                  <button
                    onClick={() => setColor("#000000")}
                    className="w-fit h-fit rounded-full p-0.5 border border-text-color/30"
                  >
                    <span className="w-2 h-2 block rounded-full bg-black"></span>
                  </button>
                  <button
                    onClick={() => setColor("#7ba0d0")}
                    className="w-fit h-fit rounded-full p-0.5 border border-text-color/30"
                  >
                    <span className="w-2 h-2 block rounded-full bg-blue-color"></span>
                  </button>
                  <button
                    onClick={() => setColor("#1E3E89")}
                    className="w-fit h-fit rounded-full p-0.5 border border-text-color/30"
                  >
                    <span className="w-2 h-2 block rounded-full bg-primary-color"></span>
                  </button>
                </div>
              )}
              <img src={image} alt={title} className="absolute w-full h-full object-scale-down" />
            </div>
            <div>
              <h4 className="text-22 font-primary font-medium text-text-color text-center uppercase">
                {title}
              </h4>
              <p className="text-center text-text-color font-primary text-sm font-normal">
                {metaTitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrintCustomizationBlock;
