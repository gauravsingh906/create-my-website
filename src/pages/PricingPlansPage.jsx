import { motion } from "framer-motion";

const PricingPlans = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
            <div className="grid gap-8 md:grid-cols-3 w-full max-w-6xl">

                {/* Hobby Plan */}
                <PricingCard
                    title="Hobby"
                    price="Free"
                    features={[
                        "1 custom domain",
                        "2 GB asset storage",
                        "10,000 page views /month",
                        "300 form submissions /month",
                        "Unlimited Projects",
                        "Unlimited pages",
                        "Share Projects",
                        "Unlimited collaborators",
                        "Community support",
                        "Export Projects",
                    ]}
                    buttonLabel="Get started"
                    buttonColor="border border-gray-800"
                />

                {/* Pro Plan */}
                <PricingCard
                    title="Pro"
                    price="$20/month"
                    features={[
                        "Includes everything in Hobby",
                        "Unlimited custom domains",
                        "20 GB asset storage",
                        "100,000 page views /month",
                        "Unlimited form submissions",
                        "Connect to any headless CMS",
                        "Change form notification email",
                        "Publish to Staging",
                        "Advanced sharing permissions",
                        "Free trial (14 days)",
                    ]}
                    buttonLabel="Start free trial"
                    buttonColor="bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                />

                {/* Pro Lifetime Plan */}
                <PricingCard
                    title="Pro Lifetime"
                    price="$999/one-time"
                    features={[
                        "Includes everything in Pro",
                        "30-days money-back guarantee",
                        "Unlimited asset storage",
                        "2,000,000 page views /month",
                    ]}
                    buttonLabel="Buy Pro Lifetime"
                    buttonColor="border border-gray-800"
                />
            </div>
        </div>
    );
};

const PricingCard = ({ title, price, features, buttonLabel, buttonColor }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-8 mt-[6rem] rounded-lg shadow-lg text-gray-800 w-full max-w-md transform transition duration-300 hover:shadow-2xl"
        >
            <h3 className="text-xl font-semibold text-blue-500 mb-2">{title}</h3>
            <h4 className="text-4xl font-bold mb-6">{price}</h4>
            <ul className="text-sm space-y-3 mb-6">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        {feature}
                    </li>
                ))}
            </ul>
            <button
                className={`w-full py-3 rounded ${buttonColor} font-medium mt-4 transform transition duration-300 hover:scale-105`}
            >
                {buttonLabel}
            </button>
        </motion.div>
    );
};

export default PricingPlans;
