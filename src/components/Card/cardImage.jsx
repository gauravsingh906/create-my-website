import { animate, motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import CardProfileList from "./cardProfileList";

export function PrimaryCard({ primaryContainer, miniModal, fakeProfiles }) {
  return (
    <div className="w-11/12 max-w-[400px] p-6 relative z-10 rounded-xl shadow-lg bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 after:w-full after:h-[85%] after:absolute after:inset-0 after:z-0 sm:p-10 md:p-6 lg:p-12">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={primaryContainer}
        className="relative z-10 bg-white rounded-lg p-6 flex flex-col gap-5 font-sans shadow-md lg:gap-8 primary-card"
      >
        <div className="flex items-center justify-between pb-4 md:pb-6 border-b border-gray-300">
          <h4 className="text-sm text-gray-700 font-semibold sm:text-lg lg:text-xl">
            Payment Summary
          </h4>
          <span className="text-gray-700 text-xs font-semibold bg-gray-200 w-5 h-5 flex items-center justify-center rounded-full sm:w-6 sm:h-6 lg:w-8 lg:h-8 lg:text-base">
            4
          </span>
        </div>
        <div className="grid gap-4 overflow-hidden">
          {fakeProfiles.map((profile) => (
            <CardProfileList key={profile.id} profile={profile} />
          ))}
        </div>
        <button className="py-3 bg-indigo-500 text-white font-semibold rounded-lg w-full text-sm hover:bg-indigo-600 sm:py-4 lg:py-5 lg:text-lg">
          Add New Profile
        </button>
      </motion.div>

      {/* Mini modal */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={miniModal}
        className="absolute w-1/2 z-10  -bottom-10 -right-4 px-4 py-6 bg-white rounded-lg flex flex-col gap-6 font-sans text-center shadow-md sm:-right-6 md:w-2/3 lg:px-8 lg:py-10 lg:w-1/2"
      >
        <div>
          <h5 className="text-xs font-semibold text-gray-800 mb-2 sm:text-lg lg:text-xl">
            Total Amount
          </h5>
          <p className="text-gray-600 text-xs sm:text-sm lg:text-base">
            Split your bills easily
          </p>
        </div>
        <h4 className="font-bold text-xl text-indigo-600 sm:text-2xl lg:text-3xl">
          $1,200.50
        </h4>
        <button className="bg-indigo-500 text-white text-sm py-3 rounded-lg w-full hover:bg-indigo-600 sm:py-4 lg:text-lg">
          Quick Pay Now
        </button>
      </motion.div>
    </div>
  );
}




export function SecondaryCard() {
  const incomeRef = useRef(null);
  const worstRef = useRef(null);
  const inView = useInView(incomeRef);

  useEffect(() => {
    const incomeControls = animate(0, 2180000, {
      duration: 1,
      onUpdate(value) {
        const num = value.toFixed().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        incomeRef.current.textContent = `$${num}`;
      },
    });

    const worstControls = animate(0, 5500, {
      duration: 0.8,
      onUpdate(value) {
        const num = value.toFixed().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        worstRef.current.textContent = `$${num}`;
      },
    });

    return () => {
      incomeControls.stop();
      worstControls.stop();
    };
  }, [inView]);

  const container = {
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
    hidden: { opacity: 0 },
  };

  const fieldContainer = {
    visible: { x: 0, opacity: 1, transition: { duration: 1 } },
    hidden: { x: 100, opacity: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={container}
      className="w-full max-w-[400px] bg-blue-50 p-6 rounded-xl shadow-lg flex flex-col gap-6 font-sans text-gray-800 font-medium sm:p-8"
    >
      <motion.div
        variants={fieldContainer}
        className="bg-white py-4 px-5 flex items-center justify-between rounded-lg shadow-lg gap-4 sm:py-6 sm:px-8"
      >
        <div className="flex items-center gap-3">
          <img
            className="w-8 h-8 object-cover"
            src="/income-icon.svg"
            alt="Income"
          />
          <p className="text-lg sm:text-xl">Total Earnings</p>
        </div>
        <div className="flex items-center gap-3">
          <p ref={incomeRef} className="text-lg sm:text-xl font-semibold">
            $2,180,000
          </p>
          <img
            className="w-6 h-6 object-cover"
            src="/up-arrow-icon.svg"
            alt="Income growth"
          />
        </div>
      </motion.div>

      <motion.div
        variants={fieldContainer}
        className="bg-white py-4 px-5 flex items-center justify-between rounded-lg shadow-lg gap-4 sm:py-6 sm:px-8"
      >
        <div className="flex items-center gap-3">
          <img
            className="w-8 h-8 object-cover"
            src="/loss-icon.svg"
            alt="Worst Sales"
          />
          <p className="text-lg sm:text-xl">Least Profitable</p>
        </div>
        <div className="flex items-center gap-3">
          <p ref={worstRef} className="text-lg sm:text-xl font-semibold">
            $5,500
          </p>
          <img
            className="w-6 h-6 object-cover"
            src="/down-arrow-icon.svg"
            alt="Loss"
          />
        </div>
      </motion.div>

      <motion.div
        variants={fieldContainer}
        className="bg-white p-6 flex flex-col gap-4 rounded-lg shadow-lg sm:p-8"
      >
        <div className="flex items-center gap-3">
          <p className="text-lg sm:text-xl">Monthly Growth</p>
          <img
            className="w-5 h-5 object-cover"
            src="/dot-icon.svg"
            alt="Dot"
          />
        </div>

        <div className="flex items-center gap-4">
          <img
            className="w-full max-w-[200px] h-auto object-cover"
            src="/growth-chart.svg"
            alt="Growth chart"
          />
          <div className="flex flex-col gap-2 text-center">
            <div>
              <div className="w-4 h-1 rounded bg-orange-400 mb-1"></div>
              <p className="text-base font-bold">30K Users</p>
            </div>
            <div>
              <div className="w-4 h-1 rounded bg-green-400 mb-1"></div>
              <p className="text-base font-bold">+500 New</p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
