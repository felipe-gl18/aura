import creas from "@/assets/illustrations/CREAS.png";
import cras from "@/assets/illustrations/CRAS.png";
import ddm from "@/assets/illustrations/DDM.png";
import policia_militar from "@/assets/illustrations/190.png";
import Card from "@/components/Card";

const images = {
  creas,
  cras,
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
  buttonText: string;
  link: string;
};

export default function Organization({
  data,
  direction,
  showImage,
  theme,
}: {
  data: OrganizationParams;
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
      }}
      showImage={showImage}
      direction={direction}
      theme={theme}
      image={images[data.image as keyof typeof images]}
    />
  );
}
