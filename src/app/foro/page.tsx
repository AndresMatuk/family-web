'use client';
import React from 'react';
import Image from 'next/image';

const Forum = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      

      {/* Contenido principal */}
      <main className="container mx-auto p-6  pt-20">
        {/* Crear nuevo tema */}
        <section className="mb-8 bg-white p-6 rounded-lg shadow-md">
        <p className="text-gray-700 mb-6 text-4xl font-blond text-left">
        Foro
      </p>
          <h2 className="text-lg font-semibold mb-4">Crear nuevo tema</h2>
          <form>
            <input
              type="text"
              placeholder="Título del tema"
              className="w-full p-2 border border-gray-300 rounded mb-4"
            />
            <textarea
              placeholder="Escribe tu mensaje aquí..."
              className="w-full p-2 border border-gray-300 rounded mb-4"
              rows={4}
            ></textarea>
            <button
              type="button"
              className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Publicar
            </button>
          </form>
        </section>

        {/* Lista de temas */}
        <section>
  <h2 className="text-lg font-semibold mb-4">Temas recientes</h2>
  <div className="space-y-4">
    {[1, 2, 3].map((id) => (
      <div
        key={id}
        className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition"
      >
        {/* Contenedor principal del tema */}
        <div className="flex items-start space-x-4">
          {/* Imagen del tema */}
          <Image
            src={`https://picsum.photos/80?random=${id}`}
            alt={`Tema ${id}`}
            className="w-20 h-20 rounded object-cover"
          />
          {/* Información del tema */}
          <div className="flex-1">
            <h3 className="text-blue-600 font-semibold text-lg">
              Tema #{id}
            </h3>
            <p className="text-gray-700">
              Esto es una descripción breve del tema. Haz clic para obtener más
              información.
            </p>
             {/* Imagen grande del tema */}
            {/* Información del usuario */}
            <div className="flex items-center space-x-3 mt-2">
              <Image
                src={`https://i.pravatar.cc/40?img=${id}`}
                alt={`Usuario ${id}`}
                className="w-8 h-8 rounded-full"
              />
              <span className="text-gray-500 text-sm">
                Publicado por <span className="font-medium">Usuario{id}</span> - hace 2 horas
              </span>
            </div>
          </div>
        </div>
        {/* Botones de interacción */}
        <div className="mt-4 flex items-center space-x-4">
          <button
            className="flex items-center text-gray-700 hover:text-blue-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5 mr-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 9l-2 2m0 0l-2-2m2 2V3m0 6l-2-2m4 0H7m-2 4h10m-7 2v3m7-3v3m0-3h3m-10 0h2m4 0h2m0-2h1m-6-6h1m0 2h-1m0-2h2m0 2h-2"
              />
            </svg>
            Me gusta
          </button>
          <button
            className="flex items-center text-gray-700 hover:text-blue-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5 mr-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2m-8 0H5a2 2 0 01-2-2v-6a2 2 0 012-2h2m6 0a6 6 0 01-6 6m6-6V4m0 6h2"
              />
            </svg>
            Responder
          </button>
        </div>
      </div>
    ))}
  </div>
</section>


      </main>
    </div>
  );
};

export default Forum;
