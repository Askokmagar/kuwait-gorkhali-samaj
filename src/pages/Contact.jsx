import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="w-full">

      {/* PAGE TITLE */}
      <section className="py-14 px-6 text-center">
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-900">
          Kuwait Gorkhali Samaj
        </h1>
        <p className="mt-3 text-base text-gray-600 max-w-md mx-auto">
          Get in touch with us
        </p>
      </section>

      {/* NOTICE + IMAGE CTA */}
      <section className="px-6 pb-14">
        <div className="max-w-xl mx-auto text-left">

          <h2 className="text-xl font-semibold mb-4 text-gray-900">
            Send us a Message
          </h2>

          <p className="text-sm text-gray-600 leading-relaxed">
            Please contact us using the details provided below.
          </p>

          {/* CONTACT US IMAGE */}
          <div className="mt-6 max-w-sm md:max-w-md mx-auto">
            <img
                src="https://ianepgfuevjadgydaudv.supabase.co/storage/v1/object/public/New%20Data%20Base/Contact%20.webp"
                alt="Contact Us Kuwait Gorkhali Samaj"
                className="w-full rounded-2xl object-cover"
              />      

          </div>

          {/* CTA BUTTONS */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4">

            {/* FACEBOOK BUTTON */}
            <a
              href="https://www.facebook.com/share/1BxxYUxbXJ/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-2.5
                         border border-gray-900 rounded-xl
                         hover:bg-gray-900 hover:text-white transition font-medium"
            >
              Follow us on Facebook
            </a>

            {/* EMAIL BUTTON */}
            <a
              href="mailto:kuwaitgorkhalisamaj@kuwaitgorkhalisamaj.com"
              className="inline-flex items-center justify-center px-6 py-2.5
              border border-gray-900 rounded-xl
              hover:bg-gray-900 hover:text-white transition font-medium"
            >
              Email us
            </a>

          </div>

        </div>
      </section>

      {/* ACTUAL CONTACT DETAILS */}
      <section className="px-6 pb-20">
        <div className="max-w-xl mx-auto">

          <h2 className="text-2xl font-semibold mb-8 text-center text-gray-900">
            Our Actual Contact
          </h2>

          <div className="space-y-6">

            {/* EMAIL */}
            <div className="flex items-start gap-4">
              <Mail className="w-5 h-5 mt-1 text-gray-700" />
              <div>
                <h3 className="font-medium text-gray-900">Email us</h3>
                <p className="text-sm text-gray-600">
                  kuwaitgorkhalisamaj@kuwaitgorkhalisamaj.com 
                </p>
              </div>
            </div>

            {/* PHONE */}
            <div className="flex items-start gap-4">
              <Phone className="w-5 h-5 mt-1 text-gray-700" />
              <div>
                <h3 className="font-medium text-gray-900">Phone</h3>
                <p className="text-sm text-gray-600">
                  +965 50061363
                </p>
              </div>
            </div>

            {/* LOCATION */}
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 mt-1 text-gray-700" />
              <div>
                <h3 className="font-medium text-gray-900">Location</h3>
                <p className="text-sm text-gray-600">
                  Salmiya, Nasser Al-Badar Street, Block 12, Kuwait
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
