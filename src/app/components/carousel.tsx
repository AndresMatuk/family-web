"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Carousel() {
  const slides = [
    "Fortalecemos los lazos familiares con soluciones digitales accesibles y personalizadas.", 
    "Encuentra orientación, apoyo y herramientas para construir un hogar lleno de bienestar.", 
    "Family Web: Tu espacio integral para el crecimiento emocional y social de tu familia."
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Cambia cada 5 segundos
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative h-screen bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-center text-white">
      <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-500 to-blue-500 opacity-70" />
      <h2 className="relative text-4xl md:text-5xl font-bold px-4">
        {slides[currentSlide]}
      </h2>
      <button
        className="absolute left-0 text-white p-4"
        onClick={() => setCurrentSlide((currentSlide - 1 + slides.length) % slides.length)}
      >
        &#8249;
      </button>
      <button
        className="absolute right-0 text-white p-4"
        onClick={() => setCurrentSlide((currentSlide + 1) % slides.length)}
      >
        &#8250;
      </button>
      
      <button
        className="absolute bottom-20 text-blue-600 bg-white px-8 py-4 text-lg font-Goldplay"
      >
        <Link href="#acerca-de-nosotros">
        Descubre Más
        </Link>
      </button>
      
    </div>
  );
};
