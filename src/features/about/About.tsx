import { Icon } from "@iconify/react";

export default function About() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="px-6 py-20 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-100">
            <Icon
              icon="material-symbols-light:shield-with-heart"
              width={36}
              height={36}
              className="text-[#6C3EB8]"
            />
          </div>

          <h1 className="text-4xl font-black tracking-tight text-[#2D2D2D] sm:text-5xl">
            Sobre o <span className="text-[#6C3EB8]">AURA</span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-gray-600 sm:text-lg">
            O AURA é um projeto desenvolvido com o propósito de facilitar o
            acesso à informação, aos serviços públicos e à rede de apoio
            disponível para mulheres em situação de violência.
          </p>
        </div>
      </section>

      {/* About the project */}
      <section className="bg-[#F8F6FC] px-6 py-16 sm:px-10 lg:px-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-sm font-bold uppercase tracking-wider text-[#6C3EB8]">
              O projeto
            </span>

            <h2 className="mt-3 text-3xl font-black text-[#2D2D2D]">
              Informação também é uma forma de proteção.
            </h2>

            <p className="mt-5 leading-7 text-gray-600">
              Em situações de violência, encontrar informações confiáveis e
              entender quais serviços procurar pode ser difícil. O AURA foi
              pensado para reunir essas informações em um único lugar,
              apresentando os principais serviços da rede de proteção de forma
              simples, acessível e organizada.
            </p>

            <p className="mt-4 leading-7 text-gray-600">
              A plataforma apresenta informações sobre serviços como Delegacias
              da Mulher, CREAS, CRAS, serviços de saúde, órgãos do Judiciário e
              canais de emergência, ajudando a aproximar as pessoas dos serviços
              que podem oferecer atendimento e proteção.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <Icon
                  icon="solar:shield-check-bold"
                  width={30}
                  height={30}
                  className="text-[#6C3EB8]"
                />

                <h3 className="mt-4 font-bold text-[#2D2D2D]">
                  Informação confiável
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Conteúdos organizados para facilitar o entendimento e a busca
                  por ajuda.
                </p>
              </div>

              <div>
                <Icon
                  icon="solar:map-point-bold"
                  width={30}
                  height={30}
                  className="text-[#6C3EB8]"
                />

                <h3 className="mt-4 font-bold text-[#2D2D2D]">Rede de apoio</h3>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Localização de serviços e organizações que fazem parte da rede
                  de proteção.
                </p>
              </div>

              <div>
                <Icon
                  icon="solar:phone-calling-bold"
                  width={30}
                  height={30}
                  className="text-[#6C3EB8]"
                />

                <h3 className="mt-4 font-bold text-[#2D2D2D]">
                  Acesso facilitado
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Acesso rápido aos canais de contato e serviços disponíveis.
                </p>
              </div>

              <div>
                <Icon
                  icon="solar:users-group-rounded-bold"
                  width={30}
                  height={30}
                  className="text-[#6C3EB8]"
                />

                <h3 className="mt-4 font-bold text-[#2D2D2D]">Conexão</h3>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Aproxima pessoas dos serviços que podem oferecer acolhimento e
                  orientação.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What AURA offers */}
      <section className="px-6 py-20 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <span className="text-sm font-bold uppercase tracking-wider text-[#6C3EB8]">
              O que você encontra
            </span>

            <h2 className="mt-3 text-3xl font-black text-[#2D2D2D]">
              Uma plataforma para encontrar o caminho até a ajuda.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: "solar:phone-bold",
                title: "Canais de emergência",
                description:
                  "Informações sobre canais que podem ser acionados em situações de emergência.",
              },
              {
                icon: "solar:buildings-2-bold",
                title: "Organizações",
                description:
                  "Conheça os principais serviços que fazem parte da rede de proteção.",
              },
              {
                icon: "solar:map-bold",
                title: "Mapa de apoio",
                description:
                  "Encontre serviços e organizações próximos à sua localização.",
              },
              {
                icon: "solar:info-circle-bold",
                title: "Informação",
                description:
                  "Conteúdos para ajudar a compreender diferentes formas de violência e onde buscar ajuda.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50">
                  <Icon
                    icon={item.icon}
                    width={25}
                    height={25}
                    className="text-[#6C3EB8]"
                  />
                </div>

                <h3 className="mt-5 font-bold text-[#2D2D2D]">{item.title}</h3>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic project */}
      <section className="bg-[#6C3EB8] px-6 py-16 text-white sm:px-10 lg:px-20">
        <div className="mx-auto max-w-4xl text-center">
          <Icon
            icon="solar:code-square-bold"
            width={40}
            height={40}
            className="mx-auto"
          />

          <h2 className="mt-5 text-3xl font-black">
            Um projeto acadêmico com propósito social
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-purple-100">
            O AURA foi desenvolvido como um projeto universitário, unindo
            tecnologia, design e informação para criar uma solução digital
            voltada à conscientização e ao acesso à rede de proteção.
          </p>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="px-6 py-12 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-4xl rounded-2xl border border-amber-100 bg-amber-50 p-6">
          <div className="flex gap-4">
            <Icon
              icon="solar:danger-triangle-bold"
              width={24}
              height={24}
              className="mt-0.5 shrink-0 text-amber-600"
            />

            <div>
              <h3 className="font-bold text-amber-900">Importante</h3>

              <p className="mt-2 text-sm leading-6 text-amber-800">
                O AURA é um projeto acadêmico e suas informações devem ser
                utilizadas como orientação. Em situações de emergência ou perigo
                imediato, procure os serviços oficiais de emergência e proteção.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
