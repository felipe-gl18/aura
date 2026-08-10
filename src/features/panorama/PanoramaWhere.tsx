// PanoramaWhere.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Users, Heart } from "lucide-react";

const lifeCycle = [
  {
    icon: User,
    title: "Adultos",
    value: 54.5,
  },
  {
    icon: Users,
    title: "Jovens",
    value: 18.7,
  },
  {
    icon: Heart,
    title: "Idosos",
    value: 16.3,
  },
];

export default function PanoramaWhere() {
  return (
    <Card className="border-primary-light shadow-sm">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-text">
          Perfil das vítimas por ciclo de vida
        </CardTitle>

        <p className="text-sm text-text-secondary">
          Distribuição das notificações por faixa etária em Sobral.
        </p>
      </CardHeader>

      <CardContent className="space-y-5">
        {lifeCycle.map(({ icon: Icon, title, value }) => (
          <div
            key={title}
            className="flex items-center justify-between rounded-xl border border-primary-light p-4 transition-colors hover:bg-primary-light/40"
          >
            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-primary-light p-3">
                <Icon className="h-6 w-6 text-primary" />
              </div>

              <div>
                <h3 className="font-medium text-text">{title}</h3>

                <p className="text-sm text-text-secondary">
                  Faixa etária informada na notificação.
                </p>
              </div>
            </div>

            <span className="text-2xl font-bold text-primary">
              {value.toFixed(1).replace(".", ",")}%
            </span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
