import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
       
        <Link to="/" className="text-2xl font-bold text-blue-600">
          Akash<span className="text-gray-800">.</span>
        </Link>

        
        <div className="space-x-6 hidden md:flex">
          <Link to="/" className="hover:text-blue-600 transition">Home</Link>
          <Link to="/about" className="hover:text-blue-600 transition">About</Link>
          <Link to="/projects" className="hover:text-blue-600 transition">Projects</Link>
          <Link to="/contact" className="hover:text-blue-600 transition">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
