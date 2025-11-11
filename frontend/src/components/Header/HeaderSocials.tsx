import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials flex flex-col items-center gap-3 absolute left-0 bottom-12">
      <a 
        href="https://www.linkedin.com/in/nikhil-goruled444/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-blue-500 text-xl transition-all duration-300 hover:scale-110"
      >
        <FaLinkedin />
      </a>
      <a 
        href="https://github.com/Nick444-del" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-blue-500 text-xl transition-all duration-300 hover:scale-110"
      >
        <FaGithub />
      </a>
      <a 
        href="https://www.instagram.com/gorulenikhil/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-blue-500 text-xl transition-all duration-300 hover:scale-110"
      >
        <FaInstagram />
      </a>
      <div className="w-px h-8 bg-blue-500 mt-2"></div>
    </div>
  );
};

export default HeaderSocials;