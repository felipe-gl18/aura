// Panorama.tsx
import { Icon } from "@iconify/react";
import PanoramaAction from "./PanoramaAction";
import PanoramaNumbers from "./PanoramaNumbers";
import PanoramaViolenceTypes from "./PanoramaViolenceTypes";
import PanoramaWhen from "./PanoramaWhen";
import PanoramaWhere from "./PanoramaWhere";
import PanoramaWho from "./PanoramaWho";

export default function Panorama({
  variant,
}: {
  variant: "default" | "basic";
}) {
  return (
    <div className="w-full flex flex-col justify-self-center px-4 sm:px-8 lg:px-[96px] gap-6 pb-16 lg:pb-[96px]">
      <section className="flex w-full flex-col gap-3 py-10 lg:py-16">
        <span className="w-fit rounded-full bg-primary-light px-3 py-1 text-sm font-medium text-primary">
          📊 Panorama
        </span>

        <h2 className="text-2xl font-black text-text sm:text-3xl">
          Panorama da Violência Contra a Mulher em Sobral
        </h2>

        <div className="flex flex-col gap-3 w-full sm:flex-row sm:items-center sm:justify-between">
          <p className="text-base text-text-secondary sm:text-lg">
            Dados oficiais do{" "}
            <span className="font-semibold text-primary">CEMARIS</span> • Ano de
            2026
          </p>
          <a
            href="/services"
            className="group flex items-center gap-2 text-sm font-semibold text-primary-main transition-all hover:gap-3"
          >
            Fonte: Painel CEMARIS
            <Icon
              icon="solar:arrow-right-linear"
              width={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </div>
      </section>
      <PanoramaNumbers />
      <div className="flex flex-col gap-6 lg:flex-row">
        <PanoramaViolenceTypes />
        <PanoramaWhere />
      </div>
      <div className="flex flex-col gap-6 lg:flex-row">
        <PanoramaWho />
        <PanoramaWhen />
      </div>
      {variant === "default" && <PanoramaAction />}
    </div>
  );
}
