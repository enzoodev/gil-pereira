import { sections } from "@/constants/sections";
import { therapy } from "@/constants/therapy";

export default function Therapy() {
    return (
        <section id={sections[1].id} className="flex flex-col justify-center lg:flex-row p-4 space-x-32 space-y-4">
            <h2>Terapia</h2>
            <div className="flex flex-col space-y-3">
                <p>{therapy}</p>
            </div>
        </section>
    );
}
