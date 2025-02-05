import React from "react";
import {
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaLinkedin,
  FaMapMarkerAlt,
  FaClock,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-neutral-800 text-white py-8 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Location Section */}
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-2">Our Location</h3>
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt size={20} />
            <p>123 Main Street, New York, NY</p>
          </div>
          <iframe
            className="mt-3 rounded-lg w-full h-40 md:h-48"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.528758963605!2d-74.00601548459246!3d40.71277607933012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a317c1b8f91%3A0xdee50dfc4fd1f0b3!2sNew%20York!5e0!3m2!1sen!2sus!4v1638888888888"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* Business Hours */}
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-2">Business Hours</h3>
          <div className="flex items-center gap-2">
            <FaClock size={20} />
            <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
          </div>
          <div className="flex items-center gap-2 mt-1">
            <FaClock size={20} />
            <p>Saturday: 10:00 AM - 4:00 PM</p>
          </div>
          <div className="flex items-center gap-2 mt-1">
            <FaClock size={20} />
            <p>Sunday: Closed</p>
          </div>
        </div>

        {/* Contact & Socials */}
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
          <div className="flex items-center gap-2">
            <FaPhone size={20} />
            <p>(444)444-7890</p>
          </div>
          <div className="flex items-center gap-2 mt-1">
            <FaEnvelope size={20} />
            <p>info@yahoo.com</p>
          </div>

          {/* Social Media */}
          <div className="flex gap-4 mt-4">
            <FaTwitter className="hover:text-blue-400 cursor-pointer" size={30} />
            <FaInstagram className="hover:text-pink-500 cursor-pointer" size={30} />
            <FaFacebook className="hover:text-blue-600 cursor-pointer" size={30} />
            <FaYoutube className="hover:text-red-500 cursor-pointer" size={30} />
            <FaLinkedin className="hover:text-blue-700 cursor-pointer" size={30} />
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <p className="text-center text-neutral-400 mt-6">
        © {new Date().getFullYear()} <span className="text-white cursor-pointer">Sean</span>. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
