import Start from "../components/modules/Start";

export default function Home() {
  return (
    <main className="relative">
      <Start />

      <section id="about" className="h-screen flex items-center justify-center bg-gray-100">
        <h2 className="text-4xl font-bold">About Us</h2>
      </section>

      <section id="services" className="h-screen flex items-center justify-center bg-gray-100">
        <h2 className="text-4xl font-bold">Our Services</h2>
      </section>

      <section id="contact" className="h-screen flex items-center justify-center bg-gray-100">
        <h2 className="text-4xl font-bold">Contact Us</h2>
      </section>
    </main>
  );
}
