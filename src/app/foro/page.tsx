'use client';
import React, { useState, useEffect } from 'react';
import { db } from '../../utils/firebase';
import { collection, addDoc, getDocs, query, orderBy,Timestamp } from 'firebase/firestore';

const Forum = () => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [topics, setTopics] = useState<{ id: string; title?: string; message?: string; createdAt?: Timestamp }[]>([]);
  // Estado para almacenar los temas

  // Función para agregar un nuevo tema
  const handleAddTopic = async () => {
    if (title && message) {
      try {
        console.log('Intentando agregar el tema...');
        const docRef = await addDoc(collection(db, 'topics'), {
          title,
          message,
          createdAt: new Date(),
        });
        console.log('Documento agregado con ID:', docRef.id);
        alert('Tema agregado con éxito!');
        setTitle('');
        setMessage('');
        fetchTopics(); // Volver a cargar los temas después de agregar uno nuevo
      } catch (error) {
        if (error instanceof Error) {
          console.error('Error agregando tema: ', error.message);
          alert(`Error al guardar en Firestore: ${error.message}`);
        } else {
          console.error('Error desconocido:', error);
          alert('Ocurrió un error desconocido.');
        }
      }
    } else {
      alert('Por favor completa todos los campos');
    }
  };

  // Función para obtener los temas desde Firestore
  const fetchTopics = async () => {
    try {
      const q = query(collection(db, 'topics'), orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      const topicsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTopics(topicsData);
    } catch (error) {
      console.error('Error al obtener los temas:', error);
    }
  };

  // Hook para cargar los temas al montar el componente
  useEffect(() => {
    fetchTopics();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto p-6 pt-20">
        {/* Sección para agregar un nuevo tema */}
        <section className="mb-8 bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-700 mb-6 text-4xl font-blond text-left">Foro</p>
          <h2 className="text-lg font-semibold mb-4">Crear nuevo tema</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleAddTopic();
            }}
          >
            <input
              type="text"
              placeholder="Título del tema"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mb-4"
            />
            <textarea
              placeholder="Escribe tu mensaje aquí..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mb-4"
              rows={4}
            ></textarea>
            <button
              type="submit"
              className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Publicar
            </button>
          </form>
        </section>

        {/* Sección para mostrar los temas */}
        <section>
          <h2 className="text-lg font-semibold mb-4">Temas recientes</h2>
          <div className="space-y-4">
            {topics.length > 0 ? (
              topics.map((topic) => (
                <div
                  key={topic.id}
                  className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition"
                >
                  <h3 className="text-blue-600 font-semibold text-lg">
                    {topic.title}
                  </h3>
                  <p className="text-gray-700">{topic.message}</p>
                  <p className="text-sm text-gray-500 mt-2">
                    {topic.createdAt ? new Date(topic.createdAt.seconds * 1000).toLocaleString() : 'Fecha no disponible'}
                  </p>
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
              ))
            ) : (
              <p className="text-gray-500">No hay temas disponibles.</p>
            )}
          </div>
        </section>  
      </main>
    </div>
  );
};

export default Forum;
