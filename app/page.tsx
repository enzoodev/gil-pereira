import Start from "@/components/modules/Start";
import Therapy from "@/components/modules/Therapy";

export default function Home() {
  return (
    <main>
      <Start />
      <Therapy />

      <section id="services" className="h-screen flex items-center justify-center bg-gray-300">
        <h2 className="text-4xl font-bold">Contato</h2>
      </section>

      <section id="contact" className="h-screen flex items-center justify-center bg-gray-100">
        <h2 className="text-4xl font-bold">Dúvidas</h2>
      </section>
    </main>
  );
}
