import React from "react";

export default function Kebab_view(props) {
  const { kebab } = props;
  return (
    <>
      <div className="kebab group overflow-hidden rounded-2xl bg-white border-2 border-gray-200/80 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-red-200">
        <div className="overflow-hidden">
          <img
            className="w-full h-48 object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            src={kebab.image_url}
            alt="kebab-recipe"
          />
        </div>

        <div className="p-4">
          <h2 className="text-gray-800 font-bold text-center text-lg tracking-wide group-hover:text-red-500 transition-colors duration-200 line-clamp-1">
            {kebab.title}
          </h2>
        </div>
      </div>
    </>
  );
}
