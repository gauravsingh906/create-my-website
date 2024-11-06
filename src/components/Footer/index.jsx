import { motion } from "framer-motion";
import MainButton from "../Atoms/button";
import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Footer() {
  const location = useLocation(); // Get the current location (route)
  const footerContent = {
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    hidden: { opacity: 0, y: 100 },
  };

  const footerImage = {
    visible: { y: 0, transition: { duration: 1 } },
    hidden: { y: -100 },
  };

  // FAQ data
  const faqs = [
    {
      question: "What services does your company offer?",
      answer:
        "We provide website development, e-commerce solutions, SEO optimization, and marketing services.",
    },
    {
      question: "How can I contact support?",
      answer:
        "You can contact support by visiting our contact page or emailing us directly at support@company.com.",
    },
    {
      question: "How long does it take to build a website?",
      answer:
        "It depends on the complexity of the project. Typically, a website takes 2 to 4 weeks to develop.",
    },
    {
      question: "Do you offer website maintenance services?",
      answer:
        "Yes, we offer ongoing website maintenance to keep your site updated and running smoothly.",
    },
    {
      question: "What is SEO optimization?",
      answer:
        "SEO optimization involves improving your website’s visibility on search engines to drive organic traffic.",
    },
    {
      question: "Can you help with e-commerce website setup?",
      answer:
        "Yes, we specialize in building e-commerce websites, helping you set up an online store with easy management.",
    },
    {
      question: "How can I request a quote for my project?",
      answer:
        "You can request a quote by visiting our contact page and submitting a project inquiry form.",
    },
    {
      question: "Do you offer digital marketing services?",
      answer:
        "Yes, we offer digital marketing services to help you promote your business and reach your target audience.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null); // Track which FAQ is open

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle open/close for the clicked FAQ
  };

  // Check if the current route is '/' (home page)
  const isHomePage = location.pathname === "/";

  return (
    <div className="bg-gray-800 text-white">
      {/* Contact Section */}
      <div className="border-b border-gray-600 relative overflow-hidden">
        <div className="container mx-auto max-w-[1344px] px-5 py-10 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={footerContent}
            className="flex flex-col items-center"
          >
            <h2 className="text-3xl font-semibold mb-3">Need Help?</h2>
            <p className="text-gray-400 mb-6 max-w-md">
              Let us assist you with everything you need to grow your business. Reach out, and we’ll make sure you’re set up for success.
            </p>
            {isHomePage && (
              <MainButton style="bg-green-500 hover:bg-green-600 transition-all duration-200 px-8 py-2 rounded">
                <NavLink to="/contact"> Contact Support</NavLink>
              </MainButton>
            )}
          </motion.div>
        </div>

        {/* Decorative Rotating Elements */}
        <motion.img
          initial="hidden"
          whileInView="visible"
          animate={{
            rotate: 360,
            transition: { duration: 20, repeat: Infinity, ease: "linear" },
          }}
          variants={footerImage}
          className="hidden lg:block absolute top-1/4 -left-28 opacity-30"
          src="/decorative-circle.svg"
          alt="decorative"
        />
        <motion.img
          initial="hidden"
          whileInView="visible"
          animate={{
            rotate: -360,
            transition: { duration: 25, repeat: Infinity, ease: "linear" },
          }}
          variants={footerImage}
          className="hidden lg:block absolute top-1/4 -right-28 opacity-30"
          src="/decorative-square.svg"
          alt="decorative"
        />
      </div>

      {/* FAQ Section (only visible on the Home page) */}
      {isHomePage && (
        <div className="container mx-auto max-w-[1344px] px-5 py-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={footerContent}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-semibold mb-5">Frequently Asked Questions</h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="p-4 bg-gray-700 rounded-lg shadow-md cursor-pointer transition-all duration-300 hover:bg-gray-600"
                onClick={() => handleToggle(index)} // Handle FAQ click to toggle
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-lg text-gray-200">{faq.question}</h3>
                  <span
                    className={`text-gray-400 transition-all duration-300 ${openIndex === index ? "rotate-180" : ""
                      }`}
                  >
                    ▼
                  </span>
                </div>
                {openIndex === index && (
                  <p className="text-gray-400 mt-2">{faq.answer}</p> // Only show the answer if the FAQ is open
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Footer Links Section */}
      <footer className="container mx-auto max-w-[1344px] px-5 py-16 grid grid-cols-1 gap-12 md:grid-cols-3 text-center md:text-left">
        <div className="space-y-3">
          <h3 className="text-xl font-semibold">About Us</h3>
          <p className="text-gray-400">
            We are a company dedicated to helping you expand your online presence and achieve business goals with ease.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold">Services</h3>
          <ul className="text-gray-400">
            <li>Website Development</li>
            <li>E-commerce Solutions</li>
            <li>SEO Optimization</li>
            <li>Marketing Services</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold">Get in Touch</h3>
          <p className="text-gray-400">Email: support@company.com</p>
          <p className="text-gray-400">Phone: (123) 456-7890</p>
          <div className="flex justify-center md:justify-start gap-4 mt-4">
            <a href="#" aria-label="Instagram">
              <img className="footer-icon" src="/instagram.svg" alt="Instagram" />
            </a>
            <a href="#" aria-label="GitHub">
              <img className="footer-icon" src="/github.svg" alt="GitHub" />
            </a>
            <a href="#" aria-label="Telegram">
              <img className="footer-icon" src="/telegram.svg" alt="Telegram" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <img className="footer-icon" src="/linkedin.svg" alt="LinkedIn" />
            </a>
          </div>
        </div>
      </footer>

      {/* Footer Bottom Section */}
      <div className="bg-gray-900 py-6">
        <p className="text-center text-gray-500 text-sm">
          © 2024 Company Name. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}
