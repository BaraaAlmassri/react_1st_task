import React from "react";

export default function Aboutus() {
  return (
    <>
      <section id="about" className="py-24 bg-white scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="grid grid-cols-2 gap-4 relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-red-50 rounded-3xl -z-10 hidden sm:block"></div>

              <div className="space-y-4">
                <img
                  className="w-full h-48 sm:h-64 object-cover rounded-2xl shadow-md transform hover:scale-102 transition-transform duration-300"
                  src="./../src/images/aboutus/food1.jpg"
                  alt="Fresh pizza baking"
                />
                <img
                  className="w-full h-40 sm:h-48 object-cover rounded-2xl shadow-md transform hover:scale-102 transition-transform duration-300"
                  src="./../src/images/aboutus/food2.jpg"
                  alt="Gourmet ribs and kebabs"
                />
              </div>

              <div className="space-y-4 pt-8">
                <img
                  className="w-full h-40 sm:h-48 object-cover rounded-2xl shadow-md transform hover:scale-102 transition-transform duration-300"
                  src="./../src/images/aboutus/food3.jpg"
                  alt="Fresh healthy dishes"
                />
                <img
                  className="w-full h-48 sm:h-64 object-cover rounded-2xl shadow-md transform hover:scale-102 transition-transform duration-300"
                  src="./../src/images/aboutus/food4.jpg"
                  alt="Sizzling tacos ready"
                />
              </div>
            </div>

            <div className="space-y-6 lg:max-w-xl">
              <div className="space-y-2">
                <span className="text-red-500 font-extrabold uppercase tracking-widest text-sm">
                  Our Story
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight leading-tight">
                  Cooked by Passion. <br />
                  <span className="text-red-500">Delivered with Care.</span>
                </h2>
              </div>

              <p className="text-gray-600 text-lg leading-relaxed">
                At FoodHub, we believe great food has the power to bring people
                together. What started as a small kitchen project has evolved
                into a premium culinary repository, gathering the finest recipes
                for Pizzas, sizzling Kebabs, and street-style Tacos.
              </p>

              <p className="text-gray-600 text-base leading-relaxed">
                We treat food with absolute precision. Every dish is crafted
                using premium, locally-sourced ingredients, handled by chefs who
                obsess over traditional flavor balancing and crisp texture
                execution.
              </p>

              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100">
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-gray-900">
                    10k+
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500 font-semibold uppercase mt-1">
                    Happy Guests
                  </p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-gray-900">
                    50+
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500 font-semibold uppercase mt-1">
                    Secret Recipes
                  </p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-gray-900">
                    15 min
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500 font-semibold uppercase mt-1">
                    Avg Delivery
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href="#policy"
                  className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-bold px-6 py-3.5 rounded-xl transition-all duration-300 shadow-lg shadow-gray-900/10 hover:shadow-xl"
                >
                  Learn Our Policy
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
