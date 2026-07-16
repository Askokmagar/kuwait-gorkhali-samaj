import React from "react";

export default function Mission() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">

      {/* TEXT CONTENT */}
      <div>
        <h1 className="text-3xl font-semibold mb-6 text-gray-900">
          Our Mission
        </h1>

        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            The mission of Kuwait Gorkhali Samaj is to unite Indian Gorkhas
            living and working in Kuwait by fostering a strong sense of
            belonging, mutual respect, and collective responsibility within
            the community.
          </p>

          <p>
            We are committed to supporting the social, cultural, and welfare
            needs of our members through transparent, inclusive, and
            community-driven initiatives, while maintaining harmony with
            local laws, customs, and regulations of the State of Kuwait.
          </p>

          <p>
            Kuwait Gorkhali Samaj strives to preserve and promote Gorkha
            cultural values, traditions, and identity, while encouraging
            positive engagement, cooperation, and personal growth among
            community members.
          </p>

          <p>
            Through responsible leadership and collective participation, our
            mission is to build a united, disciplined, and self-reliant
            community that contributes positively to society and supports
            members during times of need.
          </p>
        </div>
      </div>

      {/* IMAGE SECTION */}
      <div className="h-64 md:h-80 bg-gray-100 rounded-2xl flex items-center justify-center overflow-hidden">
        <img
          src="https://ianepgfuevjadgydaudv.supabase.co/storage/v1/object/public/New%20Data%20Base/7o.webp"
          alt="Kuwait Gorkhali Samaj Community Activity"
          className="w-full h-full object-cover"
        />
      </div>

    </section>
  );
}
