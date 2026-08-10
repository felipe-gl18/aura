// PanoramaViolenceTypes.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const violenceTypes = [
  {
    label: "Violência Doméstica",
    value: 57.2,
  },
  {
    label: "Pessoa em Situação de Rua",
    value: 21.0,
  },
  {
    label: "Exploração Patrimonial",
    value: 6.0,
  },
  {
    label: "Assédio Moral",
    value: 5.5,
  },
];

export default function PanoramaViolenceTypes() {
  return (
    <Card className="border-primary-light shadow-sm flex-1">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-text">
          Tipos de violação mais notificados
        </CardTitle>

        <p className="text-sm text-text-secondary">
          Casos registrados pelo CEMARIS no município de Sobral em 2026.
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
