import { phone } from "@/utils/constants/phone";
import { sections } from "@/utils/constants/sections";
import { getWhatsAppUrl } from "@/utils/functions/getWhatsAppUrl";
import Image from "next/image";

export default function Contact() {
    return (
        <section id={sections[2].id} className="flex flex-col justify-center items-center lg:flex-row p-4 lg:space-x-24 xl:space-x-32 space-y-4 bg-[var(--contact-section-bg)]">
            <Image
                src="/start-photo.jpeg"
                alt="Contact image"
                width={0}
                height={0} 
                className="w-full max-w-lg rounded-md"
                unoptimized
                priority
                quality={100}
            />
            <div className="flex flex-col space-y-4 w-full max-w-xl text-center">
                <h2 className="!text-white">
                    Contato
                </h2>
                <p className="!text-white">
                    Seu bem-estar é a nossa prioridade. Escolha o melhor tipo de atendimento para você e dê o primeiro passo para uma mente mais leve e equilibrada.
                </p>
                
                <div className="flex flex-col mt-10 gap-16 justify-center items-center">
                    <div className="flex flex-col w-full items-center space-y-4">
                        <Image
                            src="/whatsapp-icon.png"
                            alt="whatsapp icon"
                            width={36}
                            height={36} 
                        />
                        <div className="flex flex-row items-center space-x-1">
                            <span className="!text-white">WhatsApp:</span>
                            <span className="!text-white">{phone}</span>
                        </div>
                        <a
                            href={getWhatsAppUrl()}
                            target="_blank"
                            className="border border-white !text-white w-full max-w-sm py-2 rounded-md hover:bg-white hover:!text-[var(--contact-section-bg)] transition"
                            aria-label="Atendimento Online"
                        >
                            Atendimento Online
                        </a>
                    </div>
                    <div className="flex flex-col items-center space-y-4">
                        <Image
                            src="/gps.png"
                            alt="gps icon"
                            width={36}
                            height={36} 
                            />
                        <span className="!text-white">Atendimento presencial na cidade de Aracaju-SE</span>
                        <a
                            href={getWhatsAppUrl(true)}
                            target="_blank"
                            className="border border-white !text-white w-full max-w-sm py-2 rounded-md hover:bg-white hover:!text-[var(--contact-section-bg)] transition"
                            aria-label="Atendimento Presencial"
                            >
                            Atendimento Presencial
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
