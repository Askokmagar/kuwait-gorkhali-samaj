import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="border-b bg-white">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Logo" className="w-24 h-14 rounded-full" />
          <span className="font-semibold text-lg">
            KGS.
          </span>
        </div>

        <nav className="space-x-6 text-sm">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/mission">Mission</Link>
          <Link to="/vision">Vision</Link>
          <Link to="/leadership">Leadership</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
