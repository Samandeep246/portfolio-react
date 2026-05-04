// src/components/Contact.js
import React, { useRef } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import emailjs from "@emailjs/browser";

function Contact() {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kaur",    // replace with your service ID
        "template_kaur",   // replace with your template ID
        formRef.current,
        "WogJ-FX5vgCHtArZk"     // replace with your public key
      )
      .then(
        () => {
          alert("Message sent successfully!");
          formRef.current.reset();
        },
        () => {
          alert("Oops! Something went wrong. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">
          Connect With Me
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-center mb-12">
          Have a question or want to work together? Feel free to drop me a message. I would love to hear from you!
        </p>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Left: Contact Info */}
          <div className="md:w-1/2 space-y-6">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">Contact Information</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Fill up the form and I will get back to you.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-blue-500 text-xl" />
                <div>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">Email</p>
                  <p className="text-gray-700 dark:text-gray-300">kaursamandeep1991@gmail.com</p>
                </div>
              </div>
             
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-red-500 text-xl" />
                <div>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">Location</p>
                  <p className="text-gray-700 dark:text-gray-300">Canada</p>
                </div>
              </div>
            </div>

            {/* Connect With Me */}
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mt-6">Get In Touch</h3>
            <div className="flex space-x-4 mt-2">
              <a href="https://github.com/Samandeep246" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-black dark:text-white text-2xl hover:text-gray-700 dark:hover:text-gray-300" />
              </a>
              <a href="https://www.linkedin.com/in/samandeepkaur246/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-blue-600 text-2xl hover:text-blue-400" />
              </a>
              <a href="https://leetcode.com/u/kaursamandeep1991/" target="_blank" rel="noopener noreferrer">
                <SiLeetcode className="text-yellow-500 text-2xl hover:text-yellow-400" />
              </a>
              <a href="https://stackoverflow.com/users/12659524/samandeep-kaur" target="_blank" rel="noopener noreferrer">
                <FaStackOverflow className="text-orange-600 text-2xl hover:text-orange-400" />
              </a>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="md:w-1/2">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-4 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
            >
              <div className="md:flex md:gap-4">
                <div className="md:w-1/2">
                  <label className="block text-gray-700 dark:text-gray-300 mb-1">Your Name</label>
                  <input
                    type="text"
                    name="user_name"
                    placeholder="John Doe"
                    required
                    className="w-full p-3 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="md:w-1/2 mt-4 md:mt-0">
                  <label className="block text-gray-700 dark:text-gray-300 mb-1">Your Email</label>
                  <input
                    type="email"
                    name="user_email"
                    placeholder="john@example.com"
                    required
                    className="w-full p-3 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-1">Subject</label>
                <input
                  type="text"
                  name="subject"
                  placeholder="How can I help you?"
                  required
                  className="w-full p-3 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-1">Message</label>
                <textarea
                  name="message"
                  rows="2"
                  placeholder="Your message here..."
                  required
                  className="w-full p-3 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
