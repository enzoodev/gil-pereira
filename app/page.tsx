import Contact from "@/components/modules/Contact";
import Faq from "@/components/modules/Faq";
import Start from "@/components/modules/Start";
import Therapy from "@/components/modules/Therapy";

export default function Home() {
  return (
    <main>
      <Start />
      <Therapy />
      <Contact />
      <Faq />
    </main>
  );
}
