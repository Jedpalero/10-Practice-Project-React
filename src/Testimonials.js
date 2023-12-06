import React, { useState } from "react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "This is the best day to learn new things",
      author: "John Doe",
    },
    {
      quote: "You need to take your first step in life",
      author: "Red Lo",
    },
    {
      quote: "Feeling afraid to venture to new things is frivolous",
      author: "Raven Rain",
    },
  ];

  const handlePrevClick = () => {
    // setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : currentIndex);
    setCurrentIndex(
      (currentIndex + testimonials.length - 1) % testimonials.length
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length); // it will wrap around the beggining when it reaches the end of the array;
  };

  return (
    <div className="testimonials">
      <div className="testimonials-quote">
        "{testimonials[currentIndex].quote}"
      </div>
      <div className="testimonials-author">
        --{testimonials[currentIndex].author}
      </div>
      <div className="testimonials-nav">
        <button onClick={handlePrevClick}>Prev</button>
        <button onClick={handleNextClick}>Next</button>
      </div>
    </div>
  );
};

export default Testimonials;
