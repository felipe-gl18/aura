import main from "@/assets/illustrations/violence.svg";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

export default function PanoramaAction() {
  return (
    <section className="overflow-hidden rounded-3xl bg-primary-dark">
      <div className="grid items-center gap-10 px-10 py-14 lg:grid-cols-2 lg:px-16">
        {/* Texto */}
        <div className="flex flex-col gap-6">
          <span className="w-fit rounded-full bg-white/10 px-4 py-1 text-sm font-medium text-white">
            Rede de Proteção
          </span>

          <h2 className="max-w-xl text-5xl font-bold leading-tight text-white">
            Não espere a violência aumentar.
          </h2>

          <p className="max-w-lg text-lg leading-8 text-white/80">
            A violência pode acontecer de diversas formas e tende a se agravar
            com o tempo. Buscar ajuda o quanto antes é um passo importante para
            garantir proteção, acolhimento e acesso aos seus direitos.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button
              aria-label="Ligar 180"
              size="lg"
              className="bg-white text-primary hover:bg-primary-light"
            >
              <Phone className="mr-2 h-5 w-5" />
              Ligue 180
            </Button>

            <Button
              aria-label="Rede de apoio"
              size="lg"
              variant="outline"
              className="border-white bg-transparent text-white hover:bg-white hover:text-primary"
            >
              Conheça a rede de apoio
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Ilustração */}
        <div className="flex justify-center lg:justify-end">
          <img
            src={main}
            alt="Mulher recebendo apoio"
            className="w-full max-w-md"
          />
        </div>
      </div>
    </section>
  );
}
