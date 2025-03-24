import { aboutParagraphs } from "@/utils/constants/aboutParagraphs";
import { name } from "@/utils/constants/name";
import { sections } from "@/utils/constants/sections";
import { getWhatsAppUrl } from "@/utils/functions/getWhatsAppUrl";
import Image from "next/image";

export default function Start() {
    return (
      <section id={sections[0].id} className="flex flex-col justify-center lg:flex-row p-4 lg:space-x-24 xl:space-x-32 space-y-4 bg-[var(--start-section-bg)]">
        <Image
            src="/start-photo.jpeg"
            alt="Presentation image"
            width={0}
            height={0} 
            className="w-full max-w-lg rounded-md"
            unoptimized
            priority
            quality={100}
        />
        <div className="flex flex-col space-y-3 justify-center w-full max-w-sm lg:max-w-md xl:max-w-lg">
          <div className="flex flex-col space-y-3">
            <h1 className="app-name !text-5xl md:!text-6xl">{name}</h1>
            <h2>Terapeuta Emocional</h2>
          </div>
          <div className="flex flex-col space-y-3">
            <p>{aboutParagraphs.first}</p>
            <p>{aboutParagraphs.second}</p>
            <p>{aboutParagraphs.third}</p>
          </div>
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center self-start gap-2 mt-4 !bg-[var(--font-app-color)] !text-white px-6 py-2 rounded-md hover:!bg-opacity-50"
            aria-label="Fale comigo no WhatsApp"
          >
            Fale comigo aqui
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </section>
    );
}
