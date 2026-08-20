import { Icon } from "@iconify/react";

import data from "./data/data.json";

type CaseData = (typeof data)[number];

function CaseCard({ item, index }: { item: CaseData; index: number }) {
  const isEven = index % 2 === 0;
  const hasImage = Boolean(item.image?.url);

  return (
    <article
      className={`group relative grid w-full overflow-hidden rounded-3xl border border-primary-light/70 bg-surface shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl lg:grid-cols-2 ${
        isEven ? "" : "lg:[&>*:first-child]:order-2"
      }`}
    >
      {/* Imagem */}
      <div className="relative min-h-[280px] overflow-hidden sm:min-h-[360px] lg:min-h-[460px]">
        {hasImage ? (
          <>
            <img
              src={item.image.url!}
              alt={item.image.alt}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />

            {/* Categoria */}
            <div className="absolute left-5 top-5 sm:left-7 sm:top-7">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-primary-dark shadow-sm backdrop-blur-sm">
                <Icon icon="solar:heart-linear" width={15} height={15} />
                {item.category}
              </span>
            </div>

            {/* Nome */}
            <div className="absolute bottom-5 left-5 right-5 sm:bottom-7 sm:left-7 sm:right-7">
              <p className="text-sm font-medium text-white/80">História de</p>

              <h3 className="mt-1 text-2xl font-black tracking-tight text-white sm:text-3xl">
                {item.person}
              </h3>
            </div>
          </>
        ) : (
          <div className="relative flex h-full min-h-[280px] items-center justify-center overflow-hidden bg-primary-light sm:min-h-[360px] lg:min-h-full">
            {/* Decorative background */}
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-primary-main/10" />
            <div className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-primary-main/10" />

            <div className="relative flex flex-col items-center px-8 text-center">
              <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-white text-primary-main shadow-sm">
                <Icon icon="solar:heart-angle-linear" width={40} height={40} />
              </div>

              <p className="text-sm font-semibold text-primary-main">
                História de
              </p>

              <h3 className="mt-1 text-2xl font-black text-text sm:text-3xl">
                {item.person}
              </h3>
            </div>
          </div>
        )}

        {/* Indicador */}
        <div className="absolute bottom-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-primary-main shadow-sm backdrop-blur-sm sm:bottom-7 sm:right-7">
          <span className="text-sm font-black">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10 xl:p-12">
        <div className="mb-5 flex items-center gap-2 text-primary-main">
          <div className="h-px w-8 bg-primary-main" />
          <span className="text-xs font-bold uppercase tracking-[0.18em]">
            Uma nova história
          </span>
        </div>

        <h3 className="max-w-xl text-2xl font-black leading-tight text-text sm:text-3xl lg:text-4xl">
          {item.title}
        </h3>

        <p className="mt-4 text-sm leading-7 text-text-secondary sm:text-base">
          {item.summary}
        </p>

        {/* Mensagem principal */}
        <div className="relative mt-7 overflow-hidden rounded-2xl bg-primary-light p-5 sm:p-6">
          <Icon
            icon="solar:quote-up-square-linear"
            width={28}
            height={28}
            className="absolute right-4 top-4 text-primary-main/20"
          />

          <div className="flex gap-3">
            <div className="mt-1 shrink-0 text-primary-main">
              <Icon icon="solar:heart-angle-linear" width={22} height={22} />
            </div>

            <p className="text-sm font-semibold leading-6 text-primary-dark sm:text-base">
              {item.message}
            </p>
          </div>
        </div>

        {/* Link / referência */}
        {item.references?.length > 0 && (
          <a
            href={item.references[0].url}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link mt-7 inline-flex w-fit items-center gap-2 text-sm font-bold text-primary-main transition-colors hover:text-primary-dark"
          >
            Conheça essa história
            <Icon
              icon="solar:arrow-right-linear"
              width={19}
              height={19}
              className="transition-transform group-hover/link:translate-x-1"
            />
          </a>
        )}

        {/* Crédito da imagem */}
        {hasImage && item.image.credit && (
          <p className="mt-5 text-[11px] leading-4 text-text-secondary/70">
            Foto: {item.image.credit}
            {item.image.license && ` · ${item.image.license}`}
          </p>
        )}
      </div>
    </article>
  );
}

export default function Cases() {
  return (
    <section className="relative overflow-hidden bg-background px-6 py-16 sm:px-12 sm:py-20 lg:px-[96px] lg:py-24">
      {/* Elementos decorativos */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-20 h-72 w-72 rounded-full bg-primary-light/60 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 bottom-20 h-72 w-72 rounded-full bg-primary-light/50 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <header className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary-light px-4 py-2 text-xs font-bold uppercase tracking-wider text-primary-dark">
            <Icon icon="solar:heart-angle-linear" width={16} height={16} />
            Histórias de recomeço
          </div>

          <h2 className="text-3xl font-black tracking-tight text-text sm:text-4xl lg:text-5xl">
            Existem novos caminhos{" "}
            <span className="text-primary-main">depois da violência.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-text-secondary sm:text-base">
            Conheça histórias de pessoas que encontraram proteção, apoio e força
            para reconstruir suas vidas. Porque pedir ajuda também é uma forma
            de recomeçar.
          </p>
        </header>

        {/* Timeline */}
        <div className="relative">
          {/* Linha central — apenas desktop */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 bg-primary-light lg:block"
          />

          <div className="relative flex flex-col gap-8 sm:gap-10 lg:gap-12">
            {data.map((item, index) => (
              <div key={item.id} className="relative">
                {/* Marcador da timeline */}
                <div
                  aria-hidden="true"
                  className="absolute left-1/2 top-1/2 z-10 hidden h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-background bg-primary-main shadow-sm lg:block"
                />

                <CaseCard item={item} index={index} />
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 flex flex-col items-center text-center sm:mt-16">
          <div className="flex items-center gap-2 text-primary-main">
            <Icon icon="solar:hand-heart-linear" width={22} height={22} />

            <span className="text-sm font-bold">
              Você não precisa passar por isso sozinha.
            </span>
          </div>

          <p className="mt-2 max-w-xl text-xs leading-5 text-text-secondary sm:text-sm">
            A AURA reúne informações e caminhos para que você possa encontrar
            apoio, proteção e orientação.
          </p>
        </div>
      </div>
    </section>
  );
}
