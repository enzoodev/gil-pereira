import { sections } from "@/utils/constants/sections";
import { therapy } from "@/utils/constants/therapy";
import Image from "next/image";

const therapyTopics = [
    { src: "/trauma.jpg", alt: "therapy image - 1", title: "Traumas" },
    { src: "/depressao.jpeg", alt: "therapy image - 2", title: "Depressão" },
    { src: "/ansiedade.jpg", alt: "therapy image - 3", title: "Ansiedade" },
    { src: "/crenca-limitante.jpg", alt: "therapy image - 4", title: "Crenças limitantes" },
    { src: "/transtorno-alimentar.jpg", alt: "therapy image - 5", title: "Transtornos alimentares" },
    { src: "/transtorno-auto-imagem.jpg", alt: "therapy image - 6", title: "Transtornos de autoimagem" },
];

export default function Therapy() {
    return (
        <section id={sections[1].id} className="flex flex-col items-center p-4 space-y-8">
            <div className="flex flex-col items-center w-full max-w-2xl space-y-3">
                <h2 className="text-center">Terapia</h2>
                <p>{therapy}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 w-full max-w-[1000px] xl:max-w-[1200px]">
                {therapyTopics.map(({ src, alt, title }) => (
                    <div key={title} className="flex flex-col items-center space-y-3 min-h-[280px]">
                        <div className="w-[300px] h-[200px] sm:w-[280px] sm:h-[200px] md:w-[280px] md:h-[200px] lg:w-[320px] lg:h-[210px] xl:w-[320px] xl:h-[200px]">
                            <Image
                                src={src}
                                alt={alt}
                                width={320}
                                height={200}
                                className="w-full h-full object-cover rounded-md"
                            />
                        </div>
                        <h5>{title}</h5>
                    </div>
                ))}
            </div>
        </section>
    );
}
