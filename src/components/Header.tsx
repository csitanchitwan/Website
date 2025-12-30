"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FiMail, FiLinkedin, FiFacebook, FiInstagram } from "react-icons/fi";
import { HiMenu, HiX } from "react-icons/hi";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Team", href: "/teams" },
  { label: "Events", href: "/events" },
  { label: "Contact Us", href: "/contact-us" },
];

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 70);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="w-full fixed top-0 left-0 z-50 pointer-events-auto">
        <style jsx global>{`
          .nav-underline {
            position: absolute;
            left: 50%;
            bottom: -6px;
            height: 2px;
            width: 0%;
            background-color: #ef4446;
            border-radius: 2px;
            transform: translateX(-50%);
            transition: width 0.75s cubic-bezier(0.2, 0.9, 0.3, 1);
          }
          .nav-item:hover .nav-underline {
            width: 100%;
          }
        `}</style>


        <div
          style={{ backgroundColor: "#cf4446" }}
          className="w-full text-white"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between py-1 sm:py-2 gap-2 sm:gap-0 text-xs sm:text-sm font-semibold font-poppins">
              <Link
                href="mailto:csitanchitwanofficial@gmail.com"
                className="inline-flex items-center gap-2 "
              >
                <FiMail className="h-4 w-4" />
                csitanchitwanofficial@gmail.com
              </Link>

              <div className="flex items-center gap-3 sm:gap-4">
                <Link target="_blank"
                  href="https://www.linkedin.com/in/csit-association-of-chitwan-b6664b273/"
                  className="inline-flex items-center gap-1 "
                >
                  <FaLinkedin className="h-4 w-4" />
                  <span className="hidden sm:inline">
                  LinkedIn
                  </span>
                </Link>
                <Link target="_blank"
                  href="https://www.facebook.com/csitanchitwanofficial"
                  className="inline-flex items-center gap-1 "
                >
                  <FaFacebook className="h-4 w-4" />
                  <span className="hidden sm:inline">
                  Facebook
                  </span>
                </Link>
                <Link target="_blank"
                  href="https://www.instagram.com/csitanchitwan/"
                  className="inline-flex items-center gap-1 "
                >
                  <FaInstagram className="h-4 w-4" />
                  <span className="hidden sm:inline">
                  Instagram
                  </span>
                </Link>
              </div>
          </div>
        </div>

        <div
          className={`w-full shadow-md transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-lg" : "bg-white"}`}
          role="navigation"
        >
          <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
            <div className="flex items-center min-h-16 sm:min-h-18 justify-between">
                <Link
                  href="/"
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <Image
                    src="/logo.png"
                    alt="Csitan Chitwan logo"
                    width={70}
                    height={70}
                    priority
                  />
                </Link>
             
              {/* Desktop Menu */}
              <nav className="flex-1 hidden md:flex justify-center">
                <ul className="flex items-center gap-6 lg:gap-8">
                  {navLinks.map((link) => {
                    const active = pathname === link.href;
                    return (
                      <li key={link.href} className="relative nav-item">
                        <Link
                          href={link.href}
                          className={`font-semibold transition px-2 py-2 font-poppins ${
                            active ? "text-[#1eade6]" : "text-gray-800 hover:text-[#1eade6]"
                          }`}
                        >
                          {link.label}
                        </Link>
                        <span
                          className="nav-underline"
                          style={{ width: active ? "100%" : undefined }}
                        />
                      </li>
                    );
                  })}
                </ul>
              </nav>

              {/* Mobile Menu Button */}
            
                <button
                  onClick={() => setIsOpen((s) => !s)}
                  className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 cursor-pointer"
                  aria-expanded={isOpen}
                  aria-controls="mobile-menu"
                >
                  {isOpen ? (
                    <HiX className="w-7 h-7" />
                  ) : (
                    <HiMenu className="w-7 h-7" />
                  )}
                </button>
              
            </div>
          </div>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                id="mobile-menu"
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
                className="md:hidden bg-gray-200 absolute left-0 right-0 top-full z-50 shadow-xl"
              >
                <div className="px-5 pt-4 pb-6 space-y-3">
                  {navLinks.map((link) => {
                    const active = pathname === link.href;
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`block py-2 font-medium rounded-md font-poppins ${
                          active
                            ? "text-[#1eade6]"
                            : "text-gray-800 hover:text-[#1eade6]"
                        }`}
                      >
                        {link.label}
                      </Link>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      <div className="h-12.5" />
    </>
  );
}