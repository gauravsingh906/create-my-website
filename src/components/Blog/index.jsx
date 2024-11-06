import SubHead from "../Atoms/subhead";
import Paragraph from "../Atoms/paragraph";
import { Button } from "../Atoms/button";

export default function Blog() {
  return (
    <div className="container mx-auto pt-[4rem] max-w-[1200px] p-6">
      <div className="px-5 py-16 flex flex-col gap-16 sm:px-10">

        {/* Header Section */}
        <div className="flex flex-col gap-8 md:flex-row md:justify-between md:items-center">
          <div className="flex flex-col gap-4 md:w-8/12 lg:w-auto">
            <SubHead>Insights & Inspiration</SubHead>
            <Paragraph>Explore our curated articles on boosting your online presence and enhancing brand strategy.</Paragraph>
          </div>
          <Button buttonStyle="bg-indigo-600 text-white hover:bg-indigo-500">
            <div className="flex gap-2 items-center">
              Explore More
              <img src="arrow-right.svg" alt="arrow icon" />
            </div>
          </Button>
        </div>

        {/* Blog Card Section */}
        <div className="grid gap-10 font-body md:grid-cols-2 lg:grid-cols-3">
          {/* Blog Card 1 */}
          <section className="flex flex-col gap-4 p-4 border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="overflow-hidden rounded-md">
              <img className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer" src="/blog-1.png" alt="Article thumbnail" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Mastering Digital Marketing: Top 5 Strategies</h3>
            <p className="text-gray-600 text-sm">Learn about the most effective digital marketing techniques to enhance your reach and grow your brand.</p>
            <a className="text-indigo-600 hover:underline font-semibold" href="#">Read Article</a>
          </section>

          {/* Blog Card 2 */}
          <section className="flex flex-col gap-4 p-4 border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="overflow-hidden rounded-md">
              <img className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer" src="/blog-2.png" alt="Article thumbnail" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">The Future of E-commerce: Trends for 2025</h3>
            <p className="text-gray-600 text-sm">Discover the upcoming trends in e-commerce and prepare your business for the future.</p>
            <a className="text-indigo-600 hover:underline font-semibold" href="#">Read Article</a>
          </section>

          {/* Blog Card 3 */}
          <section className="flex flex-col gap-4 p-4 border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow hidden lg:flex">
            <div className="overflow-hidden rounded-md">
              <img className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer" src="/blog-1.png" alt="Article thumbnail" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Building a Brand: Essentials for Beginners</h3>
            <p className="text-gray-600 text-sm">Starting a new brand? Explore the essentials of branding to create a memorable identity.</p>
            <a className="text-indigo-600 hover:underline font-semibold" href="#">Read Article</a>
          </section>
          <section className="flex flex-col gap-4 p-4 border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="overflow-hidden rounded-md">
              <img className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer" src="/blog-1.png" alt="Article thumbnail" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Mastering Digital Marketing: Top 5 Strategies</h3>
            <p className="text-gray-600 text-sm">Learn about the most effective digital marketing techniques to enhance your reach and grow your brand.</p>
            <a className="text-indigo-600 hover:underline font-semibold" href="#">Read Article</a>
          </section>

          {/* Blog Card 2 */}
          <section className="flex flex-col gap-4 p-4 border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="overflow-hidden rounded-md">
              <img className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer" src="/blog-2.png" alt="Article thumbnail" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">The Future of E-commerce: Trends for 2025</h3>
            <p className="text-gray-600 text-sm">Discover the upcoming trends in e-commerce and prepare your business for the future.</p>
            <a className="text-indigo-600 hover:underline font-semibold" href="#">Read Article</a>
          </section>

          {/* Blog Card 3 */}
          <section className="flex flex-col gap-4 p-4 border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow hidden lg:flex">
            <div className="overflow-hidden rounded-md">
              <img className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer" src="/blog-1.png" alt="Article thumbnail" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Building a Brand: Essentials for Beginners</h3>
            <p className="text-gray-600 text-sm">Starting a new brand? Explore the essentials of branding to create a memorable identity.</p>
            <a className="text-indigo-600 hover:underline font-semibold" href="#">Read Article</a>
          </section>
        </div>
      </div>
    </div>
  );
}
