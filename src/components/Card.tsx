import CardImage from "./CardImage";
import {
  Card as CardComponent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

type CardParams = {
  title: string;
  description: string;
  date?: string;
  button?: string;
  link?: string;
  path?: string;
};

const themeStyles = {
  light: {
    title: "#FFFFFF",
    description: "#F3F4F6",
    buttonBg: "#FFFFFF",
    buttonText: "#6C3EB8",
  },
  dark: {
    title: "#2D2D2D",
    description: "#6B7280",
    buttonBg: "#6C3EB8",
    buttonText: "#FFFFFF",
  },
};

export default function Card({
  data,
  direction,
  showImage,
  theme,
  image,
}: {
  data: CardParams;
  direction: "right" | "left";
  showImage: boolean;
  theme: "light" | "dark";
  image?: string;
}) {
  const navigate = useNavigate();
  const styles = themeStyles[theme];

  const handleLink = () => {
    if (data.path) return navigate(data.path);
    if (data.link) return window.open(data.link, "_blank");
  };

  return (
    <div
      className={`flex justify-center items-center gap-[89px] py-[96px] ${
        direction === "left" ? "flex-row-reverse" : ""
      }`}
    >
      {showImage && image && <CardImage image={image} name={data.title} />}
      <CardComponent className="ring-0 ring-transparent w-[308px] bg-transparent">
        <CardHeader>
          <CardTitle
            className="text-2xl font-black"
            style={{ color: styles.title }}
          >
            {data.title}
          </CardTitle>
          {data.date && (
            <span className="text-sm text-black/80">{data.date}</span>
          )}
          <CardDescription style={{ color: styles.description }}>
            {data.description}
          </CardDescription>
          {data.button && (
            <Button
              onClick={handleLink}
              className="w-[252px] h-[44px] mt-[24px] hover:opacity-90"
              style={{
                backgroundColor: styles.buttonBg,
                color: styles.buttonText,
              }}
            >
              {data.button}
            </Button>
          )}
        </CardHeader>
      </CardComponent>
    </div>
  );
}
