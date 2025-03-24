import { phone } from "../constants/phone";

const countryCode = 55;
const decodedPhone = phone.replace(/\D/g, "");

const defaultMessage = "Olá! Vi seu site e gostaria de saber mais sobre seus atendimentos!";
const faceToFaceMessage = "Olá! Vi seu site e gostaria de saber mais sobre seu atendimento presencial em Aracaju!";

export const getWhatsAppUrl = (faceToFace = false) => {
    const encondedMessage = encodeURIComponent(faceToFace ? faceToFaceMessage : defaultMessage);
    return `https://wa.me/${countryCode + decodedPhone}?text=${encondedMessage}`;
}
