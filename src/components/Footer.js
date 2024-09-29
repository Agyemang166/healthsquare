import React from 'react';

const Footer = () => {
  return (
    <div className="bg-[#01701f] py-10">
      <div className="container mx-auto px-6">
        {/* Top section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          {/* Logo and description */}
          <a href="#home" className="flex flex-col md:flex-col items-center space-y-3 md:space-y-0 md:space-x-4">
            <img src="/myImage.svg" alt="HealthSquare logo" className="h-16 md:h-20 w-auto" />
            <div>
              <h2 className="text-white text-lg font-bold">Transform your World with HealthSquare</h2>
              <p className="text-white max-w-xs md:max-w-sm">
                Aliquam et tellus urna. Phasellus eget adipiscing elit. Mauris id nunc odio. Aliquam et tellus urna.
              </p>
            </div>
          </a>

          {/* Navigation Links */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 mt-10 md:mt-0">
            {/* Main Pages */}
            <div className="flex flex-col space-y-1">
              <h3 className="text-white font-semibold mb-2">Main Pages</h3>
              <a href="#home" className="text-gray-200 hover:text-white">Home (Sales)</a>
              <a href="#home-v1" className="text-gray-200 hover:text-white">Home V1</a>
              <a href="#home-v2" className="text-gray-200 hover:text-white">Home V2</a>
              <a href="#home-v3" className="text-gray-200 hover:text-white">Home V3</a>
              <a href="#about" className="text-gray-200 hover:text-white">About</a>
              <a href="#features" className="text-gray-200 hover:text-white">Features</a>
              <a href="#blog-v1" className="text-gray-200 hover:text-white">Blog V1</a>
              <a href="#blog-v2" className="text-gray-200 hover:text-white">Blog V2</a>
              <a href="#blog-v3" className="text-gray-200 hover:text-white">Blog V3</a>
            </div>

            {/* Blog and Contact */}
            <div className="flex flex-col space-y-2">
              <a href="#blog-post" className="text-gray-200 hover:text-white">Blog Post</a>
              <a href="#contact-v1" className="text-gray-200 hover:text-white">Contact V1</a>
              <a href="#contact-v2" className="text-gray-200 hover:text-white">Contact V2</a>
              <a href="#contact-v3" className="text-gray-200 hover:text-white">Contact V3</a>
              <a href="#pricing" className="text-gray-200 hover:text-white">Pricing</a>
              <a href="#pricing-single" className="text-gray-200 hover:text-white">Pricing Single</a>
              <a href="#checkout" className="text-gray-200 hover:text-white">Checkout</a>
            </div>

            {/* Social Media */}
            <div className="flex flex-col space-y-2">
              <h3 className="text-white font-semibold mb-2">Social Media</h3>
              <a href="http://instagram.com/" className="text-gray-200 hover:text-white">Instagram</a>
              <a href="http://fb.com/" className="text-gray-200 hover:text-white">Facebook</a>
              <a href="http://linkedin.com/" className="text-gray-200 hover:text-white">LinkedIn</a>
              <a href="http://twitter.com/" className="text-gray-200 hover:text-white">Twitter</a>
            </div>

            {/* Webflow Stuff */}
            <div className="flex flex-col space-y-2">
              <h3 className="text-white font-semibold mb-2">Webflow Stuff</h3>
              <a href="#style-guide" className="text-gray-200 hover:text-white">Style Guide</a>
              <a href="#licensing" className="text-gray-200 hover:text-white">Licensing</a>
              <a href="#change-log" className="text-gray-200 hover:text-white">Change Log</a>
              <a href="#instructions" className="text-gray-200 hover:text-white">Instructions</a>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-300 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-200 text-sm">
          <p className="text-center">
            Created by <a href="http://madebyoversight.com/" className="hover:underline">OVERSIGHT</a>
          </p>
          <p className="text-center mt-4 md:mt-0">
            Powered by <a href="https://webflow.com/" className="hover:underline">WEBFLOW</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
