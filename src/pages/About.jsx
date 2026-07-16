import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HERO IMAGE */}
        <section className="pt-6 lg:pt-10">
          <div className="relative h-64 md:h-80 lg:h-96 w-full rounded-2xl bg-gray-100 overflow-hidden">
            <img
              src="https://ianepgfuevjadgydaudv.supabase.co/storage/v1/object/public/My%20Storage/India%20flag%20white.jpeg"
              alt="Kuwait Gorkhali Samaj Community"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* PAGE HEADING */}
        <section className="py-12 lg:py-16 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900">
            About Kuwait Gorkhali Samaj
          </h1>
        </section>

        {/* ABOUT CONTENT */}
        <section className="pb-12 lg:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 text-gray-700 text-base md:text-lg leading-relaxed">
            <div className="space-y-6">
              <p>
                Kuwait Gorkhali Samaj is a voluntary, non-profit Indian Gorkha
                community organization formed by Indian Gorkhas living and
                working in the State of Kuwait. The organization was originally
                established in 2011 with the objective of promoting unity,
                mutual support, and cultural identity among community members.
              </p>
              <p>
                In 2017, the Samaj was officially registered with the Indian
                Embassy in Kuwait under Registration No.
                <strong> INDEMB/KWT/ASSN/330</strong>. During this period, the
                organization actively participated in embassy programs and
                extended social and welfare support to Indian Gorkhas residing
                in Kuwait.
              </p>
              <p>
                Due to the return of several committee members to India and
                other unavoidable circumstances, the activities of the Samaj
                gradually declined, and its registration expired in 2020.
              </p>
            </div>
            <div className="space-y-6">
              <p>
                On 16 February 2025, a newly formed committee, under the leadership of
                Mr. Ajay Gurung, officially assumed responsibility to revive and reorganize
                Kuwait Gorkhali Samaj with renewed commitment and a clear
                community-focused vision.
              </p>
              <p>
                Since then, the organization has experienced significant growth,
                expanding from approximately 90 members to over 400 active members
                within a short period. This website is officially published on
                7 January 2026, marking a renewed beginning and a commitment to
                transparent communication, unity, and community engagement.
              </p>
              <p>
                Today, Kuwait Gorkhali Samaj represents Indian Gorkhas originating
                from Darjeeling, Kalimpong, Mirik, Sikkim, Siliguri, Jaigaon,
                Assam, and surrounding regions. The Samaj continues to function
                as a united, disciplined, and responsible community organization,
                working for the welfare, unity, and cultural preservation of
                Indian Gorkhas in Kuwait.
              </p>
            </div>
          </div>
        </section>

        {/* PRESIDENT SECTION */}
        <section className="bg-gray-50 py-16 px-6">
          <div className="max-w-3xl mx-auto text-center">

            {/* PRESIDENT IMAGE */}
            <div className="w-44 h-44 md:w-48 md:h-48 mx-auto mb-6 rounded-xl overflow-hidden">
              <img
                src="https://ianepgfuevjadgydaudv.supabase.co/storage/v1/object/public/My%20Storage/Ajay%20Da.jpg"
                alt="President Kuwait Gorkhali Samaj"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* NAME & TITLE */}
            <div className="inline-block bg-white px-10 py-5 rounded-xl shadow-sm">
              <h2 className="text-xl font-bold text-gray-900">
                Ajay Gurung
              </h2>

              <div className="w-16 h-px bg-gray-300 mx-auto my-3"></div>

              <p className="text-sm text-gray-700">
                President, Kuwait Gorkhali Samaj
              </p>
            </div>

            {/* MEET OUR TEAM CTA */}
            <div className="mt-8">
              <Link
                to="/team"
                className="inline-block px-6 py-2 border border-gray-900
                           hover:bg-gray-900 hover:text-white transition font-medium"
              >
                Meet Our Team
              </Link>

              <p className="mt-4 text-sm text-gray-600 max-w-md mx-auto">
                Meet the dedicated individuals working together to guide,
                support, and strengthen the Kuwait Gorkhali Samaj community.
              </p>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}
