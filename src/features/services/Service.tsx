import paefi from "@/assets/paefi.jpeg";
import abordagem_social from "@/assets/abordagem_social.jpeg";
import equipe_medidas_socioeducativa from "@/assets/equipe_medidas_socioeducativa.jpeg";
import policia_militar from "@/assets/illustrations/190.png";
import Card from "@/components/Card";

const images = {
  paefi,
  abordagem_social,
  equipe_medidas_socioeducativa,
  policia_militar,
};

type ServiceParams = {
  id: string;
  name: string;
  fullName: string;
  slug: string;
  description: string;
  image: string;
  buttonText: string;
  path?: string;
  link?: string;
  highlights: { title: string; description: string; icon: string }[];
};

export default function Service({
  data,
  direction,
  showImage,
  theme,
}: {
  data: ServiceParams;
  direction: "right" | "left";
  showImage: boolean;
  theme: "light" | "dark";
}) {
  return (
    <Card
      data={{
        title: data.name,
        description: data.description,
        button: data.buttonText,
        link: data.link,
        path: data.path,
        highlights: data.highlights,
      }}
      showImage={showImage}
      direction={direction}
      theme={theme}
      image={images[data.image as keyof typeof images]}
    />
  );
}
