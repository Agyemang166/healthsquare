import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Card2({ picture, description, job, logo, comment }) {
  return (
    <div className="border border-green-400 p-6 shadow-lg max-w-full space-x-2 mx-2 h-56 flex flex-col justify-between"> 
      <div className="">
        <div className="flex flex-row justify-between">
          <div className="w-20 h-20 rounded-full p-1">{picture}</div>
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold">{description}</h3>
            <p className="text-gray-500 text-sm">{job}</p>
          </div>
          <div className="ml-auto">{logo}</div>
        </div>
      </div>
      <p className="text-left py-1 text-gray-500">{comment}</p>
    </div>
  );
}

function CardCarousel() {
  // Carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // 4 slides for desktop screens by default
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 3, // 3 slides for medium screens
        },
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 2, 
        },
      },
      {
        breakpoint: 480, 
        settings: {
          slidesToShow: 1, 
        },
      },
    ],
  };

  return (
    <div className="container mx-auto py-8">
      <Slider {...settings} className="px-4"> 
        <Card2
          picture={<img className="rounded-full" src="pic01.jpg" alt="picture of a lady" />}
          description="Alex Rodriguez"
          job="Tech Haven"
          logo={<img src="logo1.svg" alt="Cloud company logo" />}
          comment="Best decision we made for our retail business! 'Best of the Best' feature is a game-changer. Variable's commitment to excellence truly stands out. Our efficiency has skyrocketed."
        />
        <Card2
          picture={<img className="rounded-full" src="pic02.jpg" alt="picture of a lady" />}
          description="Emily Chen"
          job="Style Emporium"
          logo={<img src="logo5.svg" alt="Clues company logo" />}
          comment="The AI Search feature is a lifesaver. It's like having a personal assistant for product searches. Variable has exceeded our expectations, making our marketing strategies more data-driven and effective."
        />
        <Card2
          picture={<img className="rounded-full" src="pic03.jpg" alt="picture of a male" />}
          description="Michael Reynolds"
          job="CFO, Mega Mart"
          logo={<img src="logo2.svg" alt="Rise company logo" />}
          comment="Secure Servers gave us peace of mind. Variable takes data security seriously, and it reflects in the robustness of their servers. Our financial data is in safe hands."
        />
      </Slider>
    </div>
  );
}

export default CardCarousel;
