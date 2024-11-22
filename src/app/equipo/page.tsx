"use client";
import { useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
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
      <section className="relative h-screen bg-gradient-to-r from-[#aa9df1] to-[#2d0a3b] text-white flex items-center justify-center">
        <div className="absolute inset-0 bg-[#2d0a3b] opacity-70"></div>
        <div
          className="h-full w-full bg-cover bg-center mx-auto"
          style={{ backgroundImage: 'url(/equipo.jpg)' }}
        ></div>
        <div className="relative p-8 max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Equipo de Profesionales</h1>
          <h1 className="text-3xl font-semibold mb-6">Nuestros Psicologos y T.S</h1>
          <div className="flex justify-center mb-4 space-x-4">
          <a href="https://www.facebook.com/share/19x45j3aVw/" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-2xl text-[#2d0a3b] hover:text-blue-500" />
              </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-2xl text-white hover:text-blue-400" />
            </a>
            <a href="https://www.instagram.com/family_w3b/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-2xl text-[#2d0a3b] hover:text-pink-500" />
              </a>
          </div>
        </div>
      </section>
                   
      <section className="mx-auto p-8 min-h-screen flex flex-col justify-start pt-16"
       style={{ backgroundImage: 'url(/fondo4.png)' }}
      >
        
        <div className="mx-auto container w-full p-8 h-screen flex flex-col justify-start pt-16">
      <h2 className="text-5xl text-center mb-9 font-roboto text-[#2d0a3b] font-bold pt-8">NUESTROS PROFESIONALES</h2>
      <div className={`flex ${seleccionado ? 'flex-wrap' : 'flex-row'} gap-4 items-center flex-grow`}>
        {profesionalesOrdenados.map((profesional) => (
          <div
          key={profesional.nombre}
          onClick={() => handleSeleccionar(profesional.nombre)}
          className={`shadow-lg cursor-pointer p-4 bg-white text-[#2d0a3b] rounded-md transition-all duration-300 ${
            seleccionado === profesional.nombre ? 'w-full flex h-96' : 'w-1/5 h-[390px]'
          }`}
        >
          <div
            className={`flex ${
               seleccionado === profesional.nombre ? 'items-center justify-center w-2/5 h-auto ': 'w-full h-48'
            }`}
            style={{
              height: seleccionado === profesional.nombre ? '100%' : 'auto', // Asegura que el contenedor use todo el espacio disponible cuando esté ampliado
            }}
          >
            <Image
              src={profesional.imagen}
              alt={profesional.nombre}
              width={500}
              height={500}
                className={`rounded-md object-cover ${
                seleccionado === profesional.nombre ? 'w-full h-full' : 'w-full h-48'
              } object-cover`}
            />
          </div>
          <div className={`ml-4 ${seleccionado === profesional.nombre ? 'flex flex-col overflow-y-auto max-h-full p-4' : ''}`}>
            <p className="text-center font-roboto text-2xl p-4 font-bold">{profesional.nombre}</p>
            <p className="text-lg font-roboto text-[#5a3769] text-center p-0">{profesional.especialidad}</p>
            {seleccionado === profesional.nombre && (
              <>
                <p className="font-roboto text-[#5a3769] text-lg mx-4 px-4"><p className="font-roboto font-bold text-[#2d0a3b] text-2xl mt-2">Experiencia </p>{profesional.experiencia}</p>
                <p className="font-roboto text-[#5a3769] text-lg mx-4 px-4"><p className="font-roboto font-bold text-[#2d0a3b] text-2xl mt-2">Descripcion</p>{profesional.descripcion}</p>
                <p className="font-roboto text-[#5a3769] text-lg mx-4 px-4"><p className="font-roboto font-bold text-[#2d0a3b] text-2xl mt-2">Enfoque Terapéutico </p>{profesional.enfoqueTerapéutico}</p>
                <p className="font-roboto text-[#5a3769] text-lg mx-4 px-4"><p className="font-roboto font-bold text-[#2d0a3b] text-2xl mt-2">Descripción Personal</p>{profesional.descripciónPersonal}</p>
                <p className="font-roboto text-[#5a3769] text-lg mx-4 px-4"><p className="font-roboto font-bold text-[#2d0a3b] text-2xl mt-2">Testimonio de Pacientes  </p>{profesional.testimonioPacientes}</p>
                <p className="font-roboto text-[#5a3769] text-lg mx-4 px-4"><p className="font-roboto font-bold text-[#2d0a3b] text-2xl mt-2">Contacto </p>{profesional.contactos}</p>
              </>
            )}
          </div>
        </div>
        ))}
      </div>
      </div>
    </section>
      <Footer />
    </>
  );
}
