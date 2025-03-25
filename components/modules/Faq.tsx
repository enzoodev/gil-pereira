import { sections } from "@/utils/constants/sections";

const faqs = [
    {
        question: "Como saber se preciso de terapia?",
        answer:
        "Se você sente que suas emoções estão difíceis de lidar, tem dificuldades recorrentes em suas relações ou sente que precisa de um espaço seguro para se expressar, a terapia pode ser uma boa opção.",
    },
    {
        question: "Como funcionam os atendimentos?",
        answer:
        "Os atendimentos podem ser feitos online ou presencialmente. Tem a duração de 1 hora e para isso é necessário um ambiente que te de privacidade e silêncio, seu celular ou um notebook.",
    },
    {
        question: "A terapia online é eficaz?",
        answer:
        "Sim! A terapia online oferece a mesma eficácia da presencial, proporcionando conforto e acessibilidade, permitindo que você cuide da sua saúde mental de onde estiver.",
    },
    {
        question: "Como é realizado o atendimento presencial?",
        answer: "O atendimento presencial ocorre nas cidades de Aracaju e Nossa Senhora do Socorro. É uma ótima opção para quem prefere o contato pessoal durante as sessões.",
    },
    {
        question: "Com que frequência devo fazer terapia?",
        answer:
        "Isso depende de cada caso. Geralmente, sessões semanais são recomendadas, mas a frequência pode ser ajustada conforme sua necessidade e disponibilidade.",
    },
];

export default function Faq() {
    return (
        <section id={sections[3].id} className="py-16 px-4 sm:px-8 md:px-12 lg:px-20">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="mb-4">
                    Dúvidas Frequentes
                </h2>
                <p className="mb-8">
                    Aqui estão algumas respostas para as perguntas mais comuns sobre nosso atendimento.
                </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
                {faqs.map((faq) => (
                <details
                    key={faq.question}
                    className="rounded-md p-4 open:shadow-lg bg-[var(--faq-bg)]"
                >
                    <summary className="cursor-pointer ">
                        {faq.question}
                    </summary>
                    <p className="mt-2">
                        {faq.answer}
                    </p>
                </details>
                ))}
            </div>
        </section>
    )
}
