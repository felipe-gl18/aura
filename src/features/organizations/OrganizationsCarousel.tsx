/* eslint-disable @typescript-eslint/no-unused-vars */
import data from "./data/data.json";
import logo from "@/assets/white_logo.png";
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
    <div className="relative flex w-full items-center justify-between overflow-hidden bg-primary-main px-4 py-8 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:justify-normal lg:gap-x-16 lg:px-16 lg:py-0">
      <Carousel
        opts={{ align: "start" }}
        className="order-2 w-full min-w-0 shrink-0 lg:order-none lg:w-full lg:max-w-[600px] lg:justify-self-end"
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
                theme="light"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <img
        src={logo}
        className="order-1 h-auto w-[220px] shrink-0 lg:order-none lg:w-[566px] lg:justify-self-center"
      />
      <div className="order-3 hidden w-[220px] h-auto shrink-0 flex-col gap-4 md:flex lg:order-none lg:w-[366px] lg:justify-self-start">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/10 p-3 backdrop-blur-sm"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/15">
              <Icon
                icon={stat.icon}
                width={20}
                height={20}
                className="text-white"
              />
            </div>
            <div className="min-w-0">
              <p className="text-lg font-black leading-none text-white">
                {stat.value}
              </p>
              <p className="mt-1 text-xs leading-snug text-white/80 break-words">
                {stat.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
