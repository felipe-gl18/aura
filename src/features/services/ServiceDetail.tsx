import { useParams } from "react-router-dom";
import { ArrowRight, CheckCircle2, Info } from "lucide-react";

import paefi from "@/assets/paefi.jpeg";
import abordagem_social from "@/assets/abordagem_social.jpeg";
import equipe_medidas_socioeducativa from "@/assets/equipe_medidas_socioeducativa.jpeg";
import policia_militar from "@/assets/illustrations/190.png";

import data from "./data/data.json";
import { Button } from "@/components/ui/button";

const images = {
  paefi,
  abordagem_social,
  equipe_medidas_socioeducativa,
  policia_militar,
};

export default function ServiceDetail() {
  const { service } = useParams();

  const serviceData = data.find((item) => item.path === `/services/${service}`);

  const handleRedirect = () => {
    if (serviceData?.link) {
      window.open(serviceData.link, "_blank");
    }
  };

  if (!serviceData) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-2xl font-black text-text">
            Serviço não encontrado
          </h1>

          <p className="mt-2 text-text-secondary">
            O serviço que você está procurando não está disponível.
          </p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
        {/* Header */}
        <section className="max-w-4xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-primary-light px-4 py-2 text-sm font-semibold text-primary-dark">
            <Info className="h-4 w-4" />
            Serviço de atendimento
          </div>

          <h1 className="text-3xl font-black tracking-tight text-text sm:text-4xl lg:text-5xl">
            {serviceData.name}
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-7 text-text-secondary sm:text-lg">
            {serviceData.description}
          </p>
        </section>

        {/* Image */}
        <section className="mt-10">
          <div className="overflow-hidden rounded-2xl border border-black/5 bg-surface shadow-sm">
            <img
              src={images[serviceData.image as keyof typeof images]}
              alt={serviceData.name}
              className="h-auto max-h-[520px] w-full object-cover"
            />
          </div>
        </section>

        {/* How it works */}
        <section className="mt-16">
          <div className="mb-8">
            <span className="text-sm font-bold uppercase tracking-wider text-primary-main">
              Passo a passo
            </span>

            <h2 className="mt-2 text-2xl font-black text-text sm:text-3xl">
              Como funciona?
            </h2>

            <p className="mt-2 max-w-2xl text-text-secondary">
              Entenda de forma simples o que acontece ao buscar este serviço.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {serviceData.steps?.map((step, index) => (
              <div
                key={step.id}
                className="group rounded-2xl border border-black/5 bg-surface p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex items-start gap-4">
                  {/* Number */}
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-light text-lg font-black text-primary-main transition-colors group-hover:bg-primary-main group-hover:text-white">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-base font-bold text-text sm:text-lg">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-text-secondary sm:text-base">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-16">
          <div className="relative overflow-hidden rounded-2xl bg-primary-dark px-6 py-8 sm:px-10 sm:py-10">
            {/* Decorative elements */}
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary-main/40" />
            <div className="absolute -bottom-20 -left-10 h-44 w-44 rounded-full bg-primary-main/30" />

            <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div className="max-w-2xl">
                <div className="mb-3 flex items-center gap-2 text-primary-light">
                  <CheckCircle2 className="h-5 w-5" />

                  <span className="text-sm font-bold">
                    Precisa deste serviço?
                  </span>
                </div>

                <h2 className="text-2xl font-black text-white sm:text-3xl">
                  Saiba como acessar o atendimento
                </h2>

                <p className="mt-2 text-sm leading-6 text-white/75 sm:text-base">
                  Acesse o canal oficial para obter mais informações e buscar
                  atendimento.
                </p>
              </div>

              <Button
                aria-label={`Saiba mais sobre ${serviceData.name}`}
                onClick={handleRedirect}
                className="group h-12 w-full shrink-0 bg-white px-6 font-bold text-primary-dark hover:bg-primary-light md:w-auto"
              >
                {serviceData.buttonText}

                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
