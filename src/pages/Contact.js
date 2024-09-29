import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Contact() {
  return (
    <div>

    <div className="flex flex-col items-center py-10 bg-gray-100">
    <div className="flex flex-col text-center">
      <h2 className="font-semibold text-3xl md:text-4xl mb-4 text-gray-800">
        The Way to Contact Us
      </h2>
      <p className="text-lg text-gray-600 mb-2">
        Delivering Exceptional Care and Advanced Medical
      </p>
      <p className="text-lg text-gray-600 mb-6">
        Solutions for Your Health and Well-being
      </p>

      <div className="w-full max-w-md">
        <form className="flex flex-col justify-center space-y-4 bg-white p-6 rounded-lg shadow-md border border-green-600">
          <input
            type="text"
            placeholder="Your Email"
            className="border border-green-600 p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="text"
            placeholder="Your Name"
            className="border border-green-600 p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="border border-green-600 text-gray-700 p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500 h-32"
          ></textarea>
          <button
            type="submit"
            className="bg-green-500 text-white p-2 rounded hover:bg-green-600 transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>


      <div class="body-content-section container mx-auto px-4 py-8 grid grid-cols-12 gap-6">

      <div class="col-span-12 md:col-span-6 flex flex-col justify-center">
        <div class="text-green-500 font-bold text-lg">APPOINTMENT</div>
        <div class="mt-2">
          <h2 class="text-2xl md:text-3xl font-semibold mb-2">Get in Touch with Us We’re Here to Help!</h2>
          <p class="text-gray-600">
            Delivering Exceptional Care and Advanced Medical Solutions for Your Health and Well-being
          </p>
        </div>
        <div class="mt-4">
          <form>
            <input 
              type="text" 
              placeholder="Your Email" 
              class="border border-green-500 p-2 w-full mb-4" 
            />
            <textarea 
              placeholder="Your Message" 
              class="border border-green-500 p-2 w-full mb-4 h-32"
            ></textarea>
            <div class="text-right">
              <input 
                type="submit" 
                class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 cursor-pointer" 
                value="Send Email"
              />
            </div>
          </form>
        </div>
      </div>
    
      <div class="col-span-12 md:col-span-6 flex flex-col items-center">
        <div class="mb-4">
          <img 
            src="/Image.jpg" 
            alt="image of a doctor diagnosing a patient" 
            class="w-full h-auto rounded shadow-md"
          />
        </div>
        <div class="text-center">
          <p class="text-xl font-semibold">555-0198</p>
          <p class="text-gray-600">123 Maple, Springfield, IL 62701</p>
          <div class="mt-2">
            <p class="text-gray-500">Monday - Saturday: 9 am - 11.30 pm</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Contact;
