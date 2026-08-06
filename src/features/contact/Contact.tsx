import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import creas from "@/assets/creas.jpeg";

export default function Contact() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-8 lg:py-20">
      {/* Banner */}
      <div className="relative mb-12 h-[260px] overflow-hidden rounded-3xl lg:h-[320px]">
        <img src={creas} alt="CREAS" className="h-full w-full object-cover" />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-main/85 via-primary-main/60 to-primary-main/25" />

        {/* Conteúdo */}
        <div className="absolute inset-0 flex flex-col justify-center px-8 lg:px-14">
          <span className="mb-4 w-fit rounded-full bg-white/20 px-4 py-1 text-sm font-medium text-white backdrop-blur-sm">
            Centro de Referência Especializado
          </span>

          <h2 className="max-w-2xl text-3xl font-bold text-white lg:text-5xl">
            Estamos aqui para acolher e orientar você.
          </h2>

          <p className="mt-4 max-w-xl text-base leading-7 text-white/90">
            O CREAS oferece atendimento especializado, orientação e apoio às
            mulheres em situação de violência. Você não está sozinha.
          </p>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="space-y-4 text-center">
        <span className="rounded-full bg-primary-light px-4 py-1 text-sm font-medium text-primary-main">
          Entre em contato
        </span>

        <h2 className="text-3xl font-bold text-text sm:text-4xl lg:text-5xl">
          Precisa de ajuda ou possui alguma dúvida?
        </h2>

        <p className="mx-auto max-w-3xl text-base leading-7 text-text-secondary sm:text-lg sm:leading-8">
          O AURA faz parte da rede de proteção e orientação às mulheres em
          situação de violência. Caso tenha dúvidas sobre os serviços
          disponíveis, entre em contato com o CREAS ou envie uma mensagem pelo
          formulário abaixo.
        </p>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-[360px_1fr]">
        <ContactInfo />
        <ContactForm />
      </div>
    </section>
  );
}
