import { Icon } from "@iconify/react";
import type { ServiceLocation } from "@/types/service-location";
import { categoryStyles } from "@/types/service-location";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { getOpenStatus } from "@/lib/opening-hours";

function NearbyServiceCard({
  location,
  onClick,
}: {
  location: ServiceLocation;
  onClick?: (location: ServiceLocation) => void;
}) {
  const style = categoryStyles[location.category];
  const status = getOpenStatus(location.schedule);

  return (
    <button
      aria-label={location.name}
      onClick={() => onClick?.(location)}
      className="flex w-full shrink-0 flex-col gap-2.5 rounded-2xl border border-primary-light bg-surface p-3.5 text-left transition hover:-translate-y-0.5 hover:shadow-md sm:gap-3 sm:p-4"
    >
      <div className="flex items-center gap-3">
        <div
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full sm:h-9 sm:w-9"
          style={{ backgroundColor: style.bg, color: style.color }}
        >
          <Icon
            icon={location.icon}
            width={16}
            height={16}
            className="sm:h-[18px] sm:w-[18px]"
          />
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-bold text-text">
            {location.name}
          </p>
          <p className="truncate text-xs text-text-secondary">
            {location.subtitle}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-1">
        <span
          className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${
            status.isOpen
              ? "bg-success/10 text-success"
              : "bg-warning/10 text-warning"
          }`}
        >
          {status.isOpen ? "Aberto agora" : status.label}
        </span>
      </div>
    </button>
  );
}

export default function NearbyServices({
  locations,
  onSelect,
}: {
  locations: ServiceLocation[];
  onSelect?: (location: ServiceLocation) => void;
}) {
  return (
    <div className="relative min-w-0  sm:p-4 p-4">
      <h3 className="mb-3 text-base font-black text-text sm:mb-4 sm:text-lg">
        Serviços próximos
      </h3>

      <Carousel
        opts={{ align: "start" }}
        className="w-full min-w-0"
        plugins={[Autoplay({ delay: 2000 })]}
      >
        <CarouselContent className="-ml-3 sm:-ml-4">
          {locations.map((location) => (
            <CarouselItem
              key={location.id}
              className="basis-[80%] pl-3 xs:basis-[60%] sm:basis-1/2 sm:pl-4 lg:basis-1/3 xl:basis-1/4"
            >
              <NearbyServiceCard location={location} onClick={onSelect} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
