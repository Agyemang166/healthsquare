import React from 'react'
import Card2 from '../components/Card2'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FAQAccordion from '../components/FaqAccordion'



function About() {
    return (
        <div> <br /> <br />

            <div class="upper-section">
                <div className='flex flex-row'>
                    <div class="pt-28">
                        <div className='font-semibold text-6xl text-left p-2'>
                            <h1>Compassionate</h1>
                            <h1>Care for Every</h1>
                            <h1>Patient like you</h1>
                        </div>
                        <div className='text-gray- text-left p-3'>
                            <p>Providing Exceptional and Compassionate Care</p>
                            <p>with Advanced Medical Solutions for Every</p>
                            <p>Patient</p>
                        </div>
                        <div class="bg-green-500 border text-white"><a href="/services" class="button white-button w-button">Learn More</a></div>
                    </div>
                    <div className='pl-12 justify-end'>
                        <img src='AboutImage01.jpg' alt='a doctor in the lab' />
                    </div>
                </div>
                <br />

                <div className='flex flex-row space-x-9 animate-slowscroll'>
                    <div class="logo1-wrapper"> <img src='logo1.svg' alt='Cloud company logo' /> </div>
                    <div class="logo1-wrapper"> <img src='logo2.svg' alt='Rise company logo' /> </div>
                    <div class="logo1-wrapper"><img src='logo3.svg' alt='Trace company logo' /></div>
                    <div class="logo1-wrapper"><img src='logo4.svg' alt='Volume company logo' /></div>
                    <div class="logo1-wrapper"><img src='logo5.svg' alt='Clues company logo' /></div>
                </div>

            </div>

            <div className='space-x-6 m-8'>
                <div className='flex flex-row mt-16'>
                    <div className='text-left pl-6 pb-6'>
                        <h2 className='font-semibold text-4xl'>You're in
                            <span class="text-green-500 "> Good Hands</span>
                        </h2>
                        <div paragraph-section>
                            <p>Lorem ipsum dolor sit amet consectetur.In quis aliquet leo in vel</p>
                            <p>pharetra pellentesque convallis.Cras aliquam a faucibus</p>
                        </div>
                    </div>
                    <div class='space-x-12 flex flex-row pl-16'>
                        <div className='border'>
                            <div className='text-green-500 font-bold text-4xl px-20 py-5'>2B +</div>
                            <div stats-paragraph>
                                <p>Lorem ipsum </p>
                                <p>dolor</p>
                            </div>
                        </div>
                        <div className='border'>
                            <div className='text-green-500 font-bold text-4xl px-20 py-5'>2008</div>
                            <div stats-paragraph>Lorem ipsum dolor</div>
                        </div>
                    </div>
                </div> <br />
                <div className='image-holder'>
                    <img src='AboutImage02.jpg' alt='a male doctor diagnosing male patient' />
                </div>
            </div> <br />

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
  
            <br /> <br /> <br />
          </div>


            <div className='fourth-section py-4'>
  <div className='heading-section text-center mb-8'>
    <div className='title-section'>
      <h2 className='title text-3xl font-semibold'>Meet Our Doctors</h2>
    </div>
    <div className='section-paragraph mt-4 text-gray-600'>
      <p>Nisl nunc mi ipsum faucibus. Fringilla est ullamcorper eget nulla.</p>
      <p>Nisi porta lorem.</p>
    </div>
  </div>
  <div className='flex flex-wrap justify-center'>
    <div className='doctor-slide flex flex-col items-center m-4'>
      <div className='doctor-image mb-4'>
        <img
          className=' border border-gray-300 p-2 w-[450px] h-[450px] object-cover'
          src='docto_01.jpg'
          alt='Doctor 1'
        />
      </div>
      <div className='name font-medium text-lg'>Luke Voiles</div>
      <div className='position text-gray-500'>Chief Executive Officer</div>
    </div>
    <div className='doctor-slide flex flex-col items-center m-4'>
      <div className='doctor-image mb-4'>
        <img
          className=' border border-gray-300 p-2 w-[450px] h-[450px] object-cover'
          src='doctor_02.jpg'
          alt='Doctor 2'
        />
      </div>
      <div className='name font-medium text-lg'>Jane Doe</div>
      <div className='position text-gray-500'>Chief Medical Officer</div>
    </div>
    <div className='doctor-slide flex flex-col items-center m-4'>
      <div className='doctor-image mb-4'>
        <img
          className=' border border-gray-300 p-2 w-[450px] h-[450px] object-cover'
          src='doctor03.jpg'
          alt='Doctor 3'
        />
      </div>
      <div className='name font-medium text-lg'>John Smith</div>
      <div className='position text-gray-500'>Head of Surgery</div>
    </div>
  </div>
</div>


            <FAQAccordion/>
            
            <div class='sixth-section'>
                <div className='words-section'>
                    <div class='title'> <h2>What people say</h2> </div>
                    <div class='paragraph-section'>
                        <p>Nisl nunc mi ipsum faucibus. Fringilla est ullamcorper eget nulla.</p>
                        <p>Nisi porta lorem.</p>
                    </div>
                </div>
            <Card2/>
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



    )
}

export default About
