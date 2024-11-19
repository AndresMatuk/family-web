"use client";
import { useState } from 'react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import Footer from '../components/footer';
import { profesionales } from '../data/profesionalesData';
import Image from 'next/image';


export default function Team() {

  const [seleccionado, setSeleccionado] = useState<string | null>(null);

  // Función para manejar la selección de un profesional
  const handleSeleccionar = (nombre: string) => {
    setSeleccionado(seleccionado === nombre ? null : nombre);
  };

  // Ordena los profesionales para que el seleccionado aparezca primero
  const profesionalesOrdenados = [...profesionales].sort((a, b) => 
    a.nombre === seleccionado ? -1 : b.nombre === seleccionado ? 1 : 0
  );

  return (
    <>
      <section className="relative h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="absolute inset-0 bg-gray-800 opacity-70"></div>
        <div
          className="h-full w-full bg-cover bg-center mx-auto"
          style={{ backgroundImage: 'url(/equipo.jpg)' }}
        ></div>
        <div className="relative p-8 max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Equipo de Profesionales</h1>
          <h1 className="text-3xl font-semibold mb-6">Nuestros Psicologos y T.S</h1>
          <div className="flex justify-center mb-4 space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-2xl text-white hover:text-blue-500" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-2xl text-white hover:text-blue-400" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-2xl text-white hover:text-blue-700" />
            </a>
          </div>
        </div>
      </section>

      <section className="container mx-auto p-8 h-screen flex flex-col justify-start pt-16">
      <h2 className="text-4xl text-center mb-9 text-gray-800 font-bold pt-8">NUESTROS PROFESIONALES</h2>
      <div className={`flex ${seleccionado ? 'flex-wrap' : 'flex-row'} gap-4 items-center flex-grow` }> 
        {profesionalesOrdenados.map((profesional) => (
          <div
            key={profesional.nombre}
            onClick={() => handleSeleccionar(profesional.nombre)}
            className={`cursor-pointer p-4 bg-gray-900 text-white rounded-md transition-all duration-300 ${
              seleccionado === profesional.nombre ? 'w-full flex h-96' : 'w-1/5 h-[390px]' 
            }`}
          >
            <Image
              src={profesional.imagen}
              alt={profesional.nombre}
              width={500}
              height={500}
              className={`rounded-md mb-2 ${
                seleccionado === profesional.nombre ? 'w-48 h-48' : 'w-full h-48'
              } object-cover`}
            />
            <div className={`ml-4 ${seleccionado === profesional.nombre ? 'flex flex-col' : ''}`}>
              <p className="text-lg text-center p-4 font-bold">{profesional.nombre}</p>
              <p className="text-lg text-gray-300 text-center p-0">{profesional.descripcion}</p>
              {seleccionado === profesional.nombre && (
                <>
                  <p className="text-sm mt-2">{profesional.experiencia}</p>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
      <Footer />
    </>
  );
}
