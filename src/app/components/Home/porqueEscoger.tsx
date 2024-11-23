"use client";
import { useState } from "react";
import { secciones } from "../../data/porqueEscogerData";

export default function PorqueEscoger() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const toggleSection = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
      };
    return (
<div className="p-6">
      <p className="text-3xl text-center md:text-5xl font-roboto font-bold text-[#2d0a3b] mb-4">
        ¿Por qué elegir FamilyWeb?
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {secciones.map((secciones, index) => (
          <div
            key={index}
            onClick={() => toggleSection(index)}
            className={`cursor-pointer p-6 bg-white text-gray-800 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 ${
              activeIndex === index ? "bg-white" : ""
            }`}
          >
            <div className="flex flex-col items-center justify-center mb-4">
              <img
                src={secciones.icon}
                alt={secciones.title}
                 className="w-12 h-12 mb-2"
              />
             <h2 className="text-2xl text-center font-semibold">{secciones.title}</h2>
            </div>
            {activeIndex === index && (
              <p className="text-gray-700 text-xl transition-opacity duration-500">
                {secciones.content}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
    );
}