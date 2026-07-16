import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, House, Building2 } from "lucide-react";

const locations = [
  {
    icon: Home,
    title: "Residência da vítima",
    value: 40.7,
  },
  {
    icon: House,
    title: "Residência compartilhada",
    value: 28.2,
  },
  {
    icon: Building2,
    title: "Casa do suspeito",
    value: 5.5,
  },
];

export default function PanoramaWhere() {
  return (
    <Card className="border-primary-light shadow-sm">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-text">
          Onde a violência acontece
        </CardTitle>

        <p className="text-sm text-text-secondary">
          A maioria das denúncias ocorre dentro do ambiente doméstico.
        </p>
      </CardHeader>

      <CardContent className="space-y-5">
        {locations.map(({ icon: Icon, title, value }) => (
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
                  Local informado na denúncia.
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
