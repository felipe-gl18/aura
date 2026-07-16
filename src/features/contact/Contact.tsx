import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

export default function Contact() {
  return (
    <section className="mx-auto flex w-full max-w-7xl flex-col gap-12 py-20">
      <div className="space-y-4 text-center">
        <span className="rounded-full bg-primary-light px-4 py-1 text-sm font-medium text-primary">
          Entre em contato
        </span>

        <h2 className="text-5xl font-bold text-text">
          Precisa de ajuda ou possui alguma dúvida?
        </h2>

        <p className="mx-auto max-w-3xl text-lg leading-8 text-text-secondary">
          O AURA faz parte da rede de proteção e orientação às mulheres em
          situação de violência. Caso tenha dúvidas sobre os serviços
          disponíveis, entre em contato com o CREAS ou envie uma mensagem pelo
          formulário abaixo.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[360px_1fr]">
        <ContactInfo />

        <ContactForm />
      </div>
    </section>
  );
}
