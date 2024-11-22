"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { profesionales, sections } from '../data/profesionalesData';
import Image from 'next/image';

const temas = ['Salud Mental', 'Comunicación', 'Resolución de Conflictos', 'Crianza'];

export default function Reuniones() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [profesionalSeleccionado, setProfesionalSeleccionado] = useState<string | null>(null);
  const [temaSeleccionado, setTemaSeleccionado] = useState<string | null>(null);
  const [verMas, setVerMas] = useState<boolean>(false);


  // Maneja la selección de un profesor y deselecciona el tema actual
  const handleProfesionalSeleccionado = (nombre: string) => {
    setProfesionalSeleccionado(nombre);
    setTemaSeleccionado(null);
  };

  // Maneja la selección de un tema y deselecciona el profesor actual
  const handleTemaSeleccionado = (tema: string) => {
    setTemaSeleccionado(tema);
    setProfesionalSeleccionado(null);
  };
  // Restablece todas las selecciones para mostrar todas las reuniones
  const handleMostrarTodos = () => {
    setProfesionalSeleccionado(null);
    setTemaSeleccionado(null);
  };


  // Datos de reuniones simuladas
  

 
 // Modificación de la lógica de filtrado
 const reunionesFiltradas = sections.filter(
  (reunion) =>
    (!profesionalSeleccionado || reunion.profesional === profesionalSeleccionado) &&
    (!temaSeleccionado || reunion.tema === temaSeleccionado)
);

const toggleSection = (index: number) => {
  setActiveIndex(activeIndex === index ? null : index);
};  

// Profesionales a mostrar
const profesionalesMostrados = verMas ? profesionales : profesionales.slice(0, 4);

  return (
    <div className="flex w-full h-screen bg-white  pt-16"> {/* Añadido pt-16 para compensar el header */}
      {/* Sección de reuniones */}
       <section className="w-2/3 p-8">
          
       <h2 className="text-4xl font-roboto text-[#2d0a3b] font-bold mb-4">Anuncios de Reuniones</h2>
        <div className="space-y-4">
          {reunionesFiltradas.map((section, index) => (
            <div key={index}>
              <button
                onClick={() => toggleSection(index)}
                className={`w-full font-roboto text-2xl text-left py-4 px-6 bg-gradient-to-r from-[#aa9df1] to-[#2d0a3b] text-white font-bold rounded-md focus:outline-none transition-transform transform ${
                  activeIndex === index ? 'translate-x-0' : '-translate-x-4'
                } hover:scale-105`}
              >
                {section.title}
              </button>
              <div
                className={`overflow-hidden transition-all duration-700 ${
                  activeIndex === index ? 'max-h-screen p-6' : 'max-h-0'
                }`}
              >
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden p-6 font-roboto shadow-2xl bg-[#2d0a3b]  rounded-md"
                  >
                    <p className="text-white text-lg">{section.content}</p>
                  </motion.div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sección de profesionales y temas */}
      <aside className="w-1/3 p-8 bg-[#dad5f5] text-[#2d0a3b]  max-h-screen overflow-y-auto"
      style={{ backgroundImage: 'url(/fondo6.png)' }}
      >
  <h2 className="text-2xl font-bold mb-4">Nuestros Profesionales</h2>
  <div className="grid grid-cols-2 gap-4 mb-8 text-[#2d0a3b]">
  {profesionalesMostrados.map((profesional, index) => (
      <button
        key={index}
        onClick={() => handleProfesionalSeleccionado(profesional.nombre)}
        className={`rounded-lg shadow-md p-4 bg-white hover:bg-[#aa9df1] ${
          profesionalSeleccionado === profesional.nombre ? 'bg-blue-500' : ''
        }`}
      >
        <Image
          src={profesional.imagen}
          alt={profesional.nombre}
          width={150} 
          height={150} 
          className="w-full h-[180px] object-cover rounded-md mb-2"
        />
        <p>{profesional.nombre}</p>
      </button>
    ))}
    {profesionales.length > 4 && (
          <button
            onClick={() => setVerMas(!verMas)}
             className="px-4 py-2 bg-white shadow-md  text-[#2d0a3b] rounded hover:bg-[#aa9df1]"
          >
            {verMas ? 'Ver Menos' : 'Ver Más'}
          </button>
        )}
  </div>

  <h2 className="text-2xl font-bold mb-4">Temas</h2>
  <div className="space-y-2">
    {temas.map((tema, index) => (
      <button
        key={index}
        onClick={() => handleTemaSeleccionado(tema)}
        className={`w-full py-2 px-4 bg-white shadow-md text-[#2d0a3b] rounded-md hover:bg-[#aa9df1]${
          temaSeleccionado === tema ? 'bg-blue-500' : ''
        }`}
      >
        {tema}
      </button>
    ))}
    <div className="mb-4 p-5 flex justify-center">
      <button 
        onClick={handleMostrarTodos}
        className="px-4 py-2 bg-white shadow-md  text-[#2d0a3b] rounded hover:bg-[#aa9df1]"
      >
        Mostrar todas las reuniones
      </button>
    </div>
  </div>
</aside>

    </div>
  );
}