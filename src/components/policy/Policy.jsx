import React from "react";

export default function Policy() {
  return (
    <>
      <section id="policy" className="py-24 bg-gray-50 scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-red-500 font-extrabold uppercase tracking-widest text-sm">
              Membership Plans
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
              Our Subscription Policy & Pricing
            </h2>
            <p className="text-gray-600 text-base sm:text-lg">
              Unlock unlimited free delivery, exclusive weekend recipe access,
              and priority kitchen preparation. Choose a flexible tier that
              satisfies your lifestyle—cancel anytime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-3xl p-8 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    Casual Foodie
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Perfect for weekend cravings
                  </p>
                </div>
                <div className="flex items-baseline text-gray-900">
                  <span className="text-4xl font-black tracking-tight">
                    $9.99
                  </span>
                  <span className="text-gray-500 ml-1 text-sm font-semibold">
                    /month
                  </span>
                </div>
                <ul className="space-y-4 text-sm text-gray-600 border-t border-gray-100 pt-6">
                  <li className="flex items-center gap-3">
                    <span className="text-green-500 font-bold">✓</span> 5 Free
                    Deliveries per month
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-green-500 font-bold">✓</span> 10% Off
                    all Tacos & Kebabs
                  </li>
                  <li className="flex items-center gap-3 text-gray-400 line-through">
                    <span>✕</span> Priority Kitchen Queue
                  </li>
                </ul>
              </div>
              <button className="w-full mt-8 bg-gray-50 hover:bg-gray-100 text-gray-800 font-bold py-3 px-4 rounded-xl transition-colors duration-200">
                Get Started
              </button>
            </div>

            <div className="bg-white border-2 border-red-500 rounded-3xl p-8 flex flex-col justify-between shadow-xl relative transform md:-translate-y-4">
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-500 text-white uppercase text-xs font-black tracking-widest px-4 py-1.5 rounded-full shadow-md">
                Most Popular
              </span>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    Daily Feast
                  </h3>
                  <p className="text-sm text-red-500 font-medium mt-1">
                    Best value for absolute food lovers
                  </p>
                </div>
                <div className="flex items-baseline text-gray-900">
                  <span className="text-4xl font-black tracking-tight">
                    $24.99
                  </span>
                  <span className="text-gray-500 ml-1 text-sm font-semibold">
                    /month
                  </span>
                </div>
                <ul className="space-y-4 text-sm text-gray-600 border-t border-gray-100 pt-6">
                  <li className="flex items-center gap-3">
                    <span className="text-red-500 font-bold">✓</span>{" "}
                    **Unlimited Free Delivery**
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-red-500 font-bold">✓</span> 15% Off
                    across the entire menu
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-red-500 font-bold">✓</span> Priority
                    Kitchen Preparation
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-red-500 font-bold">✓</span> 1 Free
                    Secret Dessert weekly
                  </li>
                </ul>
              </div>
              <button className="w-full mt-8 bg-red-500 hover:bg-red-600 text-white font-extrabold py-3 px-4 rounded-xl shadow-md shadow-red-500/20 transition-all duration-200">
                Subscribe Now
              </button>
            </div>

            <div className="bg-white border border-gray-200 rounded-3xl p-8 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    Family Box VIP
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Tailored for large gatherings
                  </p>
                </div>
                <div className="flex items-baseline text-gray-900">
                  <span className="text-4xl font-black tracking-tight">
                    $49.99
                  </span>
                  <span className="text-gray-500 ml-1 text-sm font-semibold">
                    /month
                  </span>
                </div>
                <ul className="space-y-4 text-sm text-gray-600 border-t border-gray-100 pt-6">
                  <li className="flex items-center gap-3">
                    <span className="text-green-500 font-bold">✓</span>{" "}
                    Everything in Daily Feast
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-green-500 font-bold">✓</span> Shared
                    access up to 4 devices
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-green-500 font-bold">✓</span> 25% Off
                    all massive Pizza sizes
                  </li>
                </ul>
              </div>
              <button className="w-full mt-8 bg-gray-50 hover:bg-gray-100 text-gray-800 font-bold py-3 px-4 rounded-xl transition-colors duration-200">
                Choose Family
              </button>
            </div>
          </div>

          <div className="mt-16 bg-white border border-gray-100 rounded-2xl p-6 max-w-4xl mx-auto text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-gray-900">
                Need to pause or cancel your subscription?
              </h4>
              <p className="text-xs text-gray-500 max-w-2xl">
                Subscriptions renew automatically every 30 days. You can cancel
                online anytime through your account dashboard with a single
                click. No hidden termination fees, no questions asked.
              </p>
            </div>
            <a
              href="#contact"
              className="text-sm font-bold text-red-500 whitespace-nowrap hover:text-red-600 underline decoration-2 underline-offset-4"
            >
              Read Full Terms & Rules →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
