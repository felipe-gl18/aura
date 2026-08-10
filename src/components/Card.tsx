import CardImage from "./CardImage";
import {
  Card as CardComponent,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import { Badge } from "./ui/badge";

type CardVariant = "default" | "organization";

type CardAction = {
  type: string;
  value: string;
};

type CardParams = {
  title: string;
  description?: string;
  date?: string;
  button?: string;
  link?: string;
  path?: string;

  // Organization
  icon?: string;
  color?: string;
  subtitle?: string;
  action?: CardAction;

  // highlight
  highlights?: { title: string; description: string; icon: string }[];
};

type Props = {
  data: CardParams;
  variant?: CardVariant;

  direction?: "left" | "right";
  showImage?: boolean;
  theme: "light" | "dark";
  image?: string;
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
  variant,
  showImage,
  theme,
  image,
}: Props) {
  const navigate = useNavigate();
  const styles = themeStyles[theme];

  const handleLink = () => {
    // Internal route
    if (data.path) {
      navigate(data.path);
      return;
    }

    if (!data.action) {
      return;
    }

    const { type, value } = data.action;

    // Phone: opens the device's phone/dialer
    if (type === "phone") {
      window.location.href = `tel:${value}`;
      return;
    }

    // WhatsApp
    if (type === "whatsapp") {
      window.open(`https://wa.me/${value}`, "_blank", "noopener,noreferrer");
      return;
    }

    // External website
    if (type === "external") {
      window.open(value, "_blank", "noopener,noreferrer");
    }
  };

  if (variant === "organization") {
    return (
      <CardComponent
        className="border-0 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
        onClick={handleLink}
        style={{
          backgroundColor: `${data.color}15`,
        }}
      >
        <CardContent className="flex items-center gap-4 p-4 sm:gap-5 sm:p-6">
          <div
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white sm:h-16 sm:w-16"
            style={{ color: data.color }}
          >
            <Icon
              icon={data.icon!}
              width={28}
              height={28}
              className="sm:hidden"
            />
            <Icon
              icon={data.icon!}
              width={36}
              height={36}
              className="hidden sm:block"
            />
          </div>

          <div>
            <h3
              className="text-lg font-black leading-none sm:text-2xl"
              style={{ color: data.color }}
            >
              {data.title}
            </h3>

            <p
              className="mt-2 text-xs font-semibold sm:text-sm"
              style={{ color: data.color }}
            >
              {data.subtitle}
            </p>
          </div>
        </CardContent>
      </CardComponent>
    );
  }

  return (
    <div
      className={`flex flex-col items-center justify-center gap-6 px-4 py-10 lg:flex-nowrap lg:gap-[89px] lg:px-0 lg:py-[96px] ${
        direction === "left" ? "lg:flex-row-reverse" : "lg:flex-row"
      }`}
    >
      {showImage && image && (
        <div className="w-full max-w-[280px] sm:max-w-[360px] lg:w-[447px] lg:max-w-none lg:shrink-0">
          <CardImage image={image} name={data.title} />
        </div>
      )}
      <CardComponent className="ring-0 ring-transparent w-full max-w-[360px] bg-transparent shrink-0 overflow-visible">
        <CardHeader>
          <CardTitle
            className="text-2xl font-black break-words"
            style={{ color: styles.title }}
          >
            {data.title}
          </CardTitle>
          {data.date && (
            <span className="text-sm text-black/80">{data.date}</span>
          )}
          <CardDescription
            className="text-sm break-words"
            style={{ color: styles.description }}
          >
            {data.description}
            {data.highlights && data.highlights.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-2">
                {data.highlights.map((highlight) => (
                  <Badge
                    key={highlight.title}
                    className="flex h-auto max-w-[220px] items-center gap-1.5 whitespace-normal bg-primary-dark px-2.5 py-1 text-left text-white"
                  >
                    <Icon
                      icon={highlight.icon}
                      width={14}
                      height={14}
                      className="shrink-0"
                      style={{ color: "white" }}
                    />
                    <p className="text-[11px] leading-tight break-words">
                      {highlight.description}
                    </p>
                  </Badge>
                ))}
              </div>
            )}
          </CardDescription>
          {data.button && (
            <Button
              onClick={handleLink}
              className="w-full max-w-[252px] h-[44px] mt-[24px] hover:opacity-90 cursor-pointer"
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
