import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import MainButton from "../Atoms/button";

export default function Hero() {
  const priceRef = useRef(null);
  const isInView = useInView(priceRef);
  const [searchQuery, setSearchQuery] = useState("");

  const containerImage = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.7 } },
    hidden: { opacity: 0, scale: 0.8 },
  };

  const containerContent = {
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
    hidden: { opacity: 0, x: -50 },
  };

  const chairContainer = {
    visible: { scale: 1, opacity: 1, transition: { duration: 0.8 } },
    hidden: { scale: 0.6, opacity: 0 },
  };

  const chartContainer = {
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
    hidden: { opacity: 0, x: -100 },
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="relative bg-gradient-to-r pt-[2rem] lg:pt-0 from-blue-500 to-teal-400 min-h-screen">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-20 lg:py-28 flex flex-col lg:flex-row gap-8 items-center justify-between">
        {/* Content Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerContent}
          className="flex flex-col gap-6 text-white text-center lg:text-left lg:w-1/2"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold leading-snug tracking-tight">
            The Future of Online Business, Powered by CreateMyWebsite.
          </h1>
          <p className="text-base sm:text-lg md:text-xl opacity-80">
            Join a global network of thriving brands that rely on CreateMyWebsite for seamless sales, payments, and operations.
          </p>

          {/* Search Bar */}
          <div className="mt-4 flex justify-center gap-4 lg:justify-start w-full max-w-sm md:max-w-lg">
            <div className="relative w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search for a host & domain"
                className="w-full text-teal-500 py-2 md:py-3 pl-10 pr-4 rounded-lg border-2 border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-400 text-sm md:text-lg"
              />
              <svg
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-teal-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 18l6-6m0 0l-6-6m6 6H4"
                />
              </svg>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center gap-4 mt-4  lg:justify-start">
            <MainButton primary={true}>Admin Preview</MainButton>
            <MainButton primary={false}>Shop Preview</MainButton>
          </div>
        </motion.div>

        {/* Image and Cards Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerImage}
          className="relative flex flex-col gap-4 lg:flex-row lg:gap-0 lg:justify-center items-center lg:w-1/2"
        >
          {/* Search Result Card */}
          <motion.div
            variants={chairContainer}
            className="lg:absolute lg:top-[35%] lg:left-[8%] sm:left-[15%] md:left-[20%] bg-white p-4 md:p-6 rounded-lg shadow-2xl w-full sm:w-[320px] md:w-[350px] text-center lg:static lg:w-11/12"
          >
            <h4 className="text-sm font-bold">Search Results</h4>
            <p className="mt-2 text-[#515151] text-xs font-medium">
              {searchQuery ? `Searching for: ${searchQuery}` : 'Enter a domain and host to get started.'}
            </p>
          </motion.div>

          {/* Sales Card */}
          <motion.div
            variants={chartContainer}
            className="lg:absolute lg:bottom-[8%] lg:right-[8%] bg-white p-3 md:p-4 rounded-lg shadow-2xl w-full sm:w-[250px] md:w-[280px] lg:static lg:w-11/12"
          >
            <h5 className="text-xs font-medium text-gray-600">TOTAL REVENUE</h5>
            <div className="flex items-center justify-between mt-2">
              <h4 ref={priceRef} className="text-xl md:text-2xl font-bold text-teal-600">
                $218
              </h4>
              <img className="w-6 h-6 md:w-8 md:h-8 object-cover" src="/chart.svg" alt="Sales Chart" />
            </div>
            <div className="mt-2 border-t pt-2 text-xs text-gray-500">
              <p>6 Successful Transactions</p>
              <p className="text-teal-500">See Full Report &gt;</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
