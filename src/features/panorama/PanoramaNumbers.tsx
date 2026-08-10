// PanoramaNumbers.tsx
import { Card, CardContent } from "@/components/ui/card";

export default function PanoramaNumbers() {
  return (
    <section className="grid gap-6 md:grid-cols-3">
      <Card className="border-primary-light shadow-sm">
        <CardContent className="flex flex-col gap-3 p-8">
          <span className="text-sm font-medium uppercase tracking-wide text-text-secondary">
            Total de Violações
          </span>

          <h3 className="text-5xl font-bold text-primary">563</h3>

          <p className="text-sm text-text-secondary">
            Violações registradas em <strong>Sobral</strong> no ano de 2026.
          </p>
        </CardContent>
      </Card>

      <Card className="border-primary-light shadow-sm">
        <CardContent className="flex flex-col gap-3 p-8">
          <span className="text-sm font-medium uppercase tracking-wide text-text-secondary">
            Violência Doméstica
          </span>

          <h3 className="text-5xl font-bold text-primary">322</h3>

          <p className="text-sm text-text-secondary">
            Tipo de violação mais notificado, <strong>57,2%</strong> do total de
            casos.
          </p>
        </CardContent>
      </Card>

      <Card className="border-primary-light shadow-sm">
        <CardContent className="flex flex-col gap-3 p-8">
          <span className="text-sm font-medium uppercase tracking-wide text-text-secondary">
            Atendimentos Realizados
          </span>

          <h3 className="text-5xl font-bold text-success">125</h3>

          <p className="text-sm text-text-secondary">
            Atendimentos e encaminhamentos realizados após notificação.
          </p>
        </CardContent>
      </Card>
    </section>
  );
}
