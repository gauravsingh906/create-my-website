import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Main from "./pages/MainPage.jsx";
import Banner from "./pages/BannerPage.jsx";
import Card from "./pages/CardPage.jsx";
import PricingPlans from "./pages/PricingPlansPage.jsx";
import Testimonial from "./pages/TestimonialPage.jsx";
import Blog from "./pages/BlogPage.jsx";
import Navbar from "./components/Navbar";

import ContactForm from "./pages/ContactPage.jsx";
import WhatsAppButton from "./components/whatsappButton";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} /> {/* Main page route */}
        <Route path="/banner" element={<Banner />} />
        <Route path="/card" element={<Card />} />
        <Route path="/pricing" element={<PricingPlans />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<ContactForm />} />

      </Routes>
      <Footer></Footer>
      <WhatsAppButton></WhatsAppButton>
    </Router>
  );
}
