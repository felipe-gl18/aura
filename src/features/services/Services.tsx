import { Icon } from "@iconify/react";
import data from "./data/data.json";
import Service from "./Service";
import { useServicePath } from "@/hooks/useServicePath";

export default function Services({
  variant,
}: {
  variant: "default" | "basic";
}) {
  const { containerRef, path, size } = useServicePath<HTMLDivElement>(
    "[data-service-image]",
  );

  return (
    <section className="p-6 sm:p-12 lg:p-[96px]">
      {variant === "basic" && (
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-black text-text sm:text-3xl">
              Serviços
            </h2>
            <p className="mt-2 text-sm text-text-secondary sm:text-base">
              Serviços fornecidos pelas organizações.
            </p>
          </div>
          <a
            href="/services"
            className="group flex items-center gap-2 text-sm font-semibold text-primary-main transition-all hover:gap-3"
          >
            Ver todos os serviços
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
          <Service
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
