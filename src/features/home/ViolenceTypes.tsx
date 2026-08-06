import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Icon } from "@iconify/react";

const data = [
  {
    value: "fisica",
    title: "Violência Física",
    description:
      "Acontece quando alguém utiliza força física para causar dano, dor ou sofrimento à vítima.",
    examples: [
      "Empurrões",
      "Socos e chutes",
      "Puxões de cabelo",
      "Uso de objetos para machucar",
    ],
  },
  {
    value: "psicologica",
    title: "Violência Psicológica",
    description:
      "São ações que causam dano emocional, prejudicam a autoestima ou tentam controlar a vítima.",
    examples: [
      "Humilhações e ameaças",
      "Manipulação e chantagens",
      "Controle da vida pessoal",
      "Isolamento de familiares e amigos",
    ],
  },
  {
    value: "sexual",
    title: "Violência Sexual",
    description:
      "Ocorre quando alguém força ou impede a vítima de exercer sua liberdade sexual.",
    examples: [
      "Forçar relações sexuais",
      "Impedir o uso de métodos contraceptivos",
      "Exigir práticas sem consentimento",
      "Constranger ou assediar sexualmente",
    ],
  },
  {
    value: "patrimonial",
    title: "Violência Patrimonial",
    description:
      "Envolve controlar, destruir ou retirar bens, documentos ou recursos financeiros da vítima.",
    examples: [
      "Destruir objetos pessoais",
      "Controlar dinheiro e recursos",
      "Reter documentos",
      "Impedir acesso a bens",
    ],
  },
  {
    value: "moral",
    title: "Violência Moral",
    description:
      "São atitudes que prejudicam a reputação e a imagem da vítima.",
    examples: [
      "Calúnia",
      "Difamação",
      "Injúria",
      "Espalhar informações falsas",
    ],
  },
];

const icons: Record<string, string> = {
  fisica: "solar:heart-broken-linear",
  psicologica: "boxicons:brain",
  sexual: "solar:shield-warning-linear",
  patrimonial: "solar:wallet-money-linear",
  moral: "solar:chat-round-dots-linear",
};

export default function ViolenceTypes() {
  return (
    <section className="w-full px-4 py-12 sm:px-8 lg:px-16 lg:py-24">
      <div className="mx-auto">
        <div className="mb-12 text-center">
          <span className="rounded-full bg-primary-light px-4 py-1 text-sm font-medium text-primary-main">
            Informação
          </span>

          <h2 className="mt-4 text-3xl font-bold text-text sm:text-4xl">
            Tipos de violência
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-text-secondary">
            Conheça as principais formas de violência previstas na Lei Maria da
            Penha.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-5">
          {data.map((item) => (
            <Card
              key={item.value}
              className="h-full border-0 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <CardHeader>
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-light">
                  <Icon
                    icon={icons[item.value]}
                    width={28}
                    className="text-primary-main"
                  />
                </div>

                <CardTitle>{item.title}</CardTitle>

                <CardDescription className="leading-6">
                  {item.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <ul className="space-y-2">
                  {item.examples.map((example) => (
                    <li
                      key={example}
                      className="flex items-start gap-2 text-sm text-text-secondary"
                    >
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-main" />
                      {example}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
