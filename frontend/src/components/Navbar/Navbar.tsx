import { AiOutlineHome, AiOutlineUser, AiOutlineBook, AiOutlineContacts } from 'react-icons/ai';
import { RiServiceLine } from 'react-icons/ri';
import { useState } from "react";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState('#');
  
  return (
    <nav className="bg-black/30 w-max block p-4 z-20 fixed left-1/2 transform -translate-x-1/2 bottom-8 flex gap-3 rounded-3xl backdrop-blur-lg">
      <a 
        href="#" 
        onClick={() => setActiveNav('#')} 
        className={`p-3 rounded-full flex text-gray-300 text-xl transition-colors duration-300 ${
          activeNav === '#' 
            ? 'bg-blue-500 text-white' 
            : 'bg-transparent hover:bg-black/20'
        }`}
      >
        <AiOutlineHome />
      </a>
      <a 
        href="#about" 
        onClick={() => setActiveNav('#about')} 
        className={`p-3 rounded-full flex text-gray-300 text-xl transition-colors duration-300 ${
          activeNav === '#about' 
            ? 'bg-blue-500 text-white' 
            : 'bg-transparent hover:bg-black/20'
        }`}
      >
        <AiOutlineUser />
      </a>
      <a 
        href="#experience" 
        onClick={() => setActiveNav('#experience')} 
        className={`p-3 rounded-full flex text-gray-300 text-xl transition-colors duration-300 ${
          activeNav === '#experience' 
            ? 'bg-blue-500 text-white' 
            : 'bg-transparent hover:bg-black/20'
        }`}
      >
        <AiOutlineBook />
      </a>
      <a 
        href="#services" 
        onClick={() => setActiveNav('#services')} 
        className={`p-3 rounded-full flex text-gray-300 text-xl transition-colors duration-300 ${
          activeNav === '#services' 
            ? 'bg-blue-500 text-white' 
            : 'bg-transparent hover:bg-black/20'
        }`}
      >
        <RiServiceLine />
      </a>
      <a 
        href="#contact" 
        onClick={() => setActiveNav('#contact')} 
        className={`p-3 rounded-full flex text-gray-300 text-xl transition-colors duration-300 ${
          activeNav === '#contact' 
            ? 'bg-blue-500 text-white' 
            : 'bg-transparent hover:bg-black/20'
        }`}
      >
        <AiOutlineContacts />
      </a>
    </nav>
  );
};

export default Navbar;