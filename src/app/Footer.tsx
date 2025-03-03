"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-row gap-8 justify-between">
        {/* Logo y descripción */}
        <div>
          <h2 className="text-2xl font-bold">FinTech Pro</h2>
          <p className="mt-3 text-gray-400">
            La mejor solución para pagos digitales y transferencias seguras.
          </p>
        </div>
        
       
        
        {/* Redes Sociales */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">Síguenos</h3>
          <div className="flex space-x-4">
            <Link href="#" className="text-gray-400 hover:text-white transition"><Facebook size={24} /></Link>
            <Link href="#" className="text-gray-400 hover:text-white transition"><Twitter size={24} /></Link>
            <Link href="#" className="text-gray-400 hover:text-white transition"><Instagram size={24} /></Link>
            <Link 
            href="https://www.linkedin.com/in/sadi-luis-alberto-rueda-fullstack/" className="text-gray-400 hover:text-white transition">
                <Linkedin size={24} />
            </Link>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="mt-10 text-center text-gray-500 text-sm border-t border-gray-800 pt-6">
        &copy; {new Date().getFullYear()} Sadi_Dev. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
