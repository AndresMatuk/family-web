"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Header() {
  const currentPath = usePathname();
  const hiddenRoutes = ['/room'];

  // Hooks: siempre se inicializan
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  // Lógica condicional después de los hooks
  if (hiddenRoutes.some(route => currentPath.startsWith(route))) {
    return null;
  }

  return (
    <header className="fixed top-0 left-0 w-full bg-white text-black py-4 shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="bg-gradient-to-r from-orange-400 via-purple-600 to-blue-500 bg-clip-text font-semibold font-Goldplay text-transparent text-3xl">
          {'FAMILY WEB'}
        </h1>
        <nav>
          <ul className="flex space-x-4">
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
                  <div className="p-4 hover:bg-gray-100" onClick={handleLinkClick}>
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
              <Link href="#" className="hover:underline">
                Foros
              </Link>
            </li>
            <div className="flex mb-1 space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-2xl text-gray-800 hover:text-blue-500" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-2xl text-gray-800 hover:text-blue-400" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-2xl text-gray-800 hover:text-blue-700" />
              </a>
            </div>
          </ul>
        </nav>
      </div>
    </header>
    
  );
}
