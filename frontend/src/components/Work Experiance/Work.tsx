import React from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

type ExperienceItem = {
    role: string;
    company: string;
    location?: string;
    description: string;
    start: string;
    end: string | "Present";
    current?: boolean;
};

const experiences: ExperienceItem[] = [
    {
        role: "IT Developer",
        company: "Wow Truck Technologies Pvt. Ltd.",
        location: "India",
        description:
            "MERN Stack Developer skilled in React, Node.js, MongoDB, and real-world full-stack application development. Passionate about building fast, scalable, and user-friendly digital experiences.",
        start: "Mar 2025",
        end: "Present",
        current: true,
    }
];

const WorkExperience: React.FC = () => {
    return (
        <section id="work" className="py-20 bg-transparent text-white">
            <h5 className="text-center text-gray-400">Where I've Worked</h5>
            <h2 className="text-center text-3xl font-bold mb-14">Work Experience</h2>

            <div className="max-w-5xl mx-auto px-6 relative">

                {/* Vertical Line */}
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gray-800/40 rounded-full"></div>

                {/* Timeline Items */}
                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className={`
                                relative flex flex-col md:flex-row 
                                ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"}
                            `}
                        >
                            {/* Dot */}
                            <div className="absolute left-2 md:left-1/2 transform -translate-x-1/2 w-5 h-5 bg-purple-600 border-4 border-gray-950 rounded-full"></div>

                            <div
                                className={`
                                mt-10 md:w-[45%] p-6 rounded-2xl shadow-lg
                                border border-gray-800 bg-gray-900/40 backdrop-blur-lg
                                hover:border-purple-500 transition
                                ${exp.current ? "border-purple-600" : ""}
                                `}
                            >
                                <h3 className="text-xl font-semibold text-purple-300 flex items-center gap-2">
                                    <Briefcase size={20} />
                                    {exp.role}
                                </h3>

                                <p className="mt-1 text-gray-300 font-medium">{exp.company}</p>

                                {exp.location && (
                                    <p className="flex items-center gap-2 text-gray-400 text-sm mt-1">
                                        <MapPin size={16} /> {exp.location}
                                    </p>
                                )}

                                <p className="flex items-center gap-2 text-gray-400 text-sm mt-2">
                                    <Calendar size={16} /> {exp.start} —{" "}
                                    <span className="text-purple-400">{exp.end}</span>
                                </p>

                                <p className="mt-3 text-gray-300 text-sm leading-relaxed">
                                    {exp.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WorkExperience;
