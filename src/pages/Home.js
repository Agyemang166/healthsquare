import React from "react";
import Card2 from "../components/Card2";
import Card from "../components/Card";
import { FaBrain, FaTooth, FaEye, FaLungs } from "react-icons/fa";
import { GiHeartOrgan, GiStomach } from "react-icons/gi";

function Home() {
  return (
    <div className="flex flex-col">
      <div class="section-under-navbar">
        <div class="container">
          <div className="flex flex-col md:flex-row items-center bg-green-400 text-white p-8 md:p-16 space-y-8 md:space-y-0 md:space-x-12">
            {/* Text Section */}
            <div className="md:w-1/2 space-y-6">
              <h1 className="font-semibold text-3xl md:text-5xl leading-tight">
                Compassionate Care for Every Patient Like You
              </h1>
              <p className="text-lg md:text-xl">
                Providing Exceptional and Compassionate Care with Advanced
                Medical Solutions for Every Patient's Needs.
              </p>
              <div>
                <a
                  href="/services"
                  className="inline-block border border-white bg-white text-green-400 font-medium px-6 py-3 rounded-md hover:bg-transparent hover:text-white transition duration-300"
                >
                  Learn More
                </a>
              </div>
            </div>

            {/* Image Section */}
            <div className="md:w-1/2 flex justify-center">
              <img
                src="/HeroImage.jpg"
                alt="Two doctors researching"
                className="w-full h-auto max-w-md rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>

          <div className="second-section mt-5">
            <div className="features-title-holder">
              <h2 class="upper-title">Discover Our Comprehensive</h2>
              <h2 class="lower-title" Range of Services></h2>
            </div>
            <div className="features-paragraph mb-5">
              <p>Delivering Exceptional Care and Advanced Medical</p>
              <p>Solutions for Your Health and Well-being</p>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <Card
                icon={<FaBrain className="text-green-400 text-2xl" />}
                title="Neurology"
                description="Lorem ipsum dolor sit amet,consectetur adipiscing elit. 
                 Nonmauris nulla tincidunt appetfermentum amet sit."
                buttonText="learn More"
              />
              <Card
                icon={<FaTooth className="text-green-400 text-2xl" />}
                title="Orthodontics"
                description="Lorem ipsum dolor sit amet,consectetur adipiscing elit. 
                 Nonmauris nulla tincidunt appetfermentum amet sit."
                buttonText="learn More"
              />
              <Card
                icon={<FaEye className="text-green-400 text-2xl" />}
                title="Opthalmologists"
                description="Lorem ipsum dolor sit amet,consectetur adipiscing elit. 
                 Nonmauris nulla tincidunt appetfermentum amet sit."
                buttonText="learn More"
              />
              <Card
                icon={<FaLungs className="text-green-400 text-2xl" />}
                title="Pulmonology"
                description="Lorem ipsum dolor sit amet,consectetur adipiscing elit. 
                 Nonmauris nulla tincidunt appetfermentum amet sit."
                buttonText="learn More"
              />
              <Card
                icon={<GiStomach className="text-green-400 text-2xl" />}
                title="Gastroenterologist"
                description="Lorem ipsum dolor sit amet,consectetur adipiscing elit. 
                 Nonmauris nulla tincidunt appetfermentum amet sit."
                buttonText="learn More"
              />
              <Card
                icon={<GiHeartOrgan className="text-green-400 text-2xl" />}
                title="Cardiology"
                description="Lorem ipsum dolor sit amet,consectetur adipiscing elit. 
                 Nonmauris nulla tincidunt appetfermentum amet sit."
                buttonText="learn More"
              />
            </div>
          </div>
        </div>{" "}
        <br />
        <div className="main-section">
          <div className="flex flex-col md:flex-row  md:items-start space-y-8 md:space-y-0 md:space-x-8 p-6 bg-gray-50">
            {/* Image Holder */}
            <div className="">
              <img
                src="GridImage01.jpg"
                alt="image of a female doctor diagnosing a patient"
                className="w-[700px] h-[500px] object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Paragraph Holder */}
            <div className="text-center md:text-left max-w-lg space-y-4">
              {/* Title */}
              <div className="text-green-600 font-semibold tracking-wider">
                APPOINTMENT
              </div>

              {/* Heading */}
              <div className="text-3xl font-bold text-gray-800 leading-snug">
                <h3>Meet Our Expert Team of Specialized Doctors</h3>
              </div>

              {/* Description */}
              <div className="text-gray-600 text-lg space-y-1">
                <p>Delivering Exceptional Care and Advanced Medical</p>
                <p>Solutions for Your Health and Well-being</p>
              </div>

              {/* Button */}
              <div>
                <a
                  href="/about"
                  className="inline-block px-6 py-3 bg-green-600 text-white font-medium rounded hover:bg-green-700 transition duration-300"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>


          <div className="flex flex-col md:flex-row  md:items-start space-y-8 md:space-y-0 md:space-x-8 p-6 bg-gray-50">
            <div className="text-center md:text-left max-w-lg space-y-4">
              {/* Title */}
              <div className="text-green-600 font-semibold tracking-wider">
                APPOINTMENT
              </div>

              {/* Heading */}
              <div className="text-3xl font-bold text-gray-800 leading-snug">
                <h3> Our Dedicated Medical and Support Staff</h3>
              </div>

              {/* Description */}
              <div className="text-gray-600 text-lg space-y-1">
              <p>Delivering Exceptional Care and Advanced Medical</p>
              <p>Solutions for Your Health and Well-being</p>
              </div>

              {/* Button */}
              <div>
                <a
                  href="/about"
                  className="inline-block px-6 py-3 bg-green-600 text-white font-medium rounded hover:bg-green-700 transition duration-300"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="">
              <img
                src="GridImage02.jpg"
                alt="image of a female doctor diagnosing a patient"
                className="w-[700px] h-[500px] object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
          <br />

          <div class="third-section">
            <div class="font-semibold text-5xl">
              <h2>Discover Our Comprehensive</h2>
              <h2>Range of Services:</h2>
            </div>{" "}
            <br />
            <div class="text-gray-500">
              <p>Delivering Exceptional Care and Advanced Medical </p>
              <p>Solutions for Your Health and Well-being</p>
            </div>{" "}
            <br />
            <div className="image-holder">
              <img src="Image5.jpg" alt="two doctors in a lab" />
            </div>{" "}
            <br />
            <div class="space-x-12 flex flex-row pl-16 justify-center">
              <div className="border border-green-400">
                <div className="text-green-500 font-bold text-4xl px-20 py-5">
                  2B +
                </div>
                <div stats-paragraph>Lorem ipsum dolor sit amet</div>
              </div>
              <div className="border border-green-400">
                <div className="text-green-500 font-bold text-4xl px-20 py-5">
                  2008
                </div>
                <div stats-paragraph>Lorem ipsum dolor sit amet</div>
              </div>
              <div className="border border-green-400">
                <div className="text-green-500 font-bold text-4xl px-20 py-5">
                  20+
                </div>
                <div stats-paragraph>Lorem ipsum dolor sit amet</div>
              </div>
            </div>
          </div>{" "}
          <br /> <br /> <br />
        </div>
        <div class="last-section">
          <div className="justify-center">
            <div class="font-semibold text-3xl">
              {" "}
              <h2>What people say</h2>{" "}
            </div>{" "}
            <br />
            <div class="text-gray-600 text-xl">
              <p>
                Nisl nunc mi ipsum faucibus. Fringilla est ullamcorper eget
                nulla.
              </p>
              <p>Nisi porta lorem.</p>
            </div>{" "}
            <br />
          </div>{" "}
          <br />
          <div className="flex flex-row space-x-4">
            <Card2
              picture={
                <img
                  className="rounded-full"
                  src="pic01.jpg"
                  alt="picture of a lady"
                />
              }
              description="Alex Rodriguez"
              job="Tech Haven"
              logo={<img src="logo1.svg" alt="Cloud company logo" />}
              comment="Best decision we made for our retail business! 'Best of the Best' feature is a game-changer. Variable's commitment to excellence truly stands out. Our efficiency has skyrocketed."
            />
            <Card2
              picture={
                <img
                  className="rounded-full"
                  src="pic02.jpg"
                  alt="picture of a lady"
                />
              }
              description="Emily Chen"
              job="Style Emporium"
              logo={<img src="logo5.svg" alt="Clues company logo" />}
              comment="The AI Search feature is a lifesaver. It's like having a personal assistant for product searches. Variable has exceeded our expectations, making our marketing strategies more data-driven and effective."
            />
            <Card2
              picture={
                <img
                  className="rounded-full"
                  src="pic03.jpg"
                  alt="picture of a male"
                />
              }
              description="Michael Reynolds"
              job="CFO, Mega Mart"
              logo={<img src="logo2.svg" alt="Rise company logo" />}
              comment="Secure Servers gave us peace of mind. Variable takes data security seriously, and it reflects in the robustness of their servers. Our financial data is in safe hands."
            />
          </div>
        </div>{" "}
        <br />
        <div class="body-content-section container mx-auto px-4 py-8 grid grid-cols-12 gap-6">
          <div class="col-span-12 md:col-span-6 flex flex-col justify-center">
            <div class="text-green-500 font-bold text-lg">APPOINTMENT</div>
            <div class="mt-2">
              <h2 class="text-2xl md:text-3xl font-semibold mb-2">
                Get in Touch with Us We’re Here to Help!
              </h2>
              <p class="text-gray-600">
                Delivering Exceptional Care and Advanced Medical Solutions for
                Your Health and Well-being
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
    </div>
  );
}

export default Home;
