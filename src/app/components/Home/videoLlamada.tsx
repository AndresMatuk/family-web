'use client';
import Link from 'next/link';

export default function VideoLlamada() {
  return (
<div
  className="w-full relative h-screen bg-cover flex items-end text-white"
  style={{ backgroundImage: 'url(/fondos/fondo5.png)' }}
>
<div className="absolute bottom-8 left-8 text-left max-w-[540px] md:max-w-[440px]">
  <h2 className="text-3xl md:text-5xl font-bold mb-4">
    VIDEO LLAMADA
  </h2>
  <p className="text-gray-200  text-2xl md:text-2xl font-roboto mb-6 leading-relaxed">
    En FamilyWeb, estamos comprometidos no solo con ofrecer servicios, sino con construir un ecosistema de apoyo que promueva el bienestar emocional y la cohesión familiar en todo momento. Juntos, podemos crear un futuro más saludable y equilibrado para todos.
  </p>
  <button className="bg-[#2d0a3b] text-white px-4 py-3 md:px-6 md:py-5 text-sm md:text-lg rounded-md hover:bg-[#752fbb] transition-all">
    <Link href="/videoCall">Descubre Más</Link>
  </button>
</div>

</div>
    );
}