"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    name: "Juan Pérez",
    role: "Emprendedor",
    text: "La plataforma me facilitó las transacciones internacionales de manera rápida y segura. 100% recomendada!",
    avatar: "/juanperez.jpg",
  },
  {
    name: "María López",
    role: "Freelancer",
    text: "Me encanta lo intuitivo que es el sistema. Puedo gestionar mis ingresos sin complicaciones.",
    avatar: "/marialopez.jpg",
  },
  {
    name: "Carlos Gómez",
    role: "CEO de Startup",
    text: "La seguridad es clave para mi negocio, y esta plataforma me ofrece justo lo que necesito.",
    avatar: "/carlosgomez.jpg",
  },
  {
    name: "Ana Castillo",
    role: "Diseñadora UX",
    text: "No he encontrado otra solución que me brinde tanta confianza en mis operaciones digitales.",
    avatar: "/anacastillo.jpg",
  },
  {
    name: "Pedro Alarcón",
    role: "Desarrollador",
    text: "Las tarifas son justas y el soporte al cliente es excelente. Muy recomendable!",
    avatar: "/pedroalarcon.jpg",
  },
  {
    name: "Sofía Méndez",
    role: "Trader",
    text: "Es la mejor herramienta para mover dinero sin estrés y con total seguridad.",
    avatar: "/sofiamendez.jpg",
  },
];

const partners = [
  "/mp.svg",
  "/aliexpress.svg",
  "/paypal.svg",
  "/stripe.svg",
  "/binance.svg",
  "/shopify.svg",
  "/ebay.svg",
  "/amazon.svg",
];

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-900 text-center">
      {/* Testimonios */}
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
        Testimonios
      </h2>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        Conoce las experiencias de nuestros usuarios satisfechos.
      </p>

      <div className="mt-12 relative flex justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTestimonial}
            className="bg-white hover:scale-105 transition-all duration-300 dark:bg-gray-800 p-8 rounded-xl shadow-xl max-w-lg flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={testimonials[currentTestimonial].avatar}
              alt={testimonials[currentTestimonial].name}
              width={100}
              height={100}
              className="rounded-full border-4 border-gray-300 dark:border-gray-600 shadow-md mb-4"
            />
            <p className="text-lg text-gray-700 dark:text-gray-300">
              “{testimonials[currentTestimonial].text}”
            </p>
            <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
              {testimonials[currentTestimonial].name}
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              {testimonials[currentTestimonial].role}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Nos Apoyan */}
      <div className="mt-20">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
          Nos Apoyan
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Empresas de renombre confían en nuestra plataforma.
        </p>

        <div className="mt-8 flex flex-wrap justify-center items-center gap-10">
          {partners.map((logo, index) => (
            <Image
              key={index}
              src={logo}
              alt="Partner Logo"
              width={140}
              height={50}
              className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
