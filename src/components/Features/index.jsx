import SubHead from "../Atoms/subhead";
import Subtitle from "../Atoms/subtitle";
import Paragraph from "../Atoms/paragraph";
import FeatureItem from "./featureItem";
import { motion } from "framer-motion";

export default function Features() {
  const dataFeatures = [
    {
      id: 1,
      title: "One-time Payment",
      logo: "/feature-1.svg",  // Replace with your own logo
      content:
        "With CreateMyWebsite, enjoy a single, one-time payment to access all the features you need to build and manage your site effectively.",
    },
    {
      id: 2,
      title: "Complete Data Control",
      logo: "/feature-2.svg",  // Replace with your own logo
      content:
        "You own your data and business information. CreateMyWebsite gives you full control of your store’s design, data, and content.",
    },
    {
      id: 3,
      title: "Free Lifetime Updates",
      logo: "/feature-3.svg",  // Replace with your own logo
      content:
        "Stay up to date with the latest tools and features. CreateMyWebsite provides free lifetime updates to ensure your platform is always cutting-edge.",
    },
    {
      id: 4,
      title: "Mobile-First Design",
      logo: "/feature-4.svg",  // Replace with your own logo
      content:
        "Your online store is optimized for mobile-first design, providing customers with an intuitive shopping experience on any device.",
    },
    {
      id: 5,
      title: "Fully Customizable",
      logo: "/feature-5.svg",  // Replace with your own logo
      content:
        "Whether it's the storefront or back-end functionality, CreateMyWebsite allows you to fully customize everything according to your needs.",
    },
    {
      id: 6,
      title: "Effortless Task Management",
      logo: "/feature-6.svg",  // Replace with your own logo
      content:
        "Manage your business tasks easily with intuitive tools. CreateMyWebsite's built-in task management helps you stay organized and on top of your priorities.",
    },
  ];

  const content = {
    visible: { y: 0, opacity: 1, transition: { duration: 1 } },
    hidden: { y: -100, opacity: 0 },
  };

  return (
    <div className="container mx-auto max-w-[1344px]">
      <div className="px-5 py-16 flex flex-col gap-10 sm:pb-28 sm:px-10 md:pb-36">
        {/* Head Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={content}
          className="text-center flex flex-col items-center"
        >
          <Subtitle style="mb-2">360° CUSTOMIZABLE</Subtitle>
          <SubHead style="mb-[18px] sm:w-8/12 md:w-9/12 lg:w-7/12">
            Take full control over your website and business
          </SubHead>
          <Paragraph
            fontSize="text-sm"
            color="text-black-400"
            style="sm:w-3/5 md:w-7/12 lg:w-1/3"
          >
            CreateMyWebsite empowers you to manage your online store with complete autonomy. From design to data, it's all in your hands.
          </Paragraph>
        </motion.div>

        {/* Feature Items */}
        <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3 overflow-hidden">
          {dataFeatures?.map((feature, index) => (
            <FeatureItem key={feature.id} feature={feature} i={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
