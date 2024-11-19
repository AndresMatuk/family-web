"use client"; 
import { motion } from 'framer-motion';
import { useState } from 'react';
import Carousel from './components/carousel';
import Footer from './components/footer';
import Image from 'next/image';

export default function Home() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const sections = [
    {
      title: "Family Web",
      content: "La salud mental es esencial para la armonía y el bienestar en la familia."
    },
    {
      title: "Family Web",
      content: "El apoyo mutuo en los momentos difíciles fortalece los lazos familiares."
    },
    {
      title: "Family Web",
      content: "La comunicación efectiva es la clave para resolver los conflictos."
    }
  ];

  return (
    <>
    
      <section className=" w-full">
        <Carousel />
      </section>
      <motion.section
        id="acerca-de-nosotros"
        className="container mx-auto py-16 px-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
         <p className="text-[#3E369A] mb-6 text-5xl font-semiblond text-center font-Goldplay">
        Acerca de nosotros
      </p>
      <p></p>
         <p className="text-gray-600 mb-6">
        Nuestra marca es una plataforma para el desarrollo integral de la familia. Existe para mejorar el bienestar emocional y social de las familias, brindarles acceso a servicios y recursos de apoyo especializados. Nuestro propósito es fortalecer los lazos familiares y ofrecer herramientas accesibles que faciliten el crecimiento personal, la solución de conflictos y la estabilidad en el hogar. Nuestra marca es una plataforma para el desarrollo integral de la familia. Existe para mejorar el bienestar emocional y social de las familias, brindarles acceso a servicios y recursos de apoyo especializados. Nuestro propósito es fortalecer los lazos familiares y ofrecer herramientas accesibles que faciliten el crecimiento personal, la solución de conflictos y la estabilidad en el hogar. Nuestra marca es una plataforma para el desarrollo integral de la familia. Existe para mejorar el bienestar emocional y social de las familias, brindarles acceso a servicios y recursos de apoyo especializados. Nuestro propósito es fortalecer los lazos familiares y ofrecer herramientas accesibles que faciliten el crecimiento personal, la solución de conflictos y la estabilidad en el hogar.Nuestra marca es una plataforma para el desarrollo integral de la familia. Existe para mejorar el bienestar emocional y social de las familias, brindarles acceso a servicios y recursos de apoyo especializados. Nuestro propósito es fortalecer los lazos familiares y ofrecer herramientas accesibles que faciliten el crecimiento personal, la solución de conflictos y la estabilidad en el hogar. 
      </p>
      <p></p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {sections.map((section, index) => (
            <div
              key={index}
              onClick={() => toggleSection(index)}
              className={`cursor-pointer p-6 bg-gray-700 text-white rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 ${
                activeIndex === index ? 'bg-gray-800' : ''
              }`}
            >
              <h2 className="text-xl font-bold mb-2">{section.title}</h2>
              {activeIndex === index && (
                <p className="text-white transition-opacity duration-500">
                  {section.content}
                </p>
              )}
            </div>
          ))}
        </div>
      
        <section className="flex flex-col md:flex-row items-center justify-between py-[120px] px-8 bg-gray-100">
      
      <div className="md:w-1/2 mb-8 md:mb-0">
      <hr></hr>
        <h2 className="text-3xl mb-4 text-[#3E369A]  font-semiblond text-left font-Goldplay ">Nuestro Compromiso</h2>
        <p className="text-lg text-left text-gray-600 mb-6">
          En Family Web, trabajamos incansablemente para proporcionar apoyo integral y recursos de calidad para ayudar a las familias a crecer y fortalecerse.
        </p>
        <button className="bg-gray-700 text-white px-6 py-2 rounded-md hover:bg-gray-600 transition-all">
          Conoce más
        </button>
      </div>

      {/* Sección de imágenes a la derecha */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:w-1/2">
        <Image src="/img.jpg" width={450} 
    height={450}  alt="Imagen 1" className="rounded-lg shadow-md" />
        <Image src="/img.jpg" width={450} 
    height={450}  alt="Imagen 2" className="rounded-lg shadow-md" />
        <Image src="/img.jpg" width={450} 
    height={450}  alt="Imagen 3" className="rounded-lg shadow-md" />
      </div>
    </section>

    <div className=" w-full relative h-screen bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-center text-white">
      <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-500 to-blue-500 opacity-70" />
      <h2 className="relative text-4xl md:text-5xl font-bold px-4">
       
      </h2>
    

      <button
        className="absolute bottom-20 text-blue-600 bg-white px-8 py-4 text-lg font-Goldplay"
      >
        Descubre Más
      </button>
    </div>
      </motion.section>
     
      <Footer />
    </>
  );
}
