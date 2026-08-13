import { Icon } from "@iconify/react";
import cemarisReport from "@/assets/panorama_dados.pdf";

const sources = [
  {
    category: "Órgãos públicos",
    items: [
      {
        name: "Ministério das Mulheres",
        description:
          "Informações, políticas públicas e materiais relacionados ao enfrentamento da violência contra as mulheres.",
        icon: "solar:buildings-2-bold",
        url: "https://www.gov.br/mulheres/pt-br",
      },
      {
        name: "Ministério do Desenvolvimento e Assistência Social",
        description:
          "Informações relacionadas à assistência social e à rede de proteção e atendimento.",
        icon: "solar:home-2-bold",
        url: "https://www.gov.br/mds/pt-br",
      },
      {
        name: "Conselho Nacional de Justiça",
        description:
          "Dados, pesquisas e informações sobre a atuação do Judiciário no enfrentamento à violência contra a mulher.",
        icon: "solar:scale-bold",
        url: "https://www.cnj.jus.br/",
      },
    ],
  },
  {
    category: "Dados e pesquisas",
    items: [
      {
        name: "CEMARIS",
        description:
          "Painel de dados oficiais sobre violência contra a mulher em Sobral, utilizado como base para o Panorama apresentado no AURA.",
        icon: "solar:chart-square-bold",
        url: cemarisReport,
        download: "painel-cemaris-2026.pdf",
      },
      {
        name: "Fórum Brasileiro de Segurança Pública",
        description:
          "Pesquisas e dados sobre segurança pública e violência contra mulheres no Brasil.",
        icon: "solar:chart-2-bold",
        url: "https://forumseguranca.org.br/",
      },
      {
        name: "Instituto Brasileiro de Geografia e Estatística",
        description:
          "Dados estatísticos e informações sociodemográficas utilizadas como referência.",
        icon: "solar:graph-up-bold",
        url: "https://www.ibge.gov.br/",
      },
    ],
  },
  {
    category: "Serviços e informações",
    items: [
      {
        name: "Ligue 180",
        description:
          "Canal oficial de atendimento e orientação para mulheres em situação de violência.",
        icon: "solar:phone-calling-bold",
        url: "https://www.gov.br/mulheres/pt-br/ligue180",
      },
      {
        name: "Polícia Militar — 190",
        description:
          "Canal de emergência para situações que necessitam de atendimento policial imediato.",
        icon: "solar:phone-bold",
        url: "https://www.pm.ce.gov.br/",
      },
    ],
  },
];

export default function Sources() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-[#F8F6FC] px-6 py-20 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-[#6C3EB8]">
            Referências
          </span>

          <h1 className="mt-3 text-4xl font-black tracking-tight text-[#2D2D2D] sm:text-5xl">
            Fontes do <span className="text-[#6C3EB8]">AURA</span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-gray-600 sm:text-lg">
            Conheça as principais fontes utilizadas como referência para os
            conteúdos, dados e informações apresentados pelo AURA.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="px-6 py-16 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-3xl bg-[#F8F6FC] p-8 sm:p-10">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm">
                <Icon
                  icon="solar:book-2-bold"
                  width={28}
                  height={28}
                  className="text-[#6C3EB8]"
                />
              </div>

              <div>
                <h2 className="text-2xl font-black text-[#2D2D2D]">
                  Informação baseada em fontes confiáveis
                </h2>

                <p className="mt-3 max-w-4xl leading-7 text-gray-600">
                  O AURA utiliza informações provenientes de órgãos públicos,
                  instituições de pesquisa e canais oficiais. As fontes são
                  utilizadas como referência para a construção dos conteúdos
                  educativos e para a apresentação dos serviços disponíveis na
                  rede de proteção.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sources */}
      <section className="bg-[#F8F6FC] px-6 py-20 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-6xl">
          {sources.map((category) => (
            <div key={category.category} className="mb-14 last:mb-0">
              <div className="flex items-center gap-3">
                <div className="h-8 w-1 rounded-full bg-[#6C3EB8]" />

                <h2 className="text-2xl font-black text-[#2D2D2D]">
                  {category.category}
                </h2>
              </div>

              <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {category.items.map((source) => (
                  <article
                    key={source.name}
                    className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50">
                      <Icon
                        icon={source.icon}
                        width={25}
                        height={25}
                        className="text-[#6C3EB8]"
                      />
                    </div>

                    <h3 className="mt-5 text-lg font-bold text-[#2D2D2D]">
                      {source.name}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-gray-500">
                      {source.description}
                    </p>
                    <a
                      href={source.url}
                      {...(source.download
                        ? { download: source.download }
                        : { target: "_blank", rel: "noopener noreferrer" })}
                      aria-label={
                        source.download
                          ? `Baixar PDF: ${source.name}`
                          : `Acessar fonte: ${source.name}`
                      }
                      className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#6C3EB8] transition group-hover:gap-3"
                    >
                      {source.download ? "Baixar PDF" : "Acessar fonte"}
                      <Icon
                        icon={
                          source.download
                            ? "solar:file-download-linear"
                            : "solar:arrow-right-linear"
                        }
                        width={18}
                        height={18}
                      />
                    </a>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Academic context */}
      <section className="px-6 py-20 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-3xl border border-purple-100 bg-white p-8 text-center shadow-sm sm:p-10">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-50">
              <Icon
                icon="solar:document-text-bold"
                width={28}
                height={28}
                className="text-[#6C3EB8]"
              />
            </div>

            <h2 className="mt-5 text-2xl font-black text-[#2D2D2D]">
              Referências utilizadas no projeto
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
              As fontes apresentadas nesta página fazem parte do levantamento
              realizado durante o desenvolvimento acadêmico do AURA e ajudam a
              garantir que os conteúdos estejam fundamentados em informações
              públicas e institucionais.
            </p>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="px-6 pb-16 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-4xl rounded-2xl border border-amber-100 bg-amber-50 p-6">
          <div className="flex gap-4">
            <Icon
              icon="solar:info-circle-bold"
              width={24}
              height={24}
              className="mt-0.5 shrink-0 text-amber-600"
            />

            <div>
              <h3 className="font-bold text-amber-900">Sobre as informações</h3>

              <p className="mt-2 text-sm leading-6 text-amber-800">
                As informações disponibilizadas pelo AURA têm caráter
                informativo e educacional. Para informações atualizadas,
                procedimentos oficiais ou atendimento, consulte diretamente os
                órgãos e serviços responsáveis.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
