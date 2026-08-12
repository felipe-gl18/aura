/* eslint-disable @typescript-eslint/no-unused-vars */
import data from "./data/data.json";
import hero from "@/assets/hero-background.svg";
import logo from "@/assets/solo_logo.png";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Organization from "./Organization";
import { Icon } from "@iconify/react";

const stats = [
  {
    icon: "solar:women-linear",
    value: "1 em cada 3",
    label: "mulheres já sofreu algum tipo de violência",
  },
  {
    icon: "solar:phone-calling-linear",
    value: "+180 mil",
    label: "atendimentos realizados pelo Ligue 180 em 2025",
  },
  {
    icon: "solar:shield-check-linear",
    value: "24h",
    label: "de atendimento nos canais de proteção",
  },
];

export default function OrganizationsCarousel() {
  return (
    <div className="relative flex w-full flex-col items-center gap-8 overflow-hidden bg-[#FAF8FF] px-4 py-10 sm:px-6 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:justify-normal lg:gap-x-16 lg:gap-y-0 lg:px-16 lg:py-0">
      {/* Background */}
      <img
        src={hero}
        alt=""
        aria-hidden="true"
        className="
      pointer-events-none
      absolute
      inset-0
      z-0
      h-full
      w-full
      object-cover
    "
      />
      <Carousel
        opts={{ align: "start" }}
        className="order-2 w-full max-w-[500px] min-w-0 shrink-0 lg:order-none lg:max-w-[600px] lg:justify-self-end"
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent>
          {data.map(({ highlights, ...rest }, index) => (
            <CarouselItem key={rest.id}>
              <Organization
                variant="default"
                data={rest}
                direction={index % 2 === 0 ? "right" : "left"}
                showImage={false}
                theme="dark"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <img
        src={logo}
        className="relative z-10 order-1 h-auto w-[100px] shrink-0 sm:w-[120px] lg:order-none lg:w-[320px] lg:justify-self-center"
      />
      <div className="relative z-10 order-3 grid w-full max-w-[500px] grid-cols-1 gap-3 sm:grid-cols-3 lg:flex lg:w-[366px] lg:max-w-none lg:flex-col lg:justify-self-start">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex items-center gap-3 rounded-xl border border-black/5 bg-white p-3 shadow-sm"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-main/10">
              <Icon
                icon={stat.icon}
                width={20}
                height={20}
                className="text-primary-main"
              />
            </div>
            <div className="min-w-0">
              <p className="text-lg font-black leading-none text-gray-900">
                {stat.value}
              </p>
              <p className="mt-1 text-xs leading-snug text-gray-500 break-words">
                {stat.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
