import React, { useState } from "react";
import { Link } from "react-router-dom";
import HeroScroll from "../components/blocks/HeroScroll";

export default function Home() {
  const [playVideo, setPlayVideo] = useState(false);

  return (
    <div className="w-full">

      {/* HERO */}
      <HeroScroll />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* COMMUNITY MOMENTS */}
        <section className="pt-6 pb-8 lg:pt-8 lg:pb-10 fade">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 items-center">
            
            <div className="md:order-2 overflow-hidden rounded-2xl group">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3 text-center">
                Community Moments
              </h2>

              <img
                src="https://ianepgfuevjadgydaudv.supabase.co/storage/v1/object/public/My%20Storage/dance.webp"
                alt="Community Moments"
                className="h-72 md:h-96 w-full object-cover rounded-2xl transition duration-500 group-hover:scale-105"
              />
            </div>

            <div className="max-w-3xl mx-auto text-center fade">
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                Through cultural programs, social gatherings, and community-led initiatives, 
                the Samaj creates meaningful opportunities for connection, cooperation, 
                and shared growth strengthening bonds and passing traditions to the next generation.
              </p>
            </div>

          </div>
        </section>

        {/* COMMUNITY SUPPORT */}
        <section className="pt-8 pb-10 bg-gray-50 rounded-2xl fade">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
              Community Support
            </h2>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              Kuwait Gorkhali Samaj actively supports Indian Gorkhas arriving in Kuwait by sharing 
              verified and reliable information through its official Facebook and Instagram pages, 
              WhatsApp communication, and email support—helping newcomers stay informed, safe, 
              confident, and connected from day one.
            </p>
          </div>
        </section>

        {/* VIDEO SECTION */}
        <section className="pt-8 pb-10 fade">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
              Our Community Story
            </h2>

            <div className="relative aspect-video rounded-2xl overflow-hidden bg-black group">
              {!playVideo ? (
                <div
                  onClick={() => setPlayVideo(true)}
                  className="relative w-full h-full cursor-pointer"
                >
                  <img
                    src="https://ianepgfuevjadgydaudv.supabase.co/storage/v1/object/public/Samaj%20Data/WhatsApp%20Image%202025-09-05%20at%207.10.14%20PM%20(1).jpeg"
                    alt="Community Story"
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-xl transition group-hover:scale-110">
                      ▶
                    </div>
                  </div>
                </div>
              ) : (
                <video
                  src="https://ianepgfuevjadgydaudv.supabase.co/storage/v1/object/public/My%20Storage/community-story.mp4"
                  controls
                  autoPlay
                  playsInline
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          </div>
        </section>

        {/* ABOUT / VISION / MISSION */}
        <section className="pt-8 pb-0 fade">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-xl transition duration-300 hover:-translate-y-2">
              <h2 className="text-xl lg:text-2xl font-semibold text-gray-900">
                About Us
              </h2>
              <p className="mt-3 text-gray-700 text-base leading-relaxed">
                Kuwait Gorkhali Samaj represents Indian Gorkhas in Kuwait and
                works to preserve unity and cultural values.
              </p>
              <Link
                to="/about"
                className="inline-block mt-4 px-6 py-2 border border-gray-900 hover:bg-gray-900 hover:text-white transition"
              >
                Read More
              </Link>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-xl transition duration-300 hover:-translate-y-2">
              <h2 className="text-xl lg:text-2xl font-semibold text-gray-900">
                Our Vision
              </h2>
              <p className="mt-3 text-gray-700 text-base leading-relaxed">
                To build a united and respected Indian Gorkha community in
                Kuwait.
              </p>
              <Link
                to="/vision"
                className="inline-block mt-4 px-6 py-2 border border-gray-900 hover:bg-gray-900 hover:text-white transition"
              >
                Read More
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-xl transition duration-300 hover:-translate-y-2">
              <h2 className="text-xl lg:text-2xl font-semibold text-gray-900">
                Our Mission
              </h2>
              <p className="mt-3 text-gray-700 text-base leading-relaxed">
                To unite Indian Gorkhas in Kuwait through cultural, social, and
                welfare initiatives.
              </p>
              <Link
                to="/mission"
                className="inline-block mt-4 px-6 py-2 border border-gray-900 hover:bg-gray-900 hover:text-white transition"
              >
                Read More
              </Link>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}