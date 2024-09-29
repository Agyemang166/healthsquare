import React from 'react'
import Card2 from '../components/Card2'
import Card from '../components/Card'
import { FaBrain, FaTooth, FaEye, FaLungs } from "react-icons/fa";
import { GiHeartOrgan, GiStomach } from "react-icons/gi";
import FaqAccordion from "../components/FaqAccordion"



function Services() {
  return (
    <div>
      <h1>Welcome to Services Page</h1>
      <div className='upper-section'>
        <div class='image'>
          <img src='Services Image1.jpg' alt='' />
        </div>
        <div className='flex flex-row space-x-9 animate-slowscroll'>
          <div class="logo1-wrapper"> <img src='logo1.svg' alt='Cloud company logo' /> </div>
          <div class="logo1-wrapper"> <img src='logo2.svg' alt='Rise company logo' /> </div>
          <div class="logo1-wrapper"><img src='logo3.svg' alt='Trace company logo' /></div>
          <div class="logo1-wrapper"><img src='logo4.svg' alt='Volume company logo' /></div>
          <div class="logo1-wrapper"><img src='logo5.svg' alt='Clues company logo' /></div>
        </div>


      </div>
      <div className='second-section mt-5'>
        <div className='features-title-holder'>
          <h2 class="upper-title">Discover Our Comprehensive</h2>
          <h2 class="lower-title" Range of Services></h2>
        </div>
        <div className='features-paragraph mb-5'>
          <p>Delivering Exceptional Care and Advanced Medical</p>
          <p>Solutions for Your Health and Well-being</p>
        </div>

        <div className='grid grid-cols-3 gap-6'>
          <Card
            icon={<FaBrain className='text-green-400 text-2xl' />}
            title="Neurology"
            description="Lorem ipsum dolor sit amet,consectetur adipiscing elit. 
               Nonmauris nulla tincidunt appetfermentum amet sit."
            buttonText="learn More"
          />
          <Card
            icon={<FaTooth className='text-green-400 text-2xl'  />}
            title="Orthodontics"
            description="Lorem ipsum dolor sit amet,consectetur adipiscing elit. 
               Nonmauris nulla tincidunt appetfermentum amet sit."
            buttonText="learn More"
          />
          <Card
            icon={<FaEye className='text-green-400 text-2xl' />}
            title="Opthalmologists"
            description="Lorem ipsum dolor sit amet,consectetur adipiscing elit. 
               Nonmauris nulla tincidunt appetfermentum amet sit."
            buttonText="learn More"
          />
          <Card
            icon={<FaLungs className='text-green-400 text-2xl' />}
            title="Pulmonology"
            description="Lorem ipsum dolor sit amet,consectetur adipiscing elit. 
               Nonmauris nulla tincidunt appetfermentum amet sit."
            buttonText="learn More"
          />
          <Card
            icon={<GiStomach className='text-green-400 text-2xl' />}
            title="Gastroenterologist"
            description="Lorem ipsum dolor sit amet,consectetur adipiscing elit. 
               Nonmauris nulla tincidunt appetfermentum amet sit."
            buttonText="learn More"
          />
          <Card
            icon={<GiHeartOrgan className='text-green-400 text-2xl' />}
            title="Cardiology"
            description="Lorem ipsum dolor sit amet,consectetur adipiscing elit. 
               Nonmauris nulla tincidunt appetfermentum amet sit."
            buttonText="learn More"
          />
        </div>

      </div>
      <div className='third-section'>
        <div className='features-title-holder'>
          <h2 class="upper-title">Discover Our Comprehensive</h2>
          <h2 class="lower-title" Range of Services></h2>
        </div>
        <div className='features-paragraph'>
          <p>Delivering Exceptional Care and Advanced Medical</p>
          <p>Solutions for Your Health and Well-being</p>
        </div>
        <div className='flex flex-row'>
          <div className='flex flex-col'>
            <div className='flex flex-row'>
              <div class='image'>
                <img className=' border border-green-500 rounded-full p-4' src='Grid Icons (1).svg' alt='' />
              </div>
              <div class='text-left p-1 m-2'>
                <div  class='font-semibold text-xl'>Modern Instrument </div>
                <p class='no-margins'>We strive to utilize the most </p>
                <p>advanced and reliable instruments</p>
                <p>to ensure accurate diagnoses and</p>
                <p>effective healthcare.</p>
              </div>
            </div>
            <div className='flex flex-row' >
              <div class='image'>
                <img className=' border border-green-500 rounded-full p-4' src='Grid Icons (2).svg' alt='' />
              </div>
              <div class='text-left p-1 m-2'>
                <div  class='font-semibold text-xl'>Easy Billing System </div>
                <p class='no-margins'>Committed to providing a simple </p>
                <p>and user-friendly billing system to</p>
                <p>make the payment process</p>
                <p>smooth and hassle-free.</p>
              </div>
            </div>
            <div className='flex flex-row'>
              <div class='image'>
                <img className=' border border-green-500 rounded-full p-4 ' src='Grid Icons (3).svg' alt='' />
              </div>
              <div  class='text-left p-1 m-2'>
                <div class='font-semibold text-xl'>Qualified Nurses & Staff </div>
                <p class='no-margins'>We pride ourselves on having a </p>
                <p>team of highly qualified nurses</p>
                <p>and staff dedicated to deliver the</p>
                <p>best care for our patients.</p>
              </div>
            </div>

          </div>
          <div className='image-right-section'>
            <img src='Grid Images (4).jpg' alt='scan machine image' />
          </div>
        </div> <br />
        <div className='flex flex-row'>
          <div className='image-section'>
            <img src='Grid Images (5).jpg' alt='' />
          </div>
          <div className='text-left '>
            <div>
              <h3 className='font-semibold text-4xl'>
                You're in
                <span class="text-green-500 "> Good Hands</span>
                
              </h3>
            </div>
            <div className='text-gray-500'>
              <p>Providing Exceptional and Compassionate Care</p>
              <p>with Advanced Medical Solutions for Every</p>
              <p>Patient's Unique Needs</p>
            </div>
            <div  class='space-x-12 flex flex-row mb-4 mt-4'>
              <div className='border'>
                <div className='text-green-500 font-bold text-4xl px-20 py-5'>2B +</div>
                <div stats-paragraph>Lorem ipsum dolor</div>
              </div>
              <div className='border'>
                <div className='text-green-500 font-bold text-4xl px-20 py-5'>2008</div>
                <div stats-paragraph>Lorem ipsum dolor</div>
              </div>
            </div>
            <div class='text-white bg-green-500'>
            <a href="/about" class="button w-button">Learn More</a>
            </div>

          </div>
        </div>
      </div>
      <div class='fourth-section'>
        <div  className='justify-center mb-10 mt-20' >
          <div  class='font-semibold text-3xl'> <h2>What people say</h2> </div>
          <div  class='text-gray-600 text-xl'>
            <p>Nisl nunc mi ipsum faucibus. Fringilla est ullamcorper eget nulla.</p>
            <p>Nisi porta lorem.</p>
          </div>
        </div>
        <div className='flex flex-row space-x-4'>
          <Card2
            picture={<img className='rounded-full' src='pic01.jpg' alt='picture of a lady'/> }
            description='Alex Rodriguez'
            job='Tech Haven'
            logo={<img src='logo1.svg' alt='Cloud company logo'/>}
            comment="Best decision we made for our retail business! 'Best of the Best' feature is a game-changer. Variable's commitment to excellence truly stands out. Our efficiency has skyrocketed."
          />
          <Card2
            picture={<img className='rounded-full'  src='pic02.jpg' alt='picture of a lady'/> }
            description='Emily Chen'
            job='Style Emporium'
            logo={<img src='logo5.svg' alt='Clues company logo'/>}
            comment="The AI Search feature is a lifesaver. It's like having a personal assistant for product searches. Variable has exceeded our expectations, making our marketing strategies more data-driven and effective."
          />
           <Card2
            picture={<img className='rounded-full' src='pic03.jpg' alt='picture of a male'/> }
            description='Michael Reynolds'
            job='CFO, Mega Mart'
            logo={<img src='logo2.svg' alt='Rise company logo'/>}
            comment="Secure Servers gave us peace of mind. Variable takes data security seriously, and it reflects in the robustness of their servers. Our financial data is in safe hands."
            />

        </div>
      </div>

      <FaqAccordion/>

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

export default Services

