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
                setIsMenuOpen(false);
            });
        });

        return () => {
            links.forEach((link) =>
                link.removeEventListener("click", () => {})
            );
        };
    }, []);

   return  (
    <header className="px-4 py-2 fixed top-0 left-0 w-full shadow-md z-50">
      <nav className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
              <Image src="/logo.png" alt="Logo" height={35} width={50} />
              <h1 className="app-name">Gil Pereira</h1>
          </div>

          <button
              className="sm:hidden focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
              <svg
                  className="w-8 h-8"
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

        {isMenuOpen && (
          <div
            className={`fixed inset-0 bg-black transition-opacity sm:hidden ${
                isMenuOpen ? "opacity-50 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
            onClick={() => setIsMenuOpen(false)}
          />
        )}

        <aside
              className={`fixed top-0 right-0 flex flex-col items-end h-full w-64 transform transition-transform ease-in-out ${
                  isMenuOpen ? "translate-x-0" : "translate-x-full"
              } sm:hidden`}
        >
            <button
              onClick={() => setIsMenuOpen(false)}
              className="mr-4 mt-4"
            >
                <svg
                    className="w-8 h-8"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            </button>

            <ul className="flex flex-col items-end pr-6 space-y-6 mt-16">
                <li><a className="text-lg" href="#home">Início</a></li>
                <li><a className="text-lg" href="#about">Sobre mim</a></li>
                <li><a className="text-lg" href="#services">Serviços</a></li>
                <li><a className="text-lg" href="#contact">Contato</a></li>
            </ul>
        </aside>

          <ul className="hidden sm:flex space-x-6">
              <li><a href="#home">Início</a></li>
              <li><a href="#about">Sobre mim</a></li>
              <li><a href="#services">Serviços</a></li>
              <li><a href="#contact">Contato</a></li>
          </ul>
      </nav>
    </header>
  );
};
