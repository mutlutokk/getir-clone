import React from "react";

export default function Foot({
  foot: { title, title1, title2, title3, title4, title5 },
}) {
  return (
    <div>
      <div className="w-[258px] h-[218px] mr-4">
        <div className="text-primary-brand-color text-lg mb-4">{title}</div>
        <div className="text-sm text-gray-600 mb-3 cursor-pointer">
          {title1}
        </div>
        <div className="text-sm text-gray-600 mb-3 cursor-pointer">
          {title2}
        </div>
        <div className="text-sm text-gray-600 mb-3 cursor-pointer">
          {title3}
        </div>
        <div className="text-sm text-gray-600 mb-3 cursor-pointer">
          {title4}
        </div>
        <div className="text-sm text-gray-600 mb-3 cursor-pointer">
          {title5}
        </div>
      </div>
    </div>
  );
}
