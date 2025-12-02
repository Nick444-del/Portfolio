import React from "react";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer: React.FC = () => {
    return (
        <footer className="mt-20 bg-gray-900/60 border-t border-gray-800 py-10 text-white">
            <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-8">

                {/* Logo / Name */}
                <a
                    href="#"
                    className="text-2xl font-bold tracking-widest text-purple-400 hover:text-purple-300 transition"
                >
                    NIKHIL
                </a>

                {/* Navigation Links */}
                <ul className="flex flex-wrap justify-center gap-6 text-gray-300 text-sm">
                    <li><a href="#" className="hover:text-purple-400 transition">Home</a></li>
                    <li><a href="#about" className="hover:text-purple-400 transition">About</a></li>
                    <li><a href="#experience" className="hover:text-purple-400 transition">Experience</a></li>
                    {/* <li><a href="#services" className="hover:text-purple-400 transition">Services</a></li> */}
                    <li><a href="#portfolio" className="hover:text-purple-400 transition">Portfolio</a></li>
                    {/* <li><a href="#testimonials" className="hover:text-purple-400 transition">Testimonials</a></li> */}
                    <li><a href="#contact" className="hover:text-purple-400 transition">Contact</a></li>
                </ul>

                {/* Social Icons */}
                <div className="flex gap-5 text-xl">
                    <a
                        href="https://github.com/Nick444-del"
                        target="_blank"
                        className="p-3 rounded-full bg-gray-800 hover:bg-purple-600 transition"
                    >
                        <FaGithub />
                    </a>

                    <a
                        href="https://www.instagram.com/gorulenikhil/"
                        target="_blank"
                        className="p-3 rounded-full bg-gray-800 hover:bg-purple-600 transition"
                    >
                        <FaInstagram />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/nikhil-goruled444/"
                        target="_blank"
                        className="p-3 rounded-full bg-gray-800 hover:bg-purple-600 transition"
                    >
                        <FaLinkedinIn />
                    </a>
                </div>

                {/* Copyright (optional) */}
                <p className="text-gray-500 text-xs mt-4">
                    © {new Date().getFullYear()} Nikhil Gorule — All Rights Reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
