import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Banner from "./components/Banner";
import Blog from "./components/Blog";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import PricingPlans from "./components/Pricing";
import Testimonial from "./components/Testimonial";
import ContactForm from "./components/Contact";
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
