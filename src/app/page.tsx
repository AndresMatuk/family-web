"use client"; 
import { motion } from 'framer-motion';
import { useState } from 'react';
import Carousel from './components/carousel';
import Footer from './components/footer';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const sections = [
    {
      title: "Acceso a Profesionales",
      content:
        "Conéctate con terapeutas y trabajadores sociales altamente capacitados, listos para apoyarte en momentos de crisis o simplemente para mejorar tu calidad de vida.",
      icon: "/icons/iconProfesional.png",
    },
    {
      title: "Flexibilidad Total",
      content:
        "Agenda tus sesiones cuando más te convenga, ya sea a través de videollamadas, chats en línea o recursos interactivos. ¡Tú decides cómo y cuándo recibir ayuda!",
      icon: "/icons/iconFlexibilidad.png",
    },
    {
      title: "Comunidad de Apoyo",
      content:
        "Únete a foros y grupos donde podrás compartir experiencias y encontrar apoyo entre personas que comprenden tus desafíos.",
      icon: "/icons/IconComunidad.png",
    },
  ];

  return (
    <>
    
      <section className=" w-full"
      >
        <Carousel />
      </section>
      <section className="py-16" id="acerca-de-nosotros" style={{ backgroundImage: 'url(/fondo3.jpg)' }}>
  <div className="max-w-4xl mx-auto text-center p-12 px-6">
    {/* Calificaciones */}
    <div className="flex justify-center items-center space-x-6 mb-6">
      <p className="flex items-center space-x-2 text-lg text-gray-500">
        <span className="text-yellow-500">⭐</span> <span>la mejor aplicación para la ayuda psicologica</span>
      </p>
      <p className="flex items-center space-x-2 text-lg text-gray-500">
        <span className="text-yellow-500">⭐</span> <span>la mejor aplicación para la ayuda psicologica</span>
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
</section>
<section className="" style={{ backgroundImage: 'url(/fondo4.png)' }}>
      <motion.section
        className="container mx-auto py-16 px-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        
      >
         <p className="text-3xl text-center md:text-5xl font-roboto font-bold text-[#2d0a3b] mb-4">
         Bienvenido a FamilyWeb:<br />  Tu Aliado en el Bienestar Familiar
      </p>
      <p></p>
      <p className="text-gray-600 text-2xl font-roboto mb-6 p-11">
  En un mundo donde el bienestar emocional y la salud mental son más importantes que nunca, FamilyWeb se presenta como la solución integral que necesitas. Nuestra plataforma digital ofrece un acceso fácil y seguro a servicios de apoyo psicosocial, conectando a familias y profesionales de la salud mental en un entorno virtual que prioriza la comodidad y la confidencialidad.
</p>
      <div className="p-6">
      <p className="text-3xl text-center md:text-5xl font-roboto font-bold text-[#2d0a3b] mb-4">
        ¿Por qué elegir FamilyWeb?
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {sections.map((section, index) => (
          <div
            key={index}
            onClick={() => toggleSection(index)}
            className={`cursor-pointer p-6 bg-white text-gray-800 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 ${
              activeIndex === index ? "bg-white" : ""
            }`}
          >
            <div className="flex flex-col items-center justify-center mb-4">
              <img
                src={section.icon}
                alt={section.title}
                 className="w-12 h-12 mb-2"
              />
             <h2 className="text-2xl text-center font-semibold">{section.title}</h2>
            </div>
            {activeIndex === index && (
              <p className="text-gray-700 text-xl transition-opacity duration-500">
                {section.content}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  
    <section className="flex flex-col md:flex-row items-center justify-between py-[120px] px-8 bg-gray-100">
  {/* Sección de texto a la izquierda */}
  <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8"> {/* Espaciado adicional a la derecha */}
    
    <h2 className="text-4xl mb-4 text-[#2d0a3b] font-semiblond text-left font-roboto p-5">
      Nuestro Compromiso
    </h2>
    <p className="text-gray-600 text-2xl text-left font-roboto mb-6 ">
      En FamilyWeb, estamos comprometidos no solo con ofrecer servicios, sino con construir un ecosistema de apoyo que promueva el bienestar emocional y la cohesión familiar en todo momento. Juntos, podemos crear un futuro más saludable y equilibrado para todos.
    </p>
    
  </div>

  {/* Sección de imágenes a la derecha */}
  
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:w-1/2 md:pl-8"> {/* Espaciado adicional a la izquierda y mayor separación entre imágenes */}
    <Image
      src="/img.png"
      width={500}
      height={700}
      alt="Imagen 1"
      className="rounded-lg shadow-md"
    />
    <Image
      src="/img2.png"
      width={500}
      height={700}
      alt="Imagen 2"
      className="rounded-lg shadow-md"
    />
    <Image
      src="/img3.png"
      width={500}
      height={700}
      alt="Imagen 3"
      className="rounded-lg shadow-md"
    />
    <Image
      src="/img4.png"
      width={500}
      height={700}
      alt="Imagen 1"
      className="rounded-lg shadow-md"
    />
    
  </div>
</section>

<div
  className="w-full relative h-screen bg-cover flex items-end text-white"
  style={{ backgroundImage: 'url(/fondo5.png)' }}
>
  <div className="absolute max-w-[540px] bottom-8 left-8 text-left">
    <h2 className="text-4xl md:text-5xl font-bold mb-4">
      VIDEO LLAMADA
    </h2>
    <p className="text-gray-200  text-2xl text-left font-roboto mb-6 leading-relaxed">
      En FamilyWeb, estamos comprometidos no solo con ofrecer servicios, sino con construir un ecosistema de apoyo que promueva el bienestar emocional y la cohesión familiar en todo momento. Juntos, podemos crear un futuro más saludable y equilibrado para todos.
    </p>
    <button className="bg-[#2d0a3b] text-white px-6 py-5 text-lg rounded-md hover:bg-[#752fbb] transition-all">
    <Link href="/videoCall">Descubre Más</Link>
    </button>
  </div>
</div>
      </motion.section>
      </section>  
      <Footer />
    </>
  );
}
