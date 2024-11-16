import React, { useState } from 'react';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);
        // Add form submission logic
    };

    return (
        <div className="max-w-5xl pt-[6rem] mx-auto px-4">
            {/* Contact Form Section */}
            <div className="p-10 bg-indigo-500 text-white rounded-lg shadow-xl">
                <h2 className="text-3xl font-bold text-center mb-4">Submit Your Query</h2>
                <p className="text-center mb-6 text-gray-300">We’re here to help! Reach out with any questions.</p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            className="p-3 rounded-lg bg-white text-gray-900 outline-none focus:ring-2 focus:ring-blue-500 transition shadow-sm"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your E-mail"
                            value={formData.email}
                            onChange={handleChange}
                            className="p-3 rounded-lg bg-white text-gray-900 outline-none focus:ring-2 focus:ring-blue-500 transition shadow-sm"
                            required
                        />
                        <input
                            type="text"
                            name="phone"
                            placeholder="Phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="p-3 rounded-lg bg-white text-gray-900 outline-none focus:ring-2 focus:ring-blue-500 transition shadow-sm"
                            required
                        />
                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="p-3 rounded-lg bg-white text-gray-900 outline-none focus:ring-2 focus:ring-blue-500 transition shadow-sm"
                            required
                        />
                    </div>
                    <textarea
                        name="message"
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleChange}
                        className="p-3 rounded-lg bg-white text-gray-900 outline-none h-32 resize-none focus:ring-2 focus:ring-blue-500 transition shadow-sm"
                        required
                    />
                    <div className="flex items-center gap-2">
                        <input type="checkbox" id="captcha" required />
                        <label htmlFor="captcha" className="text-sm">I'm not a robot</label>
                    </div>
                    <button
                        type="submit"
                        className="bg-purple-600 hover:bg-purple-700 transition-all duration-200 p-3 rounded-lg text-white font-semibold w-full md:w-auto self-center shadow-md hover:shadow-lg transform hover:scale-105"
                    >
                        SEND YOUR MESSAGE
                    </button>
                </form>
            </div>

            {/* Contact Options Section */}
            <div className="p-8 bg-lightgrey text-gray-900 rounded-lg  mt-10">
                <div className="flex flex-col md:flex-row gap-8 justify-between items-center md:items-start">
                    {/* Call Us Section */}
                    <div className="text-center md:text-left">
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">Call Us</h3>
                        <p className="text-gray-700">Contact our award-winning support team</p>
                        <a href="tel:04067607600" className="text-purple-600 hover:underline block mt-2 font-medium">
                            040-67607600
                        </a>
                        <p className="text-gray-700 mt-1">Everyday 9:00 am - 7:00 pm</p>
                    </div>

                    {/* Chat Now Section */}
                    <div className="text-center md:text-left">
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">Chat Now</h3>
                        <p className="text-gray-700">Get quick help on product issues, accounts, and more.</p>
                        <div className="flex gap-4 justify-center md:justify-start mt-3">
                            <button className="bg-gray-800 p-2 px-4 rounded text-white hover:bg-gray-900 transition shadow-md">
                                Start Chatting
                            </button>
                            <button className="bg-green-500 p-2 px-4 rounded text-white hover:bg-green-600 transition shadow-md">
                                WhatsApp
                            </button>
                        </div>
                        <p className="text-sm text-gray-700 mt-3">Hours: 24x7 Chat</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
