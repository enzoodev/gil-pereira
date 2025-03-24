"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { name } from "../../constants/name";
import { sections } from "../../constants/sections";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const closeMenu = useCallback(() => {
        setIsMenuOpen(false);
    }, []);
  
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
        <header className="flex justify-between items-center py-2 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-24 relative">
            <div className="flex items-center space-x-2">
                <Image src="/logo.png" alt="Logo" height={35} width={50} />
               <h1 className="app-name">{name}</h1>
            </div>
            
            <nav className="flex justify-between items-center">
                <button
                    className="sm:hidden focus:outline-none"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  {isMenuOpen ? (
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
                    ) : (
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
                    )}
                </button>
                
                {isMenuOpen && (
                    <div className="absolute top-full right-0 w-44 bg-[var(--header-bg)] shadow-lg z-50 flex flex-col py-2 px-4 rounded-md">
                       <ul className="w-full text-right space-y-1">
                           {sections.map((section) => (
                               <li key={section.id} className="w-full" onClick={closeMenu}>
                                   <a className="block py-2 text-lg" href={`#${section.id}`}>{section.name}</a>
                               </li>
                           ))}
                        </ul>
                    </div>
                )}
                
               <ul className="hidden sm:flex space-x-6">
                   {sections.map((section) => (
                       <li key={section.id}>
                           <a href={`#${section.id}`}>{section.name}</a>
                       </li>
                   ))}
                </ul>
            </nav>
        </header>
  );
};
