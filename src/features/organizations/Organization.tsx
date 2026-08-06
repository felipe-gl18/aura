import creas from "@/assets/illustrations/CREAS.png";
import juizado from "@/assets/illustrations/juizado.png";
import ddm from "@/assets/illustrations/DDM.png";
import policia_militar from "@/assets/illustrations/190.png";
import Card from "@/components/Card";

const images = {
  creas,
  juizado,
  ddm,
  policia_militar,
};

type OrganizationParams = {
  id: string;
  name: string;
  fullName: string;
  slug: string;
  description: string;
  image: string;
  icon: string;
  buttonText: string;
  link: string;
  color: string;
  highlights?: { title: string; description: string; icon: string }[];
};

type Props = {
  data: OrganizationParams;
  variant: "default" | "organization";
  direction: "right" | "left";
  showImage: boolean;
  theme: "light" | "dark";
};

export default function Organization({
  data,
  variant,
  direction,
  showImage,
  theme,
}: Props) {
  return (
    <Card
      data={{
        title: data.name,
        description: data.description,
        button: data.buttonText,
        link: data.link,
        icon: data.icon,
        color: data.color,
        subtitle: data.fullName,
        highlights: data.highlights,
      }}
      variant={variant}
      showImage={showImage}
      direction={direction}
      theme={theme}
      image={images[data.image as keyof typeof images]}
    />
  );
}
