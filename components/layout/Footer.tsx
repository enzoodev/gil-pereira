import { name } from "@/utils/constants/name";
import { phone } from "@/utils/constants/phone";
import { slogan } from "@/utils/constants/slogan";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="p-8">
        <div className="flex flex-col lg:flex-row justify-center space-y-4 lg:space-x-16 items-center">
            <div className="text-center lg:text-left">
                <h1 className="app-name text-center lg:text-left">{name}</h1>
                <p className="text-sm">{slogan}</p>
            </div>
              <div className="flex flex-row space-x-4">
                  <a href="https://www.instagram.com/terapeutaemocionalgil/" target="_blank" rel="noopener noreferrer">
                    <Image src="/instagram.png" alt="instagram" height={30} width={30} className="cursor-pointer" />
                  </a>
                  <Image src="/email.png" alt="email" height={30} width={30} className="cursor-pointer" />
            </div>
            <div className="flex flex-col">
                <h5 className="hidden lg:block">Contato</h5>   
                <div className="flex flex-row items-center space-x-1">
                    <span className="text-sm">WhatsApp:</span>
                    <span className="text-sm">{phone}</span>
                </div>
            </div>
        </div>

        <div className="border-t border-[var(--border-color)] mt-4 pt-4 text-center text-xs text-gray-500">
              <p>&copy; {new Date().getFullYear()} {name}. Todos os direitos reservados</p>
        </div>
    </footer>
  );
}
