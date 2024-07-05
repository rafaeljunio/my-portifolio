import 'react-multi-carousel/lib/styles.css'

import Carousel from 'react-multi-carousel'

import { ClientReview } from './client-review'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 4264 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
}

export const TestimonialSlider = () => {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      infinite
      responsive={responsive}
      itemClass="item"
    >
      <ClientReview
        image="/images/c1.jpg"
        name="John Doe"
        role="Web Developer"
      />

      <ClientReview
        image="/images/c2.jpg"
        name="John Doe"
        role="MERN Stack Developer"
      />

      <ClientReview
        image="/images/c1.jpg"
        name="John Doe"
        role="Web Developer"
      />

      <ClientReview
        image="/images/c2.jpg"
        name="John Doe"
        role="Web Developer"
      />
    </Carousel>
  )
}
