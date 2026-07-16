import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  FileText,
  Mail,
  Phone,
  MapPin,
  Music,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-0">

      {/* =========================
         CALL TO ACTION (WHITE)
      ========================= */}
      <section className="bg-white border-t border-gray-200 px-6 py-14">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Be a Part of the Team
          </h3>

          <p className="text-gray-600 max-w-3xl mx-auto text-sm leading-relaxed mb-6">
            Kuwait Gorkhali Samaj welcomes individuals who wish to contribute
            their time, skills, and ideas for the betterment of our community.
            If you are interested in volunteering or supporting our initiatives,
            we would be happy to hear from you.
          </p>

          <Link
            to="/contact"
            className="
              inline-block
              bg-slate-900 text-white
              px-8 py-3
              rounded-full
              text-sm font-medium
              hover:bg-slate-700
              transition-colors
            "
          >
            Join Us
          </Link>
        </div>
      </section>

      {/* =========================
         QUICK LINKS
      ========================= */}
      <section className="bg-slate-800 px-6 py-10">
        <div className="max-w-6xl mx-auto">
          <h4 className="text-lg font-semibold text-sky-400 mb-4">
            Quick Links
          </h4>

          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 text-slate-300 text-sm">
            <li>
              <Link to="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/team" className="hover:text-white">
                Our Team
              </Link>
            </li>
            <li>
              <Link to="/vision" className="hover:text-white">
                Our Vision
              </Link>
            </li>
            <li>
              <Link to="/mission" className="hover:text-white">
                Our Mission
              </Link>
            </li>
          </ul>
        </div>
      </section>

      {/* =========================
         CONTACT BLOCK
      ========================= */}
      <section className="bg-slate-800 text-slate-100 px-6 py-12 border-t border-slate-700">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-semibold text-sky-400 mb-4">
            Contact Us
          </h3>

          <p className="text-slate-300 mb-6 max-w-xl">
            For community support, cultural activities, or general enquiries,
            feel free to reach out to Kuwait Gorkhali Samaj.
          </p>

          <div className="space-y-3 text-slate-200">
            <div className="flex items-center gap-3">
              <Mail size={16} className="text-sky-400" />
              <a
                href="mailto:kuwaitgorkhalisamaj@kuwaitgorkhalisamaj.com"
                className="hover:underline"
              >
                kuwaitgorkhalisamaj@kuwaitgorkhalisamaj.com
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Phone size={16} className="text-sky-400" />
              <a href="tel:+96550061363" className="hover:underline">
                +965 50061363
              </a>
            </div>

            <div className="flex items-center gap-3">
              <MapPin size={16} className="text-sky-400" />
              <span>Salmiya, Nasser Al-Badar Street, Block 12, Kuwait</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
         BOTTOM BAR
      ========================= */}
      <section className="bg-slate-900 px-6 py-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">

          {/* SOCIAL LINKS */}
          <div className="flex items-center gap-4 text-slate-300">
            <a
              href="https://www.facebook.com/share/1BxxYUxbXJ/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white"
            >
              <Facebook size={16} /> Facebook
            </a>

            <a
              href="https://www.instagram.com/kuwait_gorkhali_samaj?igsh=a2h3NmhmeDFlZndk"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white"
            >
              <Instagram size={16} /> Instagram
            </a>

            <a
              href="https://www.tiktok.com/@kuwait.gorkhali.s?_r=1&_t=ZS-92k4f8UU5Jq"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white"
            >
              <Music size={16} /> TikTok
            </a>
          </div>

          {/* COPYRIGHT */}
          <div className="text-slate-400 text-sm text-center md:text-right">
            <div>© 2026 All rights reserved — Kuwait Gorkhali Samaj.</div>
            <div className="mt-1">
              <Link
                to="/terms"
                className="flex items-center justify-center md:justify-end gap-1 hover:text-white"
              >
                <FileText size={14} /> Terms of Usage
              </Link>
            </div>
          </div>
        </div>
      </section>

    </footer>
  );
}
