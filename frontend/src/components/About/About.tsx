import React from 'react';
import me from '../../assets/about me.jpg';
import { FaAward, FaUsers, FaFolder } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const About = (): React.JSX.Element => {
    const [experience, setExperience] = useState<string>('Fresher');

    useEffect(() => {
        const calculateExperience = (): void => {
            const startDate = new Date('2025-03-12'); // Your start date
            const currentDate = new Date();
            
            // Check if start date is in the future
            if (currentDate < startDate) {
                setExperience('Fresher');
                return;
            }
            
            // Calculate difference in months
            let months = (currentDate.getFullYear() - startDate.getFullYear()) * 12;
            months -= startDate.getMonth();
            months += currentDate.getMonth();
            
            // Handle case where current date is before the day of the month
            if (currentDate.getDate() < startDate.getDate()) {
                months--;
            }
            
            // Calculate years and remaining months
            const years = Math.floor(months / 12);
            const remainingMonths = months % 12;
            
            if (years === 0 && remainingMonths === 0) {
                // Less than a month of experience
                const days = Math.floor((currentDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
                setExperience(`${days} day${days !== 1 ? 's' : ''}`);
            } else if (years === 0) {
                setExperience(`${remainingMonths} month${remainingMonths > 1 ? 's' : ''}`);
            } else if (remainingMonths === 0) {
                setExperience(`${years} year${years > 1 ? 's' : ''}`);
            } else {
                setExperience(`${years} year${years > 1 ? 's' : ''} ${remainingMonths} month${remainingMonths > 1 ? 's' : ''}`);
            }
        };

        calculateExperience();
        
        // Update experience every day for more accuracy
        const interval = setInterval(calculateExperience, 24 * 60 * 60 * 1000); // Update daily
        
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="about" className="py-16">
            <h5 className="text-lg text-center mb-4">Get to know</h5>
            <h2 className="text-3xl font-bold text-center mb-16">About Me</h2>

            <div className="container grid grid-cols-1 md:grid-cols-[35%_50%] gap-12 md:gap-15 max-w-6xl mx-auto px-4">
                <div className="about__me w-full aspect-square rounded-3xl bg-gradient-to-br from-transparent via-blue-500 to-transparent grid place-items-center md:w-full mx-auto md:mx-0 md:mb-0 mb-8">
                    <div className="about__me__image rounded-3xl overflow-hidden transform rotate-6 transition-transform duration-300 hover:rotate-0 w-full h-full">
                        <img src={me} alt="About image" className="w-full h-full object-cover" />
                    </div>
                </div>
                
                <div className="about__content">
                    <div className="about__cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
                        <article className="about__card bg-blue-500/10 border border-transparent rounded-2xl p-8 text-center transition-all duration-300 hover:bg-transparent hover:border-blue-500/30">
                            <FaAward className="about__icon text-blue-500 text-2xl mb-4 mx-auto" />
                            <h5 className="text-lg font-medium mb-2">Experience</h5>
                            <small className="text-gray-400 text-sm">{experience}</small>
                        </article>
                        
                        <article className="about__card bg-blue-500/10 border border-transparent rounded-2xl p-8 text-center transition-all duration-300 hover:bg-transparent hover:border-blue-500/30">
                            <FaUsers className="about__icon text-blue-500 text-2xl mb-4 mx-auto" />
                            <h5 className="text-lg font-medium mb-2">Clients</h5>
                            <small className="text-gray-400 text-sm">N/A</small>
                        </article>
                        
                        <article className="about__card bg-blue-500/10 border border-transparent rounded-2xl p-8 text-center transition-all duration-300 hover:bg-transparent hover:border-blue-500/30">
                            <FaFolder className="about__icon text-blue-500 text-2xl mb-4 mx-auto" />
                            <h5 className="text-lg font-medium mb-2">Projects</h5>
                            <small className="text-gray-400 text-sm">
                                <a 
                                    href="https://github.com/Nick444-del" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="hover:text-blue-500 transition-colors"
                                >
                                    Github
                                </a>
                            </small>
                        </article>
                    </div>

                    <p className="text-gray-400 mb-8 mt-8 md:my-8 leading-relaxed">
                        Hello! I'm a tech enthusiast with a Master's degree in Information Technology and a background in Computer Applications. My expertise spans data analysis, Android development, and frontend development. Passionate about leveraging technology to solve real-world challenges, I thrive in creating innovative solutions at the intersection of data and user experience. Let's connect and explore the exciting possibilities in the digital realm!
                    </p>

                    <a href="#contact" className="btn btn-primary bg-blue-500 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:bg-blue-600 inline-block">
                        Let's Talk
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;