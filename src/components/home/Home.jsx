import React, { useState } from "react";
import Navbar from "../navbar/Navbar";

export default function home() {
  return (
    <>
      <Navbar></Navbar>

      <section className="relative w-full min-h-screen flex items-center justify-center bg-[url('./../src/images/hero/food.jpg')] bg-cover bg-center bg-no-repeat pt-24 pb-12">
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/50 to-black/75 z-0"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center text-white">
          <p className="text-red-400 font-bold uppercase tracking-widest text-xs sm:text-sm md:text-base mb-3 drop-shadow-sm">
            Satisfying Your Cravings
          </p>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-tight sm:leading-none mb-6 max-w-4xl mx-auto drop-shadow-md">
            Your Favorite Meals,{" "}
            <span className="text-red-500 block sm:inline mt-2 sm:mt-0">
              Delivered Fresh.
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 max-w-2xl lg:max-w-3xl mx-auto mb-8 sm:mb-10 leading-relaxed font-medium px-2 sm:px-0">
            From smoky, perfectly spiced Kebabs to hot, cheesy Pizzas and
            vibrant, crispy Tacos. Discover premium local recipes prepared fresh
            and brought straight to your table.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xs sm:max-w-none mx-auto w-full px-4 sm:px-0">
            <button className="w-full sm:w-auto bg-red-500 text-white font-extrabold px-8 py-3.5 sm:py-4 rounded-xl text-base sm:text-lg shadow-xl shadow-red-500/30 hover:bg-red-600 hover:shadow-red-500/40 transition-all duration-300 transform hover:-translate-y-1">
              Explore Our Menu
            </button>
            <button className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold px-8 py-3.5 sm:py-4 rounded-xl text-base sm:text-lg border border-white/20 transition-all duration-300 transform hover:-translate-y-1">
              View Pricing Policy
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
