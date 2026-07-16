import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const timeline = [
  {
    time: "Mais de 1 ano",
    value: "21,9%",
    description:
      "das denúncias referem-se a violências iniciadas há mais de um ano.",
  },
  {
    time: "Mais de 5 anos",
    value: "9%",
    description: "das vítimas conviviam com a violência há mais de cinco anos.",
  },
  {
    time: "Mais de 10 anos",
    value: "8,6%",
    description:
      "das denúncias envolvem violências iniciadas há mais de dez anos.",
  },
];

export default function PanoramaWhen() {
  return (
    <Card className="border-primary-light shadow-sm flex-1">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-text">
          Quanto tempo até denunciar?
        </CardTitle>

        <p className="text-sm text-text-secondary">
          Muitas mulheres convivem com a violência por anos antes de buscar
          ajuda.
        </p>
      </CardHeader>

      <CardContent>
        <div className="relative ml-4 border-l-2 border-primary-light">
          {timeline.map((item, index) => (
            <div
              key={item.time}
              className={
                index === timeline.length - 1
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
