import React from "react";

const TouchAndFeelCustomization = ({}) => {
  return (
    <div className="!p-5 rounded-3xl border border-text-color/30 mt-2.5">
      <h3 className="text-2xl font-primary text-text-color">{heading}</h3>
      <p className="mt-1 text-text-color text-sm font-normal font-primary max-w-658">
        {description}
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 !mt-5 !gap-5">
        {sizes?.map((node, index) => (
          <div
            key={index}
            className="!py-10 cursor-pointer p-2.5 border !border-text-color text-center group hover:!border-primary-color transition-global place-content-center rounded-2xl"
          >
            <p
              className={clsx(
                "text-[22px] group-hover:text-primary-color text-text-color font-primary font-medium transition-global",
                index === sizes.length - 1 &&
                  "flex gap-1 flex-wrap justify-center"
              )}
            >
              {index === sizes.length - 1 && <span>🔥 </span>} {node}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TouchAndFeelCustomization;
