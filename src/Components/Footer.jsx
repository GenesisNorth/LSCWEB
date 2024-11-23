import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-start space-y-8 lg:space-y-0 pr-9 pl-9">
        <div className="flex-none">
          <img
            src="image.png"
            alt="Logo"
            className="w-[115px] h-[109.15px] object-cover"
          />
        </div>

        <div className="flex flex-wrap gap-12">
          <div>
            <h3 className="font-medium text-base text-gray-900">Church</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li>Who we are</li>
              <li>Our Pastors</li>
              <li>Give</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-base text-gray-900">Activities</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li>Online Church</li>
              <li>Devotionals</li>
              <li>Sermons</li>
              <li>Events</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-base text-gray-900">Get Involved</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li>Become a member</li>
              <li>Join a department</li>
              <li>Join your family</li>
              <li>Start Believers’ class</li>
            </ul>
          </div>
        </div>

        <div className="w-full lg:w-auto">
          <div>
            <h3 className="font-medium text-base text-gray-700">
              Subscribe to get our newsletters
            </h3>
            <div className="mt-2 flex items-center space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full max-w-[307px] h-[53px] px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-500 outline-none focus:ring focus:ring-indigo-200"
              />
              <button className="px-6 py-3 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-500 transition">
                Subscribe
              </button>
            </div>
          </div>
          <div className="mt-6 flex flex-col items-start">
            <span className="text-gray-700 font-medium text-sm">
              Visit us at:
            </span>
            <p className="text-gray-900 text-sm">
              Havilah Plaza, opposite Global Kassa, FHA, Lugbe, Abuja.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
