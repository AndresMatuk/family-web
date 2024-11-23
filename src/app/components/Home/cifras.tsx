'use client';
import { motion } from "framer-motion";

export default function Cifras() {
    const isClient = typeof window !== 'undefined';
    return (
<section className="py-16" id="acerca-de-nosotros" style={{backgroundImage: isClient && window.innerWidth < 1350 ? 'url(/fondos/fondo4.png)' : 'url(/fondos/fondo3.jpg)',}}>
<motion.section
        className="container mx-auto py-16 px-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        
      >
  <div className="max-w-4xl mx-auto text-center p-12 px-6">
    {/* Calificaciones */}
    <div className="flex justify-center items-center space-x-6 mb-6">
      <p className="flex items-center space-x-2 text-lg text-gray-500">
        <span className="text-yellow-500">⭐</span> <span>la mejor aplicación para la ayuda psicológica</span>
      </p>
      <p className="flex items-center space-x-2 text-lg text-gray-500">
        <span className="text-yellow-500">⭐</span> <span>la mejor aplicación para la ayuda psicológica</span>
      </p>
    </div>
    {/* Título principal */}
    <h2 className="text-3xl md:text-5xl font-roboto font-bold text-[#2d0a3b] mb-4 p-4">
      &quot;7 de cada 10 familias <br className="hidden md:block" /> no saben dónde buscar apoyo profesional de forma accesible&quot;
    </h2>
    {/* Descripción */}
    <p className="text-gray-600 text-2xl font-roboto mb-6 p-2">
      El 60% de las familias que atraviesan situaciones de estrés o conflicto no reciben ningún tipo de orientación profesional.
    </p>
  </div>
  </motion.section>
</section>
    );
}
