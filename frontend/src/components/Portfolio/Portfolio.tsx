import React from "react";
import { usePortfolioContext } from "../../context/ProjectContext";
import useEmblaCarousel from "embla-carousel-react";
import { ExternalLink, Github } from "lucide-react";

const PortfolioCarousel: React.FC = () => {
    const { projects } = usePortfolioContext();
    const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" });

    return (
        <section id="portfolio" className="py-10 my-10">
            <h5 className="text-center text-gray-400">My Recent Work</h5>
            <h2 className="text-center text-3xl font-bold mb-12">Portfolio</h2>

            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex gap-8 px-6">
                    {projects.map((project) => (
                        <article
                            key={project._id}
                            className="min-w-[300px] max-w-[320px] bg-white/5 backdrop-blur-lg p-5 rounded-2xl 
                                       border border-transparent hover:border-purple-500 shadow-lg transition"
                        >
                            {/* Thumbnail */}
                            <div className="rounded-xl overflow-hidden mb-5 h-44">
                                <img
                                    src={project.thumbnail}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Title */}
                            <h3 className="text-white text-lg font-semibold mb-4">
                                {project.title}
                            </h3>

                            {/* Buttons */}
                            <div className="flex gap-3">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 
                                               text-white transition flex items-center gap-2"
                                >
                                    <Github size={16} /> GitHub
                                </a>

                                <a
                                    href={project.live || "#"}
                                    target="_blank"
                                    className="px-4 py-2 rounded-lg bg-purple-800 hover:bg-purple-900 
                                               text-white transition flex items-center gap-2"
                                >
                                    <ExternalLink size={16} /> Live
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PortfolioCarousel;
