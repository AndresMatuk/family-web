'use client';
import Image from 'next/image';
export default function Compromiso() {
    return (
<section className="flex flex-col md:flex-row items-center justify-between py-[120px] px-8 bg-gray-100">
{/* Sección de texto a la izquierda */}
<div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
  <h2 className="text-4xl mb-4 text-[#2d0a3b] font-semiblond text-left font-roboto p-5">
    Nuestro Compromiso
  </h2>
  <p className="text-gray-600 text-2xl text-left font-roboto mb-6">
    En FamilyWeb, estamos comprometidos no solo con ofrecer servicios, sino con construir un ecosistema de apoyo que promueva el bienestar emocional y la cohesión familiar en todo momento. Juntos, podemos crear un futuro más saludable y equilibrado para todos.
  </p>
</div>

{/* Sección de imágenes a la derecha */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:w-1/2 md:pl-8">
  <Image
    src="/compromiso/img.png"
    width={500}
    height={700}
    alt="Imagen 1"
    className="rounded-lg shadow-md"
  />
  <Image
    src="/compromiso/img2.png"
    width={500}
    height={700}
    alt="Imagen 2"
    className="rounded-lg shadow-md"
  />
  <Image
    src="/compromiso/img3.png"
    width={500}
    height={700}
    alt="Imagen 3"
    className="hidden sm:block rounded-lg shadow-md"
  />
  <Image
    src="/compromiso/img4.png"
    width={500}
    height={700}
    alt="Imagen 4"
    className="hidden sm:block rounded-lg shadow-md"
  />
</div>
</section>
    );
}