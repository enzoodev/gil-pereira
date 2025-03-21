"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const links = document.querySelectorAll("a[href^='#']");

        links.forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const targetId = link.getAttribute("href")!.substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: "smooth",
            });
            }
        });
        });

        return () => {
            links.forEach((link) =>
            link.removeEventListener("click", () => {})
            );
        };
    }, []);

   return (
        <header className="px-4 py-2 fixed top-0 left-0 w-full shadow-md z-50">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Image src="/logo.png" alt="Logo" height={40} width={60} />
          <h1 className="app-name">Gil Pereira</h1>
        </div>

        {/* Hamburger Menu Icon (visible on mobile only) */}
        <button
          className="sm:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Desktop and Mobile Navigation Links */}
        <ul
          className={`flex sm:flex-row flex-col sm:space-x-6 space-y-4 sm:space-y-0 absolute sm:static top-16 left-0 w-full sm:w-auto bg-white sm:bg-transparent shadow-lg sm:shadow-none transition-all sm:flex ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <li>
            <a href="#home" className="text-gray-700 hover:text-blue-500 transition">
              Início
            </a>
          </li>
          <li>
            <a href="#about" className="text-gray-700 hover:text-blue-500 transition">
              Sobre mim
            </a>
          </li>
          <li>
            <a href="#services" className="text-gray-700 hover:text-blue-500 transition">
              Serviços
            </a>
          </li>
          <li>
            <a href="#contact" className="text-gray-700 hover:text-blue-500 transition">
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
