"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { profesionales, sections } from "../data/profesionalesData";
import Image from "next/image";

const temas = ["Salud Mental", "Comunicación", "Resolución de Conflictos", "Crianza"];

export default function Reuniones() {
  const [profesionalSeleccionado, setProfesionalSeleccionado] = useState<string | null>(null);
  const [temaSeleccionado, setTemaSeleccionado] = useState<string | null>(null);
  const [modalAbierto, setModalAbierto] = useState(false);
  const [verMas, setVerMas] = useState<boolean>(false);

  // Maneja la selección de un profesional
  const handleProfesionalSeleccionado = (nombre: string) => {
    setProfesionalSeleccionado(nombre);
    setTemaSeleccionado(null);
    setModalAbierto(true);
  };

  // Maneja la selección de un tema
  const handleTemaSeleccionado = (tema: string) => {
    setTemaSeleccionado(tema);
    setProfesionalSeleccionado(null);
    setModalAbierto(true);
  };

  // Filtrar reuniones según la selección
  const reunionesFiltradas = sections.filter(
    (reunion) =>
      (!profesionalSeleccionado || reunion.profesional === profesionalSeleccionado) &&
      (!temaSeleccionado || reunion.tema === temaSeleccionado)
  );

  // Profesionales a mostrar
  const profesionalesMostrados = verMas ? profesionales : profesionales.slice(0, 4);

  return (
    <div className="flex w-full h-screen bg-white pt-16">
      {/* Modal */}
      {modalAbierto && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        >
          <div className="bg-white rounded-lg shadow-xl p-8 max-w-2xl w-full relative">
            <button
              onClick={() => setModalAbierto(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-red-600"
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold mb-4">
              {profesionalSeleccionado || temaSeleccionado}
            </h2>
            {reunionesFiltradas.length > 0 ? (
              <ul className="space-y-4">
                {reunionesFiltradas.map((reunion, index) => (
                  <li key={index} className="bg-gray-100 p-4 rounded-md shadow-sm">
                    <p className="text-lg font-semibold">{reunion.title}</p>
                    <p>{reunion.content}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No hay reuniones disponibles para esta selección.</p>
            )}
          </div>
        </motion.div>
      )}

      {/* Sección de profesionales y temas */}
      <aside
        className="w-full p-8 bg-[#dad5f5] text-[#2d0a3b] max-h-screen overflow-y-auto"
        style={{ backgroundImage: "url(/fondo6.png)" }}
      >
        <h2 className="text-2xl font-bold mb-4">Nuestros Profesionales</h2>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-4 mb-8 text-[#2d0a3b]">
          {profesionalesMostrados.map((profesional, index) => (
            <button
              key={index}
              onClick={() => handleProfesionalSeleccionado(profesional.nombre)}
              className="rounded-lg shadow-md p-4 bg-white hover:bg-[#aa9df1]"
            >
              <Image
                src={profesional.imagen}
                alt={profesional.nombre}
                width={150}
                height={150}
                className="w-full h-[480px]  md:h-[180px]  object-cover rounded-md mb-2"
              />
              <p>{profesional.nombre}</p>
              <p>{profesional.contactos}</p>
            </button>
          ))}
          {profesionales.length > 4 && (
            <button
              onClick={() => setVerMas(!verMas)}
              className="px-4 py-2 bg-white shadow-md text-[#2d0a3b] rounded hover:bg-[#aa9df1]"
            >
              {verMas ? "Ver Menos" : "Ver Más"}
            </button>
          )}
        </div>

        <h2 className="text-2xl font-bold mb-4">Temas</h2>
        <div className="space-y-2">
          {temas.map((tema, index) => (
            <button
              key={index}
              onClick={() => handleTemaSeleccionado(tema)}
              className="w-full py-2 px-4 bg-white shadow-md text-[#2d0a3b] rounded-md hover:bg-[#aa9df1]"
            >
              {tema}
            </button>
          ))}
        </div>
      </aside>
    </div>
  );
}
