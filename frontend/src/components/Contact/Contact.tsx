import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { AiOutlineLinkedin } from "react-icons/ai";

const Contact: React.FC = () => {
    const formRef = useRef<HTMLFormElement | null>(null);

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        if (!formRef.current) return;

        emailjs
            .sendForm(
                "service_j7pm9ve",
                "template_elabexb",
                formRef.current,
                "gHONddRE_SRzECjT7"
            )
            .then(
                () => {
                    alert("Message Sent Successfully!");
                    formRef.current?.reset();
                },
                (error) => {
                    console.error(error.text);
                    alert("Failed to send message.");
                }
            );
    };

    return (
        <section id="contact" className="py-16 text-white">
            <h5 className="text-center text-gray-400">Get In Touch</h5>
            <h2 className="text-center text-3xl font-bold mb-12">Contact Me</h2>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6">

                {/* LEFT CONTACT OPTIONS */}
                <div className="flex flex-col gap-6">

                    {/* Card */}
                    <div className="bg-gray-900/40 border border-gray-700 hover:border-purple-500 transition p-6 rounded-2xl shadow-lg flex flex-col gap-2">
                        <MdOutlineEmail className="text-purple-400 text-3xl mb-1" />
                        <h4 className="text-xl font-semibold">Email</h4>
                        <p className="text-gray-300">nikhilgorule7@gmail.com</p>
                        <a href="mailto:nikhilgorule7@gmail.com"
                            className="text-purple-400 hover:text-purple-300 underline mt-1">
                            Send a message
                        </a>
                    </div>

                    {/* Card */}
                    <div className="bg-gray-900/40 border border-gray-700 hover:border-purple-500 transition p-6 rounded-2xl shadow-lg flex flex-col gap-2">
                        <BsWhatsapp className="text-green-400 text-3xl mb-1" />
                        <h4 className="text-xl font-semibold">WhatsApp</h4>
                        <p className="text-gray-300">+91 7900119175</p>
                        <a href="https://api.whatsapp.com/send?phone=917900119175"
                            target="_blank"
                            className="text-green-400 hover:text-green-300 underline mt-1">
                            Send a message
                        </a>
                    </div>

                    {/* Card */}
                    <div className="bg-gray-900/40 border border-gray-700 hover:border-purple-500 transition p-6 rounded-2xl shadow-lg flex flex-col gap-2">
                        <AiOutlineLinkedin className="text-blue-400 text-3xl mb-1" />
                        <h4 className="text-xl font-semibold">LinkedIn</h4>
                        <p className="text-gray-300">Nikhil Gorule</p>
                        <a href="https://www.linkedin.com/in/nikhil-goruled444/"
                            target="_blank"
                            className="text-blue-400 hover:text-blue-300 underline mt-1">
                            View Profile
                        </a>
                    </div>

                </div>

                {/* RIGHT CONTACT FORM */}
                <form
                    ref={formRef}
                    onSubmit={sendEmail}
                    className="bg-gray-900/40 border border-gray-700 p-6 rounded-2xl shadow-lg flex flex-col gap-5 h-fit"
                >
                    <h3 className="text-2xl font-bold text-purple-400 mb-1">Send Me a Message</h3>

                    <input
                        type="text"
                        name="name"
                        placeholder="Your Full Name"
                        required
                        className="p-3 bg-gray-800 border border-gray-700 rounded-xl text-white outline-none focus:border-purple-500 transition"
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        required
                        className="p-3 bg-gray-800 border border-gray-700 rounded-xl text-white outline-none focus:border-purple-500 transition"
                    />

                    <textarea
                        name="message"
                        rows={6}
                        placeholder="Your Message"
                        required
                        className="p-3 bg-gray-800 border border-gray-700 rounded-xl text-white outline-none focus:border-purple-500 transition"
                    ></textarea>

                    <button
                        type="submit"
                        className="bg-purple-600 hover:bg-purple-700 px-5 py-3 rounded-xl text-white font-semibold transition shadow-lg"
                    >
                        Send Message
                    </button>
                </form>

            </div>
        </section>
    );
};

export default Contact;
