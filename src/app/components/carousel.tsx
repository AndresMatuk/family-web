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
    <div
      className="relative h-screen bg-cover bg-center bg-no-repeat flex items-center justify-between px-16 text-black"
      style={{
        backgroundImage: window.innerWidth < 1350 ? 'url(/fondo9.png)' : 'url(/fondo.jpeg)',
      }}
    >
      {/* Contenedor del texto y botón */}
      
      <div className="flex flex-col items-start space-y-6 max-w-[820px] pl-10 md:pl-20 lg:pl-32">
        <h2 className="text-4xl md:text-5xl font-roboto font-bold text-[#2d0a3b] leading-relaxed">
          {slides[currentSlide]}
        </h2>
        <button className="bg-[#421575] text-white px-8 py-4 text-lg rounded-md hover:bg-[#2d0a3b] transition-all">
          <Link href="#acerca-de-nosotros">Descubre Más</Link>
        </button>
      </div>
    </div>
  );
}


