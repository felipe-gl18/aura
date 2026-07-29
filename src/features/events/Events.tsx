import { Icon } from "@iconify/react";
import data from "./data/data.json";
import Event from "./Event";

export default function Events({ variant }: { variant: "default" | "basic" }) {
  return (
    <section className="p-6 sm:p-12 lg:p-[96px]">
      {variant === "basic" && (
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
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
      <div className="flex flex-col items-center gap-8">
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
