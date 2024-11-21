"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FaBars, FaTimes, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const currentPath = usePathname();
  const hiddenRoutes = ["/room"];

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef<HTMLLIElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  if (hiddenRoutes.some((route) => currentPath.startsWith(route))) {
    return null;
  }

  return (
    <header
      className={`fixed top-0 left-1/2 transform -translate-x-1/2 w-full py-4 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-lg rounded-2xl max-w-[85%] mx-4 my-2 border border-gray-200"
          : "bg-white shadow-md border-none"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-8 lg:px-16 max-w-screen-lg">
        {/* Logo */}
        <div className="flex items-center space-x-0">
          <Image
            src={"/icons/iconText.png"}
            alt={"Family Web"}
            width={190}
            height={190}
          />
        </div>

        {/* Hamburger Menu for mobile */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-2xl focus:outline-none">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Navigation */}
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } lg:flex flex-col lg:flex-row absolute lg:relative top-16 left-0 lg:top-0 lg:left-auto bg-white lg:bg-transparent w-full lg:w-auto p-4 lg:p-0 shadow-lg lg:shadow-none transition-all duration-300`}
        >
          <ul className="flex flex-col lg:flex-row lg:space-x-4 text-[#2d0a3b] space-y-4 lg:space-y-0">
            <li>
              <Link href="/" className="hover:underline">
                Inicio
              </Link>
            </li>
            <li className="relative">
              <button
                onClick={toggleDropdown}
                className="hover:underline focus:outline-none"
              >
                Terapia en vivo
              </button>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-lg"
                >
                  <div
                    className="p-4 border-b border-gray-200 hover:bg-gray-100"
                    onClick={handleLinkClick}
                  >
                    <Link href="/reuniones" className="text-gray-800">
                      Anuncio de reuniones
                    </Link>
                  </div>
                  <div
                    className="p-4 hover:bg-gray-100"
                    onClick={handleLinkClick}
                  >
                    <Link href="/videoCall" className="text-gray-800">
                      Reuniones en vivo
                    </Link>
                  </div>
                </motion.div>
              )}
            </li>
            <li>
              <Link href="/equipo" className="hover:underline">
                Nuestros Psicologos y T.S
              </Link>
            </li>
            <li>
              <Link href="/foro" className="hover:underline">
                Foros
              </Link>
            </li>
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-2xl text-[#2d0a3b] hover:text-blue-500" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-2xl text-[#2d0a3b] hover:text-blue-400" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-2xl text-[#2d0a3b] hover:text-blue-700" />
              </a>
            </div>
          </ul>
        </nav>
      </div>
    </header>
  );
}
