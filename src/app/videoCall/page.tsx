"use client";

import { useEffect, useState } from "react";
import useUser from "../hooks/useUser";
import { useRouter } from "next/navigation";
import { v4 as uuid } from 'uuid';
import { motion } from "framer-motion";

export default function VideoCall() {
  const { fullName, setFullName } = useUser();
  const [roomID, setRoomID] = useState("");
  const router = useRouter();

  useEffect(() => {
    setFullName("");
  }, [setFullName]);

  return (
    <div className="flex w-full h-screen bg-gray-900">
      {/* Sección izquierda: Contenido */}
      <div className="w-2/3 p-12 flex flex-col justify-center">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="bg-gradient-to-r from-orange-400 via-purple-600 to-blue-500 bg-clip-text font-extrabold text-transparent text-6xl mb-6">
            FAMILY WEB
          </h1>
          <h2 className="text-white text-3xl mb-4">
            Reuniones en vivo con Profesionales
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto mb-8">
            Ingresa el código que te proporcionamos para unirte a una reunión o crea una nueva reunión y envíanos un link para que nos podamos unir y ayudarte.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <input
            type="text"
            id="name"
            onChange={(e) => setFullName(e.target.value.toString())}
            className="border rounded-md px-4 py-2 w-full text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Ingresa tu nombre"
          />
          {fullName && fullName.length >= 3 && (
            <>
              <div className="flex gap-4">
                <input
                  type="text"
                  id="roomid"
                  value={roomID}
                  onChange={(e) => setRoomID(e.target.value)}
                  className="border rounded-md px-4 py-2 w-full text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Ingresa la room ID para unirte"
                />
                <button
                    className="rounded-md bg-gray-700 px-10 py-[11px] text-sm font-medium text-white focus:outline-none sm:w-auto"
                    onClick={() => router.push(`/room/${roomID}`)}
                    disabled={!roomID}
                  >
                    Unirse
                  </button>
              </div>
              <div className="text-white mt-4 flex items-center justify-center">
                  <button
                    className="text-lg font-medium hover:text-blue-400 hover:underline"
                    onClick={() => router.push(`/room/${uuid()}`)}
                  >
                    O crea una nueva reunión
                  </button>
                </div>
            </>
          )}
        </motion.div>
      </div>

      {/* Sección derecha: Imagen */}
      <div className="w-1/3 bg-cover bg-center" style={{ backgroundImage: 'url(/reunion.jpg)' }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="h-full w-full bg-black bg-opacity-40 flex items-center justify-center"
        >
          <p className="text-white text-2xl font-semibold">Conéctate con confianza</p>
        </motion.div>
      </div>
    </div>
  );
}
