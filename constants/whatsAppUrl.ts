import { phone } from "./phone";

const message = encodeURIComponent("Olá! Vi seu site e gostaria de saber mais sobre seus atendimentos!");
const countryCode = 55;
const decodedPhone = phone.replace(/\D/g, "");

export const whatsAppUrl = `https://wa.me/${countryCode + decodedPhone}?text=${message}`;