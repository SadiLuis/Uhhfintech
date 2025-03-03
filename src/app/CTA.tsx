"use client"

import { motion } from "framer-motion";
import Link from "next/link";

const Cta = () => {
  return (
    <section className="py-20 bg-gray-900 text-white text-center px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Lleva tus transacciones al siguiente nivel 🚀
        </motion.h2>
        <p className="mt-4 text-lg text-gray-300">
          Seguridad, rapidez y confianza en un solo lugar. Únete a miles de usuarios que ya disfrutan de nuestras soluciones digitales.
        </p>
        <motion.div
          className="mt-8 flex flex-col md:flex-row justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Link
            href="/registro"
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 transition-all duration-300 text-white font-semibold rounded-lg shadow-lg"
          >
            Comenzar ahora
          </Link>
          <Link
            href="#"
            className="px-6 py-3 border border-gray-500 hover:border-white text-gray-300 hover:text-white transition-all duration-300 rounded-lg"
          >
            Más información
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Cta;
