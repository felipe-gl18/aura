import aepeti from "@/assets/aepeti.jpeg";
import grupo_autonomia from "@/assets/grupo_autonomia.jpeg";
import novas_trilhas from "@/assets/novas_trilhas.jpeg";
import Card from "@/components/Card";

const images = {
  aepeti,
  grupo_autonomia,
  novas_trilhas,
};

type EventParams = {
  id: string;
  title: string;
  slug: string;
  description: string;
  image: string;
  date: string;
};

export default function Event({
  data,
  direction,
  showImage,
  theme,
}: {
  data: EventParams;
  direction: "right" | "left";
  showImage: boolean;
  theme: "light" | "dark";
}) {
  return (
    <Card
      data={{
        title: data.title,
        description: data.description,
        date: data.date,
      }}
      showImage={showImage}
      direction={direction}
      theme={theme}
      image={images[data.image as keyof typeof images]}
    />
  );
}
