"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  return (
    <section 
    className="relative flex flex-col items-center justify-center h-screen text-center px-4 mb-32">
      <header className="absolute top-6 left-6 text-2xl font-bold text-gray-900 dark:text-white">
        UhhTech
      </header>
      <motion.h1
        className="text-5xl font-bold tracking-tight sm:text-6xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Revoluciona tus Finanzas con Nuestra Plataforma
      </motion.h1>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
        Gestiona tus tarjetas y movimientos con la máxima seguridad y rapidez.
      </p>
      <motion.div
        className="mt-8 flex space-x-4"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700">
          Comenzar Ahora
        </button>
        <button className="px-6 py-3 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg shadow-md hover:bg-gray-300 dark:hover:bg-gray-700">
          Más Información
        </button>
      </motion.div>
      <motion.div
        className="absolute bottom-10 w-full flex justify-center gap-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <div className="relative w-80 h-48 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg transform rotate-6">
          <Image
            src="/metric3.png"
            alt="metricImage"
            fill
            className="object-scale-down"
          />
        </div>
        <div className="relative w-80 h-48 bg-gradient-to-r from-pink-500 to-orange-500 rounded-lg shadow-lg transform -rotate-6 -ml-12">
          <div className="absolute inset-0 bg-white bg-opacity-10 backdrop-blur-md rounded-lg">
            <Image
              src="/Card1.png"
              alt="Hero Image"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
