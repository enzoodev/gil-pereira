import Image from "next/image";
import { name } from "../../constants/name";

export default function Start() {
    return (
      <section id="home" className="flex flex-row">
        <Image
            src="/photo-1.jpeg"
            alt="Description of the image"
            width={0} 
            height={0} 
            sizes="33vw"
            className="w-1/3 h-auto"
            unoptimized
            priority
            quality={100}
        />
        <div>
          <h1 className="text-4xl font-bold">{name}</h1>
            <p className="text-lg">Transforme suas emoções, redescubra sua força.</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Saiba mais</button>
        </div>
      </section>
    );
}
