import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { useRef } from "react";
import TestimonialItem from "./testimonialItem";

const testimonials = [
  {
    imageSrc: "/testimonial1.png",
    title: "What Our Customers Say",
    text: "“This service has transformed our business. Exceptional quality and fantastic customer support!”",
    author: "John Carter",
    company: "Fashion Shoes Co.",
  },
  {
    imageSrc: "/testimonial2.png",
    title: "Customer Feedback",
    text: "“The team went above and beyond to meet our needs. I can’t recommend them enough.”",
    author: "Emily Stone",
    company: "Tech Galaxy Inc.",
  },
  {
    imageSrc: "/testimonial3.png",
    title: "Clients Love Us",
    text: "“A seamless experience from start to finish. We're incredibly pleased with the results!”",
    author: "Michael Rudd",
    company: "Creative Design Studio",
  },
];

export default function Testimonial() {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <div className="bg-gray-100 py-14 pt-[8rem]">
      <div className="container mx-auto max-w-[1344px]">
        <div className="px-6 sm:px-12 relative">
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
            }}
            spaceBetween={30}
            slidesPerView={1} // Display only one slide at a time
            className="relative"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide className="p-2" key={index}>
                <TestimonialItem {...testimonial} />
              </SwiperSlide>
            ))}

            {/* Custom Navigation Buttons */}
            <div className="absolute bottom-6 right-6 sm:right-10 z-10 flex items-center gap-4">
              <button
                className="testimonial-button prev bg-white rounded-full p-3 shadow-lg hover:bg-gray-200 transition duration-300"
                ref={navigationPrevRef}
              >
                <img
                  className="w-5 h-5"
                  src="/arrow-left.svg"
                  alt="Previous Slide"
                />
              </button>
              <button
                className="testimonial-button next bg-white rounded-full p-3 shadow-lg hover:bg-gray-200 transition duration-300"
                ref={navigationNextRef}
              >
                <img
                  className="w-5 h-5"
                  src="/arrow-right.svg"
                  alt="Next Slide"
                />
              </button>
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
