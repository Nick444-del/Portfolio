import CTA from "./CTA";
import me from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header className="h-[120vh] pt-28 overflow-hidden">
      <div className="container text-center h-full relative mx-auto px-4 max-w-6xl">
        <h5 className="text-lg mb-4">Hello I'm</h5>
        <h1 className="text-4xl font-bold mb-4">Nikhil Gorule</h1>
        <h5 className="text-light text-lg text-gray-400 mb-8">
          MERN STACK DEVELOPER
        </h5>
        <CTA />
        <HeaderSocials />

        <div className="me bg-gradient-to-b from-blue-500 to-transparent w-80 h-96 absolute left-1/2 -translate-x-1/2 mt-16 rounded-t-[12rem] overflow-hidden px-6 py-24">
          <img src={me} alt="ME" className="w-full h-100% object-cover rounded-b-[50%]" />
        </div>

        <a href="#contact" className="scroll__down absolute -right-9 bottom-20 transform rotate-90 font-light text-sm">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;