import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const violenceTypes = [
  {
    label: "Violência Física",
    value: 41.4,
  },
  {
    label: "Violência Psicológica",
    value: 27.9,
  },
  {
    label: "Violência Sexual",
    value: 3.6,
  },
];

export default function PanoramaViolenceTypes() {
  return (
    <Card className="border-primary-light shadow-sm flex-1">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-text">
          Tipos de violência
        </CardTitle>

        <p className="text-sm text-text-secondary">
          Casos registrados pelo Ligue 180 em contexto de violência doméstica.
        </p>
      </CardHeader>

      <CardContent className="space-y-8">
        {violenceTypes.map((item) => (
          <div key={item.label} className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-medium text-text">{item.label}</span>

              <span className="font-semibold text-primary">
                {item.value.toFixed(1).replace(".", ",")}%
              </span>
            </div>

            <div className="h-3 overflow-hidden rounded-full bg-primary-light">
              <div
                className="h-full rounded-full bg-primary transition-all"
                style={{ width: `${item.value}%` }}
              />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
