"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, FormEvent } from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
  FaTiktok,
} from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email.includes("@")) {
      setStatus("Please enter a valid email address.");
      return;
    }

    try {
      setStatus("Subscribing...");

      const res = await fetch("https://formsubmit.co/smtp@gravityinfosys.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({ email }),
      });

      if (res.ok) {
        setStatus("Thank you for Subscribing! ");
        setEmail("");
      } else {
        setStatus("Something went wrong. Try again.");
      }
    } catch {
      setStatus("Network error. Try later.");
    }
  };

  return (
    <footer className="bg-[#e3f7fc] pt-12 sm:pt-16 pb-8 sm:pb-10 mt-0">
      <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          {/* Logo */}
          <div className="text-left">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.png"
                alt="Csitan Chitwan logo"
                width={90}
                height={90}
                priority
                className="mx-0"
              />
            </Link>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base font-poppins">
              A non-profit organization by the students, for the students in the
              field of Computer Science and Information Technology.
            </p>
          </div>

          {/* Contact Us and Quick Links Container - 50/50 */}

          {/* Contact methods */}
          <div className="text-left">
            <h3 className="text-lg font-semibold mb-4 font-sora text-[#1eade6]">
              Contact Us
            </h3>
            <ul className="space-y-3 text-gray-700 font-poppins">
              <li className="flex items-center gap-2 justify-start text-sm sm:text-base">
                <FaPhoneAlt className="shrink-0" />
                <Link
                  href="tel:+9779845952673"
                  className="hover:text-[#cf4446] transition-colors"
                >
                  +977 9824238746
                </Link>
              </li>
              <li className="flex items-center gap-2 justify-start text-sm sm:text-base">
                <FaEnvelope className="shrink-0" />
                <Link
                  href="mailto:csitanchitwanofficial@gmail.com"
                  className="hover:text-[#cf4446] transition-colors break-all sm:break-normal"
                >
                  csitanchitwanofficial@gmail.com
                </Link>
              </li>
            </ul>

            <div className="flex gap-4 sm:gap-5 mt-6 text-xl sm:text-2xl justify-start text-gray-600">
              {[
                {
                  icon: <FaFacebook className="hover:text-blue-500" />,
                  href: "https://www.facebook.com/csitanchitwanofficial",
                },
                {
                  icon: <FaInstagram className="hover:text-pink-500" />,
                  href: "https://www.instagram.com/csitanchitwan/",
                },
                {
                  icon: <FaLinkedin className="hover:text-blue-400" />,
                  href: "https://www.linkedin.com/in/csit-association-of-chitwan-b6664b273/",
                },
                { icon: <FaTiktok />, href: "https://www.tiktok.com" },
              ].map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="transition-colors transform hover:scale-110 duration-200"
                  aria-label={`Visit our ${
                    item.href.includes("facebook")
                      ? "Facebook"
                      : item.href.includes("instagram")
                      ? "Instagram"
                      : item.href.includes("linkedin")
                      ? "LinkedIn"
                      : "TikTok"
                  } page`}
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 gap-8 sm:gap-10 lg:gap-12 col-span-1 sm:col-span-2 lg:col-span-2">
            <div className="text-left">
              <h3 className="text-lg font-semibold mb-4 font-sora text-[#1cace6]">
                Quick Links
              </h3>
              <ul className="space-y-2 text-gray-900 font-poppins">
                {[
                  { label: "Home", href: "/" },
                  { label: "About", href: "/about" },
                  { label: "Team", href: "/teams" },
                  { label: "Events", href: "/events" },
                  { label: "Contact Us", href: "/contact-us" },
                ].map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="hover:text-[#cf4446] transition-colors inline-block text-sm sm:text-base"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Events Section */}
            <div className="text-left">
              <h3 className="text-lg font-semibold mb-4 font-sora text-[#1cace6]">
                Events
              </h3>
              <ul className="space-y-2 text-gray-900 font-poppins">
                {[
                  { label: "Upcomming Event", href: "/event" },
                  { label: "Past Event", href: "/event" },
                  { label: "Hacathons", href: "/event" },
                  { label: "Workshops", href: "/event" },
                ].map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="hover:text-[#cf4446] transition-colors inline-block text-sm sm:text-base"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-400 mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-white/10 px-4 sm:px-6">
        <p className="text-xs sm:text-sm font-poppins">
          &copy; {new Date().getFullYear()} CSITAN Chitwan. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
