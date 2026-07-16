import { Card, CardContent } from "@/components/ui/card";

export default function PanoramaNumbers() {
  return (
    <section className="grid gap-6 md:grid-cols-3">
      <Card className="border-primary-light shadow-sm">
        <CardContent className="flex flex-col gap-3 p-8">
          <span className="text-sm font-medium uppercase tracking-wide text-text-secondary">
            Atendimentos
          </span>

          <h3 className="text-5xl font-bold text-primary">594.118</h3>

          <p className="text-sm text-text-secondary">
            Atendimentos realizados pelo <strong>Ligue 180</strong> entre
            janeiro e julho de 2025.
          </p>
        </CardContent>
      </Card>

      <Card className="border-primary-light shadow-sm">
        <CardContent className="flex flex-col gap-3 p-8">
          <span className="text-sm font-medium uppercase tracking-wide text-text-secondary">
            Denúncias
          </span>

          <h3 className="text-5xl font-bold text-primary">86.025</h3>

          <p className="text-sm text-text-secondary">
            Denúncias registradas de violência contra a mulher em todo o Brasil.
          </p>
        </CardContent>
      </Card>

      <Card className="border-primary-light shadow-sm">
        <CardContent className="flex flex-col gap-3 p-8">
          <span className="text-sm font-medium uppercase tracking-wide text-text-secondary">
            Crescimento
          </span>

          <h3 className="text-5xl font-bold text-success">+2,9%</h3>

          <p className="text-sm text-text-secondary">
            Em comparação ao mesmo período de <strong>2024</strong>.
          </p>
        </CardContent>
      </Card>
    </section>
  );
}
