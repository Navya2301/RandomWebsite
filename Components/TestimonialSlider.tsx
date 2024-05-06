import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ClientReview from './ClientReview';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const TestimonialSlider = () => {
  return (
    <div>
      <Carousel
      additionalTransfrom={0}
      arrows = {true}
      autoPlay = {true}
      autoPlaySpeed={5000}
      centerMode ={false}
      infinite
      responsive={responsive}
      itemClass='item'
    >
        {/* Client Review */}
        <ClientReview image="/images/cartoon4.png" name="Viswanadh Malladi" role="Web Developer"/>
        <ClientReview image="/images/cartoon3.png" name="Afrien Sheik" role="MERN stack Developer"/>
        <ClientReview image="/images/cartoon2.png" name="Sunil Kumar" role="React Developer"/>
        <ClientReview image="/images/cartoon6.png" name="Sindhu Bommali" role="WeNext JS Developer"/>
       </Carousel>
    </div>
  )
}

export default TestimonialSlider
