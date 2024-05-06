import React from 'react'
import TestimonialSlider from './TestimonialSlider'

const Testimonials = () => {
  return (
    <div className='bg-[#02050a]'>
      <h1>
        client  <span>Review</span>
      </h1>
      <div className='pt-[5rem] pb-[4rem] w-[80%] mx-auto'>
        {/** Testimonial slider */}
        <TestimonialSlider/>

      </div>
    </div>
  )
}

export default Testimonials
