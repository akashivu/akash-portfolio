import { Link } from "react-router-dom";

export default function Navbar() {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  console.log("Button clicked!", e);
};
  return (
   <nav className="w-full  backdrop-blur-md shadow-md fixed bg-gradient-to-br from-gray-900 via-gray-800 ">

      <div className="max-w-6xl w-full mx-auto flex items-center justify-between px-6 py-3">

       
        <Link to="/" className="text-3xl  items-center font-bold text-blue-600">
          Akash
        </Link>

        
        <div className="space-x-10 hidden md:flex items-center justify-around ">
          <Link to="/" className="hover:text-blue-600 transition">Home</Link>
          <Link to="/about" className="hover:text-blue-600 transition">About</Link>
          <Link to="/about" className="hover:text-blue-600 transition">skills</Link>
          <Link to="/projects" className="hover:text-blue-600 transition">Projects</Link>
          <Link to="/contact" className="hover:text-blue-600 transition">Contact</Link>
          <button onClick={handleClick}>Resume</button>
        </div>
      </div>
    </nav>
  );
}
