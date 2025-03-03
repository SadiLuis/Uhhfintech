"use client";
import { motion } from "framer-motion";
import {
  FaUserCheck,
  FaCamera,
  FaFileSignature,
  FaCheckCircle,
  FaExchangeAlt,
  FaWallet,
} from "react-icons/fa";
// import Image from "next/image";

const steps = [
  {
    icon: <FaUserCheck size={40} className="text-blue-600" />,
    title: "Crea tu Cuenta",
    description:
      "Regístrate en minutos con tu correo electrónico y número de teléfono.",
  },
  {
    icon: <FaCamera size={40} className="text-yellow-500" />,
    title: "Verifica tu Identidad",
    description:
      "Toma una selfie y sube una foto de tu documento de identidad.",
  },
  {
    icon: <FaFileSignature size={40} className="text-green-500" />,
    title: "Firma Digitalmente",
    description: "Añade tu firma digital de forma rápida y segura.",
  },
  {
    icon: <FaCheckCircle size={40} className="text-purple-500" />,
    title: "¡Listo para Usar!",
    description:
      "Ahora puedes comenzar a operar con total seguridad y confianza.",
  },
];

const operations = [
  {
    icon: <FaExchangeAlt size={40} className="text-blue-500" />,
    title: "Transacciones Instantáneas",
    description: "Envía y recibe dinero al instante con total seguridad.",
  },
  {
    icon: <FaWallet size={40} className="text-yellow-500" />,
    title: "Gestión de Fondos",
    description: "Administra tus ingresos y gastos con total facilidad.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900 text-center">
      {/* Sección 1: Cómo Empezar */}
      <div className="mb-16">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
          Cómo Empezar
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Sigue estos simples pasos para comenzar a usar nuestra plataforma sin
          complicaciones.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-12 px-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative flex flex-col items-center text-center bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-xs"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="size-16 flex items-center justify-center rounded-full bg-white dark:bg-gray-700 shadow-md">
                {step.icon}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm">
                {step.description}
              </p>

              {index < steps.length - 1 && (
                <motion.span
                  className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 w-1 h-12 bg-blue-500 dark:bg-blue-400"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.3 }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Sección 2: Cómo Operar */}
      <div>
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
          Cómo Operar
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Descubre todas las funcionalidades que tienes a tu disposición para
          gestionar tus finanzas de manera eficiente.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12 px-6">
          {operations.map((operation, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {operation.icon}
              <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
                {operation.title}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm">
                {operation.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
