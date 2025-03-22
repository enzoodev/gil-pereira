import Image from "next/image";

export default function Footer() {
  return (
    <footer className="p-8">
        <div className="flex flex-col lg:flex-row justify-center space-y-4 lg:space-x-16 items-center">
            <div className="text-center lg:text-left">
                <h1 className="app-name text-center lg:text-left">Gil Pereira</h1>
                <p className="text-sm">Transforme suas emoções, redescubra sua força.</p>
            </div>
            <div className="flex flex-row space-x-4">
                  <Image src="/instagram.png" alt="instagram" height={30} width={30} className="cursor-pointer" />
                  <Image src="/email.png" alt="email" height={30} width={30} className="cursor-pointer" />
            </div>
            <div className="flex flex-col">
                <h5 className="hidden lg:block">Contato</h5>   
                <div className="flex flex-row items-center space-x-1">
                    <span className="text-sm">WhatsApp:</span>
                    <span className="text-sm">(11) 99999-9999</span>
                </div>
            </div>
        </div>

        <div className="border-t border-[var(--border-color)] mt-4 pt-4 text-center text-xs text-gray-500">
            <p>&copy; {new Date().getFullYear()} Gil Pereira. Todos os direitos reservados</p>
        </div>
    </footer>
  );
}
