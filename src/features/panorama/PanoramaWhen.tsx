// PanoramaWhen.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    time: "Atendimentos / Encaminhamentos",
    value: "37,8%",
    description:
      "125 casos direcionados a atendimentos e encaminhamentos gerais.",
  },
  {
    time: "Pessoas em Situação de Rua",
    value: "34,4%",
    description:
      "114 pessoas atendidas pelo Serviço Especializado para Pessoas em Situação de Rua.",
  },
  {
    time: "PAEFI",
    value: "10,6%",
    description:
      "35 famílias e indivíduos acompanhados pelo Serviço de Proteção e Atendimento Especializado.",
  },
];

export default function PanoramaWhen() {
  return (
    <Card className="border-primary-light shadow-sm flex-1">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-text">
          Serviços de acompanhamento mais acionados
        </CardTitle>

        <p className="text-sm text-text-secondary">
          Distribuição dos encaminhamentos realizados após a notificação
          inicial.
        </p>
      </CardHeader>

      <CardContent>
        <div className="relative ml-4 border-l-2 border-primary-light">
          {services.map((item, index) => (
            <div
              key={item.time}
              className={
                index === services.length - 1
                  ? "relative pl-8"
                  : "relative mb-8 pl-8"
              }
            >
              {/* Ponto da timeline */}
              <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-4 border-white bg-primary shadow-sm" />

              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-text">{item.time}</h3>

                <span className="text-2xl font-bold text-primary">
                  {item.value}
                </span>
              </div>

              <p className="mt-2 text-sm leading-6 text-text-secondary">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
