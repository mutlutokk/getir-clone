import React from "react";

export default function Foot({
  foot: {
    id,
    title,
    title1,
    title2,
    title3,
    title4,
    title5,
    image,
    image1,
    image2,
  },
}) {
  return (
    <div>
      <div className="w-[258px] h-[218px] mr-4">
        <div className="text-primary-brand-color text-lg mb-4">{title}</div>
        <div className="text-sm text-gray-600 mb-3">{title1}</div>
        <div className="text-sm text-gray-600 mb-3">{title2}</div>
        <div className="text-sm text-gray-600 mb-3">{title3}</div>
        <div className="text-sm text-gray-600 mb-3">{title4}</div>
        <div className="text-sm text-gray-600 mb-3">{title5}</div>
      </div>
    </div>
  );
}
