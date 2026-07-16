import React from "react";
import PartnersMarquee from "../components/PartnersMarquee";

export default function Vision() {
  const partners = [
    {
      name: "Dampa lounge",
      logo: "https://ianepgfuevjadgydaudv.supabase.co/storage/v1/object/public/Tie%20up%20partners,/Dampalaunge.jpg",
      contact: "94794700",
      location: "Salmiya",
    },
    {
      name: "Himalayan Snacks House",
      logo: "https://ianepgfuevjadgydaudv.supabase.co/storage/v1/object/public/Tie%20up%20partners,/Himalayansnackshouse.jpg",
      contact: "65767204",
      location: "Salmiya",
    },
    {
      name: "Arabia Coffee House",
      logo: "https://ianepgfuevjadgydaudv.supabase.co/storage/v1/object/public/Tie%20up%20partners,/Arabia_Cofffee_House.png",
      contact: "97467987",
      location: "Salmiya",
    },
    {
      name: "Momo King",
      logo: "https://ianepgfuevjadgydaudv.supabase.co/storage/v1/object/public/Tie%20up%20partners,/Momo%20Kg.jpg",
      contact: "51772025",
      location: "Farwaniya",
    },
    {
      name: "Barrio",
      logo: "https://ianepgfuevjadgydaudv.supabase.co/storage/v1/object/public/Tie%20up%20partners,/Barrio.jpg",
      contact: "96500000",
      location: "Salmiya",
    },
    {
      name: "Himalayan Beauty House Salon",
      logo: "https://ianepgfuevjadgydaudv.supabase.co/storage/v1/object/public/Tie%20up%20partners,/Himalayan_Beauty_House_Salon.jpg",
      contact: "97639629",
      location: "Salmiya",
    },
    {
      name: "The Momo's Hut",
      logo: "https://ianepgfuevjadgydaudv.supabase.co/storage/v1/object/public/Tie%20up%20partners,/Momos%20HUT.png",
      contact: "60054971",
      location: "Salmiya",
    },
    {
      name: "Himalayan House",
      logo: "https://ianepgfuevjadgydaudv.supabase.co/storage/v1/object/public/Tie%20up%20partners,/HimalayanHouse.jpg",
      contact: "67657400",
      location: "Salmiya",
    },
    {
      name: "Asian Chula",
      logo: "https://ianepgfuevjadgydaudv.supabase.co/storage/v1/object/public/Samaj%20Data/Asian%20chula.jpeg",
      contact: "66503539",
      location: "Salmiya",
    },
    {
      name: "Momo House",
      logo: "https://ianepgfuevjadgydaudv.supabase.co/storage/v1/object/public/Samaj%20Data/Momo%20House%20Farwaniya.png",
      contact: "66636849",
      location: "Farwaniya",
    },
    {
      name: "WOK N GO",
      logo: "https://ianepgfuevjadgydaudv.supabase.co/storage/v1/object/public/New%20Data%20Base/W%20%20&%20G%20(1).webp",
      contact: "66738122",
      location: "Salmiya",
    },
    {
      name: "Everest Cup",
      logo: "https://ianepgfuevjadgydaudv.supabase.co/storage/v1/object/public/New%20Data%20Base/Everest%20Cup.webp",
      contact: "50064930",
      location: "Salmiya",
    },
    {
      name: "Divit Kitchen",
      logo: "https://ianepgfuevjadgydaudv.supabase.co/storage/v1/object/public/New%20Data%20Base/d.png",
      contact: "55371604",
      location: "Salmiya",
    },
    {
      name: "Look Noor",
      logo: "https://ianepgfuevjadgydaudv.supabase.co/storage/v1/object/public/New%20Data%20Base/Look%20Noor.webp",
      contact: "60748354",
      location: "Salmiya",
    },
    {
      name: "SOMINA",
      logo: "https://ianepgfuevjadgydaudv.supabase.co/storage/v1/object/public/New%20Data%20Base/Somina.webp",
      contact: "99123242",
      location: "Salmiya",
    },
  ];
  
  return (
    <>
      {/* ================= VISION SECTION ================= */}
      <section className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        
        {/* IMAGE */}
        <div className="h-64 md:h-80 bg-gray-100 rounded-2xl overflow-hidden">
          <img
            src="https://ianepgfuevjadgydaudv.supabase.co/storage/v1/object/public/My%20Storage/Vision.jpeg"
            alt="Kuwait Gorkhali Samaj Community Vision"
            className="w-full h-full object-cover"
          />
        </div>

        {/* TEXT */}
        <div>
          <h1 className="text-3xl font-semibold mb-6 text-gray-900">
            Our Vision
          </h1>

          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              The vision of Kuwait Gorkhali Samaj is to build a united, respected,
              and well-organized Indian Gorkha community in Kuwait, founded on
              mutual trust, discipline, and shared values.
            </p>

            <p>
              We envision a community that preserves its cultural identity while
              embracing responsibility, cooperation, and positive engagement
              within the broader society of the State of Kuwait.
            </p>

            <p>
              Our vision is to create a strong and sustainable organization that
              supports the welfare of its members, encourages leadership
              development, and promotes harmony, dignity, and social
              responsibility across generations.
            </p>

            <p>
              As part of this vision, Kuwait Gorkhali Samaj seeks to foster
              responsible collaborations with trusted local partners that
              enhance community welfare and mutual support, while respecting the
              laws and customs of the State of Kuwait.
            </p>
          </div>
        </div>
      </section>

      {/* ================= PARTNERS MARQUEE ================= */}
      <section className="max-w-7xl mx-auto px-6 pb-14 text-center">
        <h2 className="text-xl font-semibold mb-2 text-gray-900">
          Our Tie-Up Restaurant Partners
        </h2>

        <p className="text-sm text-gray-600 mb-8">
          Mutual support with trusted local partners, while respecting the laws
          and customs of the State of Kuwait.
        </p>

        <PartnersMarquee partners={partners} />
      </section>
    </>
  );
}
