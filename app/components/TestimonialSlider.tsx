import React from "react";
import Carousel from "react-multi-carousel";
import ClientReview from "./ClientReview";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const TestimonialSlider = () => {
  return (
    <div>
      <Carousel
        responsive={responsive}
        additionalTransfrom={0}
        arrows={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        centerMode={false}
        infinite
        itemClass="item"
      >
        <ClientReview
          image="/images/c1.jpg"
          name="SA Sabarinathan"
          role="Project Head"
        />
        <ClientReview
          image="/images/c2.jpg"
          name="Ankur Bhatt"
          role="Project Manager"
        />
        <ClientReview
          image="/images/c1.jpg"
          name="Darshan Jobanputra"
          role="Project Manager"
        />
      </Carousel>
    </div>
  );
};

export default TestimonialSlider;
