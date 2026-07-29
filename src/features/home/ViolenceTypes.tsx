import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

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

export default function ViolenceTypes() {
  return (
    <div className="w-full flex flex-col justify-start items-center gap-6 px-4 py-12 sm:px-8 lg:py-[96px]">
      <p className="text-xl font-bold text-[#2D2D2D] sm:text-2xl">
        Tipos de violência
      </p>
      <Carousel
        opts={{ align: "start" }}
        className="w-full max-w-[600px] min-w-0 shrink-0"
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent className="m-2 items-stretch">
          {data.map((item) => (
            <CarouselItem
              key={item.title}
              className="flex basis-full sm:basis-1/2"
            >
              <Card className="flex h-full w-full flex-col ring-primary-light">
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>

                <CardContent className="flex-1 text-sm text-muted-foreground">
                  {item.examples.join(", ")}
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
