import React, { useState } from "react";
import integrationBg from "../assets/images/integration-bg.jpg";
import AuthModal from "../components/AuthModal";

import { FaCode, FaPlug, FaProjectDiagram, FaAndroid, FaApple } from "react-icons/fa";

const Integration = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="font-sans text-gray-900">

        {/* Hero Section */}
        <section
          className="relative h-screen bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: `url(${integrationBg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60"></div>

          <div className="relative text-center text-white">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">Simplified Integration</h1>
            <p className="text-lg md:text-2xl mb-12 drop-shadow-md">Well-documented custom code for modern apps and websites</p>

            <div className="flex justify-center gap-10 flex-wrap">
              <div className="flex flex-col items-center bg-white/10 p-8 rounded-2xl shadow-lg">
                <FaCode className="text-3xl mb-2 text-indigo-400" />
                <span className="font-semibold">SDKs</span>
              </div>
              <div className="flex flex-col items-center bg-white/10 p-8 rounded-2xl shadow-lg">
                <FaPlug className="text-3xl mb-2 text-green-400" />
                <span className="font-semibold">Plugins</span>
              </div>
              <div className="flex flex-col items-center bg-white/10 p-8 rounded-2xl shadow-lg">
                <FaProjectDiagram className="text-3xl mb-2 text-yellow-400" />
                <span className="font-semibold">API</span>
              </div>
            </div>
          </div>
        </section>

        {/* Payment Integration Cards */}
        <section className="py-24 px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-16">Integrate Payments Seamlessly</h2>
          <div className="flex justify-center flex-wrap gap-12">
            <div className="bg-white p-10 rounded-3xl w-80 shadow-2xl">
              <FaProjectDiagram className="text-indigo-600 text-4xl mb-4" />
              <h3 className="text-xl font-bold mb-2">API as per your Platform</h3>
              <p className="text-gray-600 mb-6">Create dynamic websites and applications.</p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-purple-600 hover:to-indigo-600 text-white py-3 px-6 rounded-xl font-semibold shadow-lg transition-all duration-300"
              >
                View Documentation
              </button>
            </div>

            <div className="bg-white p-10 rounded-3xl w-80 shadow-2xl">
              <FaCode className="text-pink-500 text-4xl mb-4" />
              <h3 className="text-xl font-bold mb-2">Custom SDKs</h3>
              <p className="text-gray-600 mb-6">Add ready-to-use SDKs for faster integration.</p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-purple-600 hover:to-indigo-600 text-white py-3 px-6 rounded-xl font-semibold shadow-lg transition-all duration-300"
              >
                View Documentation
              </button>
            </div>
          </div>
        </section>

        {/* App Integration */}
        <section className="py-24 px-6 bg-gray-50">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-16 text-center">App Integration</h2>
          <div className="flex justify-center flex-wrap gap-12">
            <div className="bg-white p-10 rounded-3xl w-64 text-center shadow-2xl">
              <FaAndroid className="text-green-500 text-5xl mb-4" />
              <h3 className="text-xl font-bold mb-2">Android</h3>
              <p className="text-gray-600 mb-6">Track customer transactions seamlessly.</p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-purple-600 hover:to-indigo-600 text-white py-3 px-6 rounded-xl font-semibold shadow-lg transition-all duration-300"
              >
                View Documentation
              </button>
            </div>

            <div className="bg-white p-10 rounded-3xl w-64 text-center shadow-2xl">
              <FaApple className="text-black text-5xl mb-4" />
              <h3 className="text-xl font-bold mb-2">iOS</h3>
              <p className="text-gray-600 mb-6">Manage customer transactions effortlessly.</p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-purple-600 hover:to-indigo-600 text-white py-3 px-6 rounded-xl font-semibold shadow-lg transition-all duration-300"
              >
                View Documentation
              </button>
            </div>
          </div>
        </section>
      </div>

      <AuthModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Integration;
