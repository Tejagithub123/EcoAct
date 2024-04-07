import { useState } from 'react';
import { Link } from 'react-router-dom';
import Leaf from './leaf.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-green-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src={Leaf} alt="Leaf" className="h-12 mr-4" />
          <span className="text-white text-2xl font-semibold">ActEco</span>
        </Link>
        <div className="flex md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
        <div className={`md:flex md:items-center ${menuOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-col md:flex-row md:space-x-4">
          <Link to="/" className="text-white  text-2xl hover:text-gray-200">Home</Link>
            <Link to="/map" className="text-white  text-2xl hover:text-gray-200">Map</Link>
            {/* <Link to="/video" className="text-white  text-2xl hover:text-gray-200">WebCam</Link>
            <Link to="/image" className="text-white  text-2xl hover:text-gray-200">ImageUpload</Link> */}
            {/* <Link to="/predictionlist" className="text-white  text-2xl hover:text-gray-200">Prediction List</Link> */}
            <Link to="/Prediction" className="text-white  text-2xl hover:text-gray-200">Make Prediction</Link>
            <Link to="/contact" className="text-white text-2xl hover:text-gray-200">Contact</Link>
          </div>
          <br></br>
          <Link to="/login" className="ml-4 md:ml-3 py-2 px-8 bg-gray-100 text-gray-800 text-2xl font-semibold rounded hover:bg-gray-200">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
