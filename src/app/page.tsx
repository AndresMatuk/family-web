"use client"; 
import { motion } from 'framer-motion';
import Carousel from './components/Home/carousel';
import Footer from './components/footer';
import Cifras from './components/Home/cifras';
import PorqueEscoger from './components/Home/porqueEscoger';
import Compromiso from './components/Home/compromiso';
import VideoLlamada from './components/Home/videoLlamada';
import Bienvenidas from './components/Home/bienvenida';
export default function Home() {
  return (
    <>
        <Carousel />
        <Cifras />
        <section className="" style={{ backgroundImage: 'url(/fondos/fondo4.png)' }}>
        <motion.section className="container mx-auto py-16 px-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        >
        <Bienvenidas />
      <PorqueEscoger />
      <Compromiso />
      <VideoLlamada />
      </motion.section>
      </section>  
      <Footer />
    </>
  );
}
