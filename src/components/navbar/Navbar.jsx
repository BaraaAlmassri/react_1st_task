import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="shrink-0 flex items-center gap-2">
            <span className="text-xl font-black tracking-tight text-gray-800 uppercase">
              Food<span className="text-red-500">Hub</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8 font-semibold text-gray-600">
            <a
              href="#about"
              className="relative py-2 transition-colors duration-200 hover:text-red-500 group"
            >
              About us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#policy"
              className="relative py-2 transition-colors duration-200 hover:text-red-500 group"
            >
              Subscription policy
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#pizzas"
              className="relative py-2 transition-colors duration-200 hover:text-red-500 group"
            >
              Pizzas
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#kebabs"
              className="relative py-2 transition-colors duration-200 hover:text-red-500 group"
            >
              Kebabs
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#tacos"
              className="relative py-2 transition-colors duration-200 hover:text-red-500 group"
            >
              Tacos
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>

          <div className="hidden md:block">
            <button className="bg-red-500 text-white font-bold px-5 py-2.5 rounded-xl shadow-md shadow-red-500/20 hover:bg-red-600 hover:shadow-lg hover:shadow-red-500/30 transition-all duration-300 transform hover:-translate-y-0.5">
              Order Now
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-xl text-gray-500 hover:text-red-500 hover:bg-gray-50 focus:outline-none transition-colors duration-200"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-screen opacity-100 border-t border-gray-100" : "max-h-0 opacity-0 overflow-hidden"}`}
      >
        <div className="px-4 pt-3 pb-6 space-y-3 bg-white font-semibold text-gray-700">
          <a
            href="#about"
            className="block px-3 py-2 rounded-xl hover:bg-red-50 hover:text-red-500 transition-colors duration-200"
          >
            About us
          </a>
          <a
            href="#policy"
            className="block px-3 py-2 rounded-xl hover:bg-red-50 hover:text-red-500 transition-colors duration-200"
          >
            Subscription policy
          </a>
          <a
            href="#pizzas"
            className="block px-3 py-2 rounded-xl hover:bg-red-50 hover:text-red-500 transition-colors duration-200"
          >
            Pizzas
          </a>
          <a
            href="#kebabs"
            className="block px-3 py-2 rounded-xl hover:bg-red-50 hover:text-red-500 transition-colors duration-200"
          >
            Kebabs
          </a>
          <a
            href="#tacos"
            className="block px-3 py-2 rounded-xl hover:bg-red-50 hover:text-red-500 transition-colors duration-200"
          >
            Tacos
          </a>
          <div className="pt-2 px-3">
            <button className="w-full bg-red-500 text-white font-bold py-3 rounded-xl shadow-md">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
