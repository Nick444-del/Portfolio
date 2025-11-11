import CV from "../../assets/Nikhil Gorule.pdf";

const CTA = () => {
  return (
    <div className="mt-10 flex gap-5 justify-center">
      <a 
        href={CV} 
        download 
        className="btn border-2 border-blue-500 text-blue-500 px-6 py-3 rounded-lg transition-all duration-300 hover:bg-blue-500 hover:text-white"
      >
        Download CV
      </a>
      <a 
        href="#contact" 
        className="btn btn-primary bg-blue-500 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:bg-blue-600"
      >
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;