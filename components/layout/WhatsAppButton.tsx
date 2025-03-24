import { getWhatsAppUrl } from "@/utils/functions/getWhatsAppUrl";
import Image from "next/image";

export default function WhatsAppButton() {
  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 shadow-lg focus:outline-none flex items-center justify-center rounded-full"
      aria-label="Chat on WhatsApp"
    >
      <Image src="/whatsapp.png" alt="whatsapp" height={60} width={60} className="rounded-full" />
    </a>
  );
};
