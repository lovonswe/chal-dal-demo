import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const AutoCarousel = () => {
  const [images, setImages] = useState([
    'https://chaldal.com/sippy',
    'https://chaldn.com/_mpimage/popular?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D154245&q=best&v=1&m=700&webp=1',
    'https://chaldn.com/_mpimage/popular?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D133103&q=best&v=1&m=700&webp=1',
    // Add more image URLs as needed
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Function to advance to the next slide
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // Set up a timer to advance slides automatically
    const timer = setInterval(nextSlide, 3000); // Change interval as needed

    // Clean up timer on unmount or when images change
    return () => clearInterval(timer);
  }, [images]); // Re-run effect when images change

  return (
    <Carousel autoPlay showArrows={false} selectedItem={currentIndex}>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </Carousel>
  );
};

export default AutoCarousel;
