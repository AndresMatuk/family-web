"use client"; 
import { motion } from 'framer-motion';
import { useState, AnimationEvent } from 'react';
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
      <section className="bg-white py-16">
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
    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
    "¿Sabían que 7 de cada 10 <br className="hidden md:block" />
    familias enfrentan conflictos que afectan su bienestar emocional y no saben dónde buscar apoyo profesional de forma accesible?"
    </h2>
    {/* Descripción */}
    <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
    Las cifras muestran que el 60% de las familias que atraviesan situaciones de estrés o conflicto no reciben ningún tipo de orientación profesional. Muchas veces, esto se traduce en un ambiente de inestabilidad que impacta negativamente en la salud emocional de todos sus miembros, especialmente de los niños y adolescentes.
    </p>
    
  </div>
</section>

      <motion.section
        id="acerca-de-nosotros"
        className="container mx-auto py-16 px-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
         <p className="text-3xl text-center md:text-5xl font-bold text-gray-900 mb-4">
        Acerca de nosotros
      </p>
      <p></p>
         <p className="text-gray-600 mb-6 p-11">
        Nuestra marca es una plataforma para el desarrollo integral de la familia. Existe para mejorar el bienestar emocional y social de las familias, brindarles acceso a servicios y recursos de apoyo especializados. Nuestro propósito es fortalecer los lazos familiares y ofrecer herramientas accesibles que faciliten el crecimiento personal, la solución de conflictos y la estabilidad en el hogar. Nuestra marca es una plataforma para el desarrollo integral de la familia. Existe para mejorar el bienestar emocional y social de las familias, brindarles acceso a servicios y recursos de apoyo especializados. Nuestro propósito es fortalecer los lazos familiares y ofrecer herramientas accesibles que faciliten el crecimiento personal, la solución de conflictos y la estabilidad en el hogar. Nuestra marca es una plataforma para el desarrollo integral de la familia. Existe para mejorar el bienestar emocional y social de las familias, brindarles acceso a servicios y recursos de apoyo especializados. Nuestro propósito es fortalecer los lazos familiares y ofrecer herramientas accesibles que faciliten el crecimiento personal, la solución de conflictos y la estabilidad en el hogar.Nuestra marca es una plataforma para el desarrollo integral de la familia. Existe para mejorar el bienestar emocional y social de las familias, brindarles acceso a servicios y recursos de apoyo especializados. Nuestro propósito es fortalecer los lazos familiares y ofrecer herramientas accesibles que faciliten el crecimiento personal, la solución de conflictos y la estabilidad en el hogar. 
      </p>
      <p></p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {sections.map((section, index) => (
            <div
              key={index}
              onClick={() => toggleSection(index)}
              className={`cursor-pointer p-6 bg-white text-gray-800 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 ${
                activeIndex === index ? 'bg-white' : ''
              }`}
            >
              <h2 className="text-xl text-center font-semibold mb-2">{section.title}</h2>
              {activeIndex === index && (
                <p className="text-gray-700 transition-opacity duration-500">
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
        VIDEO LLAMADAS EN VIVO
      </h2>
    

      <button
        className="absolute bottom-20 text-blue-600 bg-white px-8 py-4 text-lg font-Goldplay"
      >
        <Link href="/videoCall">
        Descubre Más
        </Link>
      </button>
    </div>
      </motion.section>
     
      <Footer />
    </>
  );
}
