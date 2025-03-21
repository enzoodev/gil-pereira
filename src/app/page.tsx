export default function Home() {
  return (
    <main className="relative">
      <section id="home" className="h-screen flex flex-col items-center justify-center bg-gray-100">
        <h2 className="text-4xl font-bold mb-4">Welcome to Home</h2>
        {/* <p className="w-4xl">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> */}
      </section>

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
