import type { FC } from "react";
import { ArrowUpRight, Mail, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { ContactProps } from "./contact.types";
import { contactVariants } from "./contact.variants";

export const Contact: FC<ContactProps> = ({
  eyebrow = "Contacto Directo",
  headline = "¿Construimos la voz de tu marca?",
  description = "Trabajamos con un cupo seleccionado de proyectos por trimestre para garantizar dedicación artesanal, pensamiento estratégico y diseño milimétrico.",
  whatsappNumber = "5491100000000",
  whatsappMessage = "Hola! Me gustaría conversar sobre la comunicación y estrategia de mi marca.",
  email = "hola@somostonica.com",
}) => {
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <section id="contacto" className={contactVariants.section()}>
      <div className={contactVariants.glow()} />

      <span className={contactVariants.eyebrow()}>{eyebrow}</span>
      <h2 className={contactVariants.headline()}>{headline}</h2>
      <p className={contactVariants.description()}>{description}</p>

      <div className={contactVariants.actions()}>
        <a href={whatsappUrl} target="_blank" rel="noreferrer noopener">
          <Button variant="primary" size="lg" className="gap-2">
            <MessageSquare className="h-4 w-4" />
            <span>Escribir por WhatsApp</span>
            <ArrowUpRight className="h-4 w-4" />
          </Button>
        </a>

        <a href={`mailto:${email}`}>
          <Button variant="secondary" size="lg" className="gap-2">
            <Mail className="h-4 w-4 text-slate-400" />
            <span>{email}</span>
          </Button>
        </a>
      </div>
    </section>
  );
};
