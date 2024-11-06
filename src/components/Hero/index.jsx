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
    <div className="relative bg-gradient-to-r from-blue-500 to-teal-400 min-h-screen">
      <div className="container mx-auto px-6 py-16 lg:px-20 lg:py-28 flex flex-col lg:flex-row gap-12 items-center justify-between">
        {/* Content Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerContent}
          className="flex flex-col gap-8 text-white text-center lg:text-left lg:w-1/2"
        >
          <h1 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl leading-tight tracking-tight">
            The Future of Online Business, Powered by CreateMyWebsite.
          </h1>
          <p className="text-lg md:text-xl sm:w-4/5 lg:w-full opacity-80">
            Become part of the global network of thriving brands that rely on CreateMyWebsite to handle their sales, payments, and operations seamlessly.
          </p>

          {/* Search Bar */}
          <div className="mt-6 flex justify-center gap-6 lg:justify-start w-full max-w-lg">
            <div className="relative w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search for a host & domain"
                className="w-full text-teal-500 py-3 pl-10 pr-4 rounded-lg border-2 border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-400 text-lg"
              />
              <svg
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-teal-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 18l6-6m0 0l-6-6m6 6H4"
                />
              </svg>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center gap-6 mt-6 lg:justify-start">
            <MainButton primary={true}>Admin Preview</MainButton>
            <MainButton primary={false}>Shop Preview</MainButton>
          </div>
        </motion.div>

        {/* Image and Cards Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerImage}
          className="relative flex justify-center items-center lg:w-1/2"
        >
          {/* Search Result Card */}
          <motion.div
            variants={chairContainer}
            className="absolute top-[40%] left-[5%] sm:left-[15%] md:left-[20%] bg-white p-6 rounded-lg shadow-2xl w-[280px] sm:w-[320px] md:w-[350px] text-center"
          >
            <h4 className="text-sm font-bold">Search Results</h4>
            <p className="mt-2 text-[#515151] text-xs font-medium">
              {searchQuery ? `Searching for: ${searchQuery}` : 'Enter a domain and host to get started.'}
            </p>
          </motion.div>

          {/* Sales Card */}
          <motion.div
            variants={chartContainer}
            className="absolute bottom-[10%] right-[5%] bg-white p-4 rounded-lg shadow-2xl w-[200px] sm:w-[250px] md:w-[280px]"
          >
            <h5 className="text-xs font-medium text-gray-600">TOTAL REVENUE</h5>
            <div className="flex items-center justify-between mt-2">
              <h4 ref={priceRef} className="text-2xl font-bold text-teal-600">
                $218
              </h4>
              <img className="w-8 h-8 object-cover" src="/chart.svg" alt="Sales Chart" />
            </div>
            <div className="mt-3 border-t pt-2 text-xs text-gray-500">
              <p>6 Successful Transactions</p>
              <p className="text-teal-500">See Full Report &gt;</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
