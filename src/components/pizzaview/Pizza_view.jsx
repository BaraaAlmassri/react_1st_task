import React from "react";

export default function Pizza_view(props) {
  const { pizza } = props;
  return (
    <>
      <div className="pizza group overflow-hidden rounded-2xl bg-white border-2 border-gray-200/80 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-red-200">
        <img
          className="w-full h-48 object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          src={pizza.image_url}
          alt="pizza-recipe"
        />
        <div className="p-4">
          <h2 className="text-gray-800 font-bold text-center text-lg tracking-wide group-hover:text-red-500 transition-colors duration-200 line-clamp-1">
            {pizza.title}
          </h2>
        </div>
      </div>
    </>
  );
}
