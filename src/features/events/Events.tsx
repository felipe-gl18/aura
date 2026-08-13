import { Icon } from "@iconify/react";
import data from "./data/data.json";
import Event from "./Event";
import { useServicePath } from "@/hooks/useServicePath";

export default function Events({ variant }: { variant: "default" | "basic" }) {
  const { containerRef, path, size } = useServicePath<HTMLDivElement>(
    "[data-service-image]",
  );
  return (
    <section className="relative overflow-hidden p-6 sm:p-12 lg:p-[96px]">
      {variant === "basic" && (
        <div className="relative mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-black text-text sm:text-3xl">
              Eventos
            </h2>
            <p className="mt-2 text-sm text-text-secondary sm:text-base">
              Eventos relacionados aos serviços de proteção e assistência.
            </p>
          </div>
          <a
            href="/events"
            className="group flex items-center gap-2 text-sm font-semibold text-primary-main transition-all hover:gap-3"
          >
            Ver todos os eventos
            <Icon
              icon="solar:arrow-right-linear"
              width={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </div>
      )}

      <div
        ref={containerRef}
        className="relative isolate flex flex-col items-center gap-8"
      >
        {path && (
          <svg
            className="pointer-events-none absolute inset-0 -z-10 hidden lg:block"
            width={size.width}
            height={size.height}
          >
            <path
              d={path}
              fill="none"
              stroke="var(--color-primary-light)"
              strokeWidth={3}
              strokeLinecap="round"
              strokeDasharray="10 10"
            />
          </svg>
        )}

        {data.map((item, index) => (
          <Event
            key={item.id}
            data={item}
            direction={index % 2 === 0 ? "right" : "left"}
            showImage={true}
            theme="dark"
          />
        ))}
      </div>
    </section>
  );
}
