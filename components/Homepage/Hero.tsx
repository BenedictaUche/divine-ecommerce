import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import heroImageOne from '@/public/hero-image-1.png';
import heroImageTwo from '@/public/hero-image-1.png';
import heroImageThree from '@/public/hero-image-1.png';
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft, MdOutlineArrowForward } from "react-icons/md";

const carouselContent = [
  {
    image: heroImageOne,
    title: 'Revive Turmeric CBD Oil',
    description: 'The most powerful CBD oil on the market',
  },
  {
    image: heroImageTwo,
    title: 'Jellybee Collagen Gummies',
    description: 'Gummies that make you look younger',
  },
  {
    image: heroImageThree,
    title: 'Baby Bee Shampoo',
    description: ' Shampoo that makes your hair look like a baby bee',
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselContent.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? carouselContent.length - 1 : prevSlide - 1
    );
  };

  useEffect(() => {
    // switch to the next slide every 5 seconds
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="relative w-full h-80 overflow-hidden">
      <div className="relative w-full h-full">
        {carouselContent.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={item.image}
              alt={item.title}
              layout="fill"
              objectFit="cover"
              className="rounded-md h-full w-full"
            />
            <div className="absolute inset-0 flex flex-col items-start justify-center gap-3 text-black p-4">
              <h2 className="text-3xl font-bold mb-2">{item.title}</h2>
              <p className="text-lg">{item.description}</p>
              <button className='inline-flex items-center bg-primary px-4 py-2 rounded-3xl text-white'>Show more <MdOutlineArrowForward /></button>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center justify-center w-4 h-4 rounded-full bg-gray-800 text-white focus:outline-none"
      >
        <MdOutlineKeyboardArrowLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute bottom-4 left-1/2 transform translate-x-1/2 flex items-center justify-center w-4 h-4 rounded-full bg-gray-800 text-white focus:outline-none ml-4"
      >
        <MdOutlineKeyboardArrowRight />
      </button>
    </div>
  );
};

export default Hero;
