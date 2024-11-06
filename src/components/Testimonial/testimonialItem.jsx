import SubHead from "../Atoms/subhead";
import Paragraph from "../Atoms/paragraph";

export default function TestimonialItem({ imageSrc, title, text, author, company }) {
  return (
    <div className="flex flex-col gap-8 items-center md:flex-row md:items-start lg:gap-12 lg:items-start px-4 md:px-6 lg:px-8">
      <img
        className="w-[220px] md:w-[280px] lg:w-[300px] border border-gray-200 rounded-lg shadow-lg"
        src='/testimonial.png'
        alt={`${author || "Customer"}'s testimonial`}
      />
      <div className="flex flex-col text-center md:text-left">
        <SubHead style="mb-4 text-xl md:text-xl lg:text-2xl text-secondary-500 font-semibold">
          {title || "Customer Feedback"}
        </SubHead>
        <Paragraph style="mb-6 text-gray-700 leading-relaxed text-base md:text-lg lg:leading-8">
          {text ||
            "“This product exceeded my expectations! The quality is fantastic, and the customer service team was incredibly supportive every step of the way. I highly recommend it to anyone looking for reliable and high-quality options.”"}
        </Paragraph>
        <div className="text-sm font-body text-gray-800 mt-4">
          <h5 className="text-primary-600 mb-1 font-medium">{author || "Alex Johnson"}</h5>
          <p className="text-gray-500">{company || "Innovate Solutions Co."}</p>
        </div>
      </div>
    </div>
  );
}
