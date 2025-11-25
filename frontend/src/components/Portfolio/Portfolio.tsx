import React from "react";

// Replace these with backend values later
import IMG1 from "../../assets/Android Projects.png";
import IMG2 from "../../assets/Diwali Sales Analysis.png";
import IMG3 from "../../assets/Netflix_Homepage_Clone.png";
import IMG4 from "../../assets/Weather Forecasting website.png";

const Portfolio: React.FC = () => {
    return (
        <section id="portfolio" className="py-16">
            <h5 className="text-center text-gray-400">My Recent Work</h5>
            <h2 className="text-center text-3xl font-bold mb-12">Portfolio</h2>

            <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4">

                {/* -------- Portfolio Item 1 -------- */}
                <article className="bg-white/5 backdrop-blur-lg p-5 rounded-2xl border border-transparent hover:border-purple-500 shadow-lg transition">
                    <div className="rounded-xl overflow-hidden mb-5">
                        <img src={IMG1} alt="Project Preview" className="w-full h-full object-cover" />
                    </div>

                    <h3 className="text-white text-lg font-semibold mb-4">
                        Project Title Goes Here
                    </h3>

                    <div className="flex gap-3">
                        <a
                            href="#"
                            className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white transition"
                        >
                            GitHub
                        </a>
                        <a
                            href="#"
                            className="px-4 py-2 rounded-lg bg-purple-800 hover:bg-purple-900 text-white transition"
                        >
                            Live Demo
                        </a>
                    </div>
                </article>

                {/* -------- Portfolio Item 2 -------- */}
                <article className="bg-white/5 backdrop-blur-lg p-5 rounded-2xl border border-transparent hover:border-purple-500 shadow-lg transition">
                    <div className="rounded-xl overflow-hidden mb-5">
                        <img src={IMG2} alt="Project Preview" className="w-full h-full object-cover" />
                    </div>

                    <h3 className="text-white text-lg font-semibold mb-4">
                        Project Title Goes Here
                    </h3>

                    <div className="flex gap-3">
                        <a
                            href="#"
                            className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white transition"
                        >
                            GitHub
                        </a>
                        <a
                            href="#"
                            className="px-4 py-2 rounded-lg bg-purple-800 hover:bg-purple-900 text-white transition"
                        >
                            Live Demo
                        </a>
                    </div>
                </article>

                {/* -------- Portfolio Item 3 -------- */}
                <article className="bg-white/5 backdrop-blur-lg p-5 rounded-2xl border border-transparent hover:border-purple-500 shadow-lg transition">
                    <div className="rounded-xl overflow-hidden mb-5">
                        <img src={IMG3} alt="Project Preview" className="w-full h-full object-cover" />
                    </div>

                    <h3 className="text-white text-lg font-semibold mb-4">
                        Project Title Goes Here
                    </h3>

                    <div className="flex gap-3">
                        <a
                            href="#"
                            className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white transition"
                        >
                            GitHub
                        </a>
                        <a
                            href="#"
                            className="px-4 py-2 rounded-lg bg-purple-800 hover:bg-purple-900 text-white transition"
                        >
                            Live Demo
                        </a>
                    </div>
                </article>

                {/* -------- Portfolio Item 4 -------- */}
                <article className="bg-white/5 backdrop-blur-lg p-5 rounded-2xl border border-transparent hover:border-purple-500 shadow-lg transition">
                    <div className="rounded-xl overflow-hidden mb-5">
                        <img src={IMG4} alt="Project Preview" className="w-full h-full object-cover" />
                    </div>

                    <h3 className="text-white text-lg font-semibold mb-4">
                        Project Title Goes Here
                    </h3>

                    <div className="flex gap-3">
                        <a
                            href="#"
                            className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white transition"
                        >
                            GitHub
                        </a>
                        <a
                            href="#"
                            className="px-4 py-2 rounded-lg bg-purple-800 hover:bg-purple-900 text-white transition"
                        >
                            Live Demo
                        </a>
                    </div>
                </article>

            </div>
        </section>
    );
};

export default Portfolio;
