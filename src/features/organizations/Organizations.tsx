import { Icon } from "@iconify/react";
import data from "./data/data.json";
import Organization from "./Organization";
import { useServicePath } from "@/hooks/useServicePath";
import organizationsBackground from "@/assets/background.svg";

export default function Organizations({
  variant = "default",
}: {
  variant?: "default" | "organization";
}) {
  const { containerRef, path, size } = useServicePath<HTMLDivElement>(
    "[data-service-image]",
  );

  // the curve only makes sense for the zigzag layout — grid cards
  // (variant === "organization") aren't a connected sequence visually
  const isZigzag = variant === "default";

  return (
    <section
      className="relative overflow-hidden p-6 sm:p-12 lg:p-[96px]"
      style={
        isZigzag
          ? {
              backgroundImage: `url("${organizationsBackground}")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : undefined
      }
    >
      {variant === "organization" && (
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-black text-text sm:text-3xl">
              Rede de Apoio
            </h2>
            <p className="mt-2 text-sm text-text-secondary sm:text-base">
              Conheça as principais organizações de proteção e assistência.
            </p>
          </div>
          <a
            href="/organizations"
            className="group flex items-center gap-2 text-sm font-semibold text-primary-main transition-all hover:gap-3"
          >
            Ver todas organizações
            <Icon
              icon="solar:arrow-right-linear"
              width={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </div>
      )}

      <div
        ref={isZigzag ? containerRef : undefined}
        className={
          variant !== "default"
            ? "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
            : "relative isolate flex flex-col items-center gap-8"
        }
      >
        {isZigzag && path && (
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
          <Organization
            key={item.id}
            data={item}
            variant={variant}
            direction={index % 2 === 0 ? "right" : "left"}
            showImage
            theme="dark"
          />
        ))}
      </div>
    </section>
  );
}
