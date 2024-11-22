"use client";

import { useState, useEffect } from "react";
import Codigo1 from "./codigo1"; // Asegúrate de que `CODIGO 1` esté en este archivo.
import Codigo2 from "./codigo2"; // Asegúrate de que `CODIGO 2` esté en este archivo.

export default function ReunionesWrapper() {
  const [esPantallaPequena, setEsPantallaPequena] = useState<boolean>(false);

  // Detectar el tamaño de la ventana y actualizar el estado
  useEffect(() => {
    const verificarTamañoPantalla = () => {
      setEsPantallaPequena(window.innerWidth < 1200);
    };

    verificarTamañoPantalla(); // Ejecutar al cargar la página
    window.addEventListener("resize", verificarTamañoPantalla); // Escuchar cambios en el tamaño de la ventana

    return () => window.removeEventListener("resize", verificarTamañoPantalla); // Limpiar el evento al desmontar
  }, []);

  // Renderizar el código correspondiente
  return esPantallaPequena ? <Codigo1 /> : <Codigo2 />;
}
