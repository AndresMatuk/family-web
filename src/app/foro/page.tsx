'use client';
import React, { useState, useEffect } from 'react';
import { db } from '../utils/firebase';
import { collection, addDoc, getDocs, query, orderBy, Timestamp, updateDoc, doc } from 'firebase/firestore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faHeartBroken } from '@fortawesome/free-solid-svg-icons';

const Forum = () => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(true); // Nuevo estado
  const [topics, setTopics] = useState<
    { id: string; title?: string; message?: string; avatar?: string; createdAt?: Timestamp; name?: string; hearts?: number }[]
  >([]);
  const [icons, setIcons] = useState<string[]>([]);
  const [selectedIcon, setSelectedIcon] = useState<string>('');
  const [modalMessage, setModalMessage] = useState('');
  const [showModal, setShowModal] = useState(false); //
  

  const fetchIcons = () => {
    const localIcons = [
      '/avatars/avatar1.png',
      '/avatars/avatar2.png',
      '/avatars/avatar3.png',
      '/avatars/avatar4.png',
      '/avatars/avatar5.png',
    ];
    setIcons(localIcons);
  };

  const handleAddTopic = async () => {
    if (title && message && selectedIcon) {
      try {
        const newTopic = {
          title,
          message,
          avatar: selectedIcon,
          createdAt: new Date(),
          hearts: 0,
          ...(isAnonymous ? {} : { name }), // Agregar `name` solo si no es anónimo
        };

        const docRef = await addDoc(collection(db, 'topics'), newTopic);
        console.log('Documento agregado con ID:', docRef.id);
        setModalMessage('¡Tema agregado con éxito!');
        setShowModal(true);

        setTitle('');
        setMessage('');
        setName(''); // Limpiar el nombre
        setSelectedIcon('');
        setIsAnonymous(true); // Reiniciar a anónimo
        fetchTopics();
      } catch (error) {
        if (error instanceof Error) {
          console.error('Error agregando tema: ', error.message);
          setModalMessage(`Error al guardar en Firestore: ${error.message}`);
        } else {
          console.error('Error desconocido:', error);
          setModalMessage('Ocurrió un error desconocido.');
        }
        setShowModal(true);
      }
    } else {
      setModalMessage('Por favor completa todos los campos');
      setShowModal(true);
    }
  };

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
  const handleHeartClick = async (topicId: string, currentHearts: number, isAdding: boolean) => {
    try {
      const topicRef = doc(db, 'topics', topicId);
      const newHeartCount = isAdding ? currentHearts + 1 : Math.max(currentHearts - 1, 0);
      await updateDoc(topicRef, { hearts: newHeartCount });

      setTopics((prevTopics) =>
        prevTopics.map((topic) =>
          topic.id === topicId ? { ...topic, hearts: newHeartCount } : topic
        )
      );
    } catch (error) {
      console.error('Error actualizando corazones:', error);
    }
  };

  useEffect(() => {
    fetchTopics();
    fetchIcons();
  }, []);

  return (
    <div
      className="min-h-screen bg-gray-100"
      style={{ backgroundImage: 'url(/fondos/fondo4.png)' }}
    >
      <main className="container mx-auto p-6 pt-20">
        <section className="mb-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg text-[#2d0a3b] font-roboto font-semibold mb-4">Crear nuevo tema</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleAddTopic();
            }}
          >
            <div className="mb-4">
              <p className="mb-2 text-gray-700">Selecciona un avatar:</p>
              <div className="flex space-x-4">
                {icons.map((icon) => (
                  <img
                    key={icon}
                    src={icon}
                    alt="Avatar"
                    className={`w-12 h-12 rounded-full cursor-pointer border-2 ${
                      selectedIcon === icon ? 'border-blue-500' : 'border-transparent'
                    }`}
                    onClick={() => setSelectedIcon(icon)}
                  />
                ))}
              </div>
            </div>
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

<div className="mb-4 flex items-center space-x-3">
  <input
    type="checkbox"
    id="anonymous-checkbox"
    checked={isAnonymous}
    onChange={() => setIsAnonymous(!isAnonymous)}
    className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-400"
  />
  <label
    htmlFor="anonymous-checkbox"
    className="text-gray-700 font-medium cursor-pointer select-none"
  >
    Publicar como anónimo
  </label>
</div>


            {!isAnonymous && (
              <input
                type="text"
                placeholder="Tu nombre (opcional)"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded mb-4"
              />
            )}

            <button
              type="submit"
              className="bg-[#2d0a3b] text-white px-3 py-2 text-lg rounded-md hover:bg-[#752fbb] transition-all"
            >
              Publicar
            </button>
          </form>
        </section>

        <section>
          <h2 className="text-2xl text-left mb-9 font-roboto text-[#2d0a3b] font-bold pt-8">Temas recientes</h2>
          <div className="space-y-4">
            {topics.length > 0 ? (
              topics.map((topic) => (
                <div
                  key={topic.id}
                  className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition"
                >
                  <div className="flex px-6  items-center space-x-4">
                    <img
                      src={topic.avatar}
                      alt="Avatar"
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <h3 className="font-roboto text-[#2d0a3b] font-semibold text-lg">
                        {topic.title}
                      </h3>
                      <p className="font-roboto  px-6 text-gray-700">{topic.message}</p>
                      <p className="text-sm text-gray-500 mt-2">
                        Publicado por: {topic.name || 'Anónimo'}
                      </p>
                      <p className="text-sm text-gray-500 mt-2">
                        {topic.createdAt
                          ? new Date(topic.createdAt.seconds * 1000).toLocaleString()
                          : 'Fecha no disponible'}
                      </p>
                      <div className="flex items-center mt-3">
                      <button
                        onClick={() => handleHeartClick(topic.id, topic.hearts || 0, true)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <FontAwesomeIcon icon={faHeart} size="lg" />
                      </button>
                      <span className="ml-2 text-gray-600">{topic.hearts || 0}</span>
                      <button
                        onClick={() => handleHeartClick(topic.id, topic.hearts || 0, false)}
                        className="text-gray-400 hover:text-gray-600 ml-4"
                      >
                        <FontAwesomeIcon icon={faHeartBroken} size="lg" />
                      </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No hay temas disponibles.</p>
            )}
          </div>
        </section>
      </main>
      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-xl font-roboto font-semibold text-[#2d0a3b] mb-4">Notificación</h3>
            <p className="font-roboto text-gray-600">{modalMessage}</p>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 bg-[#2d0a3b] text-white px-4 py-2 rounded hover:bg-[#752fbb] transition"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Forum;
