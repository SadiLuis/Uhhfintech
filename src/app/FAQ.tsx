"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "¿Cómo funciona la plataforma?",
    answer:
      "Nuestra plataforma permite gestionar pagos de manera segura y rápida, conectando múltiples métodos de pago y facilitando transacciones globales.",
  },
  {
    question: "¿Es seguro utilizar sus servicios?",
    answer:
      "Sí, utilizamos protocolos de seguridad avanzados y cifrado de datos para garantizar la protección de tu información y transacciones.",
  },
  {
    question: "¿Cuáles son los costos de transacción?",
    answer:
      "Las tarifas varían según el método de pago y la región. Pero en general los costos son extremadamente bajos y asequibles.",
  },
  {
    question: "¿Puedo usar la plataforma desde cualquier país?",
    answer:
      "Sí, ofrecemos soporte para múltiples países y monedas. Revisa nuestra lista de disponibilidad para más detalles.",
  },
  {
    question: "¿Tienen soporte al cliente?",
    answer:
      "Sí, nuestro equipo de soporte está disponible 24/7 para ayudarte con cualquier duda o problema que puedas tener.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-900 text-white text-center">
      <h2 className="text-4xl font-bold">Preguntas Frecuentes</h2>
      <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
        Resolvemos tus dudas más comunes sobre nuestra plataforma y servicios.
      </p>

      <div className="mt-10 max-w-3xl mx-auto text-left space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-gray-900 p-5 rounded-lg cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              <ChevronDown
                className={`w-5 h-5 transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : "rotate-0"
                }`}
              />
            </div>
            {openIndex === index && (
              <motion.p
                className="mt-3 text-gray-400"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                {faq.answer}
              </motion.p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
